import React, { useState, useMemo } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { Search, Mic } from "lucide-react-native";
import firstAidData from "../../data/firstAidData.json";
import { useTranslation } from "react-i18next";

export const SearchBar = ({ onSearchChange, onSelectSuggestion }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Generate suggestions from first aid data
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    const allSuggestions = [];

    const guides = Array.isArray(firstAidData?.guides)
      ? firstAidData.guides
      : [];

    // Category suggestions derived from guide.category (since data is a flat list)
    const categories = Array.from(
      new Set(
        guides
          .map((g) => g?.category)
          .filter((c) => typeof c === "string" && c.trim().length > 0)
      )
    );

    categories.forEach((category) => {
      if (category.toLowerCase().includes(query)) {
        const displayTitle = t(`categories.${category}`, {
          defaultValue: category,
        });
        allSuggestions.push({
          id: `cat-${category}`,
          title: displayTitle,
          type: "category",
          data: { category },
        });
      }
    });

    // Search through guides (flat structure)
    guides.forEach((guide) => {
      const title = typeof guide?.title === "string" ? guide.title : "";
      const category =
        typeof guide?.category === "string" ? guide.category : "";

      if (title.toLowerCase().includes(query)) {
        allSuggestions.push({
          id: `guide-${guide?.id ?? title}`,
          title,
          type: "guide",
          category,
          data: guide,
        });
      }
    });

    return allSuggestions.slice(0, 8); // Limit to 8 suggestions
  }, [searchQuery]);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    setShowSuggestions(text.length > 0);
    if (onSearchChange) {
      onSearchChange(text);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    if (onSelectSuggestion) {
      onSelectSuggestion(suggestion);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
    if (onSearchChange) {
      onSearchChange("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <View style={styles.leftIcon}>
          <Search size={20} color="#000000" strokeWidth={2} />
        </View>

        <TextInput
          style={styles.input}
          placeholder={t("home.search_placeholder", {
            defaultValue: "Search first aid guides...",
          })}
          placeholderTextColor="#999999"
          value={searchQuery}
          onChangeText={handleSearchChange}
          onFocus={() => searchQuery && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />

        <Pressable
          style={styles.rightIcon}
          onPress={() => {
            // Placeholder for voice search functionality
            console.log("Voice search tapped");
          }}
        >
          <Mic size={20} color="#000000" strokeWidth={2} />
        </Pressable>

        {searchQuery && (
          <Pressable style={styles.clearButton} onPress={handleClearSearch}>
            <Text style={styles.clearText}>✕</Text>
          </Pressable>
        )}
      </View>

      {showSuggestions && suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleSelectSuggestion(item)}
                style={({ pressed }) => [
                  styles.suggestionItem,
                  pressed && styles.suggestionItemPressed,
                ]}
              >
                <View style={styles.suggestionContent}>
                  <Text style={styles.suggestionTitle}>{item.title}</Text>
                  {item.category && (
                    <Text style={styles.suggestionCategory}>
                      {t("home.in_category", {
                        defaultValue: "in",
                      })}{" "}
                      {t(`categories.${item.category}`, {
                        defaultValue: item.category,
                      })}
                    </Text>
                  )}
                </View>
                <Text style={styles.suggestionType}>
                  {item.type === "category" ? "📁" : "📄"}
                </Text>
              </Pressable>
            )}
          />
        </View>
      )}

      {showSuggestions && searchQuery && suggestions.length === 0 && (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            {t("home.no_results", { defaultValue: "No guides found" })}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginHorizontal: 16,
    marginVertical: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  leftIcon: {
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
    fontWeight: "500",
    paddingVertical: 0,
  },
  rightIcon: {
    marginLeft: 8,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  clearButton: {
    marginLeft: 4,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  clearText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#666666",
  },
  suggestionsContainer: {
    position: "absolute",
    top: 56,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 8,
    marginHorizontal: 0,
    maxHeight: 280,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
    zIndex: 1000,
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  suggestionItemPressed: {
    backgroundColor: "#fef3c7",
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 2,
  },
  suggestionCategory: {
    fontSize: 12,
    color: "#666666",
    fontWeight: "400",
  },
  suggestionType: {
    fontSize: 16,
    marginLeft: 8,
  },
  noResultsContainer: {
    position: "absolute",
    top: 56,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
    zIndex: 1000,
  },
  noResultsText: {
    fontSize: 14,
    color: "#666666",
    fontWeight: "500",
  },
});

export default SearchBar;

import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Header } from "../components/layout/Header";
import { EmergencyButton } from "../components/ui/EmergencyButton";
import { SearchBar } from "../components/ui/SearchBar";
import { CategoryCard } from "../components/ui/CategoryCard";
import { Card } from "../components/ui/Card";
import firstAidData from "../data/firstAidData.json";
import { storage } from "../utils/storage";
import OfflineBanner from "../components/OfflineBanner";
import useOffline from "../hooks/useOffline";
import { useLanguage } from "../context/LanguageContext";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;
const COLUMNS = isTablet ? 4 : 2;

export default function HomeScreen({ navigation }) {
  const isOffline = useOffline();
  const { t } = useTranslation();
  const { translateGuide, translateCategory } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    loadRecentSearches();
    cacheOfflineData();
    loadHideRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    const searches = await storage.getRecentSearches();
    setRecentSearches(searches);
  };

  const loadHideRecentSearches = async () => {
    const hide = await storage.getHideRecentSearches();
    if (hide) setHasSearched(true);
  };

  const cacheOfflineData = async () => {
    // Cache the entire first aid data for offline access
    await storage.saveOfflineData(firstAidData);
  };

  const handleSearch = (query) => {
    const q = (query || "").trim();
    setSearchQuery(q);

    // Once the user starts searching, don't show the recent searches section again
    // during this session and across restarts.
    if (!hasSearched && q.length > 0) {
      setHasSearched(true);
      storage.setHideRecentSearches(true);
    }

    if (!q) {
      setFilteredGuides([]);
      return;
    }

    // Save search query (keeps max 5 in storage)
    storage.saveRecentSearch(q);

    const qLower = q.toLowerCase();

    // Simple fuzzy match: check if all chars of query appear in order
    const fuzzyMatch = (text, queryStr) => {
      if (!text || !queryStr) return false;
      let ti = 0;
      const t = text.toLowerCase();
      for (let qi = 0; qi < queryStr.length; qi++) {
        const ch = queryStr[qi].toLowerCase();
        ti = t.indexOf(ch, ti);
        if (ti === -1) return false;
        ti += 1;
      }
      return true;
    };

    const scoreGuide = (guide) => {
      const title = guide.title.toLowerCase();
      const category = guide.category.toLowerCase();
      const keywords = (guide.keywords || []).map((k) => k.toLowerCase());

      let score = 0;
      // Title exact contains
      if (title.includes(qLower)) score += 5;
      // Keyword contains
      if (keywords.some((k) => k.includes(qLower))) score += 3;
      // Category contains
      if (category.includes(qLower)) score += 2;
      // Fuzzy title
      if (score === 0 && fuzzyMatch(title, qLower)) score += 1;

      return score;
    };

    const filtered = firstAidData.guides
      .map((g) => ({ guide: g, score: scoreGuide(g) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => translateGuide(x.guide)); // Apply translations to search results

    setFilteredGuides(filtered);
  };

  const handleSelectSuggestion = (suggestion) => {
    // Suggestions can be categories or guides.
    if (!suggestion) return;

    setSearchQuery(suggestion.title);
    storage.saveRecentSearch(suggestion.title);

    if (suggestion.type === "guide" && suggestion.data) {
      navigation && navigation.navigate("Guide", { guide: suggestion.data });
      return;
    }

    if (suggestion.type === "category" && suggestion.data?.category) {
      navigation &&
        navigation.navigate("Category", { category: suggestion.data.category });
    }
  };

  const handleCategoryPress = (categoryName) => {
    if (navigation) {
      navigation.navigate("Category", { category: categoryName });
    }
  };

  // Map category names to icons and colors
  const categoryIconMap = {
    CPR: "Heart",
    Choking: "Slash",
    Bleeding: "Droplet",
    Burns: "Flame",
    Shock: "Zap",
    Allergies: "AlertTriangle",
    Poisoning: "Skull",
    Fractures: "Bone",
    "Head Injury": "AlertCircle",
    "Heart Attack": "Heart",
    Stroke: "AlertTriangle",
  };

  const categoryColorMap = {
    CPR: "red",
    Choking: "red",
    Bleeding: "blue",
    Burns: "orange",
    Shock: "yellow",
    Allergies: "green",
    Poisoning: "purple",
    Fractures: "pink",
    "Head Injury": "blue",
    "Heart Attack": "red",
    Stroke: "red",
  };

  // Get unique categories from guides
  const categories = Array.from(
    new Map(
      firstAidData.guides.map((guide) => [
        guide.category,
        {
          name: guide.category,
          displayName: translateCategory(guide.category),
          icon: categoryIconMap[guide.category] || "HelpCircle",
          color: categoryColorMap[guide.category] || "blue",
        },
      ])
    ).values()
  );

  const renderCategoryCard = ({ item }) => (
    <View style={styles.categoryCardContainer}>
      <CategoryCard
        title={item.displayName || item.name}
        icon={item.icon}
        color={item.color}
        onPress={() => handleCategoryPress(item.name)}
      />
    </View>
  );

  // Highlight matched query in text
  const renderHighlightedText = (text, query, baseStyle, highlightStyle) => {
    if (!query) return <Text style={baseStyle}>{text}</Text>;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "ig");
    const result = [];
    let lastIndex = 0;
    const str = text || "";
    for (const match of str.matchAll(regex)) {
      const start = match.index ?? 0;
      const end = start + match[0].length;
      if (start > lastIndex) {
        result.push(
          <Text key={`t-${lastIndex}`} style={baseStyle}>
            {str.slice(lastIndex, start)}
          </Text>
        );
      }
      result.push(
        <Text key={`h-${start}`} style={[baseStyle, highlightStyle]}>
          {str.slice(start, end)}
        </Text>
      );
      lastIndex = end;
    }
    if (lastIndex < str.length) {
      result.push(
        <Text key={`t-${lastIndex}-end`} style={baseStyle}>
          {str.slice(lastIndex)}
        </Text>
      );
    }
    return <Text>{result}</Text>;
  };

  const renderResultItem = ({ item }) => (
    <View style={styles.resultCard}>
      <Pressable
        accessibilityRole="button"
        onPress={() =>
          navigation && navigation.navigate("Guide", { guide: item })
        }
        style={({ pressed }) => [pressed && { opacity: 0.9 }]}
      >
        <Card variant="primary" style={styles.resultItem}>
          <View>
            {renderHighlightedText(
              item.title,
              searchQuery,
              styles.resultTitle,
              styles.resultHighlight
            )}
            {renderHighlightedText(
              item.category,
              searchQuery,
              styles.resultCategory,
              styles.resultHighlight
            )}
          </View>
        </Card>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom", "left", "right"]}
    >
      <Header title="" showBack={false} />
      <OfflineBanner visible={isOffline} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Search Bar */}
        <View style={styles.searchSection}>
          <SearchBar
            onSearchChange={handleSearch}
            onSelectSuggestion={handleSelectSuggestion}
          />
        </View>

        {/* Search Results or Categories */}
        {searchQuery.trim() ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t("home.search_results")}</Text>
            {filteredGuides.length > 0 ? (
              <FlatList
                data={filteredGuides}
                renderItem={renderResultItem}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
              />
            ) : (
              <Text style={styles.noResults}>{t("home.no_results")}</Text>
            )}
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t("home.emergency_categories")}
            </Text>
            <FlatList
              data={categories}
              renderItem={renderCategoryCard}
              keyExtractor={(item) => item.name}
              key={`categories-${COLUMNS}`}
              numColumns={COLUMNS}
              scrollEnabled={false}
              columnWrapperStyle={styles.columnWrapper}
            />
          </View>
        )}

        {/* Recent Searches intentionally disabled */}

        {/* Emergency Button */}
        <View style={styles.emergencySection}>
          <EmergencyButton />
        </View>

        {/* Footer Disclaimer */}
        <View style={styles.footer}>
          <Text style={styles.disclaimerText}>{t("home.disclaimer")}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAE6", // Warm amber background
  },
  header: {
    backgroundColor: "#FFFAE6",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    letterSpacing: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  emergencySection: {
    padding: 16,
    paddingTop: 12,
  },
  searchSection: {
    paddingHorizontal: 0,
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 12,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 4,
  },
  categoryCardContainer: {
    flex: 1 / COLUMNS,
    marginBottom: 12,
    paddingHorizontal: 2,
  },
  resultCard: {
    marginBottom: 10,
  },
  resultItem: {
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 4,
  },
  resultCategory: {
    fontSize: 12,
    color: "#ffffff",
    opacity: 0.8,
  },
  resultHighlight: {
    color: "#000000",
    backgroundColor: "#fbbf24",
    paddingHorizontal: 2,
    borderRadius: 4,
  },
  noResults: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginTop: 16,
    fontStyle: "italic",
  },
  recentSearches: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  searchChip: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
  },
  searchChipText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000000",
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#ffffff",
    borderTopWidth: 2,
    borderTopColor: "#000000",
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  disclaimerText: {
    fontSize: 12,
    color: "#333333",
    lineHeight: 18,
    fontWeight: "500",
  },
});

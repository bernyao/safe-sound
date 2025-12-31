import React, { useMemo } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { Header } from "../components/layout/Header";
import { Card } from "../components/ui/Card";
import firstAidData from "../data/firstAidData.json";
import { useLanguage } from "../context/LanguageContext";
import OfflineBanner from "../components/OfflineBanner";
import useOffline from "../hooks/useOffline";

const SEVERITY_COLORS = {
  critical: { bg: "danger", text: "Critical" },
  major: { bg: "warning", text: "Major" },
  minor: { bg: "info", text: "Minor" },
};

const CATEGORY_ICONS = {
  CPR: "❤️",
  Choking: "🫁",
  Bleeding: "🩹",
  Burns: "🔥",
  Shock: "⚡",
  Allergies: "🤧",
  Poisoning: "☠️",
  Fractures: "🦴",
  "Head Injury": "🧠",
  "Heart Attack": "💔",
  Stroke: "🧠",
};

export default function CategoryScreen({ route, navigation }) {
  const isOffline = useOffline();
  const { translateGuide, translateCategory } = useLanguage();
  const category = route.params?.category;
  // Removed the intermediate "Key Steps" expand/collapse UI.

  // Filter guides by category
  const guides = useMemo(() => {
    return firstAidData.guides
      .filter((guide) => guide.category === category)
      .map((guide) => translateGuide(guide)); // Apply translations
  }, [category, translateGuide]);

  const categoryIcon = CATEGORY_ICONS[category] || "📋";

  const renderGuideCard = ({ item }) => {
    const severityInfo =
      SEVERITY_COLORS[item.severity] || SEVERITY_COLORS.minor;
    const briefDescription =
      item.steps[0]?.instruction?.substring(0, 60) ||
      "First aid guide for this emergency";
    const isExpanded = false;

    return (
      <View style={styles.guideCardWrapper}>
        <Card
          variant="primary"
          style={styles.guideCard}
          onPress={() => {
            navigation.navigate("Guide", { guide: item });
          }}
        >
          <View style={styles.guideHeader}>
            <View style={styles.guideInfo}>
              <Text style={styles.guideTitle}>{item.title}</Text>
              <Text style={styles.guideDescription} numberOfLines={2}>
                {briefDescription}...
              </Text>
            </View>
            <View
              style={[
                styles.severityBadge,
                {
                  backgroundColor:
                    severityInfo.bg === "danger"
                      ? "#ef4444"
                      : severityInfo.bg === "warning"
                      ? "#fbbf24"
                      : "#3b82f6",
                },
              ]}
            >
              <Text style={styles.severityText}>
                {severityInfo.text.substring(0, 1)}
              </Text>
            </View>
          </View>
          <Text style={styles.chevron}>→</Text>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom", "left", "right"]}
    >
      <OfflineBanner visible={isOffline} />
      <Header title={translateCategory(category)} showBack={true} />
      {guides.length > 0 ? (
        <FlatList
          data={guides}
          renderItem={renderGuideCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          scrollEnabled={true}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>📭</Text>
          <Text style={styles.emptyTitle}>No Guides Yet</Text>
          <Text style={styles.emptyText}>
            No guides available in this category at the moment.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAE6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
    backgroundColor: "#FFFAE6",
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  categoryIcon: {
    fontSize: 28,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
  },
  headerSpacer: {
    width: 44,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  guideCardWrapper: {
    marginBottom: 12,
  },
  pressed: {
    opacity: 0.8,
  },
  guideCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  guideHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  guideInfo: {
    flex: 1,
  },
  guideTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 4,
  },
  guideDescription: {
    fontSize: 12,
    color: "#ffffff",
    opacity: 0.85,
    lineHeight: 16,
  },
  severityBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
  },
  severityText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
  chevron: {
    fontSize: 18,
    color: "#ffffff",
    marginLeft: 8,
  },
  expandedSection: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    gap: 8,
  },
  expandedContent: {
    gap: 6,
  },
  expandedTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#000000",
  },
  expandedStep: {
    fontSize: 12,
    color: "#333333",
    lineHeight: 18,
  },
  openButton: {
    alignSelf: "flex-start",
    backgroundColor: "#f97316",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3,
  },
  openButtonPressed: {
    shadowOffset: { width: 1, height: 1 },
    elevation: 1,
  },
  openButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 0.5,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
  },
});

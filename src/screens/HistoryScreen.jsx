import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import { Trash2, Eye, Clock } from "lucide-react-native";
import { Card } from "../components/ui/Card";
import { storage } from "../utils/storage";
import firstAidData from "../data/firstAidData.json";
import { useLanguage } from "../context/LanguageContext";
import { Header } from "../components/layout/Header";
import { useTranslation } from "react-i18next";

export default function HistoryScreen({ navigation }) {
  const { t } = useTranslation();
  const { translateCategory } = useLanguage();
  const [viewedGuides, setViewedGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadViewedGuides();
  }, []);

  const loadViewedGuides = async () => {
    try {
      const guides = await storage.getViewedGuides();
      setViewedGuides(guides);
      setLoading(false);
    } catch (error) {
      console.error("Error loading viewed guides:", error);
      setLoading(false);
    }
  };

  const handleDeleteGuide = (guideId) => {
    Alert.alert(
      t("history.remove_from_history", { defaultValue: "Remove from History" }),
      t("history.remove_confirm", {
        defaultValue:
          "Are you sure you want to remove this guide from history?",
      }),
      [
        {
          text: t("common.cancel", { defaultValue: "Cancel" }),
          onPress: () => {},
        },
        {
          text: t("common.delete", { defaultValue: "Delete" }),
          onPress: async () => {
            // Remove from viewed list by guideId
            const updated = viewedGuides.filter((g) => g.guideId !== guideId);
            setViewedGuides(updated);
            await storage.clearViewedGuides();
            // Re-add all except deleted
            for (const guide of updated) {
              await storage.markGuideAsViewed(
                guide.guideId,
                guide.title,
                guide.category
              );
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleClearAllHistory = () => {
    Alert.alert(
      t("history.clear_history", { defaultValue: "Clear History" }),
      t("history.clear_all_confirm", {
        defaultValue:
          "This will permanently delete your entire viewing history. This action cannot be undone.",
      }),
      [
        {
          text: t("common.cancel", { defaultValue: "Cancel" }),
          onPress: () => {},
        },
        {
          text: t("history.clear_all", { defaultValue: "Clear All" }),
          onPress: async () => {
            await storage.clearViewedGuides();
            setViewedGuides([]);
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleOpenGuide = (guide) => {
    // Find the full guide data from source by guideId and navigate
    const fullGuide = firstAidData.guides.find((g) => g.id === guide.guideId);
    if (navigation && fullGuide) {
      navigation.navigate("Guide", { guide: fullGuide });
    } else if (!fullGuide) {
      Alert.alert(
        t("common.not_found", { defaultValue: "Not Found" }),
        t("history.original_guide_not_found", {
          defaultValue: "Original guide content could not be found.",
        })
      );
    }
  };

  const renderHistoryItem = ({ item }) => (
    <Pressable
      onPress={() => handleOpenGuide(item)}
      style={({ pressed }) => [
        styles.historyCard,
        pressed && styles.historyCardPressed,
      ]}
    >
      <View style={styles.cardContent}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardCategory}>
            {translateCategory(item.category)}
          </Text>
          <View style={styles.viewedTimeContainer}>
            <Clock size={12} color="#666666" />
            <Text style={styles.viewedTime}>
              {item.viewedAt
                ? new Date(item.viewedAt).toLocaleDateString()
                : "Recently viewed"}
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => handleDeleteGuide(item.guideId)}
          style={({ pressed }) => [
            styles.deleteButton,
            pressed && styles.deleteButtonPressed,
          ]}
        >
          <Trash2 size={18} color="#ef4444" strokeWidth={2} />
        </Pressable>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={t("common.history_tab", { defaultValue: "History" })}
        showBack={false}
        showLogo={false}
      />
      {viewedGuides.length > 0 ? (
        <>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Info Banner */}
            <View style={styles.infoSection}>
              <Card variant="info" style={styles.infoBanner}>
                <View style={styles.infoBannerContent}>
                  <Eye size={20} color="#ffffff" />
                  <Text style={styles.infoBannerText}>
                    {t("history.guides_viewed", {
                      count: viewedGuides.length,
                      defaultValue:
                        viewedGuides.length === 1
                          ? "{{count}} guide viewed"
                          : "{{count}} guides viewed",
                    })}
                  </Text>
                </View>
              </Card>
            </View>

            {/* History List */}
            <FlatList
              data={viewedGuides}
              renderItem={renderHistoryItem}
              keyExtractor={(item) => item.guideId}
              scrollEnabled={false}
              contentContainerStyle={styles.listContent}
            />

            {/* Clear History Button */}
            {viewedGuides.length > 0 && (
              <View style={styles.clearButtonContainer}>
                <Pressable
                  onPress={handleClearAllHistory}
                  style={({ pressed }) => [
                    styles.clearButton,
                    pressed && styles.clearButtonPressed,
                  ]}
                >
                  <Trash2 size={18} color="#ffffff" strokeWidth={2} />
                  <Text style={styles.clearButtonText}>
                    {t("history.clear_all_history", {
                      defaultValue: "Clear All History",
                    })}
                  </Text>
                </Pressable>
              </View>
            )}
          </ScrollView>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📋</Text>
          <Text style={styles.emptyTitle}>
            {t("history.empty_title", { defaultValue: "No Guides Viewed Yet" })}
          </Text>
          <Text style={styles.emptyText}>
            {t("history.empty_desc", {
              defaultValue:
                "Your viewing history will appear here as you explore guides.",
            })}
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  infoSection: {
    padding: 16,
    paddingTop: 12,
  },
  infoBanner: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  infoBannerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  infoBannerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  historyCard: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  historyCardPressed: {
    shadowOffset: { width: 1, height: 1 },
    elevation: 1,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666666",
    marginBottom: 6,
  },
  viewedTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  viewedTime: {
    fontSize: 11,
    color: "#999999",
  },
  deleteButton: {
    padding: 8,
    borderWidth: 2,
    borderColor: "#ef4444",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  deleteButtonPressed: {
    backgroundColor: "#fef2f2",
  },
  clearButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  clearButton: {
    backgroundColor: "#ef4444",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  clearButtonPressed: {
    shadowOffset: { width: 1, height: 1 },
    elevation: 1,
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
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
    lineHeight: 20,
  },
});

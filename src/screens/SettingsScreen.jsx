import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Switch,
  Alert,
} from "react-native";
import {
  Settings as SettingsIcon,
  Trash2,
  Info,
  HelpCircle,
  Check,
} from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { Card } from "../components/ui/Card";
import { storage } from "../utils/storage";
import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/layout/Header";

export default function SettingsScreen() {
  const { i18n, t } = useTranslation();
  const { languages, setLanguage } = useLanguage();
  const navigation = useNavigation();
  const [offlineMode, setOfflineMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [storageInfo, setStorageInfo] = useState(null);

  useEffect(() => {
    loadSettings();
    loadStorageStats();
  }, []);

  const loadSettings = async () => {
    try {
      // Load settings from storage
      const savedOfflineMode = await storage.getSetting("offlineMode", true);
      const savedNotifications = await storage.getSetting(
        "notifications",
        true
      );
      setOfflineMode(savedOfflineMode);
      setNotifications(savedNotifications);
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };

  const loadStorageStats = async () => {
    try {
      const stats = await storage.getStorageStats();
      setStorageInfo(stats);
    } catch (error) {
      console.error("Error getting storage stats:", error);
    }
  };

  const handleOfflineModeToggle = async (value) => {
    setOfflineMode(value);
    try {
      await storage.saveSetting("offlineMode", value);
    } catch (error) {
      console.error("Error saving offline mode:", error);
    }
  };

  const handleNotificationsToggle = async (value) => {
    setNotifications(value);
    try {
      await storage.saveSetting("notifications", value);
    } catch (error) {
      console.error("Error saving notifications:", error);
    }
  };

  const handleClearAllData = () => {
    Alert.alert(t("settings.clear_all"), t("settings.clear_all_confirm"), [
      { text: t("common.cancel"), onPress: () => {} },
      {
        text: t("settings.clear_all"),
        onPress: async () => {
          try {
            await storage.clearAll();
            Alert.alert(t("common.success"), t("settings.clear_all_success"), [
              { text: t("common.ok"), onPress: loadStorageStats },
            ]);
          } catch (error) {
            Alert.alert(t("common.error"), t("settings.clear_all_error"), [
              { text: t("common.ok") },
            ]);
          }
        },
        style: "destructive",
      },
    ]);
  };

  const handleClearHistory = () => {
    Alert.alert(
      t("settings.clear_history"),
      t("settings.clear_history_confirm"),
      [
        { text: t("common.cancel"), onPress: () => {} },
        {
          text: t("common.clear"),
          onPress: async () => {
            try {
              await storage.clearViewedGuides();
              loadStorageStats();
              Alert.alert(
                t("common.success"),
                t("settings.clear_history_success"),
                [{ text: t("common.ok") }]
              );
            } catch (error) {
              Alert.alert(
                t("common.error"),
                t("settings.clear_history_error"),
                [{ text: t("common.ok") }]
              );
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleClearSearches = () => {
    Alert.alert(
      t("settings.clear_searches"),
      t("settings.clear_searches_confirm"),
      [
        { text: t("common.cancel"), onPress: () => {} },
        {
          text: t("common.clear"),
          onPress: async () => {
            try {
              await storage.clearRecentSearches();
              loadStorageStats();
              Alert.alert(
                t("common.success"),
                t("settings.clear_searches_success"),
                [{ text: t("common.ok") }]
              );
            } catch (error) {
              Alert.alert(
                t("common.error"),
                t("settings.clear_searches_error"),
                [{ text: t("common.ok") }]
              );
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  const openDisclaimer = () => navigation.navigate("Disclaimer");
  const openSources = () => navigation.navigate("Sources");
  const openPrivacyPolicy = () => navigation.navigate("PrivacyPolicy");

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={t("common.settings", { defaultValue: "Settings" })}
        showBack={false}
        showLogo={false}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Settings Section */}
        <View style={styles.section}>
          {/* Offline Mode */}
          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>
                {t("settings.offline_mode")}
              </Text>
              <Text style={styles.settingDescription}>
                {t("settings.offline_mode_desc")}
              </Text>
            </View>
            <Switch
              value={offlineMode}
              onValueChange={handleOfflineModeToggle}
              trackColor={{ false: "#cccccc", true: "#a855f7" }}
              thumbColor={offlineMode ? "#7c3aed" : "#f5f5f5"}
            />
          </View>

          {/* Notifications */}
          <View style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Text style={styles.settingLabel}>
                {t("settings.notifications")}
              </Text>
              <Text style={styles.settingDescription}>
                {t("settings.notifications_desc")}
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={handleNotificationsToggle}
              trackColor={{ false: "#cccccc", true: "#3b82f6" }}
              thumbColor={notifications ? "#2563eb" : "#f5f5f5"}
            />
          </View>

          {/* Language Selection */}
          <View style={styles.languageSection}>
            <Text style={styles.languageTitle}>
              🌐 {t("settings.select_language")}
            </Text>
            <View style={styles.languageOptions}>
              {Object.entries(languages).map(([code, name]) => (
                <Pressable
                  key={code}
                  onPress={() => setLanguage(code)}
                  style={({ pressed }) => [
                    styles.languageOption,
                    i18n.language === code && styles.languageOptionSelected,
                    pressed && styles.languageOptionPressed,
                  ]}
                >
                  <View style={styles.languageOptionContent}>
                    <Text
                      style={[
                        styles.languageOptionText,
                        i18n.language === code &&
                          styles.languageOptionTextSelected,
                      ]}
                    >
                      {name}
                    </Text>
                    {i18n.language === code && (
                      <Check size={20} color="#ffffff" strokeWidth={2} />
                    )}
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </View>

        {/* Storage Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("settings.storage_info")}</Text>

          {storageInfo ? (
            <Card variant="info" style={styles.storageCard}>
              <View style={styles.storageContent}>
                <View style={styles.storageItem}>
                  <Text style={styles.storageLabel}>
                    {t("settings.recent_searches")}:
                  </Text>
                  <Text style={styles.storageValue}>
                    {storageInfo.recentSearches || 0}
                  </Text>
                </View>
                <View style={styles.storageItem}>
                  <Text style={styles.storageLabel}>
                    {t("settings.viewed_guides")}:
                  </Text>
                  <Text style={styles.storageValue}>
                    {storageInfo.viewedGuides || 0}
                  </Text>
                </View>
                <View style={styles.storageItem}>
                  <Text style={styles.storageLabel}>
                    {t("settings.offline_data")}:
                  </Text>
                  <Text style={styles.storageValue}>
                    {storageInfo.hasOfflineData
                      ? t("settings.cached")
                      : t("settings.not_cached")}
                  </Text>
                </View>
              </View>
            </Card>
          ) : (
            <Text style={styles.loadingText}>
              {t("settings.loading_storage")}
            </Text>
          )}
        </View>

        {/* Clear Data Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("settings.clear_data")}</Text>

          <Pressable
            onPress={handleClearSearches}
            style={({ pressed }) => [
              styles.clearButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Trash2 size={18} color="#ffffff" strokeWidth={2} />
            <Text style={styles.clearButtonText}>
              {t("settings.clear_searches")}
            </Text>
          </Pressable>

          <Pressable
            onPress={handleClearHistory}
            style={({ pressed }) => [
              styles.clearButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Trash2 size={18} color="#ffffff" strokeWidth={2} />
            <Text style={styles.clearButtonText}>
              {t("settings.clear_history")}
            </Text>
          </Pressable>

          <Pressable
            onPress={handleClearAllData}
            style={({ pressed }) => [
              styles.clearAllButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Trash2 size={18} color="#ffffff" strokeWidth={2} />
            <Text style={styles.clearButtonText}>
              {t("settings.clear_all")}
            </Text>
          </Pressable>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("settings.about")}</Text>

          <Pressable
            onPress={openDisclaimer}
            style={({ pressed }) => [
              styles.aboutLinkRow,
              pressed && styles.aboutLinkRowPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={t("settings.disclaimer")}
          >
            <Info size={18} color="#000000" strokeWidth={2} />
            <Text style={styles.aboutLinkText}>{t("settings.disclaimer")}</Text>
          </Pressable>

          <Pressable
            onPress={openSources}
            style={({ pressed }) => [
              styles.aboutLinkRow,
              pressed && styles.aboutLinkRowPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={t("settings.sources")}
          >
            <HelpCircle size={18} color="#000000" strokeWidth={2} />
            <Text style={styles.aboutLinkText}>{t("settings.sources")}</Text>
          </Pressable>

          <Pressable
            onPress={openPrivacyPolicy}
            style={({ pressed }) => [
              styles.aboutLinkRow,
              pressed && styles.aboutLinkRowPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={t("settings.privacy_policy")}
          >
            <Info size={18} color="#000000" strokeWidth={2} />
            <Text style={styles.aboutLinkText}>
              {t("settings.privacy_policy")}
            </Text>
          </Pressable>

          <Card variant="primary" style={styles.aboutCard}>
            <View style={styles.aboutContent}>
              <View>
                <Text style={styles.appName}>SAFE+SOUND</Text>
                <Text style={styles.appVersion}>
                  {t("settings.app_version")}
                </Text>
              </View>
              <HelpCircle size={24} color="#ffffff" strokeWidth={2} />
            </View>
          </Card>

          <View style={styles.aboutText}>
            <Text style={styles.aboutDescription}>
              {t("settings.app_description")}
            </Text>
            <Text style={styles.disclaimer}>
              {t("settings.app_disclaimer")}
            </Text>
          </View>
        </View>
      </ScrollView>
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
  section: {
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 12,
  },
  settingItem: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  settingContent: {
    flex: 1,
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 12,
    color: "#666666",
  },
  storageCard: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  storageContent: {
    gap: 10,
  },
  storageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  storageLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#ffffff",
  },
  storageValue: {
    fontSize: 13,
    fontWeight: "700",
    color: "#ffffff",
  },
  loadingText: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginVertical: 16,
  },
  clearButton: {
    backgroundColor: "#f97316",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  clearAllButton: {
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
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
  },
  buttonPressed: {
    shadowOffset: { width: 1, height: 1 },
    elevation: 1,
  },
  aboutCard: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  aboutContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  appName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 12,
    color: "#ffffff",
    opacity: 0.8,
  },
  aboutText: {
    gap: 12,
  },
  aboutDescription: {
    fontSize: 13,
    color: "#333333",
    lineHeight: 19,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    padding: 12,
  },
  disclaimer: {
    fontSize: 12,
    color: "#ef4444",
    lineHeight: 18,
    fontWeight: "600",
    backgroundColor: "#fef2f2",
    borderWidth: 2,
    borderColor: "#ef4444",
    borderRadius: 12,
    padding: 12,
  },
  aboutLinkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minHeight: 44,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  aboutLinkRowPressed: {
    opacity: 0.85,
  },
  aboutLinkText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#000000",
  },
  languageSection: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
  },
  languageTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 12,
  },
  languageOptions: {
    gap: 8,
  },
  languageOption: {
    backgroundColor: "#f5f5f5",
    borderWidth: 2,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  languageOptionSelected: {
    backgroundColor: "#7c3aed",
    borderColor: "#6d28d9",
  },
  languageOptionPressed: {
    opacity: 0.8,
  },
  languageOptionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageOptionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
  },
  languageOptionTextSelected: {
    color: "#ffffff",
  },
});

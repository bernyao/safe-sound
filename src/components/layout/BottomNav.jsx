import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import {
  Home,
  Phone,
  Clock,
  Settings as SettingsIcon,
} from "lucide-react-native";

/**
 * BottomNav
 * - 4 tabs: Home, Emergency, History, Settings
 * - Neobrutalist style: black top border, white background,
 *   active tab has orange background and shadow
 * - Fixed at bottom and respects safe area insets
 *
 * Props:
 * - activeTab: "Home" | "Emergency" | "History" | "Settings"
 * - onTabPress: (tabKey: string) => void
 */
export const BottomNav = ({ activeTab = "Home", onTabPress }) => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const tabs = [
    { key: "Home", label: t("common.home"), Icon: Home },
    { key: "Emergency", label: t("common.emergency_tab"), Icon: Phone },
    { key: "History", label: t("common.history"), Icon: Clock },
    { key: "Settings", label: t("common.settings"), Icon: SettingsIcon },
  ];

  return (
    <View
      style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 8) }]}
    >
      <View style={styles.nav}>
        {tabs.map(({ key, label, Icon }) => {
          const isActive = activeTab === key;
          return (
            <Pressable
              key={key}
              accessibilityRole="tab"
              onPress={() => onTabPress && onTabPress(key)}
              style={({ pressed }) => [
                styles.tab,
                isActive && styles.activeTab,
                pressed && styles.tabPressed,
              ]}
            >
              <Icon
                size={22}
                color={isActive ? "#ffffff" : "#000000"}
                strokeWidth={2}
              />
              <Text style={[styles.label, isActive && styles.labelActive]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFAE6",
    borderTopWidth: 2,
    borderTopColor: "#000000",
    paddingTop: 8,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginHorizontal: 6,
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: "#f97316", // orange-500
    borderWidth: 2,
    borderColor: "#000000",
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  tabPressed: {
    shadowOffset: { width: 1, height: 1 },
    elevation: 1,
  },
  label: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: "700",
    color: "#000000",
  },
  labelActive: {
    color: "#ffffff",
  },
});

export default BottomNav;

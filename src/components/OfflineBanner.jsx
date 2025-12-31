import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

export default function OfflineBanner({ visible }) {
  const { t } = useTranslation();

  if (!visible) return null;

  return (
    <View style={styles.container} accessibilityRole="text">
      <Text style={styles.text}>{t("offline.banner")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111827",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  text: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
  },
});

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Header } from "../../components/layout/Header";

const LAST_UPDATED = "2025-12-30";

const DEFAULT_SOURCES = [
  {
    title: "American Red Cross — First Aid/CPR/AED",
    url: "https://www.redcross.org/take-a-class/first-aid",
  },
  {
    title: "American Heart Association — CPR & First Aid",
    url: "https://cpr.heart.org/",
  },
  {
    title: "CDC — Emergency Preparedness & Response",
    url: "https://www.cdc.gov/",
  },
];

export default function SourcesScreen() {
  const { t } = useTranslation();

  const sources = DEFAULT_SOURCES;

  const open = async (url) => {
    try {
      const can = await Linking.canOpenURL(url);
      if (can) {
        await Linking.openURL(url);
      }
    } catch (e) {
      // Fail silently; values are informational.
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t("legal.sources.title")} showBack={true} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subtitle}>{t("legal.sources.subtitle")}</Text>

        <View style={styles.metaCard}>
          <Text style={styles.metaText}>
            {t("legal.sources.last_updated")}: {LAST_UPDATED}
          </Text>
        </View>

        <View style={styles.card}>
          {sources.map((s, idx) => (
            <Pressable
              key={idx}
              onPress={() => open(s.url)}
              style={({ pressed }) => [
                styles.sourceRow,
                pressed && styles.sourceRowPressed,
              ]}
              accessibilityRole="link"
              accessibilityLabel={`${s.title}`}
            >
              <Text style={styles.sourceTitle}>{s.title}</Text>
              <Text style={styles.sourceUrl}>{s.url}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.note}>{t("legal.sources.note")}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAE6",
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 14,
    lineHeight: 21,
  },
  metaCard: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,
  },
  metaText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },
  card: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
  },
  sourceRow: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sourceRowPressed: {
    backgroundColor: "#f5f5f5",
  },
  sourceTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#000",
    marginBottom: 4,
  },
  sourceUrl: {
    fontSize: 13,
    color: "#2563eb",
    textDecorationLine: "underline",
  },
  note: {
    marginTop: 12,
    fontSize: 13,
    color: "#111",
    lineHeight: 18,
  },
});

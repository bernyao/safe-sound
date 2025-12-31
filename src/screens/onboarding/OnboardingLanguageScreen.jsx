import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export default function OnboardingLanguageScreen({ navigation }) {
  const { t, i18n } = useTranslation();
  const { languages, setLanguage } = useLanguage();

  const languageList = [
    { code: "en", label: languages?.en ?? "English" },
    { code: "es", label: languages?.es ?? "Español" },
    { code: "fr", label: languages?.fr ?? "Français" },
    { code: "pt", label: languages?.pt ?? "Português" },
  ];

  const pick = async (code) => {
    await setLanguage(code);
    // Ensure the UI re-renders immediately for the next screen.
    await i18n.changeLanguage(code);
    navigation.navigate("OnboardingLegal");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.title}>{t("onboarding.language.title")}</Text>
          <Text style={styles.subtitle}>
            {t("onboarding.language.subtitle")}
          </Text>
        </View>

        <View style={styles.card}>
          {languageList.map((lang) => {
            const selected = i18n.language === lang.code;
            return (
              <Pressable
                key={lang.code}
                onPress={() => pick(lang.code)}
                accessibilityRole="button"
                accessibilityLabel={lang.label}
                style={({ pressed }) => [
                  styles.row,
                  selected && styles.rowSelected,
                  pressed && styles.rowPressed,
                ]}
              >
                <Text
                  style={[styles.rowText, selected && styles.rowTextSelected]}
                >
                  {lang.label}
                </Text>
                {selected ? <Text style={styles.check}>✓</Text> : null}
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={() => navigation.navigate("OnboardingLegal")}
          accessibilityRole="button"
          accessibilityLabel={t("onboarding.common.continue")}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>
            {t("onboarding.common.continue")}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAE6",
  },
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 28,
    justifyContent: "center",
    gap: 16,
  },
  hero: {
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
    lineHeight: 20,
  },
  card: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
  },
  row: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  rowSelected: {
    backgroundColor: "#dcfce7",
  },
  rowPressed: {
    backgroundColor: "#f5f5f5",
  },
  rowText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#000",
  },
  rowTextSelected: {
    color: "#000",
  },
  check: {
    fontSize: 16,
    fontWeight: "900",
    color: "#000",
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#93c5fd",
    borderRadius: 14,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  secondaryButtonPressed: {
    shadowOffset: { width: 2, height: 2 },
    elevation: 2,
    opacity: 0.9,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#000",
  },
});

import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { useTranslation } from "react-i18next";

export default function OnboardingWelcomeScreen({ navigation }) {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.title}>{t("onboarding.welcome.title")}</Text>
          <Text style={styles.subtitle}>
            {t("onboarding.welcome.subtitle")}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.bullet}>• {t("onboarding.welcome.point1")}</Text>
          <Text style={styles.bullet}>• {t("onboarding.welcome.point2")}</Text>
          <Text style={styles.bullet}>• {t("onboarding.welcome.point3")}</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t("onboarding.common.continue")}
          onPress={() => navigation.navigate("OnboardingLanguage")}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>
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
    fontSize: 28,
    fontWeight: "900",
    color: "#000",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
    lineHeight: 21,
  },
  card: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
  },
  bullet: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
    lineHeight: 20,
    marginBottom: 10,
  },
  primaryButton: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#f97316",
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
  primaryButtonPressed: {
    shadowOffset: { width: 2, height: 2 },
    elevation: 2,
    opacity: 0.9,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#000",
  },
});

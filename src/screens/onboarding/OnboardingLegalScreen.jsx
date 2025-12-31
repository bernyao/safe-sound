import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useTranslation } from "react-i18next";
import { storage } from "../../utils/storage";

/**
 * OnboardingLegalScreen
 * Non-skippable. User must read/acknowledge both Disclaimer + Privacy Policy
 * and explicitly accept to continue into the app.
 */
export default function OnboardingLegalScreen({ navigation }) {
  const { t } = useTranslation();

  const openDisclaimer = () => navigation.navigate("Disclaimer");
  const openPrivacyPolicy = () => navigation.navigate("PrivacyPolicy");

  const acceptAndContinue = async () => {
    await storage.acceptDisclaimer();
    await storage.setOnboardingCompleted(true);

    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{t("onboarding.legal.title")}</Text>
        <Text style={styles.subtitle}>{t("onboarding.legal.subtitle")}</Text>

        <View style={styles.card}>
          <Text style={styles.body}>{t("onboarding.legal.disclaimer_summary")}</Text>

          <Pressable
            onPress={openDisclaimer}
            accessibilityRole="button"
            accessibilityLabel={t("onboarding.legal.open_disclaimer")}
            style={({ pressed }) => [styles.linkButton, pressed && styles.linkButtonPressed]}
          >
            <Text style={styles.linkButtonText}>{t("onboarding.legal.open_disclaimer")}</Text>
          </Pressable>

          <View style={styles.divider} />

          <Text style={styles.body}>{t("onboarding.legal.privacy_summary")}</Text>

          <Pressable
            onPress={openPrivacyPolicy}
            accessibilityRole="button"
            accessibilityLabel={t("onboarding.legal.open_privacy")}
            style={({ pressed }) => [styles.linkButton, pressed && styles.linkButtonPressed]}
          >
            <Text style={styles.linkButtonText}>{t("onboarding.legal.open_privacy")}</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={acceptAndContinue}
          accessibilityRole="button"
          accessibilityLabel={t("onboarding.legal.accept_and_continue")}
          style={({ pressed }) => [styles.acceptButton, pressed && styles.acceptButtonPressed]}
        >
          <Text style={styles.acceptText}>{t("onboarding.legal.accept_and_continue")}</Text>
        </Pressable>

        <Text style={styles.note}>{t("onboarding.legal.note")}</Text>
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
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 14,
  },
  card: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
  },
  body: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    lineHeight: 20,
    marginBottom: 12,
  },
  linkButton: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#e5e7eb",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  linkButtonPressed: {
    opacity: 0.85,
  },
  linkButtonText: {
    fontSize: 15,
    fontWeight: "900",
    color: "#000",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 14,
  },
  acceptButton: {
    marginTop: 14,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    paddingHorizontal: 16,
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
  acceptButtonPressed: {
    opacity: 0.9,
    shadowOffset: { width: 2, height: 2 },
    elevation: 2,
  },
  acceptText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#000",
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    color: "#111",
    textAlign: "center",
    lineHeight: 16,
  },
});

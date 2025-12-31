import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Header } from "../../components/layout/Header";

// Prefer a real, hosted Privacy Policy URL for App Store submission.
// If not configured, we fall back to showing an in-app summary (no broken link).
// Note: avoid a static import of expo-constants here because Jest may not transform it.
function getPrivacyPolicyUrl() {
  // Allows CI / tests to inject a value safely.
  if (typeof process !== "undefined" && process.env?.PRIVACY_POLICY_URL) {
    return process.env.PRIVACY_POLICY_URL;
  }

  try {
    // Dynamic require keeps Jest from trying to parse expo-constants ESM.
    // eslint-disable-next-line global-require
    const Constants = require("expo-constants").default;
    return (
      Constants?.expoConfig?.extra?.privacyPolicyUrl ||
      Constants?.manifest?.extra?.privacyPolicyUrl ||
      ""
    );
  } catch {
    return "";
  }
}

export const PRIVACY_POLICY_URL = getPrivacyPolicyUrl();

export default function PrivacyPolicyScreen() {
  const { t } = useTranslation();

  const openPolicy = async () => {
    try {
      if (!PRIVACY_POLICY_URL) {
        Alert.alert(t("common.error"), t("legal.privacy.cannot_open"));
        return;
      }
      const can = await Linking.canOpenURL(PRIVACY_POLICY_URL);
      if (!can) {
        Alert.alert(t("common.error"), t("legal.privacy.cannot_open"));
        return;
      }
      await Linking.openURL(PRIVACY_POLICY_URL);
    } catch (e) {
      Alert.alert(t("common.error"), t("legal.privacy.cannot_open"));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t("legal.privacy.title")} showBack={true} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subtitle}>{t("legal.privacy.subtitle")}</Text>

        <View style={styles.card}>
          <Text style={styles.body}>{t("legal.privacy.summary")}</Text>

          {Boolean(PRIVACY_POLICY_URL) ? (
            <>
              <Pressable
                onPress={openPolicy}
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed,
                ]}
                accessibilityRole="link"
                accessibilityLabel={t("legal.privacy.open")}
              >
                <Text style={styles.buttonText}>{t("legal.privacy.open")}</Text>
              </Pressable>

              <Text style={styles.url}>{PRIVACY_POLICY_URL}</Text>
            </>
          ) : (
            <Text style={styles.inlineNote}>
              {t("legal.privacy.inline_note", {
                defaultValue:
                  "No external privacy policy link is configured for this build. Please provide a hosted Privacy Policy URL before App Store submission.",
              })}
            </Text>
          )}
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
    marginBottom: 14,
  },
  button: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#93c5fd",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000",
  },
  url: {
    marginTop: 10,
    fontSize: 12,
    color: "#2563eb",
    textDecorationLine: "underline",
  },
  inlineNote: {
    marginTop: 10,
    fontSize: 13,
    color: "#111",
    lineHeight: 18,
  },
});

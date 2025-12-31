import React, { useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Header } from "../../components/layout/Header";

/**
 * DisclaimerScreen
 * - Can be used as a first-run gate or opened from Settings.
 * Props (optional):
 * - onAccept(): called after user accepts (first-run flow)
 * - showAcceptButton: boolean (default true)
 */
export default function DisclaimerScreen({
  onAccept,
  showAcceptButton = true,
}) {
  const { t } = useTranslation();

  const items = useMemo(
    () => [
      t("legal.disclaimer.not_medical_advice"),
      t("legal.disclaimer.call_emergency"),
      t("legal.disclaimer.if_trained"),
      t("legal.disclaimer.training_encouraged"),
    ],
    [t]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t("legal.disclaimer.title")} showBack={true} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subtitle}>{t("legal.disclaimer.subtitle")}</Text>

        <View style={styles.card}>
          {items.map((line, idx) => (
            <Text key={idx} style={styles.bullet}>
              • {line}
            </Text>
          ))}

          <Text style={styles.footer}>{t("legal.disclaimer.seek_help")}</Text>
        </View>

        {showAcceptButton && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t("legal.disclaimer.accept")}
            onPress={onAccept}
            style={({ pressed }) => [
              styles.acceptButton,
              pressed && styles.acceptButtonPressed,
            ]}
          >
            <Text style={styles.acceptText}>
              {t("legal.disclaimer.accept")}
            </Text>
          </Pressable>
        )}
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
  bullet: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    lineHeight: 22,
    marginBottom: 8,
  },
  footer: {
    marginTop: 10,
    fontSize: 14,
    color: "#111",
    lineHeight: 20,
  },
  acceptButton: {
    marginTop: 16,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptButtonPressed: {
    opacity: 0.85,
  },
  acceptText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000",
  },
});

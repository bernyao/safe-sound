import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Linking,
  SafeAreaView,
  Platform,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Header } from "../components/layout/Header";
import OfflineBanner from "../components/OfflineBanner";
import useOffline from "../hooks/useOffline";

export default function EmergencyScreen() {
  const { t } = useTranslation();
  const isOffline = useOffline();
  const [pressedIndex, setPressedIndex] = React.useState(null);

  const emergencyNumbers = [
    { name: t("emergency.emergency_911"), number: "911" },
    { name: t("emergency.poison_control"), number: "1-800-222-1222" },
    { name: t("emergency.non_emergency_police"), number: "311" },
  ];

  const handleCall = async (number, name) => {
    Alert.alert(
      t("guide.call_failed"),
      `${t("emergency.confirm_call")}\n\n${name}: ${number}`,
      [
        { text: t("common.cancel"), style: "cancel" },
        {
          text: t("common.call"),
          style: "default",
          onPress: async () => {
            try {
              const phoneUrl = `tel:${number}`;
              const canCall = await Linking.canOpenURL(phoneUrl);
              if (canCall) {
                await Linking.openURL(phoneUrl);
              } else {
                // iOS Simulator can't place phone calls; match the Home button behavior and messaging.
                if (Platform.OS === "ios") {
                  Alert.alert(
                    t("guide.call_failed"),
                    `${t("guide.unable_to_call")} ${number}`
                  );
                } else {
                  Alert.alert(
                    t("guide.call_failed"),
                    `${t("guide.unable_to_call")} ${number}`
                  );
                }
              }
            } catch (error) {
              console.error("Error initiating call:", error);
              Alert.alert(t("guide.error"), t("guide.unable_to_call"));
            }
          },
        },
      ]
    );
  };

  const emergencyTips = [
    {
      icon: "📞",
      title: t("emergency.call_first"),
      description: t("emergency.call_first_desc"),
    },
    {
      icon: "🔍",
      title: t("emergency.observe"),
      description: t("emergency.observe_desc"),
    },
    {
      icon: "⏱️",
      title: t("emergency.time_it"),
      description: t("emergency.time_it_desc"),
    },
    {
      icon: "📍",
      title: t("emergency.location"),
      description: t("emergency.location_desc"),
    },
    {
      icon: "💬",
      title: t("emergency.communicate"),
      description: t("emergency.communicate_desc"),
    },
    {
      icon: "⚠️",
      title: t("emergency.stay_safe"),
      description: t("emergency.stay_safe_desc"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <OfflineBanner visible={isOffline} />
      <Header
        title={t("common.emergency_tab", { defaultValue: "Emergency" })}
        showBack={false}
        showLogo={false}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Emergency Numbers */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t("emergency.emergency_numbers")}
            </Text>
            {emergencyNumbers.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => handleCall(item.number, item.name)}
                onPressIn={() => setPressedIndex(index)}
                onPressOut={() => setPressedIndex(null)}
                style={[
                  styles.numberCardWrapper,
                  pressedIndex === index && styles.numberCardPressed,
                ]}
              >
                <Card variant="danger" style={styles.numberCard}>
                  <View style={styles.numberInfo}>
                    <Text style={styles.numberName}>{item.name}</Text>
                    <Text style={styles.number}>{item.number}</Text>
                  </View>
                  <Text style={styles.callIcon}>📞</Text>
                </Card>
              </Pressable>
            ))}
          </View>

          {/* Emergency Tips */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t("emergency.when_to_call_911")}
            </Text>
            <Card
              variant="warning"
              style={[styles.warningCard, styles.whenToCallCard]}
            >
              <Text style={styles.warningText}>
                {t("emergency.call_911_if")}
              </Text>
              <Text style={styles.warningBullet}>
                • Unconscious or unresponsive{"\n"}• Having difficulty breathing
                {"\n"}• Experiencing chest pain or pressure{"\n"}• Severe
                bleeding{"\n"}• Choking or unable to swallow{"\n"}• Severe
                allergic reaction{"\n"}• Suspected poison or overdose
              </Text>
            </Card>
          </View>

          {/* Tips Grid */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t("emergency.emergency_tips")}
            </Text>
            {emergencyTips.map((tip, index) => (
              <Card key={index} variant="primary" style={styles.tipCard}>
                <Text style={styles.tipIcon}>{tip.icon}</Text>
                <View style={styles.tipContent}>
                  <Text style={styles.tipTitle}>{tip.title}</Text>
                  <Text style={styles.tipDescription}>{tip.description}</Text>
                </View>
              </Card>
            ))}
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
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#000000",
  },
  numberCardWrapper: {
    marginBottom: 12,
  },
  numberCardPressed: {
    opacity: 0.8,
  },
  numberCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberInfo: {
    flex: 1,
  },
  numberName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 4,
  },
  number: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 1,
    textDecorationLine: "underline",
  },
  callIcon: {
    fontSize: 24,
  },
  warningCard: {
    paddingVertical: 16,
  },
  whenToCallCard: {
    backgroundColor: "#ffffff",
  },
  warningText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  warningBullet: {
    fontSize: 13,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 24,
  },
  tipCard: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
    gap: 12,
  },
  tipIcon: {
    fontSize: 28,
    marginTop: 2,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 14,
    color: "#ffffff",
    lineHeight: 20,
  },
});

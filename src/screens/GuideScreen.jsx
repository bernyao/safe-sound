import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Share,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Share2 } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { Card } from "../components/ui/Card";
import { Header } from "../components/layout/Header";
import firstAidData from "../data/firstAidData.json";
import { storage } from "../utils/storage";
import { useLanguage } from "../context/LanguageContext";
import OfflineBanner from "../components/OfflineBanner";
import useOffline from "../hooks/useOffline";

import HeimlichManeuverImg from "../../assets/images/heimlich-maneuver.png";
import BabyChokingStep2Img from "../../assets/images/baby-choking-step-2.png";
import BabyChokingStep4Img from "../../assets/images/baby-choking-step-4.png";
import BabyChokingStep5Img from "../../assets/images/baby-choking-step-5.png";
import BabyChokingStep6Img from "../../assets/images/baby-choking-step-6.png";
import ChestThrustImg from "../../assets/images/chest-thrust.png";
import SelfHelpImg from "../../assets/images/self-help.png";
import BreathCheckingImg from "../../assets/images/breath-checking.png";
import PushingChestImg from "../../assets/images/pushing-chest.png";
import BreathingImg from "../../assets/images/breathing.png";
import TiltHeadImg from "../../assets/images/tilt-head.png";
import ChildTiltImg from "../../assets/images/childtilt.png";
import ChestCompImg from "../../assets/images/chestcomp.png";
import BleedingPressureImg from "../../assets/images/bleedingpressure.png";
import InhalerStep2Img from "../../assets/images/inhalerstep2.png";
import InhalerStep3Img from "../../assets/images/inhalerstep3.png";
import AutoinjectionStep1Img from "../../assets/images/autoinjection-step1.png";
import AutoinjectionStep4Img from "../../assets/images/autoinjection-step4.png";
import AutoinjectionStep5Img from "../../assets/images/autoinjection-step5.png";

const SEVERITY_BADGES = {
  critical: { color: "#ef4444", label: "Critical" },
  major: { color: "#fbbf24", label: "Major" },
  minor: { color: "#3b82f6", label: "Minor" },
};

const ILLUSTRATIONS = {
  "heimlich-maneuver.png": HeimlichManeuverImg,
  "baby-choking-step-2.png": BabyChokingStep2Img,
  "baby-choking-step-4.png": BabyChokingStep4Img,
  "baby-choking-step-5.png": BabyChokingStep5Img,
  "baby-choking-step-6.png": BabyChokingStep6Img,
  "chest-thrust.png": ChestThrustImg,
  "self-help.png": SelfHelpImg,
  "breath-checking.png": BreathCheckingImg,
  "pushing-chest.png": PushingChestImg,
  "breathing.png": BreathingImg,
  "tilt-head.png": TiltHeadImg,
  "childtilt.png": ChildTiltImg,
  "chestcomp.png": ChestCompImg,
  "bleedingpressure.png": BleedingPressureImg,
  "inhalerstep2.png": InhalerStep2Img,
  "inhalerstep3.png": InhalerStep3Img,
  "autoinjection-step1.png": AutoinjectionStep1Img,
  "autoinjection-step4.png": AutoinjectionStep4Img,
  "autoinjection-step5.png": AutoinjectionStep5Img,
};

function resolveIllustrationSource(illustration) {
  if (!illustration) return undefined;

  // Data can sometimes include stray whitespace.
  const key = String(illustration).trim();
  return ILLUSTRATIONS[key];
}

export default function GuideScreen({ route, navigation }) {
  const isOffline = useOffline();
  const { t } = useTranslation();
  const { translateGuide, translateCategory } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const originalGuide = route.params?.guide;
  const guide = translateGuide(originalGuide);

  useEffect(() => {
    if (originalGuide) {
      // Mark guide as viewed
      storage.markGuideAsViewed(
        originalGuide.id,
        originalGuide.title,
        originalGuide.category
      );
    }
  }, [originalGuide?.id]);

  const handleShare = async () => {
    if (guide) {
      try {
        await Share.share({
          message: `Check out this first aid guide: ${guide.title}\n\nCategory: ${guide.category}\nSeverity: ${guide.severity}`,
          title: guide.title,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  if (!guide) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ChevronLeft size={28} color="#000000" strokeWidth={2} />
          </Pressable>
          <Text style={styles.headerTitle}>Not Found</Text>
          <View style={styles.headerSpacer} />
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Guide not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentStepData = guide.steps[currentStep];
  const severityInfo = SEVERITY_BADGES[guide.severity] || SEVERITY_BADGES.minor;
  const categoryLabel = translateCategory(guide.category);
  const stepCount = guide.steps.length;
  const hasNextStep = currentStep < stepCount - 1;
  const hasPrevStep = currentStep > 0;
  const illustrationSource = resolveIllustrationSource(
    currentStepData?.illustration
  );

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom", "left", "right"]}
    >
      <OfflineBanner visible={isOffline} />
      <Header
        title={guide.title}
        showBack={true}
        rightIcon={Share2}
        onRightPress={handleShare}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Severity Warning Banner */}
        {guide.severity === "critical" && (
          <View
            style={[
              styles.warningBanner,
              { backgroundColor: severityInfo.color },
            ]}
          >
            <Text style={styles.warningText}>
              {t("guide.warning")} — Call 911 immediately
            </Text>
          </View>
        )}

        {/* Step Counter and Severity */}
        <View style={styles.stepInfo}>
          <View style={styles.stepCounter}>
            <Text style={styles.stepCounterText}>
              {t("guide.step")} {currentStep + 1} of {stepCount}
            </Text>
          </View>
          <View
            style={[
              styles.severityBadge,
              { backgroundColor: severityInfo.color },
            ]}
          >
            <Text style={styles.severityText}>{severityInfo.label}</Text>
          </View>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>{categoryLabel}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Card variant="primary" style={styles.stepCard}>
            {/* Step Number Circle + Instruction on same line */}
            <View style={styles.stepHeaderContainer}>
              {/* Step Number Circle */}
              <View style={styles.stepNumberCircle}>
                <Text style={styles.stepNumber}>{currentStep + 1}</Text>
              </View>

              {/* Step Instruction */}
              <Text style={styles.stepInstruction}>
                {currentStepData.instruction}
              </Text>
            </View>

            {/* Step Detail/Tip */}
            {(currentStepData.detail || currentStepData.tip) && (
              <View style={styles.tipBox}>
                <Text style={styles.tipIcon}>💡</Text>
                <Text style={styles.tipText}>
                  {currentStepData.detail || currentStepData.tip}
                </Text>
              </View>
            )}

            {/* Step Warning */}
            {currentStepData.warning && (
              <View style={styles.warningBox}>
                <Text style={styles.warningIcon2}>⚠️</Text>
                <Text style={styles.warningBoxText}>
                  {currentStepData.warning}
                </Text>
              </View>
            )}

            {/* Illustration */}
            {currentStepData.illustration && (
              <View style={styles.illustration}>
                {illustrationSource ? (
                  <Image
                    key={`${currentStep}-${String(
                      currentStepData.illustration
                    ).trim()}`}
                    source={illustrationSource}
                    style={styles.illustrationImage}
                    resizeMode="contain"
                    accessible
                    accessibilityLabel={`Illustration for step ${
                      currentStep + 1
                    }`}
                  />
                ) : (
                  <Text style={styles.illustrationMissingText}>
                    Illustration not found: {currentStepData.illustration}
                  </Text>
                )}
              </View>
            )}
          </Card>
        </View>

        {/* Step Navigation */}
        <View style={styles.navigationContainer}>
          <Pressable
            onPress={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={!hasPrevStep}
            style={[styles.navButton, !hasPrevStep && styles.navButtonDisabled]}
          >
            <Text style={styles.navButtonText}>← Previous</Text>
          </Pressable>

          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${((currentStep + 1) / stepCount) * 100}%` },
              ]}
            />
          </View>

          <Pressable
            onPress={() =>
              setCurrentStep(Math.min(stepCount - 1, currentStep + 1))
            }
            disabled={!hasNextStep}
            style={[styles.navButton, !hasNextStep && styles.navButtonDisabled]}
          >
            <Text style={styles.navButtonText}>Next →</Text>
          </Pressable>
        </View>

        {/* When to Call 911 Section */}
        <View style={styles.section}>
          <Card variant="danger" style={styles.emergencyCard}>
            <Text style={styles.emergencyTitle}>
              🚨 {t("emergency.when_to_call_911")}
            </Text>
            <Text style={styles.emergencyText}>{guide.whenToCall911}</Text>
          </Card>
        </View>

        {/* Additional Warnings */}
        {guide.warnings && guide.warnings.length > 0 && (
          <View style={styles.section}>
            <Card variant="danger" style={styles.warningCard}>
              <Text style={styles.warningsTitle}>{t("guide.warning")}</Text>
              {guide.warnings.map((warning, index) => (
                <View key={index} style={styles.warningBulletPoint}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.warningCardText}>{warning}</Text>
                </View>
              ))}
            </Card>
          </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
    backgroundColor: "#FFFAE6",
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerIcon: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    flex: 1,
  },
  shareButton: {
    padding: 8,
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  warningBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginTop: 12,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
  },
  warningIcon: {
    fontSize: 24,
  },
  warningText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    flex: 1,
  },
  section: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  emergencyCard: {
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 16,
    color: "#ffffff",
    lineHeight: 22,
  },
  stepInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  stepCounter: {
    flex: 1,
  },
  stepCounterText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
  severityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000000",
  },
  severityText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#ffffff",
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
  categoryBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000000",
  },
  stepCard: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "column",
  },
  stepHeaderContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },
  stepNumberContainer: {
    alignItems: "flex-start",
    marginBottom: 12,
  },
  stepNumberCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f97316",
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  stepNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
  },
  stepContent: {
    gap: 12,
  },
  stepInstruction: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    lineHeight: 24,
  },
  tipBox: {
    backgroundColor: "#fbbf24",
    borderLeftWidth: 4,
    borderLeftColor: "#000000",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },
  tipIcon: {
    fontSize: 16,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: "#000000",
    lineHeight: 18,
    fontWeight: "500",
  },
  warningBox: {
    backgroundColor: "#fecaca",
    borderLeftWidth: 4,
    borderLeftColor: "#ef4444",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },
  warningIcon2: {
    fontSize: 16,
  },
  warningBoxText: {
    flex: 1,
    fontSize: 14,
    color: "#7f1d1d",
    lineHeight: 18,
    fontWeight: "500",
  },
  illustration: {
    alignItems: "center",
    paddingVertical: 16,
  },
  illustrationImage: {
    width: "100%",
    height: 220,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },
  illustrationMissingText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  navButton: {
    flex: 0.35,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#000000",
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#000000",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#f97316",
  },
  warningsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 12,
  },
  warningCard: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 0,
  },
  warningBulletPoint: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    marginTop: 2,
  },
  warningCardText: {
    flex: 1,
    fontSize: 13,
    color: "#ffffff",
    lineHeight: 18,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666666",
  },
});

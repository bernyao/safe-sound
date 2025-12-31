import React, { createContext, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { guideTranslations } from "../locales/guideTranslations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n, t } = useTranslation();

  // Create language names that dynamically update with translation changes
  const languageNames = useMemo(
    () => ({
      en: t("settings.english"),
      es: t("settings.spanish"),
      fr: t("settings.french"),
      pt: t("settings.portuguese"),
    }),
    [t]
  );

  const setLanguage = async (languageCode) => {
    await i18n.changeLanguage(languageCode);
  };

  // Function to translate guide data (title, whenToCall911, steps, warnings)
  const translateGuide = (guide) => {
    if (!guide || i18n.language === "en") {
      return guide; // Return as-is for English
    }

    const guideTranslation = guideTranslations[i18n.language]?.[guide.id];
    if (!guideTranslation) {
      return guide; // Return original if no translation found
    }

    // Translate steps if available in the translation
    let translatedSteps = guide.steps;
    if (guideTranslation.steps && guide.steps) {
      translatedSteps = guide.steps.map((step) => {
        const translatedStep = guideTranslation.steps.find(
          (s) => s.number === step.number
        );
        if (!translatedStep) {
          return step; // Fall back to English if no translation for this step
        }
        return {
          ...step,
          instruction: translatedStep.instruction || step.instruction,
          detail: translatedStep.detail || step.detail,
          tip: translatedStep.tip || step.tip,
          warning: translatedStep.warning || step.warning,
        };
      });
    } else {
      // If no steps translation available, keep English steps as-is
      // This is a fallback for guides that don't have full translations yet
      translatedSteps = guide.steps;
    }

    // Translate warnings array if available
    const translatedWarnings = guideTranslation.warnings || guide.warnings;

    return {
      ...guide,
      title: guideTranslation.title || guide.title,
      whenToCall911: guideTranslation.whenToCall911 || guide.whenToCall911,
      steps: translatedSteps,
      warnings: translatedWarnings,
    };
  };

  /**
   * Translate a category name for display.
   * IMPORTANT: navigation/data should continue using the canonical English category strings
   * from `firstAidData.json` (e.g. "CPR", "Choking").
   */
  const translateCategory = (category) => {
    if (!category) return category;
    if (i18n.language === "en") return category;
    // Fall back to the original category if a translation key is missing.
    return t(`categories.${category}`, { defaultValue: category });
  };

  const value = {
    currentLanguage: i18n.language,
    setLanguage,
    translateGuide,
    translateCategory,
    languages: languageNames,
    isLoading: false,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

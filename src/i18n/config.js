import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import all language files
import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";
import pt from "../locales/pt.json";

import onboardingEn from "../locales/onboarding.en.json";
import onboardingEs from "../locales/onboarding.es.json";
import onboardingFr from "../locales/onboarding.fr.json";
import onboardingPt from "../locales/onboarding.pt.json";

const mergeTranslations = (base, extra) => {
  if (!extra) return base;
  // Shallow merge is enough here because onboarding translations are namespaced
  // under `onboarding.*` and won't collide with existing keys.
  return { ...base, ...extra };
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  init: () => {},
  detect: async (callback) => {
    try {
      const savedLanguage = await AsyncStorage.getItem("preferredLanguage");
      if (savedLanguage) {
        callback(savedLanguage);
      } else {
        callback("en"); // Default to English
      }
    } catch (error) {
      console.warn("Failed to load language preference:", error);
      callback("en");
    }
  },
  cacheUserLanguage: async (lng) => {
    try {
      await AsyncStorage.setItem("preferredLanguage", lng);
    } catch (error) {
      console.warn("Failed to save language preference:", error);
    }
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    defaultNS: "translation",
    ns: ["translation"],
    resources: {
      en: { translation: mergeTranslations(en, onboardingEn) },
      es: { translation: mergeTranslations(es, onboardingEs) },
      fr: { translation: mergeTranslations(fr, onboardingFr) },
      pt: { translation: mergeTranslations(pt, onboardingPt) },
    },
    interpolation: {
      escapeValue: false, // React is safe from XSS
    },
    react: {
      useSuspense: false, // Disable suspense for React Native
    },
  });

export default i18n;

// Common React Native Jest stubs
import "react-native-gesture-handler/jestSetup";

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
try {
  // RN <= 0.73
  // eslint-disable-next-line global-require
  require("react-native/Libraries/Animated/NativeAnimatedHelper");
  jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
} catch {
  // RN >= 0.74 moved / removed some internal paths; safe to no-op for tests.
}

// AsyncStorage is a native module; mock it for Jest.
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

// Ensure react-i18next has an i18n instance during tests.
// Without this, components calling useTranslation() warn with NO_I18NEXT_INSTANCE.
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Use a tiny in-memory config for tests. Individual tests can still mock t()
// or provide their own i18n configuration when needed.
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: { translation: {} },
    },
    interpolation: { escapeValue: false },
    // Keep test output clean.
    debug: false,
  });
}

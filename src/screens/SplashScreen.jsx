import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { storage } from "../utils/storage";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    let mounted = true;

    // Short splash, then decide where to go.
    const timer = setTimeout(() => {
      (async () => {
        try {
          const completed = await storage.getOnboardingCompleted();
          if (!mounted) return;

          navigation?.reset({
            index: 0,
            routes: [{ name: completed ? "MainTabs" : "OnboardingWelcome" }],
          });
        } catch (e) {
          // Safe fallback: route to onboarding.
          if (!mounted) return;
          navigation?.reset({
            index: 0,
            routes: [{ name: "OnboardingWelcome" }],
          });
        }
      })();
    }, 900);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>SAFE+SOUND</Text>
        <Text style={styles.subtitle}>First Aid Guide</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAE6",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    fontSize: 36,
    fontWeight: "900",
    color: "#000000",
    letterSpacing: 3,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666666",
    letterSpacing: 1,
    textAlign: "center",
  },
});

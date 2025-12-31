import React, { useEffect, useState, useCallback } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../utils/storage";
import DisclaimerScreen from "./DisclaimerScreen";

/**
 * DisclaimerGateScreen
 * - First-run gate shown after Splash.
 * - If disclaimer already accepted, immediately routes to MainTabs.
 */
export default function DisclaimerGateScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [needsAcceptance, setNeedsAcceptance] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const accepted = await storage.getDisclaimerAccepted();
        if (!mounted) return;

        if (accepted) {
          navigation.reset({
            index: 0,
            routes: [{ name: "MainTabs" }],
          });
          return;
        }

        setNeedsAcceptance(true);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [navigation]);

  const accept = useCallback(async () => {
    await storage.acceptDisclaimer();
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  if (!needsAcceptance) {
    return null;
  }

  return <DisclaimerScreen onAccept={accept} showAcceptButton />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#FFFAE6",
    justifyContent: "center",
    alignItems: "center",
  },
});

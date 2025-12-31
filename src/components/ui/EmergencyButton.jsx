import React from "react";
import { Pressable, Text, StyleSheet, Alert, Linking } from "react-native";

const EMERGENCY_NUMBERS = {
  US: "911", // United States
  CA: "911", // Canada
  AU: "000", // Australia
  NZ: "111", // New Zealand
  UK: "999", // United Kingdom
  IE: "999", // Ireland
  FR: "112", // France
  DE: "112", // Germany
  IT: "112", // Italy
  ES: "112", // Spain
  NL: "112", // Netherlands
  BE: "112", // Belgium
  SE: "112", // Sweden
  NO: "112", // Norway
  DK: "112", // Denmark
  FI: "112", // Finland
  PL: "112", // Poland
  CZ: "112", // Czech Republic
  PT: "112", // Portugal
  GR: "166", // Greece
  JP: "119", // Japan
  CN: "120", // China
  IN: "112", // India
  BR: "192", // Brazil
  MX: "066", // Mexico
  ZA: "10177", // South Africa
  SG: "995", // Singapore
  KR: "112", // South Korea
  TH: "1669", // Thailand
};

export const EmergencyButton = ({ onPress }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const getEmergencyNumber = async () => {
    try {
      // Try to detect country code (in a real app, use device locale or geolocation)
      // For now, use a default or try to get from device settings
      const countryCode = "US"; // Default fallback
      return EMERGENCY_NUMBERS[countryCode] || "911";
    } catch (error) {
      console.error("Error detecting country:", error);
      return "911"; // Ultimate fallback
    }
  };

  const handleEmergencyCall = async () => {
    try {
      const emergencyNumber = await getEmergencyNumber();
      const phoneUrl = `tel:${emergencyNumber}`;

      const canCall = await Linking.canOpenURL(phoneUrl);
      if (canCall) {
        await Linking.openURL(phoneUrl);
      } else {
        Alert.alert(
          "Call Failed",
          `Unable to make phone call to ${emergencyNumber}. Please dial manually.`
        );
      }

      if (onPress) {
        onPress();
      }
    } catch (error) {
      console.error("Error initiating emergency call:", error);
      Alert.alert(
        "Error",
        "Failed to initiate emergency call. Please dial 911 or your local emergency number manually."
      );
    }
  };

  return (
    <Pressable
      onPress={handleEmergencyCall}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[styles.button, isPressed && styles.pressed]}
    >
      <Text style={styles.icon}>☎️</Text>
      <Text style={styles.text}>EMERGENCY CALL</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#991b1b", // red-900 for high visibility
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
    minHeight: 70,
  },
  pressed: {
    shadowOffset: { width: 2, height: 2 },
    elevation: 2,
  },
  icon: {
    fontSize: 32,
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 1.5,
    textAlign: "center",
  },
});

export default EmergencyButton;

import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { Home, Phone, Clock, Settings } from "lucide-react-native";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import GuideScreen from "../screens/GuideScreen";
import EmergencyScreen from "../screens/EmergencyScreen";
import HistoryScreen from "../screens/HistoryScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SplashScreen from "../screens/SplashScreen";
import DisclaimerScreen from "../screens/legal/DisclaimerScreen";
import SourcesScreen from "../screens/legal/SourcesScreen";
import DisclaimerGateScreen from "../screens/legal/DisclaimerGateScreen";
import PrivacyPolicyScreen from "../screens/legal/PrivacyPolicyScreen";
import OnboardingWelcomeScreen from "../screens/onboarding/OnboardingWelcomeScreen";
import OnboardingLanguageScreen from "../screens/onboarding/OnboardingLanguageScreen";
import OnboardingLegalScreen from "../screens/onboarding/OnboardingLegalScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const neobrutalistHeaderOptions = {
  headerStyle: {
    backgroundColor: "#FFFAE6",
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    letterSpacing: 0.5,
  },
  headerTintColor: "#000000",
};

// Stack Navigator for Home, Category, and Guide screens
function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: "SAFE+SOUND",
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: "Category",
        }}
      />
      <Stack.Screen
        name="Guide"
        component={GuideScreen}
        options={{
          title: "Guide",
        }}
      />
    </Stack.Navigator>
  );
}

// Emergency Stack Navigator
function EmergencyStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="EmergencyTab"
        component={EmergencyScreen}
        options={{
          title: "EMERGENCY HOTLINES",
        }}
      />
    </Stack.Navigator>
  );
}

// History Stack Navigator
function HistoryStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HistoryTab"
        component={HistoryScreen}
        options={{
          title: "Viewed Guides",
        }}
      />
    </Stack.Navigator>
  );
}

// Settings Stack Navigator
function SettingsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
function BottomTabNavigator() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 10,
          backgroundColor: "#FFFAE6",
          borderTopWidth: 2,
          borderTopColor: "#000000",
          height: 70,
          paddingBottom: 12,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 4,
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#666666",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Home size={size} color={color} strokeWidth={2} />
          ),
          tabBarLabel: t("common.home"),
        }}
      />
      <Tab.Screen
        name="Emergency"
        component={EmergencyStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Phone size={size} color="#ef4444" strokeWidth={2} />
          ),
          tabBarLabel: t("common.emergency_tab"),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Clock size={size} color={color} strokeWidth={2} />
          ),
          tabBarLabel: t("common.history"),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} strokeWidth={2} />
          ),
          tabBarLabel: t("common.settings"),
        }}
      />
    </Tab.Navigator>
  );
}

// Main App Navigator
export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* Legacy first-run gate (kept for backward compatibility / deep links). */}
        <Stack.Screen name="DisclaimerGate" component={DisclaimerGateScreen} />

        {/* Onboarding stack entry point */}
        <Stack.Screen
          name="OnboardingWelcome"
          component={OnboardingWelcomeScreen}
        />
        <Stack.Screen
          name="OnboardingLanguage"
          component={OnboardingLanguageScreen}
        />
        <Stack.Screen
          name="OnboardingLegal"
          component={OnboardingLegalScreen}
        />

        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="Disclaimer" component={DisclaimerScreen} />
        <Stack.Screen name="Sources" component={SourcesScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

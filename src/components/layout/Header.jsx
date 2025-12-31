import React from "react";
import { View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
// Safe-area is handled at the screen level via SafeAreaView.
import { useNavigation } from "@react-navigation/native";
import * as LucideIcons from "lucide-react-native";

/**
 * Header component (Neobrutalist)
 * Props:
 * - title: string (centered, bold)
 * - showBack: boolean (if true, show left back arrow; else show logo)
 * - rightIcon: string | React component (lucide icon name or custom element)
 * - onRightPress: function (press handler for right icon)
 */
export const Header = ({
  title = "",
  showBack = false,
  showLogo = true,
  rightIcon,
  onRightPress,
}) => {
  const navigation = useNavigation();

  // NOTE: Top safe-area padding is handled by the screen SafeAreaView.
  // Keeping the Header height consistent prevents jumps between screens.

  const IconComponent =
    typeof rightIcon === "string" ? LucideIcons[rightIcon] : null;

  const handleBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.headerWrapper}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerRow}>
        {/* Left: Back or Logo */}
        <View style={styles.leftArea}>
          {showBack ? (
            <Pressable
              accessibilityRole="button"
              onPress={handleBack}
              style={styles.iconButton}
            >
              <LucideIcons.ChevronLeft
                size={28}
                color="#000000"
                strokeWidth={2}
              />
            </Pressable>
          ) : showLogo ? (
            <Text numberOfLines={1} style={styles.logo}>
              SAFE+SOUND
            </Text>
          ) : (
            <View style={styles.iconSpacer} />
          )}
        </View>

        {/* Center: Title */}
        <View style={styles.centerArea}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>

        {/* Right: Optional icon */}
        <View style={styles.rightArea}>
          {rightIcon ? (
            <Pressable
              accessibilityRole="button"
              onPress={onRightPress}
              style={styles.iconButton}
            >
              {IconComponent ? (
                <IconComponent size={24} color="#000000" strokeWidth={2} />
              ) : React.isValidElement(rightIcon) ? (
                rightIcon
              ) : typeof rightIcon === "function" ? (
                React.createElement(rightIcon, {
                  size: 24,
                  color: "#000000",
                  strokeWidth: 2,
                })
              ) : null}
            </Pressable>
          ) : (
            <View style={styles.iconSpacer} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#FFFAE6",
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftArea: {
    width: 120,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  centerArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightArea: {
    width: 120,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  logo: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000000",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
  },
  iconButton: {
    padding: 6,
    borderRadius: 8,
  },
  iconSpacer: {
    width: 24,
    height: 24,
  },
});

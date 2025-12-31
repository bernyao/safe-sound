import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  onPress,
  style,
  disabled = false,
  ...props
}) => {
  const [pressed, setPressed] = useState(false);

  const variants = {
    primary: {
      backgroundColor: "#f97316",
      color: "#ffffff",
    },
    secondary: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#000000",
    },
  };

  const sizes = {
    sm: { paddingHorizontal: 12, paddingVertical: 8, fontSize: 12 },
    md: { paddingHorizontal: 24, paddingVertical: 12, fontSize: 14 },
    lg: { paddingHorizontal: 32, paddingVertical: 16, fontSize: 16 },
  };

  const shadowOffset = pressed ? 2 : 4;

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: variants[variant].backgroundColor,
          ...sizes[size],
          shadowOffset: { width: shadowOffset, height: shadowOffset },
        },
        style,
      ]}
      {...props}
    >
      <Text
        style={{
          color: variants[variant].color,
          fontSize: sizes[size].fontSize,
          fontWeight: "700",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const IconButton = ({
  icon,
  variant = "primary",
  size = "md",
  onPress,
  style,
}) => {
  const [pressed, setPressed] = useState(false);

  const variants = {
    primary: "#f97316",
    secondary: "#fed7aa",
    ghost: "transparent",
  };

  const sizes = {
    sm: 24,
    md: 32,
    lg: 40,
  };

  const shadowOffset = pressed ? 2 : 3;

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.iconButton,
        {
          backgroundColor: variants[variant],
          width: sizes[size] + 16,
          height: sizes[size] + 16,
          shadowOffset: { width: shadowOffset, height: shadowOffset },
        },
        style,
      ]}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
    transition: "all 0.2s ease",
  },
  iconButton: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
});

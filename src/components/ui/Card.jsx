import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export const Card = ({ children, variant = "primary", onPress, style }) => {
  const [isPressed, setIsPressed] = useState(false);

  const variantStyles = {
    primary: { backgroundColor: "#f97316" }, // orange-500
    danger: { backgroundColor: "#ef4444" }, // red-500
    warning: { backgroundColor: "#fbbf24" }, // yellow-400
    info: { backgroundColor: "#3b82f6" }, // blue-500
    success: { backgroundColor: "#0d9488" }, // teal-600
  };

  const cardStyle = [
    styles.card,
    variantStyles[variant],
    isPressed && styles.pressed,
    style,
  ];

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={cardStyle}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 24,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  pressed: {
    shadowOffset: { width: 2, height: 2 },
    elevation: 2,
  },
});

export default Card;

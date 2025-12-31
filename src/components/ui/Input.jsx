import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export const Input = ({
  placeholder,
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9ca3af"
        style={[
          styles.input,
          {
            paddingLeft: leftIcon ? 40 : 16,
            paddingRight: rightIcon ? 40 : 16,
          },
          style,
        ]}
        {...props}
      />
      {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
    </View>
  );
};

export const SearchBar = ({
  placeholder = "Search...",
  value,
  onChangeText,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      leftIcon={<Text style={{ fontSize: 18 }}>🔍</Text>}
      rightIcon={<Text style={{ fontSize: 18, color: "#f97316" }}>🎤</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 16,
    paddingVertical: 12,
    fontSize: 14,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  iconLeft: {
    position: "absolute",
    left: 12,
    top: "50%",
    zIndex: 10,
  },
  iconRight: {
    position: "absolute",
    right: 12,
    top: "50%",
    zIndex: 10,
  },
});

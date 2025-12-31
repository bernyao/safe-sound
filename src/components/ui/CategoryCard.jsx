import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import * as LucideIcons from "lucide-react-native";
import SeizureIcon from "../icons/SeizureIcon";
import AsthmaIcon from "../icons/AsthmaIcon";

const CATEGORY_COLORS = {
  red: "#ef4444", // CPR
  blue: "#3b82f6", // Bleeding
  orange: "#f97316", // Burns
  teal: "#0d9488", // Choking
  yellow: "#fbbf24", // Shock
  purple: "#a855f7", // Poisoning
  pink: "#ec4899", // Fractures
  green: "#16a34a", // Allergic Reactions
};

const ICON_MAP = {
  cpr: "Heart",
  bleeding: "Droplet",
  burns: "Flame",
  choking: "Slash",
  shock: "Zap",
  poisoning: "Skull",
  fractures: "Bone",
  allergies: "AlertTriangle",
};

export const CategoryCard = ({ title, icon, color, onPress }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  // Use custom icons for specific categories, otherwise get from lucide-react-native
  let IconComponent = LucideIcons[icon] || LucideIcons.HelpCircle;
  if (title === "Seizure") {
    IconComponent = SeizureIcon;
  } else if (title === "Asthma") {
    IconComponent = AsthmaIcon;
  }

  // Use FF1F1F for Bleeding category, 8CA2BD for Asthma, 3D3D3D for Seizure, otherwise use the color mapping
  let backgroundColor = CATEGORY_COLORS[color] || CATEGORY_COLORS.blue;
  if (title === "Bleeding") {
    backgroundColor = "#FF1F1F";
  } else if (title === "Asthma") {
    backgroundColor = "#8CA2BD";
  } else if (title === "Seizure") {
    backgroundColor = "#3D3D3D";
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[styles.card, { backgroundColor }, isPressed && styles.pressed]}
    >
      <View style={styles.iconContainer}>
        <IconComponent size={32} color="#ffffff" strokeWidth={2} />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
  iconContainer: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "left",
    letterSpacing: 0.5,
    flex: 1,
  },
});

export default CategoryCard;

import React from "react";
import { View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export const SeizureIcon = ({
  size = 32,
  color = "#ffffff",
  strokeWidth = 2,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Brain representation with lightning bolt */}
      <Path d="M12 3 L10 7 L13 7 L9 12 L12 12 L8 20" />
      <Path d="M12 3 L14 7 L11 7 L15 12 L12 12 L16 20" />
      <Circle cx="12" cy="12" r="9" />
    </Svg>
  );
};

export default SeizureIcon;

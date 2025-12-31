import React from "react";
import { View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export const AsthmaIcon = ({
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
      {/* Lungs with breath lines */}
      <Path d="M8 6 Q6 8 6 12 Q6 16 8 18" />
      <Path d="M16 6 Q18 8 18 12 Q18 16 16 18" />
      <Path d="M12 8 Q12 12 12 16" />
      <Circle cx="12" cy="12" r="9" />
      {/* Breath lines */}
      <Path d="M3 12 L5 12" strokeWidth={strokeWidth} />
      <Path d="M19 12 L21 12" strokeWidth={strokeWidth} />
      <Path d="M4 8 L5.5 6.5" strokeWidth={strokeWidth} />
      <Path d="M20 16 L18.5 17.5" strokeWidth={strokeWidth} />
    </Svg>
  );
};

export default AsthmaIcon;

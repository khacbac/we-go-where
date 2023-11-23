import React from "react";
import { Image, ImageProps } from "react-native";

type IProps = ImageProps & {
  size?: number;
};
export const AppIcon: React.FC<IProps> = ({ size = 24, style, ...props }) => {
  return (
    <Image
      style={[{ width: size, height: size, resizeMode: "cover" }, style]}
      {...props}
    />
  );
};

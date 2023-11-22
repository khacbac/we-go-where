import React from "react";
import { Text, TextProps } from "react-native";
import { ComponentProps } from "../../types";

export type IAppTextProps = ComponentProps & TextProps & {};
export const AppText: React.FC<IAppTextProps> = ({ children, ...props }) => {
  const { style, ...rest } = props;
  return (
    <Text style={style} {...rest}>
      {children}
    </Text>
  );
};

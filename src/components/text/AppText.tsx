import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { ComponentProps } from "../../types";
import { AppColors } from "../../themes";

export type IAppTextProps = ComponentProps & TextProps & {};
export const AppText: React.FC<IAppTextProps> = ({ children, ...props }) => {
  const { style, ...rest } = props;
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: { color: AppColors.primaryText },
});

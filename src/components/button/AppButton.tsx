import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import { ComponentProps } from "../../types";
import { AppText, IAppTextProps } from "../text";
import { AppColors } from "../../themes";

export type IAppButtonProps = ComponentProps &
  TouchableOpacityProps & {
    text: string;
    textProps?: IAppTextProps;
    type?: "primary" | "text";
    buttonStyle?: "default" | "text";
  };
export const AppButton: React.FC<IAppButtonProps> = ({
  text,
  textProps,
  style,
  type = "primary",
  buttonStyle = "default",
  ...props
}) => {
  const { style: textStyle, ...rest } = textProps || {};
  return (
    <TouchableOpacity
      style={[style, styles[`${type}Container`]]}
      activeOpacity={0.8}
      {...props}
    >
      <AppText style={[textStyle, styles[`${type}Text`]]} {...rest}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: AppColors.primary,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  textContainer: {},
  primaryText: {
    color: AppColors.white,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
  },
  textText: { color: AppColors.primary, fontSize: 18, lineHeight: 25 },
});

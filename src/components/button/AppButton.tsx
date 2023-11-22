import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ComponentProps } from "../../types";
import { AppText, IAppTextProps } from "../text";

export type IAppButtonProps = ComponentProps &
  TouchableOpacityProps & {
    text: string;
    textProps?: IAppTextProps;
  };
export const AppButton: React.FC<IAppButtonProps> = ({
  text,
  textProps,
  ...props
}) => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.8}>
      <AppText {...textProps}>{text}</AppText>
    </TouchableOpacity>
  );
};

import React from "react";
import { View, ViewProps } from "react-native";
import { ComponentProps } from "../../types";
import { AppColors } from "../../themes";

type IProps = ComponentProps & ViewProps & {};
export const AppContainer: React.FC<IProps> = ({ children, ...props }) => {
  const { style, ...rest } = props;
  return (
    <View
      style={[{ flex: 1, backgroundColor: AppColors.white }, style]}
      {...rest}
    >
      {children}
    </View>
  );
};

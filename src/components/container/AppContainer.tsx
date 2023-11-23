import React from "react";
import { View, ViewProps } from "react-native";
import { ComponentProps } from "../../types";

type IProps = ComponentProps & ViewProps & {};
export const AppContainer: React.FC<IProps> = ({ children, ...props }) => {
  const { style, ...rest } = props;
  return (
    <View style={[{ flex: 1 }, style]} {...rest}>
      {children}
    </View>
  );
};

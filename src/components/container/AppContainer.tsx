import React from "react";
import { View } from "react-native";
import { ComponentProps } from "../../types";

type IProps = ComponentProps & {};
export const AppContainer: React.FC<IProps> = ({ children }) => {
  return <View>{children}</View>;
};

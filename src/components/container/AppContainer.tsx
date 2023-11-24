import React from "react";
import { View, ViewProps } from "react-native";
import { ComponentProps } from "../../types";
import { AppColors } from "../../themes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type IProps = ComponentProps &
  ViewProps & {
    safeArea?: "TOP" | "BOTTOM" | "ALL";
  };
export const AppContainer: React.FC<IProps> = ({ children, ...props }) => {
  const { top, bottom } = useSafeAreaInsets();
  const { style, safeArea, ...rest } = props;
  return (
    <View
      style={[
        { flex: 1, backgroundColor: AppColors.white },
        {
          ...((safeArea === "ALL" || safeArea === "TOP") && {
            paddingTop: top,
          }),
        },
        {
          ...((safeArea === "ALL" || safeArea === "BOTTOM") && {
            paddingBottom: top,
          }),
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

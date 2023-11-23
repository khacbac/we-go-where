import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { AppColors } from "../../themes";

type IProps = {};
export type AppLoadingModalRef = {
  show: () => void;
  hide: () => void;
};
export const AppLoadingModal = forwardRef<AppLoadingModalRef, IProps>(
  ({}, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      show() {
        setIsVisible(true);
      },
      hide() {
        setIsVisible(false);
      },
    }));

    if (!isVisible) {
      return null;
    }

    return (
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <ActivityIndicator color={AppColors.primary} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
});

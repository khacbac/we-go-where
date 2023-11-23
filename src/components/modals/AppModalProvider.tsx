import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { ComponentProps } from "../../types";
import { AppLoadingModal } from "./AppLoadingModal";
import { modalManager } from "./AppModalManager";

type IProps = ComponentProps & {};
export const AppModalProvider: React.FC<IProps> = ({ children }) => {
  return (
    <>
      {children}
      <AppLoadingModal ref={modalManager.getLoadingRef()} />
    </>
  );
};

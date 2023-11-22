import React from "react";
import { Text } from "react-native";
import { AppButton, AppContainer } from "../../components";

type IProps = {};
export const AddCardScreen: React.FC<IProps> = ({}) => {
  return (
    <AppContainer>
      <Text>AddCardScreen</Text>
      <AppButton text="BACK" />
    </AppContainer>
  );
};

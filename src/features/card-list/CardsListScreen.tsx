import React from "react";
import { Text } from "react-native";
import { AppButton, AppContainer } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "../../types";

type IProps = AppNavigationProps<"CardsList"> & {};
export const CardsListScreen: React.FC<IProps> = ({ navigation }) => {
  return (
    <AppContainer>
      <Text>CardsListScreen</Text>
      <AppButton
        text="NEXT"
        onPress={() => {
          navigation.navigate("AddCard");
        }}
      />
    </AppContainer>
  );
};

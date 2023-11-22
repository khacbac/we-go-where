import React from "react";
import { Text } from "react-native";
import { AppButton, AppContainer } from "../../components";
import { useNavigation } from "@react-navigation/native";

type IProps = {};
export const CardsListScreen: React.FC<IProps> = ({}) => {
  const navigation = useNavigation<any>();
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

import React from "react";
import { View, StyleSheet } from "react-native";
import { AppContainer } from "../../components";
import { AppNavigationProps } from "../../types";
import { NoCardItem } from "./components";

type IProps = AppNavigationProps<"CardsList"> & {};
export const CardsListScreen: React.FC<IProps> = ({ navigation }) => {
  return (
    <AppContainer>
      <View style={styles.content}>
        <NoCardItem
          onCreateAdd={() => {
            navigation.navigate("AddCard");
          }}
        />
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import { View, StyleSheet } from "react-native";
import { AppButton, AppIcon, AppText } from "../../../components";
import { Icons } from "../../../assets";

type IProps = {
  onCreateAdd: () => void;
};
export const NoCardItem: React.FC<IProps> = ({ onCreateAdd }) => {
  return (
    <View style={styles.container}>
      <AppIcon source={Icons.no_cards} size={40} />
      <AppText style={styles.title}>No Cards Found</AppText>
      <AppText style={styles.subtitle}>
        We recommend adding a card for easy payment
      </AppText>
      <AppButton
        text="Add New Card"
        onPress={onCreateAdd}
        style={styles.button}
        type="text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 66,
    flex: 1,
  },
  title: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "400",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 14,
  },
  button: { marginTop: 13 },
});

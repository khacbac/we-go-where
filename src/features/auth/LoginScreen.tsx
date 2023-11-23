import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { AppButton, AppContainer, AppText } from "../../components";
import { AppNavigationProps } from "../../types";
import { USER_EMAIL } from "../../constants";
import { useStore } from "../../stores";

type IProps = AppNavigationProps<"Login"> & {};
export const LoginScreen: React.FC<IProps> = ({ navigation }) => {
  const { authStore } = useStore();

  const onLogin = () => {
    // navigation.replace("CardsList");
    authStore.login();
  };

  return (
    <AppContainer style={styles.container}>
      <AppText style={styles.text}>{`Login as: ${USER_EMAIL}`}</AppText>
      <AppButton text="Login" onPress={onLogin} style={styles.button} />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  text: { fontSize: 16 },
  button: { marginTop: 16, paddingHorizontal: 48 },
});

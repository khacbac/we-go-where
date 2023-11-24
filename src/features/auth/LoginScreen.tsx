import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { AppButton, AppContainer, AppText } from "../../components";
import { AppNavigationProps } from "../../types";
import { useStore } from "../../stores";
import { checkEmail } from "../../utils";
import { AppColors } from "../../themes";

type IProps = AppNavigationProps<"Login"> & {};
export const LoginScreen: React.FC<IProps> = ({ navigation }) => {
  const { authStore } = useStore();
  const [email, setEmail] = useState("");

  const onLogin = () => {
    // navigation.replace("CardsList");
    authStore.login(email);
  };

  return (
    <AppContainer style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <AppText style={styles.text}>{`Login as: `}</AppText>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="type your email"
            style={{
              borderRadius: 8,
              borderWidth: 1,
              paddingVertical: 4,
              paddingHorizontal: 8,
              marginLeft: 8,
            }}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <AppText style={styles.subtext}>
        {"Just need to type any email. It will be used for testing only"}
      </AppText>
      <AppButton
        text="Login"
        onPress={onLogin}
        style={styles.button}
        disable={!email || !checkEmail(email)}
      />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  text: { fontSize: 16 },
  subtext: {
    fontSize: 12,
    color: AppColors.secondaryText,
    alignSelf: "flex-start",
    marginLeft: 16,
    marginTop: 8,
  },
  button: { marginTop: 16, paddingHorizontal: 48 },
});

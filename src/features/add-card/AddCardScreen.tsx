import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Text, useWindowDimensions } from "react-native";
import { AppButton, AppContainer } from "../../components";
//@ts-ignore
import Omise from "omise-react-native";
import { AppNavigationProps } from "../../types";
import { useStore } from "../../stores";
Omise.config("pkey_test_5wvisbxphp1zapg8ie6", "2017-11-12");

type IProps = AppNavigationProps<"CardsList"> & {};
const AddCardScreen: React.FC<IProps> = ({}) => {
  const { todoStore } = useStore();

  const creatAToken = async () => {
    try {
      const data = await Omise.createToken({
        card: {
          expiration_month: 2,
          expiration_year: 2024,
          name: "Somchai Prasert",
          number: "4242424242424242",
          security_code: "123",
          street1: "476 Fifth Avenue",
          city: "New York",
          state: "NY",
          postal_code: "10320",
          country: "US",
        },
      });
    } catch (error) {}
  };

  const creatACustomer = async () => {
    try {
      const data = await Omise.createCustomer({
        email: "john.doe@example.com",
      });

      console.log("data", JSON.stringify(data));
    } catch (error) {}
  };

  const onChangeTitle = async () => {
    todoStore.changeTitle();
  };

  return (
    <AppContainer renderToHardwareTextureAndroid={true}>
      <Text>AddCardScreen</Text>
      <AppButton text="Change Todo Title" onPress={onChangeTitle} />
    </AppContainer>
  );
};

export default observer(AddCardScreen);

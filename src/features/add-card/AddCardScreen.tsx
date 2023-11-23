import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Text, useWindowDimensions } from "react-native";
import { AppButton, AppContainer } from "../../components";
//@ts-ignore
import Omise from "omise-react-native";
import { AppNavigationProps } from "../../types";
import { CalculatorStore } from "../../stores/calculator-store";
import { autorun } from "mobx";
import { useStore } from "../../stores";
Omise.config("pkey_test_5wvisbxphp1zapg8ie6", "2017-11-12");

const source = {
  //   html: `<form id="checkoutForm" method="POST" action="/charge">
  //   <script type="text/javascript" src="https://cdn.omise.co/omise.js"
  //           data-key="OMISE_PUBLIC_KEY"
  //           data-amount="12345"
  //           data-currency="THB"
  //           data-default-payment-method="credit_card">
  //   </script>
  // </form>`,
  // uri: a,
};

// const customHTMLElementModels = {
//   "blue-circle": HTMLElementModel.fromCustomModel({
//     tagName: "blue-circle",
//     mixedUAStyles: {
//       width: 50,
//       height: 50,
//       borderRadius: 25,
//       alignSelf: "center",
//       backgroundColor: "blue",
//     },
//     contentModel: HTMLContentModel.block,
//   }),
// };

type IProps = AppNavigationProps<"CardsList"> & {};
const AddCardScreen: React.FC<IProps> = ({}) => {
  const { todoStore } = useStore();
  const { width } = useWindowDimensions();
  console.log("BACHK_____ called : ");

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

      console.log("data", JSON.stringify(data));
    } catch (error) {
      console.log("BACHK_____ error : ", error);
    }
  };

  const creatACustomer = async () => {
    try {
      const data = await Omise.createCustomer({
        email: "john.doe@example.com",
      });

      console.log("data", JSON.stringify(data));
    } catch (error) {
      console.log("BACHK_____ error : ", error);
    }
  };

  const onChangeTitle = async () => {
    console.log("BACHK_____ todoStore : ", todoStore);
    todoStore.changeTitle();
  };

  return (
    <AppContainer renderToHardwareTextureAndroid={true}>
      <Text>AddCardScreen</Text>
      <Text>{`Price: ${todoStore.title}`}</Text>
      <AppButton text="BACK" />
      <AppButton text="Create Token" onPress={creatAToken} />
      <AppButton text="Create Customer" onPress={creatACustomer} />
      <AppButton text="Change Todo Title" onPress={onChangeTitle} />
    </AppContainer>
  );
};

export default observer(AddCardScreen);

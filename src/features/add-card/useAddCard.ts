import { useState } from "react";
import { useStore } from "../../stores";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

// number: "4242424242424242",
// security_code: "123",

export const useAddCard = (
  navigation: StackNavigationProp<RootStackParamList, "CardsList", undefined>
) => {
  const { cardsStore } = useStore();
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [cvv, setCardCVV] = useState("");

  const isValidFnc = () => {
    return [cardName, cardExpiryDate, cardNumber, cvv].every((e) => e);
  };

  const onAddCard = async () => {
    try {
      await cardsStore.attachCard({
        cardExpiryDate,
        cardName,
        cardNumber,
        cvv,
      });
      navigation.goBack();
    } catch (error) {}
  };

  return {
    states: {
      cardNumber,
      setCardNumber,
      cardName,
      setCardName,
      cardExpiryDate,
      setCardExpiryDate,
      cvv,
      setCardCVV,
    },
    funcs: { isValidFnc, onAddCard },
  };
};

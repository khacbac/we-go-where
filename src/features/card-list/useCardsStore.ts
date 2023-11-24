import { useStore } from "../../stores";
import React, { useEffect } from "react";
import { Alert } from "react-native";
// @ts-ignore
import Omise from "omise-react-native";
import { modalManager } from "../../components/modals/AppModalManager";
import { OmiseCard } from "../../models";

export const useCardsStore = () => {
  const { cardsStore } = useStore();

  useEffect(() => {
    cardsStore.getCards();
  }, []);

  const onPayNow = async (card: OmiseCard) => {
    try {
      modalManager.showLoading();
      const res = await Omise.createSource({
        amount: 400000,
        currency: "SGD",
        type: "paynow",
      });
      Alert.alert("Success!", res.id);
      modalManager.hideLoading();
    } catch (error) {
      modalManager.hideLoading();
    }
  };

  return { funcs: { onPayNow } };
};

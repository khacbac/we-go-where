import { useStore } from "../../stores";
import React, { useEffect } from "react";

export const useCardsStore = () => {
  const { cardsStore } = useStore();

  useEffect(() => {
    cardsStore.getCards();
  }, []);

  return {};
};

import React, { useState } from "react";

export const useAddCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [cvv, setCardCVV] = useState("");

  const isValidFnc = () => {
    return [cardName, cardExpiryDate, cardNumber, cvv].every((e) => e);
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
    funcs: { isValidFnc },
  };
};

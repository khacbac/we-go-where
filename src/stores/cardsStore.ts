import { action, makeAutoObservable, observable } from "mobx";
import ServerManager from "../server";
import { OmiseCard, User } from "../models";
import { modalManager } from "../components/modals/AppModalManager";
//@ts-ignore
import Omise from "omise-react-native";

export class CardsStore {
  cards: OmiseCard[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCards = async () => {
    try {
      this.setLoading(true);
      modalManager.showLoading();
      const res = await ServerManager.get().getCards();
      modalManager.hideLoading();
      this.setCards(res.data || []);
    } catch (error) {
    } finally {
      this.setLoading(false);
      modalManager.hideLoading();
    }
  };

  attachCard = async (p: {
    cardExpiryDate: string;
    cvv: string;
    cardName: string;
    cardNumber: string;
  }) => {
    try {
      const dates = p.cardExpiryDate.split("/");
      const expiration_month = dates?.[0];
      const expiration_year = dates?.[1];
      modalManager.showLoading();
      const data = await Omise.createToken({
        card: {
          expiration_month,
          expiration_year,
          name: p.cardName,
          number: p.cardNumber,
          security_code: p.cvv,
          // hardcoded data
          street1: "476 Fifth Avenue",
          city: "New York",
          state: "NY",
          postal_code: "10320",
          country: "US",
        },
      });

      if (data?.id) {
        const res = await ServerManager.get().attachACard(data.id);
        if (res.cards) {
          this.setCards(res.cards.data || []);
        }
      }
    } catch (error) {
      throw error;
    } finally {
      modalManager.hideLoading();
    }
  };

  setCards = (cards: OmiseCard[]) => {
    this.cards = cards;
  };

  setLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };
}

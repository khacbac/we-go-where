import { action, makeAutoObservable, observable } from "mobx";
import ServerManager from "../server";
import { OmiseCard, User } from "../models";
import { modalManager } from "../components/modals/AppModalManager";

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

  setCards = (cards: OmiseCard[]) => {
    this.cards = cards;
  };

  setLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };
}

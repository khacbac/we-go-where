import { makeAutoObservable } from "mobx";

export class CalculatorStore {
  price = 0;

  amount = 1;

  constructor() {
    makeAutoObservable(this);
  }

  increasePrice() {
    this.price += 1;
  }

  increaseAmount() {
    this.amount += 1;
  }

  get total() {
    return this.price * this.amount;
  }
}

import { action, makeAutoObservable, observable } from "mobx";
import ServerManager from "../server";
import { User } from "../models";
import { modalManager } from "../components/modals/AppModalManager";

export class AuthStore {
  accessToken: string | null = null;
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login = async () => {
    try {
      modalManager.showLoading();
      const data = await ServerManager.get().login({ email: "jhon@gmail.com" });
      modalManager.hideLoading();
      this.setUser(data.user);
      this.setAccessToken(data.accessToken);
    } catch (error) {
      modalManager.hideLoading();
    }
  };

  // This method will be wrapped into `action` automatically by `makeAutoObservable`
  setAccessToken = (token: string) => {
    this.accessToken = token;
  };

  setUser = (user: User) => {
    this.user = user;
  };
}

import { action, makeAutoObservable, observable } from "mobx";
import ServerManager from "../server";
import { User } from "../models";

export class AuthStore {
  accessToken: string | null = null;
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login = async () => {
    try {
      const data = await ServerManager.get().login({ email: "jhon@gmail.com" });
      this.setUser(data.user);
      this.setAccessToken(data.accessToken);
    } catch (error) {}
  };

  // This method will be wrapped into `action` automatically by `makeAutoObservable`
  setAccessToken = (token: string) => {
    this.accessToken = token;
  };

  setUser = (user: User) => {
    this.user = user;
  };
}

import { action, makeAutoObservable, observable } from "mobx";

export class AuthStore {
  @observable accessToken: string | null = null;
  @observable user: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  login() {
    this.accessToken = "token";
  }
}

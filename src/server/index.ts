import { User } from "../models";

const BASE = "http://192.168.1.11:3030/api";

class ServerManager {
  private static instance: ServerManager;
  private accessToken: string | undefined = undefined;

  constructor() {}

  public static get() {
    if (!ServerManager.instance) {
      ServerManager.instance = new ServerManager();
    }
    return ServerManager.instance;
  }

  public setToken(token: string): void {
    this.accessToken = token;
  }

  private getHeaders(): HeadersInit {
    return {
      ...(this.accessToken && {
        authorization: this.accessToken,
      }),
      "Content-Type": "application/json",
    };
  }

  public async login(body: {
    email: string;
  }): Promise<{ accessToken: string; user: User }> {
    try {
      const jsonData = await fetch(`${BASE}/auth/login`, {
        headers: this.getHeaders(),
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify(body),
      });
      const data = await jsonData.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default ServerManager;

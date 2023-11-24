import { OmiseCardsResponse, User } from "../models";

// const BASE = "http://192.168.1.11:3030/api";
const BASE = "https://we-go-where.onrender.com/api";

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
        authorization: `Bearer ${this.accessToken}`,
      }),
      "Content-Type": "application/json",
    };
  }

  private async apiGet(endpoint: string) {
    const jsonData = await fetch(`${BASE}/${endpoint}`, {
      headers: this.getHeaders(),
      method: "GET",
    });
    const data = await jsonData.json();
    return data;
  }

  private async apiPost(endpoint: string, body?: unknown) {
    const jsonData = await fetch(`${BASE}/${endpoint}`, {
      headers: this.getHeaders(),
      method: "POST",
      cache: "no-cache",
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await jsonData.json();
    return data;
  }

  private async apiPatch(endpoint: string, body?: unknown) {
    const jsonData = await fetch(`${BASE}/${endpoint}`, {
      headers: this.getHeaders(),
      method: "PATCH",
      cache: "no-cache",
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await jsonData.json();
    return data;
  }

  public async login(body: {
    email: string;
  }): Promise<{ accessToken: string; user: User }> {
    try {
      const data = await this.apiPost("auth/login", body);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getCards(): Promise<OmiseCardsResponse> {
    try {
      const data = await this.apiGet("omise/getCards");
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getCardById(id: string): Promise<any> {
    try {
      const data = await this.apiGet(`omise/getCard/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async attachACard(id: string): Promise<{ cards: OmiseCardsResponse }> {
    try {
      const data = await this.apiPatch(`omise/attachACard`, { id });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default ServerManager;

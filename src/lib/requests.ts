import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class Requests {
  private static async request(
    method: string,
    url: string,
    data?: any,
    headers?: AxiosRequestConfig["headers"]
  ): Promise<any> {
    try {
      const response: AxiosResponse = await axios({
        method,
        url,
        data,
        headers,
      });

      return response.data;
    } catch (error: any) {
      throw new Error(`Error making ${method} request: ${error.message}`);
    }
  }

  static async get(
    url: string,
    headers?: AxiosRequestConfig["headers"]
  ): Promise<any> {
    return this.request("get", url, undefined, headers);
  }

  static async post(
    url: string,
    data: any,
    headers?: AxiosRequestConfig["headers"]
  ): Promise<any> {
    return this.request("post", url, data, headers);
  }

  static async put(
    url: string,
    data: any,
    headers?: AxiosRequestConfig["headers"]
  ): Promise<any> {
    return this.request("put", url, data, headers);
  }

  static async delete(
    url: string,
    headers?: AxiosRequestConfig["headers"]
  ): Promise<any> {
    return this.request("delete", url, undefined, headers);
  }

  // Adicione outros métodos conforme necessário
}

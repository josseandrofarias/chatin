import { config } from "../config";
import Requests from "./requests";

export default class LLama {
  static async createChatCompletion(messages: any, prompt: string) {
    const response = await Requests.post(config.llama.uri, {
      model: config.llama.model,
      messages,
      key: "",
      prompt,
      temperature: config.llama.temperature,
    });

    return response;
  }
}

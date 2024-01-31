import dotenv from "dotenv";

dotenv.config();

export const config = {
  llama: {
    uri: "http://localhost:3000/api/chat",
    temperature: 0,
    model: {
      id: "/models/llama-2-7b-chat.bin",
      name: "Llama 2 7B",
      maxLength: 12000,
      tokenLimit: 4000,
    },
  },
  openAI: {
    apiToken: process.env.OPENAI_API_KEY,
  },
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: (process.env.REDIS_PORT as unknown as number) || 6379,
    db: (process.env.REDIS_DB as unknown as number) || 0,
  },
};

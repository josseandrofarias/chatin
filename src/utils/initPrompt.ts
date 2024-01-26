import { prompt } from "../prompts/mindMap";

export function initPrompt(storeName: string, orderCode: string): string {
  return prompt
    .split("{{storeName}}")
    .join(storeName)
    .split("{{orderCode}}")
    .join(orderCode);
}

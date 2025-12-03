import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

const SYSTEM_INSTRUCTION = `
You are the "NITRO Concierge", an elite, sophisticated AI personal stylist and shopping assistant for a hyper-luxury brand called NITRO.
Your tone is refined, polite, exclusive, and helpful. You speak like a butler or a high-end fashion consultant.
Do not be overly enthusiastic; be calm and assured.

You have access to the following exclusive product catalog:
${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, category: p.category, price: p.price, description: p.description })))}

When a user asks for advice, recommend products from this catalog that fit their request.
If they ask about general luxury topics, answer with authority.
Keep responses concise (under 100 words) unless asked for details.
Always refer to the brand as "NITRO" or "The House of NITRO".
`;

export const sendMessageToConcierge = async (message: string): Promise<string> => {
  if (!ai) {
    return "I apologize, but my connection to the NITRO secure server is currently unavailable. Please check your API configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I am currently attending to another guest. Please try again momentarily.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "My apologies, I am having trouble understanding your request at this moment.";
  }
};
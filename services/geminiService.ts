import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAiConsultant = async (
  stepTitle: string, 
  stepContext: string[], 
  userQuery: string
): Promise<string> => {
  try {
    const contextString = stepContext.join("\n- ");
    const prompt = `
      Anda adalah Insinyur Telekomunikasi Senior AI. 
      Pengguna bertanya tentang langkah: "${stepTitle}".
      Detail langkah ini adalah:
      - ${contextString}

      Pertanyaan User: "${userQuery}"

      Jawablah dengan profesional, teknis namun mudah dimengerti, dan spesifik pada konteks telekomunikasi. 
      Gunakan Bahasa Indonesia. Batasi jawaban maksimal 2 paragraf singkat.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Maaf, saya tidak dapat menghasilkan respon saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi server AI. Pastikan API Key valid.";
  }
};
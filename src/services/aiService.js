import OpenAI from "openai";

let client;

function getClient() {
  if (!client) {
    client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }
  return client;
}

export async function analyzeText(text) {
  try {
    const response = await getClient().chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Eres un revisor académico." },
        { role: "user", content: `Revisa este texto:\n\n${text}` }
      ]
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(" Error en OpenAI:", err.message);
    return "No se pudo analizar el texto.";
  }
}

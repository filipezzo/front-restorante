import { useState } from "react";
import model from "../lib/gemini.ts";
import { RecipeOption } from "../types/recipe-option.ts";

export function useGemini() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<RecipeOption[]>([]);

  const generateRecipe = async (entry: string) => {
    try {
      setQuestion(entry);
      const prompt = `por favor, gere apenas receitas no formato de array de objetos contendo 3 receitas sobre esses ingredientes ${entry}. Esse objeto deve conter id (uuid), o nome da receita, e uma breve descrição Se for informado ou questionado algo irrelevante, produza 3 receitas de forma randomica.`;

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      const parsedText = text.replace(/```json|```/g, "").trim();
      const answer = JSON.parse(parsedText ?? []);
      setAnswer(answer);
    } catch (error) {
      console.error(error);
      setAnswer([]);
    }
  };

  return {
    generateRecipe,
    answer,
    question,
  };
}

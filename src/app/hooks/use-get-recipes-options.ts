import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import model from "../lib/gemini";

export type Recipe = {
  title: string;
  description: string;
};

async function generateRecipe(entry: string) {
  try {
    const prompt = `por favor, gere apenas receitas no formato de array de objetos contendo 3 receitas sobre esses ingredientes ${entry}. Esse objeto deve conter o nome da receita (title), e uma breve descrição (description). Se for informado ou questionado algo irrelevante, produza 3 receitas de forma randomica. Sempre responda em portugues, mesmo que tenha que traduzir`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const parsedText = text.replace(/```json|```/g, "").trim();
    const answer = JSON.parse(parsedText ?? []);
    return answer as Recipe[];
  } catch (error) {
    console.error(error);
    toast.error("Erro ao criar receitas");
  }
}

export function useGetRecipesOptions() {
  return useMutation({
    mutationFn: generateRecipe,
    onError: () => {
      toast.error("Algo deu errado! Tente mais tarde");
    },
  });
}

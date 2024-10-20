import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import model from "../lib/gemini";
import { RecipeItem } from "../types/recipes";

async function generateDetails(entry: RecipeItem) {
  try {
    const prompt = `por favor, baseado nessa receita ${entry.title} e ${entry.description} gere um markdown contendo uma descrição maior, os passos da receitas e ingredientes. Sempre responda em português. Se os dados informados não tiverem nada a ver com uma receita não retorne nada.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error(error);
    toast.error("Erro ao criar receitas");
  }
}

export function useGenerateDetails() {
  return useMutation({
    mutationFn: generateDetails,
    onError: () => {
      toast.error("Algo deu errado! Tente mais tarde");
    },
  });
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { api } from "../lib/api";
import { Recipe } from "./use-get-recipes-options";

async function createRecipe(recipe: Recipe) {
  const { data } = await api.post("/recipes", recipe);

  return data;
}

export function useCreateRecipe() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      toast.success("Receita criada com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["recipes"],
      });
    },
  });
}

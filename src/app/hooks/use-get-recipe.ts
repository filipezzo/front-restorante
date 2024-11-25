import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import { RecipeItem } from "../types/recipes";

async function getRecipe(id: string) {
  const { data } = await api.get<RecipeItem>(`/recipes/${id}`);
  return data;
}

export function useGetRecipe(id?: string) {
  return useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipe(id as string),
    enabled: !!id,
  });
}

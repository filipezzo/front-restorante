import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import { ShowRecipe } from "../types/recipes";

export async function getRecipes() {
  const { data } = await api.get<ShowRecipe[]>("/recipes");
  return data;
}

export function useRecipe() {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });
}

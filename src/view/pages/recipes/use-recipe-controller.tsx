import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGenerateDetails } from "../../../app/hooks/use-generate-details";
import { useGetRecipe } from "../../../app/hooks/use-get-recipe";

export function useRecipeController() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { data, isError } = useGetRecipe(id);
  const { data: cachedDetails, mutate } = useGenerateDetails();

  useEffect(() => {
    if (data) {
      const detailsKey = ["recipeDetails", data.id];
      const existingDetails = queryClient.getQueryData<string>(detailsKey);

      if (!existingDetails) {
        mutate(data, {
          onSuccess: (details) => {
            queryClient.setQueryData(detailsKey, details);
          },
        });
      }
    }
  }, [data, mutate, queryClient, id]);

  const details =
    cachedDetails || queryClient.getQueryData<string>(["recipeDetails", id]);
  return {
    details,
    isError,
  };
}

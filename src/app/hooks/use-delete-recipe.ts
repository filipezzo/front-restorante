import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { api } from "../lib/api";

async function deleteRecipe(id: string) {
  const { data } = await api.delete(`/recipes/${id}`);

  return data;
}

export function useDeleteRecipe() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRecipe,
    onSuccess: () => {
      toast.success("Receita deletada com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["recipes"],
      });
    },
  });
}

import { useState } from "react";
import { useRecipe } from "../../../app/hooks/useRecipe";

export function useRecipesController() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const { data: recipes, isLoading, isError, error } = useRecipe();

  return {
    recipes,
    isLoading,
    isError,
    error,
    isOpen,
    onOpen,
    onClose,
  };
}

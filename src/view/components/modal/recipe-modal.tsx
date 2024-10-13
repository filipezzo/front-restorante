import { FormEvent, useEffect, useState } from "react";
import { useGetRecipesOptions } from "../../../app/hooks/use-get-recipes-options";
import { RecipeOption } from "../../../app/types/recipe-option";
import { Modal } from "./modal-provider";
import { RecipeModalContent } from "./recipe-modal-content";

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRecipe: (recipe: RecipeOption) => void;
}

export function RecipeModal({
  isOpen,
  onClose,
  onAddRecipe,
}: RecipeModalProps) {
  const [recipesOptions, setRecipesOptions] = useState<RecipeOption[] | []>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeOption | null>(
    null,
  );
  const [text, setText] = useState("");
  const { mutate, data, isPending } = useGetRecipesOptions();

  const handleSelectRecipe = (recipe: RecipeOption) => {
    setSelectedRecipe(recipe);
  };

  const resetRecipes = () => setRecipesOptions([]);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!text) {
      return;
    }

    mutate(text);
  };

  useEffect(() => {
    if (selectedRecipe) {
      onAddRecipe(selectedRecipe);
    }
  }, [selectedRecipe]);

  useEffect(() => {
    if (data) {
      setRecipesOptions(data);
    }
  }, [data]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} resetData={resetRecipes}>
      <Modal.Header>
        {recipesOptions.length > 0
          ? "Selecione uma receita"
          : "Gerar Receita com IA"}
      </Modal.Header>
      <Modal.Content>
        <RecipeModalContent
          text={text}
          onSubmit={handleSubmit}
          isPending={isPending}
          onChangeText={setText}
          data={recipesOptions}
          onSelectRecipe={handleSelectRecipe}
        />
      </Modal.Content>
    </Modal>
  );
}

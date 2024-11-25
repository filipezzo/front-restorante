import { FormEvent, useState } from "react";
import { useGetRecipesOptions } from "../../../app/hooks/use-get-recipes-options";
import { Modal } from "./modal-provider";
import { RecipeModalContent } from "./recipe-modal-content";

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecipeModal({ isOpen, onClose }: RecipeModalProps) {
  const [text, setText] = useState("");
  const { mutate, data: recipes, isPending } = useGetRecipesOptions();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    mutate(text);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        {recipes && recipes?.length > 0
          ? "Selecione uma receita"
          : "Gerar Receita com IA"}
      </Modal.Header>
      <Modal.Content>
        <RecipeModalContent
          text={text}
          onSubmit={handleSubmit}
          isPending={isPending}
          onChangeText={setText}
          data={recipes}
          onClose={onClose}
        />
      </Modal.Content>
    </Modal>
  );
}

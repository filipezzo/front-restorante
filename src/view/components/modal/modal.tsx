import { Sparkle, TriangleAlert } from "lucide-react";
import { Button } from "../button";
import { Modal } from "./modal-provider";

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecipeModal({ isOpen, onClose }: RecipeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>Gerar Receita com IA</Modal.Header>
      <Modal.Content>
        <div className="flex items-start gap-5 text-pretty rounded-xl border border-zinc-500 p-4">
          <TriangleAlert />
          <p>
            Para melhores resultados, detalhe somente os ingredientes que você
            possui em sua geladeira.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <textarea
            placeholder="Informe seus ingredientes"
            className="max-h-96 min-h-28 w-full rounded-xl border border-zinc-500 bg-transparent p-4 text-gray-300 outline-none placeholder:text-gray-500 focus-within:border-app-green"
          />
          <Button className="ml-auto">
            <Sparkle />
            Gerar
          </Button>
        </form>
      </Modal.Content>
    </Modal>
  );
}

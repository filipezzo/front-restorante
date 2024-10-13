import { CookingPot, Sparkle } from "lucide-react";
import { Button } from "./button";

export function NoRecipeItem() {
  return (
    <div className="my-10 flex max-w-96 flex-col items-center gap-5">
      <div className="mb-4 flex size-20 items-center justify-center rounded-2xl border p-4">
        <CookingPot size={28} />
      </div>
      <strong>Adicione agora sua primeira receita</strong>
      <Button variant="primary">
        <Sparkle size={20} />
        Criar Receita
      </Button>
    </div>
  );
}

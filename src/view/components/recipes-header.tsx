import { ScanSearch, Sparkle } from "lucide-react";
import { Button } from "./button";

export function RecipesHeader() {
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-xl font-medium">Suas receitas!</h2>
      <div className="flex items-center gap-5">
        <Button variant="outline">
          <ScanSearch size={20} />
          Descobrir
        </Button>
        <Button variant="primary">
          <Sparkle size={20} />
          Criar Receita
        </Button>
      </div>
    </header>
  );
}

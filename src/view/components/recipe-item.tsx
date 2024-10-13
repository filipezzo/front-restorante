import { ChefHat, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RecipeOption } from "../../app/types/recipe-option";

interface RecipeItemProps {
  recipe: RecipeOption;
}

export function RecipeItem({ recipe }: RecipeItemProps) {
  return (
    <li>
      <Link
        to={`/receitas/${recipe.id}`}
        className="group flex h-56 w-72 cursor-pointer flex-col gap-4 rounded-lg border border-zinc-500 p-2 transition-all"
      >
        <div className="mx-auto">
          <ChefHat className="size-16 group-hover:text-app-green" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-pretty text-lg group-hover:opacity-80">
            {recipe.nome}
          </h2>
          <button aria-label="botão de mais detalhes">
            <ChevronRight className="text-app-green group-hover:opacity-80" />
          </button>
        </div>
      </Link>
    </li>
  );
}

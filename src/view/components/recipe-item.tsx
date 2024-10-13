import { ChevronRight } from "lucide-react";
import { MockItem } from "./recipes-list";

interface RecipeItemProps {
  recipe: MockItem;
}

export function RecipeItem({ recipe }: RecipeItemProps) {
  return (
    <li>
      <article className="group flex cursor-pointer flex-col gap-4 transition-all">
        <img
          src={recipe.src}
          className="size-32 rounded-lg group-hover:scale-105"
          alt="imagem da receita"
        />
        <div className="flex items-center gap-2">
          <h2 className="text-lg group-hover:opacity-80">{recipe.dish}</h2>
          <button aria-label="botão de mais detalhes">
            <ChevronRight className="text-app-green group-hover:opacity-80" />
          </button>
        </div>
      </article>
    </li>
  );
}

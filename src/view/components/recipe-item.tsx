import { ChefHat, ChevronRight, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDeleteRecipe } from "../../app/hooks/use-delete-recipe";
import { ShowRecipe } from "../../app/types/recipes";

interface RecipeItemProps {
  recipe: ShowRecipe;
}

export function RecipeItem({ recipe }: RecipeItemProps) {
  const { mutateAsync } = useDeleteRecipe();
  const handleDeleteRecipe = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    e.stopPropagation();
    try {
      await mutateAsync(id);
    } catch (error) {
      toast.error("Erro ao deletar receita");
      console.log(error);
    }
  };

  return (
    <li className="flex h-56 w-96 flex-col gap-4 text-nowrap rounded-lg border border-zinc-500 p-5 transition-all">
      <div className="mx-auto">
        <ChefHat className="size-16 text-app-green" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-pretty hover:opacity-80">{recipe.title}</h2>
        <div className="my-4 flex w-full items-center justify-between">
          <button
            className="group flex items-center gap-2 text-sm transition-all"
            aria-label="botão de deletar receita"
            onClick={(e) => handleDeleteRecipe(e, recipe.id)}
          >
            <span className="group-hover:opacity-80">Deletar</span>
            <Trash className="text-gray-500 group-hover:text-rose-500" />
          </button>
          <Link
            className="group flex items-center gap-2 text-sm transition-all"
            aria-label="botão de mais group detalhes"
            to={`/receitas/${recipe.id}`}
          >
            <span className="group-hover:opacity-80">detalhes</span>
            <ChevronRight className="text-gray-500 group-hover:text-app-green" />
          </Link>
        </div>
      </div>
    </li>
  );
}

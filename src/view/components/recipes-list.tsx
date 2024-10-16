import { ShowRecipe } from "../../app/types/recipes";
import { cn } from "../../app/utils/cn";
import { NoRecipeItem } from "./no-recipe-item";
import { RecipeItem } from "./recipe-item";

interface RecipesListProps {
  recipes: ShowRecipe[];
  onOpen: () => void;
}

export function RecipesList({ recipes, onOpen }: RecipesListProps) {
  const hasRecipes = recipes?.length > 0;
  return (
    <ul
      className={cn(
        "my-8 h-[720px] max-w-6xl",
        hasRecipes && "grid grid-cols-3 grid-rows-[210px] gap-10",
      )}
    >
      {hasRecipes ? (
        recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <NoRecipeItem onOpen={onOpen} />
      )}
    </ul>
  );
}

import { RecipeOption } from "../../app/types/recipe-option";
import { cn } from "../../app/utils/cn";
import { NoRecipeItem } from "./no-recipe-item";
import { RecipeItem } from "./recipe-item";

interface RecipesListProps {
  recipes: RecipeOption[];
}

export function RecipesList({ recipes }: RecipesListProps) {
  const hasRecipes = recipes?.length > 0;
  return (
    <ul
      className={cn(
        "my-8 h-[720px] max-w-6xl",
        hasRecipes && "grid grid-cols-4 grid-rows-[210px] gap-10",
      )}
    >
      {hasRecipes ? (
        recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <NoRecipeItem />
      )}
    </ul>
  );
}

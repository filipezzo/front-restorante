import { useState } from "react";
import { RecipeOption } from "../../app/types/recipe-option";
import { Layout } from "../components/layout";
import { RecipeModal } from "../components/modal/recipe-modal";
import { RecipesHeader } from "../components/recipes-header";
import { RecipesList } from "../components/recipes-list";

export function Recipes() {
  const [isOpen, setIsOpen] = useState(false);
  const [recipes, setRecipes] = useState<RecipeOption[]>([]);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const handleAddRecipe = (recipe: RecipeOption) => {
    const newRecipe = [...recipes, recipe];
    setRecipes(newRecipe);
    onClose();
  };

  return (
    <Layout>
      <RecipesHeader onOpen={onOpen} />
      <RecipesList recipes={recipes} />
      <RecipeModal
        isOpen={isOpen}
        onClose={onClose}
        onAddRecipe={handleAddRecipe}
      />
    </Layout>
  );
}

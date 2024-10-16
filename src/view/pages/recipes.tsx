import { useState } from "react";
import { useRecipe } from "../../app/hooks/useRecipe";
import { Layout } from "../components/layout";
import { Loading } from "../components/loading";
import { RecipeModal } from "../components/modal/recipe-modal";
import { RecipesHeader } from "../components/recipes-header";
import { RecipesList } from "../components/recipes-list";

export function Recipes() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const { data: recipes, isLoading, isError, error } = useRecipe();

  return (
    <Layout>
      <RecipesHeader onOpen={onOpen} />
      {isLoading && <Loading />}
      {isError && (
        <p className="text-sm text-rose-500">Erro: {error.message}</p>
      )}
      {!isLoading && !isError && (
        <RecipesList onOpen={onOpen} recipes={recipes ?? []} />
      )}
      <RecipeModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}

import { Loading } from "../../components/loading";
import { RecipeModal } from "../../components/modal/recipe-modal";
import { RecipesHeader } from "../../components/recipes-header";
import { RecipesList } from "../../components/recipes-list";
import { Layout } from "../../layouts/layout";
import { useRecipesController } from "./use-recipes-controller";

export function Recipes() {
  const { error, isError, isLoading, isOpen, onClose, onOpen, recipes } =
    useRecipesController();

  return (
    <Layout>
      <RecipesHeader onOpen={onOpen} />
      {isLoading && <Loading />}
      {isError && (
        <p className="text-sm text-rose-500">Erro: {error?.message}</p>
      )}
      {!isLoading && !isError && (
        <RecipesList onOpen={onOpen} recipes={recipes ?? []} />
      )}
      <RecipeModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}

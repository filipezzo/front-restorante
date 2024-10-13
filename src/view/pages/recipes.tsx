import { Layout } from "../components/layout";
import { RecipesHeader } from "../components/recipes-header";
import { RecipesList } from "../components/recipes-list";

export function Recipes() {
  return (
    <Layout>
      <RecipesHeader />
      <RecipesList />
    </Layout>
  );
}

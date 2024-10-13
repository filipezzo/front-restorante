import { useState } from "react";
import { Layout } from "../components/layout";
import { RecipeModal } from "../components/modal/modal";
import { RecipesHeader } from "../components/recipes-header";
import { RecipesList } from "../components/recipes-list";

export function Recipes() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Layout>
      <RecipesHeader onOpen={onOpen} />
      <RecipesList />
      <RecipeModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}

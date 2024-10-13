import { useState } from "react";
import { cn } from "../../app/utils/cn";
import { NoRecipeItem } from "./no-recipe-item";
import { RecipeItem } from "./recipe-item";

export type MockItem = {
  id: string;
  src: string;
  dish: string;
};

const MockArr: MockItem[] = [
  {
    id: crypto.randomUUID(),
    src: "https://placehold.co/128x128",
    dish: "Batata doce",
  },
  {
    id: crypto.randomUUID(),
    src: "https://placehold.co/128x128",
    dish: "Carne moida",
  },

  {
    id: crypto.randomUUID(),
    src: "https://placehold.co/128x128",
    dish: "Carne moida",
  },
];

export function RecipesList() {
  const [mockData, setMockData] = useState(MockArr);

  const hasRecipes = MockArr.length > 0;

  return (
    <ul
      className={cn(
        "my-8 h-[720px] max-w-6xl",
        hasRecipes && "grid grid-cols-4 grid-rows-[210px]",
      )}
    >
      {hasRecipes ? (
        mockData.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <NoRecipeItem />
      )}
    </ul>
  );
}

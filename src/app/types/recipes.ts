export type ShowRecipe = {
  description: string;
  id: string;
  title: string;
};

export type RecipeItem = ShowRecipe & {
  userId: string;
};

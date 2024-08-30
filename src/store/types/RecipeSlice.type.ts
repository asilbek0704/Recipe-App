export type TRecipe = {
  id: string,
  title: string,
  cookTime: number,
  servings: number,
  instructions: string,
  ingredients: { name: string, amount: string }[]
}

export type TRecipeSlice = {
  recipesList: TRecipe[],
  currentRecipe: TRecipe,

  createRecipe: () => void,
  removeRecipe: (id: string) => void,
  updateRecipe: (id: string, formData: TRecipe) => void,

  fetchRecipe: (id?: string) => void,
}
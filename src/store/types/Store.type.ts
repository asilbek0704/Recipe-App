import type Recipe from "./Recipe.type"

type Store = {
  recipesList: Recipe[],
  addRecipe: (data: Recipe) => void,
  removeRecipe: (id: string) => void
  recipe: Recipe,
  isFormShown: boolean,
  openForm: () => void,
  closeForm: () => void
}

export default Store
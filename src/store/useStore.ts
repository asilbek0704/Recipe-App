import { create } from "zustand";
import Store from "./types/Store.type";
import Recipe from "./types/Recipe.type";

export const useStore = create<Store>(set => ({
  recipesList: JSON.parse(localStorage.getItem("recipes") || "[]") as Recipe[],
  addRecipe: (recipe) => set((state) => {
    const recipesList = [...state.recipesList, recipe];
    localStorage.setItem("recipesList", JSON.stringify(recipesList));

    return { recipesList }
  }),
  removeRecipe: (id) => set((state) => {
    const recipesList = state.recipesList.filter(recipe => recipe.id != id);
    localStorage.setItem("recipesList", JSON.stringify(recipesList));

    return { recipesList }
  }),

  recipe: {
    id: "",
    title: "",
    cooktime: 0,
    servings: 0,
    instructions: "",
    ingredients: []
  },

  isFormShown: false,
  openForm: () => set({ isFormShown: true }),
  closeForm: () => set({ isFormShown: false })
}))
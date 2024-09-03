import { StateCreator } from "zustand";
import { TRecipe, TRecipeSlice } from "../types/RecipeSlice.type";
import { TFormSlice } from "../types/FormSlice.type";

export const createRecipeSlice: StateCreator<TRecipeSlice & TFormSlice, [], [], TRecipeSlice> =
  (set) => (
    {
      recipesList: [],
      currentRecipe: {
        id: '',
        title: "",
        cookTime: 1,
        servings: 1,
        instructions: "",
        ingredients: [{ name: "", amount: "" }],
      },

      fetchRecipe: (id?) => set(state => {
        if (!id) {
          return { currentRecipe: state.recipesList.slice(-1)[0] }
        } else {
          const currentRecipe = state.recipesList.find(recipe => recipe.id == id);

          return { currentRecipe }
        }
      }),

      createRecipe: () => set(state => {
        const recipe = {
          id: Math.random().toString().substring(2),
          title: "",
          cookTime: 1,
          servings: 1,
          instructions: "",
          ingredients: [{ name: "", amount: "" }]
        }

        const recipesList = [...state.recipesList, recipe];

        return { recipesList }
      }),

      removeRecipe: (id) => set(state => {
        const recipesList = state.recipesList.filter(recipe => recipe.id != id);

        return { recipesList }
      }),

      updateRecipe: (id, formData) => set(state => {
        const recipesList = state.recipesList.map((recipe: TRecipe) => {
          if (recipe.id == id) {
            recipe = { ...recipe, ...formData };
          }

          return recipe
        });

        return { recipesList }
      }),
    }

  )
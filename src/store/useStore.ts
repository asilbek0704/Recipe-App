import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { createFormSlice } from "./slices/createFormSlice";
import { createRecipeSlice } from "./slices/createRecipeSlice";
import { TRecipeSlice } from "./types/RecipeSlice.type";
import { TFormSlice } from "./types/FormSlice.type";

export const useStore = create<TRecipeSlice & TFormSlice, [["zustand/devtools", never], ["zustand/persist", Partial<TRecipeSlice>]]>(devtools(
  persist(
    (...a) => ({
      ...createFormSlice(...a),
      ...createRecipeSlice(...a)
    }),
    {
      name: "recipesList",
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ recipesList: state.recipesList })
    }
  )
))


// const dummyRecipes = [
//   {
//     id: "1",
//     title: "Tomato Soup",
//     cookTime: 25,
//     servings: 2,
//     instructions: "INSTRUCTIONS...",
//     ingredients: [{ name: "tomato", amount: "6" }, { name: 'salt', amount: "1 tsp" }]
//   },
//   {
//     id: "2",
//     title: "Grilled Chicken",
//     cookTime: 40,
//     servings: 8,
//     instructions: "INSTRUCTIONS...",
//     ingredients: [{ name: "meat", amount: "6" }, { name: 'garlic', amount: "10" }, { name: 'salt', amount: "1 tsp" }]
//   },
// ]
// localStorage.setItem("recipesList", JSON.stringify(dummyRecipes))
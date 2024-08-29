import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createFormSlice } from "./slices/createFormSlice";
import { createRecipeSlice } from "./slices/createRecipeSlice";
import { TRecipeSlice } from "./types/RecipeSlice.type";
import { TFormSlice } from "./types/FormSlice.type";

// const dummyRecipes = [
//   {
//     id: "1",
//     title: "Tomato Soup",
//     cookTime: 25,
//     servings: 2,
//     instructions: "INSTRUCTIONS...",
//     ingredients: [["tomato", "6"], ['salt', "1 tsp"]]
//   },
//   {
//     id: "2",
//     title: "Grilled Chicken",
//     cookTime: 40,
//     servings: 8,
//     instructions: "INSTRUCTIONS...",
//     ingredients: [["meat", "6"], ['garlic', "10"], ['salt', "1 tsp"]]
//   },
// ]
// localStorage.setItem("recipesList", JSON.stringify(dummyRecipes))

export const useStore = create<TRecipeSlice & TFormSlice, [["zustand/devtools", never]]>(devtools(
  (...a) => ({
    ...createFormSlice(...a),
    ...createRecipeSlice(...a)
  })
))
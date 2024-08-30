import { StateCreator } from "zustand";
import { TFormSlice } from "../types/FormSlice.type";

export const createFormSlice: StateCreator<TFormSlice> = (set) => ({
  isFormShown: false,
  openForm: () => set({ isFormShown: true }),
  closeForm: () => set({ isFormShown: false })
})
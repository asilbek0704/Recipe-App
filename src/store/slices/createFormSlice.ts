import { TFormSlice } from "../types/FormSlice.type";

export const createFormSlice = (set) => ({
  isFormShown: false,
  openForm: () => set({ isFormShown: true }),
  closeForm: () => set({ isFormShown: false })
} as TFormSlice)
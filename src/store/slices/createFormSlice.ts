export const createFormSlice = (set) => ({
  isFormShown: false,
  openForm: () => set({ isFormShown: true }),
  closeForm: () => set({ isFormShown: false })
})
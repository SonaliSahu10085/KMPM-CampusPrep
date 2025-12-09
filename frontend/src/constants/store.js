import { create } from 'zustand'

export const useStore = create((set) => ({
  theme: "light",
  setTheme: (newTheme) => set({ theme: newTheme }),

  isAuthenticatedUser: false,
  setIsAuthenticatedUser: (value) => set({ isAuthenticatedUser: value }),

  loading: false,
  setLoading: (value) => set({ loading: value }),
  
  isNavOpen: false,
  setNavOpen: (value) => set({isNavOpen: value})

}))

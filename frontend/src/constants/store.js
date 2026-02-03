import { create } from "zustand";

export const useStore = create((set) => ({
  BACKEND_API_URL: import.meta.env.VITE_BACKEND_URL,

  token: "",
  setToken: (token) => set({ token }),

  user: null,
  setUser: (loggedInUser) => set({ user: loggedInUser }),

  theme: "light",
  setTheme: (newTheme) => set({ theme: newTheme }),

  isAuthenticatedUser: false,
  setIsAuthenticatedUser: (value) => set({ isAuthenticatedUser: value }),

  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),

  isNavOpen: false,
  setNavOpen: (value) => set({ isNavOpen: value }),
}));

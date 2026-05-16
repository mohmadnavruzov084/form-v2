import { create } from "zustand";

export const useUserDataStore = create((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
  ClearUser: () => set({ user: null }),
}));

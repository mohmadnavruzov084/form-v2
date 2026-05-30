import { create } from "zustand";

interface UserData {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  company?: string;
  address?: string;
  subscriptionPlan?: string;
  verificationMethod?: string;
}

interface UserStore {
  user: UserData | null;
  setUser: (data: UserData) => void;
  updateUser: (data: Partial<UserData>) => void;
  clearUser: () => void;
}

export const useUserDataStore = create<UserStore>((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
  updateUser: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : data,
    })),
  clearUser: () => set({ user: null }),
}));

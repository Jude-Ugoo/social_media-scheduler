import { create } from "zustand";
import newRequest from "../utils/newRequest";

type User = {
  name: string;
  email: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    try {
      const response = await fetch(
        "http://localhost:8800/api/users/64848d314b033038c41cb5ac",
        {
          method: "GET",
          credentials: "include", // Send cookies for authentication if applicable
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();
      set({ user: userData });
    } catch (error) {
      console.error("Error fetching user:", error);
      set({ user: null });
    }
  },
}));

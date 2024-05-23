import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  accessibilityMode: boolean;
  toggleAccessibilityMode: () => void;
  setMode: (value: boolean) => void;
}

export const useStore = create(
  persist<StoreState>(
    (set) => ({
      accessibilityMode: false,
      setMode: (value) => set({ accessibilityMode: value }),
      toggleAccessibilityMode: () =>
        set((state) => ({ accessibilityMode: !state.accessibilityMode })),
    }),
    {
      name: "accessibility-storage", // unique name for the storage
    }
  )
);

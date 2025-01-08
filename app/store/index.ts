import { create } from "zustand";

export const useSectionStore = create<{
  active: string;
  setActive: (section: string) => void;
}>()((set) => ({
  active: "#about",
  setActive: (section: string) =>
    set((state) => ({ ...state, active: section })),
}));

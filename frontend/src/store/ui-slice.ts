import { StateCreator } from "zustand";
import { UISlice, UIState } from "./types/ui";

const initialState: UIState = {
  theme: localStorage.getItem("theme"),
  isOpenDropDownTheme: false,
  expandedSidebarAdmin: false,
};

export const createUISlice: StateCreator<
  UISlice,
  [["zustand/immer", never]],
  [],
  UISlice
> = (set) => ({
  ...initialState,
  setTheme: (themeMode: string | null) =>
    set((state) => {
      state.theme = themeMode;
    }),
  setIsOpenDropDownTheme: (isOpen: boolean) =>
    set((state) => {
      state.isOpenDropDownTheme = isOpen;
    }),
  setExpandedSidebarAdmin: (isExpanded) =>
    set((state) => {
      state.expandedSidebarAdmin = isExpanded;
    }),
});

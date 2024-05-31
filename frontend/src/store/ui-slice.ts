import { StateCreator } from "zustand";
import { UISlice, UIState } from "../types/uiType";

const initialState: UIState = {
  theme: localStorage.getItem("theme"),
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
});

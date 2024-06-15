import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Store } from "./types/store";
import { createUISlice } from "./ui-slice";

const useStore = create<Store>()(
  devtools(immer((...a) => ({ ...createUISlice(...a) }))),
);

export default useStore;

import { create } from "zustand";
import { Store } from "../types/storeType";
import { createUISlice } from "./ui-slice";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

const useStore = create<Store>()(
  devtools(immer((...a) => ({ ...createUISlice(...a) }))),
);

export default useStore;

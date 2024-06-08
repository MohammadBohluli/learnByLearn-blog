import cslx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: string[]) => {
  return twMerge(cslx(classes.filter(Boolean)));
};

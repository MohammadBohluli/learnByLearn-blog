import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateToPersian(date: string) {
  return new Date(date).toLocaleDateString("fa-IR");
}

import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const tooltip = cva(
  [
    "group invisible rounded-full bg-blue-600",
    "px-3 py-1 text-[12px] absolute z-50 text-white",
    " transition-all  group-hover:visible",
    "opacity-20 group-hover:opacity-100",
  ],
  {
    variants: {
      placement: {
        top: [
          "bottom-[calc(100%+var(--offset))]",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-5",
          "group-hover:translate-y-0",
        ],
        right: [
          "left-[calc(100%+var(--offset))]",
          "top-1/2",
          "-translate-y-1/2",
          "-translate-x-5",
          "group-hover:translate-x-0",
        ],
        bottom: [
          "top-[calc(100%+var(--offset))]",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-5",
          "group-hover:translate-y-0",
        ],
        left: [
          "right-[calc(100%+var(--offset))]",
          "top-1/2",
          "-translate-y-1/2",
          "-translate-x-5",
          "group-hover:translate-x-0",
        ],
      },
    },
    compoundVariants: [{ placement: "top" }],
    defaultVariants: {
      placement: "top",
    },
  },
);

export interface TooltipProps extends VariantProps<typeof tooltip> {
  children: ReactNode;
  message: string;
  visible?: boolean;
  offset?: number;
}

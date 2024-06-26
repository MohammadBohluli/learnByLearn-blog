import { cn } from "@/lib/utils";
import React from "react";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RowForm = ({ children, className, ...props }: Props) => {
  return (
    <div className={cn("mb-5", className)} {...props}>
      {children}
    </div>
  );
};

export default RowForm;

import { Link } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div
      className={cn(
        "p-2 font-vibes text-[27px] font-bold md:text-[35px] lg:text-[40px]",
        "bg-gradient-to-r from-emerald-500 to-lime-600 bg-clip-text text-transparent ",
        className,
      )}
      {...props}
    >
      <Link to={"/"}>My Blog</Link>
    </div>
  );
};

export default Logo;

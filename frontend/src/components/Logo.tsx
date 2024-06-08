import { Link } from "react-router-dom";
import { cn } from "../utils/utils";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={cn(
        " font-vibes text-[27px] md:text-[35px] lg:text-[45px]",
        `${className ? className : ""}`,
      )}
    >
      <Link to={"/"}>LearnByLearn</Link>
    </div>
  );
};

export default Logo;

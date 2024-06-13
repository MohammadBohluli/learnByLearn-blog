import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DesktopSidebarItemProps } from "./type";
import { Link } from "react-router-dom";

const DesktopSidebarItem = ({
  item,
  expanded,
  onClick,
  selectedItem,
}: DesktopSidebarItemProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={item.path}>
            <li
              onClick={onClick}
              className={`group my-1 flex cursor-pointer items-center
              rounded-md px-3 py-2 font-medium transition-colors
              ${selectedItem === item.id ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white"}`}
            >
              {item.icon}
              <span
                className={` overflow-hidden whitespace-nowrap transition-all ${expanded ? "mr-3 w-52" : "w-0"}`}
              >
                {item.label}
              </span>
            </li>
          </Link>
        </TooltipTrigger>

        <TooltipContent
          side="left"
          sideOffset={17}
          className={`${expanded ? "invisible" : "visible"} border-none bg-primary text-white`}
        >
          {item.label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DesktopSidebarItem;

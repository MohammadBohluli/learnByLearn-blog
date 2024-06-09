import { TbChevronLeftPipe, TbChevronRightPipe } from "react-icons/tb";
import { ReactNode, createContext, useContext, useState } from "react";
import Logo from "../../components/Logo";
import Button from "../../components/UI/Button";
import Tooltip from "../../components/UI/tooltip/Tooltip";
import { PropsSidebarItem, SidebarContextType } from "./type";

const SidebarContext = createContext<SidebarContextType>({
  expanded: true,
});

const Sidebar = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <SidebarContext.Provider value={{ expanded }}>
      <nav className="flex h-full flex-col border-l shadow-sm dark:border-slate-800">
        <div className="flex items-center justify-between p-4 pb-2">
          <Logo
            className={`overflow-hidden transition-all lg:text-[38px] dark:text-white
                ${expanded ? "w-52" : "w-0"}`}
          />
          <Button
            onClick={() => setExpanded(!expanded)}
            className=" rounded-lg bg-gray-300 p-1.5  hover:bg-slate-700/50 dark:bg-slate-700"
          >
            {expanded ? <TbChevronRightPipe /> : <TbChevronLeftPipe />}
          </Button>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </SidebarContext.Provider>
  );
};

export const SidebarItem = ({ icon, text, active }: PropsSidebarItem) => {
  const { expanded } = useContext(SidebarContext);
  `overflow-hidden transition-all ${expanded ? "w-53 mr-3" : "w-0"}`;
  return (
    <Tooltip message={text} placement="left" visible={!expanded} offset={20}>
      <li
        className={`group my-1 flex cursor-pointer items-center
  rounded-md px-3 py-2 font-medium transition-colors 
  ${active ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white"}
  `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${expanded ? "mr-3 w-52" : "w-0"}`}
        >
          {text}
        </span>
      </li>
    </Tooltip>
  );
};

export default Sidebar;
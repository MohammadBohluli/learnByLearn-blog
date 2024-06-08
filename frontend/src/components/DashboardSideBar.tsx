import { TbChevronLeftPipe, TbChevronRightPipe } from "react-icons/tb";
import { ReactNode, createContext, useContext, useState } from "react";
import Button from "./UI/Button";
import Tooltip from "./UI/tooltip/Tooltip";
interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType>({
  expanded: true,
});

interface Props {
  children: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <SidebarContext.Provider value={{ expanded }}>
      <aside className="flex h-screen">
        <nav className="flex h-full flex-col border-l shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <img
              src="https://img.logoipsum.com/243.svg"
              alt=""
              className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            />
            <Button
              onClick={() => setExpanded(!expanded)}
              className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
            >
              {expanded ? <TbChevronLeftPipe /> : <TbChevronRightPipe />}
            </Button>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
};

interface PropsSidebarItem {
  icon: ReactNode;
  text: string;
  active?: boolean;
}

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

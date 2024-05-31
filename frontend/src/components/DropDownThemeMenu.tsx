import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import Button from "./UI/Button";
import useDarkMode from "../hooks/useDarkMode";
import { useState } from "react";

interface Props {
  dispaly: "block" | "hidden";
}

const DropDownThemeMenu = ({ dispaly }: Props) => {
  const { setTheme } = useDarkMode();
  const [selectedMode, setSelectedMode] = useState<number>(3);

  const options = [
    { id: 1, label: "تاریک", value: "dark", icon: <MdDarkMode /> },
    { id: 2, label: "روشن", value: "light", icon: <MdOutlineLightMode /> },
    { id: 3, label: "سیستم", value: null, icon: <RiComputerLine /> },
  ];

  return (
    <div className={`${dispaly}`}>
      <ul className="drop-down-menu">
        {options.map((option) => (
          <li
            key={option.id}
            className={`rounded-md px-3 hover:bg-slate-100 dark:hover:bg-slate-500 ${selectedMode === option.id ? `bg-slate-100 dark:bg-slate-500` : ``}`}
          >
            <Button
              className="flex items-center justify-between gap-4 rounded-md text-lg "
              onClick={() => {
                setTheme(option.value);
                setSelectedMode(option.id);
              }}
            >
              {option.icon}
              <span>{option.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownThemeMenu;

import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import Button from "./UI/Button";
import useDarkMode from "../hooks/useDarkMode";

const DropDownMenu = () => {
  const { setTheme } = useDarkMode();

  return (
    <ul className="drop-down-menu">
      <li className="rounded-md px-3 hover:bg-slate-100">
        <Button
          className="flex items-center justify-between gap-4 rounded-md text-lg "
          onClick={() => setTheme("dark")}
        >
          <MdDarkMode />
          <span>تاریک</span>
        </Button>
      </li>
      <li className="rounded-md px-3 hover:bg-slate-100">
        <Button
          className="flex items-center justify-between gap-4 rounded-md text-lg "
          onClick={() => setTheme("light")}
        >
          <MdOutlineLightMode />
          <span>روشن</span>
        </Button>
      </li>
      <li className="rounded-md px-3 hover:bg-slate-100">
        <Button
          className="flex items-center justify-between gap-4 rounded-md text-lg "
          onClick={() => setTheme(null)}
        >
          <RiComputerLine />
          <span>سیستم</span>
        </Button>
      </li>
    </ul>
  );
};

export default DropDownMenu;

// if (!("theme" in localStorage))
//   systemTheme.onchange = () => {
//     if (systemTheme.matches) {
//       rootElement.add("dark");
//       localStorage.theme = "dark";
//       console.log("auto run 1");
//     } else {
//       rootElement.remove("dark");
//       localStorage.theme = "light";
//       console.log("auto run 2");
//     }
//   };

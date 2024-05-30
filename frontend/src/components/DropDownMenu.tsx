import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import Button from "./UI/Button";
import useDarkMode from "../hooks/useDarkMode";

const DropDownMenu = () => {
  const { setColorMode } = useDarkMode();

  return (
    <ul className="drop-down-menu">
      <li>
        <Button
          className="flex items-center justify-between gap-4 text-lg"
          onClick={() => setColorMode("dark")}
        >
          <MdDarkMode />
          <span>تاریک</span>
        </Button>
      </li>
      <li>
        <Button
          className="flex items-center justify-between gap-4 text-lg"
          onClick={() => setColorMode("light")}
        >
          <MdOutlineLightMode />
          <span>روشن</span>
        </Button>
      </li>
      <li>
        <Button
          className="flex items-center justify-between gap-4 text-lg"
          onClick={() => setColorMode("system")}
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

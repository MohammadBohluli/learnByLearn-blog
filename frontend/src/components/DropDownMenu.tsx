import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import Button from "./UI/Button";
import { useEffect, useState } from "react";

const DropDownMenu = () => {
  const mode = localStorage.getItem("theme");
  const [colorMode, setColorMode] = useState<string | null>(mode);
  // detect dark mode user's system is enable or not
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const rootElement = document.documentElement.classList;

  useEffect(() => {
    if (colorMode === "dark") {
      rootElement.add("dark");
      localStorage.theme = "dark";
    }

    if (colorMode === "light") {
      rootElement.remove("dark");
      localStorage.theme = "light";
    }

    // for the first time user open the site and
    //color theme is determined based on the user's system theme mode
    if (
      colorMode === "system" ||
      (!("theme" in localStorage) && systemTheme.matches)
    ) {
      localStorage.removeItem("theme");

      systemTheme.matches
        ? rootElement.add("dark")
        : rootElement.remove("dark");
    }
  }, [colorMode]);

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
          onClick={() => {
            // localStorage.removeItem("theme");
            setColorMode("system");
          }}
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

import { useState, useEffect } from "react";

const useDarkMode = () => {
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

  return { colorMode, setColorMode };
};

export default useDarkMode;

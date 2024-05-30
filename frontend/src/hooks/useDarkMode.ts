import { useState, useEffect } from "react";
import useStore from "../store/store";

const useDarkMode = () => {
  const { theme, setTheme } = useStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }));
  // const mode = localStorage.getItem("theme");
  // const [colorMode, setColorMode] = useState<string | null>(mode);
  // detect dark mode user's system is enable or not
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const rootElement = document.documentElement.classList;

  useEffect(() => {
    if (theme === "dark") {
      rootElement.add("dark");
      localStorage.theme = "dark";
    }

    if (theme === "light") {
      rootElement.remove("dark");
      localStorage.theme = "light";
    }

    // for the first time user open the site and
    //color theme is determined based on the user's system theme mode
    if (
      theme === "system" ||
      (!("theme" in localStorage) && systemTheme.matches)
    ) {
      localStorage.removeItem("theme");

      systemTheme.matches
        ? rootElement.add("dark")
        : rootElement.remove("dark");
    }
  }, [theme]);

  return { theme, setTheme };
};

export default useDarkMode;

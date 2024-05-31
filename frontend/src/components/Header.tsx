import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Button from "./UI/Button";
import DropDownThemeMenu from "./DropDownThemeMenu";
import useStore from "../store/store";
import { RiComputerLine } from "react-icons/ri";
import Logo from "./Logo";
import Navabr from "./Navabr";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  const theme = useStore((state) => state.theme);
  const { isOpenDropDownTheme, setIsOpenDropDownTheme } = useStore((state) => ({
    isOpenDropDownTheme: state.isOpenDropDownTheme,
    setIsOpenDropDownTheme: state.setIsOpenDropDownTheme,
  }));

  const toggleNavbar = isOpenNav ? "translate-x-0" : "translate-x-full";

  return (
    <header
      className=" flex items-center justify-between text-slate-900
    dark:text-slate-200"
    >
      <div className="flex gap-4">
        <div className="flex md:hidden">
          <Button onClick={() => setIsOpenNav(true)}>
            <FiMenu size={33} />
          </Button>
        </div>

        <div className="relative flex">
          <Button
            className="text-[23px] md:text-[30px]"
            onClick={() => setIsOpenDropDownTheme(!isOpenDropDownTheme)}
          >
            {theme ? (
              theme === "dark" ? (
                <MdDarkMode />
              ) : (
                <MdOutlineLightMode />
              )
            ) : (
              <RiComputerLine />
            )}
          </Button>
          <DropDownThemeMenu
            dispaly={isOpenDropDownTheme ? `block` : `hidden`}
          />
        </div>

        <Button className="text-[23px] md:text-[30px]">
          <CiSearch />
        </Button>
      </div>

      <div
        className={`fixed left-0 right-0 top-0 flex  h-screen flex-col 
                  bg-white/95 transition-transform duration-700 md:static 
                  md:h-full md:translate-x-0 dark:bg-slate-900/95 ${toggleNavbar}`}
      >
        <div className="p-3 md:hidden">
          <Button onClick={() => setIsOpenNav(false)}>
            <IoClose size={35} />
          </Button>
        </div>
        <Navabr />
      </div>
      <Logo />
    </header>
  );
};

export default Header;

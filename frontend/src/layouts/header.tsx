import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Button from "../components/UIO/Button";
import DropDownThemeMenu from "../components/DropDownThemeMenu";
import useStore from "../store/store";
import { RiComputerLine } from "react-icons/ri";
import Logo from "../components/logo";
import Navabr from "./navbar";
import Modal from "../components/UIO/Modal";
import Search from "../components/Search";

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
      className=" mb-12 flex items-center justify-between
    text-slate-900 dark:text-slate-200"
    >
      <div className="flex gap-4">
        <div className="flex lg:hidden">
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

        <Modal>
          <Modal.Open openName="open-search-box">
            <Button className="text-[23px] md:text-[30px]">
              <CiSearch />
            </Button>
          </Modal.Open>
          <Modal.Window openName="open-search-box">
            <Search />
          </Modal.Window>
        </Modal>
      </div>

      <div
        className={`fixed left-0 right-0 top-0 flex  h-screen flex-col 
                  bg-white/95 transition-transform duration-700 dark:bg-slate-900/95 
                  lg:static lg:h-full lg:translate-x-0 ${toggleNavbar}`}
      >
        <div className="p-3 lg:hidden">
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

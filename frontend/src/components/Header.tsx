import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
// import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Button from "./UI/Button";

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const toggleNavbar = isOpenNav ? "translate-x-0" : "translate-x-full";
  return (
    <header className=" flex items-center justify-between text-gray-900 ">
      <div className="flex gap-4">
        <div className="flex md:hidden">
          <Button onClick={() => setIsOpenNav(true)}>
            <FiMenu size={33} />
          </Button>
        </div>
        <Button className="text-[23px] md:text-[30px]">
          <MdDarkMode />
        </Button>
        <Button className="text-[23px] md:text-[30px]">
          <CiSearch />
        </Button>
      </div>

      <div
        className={`fixed left-0 right-0 top-0 flex  h-screen flex-col 
                  bg-white/95 transition-transform duration-700 md:static 
                  md:h-full md:translate-x-0 ${toggleNavbar}`}
      >
        <div className="p-3 md:hidden">
          <Button onClick={() => setIsOpenNav(false)}>
            <IoClose size={35} />
          </Button>
        </div>
        <nav>
          <ul className="flex flex-col gap-7 text-center text-2xl font-[500] md:flex-row">
            <li>وبلاگ</li>
            <li>دسته بندی</li>
            <li>پروژه ها</li>
            <li>درباره</li>
          </ul>
        </nav>
      </div>
      <div className=" font-vibes text-[27px] md:text-[35px] lg:text-[45px]">
        LearnByLearn
      </div>
    </header>
  );
};

export default Navbar;

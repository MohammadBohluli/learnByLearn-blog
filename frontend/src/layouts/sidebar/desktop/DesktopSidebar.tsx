import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SIDEBAR_DATA } from "@/data/constands";
import useStore from "@/store/store";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DesktopSidebarItem from "./DesktopSidebarItem";
import Logo from "@/components/Logo";

const DesktopSidebar = () => {
  const { expandedSidebarAdmin, setExpandedSidebarAdmin } = useStore(
    (state) => ({
      expandedSidebarAdmin: state.expandedSidebarAdmin,
      setExpandedSidebarAdmin: state.setExpandedSidebarAdmin,
    }),
  );
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <nav className=" flex h-full flex-col border-l shadow-sm dark:border-slate-800">
      <div
        className={`flex items-center p-4 pb-2 ${expandedSidebarAdmin ? "justify-between" : "justify-center"}`}
      >
        <Logo
          className={`overflow-hidden transition-all dark:text-white lg:text-[38px]
                ${expandedSidebarAdmin ? "w-52" : "w-0"}`}
        />
        <Button
          onClick={() => setExpandedSidebarAdmin(!expandedSidebarAdmin)}
          className="rounded-full text-white"
          variant={"outline"}
          size={"icon"}
        >
          {expandedSidebarAdmin ? (
            <IoIosArrowForward size={20} />
          ) : (
            <IoIosArrowBack size={20} />
          )}
        </Button>
      </div>
      <ul className="flex-1 px-3">
        {SIDEBAR_DATA.map((item) => (
          <DesktopSidebarItem
            selectedItem={selectedItem}
            onClick={() => setSelectedItem(item.id)}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div
        className="absolute bottom-0 right-0 
        flex w-full justify-between overflow-hidden border-t p-3"
      >
        <div className="flex items-center justify-center gap-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <span className="whitespace-nowrap">محمد بهلولی</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <HiDotsHorizontal size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[10rem]">
            <DropdownMenuItem
              className=" cursor-pointer justify-end
               gap-2 rounded-md p-2 hover:text-white focus:bg-primary"
            >
              <span>پروفایل</span>
              <CgProfile size={20} />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className=" cursor-pointer  justify-end
               gap-2 rounded-md p-2 hover:text-white focus:bg-red-500"
            >
              <span>خروج</span>
              <BiLogOut size={20} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default DesktopSidebar;

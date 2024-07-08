import Logo from "@/components/Logo";
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
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiDotsHorizontal } from "react-icons/hi";
import DesktopSidebarItem from "./desktop-sidebar-item";

const DesktopSidebar = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <nav className=" flex h-full min-w-72 flex-col border-l shadow-sm dark:border-slate-800">
      <Logo className="p-3 text-center" />
      <ul className="flex-1 px-3">
        {SIDEBAR_DATA.map((item) => (
          <DesktopSidebarItem
            key={item.id}
            item={item}
            selectedItem={selectedItem}
            onSelectedItem={() => setSelectedItem(item.id)}
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
              className="cursor-pointer justify-end
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

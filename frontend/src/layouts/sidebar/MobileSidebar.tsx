import Logo from "@/components/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SIDEBAR_DATA } from "@/data/constands";
import { HiDotsHorizontal, HiMenu } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import AdminSidebarItem from "./AdminSidebarItem";
import { useState } from "react";

const MobileSidebar = () => {
  // submit color blue for selected menu sidebar item
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="fixed right-5 top-5 z-50 rounded-full "
        >
          <HiMenu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="items-center">
          <Logo className="my-2 text-4xl font-bold dark:text-white" />
        </SheetHeader>
        <ul>
          {SIDEBAR_DATA.map((item) => (
            <AdminSidebarItem
              item={item}
              key={item.id}
              selectedItem={selectedItem}
              onClick={() => setSelectedItem(item.id)}
            />
          ))}
        </ul>

        <div
          className="absolute bottom-0 right-0 
        flex w-full justify-between border-t p-3"
        >
          <div className="flex items-center justify-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span>محمد بهلولی</span>
          </div>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant={"ghost"} size={"icon"} className="rounded-full">
                <HiDotsHorizontal size={20} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="gap-5 p-2 text-xl dark:text-white">
              <div
                className="flex cursor-pointer items-center gap-2
               rounded-md p-2 hover:bg-primary hover:text-white"
              >
                <CgProfile size={20} />
                <span>پروفایل</span>
              </div>
              <div
                className="flex cursor-pointer items-center gap-2
               rounded-md p-2 hover:bg-red-600 hover:text-white"
              >
                <BiLogOut size={20} />
                <span>خروج</span>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

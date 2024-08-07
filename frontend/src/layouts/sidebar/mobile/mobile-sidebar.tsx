import Logo from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SIDEBAR_DATA } from "@/data/constands";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiDotsHorizontal, HiMenu } from "react-icons/hi";
import MobileSidebarItem from "./mobile-sidebar-item";

const MobileSidebar = () => {
  // submit color blue for selected menu sidebar item
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [openMobileSidebar, setOpenMobileSidebar] = useState<boolean>(false);

  return (
    <Sheet open={openMobileSidebar} onOpenChange={setOpenMobileSidebar}>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="fixed bottom-5 right-5 rounded-full"
        >
          <HiMenu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="items-center">
          <Logo className="text-3xl" />
        </SheetHeader>
        <ul>
          {SIDEBAR_DATA.map((item) => (
            <MobileSidebarItem
              item={item}
              key={item.id}
              selectedItem={selectedItem}
              onSelectedItem={() => setSelectedItem(item.id)}
              onOpenMobileSidebar={() => setOpenMobileSidebar(false)}
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

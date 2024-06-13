// import { TbChevronLeftPipe, TbChevronRightPipe } from "react-icons/tb";
// import { useState } from "react";
// import Logo from "../../components/Logo";

// import { SIDEBAR_DATA } from "@/data/constands";
// import DesktopSidebarItem from "./DesktopSidebarItem";
// import { CgProfile } from "react-icons/cg";
// import { BiLogOut } from "react-icons/bi";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { HiDotsHorizontal } from "react-icons/hi";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const DesktopSidebar = () => {
//   const [expanded, setExpanded] = useState<boolean>(true);
//   const [selectedItem, setSelectedItem] = useState<number>(0);

//   return (
//     <nav className=" flex h-full flex-col border-l shadow-sm dark:border-slate-800">
//       <div
//         className={`flex items-center p-4 pb-2 ${expanded ? "justify-between" : "justify-center"}`}
//       >
//         <Logo
//           className={`overflow-hidden transition-all dark:text-white lg:text-[38px]
//                 ${expanded ? "w-52" : "w-0"}`}
//         />
//         <Button
//           onClick={() => setExpanded(!expanded)}
//           // className="rounded-lg bg-gray-300 p-1.5 hover:bg-slate-700/50 dark:bg-slate-700"
//           className="rounded-full text-white"
//           variant={"outline"}
//           size={"icon"}
//         >
//           {expanded ? (
//             <IoIosArrowForward size={20} />
//           ) : (
//             <IoIosArrowBack size={20} />
//           )}
//         </Button>
//       </div>
//       <ul className="flex-1 px-3">
//         {SIDEBAR_DATA.map((item) => (
//           <DesktopSidebarItem
//             expanded={expanded}
//             selectedItem={selectedItem}
//             onClick={() => setSelectedItem(item.id)}
//             item={item}
//             key={item.id}
//           />
//         ))}
//       </ul>
//       <div
//         className="absolute bottom-0 right-0
//         flex w-full justify-between overflow-hidden border-t p-3"
//       >
//         <div className="flex items-center justify-center gap-6">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//             <AvatarFallback>A</AvatarFallback>
//           </Avatar>
//           <span className="whitespace-nowrap">محمد بهلولی</span>
//         </div>

//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant={"ghost"} size={"icon"} className="rounded-full">
//               <HiDotsHorizontal size={20} />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="min-w-[10rem]">
//             <DropdownMenuItem
//               className=" cursor-pointer justify-end
//                gap-2 rounded-md p-2 hover:text-white focus:bg-primary"
//             >
//               <span>پروفایل</span>
//               <CgProfile size={20} />
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem
//               className=" cursor-pointer  justify-end
//                gap-2 rounded-md p-2 hover:text-white focus:bg-red-500"
//             >
//               <span>خروج</span>
//               <BiLogOut size={20} />
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </nav>
//   );
// };

// export default DesktopSidebar;

import { TbChevronLeftPipe, TbChevronRightPipe } from "react-icons/tb";
import { useState } from "react";
import Logo from "../../components/Logo";

import { SIDEBAR_DATA } from "@/data/constands";
import DesktopSidebarItem from "./DesktopSidebarItem";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DesktopSidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <nav className=" flex h-full flex-col border-l shadow-sm dark:border-slate-800">
      <div
        className={`flex items-center p-4 pb-2 ${expanded ? "justify-between" : "justify-center"}`}
      >
        <Logo
          className={`overflow-hidden transition-all dark:text-white lg:text-[38px]
                ${expanded ? "w-52" : "w-0"}`}
        />
        <Button
          onClick={() => setExpanded(!expanded)}
          // className="rounded-lg bg-gray-300 p-1.5 hover:bg-slate-700/50 dark:bg-slate-700"
          className="rounded-full text-white"
          variant={"outline"}
          size={"icon"}
        >
          {expanded ? (
            <IoIosArrowForward size={20} />
          ) : (
            <IoIosArrowBack size={20} />
          )}
        </Button>
      </div>
      <ul className="flex-1 px-3">
        {SIDEBAR_DATA.map((item) => (
          <DesktopSidebarItem
            expanded={expanded}
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

import { ColumnDef } from "@tanstack/react-table";
import { User } from "../type";
import { dateToPersian } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export const columns: ColumnDef<User>[] = [
  { header: "نام", id: "نام", accessorKey: "firstName", sortingFn: "text" },
  {
    header: "نام خانوادگی",
    id: "نام خانوادگی",
    accessorKey: "firstName",
    sortingFn: "text",
  },
  { header: "ایمیل", id: "ایمیل", accessorKey: "email", enableSorting: false },
  {
    header: "تاریخ ثبت نام",
    id: "تاریخ ثبت نام",
    accessorKey: "createdAt",
    sortingFn: "datetime",
    cell: ({ cell }) => {
      const cellValue = cell.getValue();
      return dateToPersian(String(cellValue));
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <HiDotsHorizontal size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center font-bold">
              اقدامات
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex cursor-pointer justify-end gap-2">
              <span>حذف</span>
              <MdDelete size={16} />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex cursor-pointer justify-end gap-2">
              <span>ویرایش</span>
              <RiEdit2Fill size={16} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

import { ColumnDef, Row, SortingFn } from "@tanstack/react-table";
import { Article } from "@/data/article-data";
import { dateToPersian } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sortByDate: SortingFn<Article> = (
  rowA: Row<Article>,
  rowB: Row<Article>,
  columnId: string,
) => {
  return (
    new Date(rowA.getValue(columnId)).valueOf() -
    new Date(rowB.getValue(columnId)).valueOf()
  );
};

export const columns: ColumnDef<Article>[] = [
  { header: "عنوان", id: "عنوان", enableHiding: false, accessorKey: "title" },
  { header: "نویسنده", id: "نویسنده", accessorKey: "author" },
  {
    id: "تاریخ انتشار",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="pr-0 font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          تاریخ انتشار
          <LuArrowUpDown size={17} className="mr-1" />
        </Button>
      );
    },
    accessorKey: "published",
    cell: ({ cell }) => {
      const cellValue = cell.getValue();
      return dateToPersian(String(cellValue));
    },
    sortingFn: sortByDate,
  },
  {
    id: "تاریخ بروزرسانی",
    accessorKey: "updated",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="pr-0 font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          تاریخ بروزرسانی
          <LuArrowUpDown size={17} className="mr-1" />
        </Button>
      );
    },
    cell: ({ cell }) => {
      const cellValue = cell.getValue();
      return dateToPersian(String(cellValue));
    },
    sortingFn: sortByDate,
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

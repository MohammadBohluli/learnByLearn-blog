import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      globalFilter,
      columnVisibility,
    },
  });

  return (
    <div className="mb-8">
      <div className="flex justify-between gap-2">
        {/* input search filtering *************************************************/}
        <SearchInput
          value={globalFilter}
          onSearch={(value) => setGlobalFilter(value)}
        />

        {/* visibility column button ************************************************/}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex items-center justify-center gap-2 rounded-md border
            border-input bg-background px-2 py-1 hover:bg-accent hover:text-accent-foreground"
          >
            <span className="text-nowrap">ستون ها</span>
            <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-5">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  className="cursor-pointer"
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value: boolean) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* pagination ***************************************************************/}
      <Table className="my-4 border">
        <TableHeader className="bg-muted/60">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === "asc"
                            ? "Sort ascending"
                            : header.column.getNextSortingOrder() === "desc"
                              ? "Sort descending"
                              : "Clear sort"
                          : undefined
                      }
                      className="text-[15px] font-bold dark:text-white"
                    >
                      <Button variant={"ghost"} className="gap-2">
                        <span>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </span>
                        <span>
                          {{
                            asc: <FaSortDown />,
                            desc: <FaSortUp />,
                          }[header.column.getIsSorted() as string] ??
                            (header.column.getCanSort() ? <FaSort /> : null)}
                        </span>
                      </Button>
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>داده ای برای نمایش وجود ندارد</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* pagination */}
      <div className="flex items-center gap-2">
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          قبلی
        </Button>
        <div className="flex gap-1">
          <span>صفحه</span>
          {table.getState().pagination.pageIndex + 1}
          <span>از</span>
          {table.getPageCount()}
        </div>
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          بعدی
        </Button>
      </div>
    </div>
  );
}

export default DataTable;

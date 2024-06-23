import { users } from "@/data/users-data";
import DataTable from "./data-table";
import { columns } from "./columns";

const UserTable = () => {
  return (
    <>
      <DataTable columns={columns} data={users} />
    </>
  );
};

export default UserTable;

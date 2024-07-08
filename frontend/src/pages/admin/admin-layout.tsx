import Sidebar from "@/layouts/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";

const AdminLayout = () => {
  useDarkMode();

  return (
    <>
      <aside className=" bg-color-theme fixed right-0 z-50 h-screen">
        <Sidebar />
      </aside>

      <main className="p-4 lg:mr-[300px]">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;

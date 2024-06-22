import AdminSidebar from "@/layouts/sidebar/AdminSidebar";
import useStore from "@/store/store";
import { Outlet } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";

const AdminLayout = () => {
  const expandedSidebarAdmin = useStore((state) => state.expandedSidebarAdmin);
  useDarkMode();

  return (
    <>
      <div className="">
        <aside className=" bg-color-theme fixed z-50 h-screen">
          <AdminSidebar />
        </aside>

        <main
          className={`${expandedSidebarAdmin ? "lg:mr-[300px]" : "lg:mr-[70px]"} px-4 pb-4 pt-16  transition-all`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;

// grid grid-cols-[min-content_minmax(0,_1fr)]

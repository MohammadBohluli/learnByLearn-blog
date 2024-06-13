import { Outlet } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import AdminSidebar from "@/layouts/sidebar/AdminSidebar";
import { useOnClickOutside } from "usehooks-ts";
import { useRef, useState } from "react";

const AdminLayout = () => {
  const ref = useRef(null);
  const [exp, setExp] = useState<boolean>(false);
  useDarkMode();
  useOnClickOutside(ref, () => setExp(!exp));

  return (
    <>
      <div className="relative grid">
        <aside className=" bg-color-theme fixed z-50 h-screen" ref={ref}>
          <AdminSidebar />
        </aside>

        <main className="mr-[70px] p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;

// grid grid-cols-[min-content_minmax(0,_1fr)]

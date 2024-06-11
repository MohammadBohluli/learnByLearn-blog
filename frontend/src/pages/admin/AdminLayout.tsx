import { Outlet } from "react-router-dom";
import { SIDEBAR_DATA } from "../../data/constands";
import useDarkMode from "../../hooks/useDarkMode";
import Sidebar, { SidebarItem } from "../../layouts/sidebar/Sidebar";

const AdminLayout = () => {
  useDarkMode();

  return (
    <>
      <div className="grid grid-cols-[min-content_minmax(0,_1fr)]">
        <aside className="flex h-full max-w-min">
          <Sidebar>
            {SIDEBAR_DATA.map((data) => (
              <SidebarItem
                icon={data.icon}
                text={data.label}
                active={data.active}
              />
            ))}
          </Sidebar>
        </aside>
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;

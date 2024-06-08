import DashboardSideBar, { SidebarItem } from "../layouts/sidebar/Sidebar";
import useDarkMode from "../hooks/useDarkMode";
import { SIDEBAR_DATA } from "../data/constands";

const Dashboard = () => {
  useDarkMode();

  return (
    <main>
      <DashboardSideBar>
        {SIDEBAR_DATA.map((data) => (
          <SidebarItem
            icon={data.icon}
            text={data.label}
            active={data.active}
          />
        ))}
      </DashboardSideBar>
    </main>
  );
};

export default Dashboard;

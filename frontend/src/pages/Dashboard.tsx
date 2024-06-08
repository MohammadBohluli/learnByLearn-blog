import {
  LuBarChart3,
  LuBoxes,
  LuLayoutDashboard,
  LuPackage,
  LuReceipt,
  LuSettings,
  LuUserCircle,
} from "react-icons/lu";
import DashboardSideBar, { SidebarItem } from "../components/DashboardSideBar";
import useDarkMode from "../hooks/useDarkMode";

const Dashboard = () => {
  useDarkMode();

  return (
    <main>
      <DashboardSideBar>
        <SidebarItem
          icon={<LuLayoutDashboard size={20} />}
          text="داشبورد"
          active={true}
        />
        <SidebarItem icon={<LuBarChart3 size={20} />} text="آمار" />
        <SidebarItem icon={<LuUserCircle size={20} />} text="کاربران" />
        <SidebarItem icon={<LuBoxes size={20} />} text="فهرست" />
        <SidebarItem icon={<LuPackage size={20} />} text="سفارشات" />
        <SidebarItem icon={<LuReceipt size={20} />} text="فروش" />
        <SidebarItem icon={<LuSettings size={20} />} text="تنظیمات" />
      </DashboardSideBar>
    </main>
  );
};

export default Dashboard;

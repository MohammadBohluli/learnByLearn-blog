import { useMediaQuery } from "usehooks-ts";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

const AdminSidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) return <DesktopSidebar />;

  return (
    <>
      <MobileSidebar />
    </>
  );
};

export default AdminSidebar;

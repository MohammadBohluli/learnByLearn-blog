import { useMediaQuery } from "usehooks-ts";
import DesktopSidebar from "./desktop/desktop-sidebar";
import MobileSidebar from "./mobile/mobile-sidebar";

const Sidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) return <DesktopSidebar />;

  return (
    <>
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

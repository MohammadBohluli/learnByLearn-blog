import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

const Layout = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-2 sm:px-6 lg:max-w-6xl xl:max-w-5xl xl:px-0">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

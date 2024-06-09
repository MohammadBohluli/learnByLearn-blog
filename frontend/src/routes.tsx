import { createBrowserRouter } from "react-router-dom";
import { Home, About, Blog, Layout, Projects } from "./pages";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default router;

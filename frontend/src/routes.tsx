import { createBrowserRouter } from "react-router-dom";
import { Home, About, Blog, Layout, Projects } from "./pages";
import Dashboard from "./pages/Dashboard";

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
  { path: "/dashboard", element: <Dashboard /> },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { Home, About, Blog, Layout, Projects } from "./pages";

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
]);

export default router;

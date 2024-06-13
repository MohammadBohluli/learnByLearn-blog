import { createBrowserRouter } from "react-router-dom";
import { Home, About, Blog, Layout, Projects } from "./pages";
import AdminLayout from "./pages/admin/AdminLayout";
import ProfileAdminPage from "./pages/admin/ProfileAdminPage";
import ArticlesAdminPage from "./pages/admin/ArticlesAdminPage";
import UsersAdminPage from "./pages/admin/UsersAdminPage";
import CategoriesAdminPage from "./pages/admin/CategoriesAdminPage";
import StatsAdminPage from "./pages/admin/StatsAdminPage";
import CommentsAdminPage from "./pages/admin/CommentsAdminPage";

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
    path: "/profile",
    element: <AdminLayout />,
    children: [
      { index: true, element: <ProfileAdminPage /> },
      { path: "/profile/articles", element: <ArticlesAdminPage /> },
      { path: "/profile/users", element: <UsersAdminPage /> },
      { path: "/profile/categories", element: <CategoriesAdminPage /> },
      { path: "/profile/stats", element: <StatsAdminPage /> },
      { path: "/profile/comments", element: <CommentsAdminPage /> },
    ],
  },
]);

export default router;

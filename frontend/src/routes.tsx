import { createBrowserRouter } from "react-router-dom";
import { AboutPage, BlogPage, HomePage, Layout, ProjectsPage } from "./pages";
import AdminLayout from "./pages/admin/AdminLayout";
import ArticlesAdminPage from "./pages/admin/articles/ArticlesAdminPage";
import CategoriesAdminPage from "./pages/admin/CategoriesAdminPage";
import CommentsAdminPage from "./pages/admin/CommentsAdminPage";
import ProfileAdminPage from "./pages/admin/profile/ProfileAdminPage";
import StatsAdminPage from "./pages/admin/StatsAdminPage";
import UsersAdminPage from "./pages/admin/UsersAdminPage";
import CreateArticleAdminPage from "./pages/admin/articles/CreateArticleAdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <ProjectsPage /> },
    ],
  },
  {
    path: "/profile",
    element: <AdminLayout />,
    children: [
      { index: true, element: <ProfileAdminPage /> },
      {
        path: "/profile/articles",
        element: <ArticlesAdminPage />,
      },
      {
        path: "/profile/articles/create",
        element: <CreateArticleAdminPage />,
      },
      { path: "/profile/users", element: <UsersAdminPage /> },
      { path: "/profile/categories", element: <CategoriesAdminPage /> },
      { path: "/profile/stats", element: <StatsAdminPage /> },
      { path: "/profile/comments", element: <CommentsAdminPage /> },
    ],
  },
]);

export default router;

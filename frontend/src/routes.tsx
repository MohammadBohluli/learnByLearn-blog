import { createBrowserRouter } from "react-router-dom";
import { AboutPage, BlogPage, HomePage, Layout, ProjectsPage } from "./pages";
import AdminLayout from "./pages/admin/admin-layout";
import ArticlesAdminPage from "./pages/admin/articles/articles-admin-page";
import CategoriesAdminPage from "./pages/admin/category-admin-page";
import CommentsAdminPage from "./pages/admin/comment-admin-page";
import ProfileAdminPage from "./pages/admin/profile/profile-admin-page";
import StatsAdminPage from "./pages/admin/stats-admin-page";
import UsersAdminPage from "./pages/admin/users-admin-page";
import CreateArticleAdminPage from "./pages/admin/articles/create-article-admin-page";
import Login from "./pages/auth/login";
import AuthLayout from "./pages/auth/auth-layout";
import ForgotPassword from "./pages/auth/forgot-password";
import Register from "./pages/auth/register";

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
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgotPassword", element: <ForgotPassword /> },
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

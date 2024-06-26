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
import Login from "./pages/auth/login";
import AuthLayout from "./pages/auth/auth-layout";
import ForgotPassword from "./pages/auth/forgot-password";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/reset-password";

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
      { path: "/resetPassword", element: <ResetPassword /> },
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

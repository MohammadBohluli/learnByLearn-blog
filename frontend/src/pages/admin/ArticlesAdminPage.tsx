import AdminTitlePage from "@/components/AdminTitlePage";
import CardAdminDashboard from "@/components/CardAdminDashboard";
import ArticleTable from "@/features/articles/article-table/page";
import { FaUsers } from "react-icons/fa6";

const ArticlesAdminPage = () => {
  return (
    <>
      <AdminTitlePage>مقالات</AdminTitlePage>
      <div>
        <div className="flex flex-col gap-2">
          <CardAdminDashboard
            variant={"red"}
            title="کاربران"
            stats={8}
            icon={<FaUsers size={50} />}
          />
        </div>
        <ArticleTable />
        <ArticleTable />
      </div>
    </>
  );
};

export default ArticlesAdminPage;

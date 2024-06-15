import AdminTitlePage from "@/components/AdminTitlePage";
import ArticleTable from "@/features/articles/article-table/page";

const ArticlesAdminPage = () => {
  return (
    <>
      <AdminTitlePage>مقالات</AdminTitlePage>
      <div>
        <ArticleTable />
      </div>
    </>
  );
};

export default ArticlesAdminPage;

import AdminTitle from "@/components/AdminTitle";
import ArticleTable from "@/features/articles/article-table/page";

const ArticlesAdminPage = () => {
  return (
    <>
      <AdminTitle>مقالات</AdminTitle>
      <div>
        <ArticleTable />
      </div>
    </>
  );
};

export default ArticlesAdminPage;

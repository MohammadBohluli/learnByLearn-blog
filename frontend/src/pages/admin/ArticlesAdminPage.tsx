import AdminTitle from "@/components/AdminTitle";
import CreateArticle from "@/features/articles/CreateArticle";
// import ArticleTable from "@/features/articles/article-table/page";

const ArticlesAdminPage = () => {
  return (
    <>
      <AdminTitle>مقالات</AdminTitle>
      <div>
        {/* <ArticleTable /> */}
        <CreateArticle />
      </div>
    </>
  );
};

export default ArticlesAdminPage;

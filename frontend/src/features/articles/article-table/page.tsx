import { articles } from "@/data/article-data";
import DataTable from "./data-table";
import { columns } from "./columans";

const ArticleTable = () => {
  return (
    <>
      <DataTable columns={columns} data={articles} />
    </>
  );
};

export default ArticleTable;

import CardAdminDashboard from "@/components/CardAdminDashboard";
import ArticleTable from "@/features/articles/article-table/page";
import { FaUsers } from "react-icons/fa6";

const Dashboard = () => {
  return (
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
    </div>
  );
};

export default Dashboard;

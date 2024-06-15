import AdminTitle from "@/components/AdminTitle";
import CardAdminDashboard from "@/components/CardAdminDashboard";
import { CARD_ADMIN_DASHBOARD } from "@/data/constands";

const StatsAdminPage = () => {
  return (
    <>
      <AdminTitle>آمار</AdminTitle>
      <div className="mb-5 grid justify-items-center gap-3 sm:grid-cols-2 md:grid-cols-4">
        {CARD_ADMIN_DASHBOARD.map((item) => (
          <CardAdminDashboard
            variant={item.variant}
            title={item.title}
            stats={item.stats}
            icon={item.icon}
            key={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default StatsAdminPage;

import { FaUsers } from "react-icons/fa6";
import { Card, CardContent } from "./ui/card";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface CardAdminDashboardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardAdminDashboardVariants> {
  title: string;
  stats: number;
  icon: ReactNode;
}

export const cardAdminDashboardVariants = cva(
  ["h-24 w-72 border-none p-4 font-bold"],
  {
    variants: {
      variant: {
        green: [
          "bg-green-300/80",
          "text-green-600",
          "shadow-[0_0_10px_0_rgba(134,239,172,0.8)]",
        ],
        orange: [
          "bg-orange-300/80",
          "text-orange-600",
          "shadow-[0_0_10px_0_rgba(253,186,116,0.8)]",
        ],
        red: [
          "bg-red-300/80",
          "text-red-600",
          "shadow-[0_0_10px_0_rgba(252,165,165,0.8)]",
        ],
        blue: [
          "bg-sky-300/80",
          "text-sky-600",
          "shadow-[0_0_10px_0_rgba(125,211,252,0.8)]",
        ],
      },
    },
  },
);

/////////////////////////////////////////////
const CardAdminDashboard = ({
  title,
  stats,
  icon,
  variant,
}: CardAdminDashboardProps) => {
  return (
    <Card className={cn(cardAdminDashboardVariants({ variant }))}>
      <CardContent className="flex items-center justify-between p-0">
        <span>{icon}</span>
        <div className="flex flex-col text-center">
          <span className="text-2xl">{stats}</span>
          <span className="text-lg">{title}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardAdminDashboard;

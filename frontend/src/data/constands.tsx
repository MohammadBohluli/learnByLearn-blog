import {
  LuBarChart3,
  LuBoxes,
  LuLayoutDashboard,
  LuSettings,
  LuUserCircle,
} from "react-icons/lu";

export const SIDEBAR_DATA = [
  {
    label: "داشبورد",
    icon: <LuLayoutDashboard size={20} />,
    active: false,
    submenue: false,
  },
  {
    label: "آمار",
    icon: <LuBarChart3 size={20} />,
    active: true,
    submenue: false,
  },
  {
    label: "کاربران",
    icon: <LuUserCircle size={20} />,
    active: false,
    submenue: false,
  },
  {
    label: "فهرست",
    icon: <LuBoxes size={20} />,
    active: false,
    submenue: false,
  },
  {
    label: "تنظیمات",
    icon: <LuSettings size={20} />,
    active: false,
    submenue: false,
  },
];

import { SidebarItem } from "@/layouts/sidebar/type";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaComments, FaUsers } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { LuSettings } from "react-icons/lu";
import { RiArticleFill } from "react-icons/ri";

const iconSize: number = 25;
export const SIDEBAR_DATA: SidebarItem[] = [
  {
    id: 1,
    label: "پروفایل",
    path: "/profile",
    icon: <CgProfile size={iconSize} />,
    active: false,
    submenue: false,
  },
  {
    id: 2,
    label: "مقالات",
    path: "/profile/articles",
    icon: <RiArticleFill size={iconSize} />,
    active: true,
    submenue: false,
  },
  {
    id: 3,
    label: "کاربران",
    path: "/profile/users",
    icon: <FaUsers size={iconSize} />,
    active: false,
    submenue: false,
  },
  {
    id: 4,
    label: "دسته بندی",
    path: "/profile/categories",
    icon: <BiCategory size={iconSize} />,
    active: false,
    submenue: false,
  },
  {
    id: 5,
    label: "آمار",
    path: "/profile/stats",
    icon: <ImStatsDots size={iconSize} />,
    active: false,
    submenue: false,
  },
  {
    id: 6,
    label: "نظرات",
    path: "/profile/comments",
    icon: <FaComments size={iconSize} />,
    active: false,
    submenue: false,
  },
];

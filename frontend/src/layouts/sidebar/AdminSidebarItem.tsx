import { Link } from "react-router-dom";
import { AdminSidebarItemProps } from "./type";

const AdminSidebarItem = ({
  item,
  onClick,
  selectedItem,
}: AdminSidebarItemProps) => {
  return (
    <li
      className={`my-3 rounded-md p-2 transition-colors duration-300 
    hover:bg-blue-600 hover:text-white dark:text-white 
    ${selectedItem === item.id ? "bg-blue-600 text-white" : ""}`}
      onClick={onClick}
    >
      <Link to={item.path}>
        <div className="flex items-center gap-2">
          {item.icon}
          <span>{item.label}</span>
        </div>
      </Link>
    </li>
  );
};

export default AdminSidebarItem;

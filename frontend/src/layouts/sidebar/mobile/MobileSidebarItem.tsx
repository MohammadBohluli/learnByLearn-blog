import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { AdminSidebarItemProps } from "../type";

const MobileSidebarItem = ({
  item,
  onSelectedItem,
  selectedItem,
  onOpenMobileSidebar,
}: AdminSidebarItemProps) => {
  const [expandSubMenu, setExpandSubMenu] = useState<boolean>(false);

  return (
    <div>
      {item.submenue ? (
        <li
          onClick={() => {
            setExpandSubMenu(!expandSubMenu);
            onSelectedItem?.(item.id);
          }}
          className={`group my-1 flex cursor-pointer flex-col rounded-md px-3 py-2 font-medium
            ${selectedItem === item.id ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white"}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex">
              {item.icon}
              <span
                className={`mr-3 overflow-hidden whitespace-nowrap transition-all`}
              >
                {item.label}
              </span>
            </div>
            <div>
              {expandSubMenu ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </div>
          </div>

          {expandSubMenu && (
            <ul
              className="mt-3 flex w-full
             flex-col items-start gap-3 rounded-md bg-background p-3"
            >
              {item.submenueItem?.map((subItem) => (
                <Link
                  to={subItem.path}
                  key={subItem.id}
                  className="w-full rounded-md p-2 hover:bg-blue-600"
                  onClick={() => onOpenMobileSidebar?.()}
                >
                  <li>{subItem.label}</li>
                </Link>
              ))}
            </ul>
          )}
        </li>
      ) : (
        <Link to={item.path}>
          <li
            onClick={() => {
              onSelectedItem?.(item.id);
              onOpenMobileSidebar?.();
            }}
            className={`group my-1 flex cursor-pointer items-center
                   rounded-md px-3 py-2 font-medium
                   ${selectedItem === item.id ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white"}`}
          >
            {item.icon}
            <span
              className={` mr-3 overflow-hidden whitespace-nowrap transition-all`}
            >
              {item.label}
            </span>
          </li>
        </Link>
      )}
    </div>
  );
};

export default MobileSidebarItem;

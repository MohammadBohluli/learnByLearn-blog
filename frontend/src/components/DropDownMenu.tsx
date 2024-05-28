import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import Button from "./UI/Button";

const DropDownMenu = () => {
  return (
    <ul className="drop-down-menu">
      <li>
        <Button className="flex items-center justify-between gap-4 text-lg">
          <MdDarkMode />
          <span>تاریک</span>
        </Button>
      </li>
      <li>
        <Button className="flex items-center justify-between gap-4 text-lg">
          <MdOutlineLightMode />
          <span>روشن</span>
        </Button>
      </li>
      <li>
        <Button className="flex items-center justify-between gap-4 text-lg">
          <RiComputerLine />
          <span>سیستم</span>
        </Button>
      </li>
    </ul>
  );
};

export default DropDownMenu;

import { Link } from "react-router-dom";

const Navabr = () => {
  return (
    <nav>
      <ul
        className="flex flex-col gap-7 text-center text-2xl font-[500] 
     dark:bg-slate-900 lg:flex-row"
      >
        <li>
          <Link to={"/"}>خانه</Link>
        </li>
        <li>
          <Link to={"/blog"}>وبلاگ</Link>
        </li>
        <li>
          <Link to={"/profile"}>مدیریت</Link>
        </li>
        <li>
          <Link to={"/projects"}>پروژه ها</Link>
        </li>
        <li>
          <Link to={"/about"}>درباره</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navabr;

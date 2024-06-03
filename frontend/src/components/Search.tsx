import { CiSearch } from "react-icons/ci";
import Button from "./UI/Button";

const Search = () => {
  return (
    <>
      <div className="flex gap-1 px-2 pb-9">
        <input
          type="text"
          className="grow border-2 border-slate-500 p-1 outline-none focus:border-blue-500 dark:bg-inherit"
          placeholder="جست و جو ..."
        />
        <Button className="text-2xl">
          <CiSearch />
        </Button>
      </div>
      <div className="h-[1px] w-full bg-gray-300 dark:bg-slate-800"></div>

      <div className="flex max-h-96 flex-col gap-8 overflow-y-auto px-2">
        <h2 className="pt-2 text-sm text-sky-400">
          <span> 10 </span>
          مقاله یافت شد
        </h2>
        <div className="flex flex-col gap-4 pb-4">
          <div className="p-2 hover:bg-blue-600">
            <span className="text-[12px] text-slate-400">1 خرداد، 1403</span>
            <h3 className="text-slate-900 dark:text-slate-200">
              آموزش شی گرایی در جاوااسکریپت
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

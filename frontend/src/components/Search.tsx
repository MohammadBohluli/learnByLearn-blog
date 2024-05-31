import { CiSearch } from "react-icons/ci";
import Button from "./UI/Button";
import { IoClose } from "react-icons/io5";

const Search = () => {
  return (
    <div className=" paragraph-text-color fixed inset-0 bg-black/25 px-2 pt-20 backdrop-blur-sm">
      <div
        className="bg-color-theme border-color-theme flex w-full max-w-xl 
      flex-col overflow-hidden rounded-2xl border sm:mx-auto
       "
      >
        <div className="flex gap-1 px-2 pb-9 pt-4">
          <Button className="text-2xl">
            <IoClose />
          </Button>
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
      </div>
    </div>
  );
};

export default Search;

import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import Button from "../../components/UIO/Button";

const SingleArticle = () => {
  return (
    <div className="grid py-10 sm:grid-cols-3  md:gap-7">
      <div
        className=" overflow-hidden rounded-md
        sm:col-span-1 "
      >
        <img
          src="/picture.jpg"
          alt="javascript"
          className="h-full object-fill transition-all hover:scale-105"
        />
      </div>

      <div className="sm:col-span-2">
        <div className="py-4 md:pt-0">
          <div className="heading-text-color mb-2 text-xl font-bold">
            <h2>آموزش همزمانی و ناهمزمانی در جاوا اسکریپت</h2>
          </div>
          <div className="mb-2  flex gap-8 text-[15px]">
            <div className="after: flex items-center gap-1">
              <span>
                <MdOutlineTimer />
              </span>
              <span>خواندن 3 دقیقه</span>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <LuCalendarDays />
              </span>
              <span>31 اردیبهشت 1403</span>
            </div>
          </div>
          <ul className="mb-2 flex flex-wrap gap-2 text-sm">
            <li>
              <span className="border-color-theme inline-block rounded-3xl border bg-gray-200/10 px-2 py-[1px]">
                جاواسکریپت
              </span>
            </li>
          </ul>
          <div className="">
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
        <Button
          className="rounded-md bg-blue-600 px-5 py-1 
        text-white hover:bg-blue-600/85"
        >
          ادامه مطلب
        </Button>
      </div>
    </div>
  );
};

export default SingleArticle;

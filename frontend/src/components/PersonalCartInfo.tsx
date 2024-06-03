import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { LuBackpack } from "react-icons/lu";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const PersonalCartInfo = () => {
  const information = [
    { title: "Front-end Developer", icon: <LuBackpack /> },
    { title: "IRAN/Tehran", icon: <SlLocationPin /> },
    { title: "mohammad.bohluli.8789@gmail.com", icon: <FiMail /> },
    { title: "09017962900", icon: <MdOutlinePhoneAndroid /> },
  ];
  return (
    <div className="personal-cart-shadow border-color-theme max-w-96 overflow-hidden rounded-lg border">
      <div className="h-auto max-w-full">
        <img src="/desktop.png" alt="personal" />
      </div>
      <div className="flex flex-col items-end p-3">
        <div className="mx-auto py-4 font-vibes text-[32px] font-bold">
          <p>Mohammad Bohluli</p>
        </div>

        <div className="mb-11 mt-5 flex flex-col items-end gap-3">
          {information.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-2"
            >
              <p>{item.title}</p>
              <span className="text-lg">{item.icon}</span>
            </div>
          ))}
        </div>

        <div className="mb-2 flex w-full items-center justify-around">
          <a href="#" className="text-[25px] hover:text-gray-800">
            <FaGithub />
          </a>

          <a href="#" className="text-[25px] hover:text-blue-500">
            <FaLinkedinIn />
          </a>

          <a href="#" className="text-[25px] hover:text-blue-500">
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalCartInfo;

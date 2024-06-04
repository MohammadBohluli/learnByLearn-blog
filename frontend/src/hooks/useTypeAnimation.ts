import { useEffect, useRef } from "react";
import Typed from "typed.js";

const useTypeAnimation = () => {
  const refElementAnimation = useRef(null);
  useEffect(() => {
    const typed = new Typed(refElementAnimation.current, {
      strings: [
        "عاشق❤️ برنامه نویسی🧑‍💻، تکنولوژی🖥️ و هرچی که مربوط به اونها هست",
        "اولین زبان برنامه نویسی که به صورت جدی یاد گرفتم جاواسکریپت❤️ بود",
        "عاشق لینوکس🐧 و دنیای متن باز",
        "عمده کار من با جاواسکریپت و تایپ اسکریپت🧑‍💻 هست",
        "عاشق ویدیو گیم🎮، مخصوصا ژانر اکشن",
        "آموزش🧑‍🏫 به دیگران رو خیلی دوست دارم",
        "ورزش مورد علاقه من فوتباله ⚽",
      ],
      typeSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return { refElementAnimation };
};
export default useTypeAnimation;

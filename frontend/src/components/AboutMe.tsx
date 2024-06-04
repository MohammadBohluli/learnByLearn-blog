import useTypeAnimation from "../hooks/useTypeAnimation";

const AboutMe = () => {
  const { refElementAnimation } = useTypeAnimation();

  return (
    <div>
      <div className="mb-11 flex items-center gap-1">
        <p
          className="bg-gradient-to-r from-emerald-500 to-lime-600
           bg-clip-text p-1 text-3xl font-bold text-transparent md:text-5xl"
        >
          سلام خوش اومدی
        </p>
        <span className="text-4xl md:text-5xl">👋</span>
      </div>

      <div className="mb-4 flex text-lg">
        <p className="heading-text-color">
          محمد بهلولی😎 هستم ، علاقمند به مهندسی نرم افزار در
          <img
            className="mr-1 inline-block h-6 w-6"
            src="/iran.png"
            alt="iran-flag"
          />
        </p>
      </div>
      <div className="mb-5">
        <span ref={refElementAnimation} className="heading-text-color" />
      </div>
      <div className="mb-10">
        <p className="mb-2">
          به خاطر علاقه زیادی که به تکنولوژی و برنامه نویسی داشتم از سال 1396
          وارد دانشگاه شدم تا رشته مورد علاقم یعنی مهندسی کامپیوتر بخونم.
        </p>

        <p className="mb-2">
          الان تقریبا یکسالی میشه روی حوزه وب و فرانت اند تمرکز کردم و تمام وقتم
          رو روی یادگیری و زدن پروژه شخصی گذاشتم.
        </p>
        <p className="mb-2">
          همچنین از روی علاقه به نوشتن و اشتراک دانش، تصمیم گرفتم وبلاگ خودمو
          بسازم تا در حین مسیر یادگیری، چیزایی که یاد میگیرم رو با بقیه به
          اشتراک بزارم.
        </p>
        <p>
          امیدوارم مقاله هایی رو که نوشتم به دردتون بخوره و چیزی به دانشتون
          اضافه کرده باشه❤️
        </p>
      </div>
      <div>
        <ul className="heading-text-color flex flex-col gap-4 text-xl">
          <li>
            <a href="#">🛠️ چه چیزایی تا الان ساختم ؟</a>
          </li>
          <li>
            <a href="#">📝 مقاله هایی که نوشتم</a>
          </li>
          <li>
            <a href="#">😏 رزومه و درباره من</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

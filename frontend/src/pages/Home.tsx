import AboutMe from "../components/AboutMe";
import PersonalCartInfo from "../components/PersonalCartInfo";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <PersonalCartInfo />
        <AboutMe />
      </div>
    </>
  );
};

export default Home;

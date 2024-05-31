import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-2 sm:px-6 lg:max-w-6xl xl:max-w-5xl xl:px-0">
      <Header />
      <Search />
    </div>
  );
};

export default App;

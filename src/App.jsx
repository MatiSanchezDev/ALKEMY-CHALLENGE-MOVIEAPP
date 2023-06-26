// import { Footer } from "./movieApp/components/Footer";
import { Footer } from "./movieApp/components";
import { Header } from "./movieApp/components/Header";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
  return (
    <>
      <div className="w-auto h-auto m-0 p-0 flex justify-center items-start text-white">
        <div className="w-3/4 m-0 p-0">
          <Header />
          <AppRouter />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

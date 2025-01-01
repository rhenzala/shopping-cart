import homeImage from "/src/assets/onlineshop.jpg";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const HomePage = () => {
  const { data, handleCardClick } = useOutletContext();
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop");
  };
  return (
    <div className="mt-16 text-white">
      <section className="h-[calc(100vh-4rem)] w-full relative">
        <div className="p-8 flex flex-col gap-8 absolute z-10 bottom-40 w-full">
          <h1 className="text-4xl text-shadow-xl uppercase font-sans font-bold drop-shadow-4xl">
            Your one-stop shop for amazing products
          </h1>
          <button
            className="group self-center px-3 py-1 text-whitefont-semibold bg-red border-red border border-solid rounded-md w-30 hover:w-40 transition-all ease-in-out duration-300 delay-150 flex items-center justify-center"
            aria-label="Shop now"
            onClick={handleShopNow}
          >
            <span className="flex items-center">
              SHOP NOW
              <ArrowRight className="w-0 h-4 ml-0 opacity-0 group-hover:w-4 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
            </span>
          </button>
        </div>
        <div className="w-full h-full absolute">
          <img
            src={homeImage}
            alt=""
            className="h-full w-full object-cover brightness-50"
          />
        </div>
      </section>
      <section className="h-[calc(100vh-4rem)] w-full py-8 px-8">
        <div className="flex justify-center">
          <h1 className="uppercase text-3xl text-black/70 font-bold">
            check out our new arrivals
          </h1>
        </div>
        <ImageCarousel data={data} handleCardClick={handleCardClick} />
      </section>
    </div>
  );
};

export default HomePage;

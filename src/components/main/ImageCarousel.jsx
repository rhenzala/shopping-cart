import PropTypes from "prop-types";
import { Carousel, IconButton } from "@material-tailwind/react";

const ImageCarousel = ({ data, handleCardClick }) => {
  return (
    <Carousel
      className="rounded-xl my-8 mx-auto h-[80%] w-2/3 custom-md:w-full bg-[#fff] shadow-lg"
      loop={true}
      autoplay={true}
      autoplayDelay={4000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-1">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-4 bg-red" : "w-2 bg-black/40"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#dc2626"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#dc2626"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {data.map((product, index) => (
        <div
          className="w-full h-full flex justify-center items-center"
          key={product.id}
          onClick={() => handleCardClick(index + 1)}
        >
          <img
            src={product.image}
            alt={product.title}
            className=" max-h-[80%] hover:cursor-pointer"
          />
        </div>
      ))}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  data: PropTypes.array,
  handleCardClick: PropTypes.func,
};

export default ImageCarousel;

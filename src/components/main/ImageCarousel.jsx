import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ data, handleCardClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1,
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, data.length]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="relative w-full max-w-3xl mx-auto my-8">
      <div className="relative h-[calc(100vh-12rem)] overflow-hidden rounded-lg">
        {data.map((product, index) => (
          <div
            key={product.id}
            className={`absolute w-full h-full py-8 transition-opacity duration-500 ease-in-out
                ${currentIndex === index ? "opacity-100" : "opacity-0"} flex justify-center`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-1/2 custom-md:w-2/3 hover:cursor-pointer"
              onClick={() => handleCardClick(currentIndex + 1)}
            />
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-red"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-red"
        >
          <ChevronRight size={48} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors
                        ${index === currentIndex ? "bg-red" : "bg-black/70"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

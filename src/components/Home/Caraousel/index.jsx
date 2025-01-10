import React, { useEffect, useState } from "react";
const ImageCarousel = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div className="relative overflow-hidden rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="flex-shrink-0 w-full h-full text-center"
            key={index}
          >
            <img
              className="block w-full h-full "
              src={slide.image}
              alt={slide.alt || `Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageCarousel;
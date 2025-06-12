import React, { useState } from "react";
import "./Carousel.scss";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const showControls = images.length > 1;

  return (
    <div className="carousel">
      {showControls && (
        <div className="carousel-arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </div>
      )}

      <div
        className="carousel-slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {showControls && (
        <div className="carousel-arrow right-arrow" onClick={goToNext}>
          &#10095;
        </div>
      )}

      {showControls && (
        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default Carousel;

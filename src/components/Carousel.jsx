import React, { useState, useEffect } from 'react';

const Carousel = ({images, imgDir}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImage = (imgName) => {
    return new URL(`${imgDir}/${imgName}`, import.meta.url).href;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // let vanishingImgs = []
  // images.forEach(img => {
  //   vanishingImgs.push(getImage(img))
  // })
  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={`/${image}`}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

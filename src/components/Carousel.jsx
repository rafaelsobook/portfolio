import React, { useState, useEffect } from 'react';
import img1 from "../assets/homeimages/1.png"
import img2 from "../assets/homeimages/2.png"
import img3 from "../assets/homeimages/3.png"
import img4 from "../assets/homeimages/4.png"
import img5 from "../assets/homeimages/5.png"
import img6 from "../assets/homeimages/6.png"
import img7 from "../assets/homeimages/7.png"
import img8 from "../assets/homeimages/8.png"
import img9 from "../assets/homeimages/9.png"


// const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9] ;

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

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={getImage(image)}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

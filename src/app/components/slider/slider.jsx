// components/Slider.js
"use client"


import { useState } from 'react';

const images = [
  '/slider/slide3.jpeg', // Replace with your image paths
  '/slider/slide4.jpg',
  '/slider/slide5.png',
  '/slider/slide6.png',
  '/slider/slide7.jpg',
  '/slider/slide8.png',
  '/slider/slide9.png',
  '/slider/slide10.png',

];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}

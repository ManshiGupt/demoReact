import React from 'react';

const Cards = () => {
  const images = [
    "/img1.jpeg",
    "/img7.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
    "/img10.jpeg",
    "/img11.jpeg",
    "/img2.jpeg",
    "/img8.jpeg",
    "/img9.jpeg",
    "/img5.jpeg",
    "/img6.jpeg",
    
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group perspective cursor-pointer"
          >
            <div className="relative transform transition-transform duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105">
              <img
                src={image}
                alt={`Card ${index + 1}`}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

import React from 'react';
import Cards from './Cards';

const Portfolio = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Work</h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        {/* <div className="bg-gray-100 p-4 rounded shadow">
          <img src="/path/to/artwork1.jpg" alt="Artwork 1" className="rounded" />
          <h2 className="text-xl mt-2">Artwork Title</h2>
        </div> */}
        <Cards/>
      {/* </div> */}
    </div>
  );
};

export default Portfolio;

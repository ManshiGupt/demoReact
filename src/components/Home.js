import React from 'react';
import Cards from './Cards';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
    <div className="container mx-auto text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700">Showcasing my best artworks and projects.</p>
      <Cards/>
     
    </div>
    <Footer/>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/img16.jpg"
              alt="About Me"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-gray-700">
            <p className="mb-4 text-lg leading-relaxed">
              Hello! I’m Ashwini, a passionate artist with expertise in
             painting, digital art, sculpture. My
              journey in the world of art started...
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              My work is inspired by [mention inspirations, e.g., nature,
              emotions, cultural heritage], and I strive to convey [themes you
              explore] through every piece I create. Over the years, I’ve
              exhibited my work at [name notable exhibitions or achievements],
              and collaborated with [brands or organizations].
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              When I’m not creating, I love exploring [mention hobbies or
              interests] and connecting with fellow art enthusiasts. Let’s make
              the world more beautiful, one creation at a time!
            </p>
            <a
              href="/portfolio"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              View My Work  
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

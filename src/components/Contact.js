import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Let's Connect
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mt-4 text-center">
        Looking for a talented painting artist? Reach out to collaborate or inquire about artwork.
      </p>

      {/* Button */}
      <a
        href="mailto:heymanshigupta@gmail.com"
        className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Contact Me
      </a>
    </div>
  );
};

export default Contact;

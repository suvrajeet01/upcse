import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div id="about" className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">About Us</h2>
      <div className="flex flex-col items-center gap-6">
        <div className="w-48 h-64 overflow-hidden flex-shrink-0 border-4 border-yellow-600 shadow-lg">
          <img 
            src="https://i.ibb.co/Q7dCRJCQ/about-us.jpg" 
            alt="UPCSE Team" 
            className="w-full h-full object-cover"
          />
        </div>
        <blockquote className="italic text-gray-700 border-l-4 border-blue-800 pl-4 max-w-md">
          <p className="text-lg text-center">
            UPCSE is working since 2017 in over all Uttar Pradesh to promote sports & education at grassroot level.
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutUs;
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div id="about" className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">About Us</h2>
      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-md h-80 overflow-hidden flex-shrink-0 border-4 border-yellow-600 shadow-lg">
          <img 
            src="https://i.ibb.co/Q7dCRJCQ/about-us.jpg" 
            alt="UPCSE Team" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mt-4 p-3 bg-orange-100 border-l-4 border-orange-600 text-orange-800 font-semibold w-full max-w-md">
          <p>
            UPCSE is working since 2017 in over all Uttar Pradesh to develop sports at grassroot level UPCSE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
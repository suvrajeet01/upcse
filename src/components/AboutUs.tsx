import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div id="about" className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">About Us</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-48 h-64 overflow-hidden flex-shrink-0 border-4 border-yellow-600 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1526676037777-05a232554d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="UPCSE Team" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <blockquote className="italic text-gray-700 border-l-4 border-blue-800 pl-4">
            <p className="text-lg">
              UPCSE is working since 2017 in over all Uttar Pradesh to develop sports at grassroot level UPCSE.
            </p>
          </blockquote>
          <div className="mt-4 p-3 bg-orange-100 border-l-4 border-orange-600 text-orange-800 font-semibold">
            <p>
              Uttar Pradesh Council for Sports & Education - Promoting sports and education at the grassroots level since 2017.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
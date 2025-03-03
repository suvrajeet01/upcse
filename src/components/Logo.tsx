import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-full overflow-hidden">
      <img 
        src="https://i.ibb.co/2HV8Nmj/upcse-logo.jpg" 
        alt="UPCSE Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;
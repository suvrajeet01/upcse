import React from 'react';
import { Award } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-blue-800 text-white rounded-full">
      <Award size={28} />
    </div>
  );
};

export default Logo;
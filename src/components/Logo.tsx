import React from 'react';
import { Smartphone } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Dot Pattern */}
      <div className="grid grid-cols-4 gap-1">
        {Array.from({ length: 16 }, (_, i) => (
          <div 
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < 12 ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
      
      {/* Logo Text */}
      <div className="text-white">
        <span className="text-3xl md:text-4xl font-bold">cartela</span>
        <span className="text-3xl md:text-4xl font-light">.info</span>
      </div>
    </div>
  );
};

export default Logo;
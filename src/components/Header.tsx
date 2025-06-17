import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Home', 'Operators', 'Packages', 'Credit Transfer', 
    'International Cards', 'Gold Numbers', 'How to Recharge & Pay', 'FAQ', 'News'
  ];

  return (
    <header className="relative z-50">
      {/* VIP Badge */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6">
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          VIP
        </span>
      </div>

      {/* Navigation */}
      <nav className="px-4 md:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-white text-sm">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="hover:text-yellow-300 transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center text-white">
            <Globe size={18} className="mr-2" />
            <span className="text-sm font-medium">En</span>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-white hover:text-yellow-300 transition-colors duration-200 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
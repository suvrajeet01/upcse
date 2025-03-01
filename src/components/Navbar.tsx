import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
  mobile?: boolean;
  activePage?: string;
  onNavigate?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobile = false, activePage = 'home', onNavigate = () => {} }) => {
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  
  const navItemClass = mobile 
    ? "block py-2 text-gray-700 hover:text-blue-800 transition-colors" 
    : "px-4 py-2 text-gray-700 hover:text-blue-800 transition-colors";
  
  const activeNavItemClass = mobile
    ? "block py-2 text-blue-800 font-semibold transition-colors"
    : "px-4 py-2 text-blue-800 font-semibold transition-colors";
  
  const dropdownClass = mobile
    ? "mt-2 bg-white rounded-md shadow-lg py-2 w-full"
    : "absolute mt-2 bg-white rounded-md shadow-lg py-2 w-48";

  return (
    <nav className={mobile ? "flex flex-col space-y-4" : "flex items-center space-x-6"}>
      <a 
        href="#" 
        className={activePage === 'home' ? activeNavItemClass : navItemClass}
        onClick={(e) => {
          e.preventDefault();
          onNavigate('home');
        }}
      >
        Home
      </a>
      
      <a 
        href="#about" 
        className={navItemClass}
        onClick={(e) => {
          if (activePage !== 'home') {
            e.preventDefault();
            onNavigate('home');
            setTimeout(() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }}
      >
        About
      </a>
      
      <div className={`relative ${mobile ? "" : "inline-block"}`}>
        <button 
          className={`${navItemClass} flex items-center`}
          onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
        >
          Login <ChevronDown size={16} className="ml-1" />
        </button>
        
        {loginDropdownOpen && (
          <div className={dropdownClass}>
            <a href="#student-login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Student Login
            </a>
            <a href="#admin-login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Admin Login
            </a>
          </div>
        )}
      </div>
      
      <a 
        href="#gallery" 
        className={activePage === 'gallery' ? activeNavItemClass : navItemClass}
        onClick={(e) => {
          e.preventDefault();
          onNavigate('gallery');
        }}
      >
        Gallery
      </a>
      
      <a 
        href="#contact" 
        className={navItemClass}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Contact Us
      </a>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <h3 className="text-xl font-bold ml-2">UPCSE</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Uttar Pradesh Council for Sports & Education - Promoting sports and education at the grassroots level since 2017.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-blue-200 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-blue-300" />
                <span className="text-blue-200">Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-300" />
                <span className="text-blue-200">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-300" />
                <span className="text-blue-200">info@upcse.info</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} UPCSE | Uttar Pradesh Council for Sports & Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
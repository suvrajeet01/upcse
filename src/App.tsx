import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Affiliations from './components/Affiliations';
import AboutUs from './components/AboutUs';
import OurMission from './components/OurMission';
import UpcomingEvents from './components/UpcomingEvents';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const navigateTo = (page: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <h1 className="text-2xl font-bold ml-2 text-blue-800">UPCSE</h1>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navbar activePage={activePage} onNavigate={navigateTo} />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <Navbar mobile={true} activePage={activePage} onNavigate={navigateTo} />
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {activePage === 'home' && (
          <>
            {/* Affiliations Section */}
            <Affiliations />
            
            {/* About Us and Our Mission Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
                <AboutUs />
                <OurMission />
              </div>
            </section>
            
            {/* Upcoming Events Section */}
            <UpcomingEvents />
          </>
        )}
        
        {activePage === 'gallery' && <Gallery />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
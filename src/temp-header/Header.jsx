import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaKey, setActiveMegaKey] = useState(null);

  // Close mega menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeMegaKey) setActiveMegaKey(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMegaKey]);

  return (
    <div className="flex flex-col font-sans z-[99999] selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50">
        <Navbar 
          onToggleMobileMenu={() => setIsMobileMenuOpen(true)} 
          activeMegaKey={activeMegaKey}
          setActiveMegaKey={setActiveMegaKey}
        />
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </div>
  );
};

export default Header;
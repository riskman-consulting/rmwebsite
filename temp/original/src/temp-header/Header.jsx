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
    <>
      {/* Navbar with banner - both are fixed positioned */}
      <Navbar 
        onToggleMobileMenu={() => setIsMobileMenuOpen(true)} 
        activeMegaKey={activeMegaKey}
        setActiveMegaKey={setActiveMegaKey}
      />

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
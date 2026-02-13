import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

/**
 * Header.jsx
 * The layout wrapper that manages navigation states and sticky behavior.
 */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaKey, setActiveMegaKey] = useState(null);

  // Close any open mega menus automatically when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (activeMegaKey) {
        setActiveMegaKey(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMegaKey]);

  return (
    <div className="relative w-full font-sans selection:bg-brandPrimary/10 selection:text-brandPrimary">
      {/* Sticky Header Container 
          Z-index is set high to ensure it floats above all page content 
      */}
      <header className="sticky top-0 z-[100]">
        <Navbar
          onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
          activeMegaKey={activeMegaKey}
          setActiveMegaKey={setActiveMegaKey}
        />
      </header>

      {/* Mobile Menu Overlay 
          Handles the slide-in drawer for smaller screens
      */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

export default Header;
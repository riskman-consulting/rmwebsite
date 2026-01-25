import React, { useState, useEffect } from 'react';

/**
 * Reusable Grid Background Component
 * Matches the EventModal's grid aesthetic
 * Works with both light and dark modes
 */
const GridBackground = ({ opacity = 0.05, gridSize = 80, glowIntensity = 0.08 }) => {
  const [mousePos, setMousePos] = useState({ px: 50, py: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        px: (e.clientX / window.innerWidth) * 100,
        py: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 dark:opacity-[0.07]"
        style={{
          opacity: opacity,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 184, 0, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 184, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
      
      {/* Mouse Glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.px}% ${mousePos.py}%, rgba(255, 184, 0, ${glowIntensity}), transparent 80%)`,
        }}
      />

      {/* Highlighted Grid on Hover */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 184, 0, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 184, 0, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage: `radial-gradient(400px circle at ${mousePos.px}% ${mousePos.py}%, black, transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.px}% ${mousePos.py}%, black, transparent)`,
        }}
      />
    </div>
  );
};

export default GridBackground;
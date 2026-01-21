 
import React, { useRef, useEffect } from 'react';
import { NAVIGATION_DATA } from './constants';
import { MegaMenu } from './MegaMenu';

 
export const Navbar = ({
  onToggleMobileMenu,
  activeMegaKey,
  setActiveMegaKey
}) => {
  const timeoutRef = useRef(null);
 
  const handleMouseEnter = (key) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (key) setActiveMegaKey(key);
  };
 
  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveMegaKey(null);
    }, 300);
  };
 
  return (
    <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
      {/* Brand Logo */}
      <div className={`flex items-center gap-2 group cursor-pointer transition-all duration-300 ${activeMegaKey ? 'opacity-50 blur-[1px]' : ''}`}>
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:bg-blue-700 transition-colors">
          R
        </div>
        <span className="font-extrabold text-xl tracking-tight text-slate-900">
          Risk<span className="text-blue-600">Man</span>
        </span>
      </div>
 
      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-2 h-full">
        {NAVIGATION_DATA.mainNav.map((item) => (
          <div
            key={item.label}
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter(item.key)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={item.path}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                flex items-center gap-1.5
                ${activeMegaKey === item.key
                  ? 'text-blue-600 bg-blue-50'
                  : activeMegaKey
                    ? 'text-slate-400 blur-[1px] grayscale opacity-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}
              `}
              onClick={(e) => {
                if (item.type === 'mega') e.preventDefault();
              }}
            >
              {item.label}
              {item.type === 'mega' && (
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${activeMegaKey === item.key ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          </div>
        ))}
      </div>
 
      {/* Action Buttons */}
      <div className={`flex items-center gap-4 transition-all duration-300 ${activeMegaKey ? 'opacity-50 blur-[1px]' : ''}`}>
        <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          Search
        </button>
        <button className="hidden sm:block px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all shadow-md shadow-slate-200">
          Request Demo
        </button>
       
        {/* Mobile Toggle */}
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
 
      {/* Render Active Mega Menu */}
      {activeMegaKey && (
        <div
          className="absolute top-full left-0 w-full"
          onMouseEnter={() => handleMouseEnter(activeMegaKey)}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenu menuKey={activeMegaKey} />
        </div>
      )}
    </nav>
  );
};
 
 
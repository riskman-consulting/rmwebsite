import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { NAVIGATION_DATA } from "./constants";
import { MegaMenu } from "./MegaMenu";

/**
 * Navbar.jsx
 * Refined desktop navigation with buttery smooth transitions and route awareness.
 */
export const Navbar = ({
  onToggleMobileMenu,
  activeMegaKey,
  setActiveMegaKey,
}) => {
  const timeoutRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  // Route awareness for active styling
  const isServicesRoute = location.pathname.startsWith("/services");

  /* =======================
     THEME MANAGEMENT
  ======================= */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  /* =======================
     HOVER LOGIC (BUTTERY SMOOTH)
  ======================= */
  const handleMouseEnter = (key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaKey(key);
  };

  const handleMouseLeave = () => {
    // Small delay prevents the menu from snapping shut if the mouse slips
    timeoutRef.current = setTimeout(() => {
      setActiveMegaKey(null);
    }, 150);
  };

  // Close mega menu immediately on route change
  useEffect(() => {
    setActiveMegaKey(null);
  }, [location.pathname, setActiveMegaKey]);

  return (
    <nav className="h-20 w-full border-b bg-white/90 dark:bg-bgDark/90 backdrop-blur-md border-borderLight dark:border-borderDark transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center transition-transform hover:scale-[1.02]">
            <div className="w-[140px] h-[40px]">
              <img
                src="/rm.png"
                alt="RiskMan Logo"
                className="w-full h-full object-contain dark:hidden"
              />
              <img
                src="/riskman-logo-white.svg"
                alt="RiskMan Logo"
                className="hidden w-full h-full object-contain dark:block"
              />
            </div>
          </Link>
        </div>

        {/* CENTER: DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center h-full space-x-1">
          {NAVIGATION_DATA.mainNav.map((item) => {
            const isMega = item.type === "mega";
            const isActive =
              activeMegaKey === item.key ||
              (item.key === "services" && isServicesRoute) ||
              location.pathname === item.path;

            return (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => isMega && handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-1 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300
                    ${isActive 
                      ? "text-brandPrimary bg-brandPrimary/5 dark:text-brandGold dark:bg-brandGold/5" 
                      : "text-brandDark/70 dark:text-brandLight/70 hover:text-brandPrimary dark:hover:text-brandGold hover:bg-brandPrimary/5"
                    }
                  `}
                >
                  {item.label}
                  {isMega && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${activeMegaKey === item.key ? "rotate-180" : ""}`} 
                    />
                  )}
                </Link>

                {/* MEGA MENU DROPDOWN */}
                {isMega && activeMegaKey === item.key && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                    onMouseEnter={() => handleMouseEnter(item.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MegaMenu menuKey={item.key} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT: ACTIONS & THEME */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-brandPrimary/5 dark:bg-white/5 hover:scale-110 transition-all text-brandPrimary dark:text-brandGold"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 h-11 px-6 rounded-full bg-brandDark dark:bg-brandGold text-white dark:text-brandDark font-bold text-[13px] hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95"
          >
            <Phone size={14} />
            <span>Get Started</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 rounded-xl hover:bg-brandPrimary/10 text-brandDark dark:text-brandLight transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* BACKGROUND BLUR OVERLAY (Optional Depth) */}
      {activeMegaKey && (
        <div className="fixed inset-0 top-20 bg-black/5 backdrop-blur-[2px] z-40 pointer-events-none animate-in fade-in duration-300" />
      )}
    </nav>
  );
};

export default Navbar;
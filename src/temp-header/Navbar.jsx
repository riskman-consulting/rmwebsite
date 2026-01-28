// ============================================
// Navbar.jsx - EDGE SAFE (NO LEFT PADDING BUG)
// ============================================
 
import React, { useRef, useEffect, useState } from "react";
import { NAVIGATION_DATA } from "./constants";
import { MegaMenu } from "./MegaMenu";
import { Moon, Sun, Phone, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
 
export const Navbar = ({
  onToggleMobileMenu,
  activeMegaKey,
  setActiveMegaKey,
}) => {
  const timeoutRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const location = useLocation();
 
  /* =======================
     THEME INIT
  ======================= */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle(
      "dark",
      storedTheme === "dark"
    );
  }, []);
 
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );
  };
 
  /* =======================
     CLOSE MEGA ON ROUTE CHANGE
  ======================= */
  useEffect(() => {
    setActiveMegaKey(null);
  }, [location.pathname, setActiveMegaKey]);
 
  /* =======================
     MEGA MENU HANDLERS
  ======================= */
  const handleMouseEnter = (key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (key) setActiveMegaKey(key);
  };
 
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaKey(null);
    }, 250);
  };
 
  return (
    <>
      {/* =======================
         ANNOUNCEMENT BANNER
      ======================= */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[48px] bg-bgDark flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <p className="text-center text-[17px] text-white font-medium leading-tight">
            {/* 💡 Not sure how to start your RiskMan journey? Watch our{" "} */}
            {/* <Link
              to="/orientation"
              className="inline-block px-2 py-1 font-bold transition-colors border-2 rounded-full border-brandDark hover:text-white/70"
            > */}
              {/* Orientation Program */}
            {/* </Link>{" "} */}
            {/* or{" "} */}
            {/* <Link
              to="/contact"
              className="inline-block px-2 py-1 font-bold transition-colors border-2 rounded-full border-brandDark hover:text-white/70"
            >
              Contact Us
            </Link>{" "} */}
            {/* to get started! 💡 */}
          </p>
        </div>
      </div>
 
      {/* =======================
         NAVBAR
      ======================= */}
      <nav className="fixed top-[48px] left-0 right-0 z-50 h-20 border-b bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
        <div className="flex items-center w-full h-full px-6 mx-auto max-w-screen">
 
          {/* =======================
             LEFT CLUSTER
          ======================= */}
          <div className="flex items-center h-full">
 
            {/* LOGO */}
            <Link to="/" className="flex items-center flex-shrink-0 h-16 w-36">
              <img
                className="object-contain h-12 dark:hidden"
                src="/rm.png"
                alt="Riskman"
              />
              <img
                className="hidden object-contain h-12 w-28 dark:block"
                src="/riskman-logo-white.svg"
                alt="Riskman"
              />
            </Link>
 
            {/* DESKTOP NAV */}
            <div className="items-center hidden h-full lg:flex">
              {NAVIGATION_DATA.mainNav.map((item) => {
                const isMega = item.type === "mega";
                const isActive = activeMegaKey === item.key;
 
                return (
                  <div
                    key={item.label}
                    className="relative flex items-center h-full"
                    {...(isMega && {
                      onMouseEnter: () => handleMouseEnter(item.key),
                      onMouseLeave: handleMouseLeave,
                    })}
                  >
                    <Link
                      to={item.path}
                      className={`
                        flex items-center gap-1.5 px-5 py-2 rounded-lg
                        text-[13px] font-medium transition-all whitespace-nowrap
                        ${
                          isMega
                            ? isActive
                              ? "bg-brandAccent/15 text-brandPrimary dark:text-brandGold"
                              : "text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
                            : "text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
                        }
                      `}
                    >
                      {item.label}
                      {isMega && (
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isActive ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>
 
                    {isMega && isActive && (
                      <div
                        className="absolute left-0 z-50 top-full"
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
          </div>
 
          {/* =======================
             RIGHT CLUSTER
          ======================= */}
          <div className="flex items-center gap-3 ml-auto transition-all">
            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 transition rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="text-brandGold" size={18} />
              ) : (
                <Sun className="text-brandPrimary" size={18} />
              )}
            </button>
 
            {/* DESKTOP CTA */}
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 h-[42px] px-5 text-[14px] font-semibold text-white rounded-full bg-brandDark dark:bg-brandGold hover:bg-brandNavy shadow-md transition"
            >
              <Phone size={12} />
              <span className="text-[12px]">Get Started</span>
              <ArrowRight size={12} />
            </Link>
 
            {/* MOBILE MENU */}
            <button
              onClick={onToggleMobileMenu}
              className="p-2 rounded-lg lg:hidden text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
 
        {/* BACKDROP */}
        {activeMegaKey && (
          <div className="fixed inset-0 top-[128px] z-[45] bg-black/40 backdrop-blur-lg pointer-events-none" />
        )}
      </nav>
    </>
  );
};
 
 
export default Navbar;
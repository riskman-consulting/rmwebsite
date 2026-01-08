import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menus from "../../data/menus.json";
import MegaMenu from "./MegaMenu";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";

/* =======================
   MENU DATA
======================= */
const {
  mainNav,
  servicesMegaMenu,
  industriesMegaMenu,
  insightsMegaMenu,
  aboutMegaMenu,
} = menus;

/* =======================
   GRADIENTS
======================= */
const gradientBgLight =
  "bg-gradient-to-r from-brandPrimary via-brandNavy to-brandDark";
const gradientBgDark =
  "bg-gradient-to-r from-brandAccent via-brandGold to-yellow-500";

export default function Header() {
  const location = useLocation();
  const closeTimeoutRef = useRef(null);

  /* =======================
     STATE
  ======================= */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpenMenu, setDesktopOpenMenu] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [scrolled, setScrolled] = useState(false);

  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  /* =======================
     THEME (FIXED)
  ======================= */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  // 🆕 MOBILE THEME TOGGLE - CLOSES MENU AUTOMATICALLY
  const toggleThemeMobile = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    setMobileOpen(false); // Close menu immediately
  };

  /* =======================
     SCROLL
  ======================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =======================
     ROUTE CHANGE
  ======================= */
  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpenMenu(null);
    setMobileDropdownOpen({});
  }, [location.pathname]);

  /* =======================
     MENU HANDLERS
  ======================= */
  const openMenu = (label) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDesktopOpenMenu(label);
  };

  const closeMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDesktopOpenMenu(null);
    }, 150);
  };

  const closeImmediately = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDesktopOpenMenu(null);
  };

  const getMegaData = (key) => {
    if (key === "services") return servicesMegaMenu;
    if (key === "industries") return industriesMegaMenu;
    if (key === "insights") return insightsMegaMenu;
    if (key === "about") return aboutMegaMenu;
    return [];
  };

  /* =======================
     🚨 PREVENT RENDER
  ======================= */
  if (!mounted) return null;

  return (
    <>
      {/* DESKTOP BACKDROP */}
      <AnimatePresence>
        {desktopOpenMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-bgLight dark:bg-bgDark backdrop-blur-md"
            onMouseEnter={closeImmediately}
          />
        )}
      </AnimatePresence>

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all
          ${
            scrolled
              ? "bg-surfaceLight/95 dark:bg-surfaceDark/95 backdrop-blur shadow-md"
              : "bg-surfaceLight dark:bg-surfaceDark"
          }
          border-b border-borderLight dark:border-borderDark`}
        style={{ margin: 0, padding: 0 }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <div className="relative w-32 h-8 md:w-36 md:h-9">
                {/* Light theme logo */}
                <img
                  src="/rm.png"
                  alt="RiskMan"
                  className={`absolute inset-0 object-contain w-full h-full transition-opacity duration-300 ${
                    theme === "dark" ? "opacity-0" : "opacity-100"
                  }`}
                />
                {/* Dark theme logo */}
                <img
                  src="/riskman-logo-white.svg"
                  alt="RiskMan"
                  className={`absolute inset-0 object-contain w-full h-full transition-opacity duration-300 ${
                    theme === "dark" ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="items-center hidden gap-8 lg:gap-10 md:flex">
              {mainNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors ${
                          isActive
                            ? "text-brandPrimary dark:text-brandAccent"
                            : "text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                if (item.type === "mega") {
                  const isActive =
                    desktopOpenMenu === item.label ||
                    location.pathname.startsWith(item.path);

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={closeMenu}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive: linkActive }) =>
                          `relative text-sm font-medium transition-colors ${
                            isActive || linkActive
                              ? "text-brandPrimary dark:text-brandAccent"
                              : "text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
                          }`
                        }
                      >
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 right-0 h-[2px]
                            transition-transform duration-300 ${
                              isActive
                                ? "scale-x-100 bg-brandPrimary dark:bg-brandAccent"
                                : "scale-x-0"
                            }`}
                        />
                      </NavLink>

                      <AnimatePresence>
                        {desktopOpenMenu === item.label && (
                          <MegaMenu
                            sections={getMegaData(item.key)}
                            parentLabel={item.label}
                            onNavigate={closeImmediately}
                            onMouseEnter={() => openMenu(item.label)}
                            onMouseLeave={closeMenu}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return null;
              })}
            </nav>

            {/* CTA + THEME */}
            <div className="items-center hidden gap-3 md:flex lg:gap-4">
              <button
                onClick={toggleTheme}
                className="relative flex items-center justify-center w-10 h-10 transition border rounded-full bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Sun size={18} className="text-brandNavy" />
                ) : (
                  <Moon size={18} className="text-brandAccent" />
                )}
              </button>

              <Link
                to="/contact"
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition overflow-hidden"
              >
                <div
                  className={`absolute inset-0 ${
                    theme === "dark" ? gradientBgDark : gradientBgLight
                  }`}
                />
                <Phone size={16} className="relative z-10 text-white" />
                <span className="relative z-10 text-white">Get Started</span>
                <ArrowRight size={14} className="relative z-10 text-white" />
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-brandDark dark:text-brandLight"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-bgDark md:hidden pt-[70px] overflow-y-auto"
          >
            <div className="container py-8 space-y-6 text-white">
              {/* 🌓 THEME TOGGLE - MOBILE (IMPROVED DESIGN) */}
              <div className="flex justify-center pb-6 mb-6 border-b border-brandAccent/20">
                <button
                  onClick={toggleThemeMobile}
                  className="relative flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-full hover:scale-110 group"
                  aria-label="Toggle theme"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 rounded-full ${theme === "light" ? gradientBgLight : gradientBgDark} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  {/* Border ring */}
                  <div className="absolute inset-0 transition-colors border-2 rounded-full border-brandAccent/40 group-hover:border-brandAccent/60" />
                  
                  {/* Icon */}
                  {theme === "light" ? (
                    <Sun size={28} className="relative z-10 text-brandAccent" />
                  ) : (
                    <Moon size={28} className="relative z-10 text-brandAccent" />
                  )}
                </button>
              </div>

              {/* NAVIGATION ITEMS */}
              {mainNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block text-lg font-semibold"
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                if (item.type === "mega") {
                  const open = mobileDropdownOpen[item.label];
                  const sections = getMegaData(item.key);

                  return (
                    <div key={item.label} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <NavLink
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className="text-lg font-semibold"
                        >
                          {item.label}
                        </NavLink>
                        <button
                          onClick={() =>
                            setMobileDropdownOpen((p) => ({
                              ...p,
                              [item.label]: !p[item.label],
                            }))
                          }
                          aria-label={`Toggle ${item.label} menu`}
                        >
                          <ChevronDown
                            className={`transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {open && (
                        <div className="pl-4 space-y-4">
                          {sections.map((section, idx) => (
                            <div key={idx}>
                              <p className="mb-1 text-sm font-semibold text-brandAccent">
                                {section.title}
                              </p>
                              {section.items.map((sub, i) => (
                                <NavLink
                                  key={i}
                                  to={sub.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-sm text-gray-300 hover:text-brandAccent"
                                >
                                  {sub.label}
                                </NavLink>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return null;
              })}

              {/* 📞 GET STARTED BUTTON - MOBILE */}
              <div className="pt-6 mt-6 border-t border-brandAccent/20">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="relative flex items-center justify-center gap-2 px-6 py-3 overflow-hidden text-base font-semibold rounded-full shadow-lg"
                >
                  <div className={`absolute inset-0 ${gradientBgDark}`} />
                  <Phone size={18} className="relative z-10 text-white" />
                  <span className="relative z-10 text-white">Get Started</span>
                  <ArrowRight size={16} className="relative z-10 text-white" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
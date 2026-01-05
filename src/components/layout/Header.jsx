import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menus from "../../data/menus.json";
import MegaMenu from "./MegaMenu";
import { Menu, X, ArrowRight, Phone, ChevronDown,Sun,Moon } from "lucide-react";

const {
  mainNav,
  servicesMegaMenu,
  industriesMegaMenu,
  insightsMegaMenu,
  aboutMegaMenu,
} = menus;

const gradientBgLight =
  "bg-gradient-to-r from-brandPrimary via-brandNavy to-brandDark";
const gradientBgDark =
  "bg-gradient-to-r from-brandAccent via-brandGold to-yellow-500";

export default function Header() {
  const location = useLocation();
  const closeTimeoutRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpenMenu, setDesktopOpenMenu] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [scrolled, setScrolled] = useState(false);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  /* THEME */
   useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* SCROLL */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ROUTE CHANGE */
  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpenMenu(null);
    setMobileDropdownOpen({});
  }, [location.pathname]);

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
          ${scrolled
            ? "bg-surfaceLight/95 dark:bg-surfaceDark/95 backdrop-blur shadow-md"
            : "bg-surfaceLight dark:bg-surfaceDark"}
          border-b border-borderLight dark:border-borderDark`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[70px] lg:h-[80px]">

            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={theme === "dark" ? "/riskman-logo-white.svg" : "/rm.png"}
                alt="RiskMan"
                className="h-8 md:h-9 lg:h-10"
              />
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

            {/* CTA BUTTON */}
            <div className="items-center hidden gap-3 md:flex lg:gap-4">
               <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/40"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-brandAccent" />
                ) : (
                  <Moon size={18} className="text-brandNavy" />
                )}
              </button>
              <Link
                to="/contact"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full
                  text-sm font-semibold transition hover:scale-105 shadow-lg ${
                    theme === "dark"
                      ? `${gradientBgDark} text-brandDark`
                      : `${gradientBgLight} text-white`
                  }`}
              >
                <Phone size={16} />
                Get Started
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-brandDark dark:text-brandLight"
              aria-label="Toggle menu"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
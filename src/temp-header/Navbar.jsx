// ============================================
// Navbar.jsx - COMPLETE FIXED FILE
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
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
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
        <nav className="relative h-20 border-b bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
            <div className="container flex items-center h-full">

                {/* =======================
            LEFT CLUSTER
        ======================= */}
                <div className="flex items-center h-full gap-4">

                    {/* LOGO */}
                    <Link
                        to="/"
                        className={`flex items-center transition-all duration-300 ${activeMegaKey ? "opacity-50 blur-[1px]" : ""
                            }`}
                    >
                        <div className="flex items-center w-[190px] h-[48px] shrink-0">
                            <img
                                src={theme === "dark" ? "/riskman-logo-white.svg" : "/rm.png"}
                                alt="RiskMan"
                                className="object-contain w-auto h-full"
                                draggable={false}
                            />
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="items-center hidden h-full gap-1 lg:flex">
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
                                    {/* ✅ CLICK ALWAYS NAVIGATES */}
                                    <Link
                                        to={item.path}
                                        className={`
                      flex items-center gap-1.5 px-4 py-2 rounded-lg
                      text-sm font-medium transition-colors duration-200
                      ${isMega
                                                ? isActive
                                                    ? "bg-brandAccent/15 text-brandPrimary dark:text-brandGold"
                                                    : activeMegaKey
                                                        ? "opacity-40"
                                                        : "text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
                                                : "text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
                                            }
                    `}
                                    >
                                        {item.label}

                                        {isMega && (
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-180" : ""
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
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* =======================
            RIGHT CLUSTER
        ======================= */}
                <div
                    className={`ml-auto flex items-center gap-3 transition-all duration-300 ${activeMegaKey ? "opacity-50 blur-[1px]" : ""
                        }`}
                >
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
                    {/* <Link
            to="/contact"
            className="items-center hidden gap-3 px-6 py-3 text-sm font-semibold text-white rounded-full shadow-lg lg:flex bg-brandPrimary hover:bg-brandNavy shadow-brandPrimary/25 active:scale-95"
          >
            <Phone size={16} />
            <span>Get Started</span>
            <ArrowRight size={16} />
          </Link> */}

                    <Link
                        to="/contact"
                        className="
    hidden lg:flex items-center gap-2
    h-[42px] px-5
    text-[14px] font-semibold
    text-white
    rounded-full
    bg-brandPrimary hover:bg-brandNavy
    shadow-md
    transition-all
  "
                    >
                        <Phone size={14} />
                        <span>Get Started</span>
                        <ArrowRight size={14} />
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

            {/* =======================
          MEGA MENU + BACKDROP
      ======================= */}
            {activeMegaKey && (
                <>
                    {/* BACKDROP */}
                    <div className="fixed inset-0 top-20 z-[45] bg-black/40 backdrop-blur-lg pointer-events-none" />

                    {/* MEGA MENU */}
                    <div
                        className="absolute top-full z-[46] left-1/2 -translate-x-1/2"
                        onMouseEnter={() => handleMouseEnter(activeMegaKey)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <MegaMenu menuKey={activeMegaKey} />
                    </div>
                </>
            )}
        </nav>
    );
};

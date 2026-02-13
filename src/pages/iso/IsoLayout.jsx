

import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      {/* Navigation Bar */}
      <nav className="fixed z-50 w-screen border-b shadow-sm bg-surfaceLight/95 dark:bg-surfaceDark/95 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div className="container flex items-center justify-between px-6 lg:px-20">
          {/* Brand Logo */}
          <div
            onClick={() => navigate("")}
            className="flex-shrink-0 mr-3 text-lg font-black tracking-tighter transition-opacity cursor-pointer sm:text-xl lg:text-2xl font-heading text-brandPrimary dark:text-brandGold hover:opacity-80 sm:mr-4"
          >
            ISO's
          </div>

          {/* Links - Horizontally Scrollable on Mobile */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide max-w-[calc(100vw-120px)] sm:max-w-[calc(100vw-180px)] lg:max-w-none">
            <NavItem to="iso-27001" label="ISO 27001" mobileLabel="27001" />
            <NavItem to="iso-27701" label="ISO 27701" mobileLabel="27701" />
            <NavItem to="iso-22301" label="ISO 22301" mobileLabel="22301" />
            <NavItem to="iso-31000" label="ISO 31000" mobileLabel="31000" />
            <NavItem to="iso-42001" label="ISO 42001" mobileLabel="42001" />
            <NavItem to="tisax" label="TISAX" mobileLabel="TISAX" />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

// Navigation Item Component
const NavItem = ({ to, label, mobileLabel }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-2 px-2.5 sm:px-4 lg:px-5 py-2 rounded-lg
      text-[11px] sm:text-sm lg:text-base
      font-extrabold tracking-wide
      transition-all duration-200
      border border-brandPrimary dark:border-brandGold
      whitespace-nowrap
      flex-shrink-0
      ${
        isActive
          ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark"
          : "text-brandPrimary dark:text-brandGold bg-white dark:bg-slate-900 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10"
      }
    `}
  >
    <span className="hidden sm:inline">{label}</span>
    <span className="inline sm:hidden">{mobileLabel || label}</span>
  </NavLink>
);

export default Layout;
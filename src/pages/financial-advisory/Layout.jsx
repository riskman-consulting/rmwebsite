import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      {/* Navigation Bar */}
      <nav className="fixed z-50 w-screen border-b shadow-sm bg-surfaceLight/95 dark:bg-surfaceDark/95 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto lg:px-20">
          {/* Brand Logo */}
          <div
            onClick={() => navigate("")}
            className="flex-shrink-0 mr-3 text-sm font-black tracking-tighter transition-opacity cursor-pointer sm:text-base lg:text-xl font-heading text-brandPrimary dark:text-brandGold hover:opacity-80 sm:mr-4"
          >
            Financial Advisory
          </div>

          {/* Links - Horizontally Scrollable on Mobile */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide max-w-[calc(100vw-180px)] sm:max-w-[calc(100vw-240px)] lg:max-w-none">
            <NavItem 
              to="credit-risk-assessment" 
              label="Credit Risk Assessment" 
              mobileLabel="Risk Assessment" 
            />
            <NavItem 
              to="credit-policy-framework" 
              label="Credit Policy Framework" 
              mobileLabel="Policy Framework" 
            />
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
      flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 rounded-lg
      text-[10px] sm:text-xs lg:text-sm
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
import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      {/* Navigation Bar */}
      <nav className="fixed z-50 w-screen border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div className="container flex items-center justify-between py-4">
          {/* Brand Logo Placeholder */}
          <div onClick={() => navigate("")} className="text-2xl font-black tracking-tighter font-heading text-brandPrimary dark:text-brandGold">
            Financial Advisory
          </div>

          {/* Links */}
          <div className="flex items-center gap-1 text-sm sm:gap-3">
            <NavItem to="credit-risk-assessment"
              label="Credit Risk Assessment" />
            <NavItem to="credit-policy-framework"
              label="Credit Policy Framework" />
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

// Helper component for cleaner link logic
const NavItem = ({ to, icon = "", label }) => (
  <NavLink
    to={to}
    // className={({ isActive }) => `
    //   flex items-center text-sm gap-2 px-4 py-2  rounded-lg font-bold transition-all duration-200
    //   ${isActive
    //     ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark"
    //     : "text-gray-600 dark:text-gray-400 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
    //   }
    // `}

    className={({ isActive }) => `
  flex items-center gap-2 px-4 py-2 rounded-lg
  text-[13px] sm:text-[14px]
  font-extrabold tracking-wide
  transition-all duration-200
  ${isActive 
    ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark" 
    : "text-gray-700 dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
  }
`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </NavLink>
);

export default Layout;
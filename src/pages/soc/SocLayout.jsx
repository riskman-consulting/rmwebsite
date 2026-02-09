// import React from "react";
// import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import { ShieldCheck, FileText, Globe } from "lucide-react";

// function Layout() {
//   const navigate = useNavigate()
//   return (
//     <div className="z-40 min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
//       {/* Navigation Bar */}
//       <nav className="fixed z-50 w-screen border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
//         <div className="container flex items-center justify-between py-4">
//           {/* Brand Logo Placeholder */}
//           <div onClick={()=>navigate("")} className="text-2xl font-black tracking-tighter font-heading text-brandPrimary dark:text-brandGold">
//             SOC's
//           </div>

//           {/* Links */}
//           <div className="flex items-center gap-1 sm:gap-4">
//             <NavItem to="soc-1"  label="SOC 1" />
//             <NavItem to="soc-2"  label="SOC 2" />
//             <NavItem to="soc-3" label="SOC 3" />
//           </div>
//         </div>
//       </nav>

//       {/* Page Content */}
//       <main className="animate-fadeIn">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// // Helper component for cleaner link logic
// const NavItem = ({ to, icon="", label }) => (
//   <NavLink
//     to={to}
//     className={({ isActive }) => `
//       flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all duration-200
//       ${isActive 
//         ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark" 
//         : "text-gray-600 dark:text-gray-400 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
//       }
//     `}
//   >
//     {icon}
//     <span className="hidden sm:inline">{label}</span>
//   </NavLink>
// );

// export default Layout;


import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Layout() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="z-40 min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      {/* Navigation Bar */}
      <nav className="fixed z-50 w-screen border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          {/* Brand Logo */}
          <div 
            onClick={() => navigate("")} 
            className="text-xl font-black tracking-tighter cursor-pointer sm:text-2xl font-heading text-brandPrimary dark:text-brandGold"
          >
            SOC's
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-4 md:flex">
            <NavItem to="soc-1" label="SOC 1" />
            <NavItem to="soc-2" label="SOC 2" />
            <NavItem to="soc-3" label="SOC 3" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 transition-colors rounded-lg md:hidden dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t md:hidden border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <div className="container flex flex-col gap-2 px-4 py-4 mx-auto">
              <MobileNavItem to="soc-1" label="SOC 1" onClick={closeMobileMenu} />
              <MobileNavItem to="soc-2" label="SOC 2" onClick={closeMobileMenu} />
              <MobileNavItem to="soc-3" label="SOC 3" onClick={closeMobileMenu} />
            </div>
          </div>
        )}
      </nav>

      {/* Page Content - Add top padding to account for fixed nav */}
      <main className="pt-16 animate-fadeIn sm:pt-20">
        <Outlet />
      </main>
    </div>
  );
}

// Desktop Navigation Item
const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all duration-200
      ${isActive 
        ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark" 
        : "text-gray-600 dark:text-gray-400 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
      }
    `}
  >
    {label}
  </NavLink>
);

// Mobile Navigation Item
const MobileNavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `
      flex items-center gap-2 px-4 py-3 rounded-lg font-bold transition-all duration-200
      ${isActive 
        ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark" 
        : "text-gray-600 dark:text-gray-400 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
      }
    `}
  >
    {label}
  </NavLink>
);

export default Layout;
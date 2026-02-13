// import React, { useState } from "react";
// import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// function Layout() {
//   const navigate = useNavigate();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
//   const closeMobileMenu = () => setMobileMenuOpen(false);

//   return (
//     <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
//       {/* Navigation Bar */}
//       <nav className="fixed z-50 w-screen border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
//         <div className="container flex items-center justify-between px-4 py-4 mx-auto">
//           {/* Brand Logo */}
//           <div 
//             onClick={() => navigate("")} 
//             className="text-base font-black tracking-tighter cursor-pointer sm:text-xl lg:text-2xl font-heading text-brandPrimary dark:text-brandGold"
//           >
//             Digital Transformation
//           </div>

//           {/* Desktop Navigation */}
//           <div className="items-center hidden gap-4 md:flex">
//             <NavItem to="strategic-pmo" label="Strategic PMO" />
//             <NavItem to="implementation" label="Implementation" />
//             <NavItem to="support-services" label="Support Services" />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="p-2 text-gray-700 transition-colors rounded-lg md:hidden dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10"
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation Dropdown */}
//         {mobileMenuOpen && (
//           <div className="border-t md:hidden border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
//             <div className="container flex flex-col gap-2 px-4 py-4 mx-auto">
//               <MobileNavItem to="strategic-pmo" label="Strategic PMO" onClick={closeMobileMenu} />
//               <MobileNavItem to="implementation" label="Implementation" onClick={closeMobileMenu} />
//               <MobileNavItem to="support-services" label="Support Services" onClick={closeMobileMenu} />
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Page Content - Add top padding to account for fixed nav */}
//       <main className="pt-16 animate-fadeIn sm:pt-20">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// // Desktop Navigation Item
// const NavItem = ({ to, label }) => (
//   <NavLink
//     to={to}
//     className={({ isActive }) => `
//       flex items-center gap-2 px-4 py-2 rounded-lg
//       text-xs lg:text-sm
//       font-extrabold tracking-wide
//       transition-all duration-200
//       ${isActive 
//         ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark" 
//         : "text-gray-700 dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
//       }
//     `}
//   >
//     {label}
//   </NavLink>
// );

// // Mobile Navigation Item
// const MobileNavItem = ({ to, label, onClick }) => (
//   <NavLink
//     to={to}
//     onClick={onClick}
//     className={({ isActive }) => `
//       flex items-center gap-2 px-4 py-3 rounded-lg
//       text-sm
//       font-extrabold tracking-wide
//       transition-all duration-200
//       ${isActive 
//         ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark" 
//         : "text-gray-700 dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
//       }
//     `}
//   >
//     {label}
//   </NavLink>
// );

// export default Layout;


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
            Digital Transformation
          </div>

          {/* Links - Horizontally Scrollable on Mobile */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide max-w-[calc(100vw-220px)] sm:max-w-[calc(100vw-280px)] lg:max-w-none">
            <NavItem to="strategic-pmo" label="Strategic PMO" mobileLabel="PMO" />
            <NavItem to="implementation" label="Implementation" mobileLabel="Implement" />
            <NavItem to="support-services" label="Support Services" mobileLabel="Support" />
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
      text-[11px] sm:text-xs lg:text-sm
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
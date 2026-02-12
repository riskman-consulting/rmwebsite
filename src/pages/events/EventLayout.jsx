// import React from "react";
// import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import { ShieldCheck, FileText, Globe } from "lucide-react";

// function Layout() {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark">
//       {/* Navigation Bar */}
//       <nav className="fixed z-50 w-screen border-b bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark">
//         <div className="container flex items-center justify-between py-4">
//           {/* Brand Logo Placeholder */}
//           <div onClick={()=>navigate("")} className="text-2xl font-black tracking-tighter font-heading text-brandPrimary dark:text-brandGold">
//             Events
//           </div>

//           {/* Links */}
//           <div className="flex items-center gap-1 sm:gap-4">
//             <NavItem to="upcoming-events"  label="Upcoming Events" />
//             <NavItem to="past-events"  label="Past Events" />
//             <NavItem to="accomplishments"  label="Awards" />
//             {/* <NavItem to="emerging-awards"  label="Emerging Awards " /> */}
//             {/* <NavItem to="company-journey"  label="Company Journey" /> */}
//             <NavItem to="media-coverage"  label="Culture At RiskMan" />
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
//     // className={({ isActive }) => `
//     //   flex items-center text-[12px] gap-2 px-4 py-2 rounded-lg font-bold transition-all duration-200
//     //   ${isActive 
//     //     ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark" 
//     //     : "text-gray-600 dark:text-gray-400 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
//     //   }
//     // `}


//     className={({ isActive }) => `
//   flex items-center gap-2 px-4 py-2 rounded-lg
//   text-[13px] sm:text-[14px]
//   font-extrabold tracking-wide
//   transition-all duration-200
//   border-[1px] border-brandPrimary dark:border-brandGold
//   ${isActive 
//     ? "bg-brandPrimary text-white shadow-md dark:bg-brandGold dark:text-brandDark" 
//     : "text-gray-700 dark:text-gray-300 hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:text-brandPrimary dark:hover:text-brandGold"
//   }
// `}

    
//   >
//     {icon}
//     <span className="hidden sm:inline">{label}</span>
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
        <div className="container flex items-center justify-between px-6 py-4 mx-auto lg:px-20 sm:px-6">
          {/* Brand Logo */}
          <div
            onClick={() => navigate("")}
            className="text-xl font-black tracking-tighter transition-opacity cursor-pointer sm:text-2xl font-heading text-brandPrimary dark:text-brandGold hover:opacity-80"
          >
            Events
          </div>

          {/* Links - Horizontally Scrollable on Mobile */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide max-w-[calc(100vw-140px)] sm:max-w-none">
            <NavItem to="upcoming-events" label="Upcoming" mobileLabel="Upcoming" />
            <NavItem to="past-events" label="Past Events" mobileLabel="Past" />
            <NavItem to="accomplishments" label="Awards" mobileLabel="Awards" />
            <NavItem to="media-coverage" label="Culture" mobileLabel="Culture" />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-20 animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

// Helper component for cleaner link logic
const NavItem = ({ to, label, mobileLabel }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg
      text-xs sm:text-sm
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
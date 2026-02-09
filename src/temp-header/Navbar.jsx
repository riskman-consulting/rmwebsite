// // // // ============================================
// // // // Navbar.jsx - EDGE SAFE (ROUTE AWARE ACTIVE)
// // // // ============================================

// // // import React, { useEffect, useState } from "react";
// // // import { NAVIGATION_DATA } from "./constants";
// // // import { MegaMenu } from "./MegaMenu";
// // // import { Moon, Sun, Phone, ArrowRight } from "lucide-react";
// // // import { Link, useLocation } from "react-router-dom";

// // // export const Navbar = ({
// // //   onToggleMobileMenu,
// // //   activeMegaKey,
// // //   setActiveMegaKey,
// // // }) => {
// // //   const [theme, setTheme] = useState("light");
// // //   const location = useLocation();

// // //   /* =======================
// // //      ROUTE AWARE FLAGS
// // //   ======================= */
// // //   const isServicesRoute = location.pathname.startsWith("/services");

// // //   /* =======================
// // //      THEME INIT
// // //   ======================= */
// // //   useEffect(() => {
// // //     const storedTheme = localStorage.getItem("theme") || "light";
// // //     setTheme(storedTheme);
// // //     document.documentElement.classList.toggle(
// // //       "dark",
// // //       storedTheme === "dark"
// // //     );
// // //   }, []);

// // //   const toggleTheme = () => {
// // //     const nextTheme = theme === "dark" ? "light" : "dark";
// // //     setTheme(nextTheme);
// // //     localStorage.setItem("theme", nextTheme);
// // //     document.documentElement.classList.toggle(
// // //       "dark",
// // //       nextTheme === "dark"
// // //     );
// // //   };

// // //   /* =======================
// // //      CLOSE MEGA ON ROUTE CHANGE
// // //   ======================= */
// // //   useEffect(() => {
// // //     setActiveMegaKey(null);
// // //   }, [location.pathname, location.hash, setActiveMegaKey]);

// // //   /* =======================
// // //      MEGA MENU HANDLERS
// // //   ======================= */
// // //   const handleMegaToggle = (key) => {
// // //     setActiveMegaKey((prev) => (prev === key ? null : key));
// // //   };

// // //   return (
// // //     <>
// // //       {/* =======================
// // //          ANNOUNCEMENT BANNER
// // //       ======================= */}
// // //       <div className="fixed top-0 left-0 right-0 z-[60] h-[48px] bg-bgDark dark:bg-surfaceLight flex items-center">
// // //         <div className="max-w-[1400px] mx-auto px-6 w-full" />
// // //       </div>

// // //       {/* =======================
// // //          NAVBAR
// // //       ======================= */}
// // //       <nav className="fixed top-[48px] left-0 right-0 z-50 h-20 border-b bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
// // //         <div className="flex items-center w-full h-full px-6 mx-auto max-w-screen">

// // //           {/* LEFT CLUSTER */}
// // //           <div className="flex items-center h-full">

// // //             {/* LOGO */}
// // //             <Link to="/" className="flex items-center flex-shrink-0 h-16 w-36">
// // //               <img
// // //                 className="object-contain h-12 dark:hidden"
// // //                 src="/rm.png"
// // //                 alt="Riskman"
// // //               />
// // //               <img
// // //                 className="hidden object-contain h-12 w-28 dark:block"
// // //                 src="/riskman-logo-white.svg"
// // //                 alt="Riskman"
// // //               />
// // //             </Link>

// // //             {/* DESKTOP NAV */}
// // //             <div className="items-center hidden h-full lg:flex">
// // //               {NAVIGATION_DATA.mainNav.map((item) => {
// // //                 const isMega = item.type === "mega";

// // //                 // ✅ FINAL ACTIVE LOGIC
// // //                 const isActive =
// // //                   activeMegaKey === item.key ||
// // //                   (item.key === "services" && isServicesRoute);

// // //                 return (
// // //                   <div
// // //                     key={item.label}
// // //                     className="relative flex items-center h-full"
// // //                   >
// // //                     {isMega ? (
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => handleMegaToggle(item.key)}
// // //                         aria-expanded={activeMegaKey === item.key}
// // //                         aria-controls={`mega-${item.key}`}
// // //                         className={`
// // //                           flex items-center gap-1.5 px-5 py-2 rounded-lg
// // //                           text-[13px] font-medium transition-all whitespace-nowrap
// // //                           ${
// // //                             isActive
// // //                               ? "bg-brandAccent/15 text-brandPrimary dark:text-brandGold font-bold"
// // //                               : "text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
// // //                           }
// // //                         `}
// // //                       >
// // //                         {item.label}

// // //                         <svg
// // //                           className={`w-4 h-4 transition-transform ${
// // //                             activeMegaKey === item.key ? "rotate-180" : ""
// // //                           }`}
// // //                           fill="none"
// // //                           stroke="currentColor"
// // //                           viewBox="0 0 24 24"
// // //                         >
// // //                           <path
// // //                             strokeLinecap="round"
// // //                             strokeLinejoin="round"
// // //                             strokeWidth="2"
// // //                             d="M19 9l-7 7-7-7"
// // //                           />
// // //                         </svg>
// // //                       </button>
// // //                     ) : (
// // //                       <Link
// // //                         to={item.path}
// // //                         className="
// // //                           flex items-center gap-1.5 px-5 py-2 rounded-lg
// // //                           text-[13px] font-medium transition-all whitespace-nowrap
// // //                           text-brandDark dark:text-brandLight hover:bg-brandPrimary/10
// // //                         "
// // //                       >
// // //                         {item.label}
// // //                       </Link>
// // //                     )}

// // //                     {isMega && activeMegaKey === item.key && (
// // //                       <div
// // //                         className="absolute left-0 z-50 top-full"
// // //                         id={`mega-${item.key}`}
// // //                       >
// // //                         <MegaMenu menuKey={item.key} />
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>

// // //           {/* RIGHT CLUSTER */}
// // //           <div className="flex items-center gap-3 ml-auto transition-all">

// // //             {/* THEME TOGGLE */}
// // //             <button
// // //               onClick={toggleTheme}
// // //               className="flex items-center justify-center w-10 h-10 transition rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:scale-110"
// // //             >
// // //               {theme === "dark" ? (
// // //                 <Moon className="text-brandGold" size={18} />
// // //               ) : (
// // //                 <Sun className="text-brandPrimary" size={18} />
// // //               )}
// // //             </button>

// // //             {/* DESKTOP CTA */}
// // //             <Link
// // //               to="/contact"
// // //               className="hidden lg:flex items-center gap-2 h-[42px] px-5 text-[14px] font-semibold text-white rounded-full bg-brandDark dark:bg-brandGold hover:bg-brandNavy shadow-md transition"
// // //             >
// // //               <Phone size={12} />
// // //               <span className="text-[12px]">Get Started</span>
// // //               <ArrowRight size={12} />
// // //             </Link>

// // //             {/* MOBILE MENU */}
// // //             <button
// // //               onClick={onToggleMobileMenu}
// // //               className="p-2 rounded-lg lg:hidden text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
// // //             >
// // //               <svg className="w-6 h-6" fill="none" stroke="currentColor">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
// // //               </svg>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* BACKDROP */}
// // //         {activeMegaKey && (
// // //           <div
// // //             className="fixed inset-0 top-[128px] z-[45] bg-black/40 backdrop-blur-lg"
// // //             onClick={() => setActiveMegaKey(null)}
// // //           />
// // //         )}
// // //       </nav>
// // //     </>
// // //   );
// // // };

// // // export default Navbar;


// // // ============================================
// // // Navbar.jsx - CLICK TO NAVIGATE, HOVER FOR MENU
// // // ============================================

// // import React, { useEffect, useState } from "react";
// // import { NAVIGATION_DATA } from "./constants";
// // import { MegaMenu } from "./MegaMenu";
// // import { Moon, Sun, Phone, ArrowRight } from "lucide-react";
// // import { Link, useLocation } from "react-router-dom";

// // export const Navbar = ({
// //   onToggleMobileMenu,
// //   activeMegaKey,
// //   setActiveMegaKey,
// // }) => {
// //   const [theme, setTheme] = useState("light");
// //   const location = useLocation();

// //   /* =======================
// //      ROUTE AWARE FLAGS
// //   ======================= */
// //   const isServicesRoute = location.pathname.startsWith("/services");

// //   /* =======================
// //      THEME INIT
// //   ======================= */
// //   useEffect(() => {
// //     const storedTheme = localStorage.getItem("theme") || "light";
// //     setTheme(storedTheme);
// //     document.documentElement.classList.toggle(
// //       "dark",
// //       storedTheme === "dark"
// //     );
// //   }, []);

// //   const toggleTheme = () => {
// //     const nextTheme = theme === "dark" ? "light" : "dark";
// //     setTheme(nextTheme);
// //     localStorage.setItem("theme", nextTheme);
// //     document.documentElement.classList.toggle(
// //       "dark",
// //       nextTheme === "dark"
// //     );
// //   };

// //   /* =======================
// //      CLOSE MEGA ON ROUTE CHANGE
// //   ======================= */
// //   useEffect(() => {
// //     setActiveMegaKey(null);
// //   }, [location.pathname, location.hash, setActiveMegaKey]);

// //   return (
// //     <>
// //       {/* =======================
// //          ANNOUNCEMENT BANNER
// //       ======================= */}
// //       <div className="fixed top-0 left-0 right-0 z-[60] h-[48px] bg-bgDark dark:bg-surfaceLight flex items-center">
// //         <div className="max-w-[1400px] mx-auto px-6 w-full" />
// //       </div>

// //       {/* =======================
// //          NAVBAR
// //       ======================= */}
// //       <nav className="fixed top-[48px] left-0 right-0 z-50 h-20 border-b bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
// //         <div className="flex items-center w-full h-full px-6 mx-auto max-w-screen">

// //           {/* LEFT CLUSTER */}
// //           <div className="flex items-center h-full">

// //             {/* LOGO */}
// //             <Link to="/" className="flex items-center flex-shrink-0 h-16 w-36">
// //               <img
// //                 className="object-contain h-12 dark:hidden"
// //                 src="/rm.png"
// //                 alt="Riskman"
// //               />
// //               <img
// //                 className="hidden object-contain h-12 w-28 dark:block"
// //                 src="/riskman-logo-white.svg"
// //                 alt="Riskman"
// //               />
// //             </Link>

// //             {/* DESKTOP NAV */}
// //             <div className="items-center hidden h-full lg:flex">
// //               {NAVIGATION_DATA.mainNav.map((item) => {
// //                 const isMega = item.type === "mega";

// //                 // Active logic
// //                 const isActive =
// //                   activeMegaKey === item.key ||
// //                   (item.key === "services" && isServicesRoute);

// //                 return (
// //                   <div
// //                     key={item.label}
// //                     className="relative flex items-center h-full"
// //                     onMouseEnter={() => isMega && setActiveMegaKey(item.key)}
// //                     onMouseLeave={() => isMega && setActiveMegaKey(null)}
// //                   >
// //                     <Link
// //                       to={item.path}
// //                       className={`
// //                         flex items-center gap-1.5 px-5 py-2 rounded-lg
// //                         text-[13px] font-medium transition-all whitespace-nowrap
// //                         ${
// //                           isActive
// //                             ? "bg-brandAccent/15 text-brandPrimary dark:text-brandGold font-bold"
// //                             : "text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
// //                         }
// //                       `}
// //                     >
// //                       {item.label}

// //                       {isMega && (
// //                         <svg
// //                           className={`w-4 h-4 transition-transform ${
// //                             activeMegaKey === item.key ? "rotate-180" : ""
// //                           }`}
// //                           fill="none"
// //                           stroke="currentColor"
// //                           viewBox="0 0 24 24"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth="2"
// //                             d="M19 9l-7 7-7-7"
// //                           />
// //                         </svg>
// //                       )}
// //                     </Link>

// //                     {isMega && activeMegaKey === item.key && (
// //                       <div
// //                         className="absolute left-0 z-50 top-full"
// //                         id={`mega-${item.key}`}
// //                       >
// //                         <MegaMenu menuKey={item.key} />
// //                       </div>
// //                     )}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           {/* RIGHT CLUSTER */}
// //           <div className="flex items-center gap-3 ml-auto transition-all">

// //             {/* THEME TOGGLE */}
// //             <button
// //               onClick={toggleTheme}
// //               className="flex items-center justify-center w-10 h-10 transition rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:scale-110"
// //             >
// //               {theme === "dark" ? (
// //                 <Moon className="text-brandGold" size={18} />
// //               ) : (
// //                 <Sun className="text-brandPrimary" size={18} />
// //               )}
// //             </button>

// //             {/* DESKTOP CTA */}
// //             <Link
// //               to="/contact"
// //               className="hidden lg:flex items-center gap-2 h-[42px] px-5 text-[14px] font-semibold text-white rounded-full bg-brandDark dark:bg-brandGold hover:bg-brandNavy shadow-md transition"
// //             >
// //               <Phone size={12} />
// //               <span className="text-[12px]">Get Started</span>
// //               <ArrowRight size={12} />
// //             </Link>

// //             {/* MOBILE MENU */}
// //             <button
// //               onClick={onToggleMobileMenu}
// //               className="p-2 rounded-lg lg:hidden text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
// //             >
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         {/* BACKDROP */}
// //         {activeMegaKey && (
// //           <div
// //             className="fixed inset-0 top-[128px] z-[45] bg-black/40 backdrop-blur-lg"
// //             onClick={() => setActiveMegaKey(null)}
// //           />
// //         )}
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;



// // ============================================
// // Navbar.jsx - CLICK TO NAVIGATE, HOVER FOR MENU
// // Fixed: Equal alignment and consistent spacing
// // ============================================

// import React, { useEffect, useState } from "react";
// import { NAVIGATION_DATA } from "./constants";
// import { MegaMenu } from "./MegaMenu";
// import { Moon, Sun, Phone, ArrowRight } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// export const Navbar = ({
//   onToggleMobileMenu,
//   activeMegaKey,
//   setActiveMegaKey,
// }) => {
//   const [theme, setTheme] = useState("light");
//   const location = useLocation();

//   /* =======================
//      ROUTE AWARE FLAGS
//   ======================= */
//   const isServicesRoute = location.pathname.startsWith("/services");

//   /* =======================
//      THEME INIT
//   ======================= */
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//     document.documentElement.classList.toggle(
//       "dark",
//       storedTheme === "dark"
//     );
//   }, []);

//   const toggleTheme = () => {
//     const nextTheme = theme === "dark" ? "light" : "dark";
//     setTheme(nextTheme);
//     localStorage.setItem("theme", nextTheme);
//     document.documentElement.classList.toggle(
//       "dark",
//       nextTheme === "dark"
//     );
//   };

//   /* =======================
//      CLOSE MEGA ON ROUTE CHANGE
//   ======================= */
//   useEffect(() => {
//     setActiveMegaKey(null);
//   }, [location.pathname, location.hash, setActiveMegaKey]);

//   return (
//     <>
//       {/* =======================
//          ANNOUNCEMENT BANNER
//       ======================= */}
//       <div className="fixed top-0 left-0 right-0 z-[60] h-[48px] bg-bgDark dark:bg-surfaceLight flex items-center">
//         <div className="max-w-[1400px] mx-auto px-6 w-full" />
//       </div>

//       {/* =======================
//          NAVBAR
//       ======================= */}
//       <nav className="fixed top-[48px] left-0 right-0 z-50 h-20 border-b bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
//         <div className="flex items-center w-full h-full px-6 mx-auto max-w-screen">

//           {/* LEFT CLUSTER */}
//           <div className="flex items-center h-full">

//             {/* LOGO */}
//             <Link to="/" className="flex items-center flex-shrink-0 h-16 w-36">
//               <img
//                 className="object-contain h-12 dark:hidden"
//                 src="/rm.png"
//                 alt="Riskman"
//               />
//               <img
//                 className="hidden object-contain h-12 w-28 dark:block"
//                 src="/riskman-logo-white.svg"
//                 alt="Riskman"
//               />
//             </Link>

//             {/* DESKTOP NAV - Fixed Alignment */}
//             <div className="items-center hidden h-full gap-1 ml-8 lg:flex">
//               {NAVIGATION_DATA.mainNav.map((item) => {
//                 const isMega = item.type === "mega";

//                 // Active logic
//                 const isActive =
//                   activeMegaKey === item.key ||
//                   (item.key === "services" && isServicesRoute);

//                 return (
//                   <div
//                     key={item.label}
//                     className="relative flex items-center h-full"
//                     onMouseEnter={() => isMega && setActiveMegaKey(item.key)}
//                     onMouseLeave={() => isMega && setActiveMegaKey(null)}
//                   >
//                     <Link
//                       to={item.path}
//                       className={`
//                         flex items-center justify-center gap-1.5 h-10 px-4 rounded-lg
//                         text-[14px] font-medium transition-all whitespace-nowrap
//                         ${
//                           isActive
//                             ? "bg-brandAccent/15 text-brandPrimary dark:text-brandGold font-semibold"
//                             : "text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
//                         }
//                       `}
//                     >
//                       {item.label}

//                       {isMega && (
//                         <svg
//                           className={`w-3.5 h-3.5 transition-transform ${
//                             activeMegaKey === item.key ? "rotate-180" : ""
//                           }`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       )}
//                     </Link>

//                     {isMega && activeMegaKey === item.key && (
//                       <div
//                         className="absolute left-0 z-50 top-full"
//                         id={`mega-${item.key}`}
//                       >
//                         <MegaMenu menuKey={item.key} />
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT CLUSTER */}
//           <div className="flex items-center gap-3 ml-auto transition-all">

//             {/* THEME TOGGLE */}
//             <button
//               onClick={toggleTheme}
//               className="flex items-center justify-center w-10 h-10 transition rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:scale-110"
//             >
//               {theme === "dark" ? (
//                 <Moon className="text-brandGold" size={18} />
//               ) : (
//                 <Sun className="text-brandPrimary" size={18} />
//               )}
//             </button>

//             {/* DESKTOP CTA */}
//             <Link
//               to="/contact"
//               className="hidden lg:flex items-center gap-2 h-[42px] px-5 text-[14px] font-semibold text-white rounded-full bg-brandDark dark:bg-brandGold hover:bg-brandNavy shadow-md transition"
//             >
//               <Phone size={16} />
//               <span className="text-[13px]">Get Started</span>
//               <ArrowRight size={16} />
//             </Link>

//             {/* MOBILE MENU */}
//             <button
//               onClick={onToggleMobileMenu}
//               className="p-2 rounded-lg lg:hidden text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* BACKDROP */}
//         {activeMegaKey && (
//           <div
//             className="fixed inset-0 top-[128px] z-[45] bg-black/40 backdrop-blur-lg"
//             onClick={() => setActiveMegaKey(null)}
//           />
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import { NAVIGATION_DATA } from "./constants";
import { MegaMenu } from "./MegaMenu";
import { Moon, Sun, Phone, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({
  onToggleMobileMenu,
  activeMegaKey,
  setActiveMegaKey,
}) => {
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  const isServicesRoute = location.pathname.startsWith("/services");

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

  useEffect(() => {
    setActiveMegaKey(null);
  }, [location.pathname, location.hash, setActiveMegaKey]);

  return (
    <>
      {/* ANNOUNCEMENT BANNER */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[48px] bg-bgDark dark:bg-surfaceLight flex items-center">
        <div className="container" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-[48px] left-0 right-0 z-50 h-20 border-b bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
        <div className="container h-full">
          <div className="flex items-center justify-between h-full">

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
                const isActive =
                  activeMegaKey === item.key ||
                  (item.key === "services" && isServicesRoute);

                return (
                  <div
                    key={item.label}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => isMega && setActiveMegaKey(item.key)}
                    onMouseLeave={() => isMega && setActiveMegaKey(null)}
                  >
                    <Link
                      to={item.path}
                      className={`
                        flex items-center justify-center gap-1.5 h-10 px-4 rounded-lg mx-1
                        text-[14px] font-medium transition-all whitespace-nowrap
                        ${
                          isActive
                            ? "bg-brandAccent/15 text-brandPrimary dark:text-brandGold font-semibold"
                            : "text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
                        }
                      `}
                    >
                      {item.label}
                      {isMega && (
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${
                            activeMegaKey === item.key ? "rotate-180" : ""
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

                    {isMega && activeMegaKey === item.key && (
                      <div className="absolute left-0 z-50 top-full" id={`mega-${item.key}`}>
                        <MegaMenu menuKey={item.key} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT CLUSTER */}
            <div className="flex items-center gap-3">
              {/* THEME TOGGLE */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 transition rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:scale-110"
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
                <Phone size={16} />
                <span className="text-[13px]">Get Started</span>
                <ArrowRight size={16} />
              </Link>

              {/* MOBILE MENU */}
              <button
                onClick={onToggleMobileMenu}
                className="p-2 rounded-lg lg:hidden text-brandDark dark:text-brandLight hover:bg-brandPrimary/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* BACKDROP */}
        {activeMegaKey && (
          <div
            className="fixed inset-0 top-[128px] z-[45] bg-black/40 backdrop-blur-lg"
            onClick={() => setActiveMegaKey(null)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
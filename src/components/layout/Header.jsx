// import { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import menus from "../../data/menus.json";
// import { Menu, X, ChevronDown, Sun, Moon, Phone, ArrowRight } from "lucide-react";
 
// const {
//   mainNav,
//   servicesMegaMenu,
//   industriesMegaMenu,
//   insightsMegaMenu,
//   aboutMegaMenu,
// } = menus;
 
// /* =======================
//    HELPERS
// ======================= */
// const getMegaData = (key) => {
//   if (key === "services") return servicesMegaMenu;
//   if (key === "industries") return industriesMegaMenu;
//   if (key === "insights") return insightsMegaMenu;
//   if (key === "about") return aboutMegaMenu;
//   return [];
// };
 
// export default function Header() {
//   const location = useLocation();
//   const closeRef = useRef(null);
 
//   const [theme, setTheme] = useState("light");
//   const [mounted, setMounted] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
 
//   /* THEME – COLOR ONLY */
//   useEffect(() => {
//     const t = localStorage.getItem("theme") || "light";
//     setTheme(t);
//     document.documentElement.classList.toggle("dark", t === "dark");
//     setMounted(true);
//   }, []);
 
//   const toggleTheme = () => {
//     const next = theme === "dark" ? "light" : "dark";
//     setTheme(next);
//     localStorage.setItem("theme", next);
//     document.documentElement.classList.toggle("dark", next === "dark");
//   };
 
//   /* RESET ON ROUTE CHANGE */
//   useEffect(() => {
//     setOpenMenu(null);
//     setMobileOpen(false);
//     setMobileExpandedMenu(null);
//   }, [location.pathname]);
 
//   if (!mounted) return null;
 
//   return (
//     <>
//       {/* BACKDROP BLUR OVERLAY */}
//       <AnimatePresence>
//         {openMenu && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-[90] bg-black/20 dark:bg-black/40 backdrop-blur-xl"
//             onMouseEnter={() => {
//               if (closeRef.current) clearTimeout(closeRef.current);
//               setOpenMenu(null);
//             }}
//           />
//         )}
//       </AnimatePresence>
 
//       {/* ================= HEADER ================= */}
//       <header
//         className="fixed top-0 inset-x-0 z-[100]
//         bg-surfaceLight dark:bg-surfaceDark
//         border-b border-borderLight dark:border-borderDark backdrop-blur shadow-md"
//       >
//         <div className="container">
//           <div className="flex items-center justify-between h-[72px]">
 
//             {/* LOGO – SIZE LOCKED */}
//             <Link to="/" className="flex items-center">
//               <div
//                 className="w-[160px] h-[42px] flex items-center
//                 text-brandPrimary dark:text-brandAccent"
//               >
//                 <img
//                   src={theme==="dark" ? "/riskman-logo-white.svg" :"/rm.png"}
//                   alt="RiskMan"
//                   className="object-contain w-full h-full"
//                 />
//               </div>
//             </Link>
 
//             {/* DESKTOP NAV */}
//             <nav className="items-center   hidden gap-10 md:flex">
//               {mainNav.map((item) => {
//                 if (item.type === "link") {
//                   return (
//                     <NavLink
//                       key={item.label}
//                       to={item.path}
//                       className="text-sm font-medium transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
//                     >
//                       {item.label}
//                     </NavLink>
//                   );
//                 }
 
//                 return (
//                   <div
//                     key={item.label}
//                     className="relative"
//                     onMouseEnter={() => {
//                       if (closeRef.current) clearTimeout(closeRef.current);
//                       setOpenMenu(item.label);
//                     }}
//                     onMouseLeave={() => {
//                       closeRef.current = setTimeout(
//                         () => setOpenMenu(null),
//                         120
//                       );
//                     }}
//                   >
//                     <button
//                       className="flex items-center gap-1 text-sm font-medium transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
//                     >
//                       {item.label}
//                       <ChevronDown size={14} />
//                     </button>
 
//                     {/* WATERFALL MEGA MENU */}
//                     <AnimatePresence>
//                       {openMenu === item.label && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 12 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 12 }}
//                           className="fixed left-1/2  -translate-x-1/2 mt-6
//                             w-[920px] min-h-[320px]
//                             rounded-2xl shadow-xl
//                             bg-bgLight dark:bg-bgDark
//                             border border-borderLight dark:border-borderDark
//                             p-8 backdrop-blur"
//                         >
//                           <div className="grid   grid-cols-4 gap-8">
//                             {getMegaData(item.key).map((section, i) => (
//                               <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 24 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.08 }}
//                               >
//                                 <p
//                                   className="mb-3 text-sm font-semibold text-brandPrimary dark:text-brandAccent"
//                                 >
//                                   {section.title}
//                                 </p>
 
//                                 <ul className="space-y-2">
//                                   {section.items.map((sub, j) => (
//                                     <li key={j}>
//                                       <NavLink
//                                         to={sub.path}
//                                         className="text-sm transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
//                                       >
//                                         {sub.label}
//                                       </NavLink>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </nav>
 
//             {/* RIGHT SIDE */}
//             <div className="flex items-center gap-3">
//               {/* THEME TOGGLE */}
//               <button
//                 onClick={toggleTheme}
//                 className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:bg-brandPrimary/20 dark:hover:bg-brandAccent/20"
//               >
//                 {theme === "dark" ? (
//                   <Moon size={18} className="text-brandAccent" />
//                 ) : (
//                   <Sun size={18} className="text-brandPrimary" />
//                 )}
//               </button>

//               {/* GET STARTED BUTTON - DESKTOP */}
//               <Link
//                 to="/contact"
//                 className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all
//                 bg-brandPrimary dark:bg-brandAccent
//                 text-white hover:shadow-lg"
//               >
//                 <Phone size={16} />
//                 <span>Get Started</span>
//                 <ArrowRight size={16} />
//               </Link>
 
//               {/* MOBILE TOGGLE */}
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="md:hidden text-brandDark dark:text-brandLight"
//               >
//                 {mobileOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
 
//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 z-[90] bg-bgDark pt-[80px] md:hidden overflow-y-auto"
//           >
//             <div className="container pb-8 space-y-2 text-white">
//               {mainNav.map((item) => {
//                 if (item.type === "link") {
//                   return (
//                     <NavLink
//                       key={item.label}
//                       to={item.path}
//                       onClick={() => setMobileOpen(false)}
//                       className="block py-3 text-lg font-semibold border-b border-white/10"
//                     >
//                       {item.label}
//                     </NavLink>
//                   );
//                 }

//                 // For mega menu items - accordion style
//                 const megaData = getMegaData(item.key);
//                 const isExpanded = mobileExpandedMenu === item.label;
                
//                 return (
//                   <div key={item.label} className="border-b border-white/10">
//                     <div className="flex items-center">
//                       <NavLink
//                         to={item.path}
//                         onClick={() => setMobileOpen(false)}
//                         className="flex-1 py-3 text-lg font-semibold text-brandAccent"
//                       >
//                         {item.label}
//                       </NavLink>
//                       <button
//                         onClick={() => setMobileExpandedMenu(isExpanded ? null : item.label)}
//                         className="p-3"
//                       >
//                         <ChevronDown 
//                           size={18} 
//                           className={`transition-transform text-brandAccent ${isExpanded ? 'rotate-180' : ''}`}
//                         />
//                       </button>
//                     </div>
                    
//                     <AnimatePresence>
//                       {isExpanded && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.2 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="pb-4 pl-4 space-y-4">
//                             {megaData.map((section, i) => (
//                               <div key={i}>
//                                 <p className="mb-2 text-xs font-semibold uppercase text-brandAccent/70">
//                                   {section.title}
//                                 </p>
//                                 <ul className="space-y-2">
//                                   {section.items.map((sub, j) => (
//                                     <li key={j}>
//                                       <NavLink
//                                         to={sub.path}
//                                         onClick={() => setMobileOpen(false)}
//                                         className="block text-sm text-white/80 hover:text-white"
//                                       >
//                                         {sub.label}
//                                       </NavLink>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}

//               {/* GET STARTED BUTTON - MOBILE */}
//               <div className="pt-6 mt-6">
//                 <Link
//                   to="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-colors rounded-full shadow-lg bg-brandPrimary dark:bg-brandAccent"
//                 >
//                   <Phone size={18} />
//                   <span>Get Started</span>
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
// import { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import menus from "../../data/menus.json";
// import { Menu, X, ChevronDown, Sun, Moon, Phone, ArrowRight } from "lucide-react";
 
// const {
//   mainNav,
//   servicesMegaMenu,
//   industriesMegaMenu,
//   insightsMegaMenu,
//   aboutMegaMenu,
// } = menus;
 
// /* =======================
//    HELPERS
// ======================= */
// const getMegaData = (key) => {
//   if (key === "services") return servicesMegaMenu;
//   if (key === "industries") return industriesMegaMenu;
//   if (key === "insights") return insightsMegaMenu;
//   if (key === "about") return aboutMegaMenu;
//   return [];
// };
 
// export default function Header() {
//   const location = useLocation();
//   const closeRef = useRef(null);
 
//   const [theme, setTheme] = useState("light");
//   const [mounted, setMounted] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
 
//   /* THEME – COLOR ONLY */
//   useEffect(() => {
//     const t = localStorage.getItem("theme") || "light";
//     setTheme(t);
//     document.documentElement.classList.toggle("dark", t === "dark");
//     setMounted(true);
//   }, []);
 
//   const toggleTheme = () => {
//     const next = theme === "dark" ? "light" : "dark";
//     setTheme(next);
//     localStorage.setItem("theme", next);
//     document.documentElement.classList.toggle("dark", next === "dark");
//   };
 
//   /* RESET ON ROUTE CHANGE */
//   useEffect(() => {
//     setOpenMenu(null);
//     setMobileOpen(false);
//     setMobileExpandedMenu(null);
//   }, [location.pathname]);
 
//   if (!mounted) return null;
 
//   return (
//     <>
//       {/* BACKDROP BLUR OVERLAY */}
//       <AnimatePresence>
//         {openMenu && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-[90] bg-black/20 dark:bg-black/40 backdrop-blur-xl"
//             onMouseEnter={() => {
//               if (closeRef.current) clearTimeout(closeRef.current);
//               setOpenMenu(null);
//             }}
//           />
//         )}
//       </AnimatePresence>
 
//       {/* ================= HEADER ================= */}
//       <header
//         className="fixed top-0 inset-x-0 z-[100]
//         bg-surfaceLight dark:bg-surfaceDark
//         border-b border-borderLight dark:border-borderDark backdrop-blur shadow-md"
//       >
//         <div className="container">
//           <div className="flex items-center justify-between h-[72px]">
 
//             {/* LOGO – SIZE LOCKED */}
//             <Link to="/" className="flex items-center">
//               <div
//                 className="w-[160px] h-[42px] flex items-center
//                 text-brandPrimary dark:text-brandAccent"
//               >
//                 <img
//                   src={theme==="dark" ? "/riskman-logo-white.svg" :"/rm.png"}
//                   alt="RiskMan"
//                   className="object-contain w-full h-full"
//                 />
//               </div>
//             </Link>
 
//             {/* DESKTOP NAV */}
//             <nav className="items-center hidden gap-10 md:flex">
//               {mainNav.map((item) => {
//                 if (item.type === "link") {
//                   return (
//                     <NavLink
//                       key={item.label}
//                       to={item.path}
//                       className="text-sm font-medium transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
//                     >
//                       {item.label}
//                     </NavLink>
//                   );
//                 }
 
//                 return (
//                   <div
//                     key={item.label}
//                     className="relative"
//                     onMouseEnter={() => {
//                       if (closeRef.current) clearTimeout(closeRef.current);
//                       setOpenMenu(item.label);
//                     }}
//                     onMouseLeave={() => {
//                       closeRef.current = setTimeout(
//                         () => setOpenMenu(null),
//                         120
//                       );
//                     }}
//                   >
//                     <NavLink
//                       to={item.path}
//                       className="flex items-center gap-1 text-sm font-medium transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
//                     >
//                       {item.label}
//                       <ChevronDown size={14} />
//                     </NavLink>
 
//                     {/* CENTERED MEGA MENU - FIXED */}
//                     <AnimatePresence>
//                       {openMenu === item.label && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 12 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 12 }}
//                           transition={{ duration: 0.2 }}
//                           className="fixed left-0 right-0 mx-auto mt-6
//                             rounded-2xl shadow-xl
//                             bg-bgLight dark:bg-bgDark
//                             border border-borderLight dark:border-borderDark
//                             p-6 backdrop-blur"
//                           style={{ 
//                             top: '72px',
//                             maxWidth: getMegaData(item.key).length === 1 ? '400px' : 
//                                       getMegaData(item.key).length === 2 ? '700px' : '920px'
//                           }}
//                         >
//                           <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${getMegaData(item.key).length}, 1fr)` }}>
//                             {getMegaData(item.key).map((section, i) => (
//                               <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 24 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.08 }}
//                               >
//                                 <p
//                                   className="mb-2.5 text-sm font-semibold text-brandPrimary dark:text-brandAccent"
//                                 >
//                                   {section.title}
//                                 </p>
 
//                                 <ul className="space-y-1.5">
//                                   {section.items.map((sub, j) => (
//                                     <li key={j}>
//                                       <NavLink
//                                         to={sub.path}
//                                         className="text-sm transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent block py-1"
//                                       >
//                                         {sub.label}
//                                       </NavLink>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </nav>
 
//             {/* RIGHT SIDE */}
//             <div className="flex items-center gap-3">
//               {/* THEME TOGGLE */}
//               <button
//                 onClick={toggleTheme}
//                 className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:bg-brandPrimary/20 dark:hover:bg-brandAccent/20"
//               >
//                 {theme === "dark" ? (
//                   <Moon size={18} className="text-brandAccent" />
//                 ) : (
//                   <Sun size={18} className="text-brandPrimary" />
//                 )}
//               </button>

//               {/* GET STARTED BUTTON - DESKTOP */}
//               <Link
//                 to="/contact"
//                 className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all
//                 bg-brandPrimary dark:bg-brandAccent
//                 text-white hover:shadow-lg"
//               >
//                 <Phone size={16} />
//                 <span>Get Started</span>
//                 <ArrowRight size={16} />
//               </Link>
 
//               {/* MOBILE TOGGLE */}
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="md:hidden text-brandDark dark:text-brandLight"
//               >
//                 {mobileOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
 
//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 z-[90] bg-bgDark pt-[80px] md:hidden overflow-y-auto"
//           >
//             <div className="container pb-8 space-y-2 text-white">
//               {mainNav.map((item) => {
//                 if (item.type === "link") {
//                   return (
//                     <NavLink
//                       key={item.label}
//                       to={item.path}
//                       onClick={() => setMobileOpen(false)}
//                       className="block py-3 text-lg font-semibold border-b border-white/10"
//                     >
//                       {item.label}
//                     </NavLink>
//                   );
//                 }

//                 // For mega menu items - accordion style
//                 const megaData = getMegaData(item.key);
//                 const isExpanded = mobileExpandedMenu === item.label;
                
//                 return (
//                   <div key={item.label} className="border-b border-white/10">
//                     <div className="flex items-center">
//                       <NavLink
//                         to={item.path}
//                         onClick={() => setMobileOpen(false)}
//                         className="flex-1 py-3 text-lg font-semibold text-brandAccent"
//                       >
//                         {item.label}
//                       </NavLink>
//                       <button
//                         onClick={() => setMobileExpandedMenu(isExpanded ? null : item.label)}
//                         className="p-3"
//                       >
//                         <ChevronDown 
//                           size={18} 
//                           className={`transition-transform text-brandAccent ${isExpanded ? 'rotate-180' : ''}`}
//                         />
//                       </button>
//                     </div>
                    
//                     <AnimatePresence>
//                       {isExpanded && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.2 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="pb-4 pl-4 space-y-4">
//                             {megaData.map((section, i) => (
//                               <div key={i}>
//                                 <p className="mb-2 text-xs font-semibold uppercase text-brandAccent/70">
//                                   {section.title}
//                                 </p>
//                                 <ul className="space-y-2">
//                                   {section.items.map((sub, j) => (
//                                     <li key={j}>
//                                       <NavLink
//                                         to={sub.path}
//                                         onClick={() => setMobileOpen(false)}
//                                         className="block text-sm text-white/80 hover:text-white"
//                                       >
//                                         {sub.label}
//                                       </NavLink>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}

//               {/* GET STARTED BUTTON - MOBILE */}
//               <div className="pt-6 mt-6">
//                 <Link
//                   to="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-colors rounded-full shadow-lg bg-brandPrimary dark:bg-brandAccent"
//                 >
//                   <Phone size={18} />
//                   <span>Get Started</span>
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import menus from "../../data/menus.json";
// import { Menu, X, ChevronDown, Sun, Moon, Phone, ArrowRight } from "lucide-react";
 
// const {
//   mainNav,
//   servicesMegaMenu,
//   industriesMegaMenu,
//   insightsMegaMenu,
//   aboutMegaMenu,
// } = menus;
 
// /* =======================
//    HELPERS
// ======================= */
// const getMegaData = (key) => {
//   if (key === "services") return servicesMegaMenu;
//   if (key === "industries") return industriesMegaMenu;
//   if (key === "insights") return insightsMegaMenu;
//   if (key === "about") return aboutMegaMenu;
//   return [];
// };
 
// export default function Header() {
//   const location = useLocation();
//   const closeRef = useRef(null);
 
//   const [theme, setTheme] = useState("light");
//   const [mounted, setMounted] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
 
//   /* THEME – COLOR ONLY */
//   useEffect(() => {
//     const t = localStorage.getItem("theme") || "light";
//     setTheme(t);
//     document.documentElement.classList.toggle("dark", t === "dark");
//     setMounted(true);
//   }, []);
 
//   const toggleTheme = () => {
//     const next = theme === "dark" ? "light" : "dark";
//     setTheme(next);
//     localStorage.setItem("theme", next);
//     document.documentElement.classList.toggle("dark", next === "dark");
//   };
 
//   /* RESET ON ROUTE CHANGE */
//   useEffect(() => {
//     setOpenMenu(null);
//     setMobileOpen(false);
//     setMobileExpandedMenu(null);
//   }, [location.pathname]);
 
//   if (!mounted) return null;
 
//   return (
//     <>
//       {/* BACKDROP BLUR OVERLAY */}
//       <AnimatePresence>
//         {openMenu && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-[90] bg-black/20 dark:bg-black/40 backdrop-blur-xl"
//             onMouseEnter={() => {
//               if (closeRef.current) clearTimeout(closeRef.current);
//               setOpenMenu(null);
//             }}
//           />
//         )}
//       </AnimatePresence>
 
//       {/* ================= HEADER ================= */}
//       <header
//         className="fixed top-0 inset-x-0 z-[100]
//         bg-surfaceLight dark:bg-surfaceDark
//         border-b border-borderLight dark:border-borderDark backdrop-blur shadow-md"
//       >
//         <div className="container">
//           <div className="flex items-center justify-between h-[72px]">
 
//             {/* LOGO – SIZE LOCKED */}
//             <Link to="/" className="flex items-center">
//               <div
//                 className="w-[160px] h-[42px] flex items-center
//                 text-brandPrimary dark:text-brandAccent"
//               >
//                 <img
//                   src={theme==="dark" ? "/riskman-logo-white.svg" :"/rm.png"}
//                   alt="RiskMan"
//                   className="object-contain w-full h-full"
//                 />
//               </div>
//             </Link>
 
//             {/* DESKTOP NAV */}
//             <nav className="items-center hidden gap-10 md:flex">
//               {mainNav.map((item) => {
//                 if (item.type === "link") {
//                   return (
//                     <NavLink
//                       key={item.label}
//                       to={item.path}
//                       className="text-sm font-medium transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
//                     >
//                       {item.label}
//                     </NavLink>
//                   );
//                 }
 
//                 return (
//                   <div
//                     key={item.label}
//                     className="relative"
//                     onMouseEnter={() => {
//                       if (closeRef.current) clearTimeout(closeRef.current);
//                       setOpenMenu(item.label);
//                     }}
//                     onMouseLeave={() => {
//                       closeRef.current = setTimeout(
//                         () => setOpenMenu(null),
//                         120
//                       );
//                     }}
//                   >
//                     <div className="flex items-center gap-1 text-sm font-medium">
//                       <NavLink
//                         to={item.path}
//                         className="transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
//                       >
//                         {item.label}
//                       </NavLink>
//                       <ChevronDown size={14} className="text-brandDark dark:text-brandLight" />
//                     </div>
 
//                     {/* CENTERED MEGA MENU - FIXED */}
//                     <AnimatePresence>
//                       {openMenu === item.label && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 12 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 12 }}
//                           transition={{ duration: 0.2 }}
//                           className="fixed left-0 right-0 mx-auto mt-6
//                             rounded-2xl shadow-xl
//                             bg-bgLight dark:bg-bgDark
//                             border border-borderLight dark:border-borderDark
//                             p-6 backdrop-blur"
//                           style={{ 
//                             top: '72px',
//                             maxWidth: getMegaData(item.key).length === 1 ? '400px' : 
//                                       getMegaData(item.key).length === 2 ? '700px' : '920px'
//                           }}
//                         >
//                           <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${getMegaData(item.key).length}, 1fr)` }}>
//                             {getMegaData(item.key).map((section, i) => (
//                               <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 24 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.08 }}
//                               >
//                                 <p
//                                   className="mb-2.5 text-sm font-semibold text-brandPrimary dark:text-brandAccent"
//                                 >
//                                   {section.title}
//                                 </p>
 
//                                 <ul className="space-y-1.5">
//                                   {section.items.map((sub, j) => (
//                                     <li key={j}>
//                                       <NavLink
//                                         to={sub.path}
//                                         className="text-sm transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent block py-1"
//                                       >
//                                         {sub.label}
//                                       </NavLink>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </nav>
 
//             {/* RIGHT SIDE */}
//             <div className="flex items-center gap-3">
//               {/* THEME TOGGLE */}
//               <div className="relative group">
//                 <button
//                   onClick={toggleTheme}
//                   className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:bg-brandPrimary/20 dark:hover:bg-brandAccent/20"
//                 >
//                   {theme === "dark" ? (
//                     <Moon size={18} className="text-brandAccent" />
//                   ) : (
//                     <Sun size={18} className="text-brandPrimary" />
//                   )}
//                 </button>
                
//                 {/* TOOLTIP */}
//                 <div className="absolute right-0 top-full mt-2 px-3 py-1.5 bg-brandDark dark:bg-brandLight text-white dark:text-brandDark text-xs font-medium rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none">
//                   {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
//                   <div className="absolute -top-1 right-4 w-2 h-2 bg-brandDark dark:bg-brandLight rotate-45"></div>
//                 </div>
//               </div>

//               {/* GET STARTED BUTTON - DESKTOP */}
//               <Link
//                 to="/contact"
//                 className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all
//                 bg-brandPrimary dark:bg-brandAccent
//                 text-white hover:shadow-lg"
//               >
//                 <Phone size={16} />
//                 <span>Get Started</span>
//                 <ArrowRight size={16} />
//               </Link>
 
//               {/* MOBILE TOGGLE */}
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="md:hidden text-brandDark dark:text-brandLight"
//               >
//                 {mobileOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
 
//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 z-[90] bg-bgDark pt-[80px] md:hidden overflow-y-auto"
//           >
//             <div className="container pb-8 space-y-2 text-white">
//               {mainNav.map((item) => {
//                 if (item.type === "link") {
//                   return (
//                     <NavLink
//                       key={item.label}
//                       to={item.path}
//                       onClick={() => setMobileOpen(false)}
//                       className="block py-3 text-lg font-semibold border-b border-white/10"
//                     >
//                       {item.label}
//                     </NavLink>
//                   );
//                 }

//                 // For mega menu items - accordion style
//                 const megaData = getMegaData(item.key);
//                 const isExpanded = mobileExpandedMenu === item.label;
                
//                 return (
//                   <div key={item.label} className="border-b border-white/10">
//                     <div className="flex items-center">
//                       <NavLink
//                         to={item.path}
//                         onClick={() => setMobileOpen(false)}
//                         className="flex-1 py-3 text-lg font-semibold text-brandAccent"
//                       >
//                         {item.label}
//                       </NavLink>
//                       <button
//                         onClick={() => setMobileExpandedMenu(isExpanded ? null : item.label)}
//                         className="p-3"
//                       >
//                         <ChevronDown 
//                           size={18} 
//                           className={`transition-transform text-brandAccent ${isExpanded ? 'rotate-180' : ''}`}
//                         />
//                       </button>
//                     </div>
                    
//                     <AnimatePresence>
//                       {isExpanded && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.2 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="pb-4 pl-4 space-y-4">
//                             {megaData.map((section, i) => (
//                               <div key={i}>
//                                 <p className="mb-2 text-xs font-semibold uppercase text-brandAccent/70">
//                                   {section.title}
//                                 </p>
//                                 <ul className="space-y-2">
//                                   {section.items.map((sub, j) => (
//                                     <li key={j}>
//                                       <NavLink
//                                         to={sub.path}
//                                         onClick={() => setMobileOpen(false)}
//                                         className="block text-sm text-white/80 hover:text-white"
//                                       >
//                                         {sub.label}
//                                       </NavLink>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}

//               {/* GET STARTED BUTTON - MOBILE */}
//               <div className="pt-6 mt-6">
//                 <Link
//                   to="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-colors rounded-full shadow-lg bg-brandPrimary dark:bg-brandAccent"
//                 >
//                   <Phone size={18} />
//                   <span>Get Started</span>
//                   <ArrowRight size={16} />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menus from "../../data/menus.json";
import { Menu, X, ChevronDown, Sun, Moon, Phone, ArrowRight } from "lucide-react";
 
const {
  mainNav,
  servicesMegaMenu,
  industriesMegaMenu,
  insightsMegaMenu,
  aboutMegaMenu,
} = menus;
 
/* =======================
   HELPERS
======================= */
const getMegaData = (key) => {
  if (key === "services") return servicesMegaMenu;
  if (key === "industries") return industriesMegaMenu;
  if (key === "insights") return insightsMegaMenu;
  if (key === "about") return aboutMegaMenu;
  return [];
};
 
export default function Header() {
  const location = useLocation();
  const closeRef = useRef(null);
 
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
 
  /* THEME – COLOR ONLY */
  useEffect(() => {
    const t = localStorage.getItem("theme") || "light";
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    setMounted(true);
  }, []);
 
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
 
  /* RESET ON ROUTE CHANGE */
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpandedMenu(null);
  }, [location.pathname]);
 
  if (!mounted) return null;
 
  return (
    <>
      {/* BACKDROP BLUR OVERLAY */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-black/20 dark:bg-black/40 backdrop-blur-xl"
            onMouseEnter={() => {
              if (closeRef.current) clearTimeout(closeRef.current);
              setOpenMenu(null);
            }}
          />
        )}
      </AnimatePresence>
 
      {/* ================= HEADER ================= */}
      <header
        className="fixed top-0 inset-x-0 z-[100]
        bg-surfaceLight dark:bg-surfaceDark
        border-b border-borderLight dark:border-borderDark backdrop-blur shadow-md"
      >
        <div className="container">
          <div className="flex items-center justify-between h-[72px]">
 
            {/* LOGO – SIZE LOCKED */}
            <Link to="/" className="flex items-center">
              <div
                className="w-[160px] h-[42px] flex items-center
                text-brandPrimary dark:text-brandAccent"
              >
                <img
                  src={theme==="dark" ? "/riskman-logo-white.svg" :"/rm.png"}
                  alt="RiskMan"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>
 
            {/* DESKTOP NAV */}
            <nav className="items-center hidden gap-10 md:flex">
              {mainNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className="text-sm font-medium transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
                    >
                      {item.label}
                    </NavLink>
                  );
                }
 
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (closeRef.current) clearTimeout(closeRef.current);
                      setOpenMenu(item.label);
                    }}
                    onMouseLeave={() => {
                      closeRef.current = setTimeout(
                        () => setOpenMenu(null),
                        120
                      );
                    }}
                  >
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <NavLink
                        to={item.path}
                        className="transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
                      >
                        {item.label}
                      </NavLink>
                      <ChevronDown size={14} className="text-brandDark dark:text-brandLight" />
                    </div>
 
                    {/* CENTERED MEGA MENU - FIXED */}
                    <AnimatePresence>
                      {openMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.2 }}
                          className="fixed left-0 right-0 mx-auto mt-6
                            rounded-2xl shadow-xl
                            bg-bgLight dark:bg-bgDark
                            border border-borderLight dark:border-borderDark
                            p-6 backdrop-blur"
                          style={{ 
                            top: '72px',
                            maxWidth: getMegaData(item.key).length === 1 ? '400px' : 
                                      getMegaData(item.key).length === 2 ? '700px' : '920px'
                          }}
                        >
                          <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${getMegaData(item.key).length}, 1fr)` }}>
                            {getMegaData(item.key).map((section, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                              >
                                <p
                                  className="mb-2.5 text-sm font-semibold text-brandPrimary dark:text-brandAccent"
                                >
                                  {section.title}
                                </p>
 
                                <ul className="space-y-1.5">
                                  {section.items.map((sub, j) => (
                                    <li key={j}>
                                      <NavLink
                                        to={sub.path}
                                        className="text-sm transition-colors text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent block py-1"
                                      >
                                        {sub.label}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
 
            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* THEME TOGGLE */}
              <div className="relative group">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 hover:bg-brandPrimary/20 dark:hover:bg-brandAccent/20 hover:scale-110 active:scale-95"
                >
                  {theme === "dark" ? (
                    <Moon size={18} className="text-brandAccent transition-transform duration-300 group-hover:rotate-12" />
                  ) : (
                    <Sun size={18} className="text-brandPrimary transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </button>
                
                {/* ENHANCED TOOLTIP */}
                <div className="absolute right-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none z-50">
                  <div className="relative bg-brandDark dark:bg-brandLight text-white dark:text-brandDark px-4 py-2.5 rounded-xl shadow-2xl border border-white/10 dark:border-brandDark/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2.5 whitespace-nowrap">
                      {theme === "dark" ? (
                        <>
                          <Sun size={14} className="text-yellow-300 dark:text-yellow-600" />
                          <span className="text-sm font-semibold">Switch to Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon size={14} className="text-blue-300 dark:text-blue-600" />
                          <span className="text-sm font-semibold">Switch to Dark Mode</span>
                        </>
                      )}
                    </div>
                    {/* ARROW */}
                    <div className="absolute -top-1.5 right-4 w-3 h-3 bg-brandDark dark:bg-brandLight rotate-45 border-l border-t border-white/10 dark:border-brandDark/10"></div>
                  </div>
                </div>
              </div>

              {/* GET STARTED BUTTON - DESKTOP */}
              <Link
                to="/contact"
                className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all
                bg-brandPrimary dark:bg-brandAccent
                text-white hover:shadow-lg"
              >
                <Phone size={16} />
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
 
              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-brandDark dark:text-brandLight"
              >
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-bgDark pt-[80px] md:hidden overflow-y-auto"
          >
            <div className="container pb-8 space-y-2 text-white">
              {mainNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-lg font-semibold border-b border-white/10"
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                // For mega menu items - accordion style
                const megaData = getMegaData(item.key);
                const isExpanded = mobileExpandedMenu === item.label;
                
                return (
                  <div key={item.label} className="border-b border-white/10">
                    <div className="flex items-center">
                      <NavLink
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 py-3 text-lg font-semibold text-brandAccent"
                      >
                        {item.label}
                      </NavLink>
                      <button
                        onClick={() => setMobileExpandedMenu(isExpanded ? null : item.label)}
                        className="p-3"
                      >
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform text-brandAccent ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-4 space-y-4">
                            {megaData.map((section, i) => (
                              <div key={i}>
                                <p className="mb-2 text-xs font-semibold uppercase text-brandAccent/70">
                                  {section.title}
                                </p>
                                <ul className="space-y-2">
                                  {section.items.map((sub, j) => (
                                    <li key={j}>
                                      <NavLink
                                        to={sub.path}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-sm text-white/80 hover:text-white"
                                      >
                                        {sub.label}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* GET STARTED BUTTON - MOBILE */}
              <div className="pt-6 mt-6">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-colors rounded-full shadow-lg bg-brandPrimary dark:bg-brandAccent"
                >
                  <Phone size={18} />
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
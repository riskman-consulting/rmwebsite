
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import SubMenu from "./SubMenu";

// Your provided data (you can keep it in menus.json and import)
const menus = {
  mainNav: [
    { label: "About", type: "mega", key: "about", path: "/about" },
    { label: "Services", type: "mega", key: "services", path: "/services" },
    { label: "Tech Solutions", type: "link", key: "solutions", path: "/solutions" },
    { label: "Event and Journey", type: "link", key: "events", path: "/events" },
    { label: "Knowledge Hub", type: "link", key: "insights", path: "/insights" },
    { label: "Careers", type: "link", key: "careers", path: "/careers" },
    { label: "Contact US", type: "link", key: "contact", path: "/contact" },
  ],
  aboutMegaMenu: [
    {
      items: [
        { label: "Co-founding Partners", path: "/about#co-founders" },
        { label: "Alliance Partners", path: "/about#alliance-partners" },
        { label: "Service Leaders", path: "/about#service-leaders" },
        { label: "RiskMan Team", path: "/about#riskman-teams" },
      ],
    },
  ],
  servicesMegaMenu: [
    {
      title: "ENTERPRISE SERVICES",
      items: [
        {
          label: "Risk Advisory",
          path: "/services/risk-advisory",
          submenus: [
            { id: "rbia", title: "RBIA" },
            { id: "erm", title: "TPRM" },
            { id: "sox-icofr-ifc", title: "SOX / ICOFR / IFC" },
            { id: "csa", title: "CSA" },
            { id: "concurrent-audits", title: "Concurrent Audits" },
            { id: "formulation-of-policies-and-sops", title: "Formulation of Policies and SOPs" },
            { id: "risk-frameworks", title: "Risk Frameworks" },
          ],
        },
        {
          label: "Digital Transformation",
          submenus: [
            { label: "Strategic PMO", path: "/services/digital-transformation/strategic-pmo" },
            { label: "Implementation", path: "/services/digital-transformation/implementation" },
            { label: "Support Services", path: "/services/digital-transformation/support-services" },
          ],
        },
        { label: "ESG Services", path: "/services/esg-services" },
        { label: "Financial Advisory", path: "/services/financial-advisory" },
        { label: "AI & Technology - AI RMF by NIST", path: "/services/ai-and-technology" },
        { label: "Forensic and Investigation", path: "/services/forensic-investigation" },
      ],
    },
    {
      title: "IT RISK MANAGEMENT",
      items: [
        {
          label: "SOC",
          path: "/services/soc-services",
          submenus: [
            { label: "SOC-1", path: "/services/soc/soc-1" },
            { label: "SOC-2", path: "/services/soc/soc-2" },
            { label: "SOC-3", path: "/services/soc/soc-3" },
          ],
        },
        {
          label: "ISO and TISAX",
          path: "/services/iso-certifications",
          submenus: [
            { label: "ISO-27001", path: "/services/iso/iso-27001" },
            { label: "ISO-22301", path: "/services/iso/iso-22301" },
            { label: "ISO-42001", path: "/services/iso/iso-42001" },
            { label: "ISO-31000", path: "/services/iso/iso-31000" },
            { label: "TISAX", path: "/services/iso/tisax" },
          ],
        },
        { label: "PCI DSS", path: "/services/pci-dss-compliance" },
        { label: "ITGC and ITAC", path: "/services/itgc-itac" },
        { label: "BCP and DR", path: "/services/bcp-dr" },
        { label: "Cyber Security", path: "/services/cybersecurity" },
        {
          label: "Data Privacy & Protection",
          path: "/services/data-privacy",
          submenus: [
            { label: "DPDP", path: "/services/data-privacy/dpdp" },
            { label: "GDPR", path: "/services/data-privacy/gdpr" },
            { label: "Other Regulatory compliances", path: "/services/data-privacy/other" },
          ],
        },
      ],
    },
    {
      title: "CSA",
      items: [{ label: "US Assurance Support Services", path: "/services/us-assurance-support-services" }],
    },
  ],
  industriesMegaMenu: [
    {
      title: "Core Industries",
      items: [
        { label: "Banking & Insurance", path: "/industries/banking-insurance" },
        { label: "Healthcare", path: "/industries/healthcare" },
        { label: "Energy & Utilities", path: "/industries/energy-utilities" },
        { label: "Manufacturing", path: "/industries/manufacturing" },
        { label: "Travel & Logistics", path: "/industries/travel-logistics" },
      ],
    },
    {
      title: "Technology & Digital",
      items: [
        { label: "Media & Communication", path: "/industries/media-communication" },
        { label: "Education & EdTech", path: "/industries/education-edtech" },
        { label: "E-Commerce", path: "/industries/ecommerce" },
      ],
    },
    {
      title: "Specialized Sectors",
      items: [
        { label: "Hospitality", path: "/industries/hospitality" },
        { label: "Automobiles", path: "/industries/automobiles" },
        { label: "Retail Consumer", path: "/industries/retail-consumer" },
      ],
    },
  ],
  // insightsMegaMenu is small → can be simple link or small menu if needed
};

export default function Header() {
  const timeoutRef = useRef(null);
  const menuRefs = useRef({});

  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNested, setActiveNested] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const getMegaData = (key) => {
    const map = {
      about: menus.aboutMegaMenu,
      services: menus.servicesMegaMenu,
      industries: menus.industriesMegaMenu,
    };
    return map[key] || [];
  };

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
      setActiveNested(null);
    }, 300);
  };

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setActiveNested(null);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  if (!mounted) return <div className="h-[72px] w-full bg-white dark:bg-[#001A33]" />;

  const activeItem = menus.mainNav.find((item) => item.label === openMenu);
  const currentMega = activeItem ? getMegaData(activeItem.key) : [];

  const isMenuOpen = !!openMenu && activeItem?.type === "mega";

  return (
    <>
      <header
        className={`
          fixed top-0 inset-x-0 z-[999]
          bg-white/92 dark:bg-[#001A33]/92
          border-b border-black/6 dark:border-white/9
          backdrop-blur-xl
          transition-all duration-400
          ${isMenuOpen ? "shadow-xl" : "shadow-sm"}
        `}
      >
        <div className="max-w-[1480px] mx-auto px-5 lg:px-8">
          <div className="h-[72px] flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src={theme === "dark" ? "/riskman-logo-white.svg" : "/rm.png"}
                alt="RiskMan"
                className="h-11 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <Navbar
              mainNav={menus.mainNav}
              menuRefs={menuRefs}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              openMenu={openMenu}
            />

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-black/5 dark:bg-white/6 hover:bg-black/10 dark:hover:bg-white/10 transition"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <a
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full bg-[#004080] dark:bg-[#FFC000] text-white dark:text-[#001122] hover:brightness-110 transition"
              >
                Get Started <ArrowRight size={16} />
              </a>

              <button
                className="lg:hidden p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/6"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key={openMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="
                absolute left-0 right-0 top-full
                bg-white/95 dark:bg-[#001A33]/95
                backdrop-blur-xl
                border-t border-black/5 dark:border-white/8
                shadow-2xl z-[999]
              "
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-[1480px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
                <SubMenu
                  isOpen
                  megaData={currentMega}
                  activeNestedSubmenu={activeNested}
                  setActiveNestedSubmenu={setActiveNested}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Blur overlay for page content when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              fixed inset-0 top-[72px] z-[998]
              bg-black/20 dark:bg-black/40
              backdrop-blur-sm lg:backdrop-blur-md
              pointer-events-auto
            "
            onClick={() => {
              setOpenMenu(null);
              setActiveNested(null);
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu (placeholder) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white dark:bg-[#001A44] z-[1000] lg:hidden shadow-2xl overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={28} />
                </button>
              </div>
              {/* Mobile nav items would go here */}
              <p className="text-gray-500 dark:text-gray-400">
                Mobile navigation – implement as needed
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, ChevronDown, ChevronRight, Sun, Moon, ArrowRight } from 'lucide-react';
// import { useTheme } from '../../context/ThemeContext';

// const navData = {
//   "mainNav": [
//     { "label": "About", "type": "mega", "key": "about", "path": "/about" },
//     { "label": "Services", "type": "mega", "key": "services", "path": "/services" },
//     { "label": "Tech Solutions", "type": "link", "key": "solutions", "path": "/solutions" },
//     { "label": "Event & Journey", "type": "link", "key": "events", "path": "/events" },
//     { "label": "Knowledge Hub", "type": "link", "key": "insights", "path": "/insights" },
//     { "label": "Careers", "type": "link", "key": "careers", "path": "/careers" },
//     { "label": "Governance", "type": "link", "key": "governance", "path": "/governance" }
//   ],
//   "aboutMegaMenu": [
//     {
//       "items": [
//         { "label": "Co-founding Partners", "path": "/about#co-founders" },
//         { "label": "Alliance Partners", "path": "/about#alliance-partners" },
//         { "label": "Service Leaders", "path": "/about#service-leaders" },
//         { "label": "RiskMan Team", "path": "/about#riskman-teams" }
//       ]
//     }
//   ],
//   "servicesMegaMenu": [
//     {
//       "title": "ENTERPRISE SERVICES",
//       "items": [
//         {
//           "label": "Risk Advisory",
//           "path": "/services/risk-advisory",
//           "submenus": [
//             { "id": "rbia", "title": "RBIA" },
//             { "id": "erm", "title": "TPRM" },
//             { "id": "sox-icofr-ifc", "title": "SOX/ ICOFR/ IFC" },
//             { "id": "csa", "title": "CSA" },
//             { "id": "concurrent-audits", "title": "Concurrent Audits" },
//             { "id": "formulation-of-policies-and-sops", "title": "Formulation of Policies and SOPs" },
//             { "id": "risk-frameworks", "title": "Risk Frameworks" }
//           ]
//         },
//         {
//           "label": "Digital Transformation",
//           "submenus": [
//             { "label": "Strategic PMO", "path": "strategic-pmo" },
//             { "label": "Implementation", "path": "implementation" },
//             { "label": "Support Services", "path": "support-services" }
//           ]
//         },
//         { "label": "ESG Services", "path": "esg-services" },
//         { "label": "Financial Advisory", "path": "/services/financial-advisory" },
//         { "label": "AI & Technology - AI RMF by NIST", "path": "ai-and-technology" },
//         { "label": "Forensic and Investigation", "path": "/services/forensic-investigation" }
//       ]
//     },
//     {
//       "title": "IT RISK MANAGEMENT",
//       "items": [
//         {
//           "label": "SOC",
//           "path": "/services/soc-services",
//           "submenus": [
//             { "label": "SOC-1", "path": "soc-1" },
//             { "label": "SOC-2", "path": "soc-2" },
//             { "label": "SOC-3", "path": "soc-3" }
//           ]
//         },
//         {
//           "label": "ISO and TISAX",
//           "path": "/services/iso-certifications",
//           "submenus": [
//             { "label": "ISO-27001", "path": "iso-27001" },
//             { "label": "ISO-22301", "path": "iso-22301" },
//             { "label": "ISO-42001", "path": "iso-42001" },
//             { "label": "ISO-31000", "path": "iso-31000" },
//             { "label": "TISAX", "path": "TISAX" }
//           ]
//         },
//         { "label": "PCI DSS", "path": "/services/pci-dss-compliance" },
//         { "label": "ITGC and ITAC", "path": "/services/itgc-itac" },
//         { "label": "BCP and DR", "path": "/services/bcp-dr" },
//         { "label": "Cyber Security", "path": "/services/cybersecurity" },
//         {
//           "label": "Data Privacy & Protection",
//           "path": "/services/data-privacy",
//           "submenus": [
//             { "label": "DPDP", "path": "/dpdp" },
//             { "label": "GDPR", "path": "gspr" },
//             { "label": "Other Regulatory compliances", "path": "/other-regulatory-compliances" }
//           ]
//         }
//       ]
//     },
//     {
//       "title": "CSA",
//       "items": [
//         { "label": "US Assurance Support Services", "path": "us-assusrance-support-services" }
//       ]
//     }
//   ]
// };

// const Header = () => {
//   const { theme, toggleTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [activeMega, setActiveMega] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
//   const [mobileExpandedItems, setMobileExpandedItems] = useState({});
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const getMegaMenuContent = (key) => {
//     if (key === 'about') return navData.aboutMegaMenu;
//     if (key === 'services') return navData.servicesMegaMenu;
//     return null;
//   };

//   const handleMouseEnter = (key) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setActiveMega(key);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setActiveMega(null);
//     }, 300);
//   };

//   const toggleMobileSubItem = (itemLabel) => {
//     setMobileExpandedItems(prev => ({
//       ...prev,
//       [itemLabel]: !prev[itemLabel]
//     }));
//   };

//   if (!mounted) return null;

//   const isMenuOpen = !!activeMega;

//   return (
//     <div className="font-sans antialiased">
//       {/* Desktop Navigation */}
//       <header
//         className={`
//           fixed top-0 inset-x-0 z-[999] h-[72px]
//           bg-surfaceLight dark:bg-surfaceDark
//           border-b border-brandNavy/10 dark:border-brandAccent/10
//           backdrop-blur-xl transition-all duration-300
//           ${isMenuOpen ? 'shadow-2xl' : 'shadow-sm'}
//         `}
//       >
//         <div className="max-w-[1480px] mx-auto px-5 lg:px-8 h-full">
//           <div className="flex items-center justify-between h-full">
//             {/* Logo */}
//             <a href="/" className="flex-shrink-0 flex items-center h-16 w-48">
//               <div className="relative w-full h-full flex items-center justify-start">
//                 <img
//                   className="h-10 w-auto object-contain block dark:hidden"
//                   src="/rm.png"
//                   alt="Riskman"
//                 />
//                 <img
//                   className="h-10 w-28 object-contain hidden dark:block"
//                   src="/riskman-logo-white.svg"
//                   alt="Riskman"
//                 />
//               </div>
//             </a>

//             {/* Desktop Nav Items */}
//             <nav className="hidden lg:flex items-center gap-1">
//               {navData.mainNav.map((item) => (
//                 <div
//                   key={item.key}
//                   className="relative"
//                   onMouseEnter={() => item.type === 'mega' && handleMouseEnter(item.key)}
//                 >
//                   <a
//                     href={item.path}
//                     className={`
//                       px-4 py-2 text-sm font-medium rounded-lg transition-all
//                       text-brandNavy dark:text-brandLight 
//                       hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10
//                       ${activeMega === item.key ? 'bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent' : ''}
//                     `}
//                   >
//                     {item.label}
//                   </a>
//                 </div>
//               ))}
//             </nav>

//             {/* Right Actions */}
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={toggleTheme}
//                 className="p-2.5 rounded-xl bg-brandNavy/5 dark:bg-brandAccent/10 text-brandNavy dark:text-brandAccent hover:scale-105 transition"
//                 aria-label="Toggle theme"
//               >
//                 {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
//               </button>

//               <a
//                 href="/contact"
//                 className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition bg-brandPrimary dark:bg-brandAccent text-white dark:text-brandDark hover:brightness-110"
//               >
//                 Get Started <ArrowRight size={16} />
//               </a>

//               <button
//                 className="lg:hidden p-2.5 rounded-xl text-brandNavy dark:text-brandLight hover:bg-brandNavy/5 dark:hover:bg-brandAccent/10"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mega Menu Dropdown */}
//         {activeMega && (
//           <div
//             className="absolute left-0 right-0 top-full z-[999] bg-surfaceLight dark:bg-surfaceDark border-t border-brandNavy/10 dark:border-brandAccent/10 shadow-2xl"
//             onMouseEnter={() => {
//               if (timeoutRef.current) clearTimeout(timeoutRef.current);
//             }}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="max-w-[1480px] mx-auto px-8 py-12">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//                 {getMegaMenuContent(activeMega)?.map((section, idx) => (
//                   <div key={idx} className="space-y-6">
//                     {section.title && (
//                       <h3 className="text-xs font-bold uppercase tracking-widest text-brandPrimary dark:text-brandAccent">
//                         {section.title}
//                       </h3>
//                     )}
//                     <ul className="space-y-4">
//                       {section.items.map((item, itemIdx) => (
//                         <li key={itemIdx}>
//                           <a
//                             href={item.path}
//                             className="text-sm font-medium text-brandNavy dark:text-gray-300 hover:text-brandPrimary dark:hover:text-brandAccent transition-colors block"
//                           >
//                             {item.label}
//                           </a>
//                           {item.submenus && (
//                             <ul className="mt-3 ml-4 border-l border-brandNavy/10 dark:border-brandAccent/20 pl-4 space-y-2">
//                               {item.submenus.map((sub, subIdx) => (
//                                 <li key={subIdx}>
//                                   <a
//                                     href={sub.path || '#'}
//                                     className="text-xs text-gray-500 dark:text-gray-400 hover:text-brandPrimary dark:hover:text-brandAccent transition-colors block"
//                                   >
//                                     {sub.label || sub.title}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Backdrop */}
//       {activeMega && (
//         <div
//           className="fixed inset-0 top-[72px] z-[998] bg-brandDark/40 dark:bg-black/60 backdrop-blur-sm"
//           onClick={() => setActiveMega(null)}
//         />
//       )}

//       {/* Mobile Menu Side Panel */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-[1000] lg:hidden">
//           <div className="absolute inset-0 bg-brandDark/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
//           <div className="absolute inset-y-0 right-0 w-4/5 max-w-sm bg-surfaceLight dark:bg-surfaceDark shadow-2xl overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-xl font-heading font-bold text-brandNavy dark:text-white">Menu</h2>
//                 <button onClick={() => setMobileMenuOpen(false)}>
//                   <X size={28} className="text-brandNavy dark:text-white" />
//                 </button>
//               </div>

//               <div className="space-y-1">
//                 {navData.mainNav.map((item) => (
//                   <div key={item.key}>
//                     {item.type === 'mega' ? (
//                       <div className="py-1">
//                         <button
//                           onClick={() => setMobileActiveMenu(mobileActiveMenu === item.key ? null : item.key)}
//                           className="w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium text-brandNavy dark:text-gray-300 hover:bg-brandNavy/5 dark:hover:bg-brandAccent/10"
//                         >
//                           <span>{item.label}</span>
//                           <ChevronDown size={16} className={`transition-transform ${mobileActiveMenu === item.key ? 'rotate-180' : ''}`} />
//                         </button>

//                         {mobileActiveMenu === item.key && (
//                           <div className="ml-4 mt-2 space-y-4 border-l-2 border-brandPrimary/10 dark:border-brandAccent/10 pl-2">
//                             {getMegaMenuContent(item.key)?.map((section, idx) => (
//                               <div key={idx}>
//                                 {section.title && (
//                                   <h3 className="text-[10px] font-bold uppercase tracking-tighter text-gray-400 px-3 mb-2">
//                                     {section.title}
//                                   </h3>
//                                 )}
//                                 {section.items.map((subItem, subIdx) => (
//                                   <div key={subIdx}>
//                                     <div className="flex items-center justify-between">
//                                       <a
//                                         href={subItem.path}
//                                         className="flex-1 text-sm p-3 text-brandNavy dark:text-gray-300 hover:text-brandPrimary dark:hover:text-brandAccent"
//                                       >
//                                         {subItem.label}
//                                       </a>
//                                       {subItem.submenus && (
//                                         <button
//                                           onClick={() => toggleMobileSubItem(subItem.label)}
//                                           className="p-3 text-gray-400"
//                                         >
//                                           <ChevronRight size={14} className={`transition-transform ${mobileExpandedItems[subItem.label] ? 'rotate-90' : ''}`} />
//                                         </button>
//                                       )}
//                                     </div>
//                                     {subItem.submenus && mobileExpandedItems[subItem.label] && (
//                                       <div className="ml-6 space-y-1 bg-brandNavy/5 dark:bg-white/5 rounded-lg p-2">
//                                         {subItem.submenus.map((sub, sIdx) => (
//                                           <a
//                                             key={sIdx}
//                                             href={sub.path || '#'}
//                                             className="block text-xs p-2 text-gray-600 dark:text-gray-400"
//                                           >
//                                             {sub.label || sub.title}
//                                           </a>
//                                         ))}
//                                       </div>
//                                     )}
//                                   </div>
//                                 ))}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <a
//                         href={item.path}
//                         className="block p-3 text-sm font-medium text-brandNavy dark:text-gray-300 rounded-lg hover:bg-brandNavy/5 dark:hover:bg-brandAccent/10"
//                       >
//                         {item.label}
//                       </a>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


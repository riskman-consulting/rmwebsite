import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon, Phone, ArrowRight, Link } from "lucide-react";

// Mock menu data
const menus = {
  mainNav: [
    { label: "About", type: "mega", key: "about", path: "/about" },
    { label: "Services", type: "mega", key: "services", path: "/services" },
    { label: "Industries", type: "mega", key: "industries", path: "/industries" },
    { label: "Tech Solutions", type: "link", key: "solutions", path: "/solutions" },
    { label: "Content Hub", type: "link", key: "insights", path: "/insights" },
    { label: "Event", type: "link", key: "events", path: "/events" },
    { label: "Careers", type: "link", key: "careers", path: "/careers" }
  ],
  aboutMegaMenu: [{
    items: [
      { label: "Co-founding Partners", path: "/about#co-founders" },
      { label: "Alliance Partners", path: "/about#alliance-partners" },
      { label: "Service Leaders", path: "/about#service-leaders" },
      { label: "RiskMan Team", path: "/about#riskman-teams" }
    ]
  }],
  servicesMegaMenu: [
    {
      title: "ENTERPRISE SERVICES",
      items: [
        { label: "Risk Advisory", path: "/services/risk-advisory" },
        { label: "Consulting", path: "/services/consulting" },
        { label: "Outsourcing and Training", path: "/services/outsourcing-training" },
        { label: "Sustainability", path: "/services/sustainability" },
        { label: "Financial Advisory", path: "/services/financial-advisory" },
        { label: "Forensic and Investigation", path: "/services/forensic-investigation" }
      ]
    },
    {
      title: "IT RISK MANAGEMENT",
      items: [
        { label: "SOC", path: "/services/soc-services" },
        { label: "ISO Certifications", path: "/services/iso-certifications" },
        { label: "PCI DSS", path: "/services/pci-dss-compliance" },
        { label: "ITGC and ITAC", path: "/services/itgc-itac" },
        { label: "IT Risk Management", path: "/services/it-risk-management" },
        { label: "TPRM", path: "/services/tprm" },
        { label: "BCP and DR", path: "/services/bcp-dr" },
        { label: "Cyber Security", path: "/services/cybersecurity" },
        { label: "Data Privacy & Protection", path: "/services/data-privacy" }
      ]
    }
  ],
  industriesMegaMenu: [
    {
      title: "Core Industries",
      items: [
        { label: "Banking & Insurance", path: "/industries/banking-insurance" },
        { label: "Healthcare", path: "/industries/healthcare" },
        { label: "Energy & Utilities", path: "/industries/energy-utilities" },
        { label: "Manufacturing", path: "/industries/manufacturing" },
        { label: "Travel & Logistics", path: "/industries/travel-logistics" }
      ]
    },
    {
      title: "Technology & Digital",
      items: [
        { label: "Media & Communication", path: "/industries/media-communication" },
        { label: "Education & EdTech", path: "/industries/education-edtech" },
        { label: "E-Commerce", path: "/industries/ecommerce" },
        { label: "IT Consulting", path: "/industries/it-consulting" }
      ]
    },
    {
      title: "Specialized Sectors",
      items: [
        { label: "Hospitality", path: "/industries/hospitality" },
        { label: "Automobiles", path: "/industries/automobiles" },
        { label: "Retail Consumer", path: "/industries/retail-consumer" }
      ]
    }
  ]
};

const { mainNav, aboutMegaMenu, servicesMegaMenu, industriesMegaMenu } = menus;

const getMegaData = (key) => {
  if (key === "services") return servicesMegaMenu;
  if (key === "industries") return industriesMegaMenu;
  if (key === "about") return aboutMegaMenu;
  return [];
};

export default function Header() {
  const closeRef = useRef(null);
  const menuRefs = useRef({});

  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ left: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);

  // Initialize theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
    setMounted(true);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleMouseEnter = (itemLabel) => {
    if (closeRef.current) clearTimeout(closeRef.current);
    
    const menuElement = menuRefs.current[itemLabel];
    if (menuElement) {
      const rect = menuElement.getBoundingClientRect();
      setMenuPosition({ left: rect.left });
    }
    
    setOpenMenu(itemLabel);
  };

  const handleMouseLeave = () => {
    closeRef.current = setTimeout(() => setOpenMenu(null), 120);
  };

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

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-[100] bg-white dark:bg-[#001A33] border-b border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)] backdrop-blur shadow-md">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[72px] gap-8 lg:gap-12">

            {/* LOGO - Switches based on theme */}
            {/* <a href="/" className="flex items-center flex-shrink-0">
              <div className="w-[160px] h-[42px] flex items-center text-[#004080] dark:text-[#FFC000]">
                {theme === "dark" ? (
                  <img src="/riskman-logo-white.svg" alt="RiskMan" className="object-contain w-full h-full" />
                  // Dark theme logo - replace with: <img src="/riskman-logo-white.svg" alt="RiskMan" className="object-contain w-full h-full" />
                  // <svg viewBox="0 0 160 42" className="w-full h-full">
                  //   <text x="10" y="30" fill="#FFC000" fontSize="22" fontWeight="bold">RiskMan</text>
                  // </svg>
                ) : (
                  // Light theme logo - replace with: <img src="/rm.png" alt="RiskMan" className="object-contain w-full h-full" />
                  <img src="/rm.png" alt="RiskMan" className="object-contain w-full h-full" />
                  // <svg viewBox="0 0 160 42" className="w-full h-full">
                  //   <text x="10" y="30" fill="#004080" fontSize="22" fontWeight="bold">RiskMan</text>
                  // </svg>
                )}
              </div>
            </a> */}

            <a href="/" className="flex items-center flex-shrink-0">
              <div className="w-[180px] h-[50px] flex items-center justify-center">
                {theme === "dark" ? (
                  // Dark theme logo
                  <img 
                    src="/riskman-logo-white.svg" 
                    alt="RiskMan" 
                    className="w-full h-full object-contain"
                    style={{ maxWidth: '180px', maxHeight: '50px' }}
                  />
                ) : (
                  // Light theme logo
                  <img 
                    src="/rm.png" 
                    alt="RiskMan" 
                    className="w-full h-full object-contain"
                    style={{ maxWidth: '180px', maxHeight: '50px' }}
                  />
                )}
              </div>
            </a>

            {/* DESKTOP NAV - Centered with flex-1 */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8">
              {mainNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <a
                      key={item.label}
                      href={item.path}
                      className="text-sm font-medium transition-colors text-[#001F3F] dark:text-[#F5F5F5] hover:text-[#004080] dark:hover:text-[#FFC000] whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    ref={(el) => (menuRefs.current[item.label] = el)}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <a
                        href={item.path}
                        className="transition-colors text-[#001F3F] dark:text-[#F5F5F5] hover:text-[#004080] dark:hover:text-[#FFC000] whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                      <ChevronDown size={14} className="text-[#001F3F] dark:text-[#F5F5F5]" />
                    </div>

                    {/* MEGA MENU - Positioned relative to menu item */}
                    <AnimatePresence>
                      {openMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.2 }}
                          className="fixed mt-6 rounded-2xl shadow-xl bg-[#FAFAFA] dark:bg-[#001122] border border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)] p-6 backdrop-blur"
                          style={{ 
                            top: '72px',
                            left: `${menuPosition.left}px`,
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
                                {section.title && (
                                  <p className="mb-2.5 text-sm font-semibold text-[#004080] dark:text-[#FFC000]">
                                    {section.title}
                                  </p>
                                )}

                                <ul className="space-y-1.5">
                                  {section.items.map((sub, j) => (
                                    <li key={j}>
                                      <a
                                        href={sub.path}
                                        className="text-sm transition-colors text-[#001F3F] dark:text-[#F5F5F5] hover:text-[#004080] dark:hover:text-[#FFC000] block py-1"
                                      >
                                        {sub.label}
                                      </a>
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

            {/* RIGHT SIDE - Equal spacing */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* THEME TOGGLE */}
              <div className="relative group">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full hover:scale-110 active:scale-95"
                  style={{
                    backgroundColor: theme === "dark" ? "rgba(255, 192, 0, 0.1)" : "rgba(0, 64, 128, 0.1)"
                  }}
                >
                  {theme === "dark" ? (
                    <Moon size={18} className="transition-transform duration-300 group-hover:rotate-12" style={{ color: "#FFC000" }} />
                  ) : (
                    <Sun size={18} className="transition-transform duration-300 group-hover:rotate-180" style={{ color: "#004080" }} />
                  )}
                </button>
                
                {/* TOOLTIP */}
                <div className="absolute right-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none z-50">
                  <div className="relative px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-sm"
                    style={{
                      backgroundColor: theme === "dark" ? "#F5F5F5" : "#001F3F",
                      color: theme === "dark" ? "#001F3F" : "white",
                      border: `1px solid ${theme === "dark" ? "rgba(0, 31, 63, 0.1)" : "rgba(255, 255, 255, 0.1)"}`
                    }}
                  >
                    <div className="flex items-center gap-2.5 whitespace-nowrap">
                      {theme === "dark" ? (
                        <>
                          <Sun size={14} style={{ color: "#FACC15" }} />
                          <span className="text-sm font-semibold">Switch to Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon size={14} style={{ color: "#93C5FD" }} />
                          <span className="text-sm font-semibold">Switch to Dark Mode</span>
                        </>
                      )}
                    </div>
                    <div className="absolute -top-1.5 right-4 w-3 h-3 rotate-45"
                      style={{
                        backgroundColor: theme === "dark" ? "#F5F5F5" : "#001F3F",
                        borderLeft: `1px solid ${theme === "dark" ? "rgba(0, 31, 63, 0.1)" : "rgba(255, 255, 255, 0.1)"}`,
                        borderTop: `1px solid ${theme === "dark" ? "rgba(0, 31, 63, 0.1)" : "rgba(255, 255, 255, 0.1)"}`
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* GET STARTED BUTTON - DESKTOP */}
              <a
                href="/contact"
                className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all text-white hover:shadow-lg"
                style={{
                  backgroundColor: theme === "dark" ? "#FFC000" : "#004080"
                }}
              >
                <Phone size={16} />
                <span>Get Started</span>
                <ArrowRight size={16} />
              </a>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden"
                style={{ color: theme === "dark" ? "#F5F5F5" : "#001F3F" }}
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
            className="fixed inset-0 z-[90] pt-[80px] md:hidden overflow-y-auto"
            style={{ backgroundColor: "#001122" }}
          >
            <div className="max-w-[1280px] mx-auto px-5 pb-8 space-y-2 text-white">
              {mainNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <a
                      key={item.label}
                      href={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-lg font-semibold border-b border-white/10"
                    >
                      {item.label}
                    </a>
                  );
                }

                const megaData = getMegaData(item.key);
                const isExpanded = mobileExpandedMenu === item.label;
                
                return (
                  <div key={item.label} className="border-b border-white/10">
                    <div className="flex items-center">
                      <a
                        href={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 py-3 text-lg font-semibold"
                        style={{ color: "#FFC000" }}
                      >
                        {item.label}
                      </a>
                      <button
                        onClick={() => setMobileExpandedMenu(isExpanded ? null : item.label)}
                        className="p-3"
                      >
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          style={{ color: "#FFC000" }}
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
                                {section.title && (
                                  <p className="mb-2 text-xs font-semibold uppercase" style={{ color: "rgba(255, 192, 0, 0.7)" }}>
                                    {section.title}
                                  </p>
                                )}
                                <ul className="space-y-2">
                                  {section.items.map((sub, j) => (
                                    <li key={j}>
                                      <a
                                        href={sub.path}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-sm text-white/80 hover:text-white"
                                      >
                                        {sub.label}
                                      </a>
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
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-colors rounded-full shadow-lg"
                  style={{
                    backgroundColor: theme === "dark" ? "#FFC000" : "#004080"
                  }}
                >
                  <Phone size={18} />
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
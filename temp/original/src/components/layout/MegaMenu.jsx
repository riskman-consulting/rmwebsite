import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Globe2,
  Building2,
  Mail,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
 
/* Flyout Animation for Level 3 submenus */
const flyoutVariants = {
  initial: { opacity: 0, x: -10, scale: 0.95 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    x: -5,
    scale: 0.95,
    transition: { duration: 0.1 }
  },
};
 
const getIcon = (title, parentLabel) => {
  const t = title.toLowerCase();
  const p = parentLabel.toLowerCase();
  if (p.includes("services")) {
    if (t.includes("enterprise") || t.includes("risk")) return Shield;
    return Globe2;
  }
  if (p.includes("industries")) return Building2;
  return Shield;
};
 
export default function MegaMenu({
  sections = [],
  parentLabel = "",
  onNavigate,
  align = "center",
  ctaLink,
  onMouseEnter,
  onMouseLeave,
}) {
  // Track which Level 2 item is currently hovered to show its Level 3 submenus
  const [activeSubMenu, setActiveSubMenu] = useState(null);
 
  const alignmentClass =
    align === "left" ? "left-0" : align === "right" ? "right-0" : "left-1/2 -translate-x-1/2";
 
  const ctaHref = ctaLink || (parentLabel.toLowerCase().includes("service") ? "/contact" : "/about");
 
  return (
    <motion.div
      key="mega"
      className={`fixed ${alignmentClass} mt-2 max-w-[95vw] z-50`}
      style={{
        width: sections.length === 1 ? "380px" : sections.length === 2 ? "700px" : "1000px",
        top: "72px",
      }}
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.96 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        onMouseLeave();
        setActiveSubMenu(null);
      }}
    >
      <div className="p-6 shadow-2xl rounded-2xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark backdrop-blur-xl">
        <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${sections.length}, 1fr)` }}>
          {sections.map((section) => {
            const Icon = getIcon(section.title, parentLabel);
 
            return (
              <div key={section.title} className="flex flex-col">
                {/* Column Header */}
                <div className="flex gap-3 p-4 items-center border-b border-borderLight dark:border-borderDark mb-2">
                  <div className="flex items-center justify-center w-9 h-9 shadow-md rounded-xl bg-brandNavy dark:bg-brandGold">
                    <Icon className="w-5 h-5 text-white dark:text-brandDark" />
                  </div>
                  <h4 className="text-sm font-bold text-brandDark dark:text-white uppercase tracking-wider">
                    {section.title}
                  </h4>
                </div>
 
                {/* Level 2 Items */}
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    // Normalize data because of typos in your JSON (lable vs label)
                    const label = item.label || item.lable;
                    const hasSubmenu = item.submenus && item.submenus.length > 0;
 
                    return (
                      <li
                        key={label}
                        className="relative"
                        onMouseEnter={() => hasSubmenu ? setActiveSubMenu(label) : null}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <Link
                          to={item.path}
                          onClick={onNavigate}
                          className={`flex items-center justify-between gap-3 px-3 py-2.5 text-sm transition-all rounded-lg
                            ${activeSubMenu === label
                              ? "bg-brandNavy/5 dark:bg-brandGold/10 text-brandNavy dark:text-brandGold font-semibold shadow-sm"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"}`}
                        >
                          <span>{label}</span>
                          {hasSubmenu ? (
                            <ChevronRight size={14} className={activeSubMenu === label ? "opacity-100 translate-x-0.5" : "opacity-40"} />
                          ) : (
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
                          )}
                        </Link>
 
                        {/* --- LEVEL 3: Nested Dropdown --- */}
                        <AnimatePresence>
                          {activeSubMenu === label && hasSubmenu && (
                            <motion.div
                              variants={flyoutVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className={`absolute top-0 w-64 bg-white dark:bg-[#00254d] border border-borderLight dark:border-brandGold/20 rounded-xl shadow-2xl p-3 z-[60]
                                ${align === "right" ? "right-full mr-4" : "left-full ml-4"}`}
                              onMouseEnter={() => setActiveSubMenu(label)}
                              onMouseLeave={() => setActiveSubMenu(null)}
                            >
                              <p className="text-[10px] font-black text-brandGold uppercase mb-3 px-2 tracking-widest border-b border-borderLight dark:border-white/10 pb-2">
                                Specialized Areas
                              </p>
                              <div className="space-y-1">
                                {item.submenus.map((sub) => (
                                  <Link
                                    key={sub.id || sub.label || sub.lable}
                                    to={`${item.path}/${sub.id || sub.path}`}
                                    onClick={onNavigate}
                                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-300 hover:bg-brandNavy/5 dark:hover:bg-brandGold/5 hover:text-brandNavy dark:hover:text-brandGold rounded-md transition-all group/sub"
                                  >
                                    {sub.title || sub.label || sub.lable}
                                    <div className="w-1 h-1 rounded-full bg-brandGold opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
 
        {/* Footer CTA */}
        <div className="flex items-center justify-between pt-5 mt-5 border-t border-borderLight dark:border-borderDark">
          <p className="text-[11px] text-gray-400 font-medium tracking-tight">RiskMan Governance & Compliance Suite v2.1</p>
          <Link
            to={ctaHref}
            onClick={onNavigate}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black shadow-lg transition-all bg-brandNavy dark:bg-brandGold text-white dark:text-brandDark hover:scale-105 active:scale-95"
          >
            <Mail size={13} />
            Book a Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
 
 
import React, { useState } from 'react';
import { NAVIGATION_DATA } from './constants';
 
export const MegaMenu = ({ menuKey }) => {
  const [hoveredPath, setHoveredPath] = useState(null);
 
  let sections=[]
 
  switch (menuKey) {
    case 'services': sections = NAVIGATION_DATA.servicesMegaMenu; break;
    case 'about': sections = NAVIGATION_DATA.aboutMegaMenu; break;
    case 'industries': sections = NAVIGATION_DATA.industriesMegaMenu; break;
    case 'governance': sections = NAVIGATION_DATA.governanceMegaMenu; break;
    case 'events': sections = NAVIGATION_DATA.eventsMegaMenu; break;
    default: return null;
  }
 
  const isServices = menuKey === 'services';
  const isAnyItemHovered = hoveredPath !== null;
 
  return (
    <div className="bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-12 p-10 relative">
       
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col space-y-6 transition-all duration-500 ${
              isAnyItemHovered && !section.items.some(i => i.path === hoveredPath)
                ? 'opacity-30 blur-[2px] grayscale'
                : 'opacity-100 blur-0'
            }`}
          >
            {section.title && (
              <h3 className="text-xs font-black uppercase tracking-widest text-blue-600/80 mb-2">
                {section.title}
              </h3>
            )}
           
            <div className="space-y-4">
              {section.items.map((item, itemIdx) => {
                const isThisHovered = hoveredPath === item.path;
                const hasSubmenus = item.submenus && item.submenus.length > 0;
 
                return (
                  <div
                    key={itemIdx}
                    className={`group/item transition-all duration-300 ${
                      isAnyItemHovered && !isThisHovered ? 'opacity-40 scale-[0.98]' : 'scale-100'
                    }`}
                    onMouseEnter={() => setHoveredPath(item.path)}
                    onMouseLeave={() => setHoveredPath(null)}
                  >
                    <a
                      href={item.path}
                      className={`flex items-center justify-between text-[15px] font-bold transition-colors py-1 ${
                        isThisHovered ? 'text-blue-600' : 'text-slate-800'
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-all duration-300 ${
                          isThisHovered ? 'opacity-100 translate-x-0 text-blue-500' : 'opacity-0 -translate-x-2'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                   
                    {/* Submenu Reveal Logic: Vertical Accordion approach */}
                    <div className={`grid transition-all duration-300 ease-in-out ${
                      isThisHovered && hasSubmenus ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0 overflow-hidden'
                    }`}>
                      <div className="min-h-0">
                        <ul className="pl-4 border-l-2 border-blue-500/30 space-y-2 pb-2">
                          {item.submenus?.map((sub) => (
                            <li key={sub.id} className="animate-in fade-in slide-in-from-left-2 duration-300">
                              <a
                                href={`#${sub.id}`}
                                className="text-[13px] text-slate-500 hover:text-blue-600 transition-colors block leading-tight font-medium"
                              >
                                {sub.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
 
        {/* Dynamic Highlight Column */}
        {isServices && (
          <div className={`hidden xl:flex flex-col bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all duration-500 ${
            isAnyItemHovered ? 'opacity-30 blur-[2px] grayscale' : 'opacity-100'
          }`}>
            <h4 className="text-sm font-bold text-slate-900 mb-2">Service Highlight</h4>
            <div className="relative h-32 rounded-xl overflow-hidden mb-4">
              <img src="https://picsum.photos/seed/cyber/400/200" alt="Special feature" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Explore our new <strong>AI RMF by NIST</strong> frameworks to ensure your artificial intelligence systems are ethical, safe, and compliant.
            </p>
            <a href="#" className="mt-auto text-xs font-bold text-blue-600 flex items-center gap-1.5 hover:gap-2 transition-all">
              Learn More <span>&rarr;</span>
            </a>
          </div>
        )}
      </div>
 
      {/* Mega Menu Footer/CTA Area */}
      <div className={`bg-slate-50/50 border-t border-slate-100 py-4 px-10 transition-all duration-500 ${
        isAnyItemHovered ? 'opacity-30 blur-[1px]' : 'opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-xs text-slate-500">Need expert guidance? Our consultants are available for a 1-on-1 strategy call.</p>
          <div className="flex gap-4">
            <button className="text-[11px] font-black uppercase tracking-tighter text-slate-400 hover:text-slate-900">Whitepapers</button>
            <button className="text-[11px] font-black uppercase tracking-tighter text-slate-400 hover:text-slate-900">Resource Hub</button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
 
 
import React, { useState } from 'react';
import { NAVIGATION_DATA } from './constants';
 

 
export const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedKey, setExpandedKey] = useState(null);
 
  const toggleSection = (key) => {
    if (!key) return;
    setExpandedKey(expandedKey === key ? null : key);
  };
 
  const getSections = (key) => {
    switch (key) {
      case 'services': return NAVIGATION_DATA.servicesMegaMenu;
      case 'about': return NAVIGATION_DATA.aboutMegaMenu;
      case 'industries': return NAVIGATION_DATA.industriesMegaMenu;
      case 'governance': return NAVIGATION_DATA.governanceMegaMenu;
      case 'events': return NAVIGATION_DATA.eventsMegaMenu;
      default: return [];
    }
  };
 
  if (!isOpen) return null;
 
  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
     
      {/* Sidebar Content */}
      <div className="relative w-full max-w-sm h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">R</div>
            <span className="font-bold text-lg">RiskMan</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
 
        <div className="flex-grow overflow-y-auto custom-scrollbar p-4 space-y-2">
          {NAVIGATION_DATA.mainNav.map((item) => (
            <div key={item.label} className="border-b border-slate-50 last:border-0 pb-2">
              <button
                onClick={() => item.type === 'mega' ? toggleSection(item.key) : window.location.href = item.path}
                className="w-full flex items-center justify-between p-4 rounded-xl text-left hover:bg-slate-50 transition-colors"
              >
                <span className={`font-semibold ${expandedKey === item.key ? 'text-blue-600' : 'text-slate-700'}`}>
                  {item.label}
                </span>
                {item.type === 'mega' && (
                  <svg className={`w-5 h-5 transition-transform duration-300 ${expandedKey === item.key ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                )}
              </button>
             
              {/* Accordion content for mobile */}
              {item.type === 'mega' && expandedKey === item.key && (
                <div className="px-4 py-2 space-y-6 bg-slate-50/50 rounded-xl mt-1 animate-in slide-in-from-top-4 duration-200">
                  {getSections(item.key || '').map((section, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      {section.title && (
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                          {section.title}
                        </h4>
                      )}
                      <div className="space-y-4">
                        {section.items.map((subItem, siIdx) => (
                          <div key={siIdx} className="space-y-2">
                            <a href={subItem.path} className="text-sm font-bold text-slate-800 block">
                              {subItem.label}
                            </a>
                            {subItem.submenus && (
                              <div className="flex flex-wrap gap-2 pl-2">
                                {subItem.submenus.map(sub => (
                                  <span key={sub.id} className="text-[11px] px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">
                                    {sub.title}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
 
        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
 
 
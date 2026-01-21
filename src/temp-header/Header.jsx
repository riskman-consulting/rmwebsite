 
import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

 
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaKey, setActiveMegaKey] = useState(null);
 
  // Close mega menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeMegaKey) setActiveMegaKey(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMegaKey]);
 
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <Navbar
          onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
          activeMegaKey={activeMegaKey}
          setActiveMegaKey={setActiveMegaKey}
        />
      </header>
 
      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
 
      {/* Content Area */}
      <main className="flex-grow">
        <section className="relative h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://picsum.photos/seed/riskman/1920/1080"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Enterprise Risk Management <br/>
              <span className="text-blue-400">Simplified & Secured</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Navigating complex regulatory landscapes with cutting-edge assurance, advisory, and digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/25">
                Explore Services
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20">
                Contact Strategy Team
              </button>
            </div>
          </div>
        </section>
 
        {/* Feature Grid placeholder */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why RiskMan?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Global leaders trust us for their mission-critical assurance and digital infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Global Compliance</h3>
                <p className="text-slate-600 leading-relaxed">Ensure your organization meets international standards including ISO, SOC, and regional data privacy laws effortlessly.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
 
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Risk Assessment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ESG Reporting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital PMO</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Industries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2024 RiskMan Advisory Services. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
 
export default Header;
 
 
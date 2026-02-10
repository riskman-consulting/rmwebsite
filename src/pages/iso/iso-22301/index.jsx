import React, { useState } from 'react';
import HeroSection from "./HeroSection"
import { 
  Activity, 
  ShieldAlert, 
  Clock, 
  TrendingUp, 
  ChevronDown, 
  ArrowLeft, 
  Users, 
  FileText, 
  Zap,
  Repeat
} from 'lucide-react';
import PillarsSection from './PillarsSection';
import ImplementationSection from './ImplementationSection';
import ValueSection from './ValueSection';
import FAQSection from "./FAQSection"
import CTASection from './CTASection';

const ISO22301Page = () => {
  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. PILLARS GRID */}
       <PillarsSection/>

      {/* 3. IMPLEMENTATION STEPS */}
      <ImplementationSection/>

      {/* 4. VALUE PROPOSITION */}
      <ValueSection/>

      {/* 5. FAQ SECTION */}
      <FAQSection/>

      {/* 6. CTA SECTION */}
     <CTASection/>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">RISK<span className="text-brandAccent">MAN</span></div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Resilience Group | ISO 22301 Compliance Experts</p>
        </div>
      </footer>
    </div>
  );
};

export default ISO22301Page;
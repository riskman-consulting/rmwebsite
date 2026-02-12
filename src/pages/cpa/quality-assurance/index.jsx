import React, { useState } from 'react';
import { 
  CheckCircle, 
  Settings, 
  BarChart, 
  Zap, 
  ChevronDown, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  ShieldCheck,
  Search,
  LayoutDashboard
} from 'lucide-react';
import HeroSection from './HeroSection';
import IntegritySection from './IntegritySection';
import PerformanceSection from './PerformanceSection';
import ImprovementSection from "./ImprovementSection"
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const QualityAssurancePage = () => {
  

  

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. PROCESS INTEGRITY VALIDATION */}
     <IntegritySection/>

      {/* 3. OPERATIONAL PERFORMANCE METRICS */}
      <PerformanceSection/>

      {/* 4. CONTINUOUS IMPROVEMENT */}
      <ImprovementSection/>

      {/* 5. FAQ SECTION */}
      <FAQSection/>

      {/* 6. CTA SECTION */}
      <CTASection/>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy uppercase">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-xs font-normal text-gray-400 lowercase ml-2">Quality Division</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | Lean & Six Sigma Integration Specialists</p>
        </div>
      </footer>
    </div>
  );
};

export default QualityAssurancePage;
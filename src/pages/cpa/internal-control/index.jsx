import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Settings2, 
  Users, 
  Zap, 
  Search, 
  RotateCcw, 
  ArrowLeft, 
  ChevronDown, 
  Lock, 
  Eye,
  LineChart
} from 'lucide-react';
import HeroSection from './HeroSection';
import AnalysisSection from './AnalysisSection';
import DetectiveSection from './DetectiveSection';
import RemediationSection from './RemediationSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const InternalControlReviewPage = () => {
  

  

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. CONTROL ENVIRONMENT ANALYSIS */}
     <AnalysisSection/>

      {/* 3. PREVENTATIVE & DETECTIVE (Dual Layer) */}
      <DetectiveSection/>

      {/* 4. RISK ASSESSMENT & REMEDIATION */}
      <RemediationSection/>

      {/* 5. FAQ SECTION */}
      <FAQSection/>

      {/* 6. CTA SECTION */}
      <CTASection/>

      {/* 7. FOOTER */}
      {/* <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-xs font-normal text-gray-400 lowercase ml-2">Internal Controls</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | SOX & Internal Governance Compliance</p>
        </div>
      </footer> */}
    </div>
  );
};

export default InternalControlReviewPage;
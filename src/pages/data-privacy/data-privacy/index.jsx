import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe,
  Database,
  Zap,
  Users,
  Lock,
  ChevronDown,
  ArrowRight,
  Fingerprint,
  Scale,
  Settings2
} from 'lucide-react';
import HeroSection from './HeroSection';
import FrameworkSection from './FrameworkSection';
import HighSection from './HighSection';
import FAQSection from './FAQSection';
import TrustSection from './TrustSection';
import FutureProofSection from './Future_ProofSection';

const DataPrivacyPage = () => {
  return (
    <div className="font-sans bg-bgLight text-brandDark dark:bg-slate-900 dark:text-white transition-colors duration-300">

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. INTEGRATED COMPLIANCE FRAMEWORKS */}
      <FrameworkSection />

      {/* 3. HIGH-VALUE PRIVACY OUTCOMES */}
      <HighSection />

      {/* 4. FUTURE-PROOF STRATEGY (Visual Section) */}
      <FutureProofSection />
      
      {/* 5. FAQ SECTION */}
      <FAQSection />

      {/* 6. TRUST SECTION */}
      <TrustSection />

    </div>
  );
}

export default DataPrivacyPage;

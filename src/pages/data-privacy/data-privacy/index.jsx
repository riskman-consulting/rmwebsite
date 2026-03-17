import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Data Privacy & Compliance Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting helps organizations achieve data privacy compliance across DPDP, GDPR, and other regulatory frameworks through expert advisory, implementation, and ongoing assurance." />
        <link rel="canonical" href="https://www.riskman.in/services/data-privacy" />
      </Helmet>

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

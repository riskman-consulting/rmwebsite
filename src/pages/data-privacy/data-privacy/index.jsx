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

import { Helmet } from 'react-helmet-async';

const DataPrivacyPage = () => {
  return (
    <div className="font-sans bg-bgLight text-brandDark dark:bg-slate-900 dark:text-white transition-colors duration-300">

      <Helmet>
                                <title>Data Privacy Services | RiskMan</title>
                                <meta
                                  name="description"
                                  content="Secure your digital future with RiskMan’s comprehensive data privacy services. We align organizational strategy with global mandates like DPDP, GDPR, and other compliances."
                                />
                                <link
                                  rel="canonical"
                                  href=" https://www.riskman.in/data-privacy"
                                />
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

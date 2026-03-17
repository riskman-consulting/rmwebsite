import React from 'react';
import { Helmet } from "react-helmet-async";
import { Landmark, FileText, BarChart3, Users2, ShieldCheck, ClipboardCheck, ArrowRight, HelpCircle } from 'lucide-react';
import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import TypeSection from './TypeSection';
import KeyBenefitsSection from './KeyBenefitsSection';
import ServicesSection from './ServicesSection';
import FaqSection from './FaqSection';
import CtaSetion from "./CTASection"
const SOC1Page = () => {
  return (
    <div className="bg-bgLight dark:bg-bgDark font-sans text-brandDark dark:text-brandLight transition-colors duration-300">
      <Helmet>
        <title>SOC 1 Examination Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting delivers SOC 1 examination services (SSAE 18 / ISAE 3402) for service organizations, providing assurance over internal controls relevant to financial reporting." />
        <link rel="canonical" href="https://www.riskman.in/services/soc-services/soc-1" />
      </Helmet>
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. OVERVIEW SECTION */}
     <OverviewSection/>

      {/* 3. TYPE I VS TYPE II */}
      <TypeSection/>

      {/* 4. KEY BENEFITS */}
      <KeyBenefitsSection/>

      {/* 5. SERVICES & OUTCOMES */}
       <ServicesSection/>

      {/* 6. FAQ SECTION */}
      <FaqSection/>

      {/* 7. FINAL CTA */}
      <CtaSetion/>

    </div>
  );
};

// Simple Icon Component for List
const CheckCircleIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default SOC1Page;
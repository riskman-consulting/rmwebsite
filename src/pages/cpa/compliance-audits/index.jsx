import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Map,
  Search,
  TrendingUp,
  ChevronDown,
  ArrowLeft,
  FileCheck,
  Globe,
  Laptop,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import HeroSection from './HeroSection';
import RegulatorySection from './RegulatorySection';
import TestingSection from './TestingSection';
import ComplianceSection from './ComplianceSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const ComplianceAuditsPage = () => {

  return (
    <div className="font-sans bg-bgLight text-brandDark dark:bg-bgDark dark:text-white">
      <Helmet>
        <title>Compliance Audit Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting performs compliance audits to verify organizational adherence to regulatory requirements, industry standards, and internal policies across multiple jurisdictions." />
        <link rel="canonical" href="https://www.riskman.in/services/cpa-us-assurance/compliance-audits" />
      </Helmet>
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. REGULATORY LANDSCAPE MAPPING */}
      <RegulatorySection/>

      {/* 3. VERIFICATION & SUBSTANTIVE TESTING */}
       <TestingSection/>

      {/* 4. COMPLIANCE MATURITY SCALING */}
       <ComplianceSection/>

      {/* 5. FAQ SECTION */}
       <FAQSection/>

      {/* 6. CTA SECTION */}
      <CTASection/>

    </div>
  );
};

// Generic Users icon fallback
const Users = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default ComplianceAuditsPage;
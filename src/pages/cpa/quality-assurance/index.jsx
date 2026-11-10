import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
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
    <div className="font-sans bg-bgLight text-brandDark dark:bg-bgDark dark:text-white">
      <Helmet>
        <title>Quality Assurance Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting provides quality assurance services to help organizations implement process integrity validation, performance monitoring, and continuous improvement frameworks." />
        <link rel="canonical" href="https://www.riskman.in/services/cpa-us-assurance/quality-assurance" />
      </Helmet>
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

    </div>
  );
};

export default QualityAssurancePage;
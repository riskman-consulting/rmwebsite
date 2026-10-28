import React from 'react';
import { Helmet } from "react-helmet-async";
import { ShieldCheck, BarChart4, Zap, Users, CheckCircle2, Search,  Headphones, Calendar, HelpCircle,ToolCase as Tool } from 'lucide-react';
import HeroSection from './HeroSection';
import StrategicSection from './StrategicSection';
import DefinitionSection from './DefinitionSection';
import ReportTypeSection from './ReportTypeSection';
import SupportSection from './SupportSection';
import BusinessSection from './BusinessSection';
import FaqSection from './FaqSection';
import CTASection from './CTASection';

const SOCOverview = () => {
  return (
    <div className="bg-bgLight dark:bg-bgDark font-sans text-brandDark dark:text-brandLight transition-colors duration-300">
      <Helmet>
        <title>SOC Services (SOC 1, SOC 2, SOC 3) | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting delivers SOC 1, SOC 2, and SOC 3 examination services, helping organizations demonstrate trust and security controls to clients, auditors, and regulators." />
        <link rel="canonical" href="https://www.riskman.in/services/soc-services" />
      </Helmet>
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. DEFINITION SECTION */}
      <DefinitionSection/>

      {/* 3. STRATEGIC VALUE */}
      <StrategicSection/>

      {/* 4. REPORT TYPES TABLE */}
     <ReportTypeSection/>

      {/* 5. RISKMAN SUPPORT STEPS */}
      <SupportSection/>

      {/* 6. BUSINESS VALUE FOR LEADERSHIP */}
     <BusinessSection/>

      {/* 7. FAQ SECTION */}
      <FaqSection/>

      {/* 8. FINAL CTA */}
      <CTASection/>

    </div>
  );
};

export default SOCOverview;
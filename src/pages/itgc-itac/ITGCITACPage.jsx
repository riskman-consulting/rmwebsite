import React from 'react';
import { Helmet } from "react-helmet-async";
import HeroSection from './HeroSection';
import ITGCFramework from './ITGCFramework';
import ITACSection from './ITACSection';
import DataIntegritySection from './DataIntegritySection';
import ChangeManagementSection from './ChangeManagementSection';
import BusinessContinuitySection from './BusinessContinuitySection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

const ITGCITACPage = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>ITGC & ITAC Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting provides IT General Controls (ITGC) and IT Application Controls (ITAC) assessment services to ensure robust IT governance, SOX compliance, and audit readiness." />
        <link rel="canonical" href="https://www.riskman.in/services/itgc-itac" />
      </Helmet>
      <HeroSection />
      <ITGCFramework />
      <ITACSection />
      <DataIntegritySection />
      <ChangeManagementSection />
      <BusinessContinuitySection />
       <FAQSection />
      <CTASection />
    </div>
  );
};

export default ITGCITACPage;
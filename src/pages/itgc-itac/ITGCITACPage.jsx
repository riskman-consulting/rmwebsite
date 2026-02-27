import React from 'react';
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
        <title>Payment Card Industry Data Security Standard Services | RiskMan</title>
        <meta
          name="description"
          content="Achieve PCI DSS compliance with RiskMan. We help Organizations secure cardholder data through network hardening, encryption, and continuous monitoring."
        />
        <link
          rel="canonical"
          href="https://www.riskman.in/pci-dss"
        />
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
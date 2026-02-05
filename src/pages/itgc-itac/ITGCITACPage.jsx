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
      <HeroSection />
      <ITGCFramework />
      <ITACSection />
      <DataIntegritySection />
      <ChangeManagementSection />
      <BusinessContinuitySection />
      <CTASection />
      <FAQSection />
    </div>
  );
};

export default ITGCITACPage;
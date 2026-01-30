// ===============================
// ERMPage.jsx
// Enterprise Risk Management Page
// ===============================

import React from "react";

// Sections
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import ERMAdvantagesSection from "./ERMAdvantagesSection";
import StrategicERMFrameworkSection from "./StrategicERMFrameworkSection";
import ERMMethodologySection from "./ERMMethodologySection";
import OrganizationWideImplementationSection from "./OrganizationWideImplementationSection";
import RiskMaturitySection from "./RiskMaturitySection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

const ERMPage = () => {
  return (
    <main className="w-full overflow-hidden">

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Introduction / Journey */}
      <IntroSection />

      {/* 3. ERM Advantages */}
      <ERMAdvantagesSection />

      {/* 4. Strategic ERM Framework */}
      <StrategicERMFrameworkSection />

      {/* 5. Methodology */}
      <ERMMethodologySection />

      {/* 6. Organization-wide Implementation */}
      <OrganizationWideImplementationSection />

      {/* 7. Risk Maturity & Path Ahead */}
      <RiskMaturitySection />

      {/* 8. Final CTA */}
      <CTASection />

      {/* 9. FAQs */}
      <FAQSection />


    </main>
  );
};

export default ERMPage;

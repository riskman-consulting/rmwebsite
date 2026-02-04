// ===============================
// ERMPage.jsx
// Enterprise Risk Management Page
// ===============================

import React from "react";

// Sections
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import RbiaRiskAdvisorySection from "./RbiaRiskAdvsiorySection";
import SampleIASection from "./SampleIASection";
import StrategyPlanSection from "./StrategyPlan";
import CustomizedApproachSection from "./CustomizedApproachSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import { Helmet } from "react-helmet-async";

const ERMPage = () => {
  return (
    <main className="w-full overflow-hidden">
<Helmet>
  <title> Risk-Based Internal Audit (RBIA) Services | RiskMan Consulting </title>
  <meta
    name="description"
    content='Secure your future with RiskMan Consulting’s customized RBIA services. Our team delivers strategic insight and enduring value for your business.'
  />
  <link rel="canonical" href="https://www.riskman.in/rbia" />
</Helmet>


      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Introduction / Journey */}
      <IntroSection />

      {/* 3. ERM Advantages */}
      <StrategyPlanSection />

      {/* 4. Strategic ERM Framework */}
      <RbiaRiskAdvisorySection />

      {/* 5. Methodology */}
      <CustomizedApproachSection />

      {/* 6. Organization-wide Implementation */}
      <SampleIASection />

      {/* 7. Risk Maturity & Path Ahead */}
      {/* <RiskMaturitySection /> */}

      {/* 8. Final CTA */}
      <CTASection />

      {/* 9. FAQs */}
      <FAQSection />


    </main>
  );
};

export default ERMPage;

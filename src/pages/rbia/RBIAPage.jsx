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
import RelatedLinks from "../../components/sections/RelatedLinks";

const ERMPage = () => {
  return (
    <main className="w-full overflow-hidden bg-bgLight dark:bg-bgDark">
<Helmet>
  <title>Risk-Based Internal Audit Services | RiskMan Consulting</title>
  <meta
    name="description"
    content="Risk-based internal audit (RBIA) services: risk assessment of the audit universe, risk-based audit plans, and outsourced or co-sourced internal audit."
  />
  <link rel="canonical" href="https://www.riskman.in/services/risk-advisory/rbia" />
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

      {/* 8. FAQs */}
      <FAQSection />

      <RelatedLinks
        intro="Running the audit plan in-house? RiskMan GRC's risk-based internal audit module scores the audit universe, records CAE approval of the annual plan and carries each audit through to the final report, with observations tracked to closure."
        links={[
          { label: "Risk-based internal audit (RBIA) software", path: "/products/riskman-grc/risk-based-internal-audit" },
          { label: "Audit findings and remediation tracking", path: "/products/riskman-grc/action-taken-report" },
        ]}
      />

      {/* 9. Final CTA */}
      <CTASection />


    </main>
  );
};

export default ERMPage;

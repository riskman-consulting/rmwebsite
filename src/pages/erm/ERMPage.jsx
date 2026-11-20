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
import { Helmet } from "react-helmet-async";
import RelatedLinks from "../../components/sections/RelatedLinks";

const ERMPage = () => {
  return (
    <main className="w-full overflow-hidden bg-bgLight dark:bg-bgDark">
<Helmet>
  <title>ERM Consulting & Advisory Services | RiskMan Consulting</title>
  <meta
    name="description"
    content="Enterprise risk management consulting: ERM frameworks, risk assessments and risk registers that surface the risks that matter and build resilience."
  />
  <link rel="canonical" href="https://www.riskman.in/services/risk-advisory/erm" />
</Helmet>


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

      {/* 8. FAQs */}
      <FAQSection />

      <RelatedLinks
        intro="Prefer to run your risk register on software? RiskMan GRC's enterprise risk management module keeps a live risk register with automated inherent and residual scoring, approval workflows and periodic owner confirmation."
        links={[
          { label: "Enterprise risk management (ERM) software", path: "/products/riskman-grc/enterprise-risk-management" },
        ]}
      />

      {/* 9. Final CTA */}
      <CTASection />


    </main>
  );
};

export default ERMPage;

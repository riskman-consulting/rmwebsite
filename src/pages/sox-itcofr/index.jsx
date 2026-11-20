import React from 'react';
import { Helmet } from "react-helmet-async";
import HeroSection from './HeroSection';
import Framework from './Framework';
import NoteSection from './NoteSection';
import TestingSection from './TestingSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import RelatedLinks from "../../components/sections/RelatedLinks";

const SoxIcofrIfc = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>SOX / ICOFR / IFC Compliance Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting helps organizations achieve SOX, ICOFR, and IFC compliance through expert internal control design, testing, and remediation for financial reporting integrity." />
        <link rel="canonical" href="https://www.riskman.in/services/risk-advisory/sox-icofr-ifc" />
      </Helmet>
      {/* Hero */}
      <HeroSection />

      {/* IFC Framework */}
      <Framework />

      {/* Note */}
      {/* <NoteSection /> */}

      {/* Control Testing */}
      <TestingSection />

      {/* FAQ */}
      <FAQSection />

      <RelatedLinks
        intro="RiskMan GRC runs SOX, ICFR and IFC testing as software: one risk and control library, evidence requests, workpapers, approvals and management responses in a single project."
        links={[
          { label: "Global SOX compliance software", path: "/products/riskman-grc/global-sox" },
          { label: "Internal control testing software", path: "/products/riskman-grc/control-testing" },
        ]}
      />

      {/* CTA */}
      <CTASection />

    </div>
  );
};

export default SoxIcofrIfc;
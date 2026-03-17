import React from 'react';
import { Helmet } from "react-helmet-async";
import HeroSection from './HeroSection';
import Framework from './Framework';
import NoteSection from './NoteSection';
import TestingSection from './TestingSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

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

      {/* CTA */}
      <CTASection />

      {/* FAQ */}
      <FAQSection />

    </div>
  );
};

export default SoxIcofrIfc;
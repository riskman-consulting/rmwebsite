import React from 'react';

import HeroSection from './HeroSection';
import Framework from './Framework';
import NoteSection from './NoteSection';
import TestingSection from './TestingSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

import {Helmet} from "react-helmet-async";

const SoxIcofrIfc = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">

      <Helmet>
              <title>SOX, ICOFR & IFC Services | RiskMan </title>
              <meta
                name="description"
                content="Ensure regulatory compliance and operational excellence with RiskMan’s SOX, ICOFR, and IFC services. We provide expert risk assessment, control testing, and framework designing to strengthen your governance."
              />
              <link
                rel="canonical"
                href=" https://www.riskman.in/sox-icofr-ifc"
              />
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
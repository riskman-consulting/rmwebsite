import React from 'react';
import { Helmet } from "react-helmet-async";
import HeroSection from './HeroSection';
import PillarsSection from './PillarsSection';
import StepsSection from './StepsSection';
import ValueSection from './ValueSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-brandDark selection:bg-brandAccent selection:text-brandDark">
      <Helmet>
        <title>ISO 22301 Business Continuity Management | RiskMan Consulting</title>
        <meta name="description" content="Achieve ISO 22301 certification with RiskMan Consulting. We guide organizations through BCM framework design, risk assessment, and business continuity implementation to ensure operational resilience." />
        <link rel="canonical" href="https://www.riskman.in/services/iso-certifications/iso-22301" />
      </Helmet>
      <main>
        <HeroSection />
        <PillarsSection />
        <StepsSection />
        <ValueSection />
        <CTASection />
        <FAQSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
import React from 'react';

import HeroSection from './Herosection';
import PillarsSection from './PillarsSection';
import StepsSection from './StepsSection';
import ValueSection from './ValueSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

import { Helmet } from 'react-helmet-async';

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-brandDark selection:bg-brandAccent selection:text-brandDark">

       <Helmet>
                <title>The International Organization for Standardization 22301 Services | RiskMan</title>
                <meta
                    name="description"
                    content=": Ensure business resilience with RiskMan’s ISO 22301 solutions. We develop robust continuity plans to keep your organizational operations running during crises."
                />
                <link
                    rel="canonical"
                    href="https://www.riskman.in/iso-22301"
                />
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
import React from 'react';

import HeroSection from './HeroSection';
import PillarsSection from './PillarsSection';
import StepsSection from './StepsSection';
import ValueSection from './ValueSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-brandDark selection:bg-brandAccent selection:text-brandDark">
    
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
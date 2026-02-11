import React from 'react';

import HeroSection from './HeroSection';
import Framework from './Framework';
import NoteSection from './NoteSection';
import TestingSection from './TestingSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

const SoxIcofrIfc = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">

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
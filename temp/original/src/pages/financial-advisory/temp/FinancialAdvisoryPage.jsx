import React from 'react';
import FinancialHero from './FinancialHero';
import ValuePillars from './ValuePillars';
import ServiceCatalog from './ServiceGrid';
import MarketInsight from './MarketInsight';
import SMEAdvisory from './SMEAdvisory';
import TrackRecord from './TrackRecord';
import FinancialFAQ from './FinancialFAQ';

const FinancialAdvisoryPage = () => {
  return (
    <main className="bg-bgLight dark:bg-bgDark min-h-screen font-sans selection:bg-brandAccent selection:text-brandDark">
      {/* 1. Hero Section: Direct value prop [cite: 2, 4] */}
      <section id="hero">
        <FinancialHero />
      </section>

      {/* 2. Value Pillars: The 5 key advantages [cite: 5-9] */}
      <section id="pillars" className="border-t border-borderLight dark:border-borderDark">
        <ValuePillars />
      </section>

      {/* 3. Service Grid: The 4 core offerings [cite: 11-26] */}
      <section id="services">
        <ServiceCatalog />
      </section>

      {/* 4. Market Insight: Why it matters now [cite: 28-32] */}
      <section id="insights">
        <MarketInsight />
      </section>

      {/* 5. SME Focus: Small business support [cite: 56-59] */}
      <section id="sme">
        <SMEAdvisory />
      </section>

      {/* 6. Accomplishments: Sector history [cite: 34-35] */}
      <section id="accomplishments">
        <TrackRecord />
      </section>

      {/* 7. FAQ: Common questions [cite: 37-55] */}
      <section id="faq" className="pb-20">
        <FinancialFAQ />
      </section>
    </main>
  );
};

export default FinancialAdvisoryPage;
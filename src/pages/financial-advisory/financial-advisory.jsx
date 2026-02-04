import React from "react";

import HeroSection from "./HeroSection";
import AdvisoryOverviewSection from "./AdvisoryOverviewSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import StrategyLifecycleSection from "./StrategyLifecycleSection";
import AdvisorySolutionsSection from "./AdvisorySolutionsSection";
import IndustryCoverageSection from "./IndustryCoverageSection";
import EngagementProcessSection from "./EngagementProcessSection";
import ExperienceAchievementsSection from "./ExperienceAchievementsSection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";

const FinancialAdvisory = () => {
  return (
    <main className="bg-white dark:bg-bgDark">

      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — Overview */}
      <AdvisoryOverviewSection />

      {/* 3 — Why Choose Us */}
      <WhyChooseUsSection />

      {/* 4 — Lifecycle Strategy */}
      <StrategyLifecycleSection />

      {/* 5 — Advisory Solutions */}
      <AdvisorySolutionsSection />

      {/* 6 — Industry Coverage */}
      <IndustryCoverageSection />

      {/* 7 — Engagement Process */}
      <EngagementProcessSection />

      {/* 8 — Experience / Achievements */}
      <ExperienceAchievementsSection />

      {/* 9 — Final CTA */}
      <FinalCTASection />
      
      {/* 10 — FAQ */}
      <FAQSection />


    </main>
  );
};

export default FinancialAdvisory;
import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import WhyConsiderSection from './WhyConsiderSection';
import SupportSection from './SupportSection';
import RiskmanEnablement from './RiskmanEnablement';
import WhenItSection from "./WhenItSection"
import FaqSection from './FaqSection';

const SOC3Page = () => {
  return (
    <div className="bg-bgLight dark:bg-bgDark font-sans text-brandDark dark:text-brandLight transition-colors duration-300">

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OVERVIEW: SOC 3 IN ONE VIEW */}
      <OverviewSection />

      {/* 3. WHY CONSIDER SOC 3? */}
      <WhyConsiderSection />

      {/* 4. GO-TO-MARKET SUPPORT */}
      <SupportSection />

      {/* 5. RISKMAN ENABLEMENT */}
      <RiskmanEnablement />

      {/* 6. WHEN IT ADDS VALUE */}
      <WhenItSection />

      {/* 7. FAQ & FOOTER CTA */}
      <FaqSection />

    </div>
  );
};

export default SOC3Page;
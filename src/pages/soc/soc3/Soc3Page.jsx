import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>SOC 3 Report Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting delivers SOC 3 reporting services, providing a publicly shareable summary of your organization's trust service controls for marketing and stakeholder confidence." />
        <link rel="canonical" href="https://www.riskman.in/services/soc-services/soc-3" />
      </Helmet>
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
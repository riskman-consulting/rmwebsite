import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import WhyConsiderSection from './WhyConsiderSection';
import SupportSection from './SupportSection';
import RiskmanEnablement from './RiskmanEnablement';
import WhenItSection from "./WhenItSection"
import FaqSection from './FaqSection';

import { Helmet } from 'react-helmet-async';

const SOC3Page = () => {
  return (
    <div className="bg-bgLight dark:bg-bgDark font-sans text-brandDark dark:text-brandLight transition-colors duration-300">

      <Helmet>
                                                  <title>System and Organization Controls (SOC) 3 Services | RiskMan</title>
                                                  <meta
                                                    name="description"
                                                    content="Promote your control maturity publicly with SOC 3. Share a high-level, independently audited view of your security and trust posture with the market."
                                                  />
                                                  <link
                                                    rel="canonical"
                                                    href="https://www.riskman.in/soc-3"
                                                  />
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
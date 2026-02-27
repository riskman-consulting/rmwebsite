import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import TruestService from './TruestService';
import WhySoc2 from './WhySoc2';
import TypeSection from './TypeSection';
import SupportSection from './SupportSection';
import FaqSection from './FaqSection';
import ctaSection from './ctaSection';

import { Helmet } from 'react-helmet-async';

const SOC2Page = () => {
  return (
    <div className="bg-bgLight dark:bg-bgDark font-sans text-brandDark dark:text-brandLight transition-colors duration-300">

      
             <Helmet>
                                            <title>System and Organization Controls (SOC) 2 Services | RiskMan</title>
                                            <meta
                                              name="description"
                                              content="Show enterprise customers your cloud and SaaS services are secure and resilient. SOC 2 validates controls across security, availability, confidentiality, and more."
                                            />
                                            <link
                                              rel="canonical"
                                              href="https://www.riskman.in/soc-2"
                                            />
                                          </Helmet>

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OVERVIEW SECTION */}
      <OverviewSection />

      {/* 3. TRUST SERVICES CRITERIA */}
      <TruestService />

      {/* 4. WHY SOC 2 SECTION */}
      <WhySoc2 />

      {/* 5. TYPE I VS TYPE II */}
      <TypeSection />

      {/* 6. RISKMAN SUPPORT */}
     <SupportSection/>

      {/* 7. FAQ SECTION */}
     <FaqSection/>

      {/* 8. FINAL CTA SECTION */}
      <ctaSection/>

    </div>
  );
};

export default SOC2Page;
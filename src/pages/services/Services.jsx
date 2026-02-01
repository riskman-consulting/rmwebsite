import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { AllServicesGridSection } from "./AllServicesGridSection";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { CTASection } from "./CTASection";
import { HeroSection } from "./HeroSection";
import { StickyServicesSection } from "./StickyServicesSection";
import StatsSection from "../home/StatsSection";

export default function ServicePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      {/* =========================
          SEO META TAGS
      ========================== */}
      <Helmet>
        <title>Riskman Consulting | Our Holistic Service List</title>
        <meta
          name="description"
          content="Partner with Riskman Consulting for elite Enterprise and IT Risk management. Our team delivers SOC 2, ESG, and Forensic Advisory to ensure your organization leads with integrity and global resilience."
        />
         <link rel="canonical" href="https://www.riskman.in/services" />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden bg-bgLight dark:bg-bgDark">
        <HeroSection />
        <StatsSection />
        <StickyServicesSection />
        <AllServicesGridSection />
        <CapabilitiesSection />
        <CTASection />
      </div>
    </>
  );
}

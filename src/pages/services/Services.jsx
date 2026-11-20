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
        <title>Risk Advisory & Compliance Services | RiskMan Consulting</title>
        <meta
          name="description"
          content="RiskMan Consulting services: risk advisory, internal audit, SOX and IFC, SOC reports, ISO certification, cybersecurity, data privacy, ESG and forensics."
        />
         <link rel="canonical" href="https://www.riskman.in/services" />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden bg-bgLight dark:bg-bgDark">
        <HeroSection />
        {/* <StatsSection /> */}
        <StickyServicesSection />
        <AllServicesGridSection />
        <CapabilitiesSection />
        <CTASection />
      </div>
    </>
  );
}

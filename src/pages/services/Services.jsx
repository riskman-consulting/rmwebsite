import { useEffect } from "react";
import { AllServicesGridSection } from "./AllServicesGridSection";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { CTASection } from "./CTASection";
import { HeroSection } from "./HeroSection";
import { StickyServicesSection } from "./StickyServicesSection";
import StatsSection from "../home/StatsSection";
// import { CurtainRevealImage } from "./CurtainRevealImageSection";


export default function ServicePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-bgLight dark:bg-bgDark">
      <HeroSection />
      <StatsSection/>
      <StickyServicesSection />
      <AllServicesGridSection />
      <CapabilitiesSection />
      <CTASection />
    </div>
  );
}
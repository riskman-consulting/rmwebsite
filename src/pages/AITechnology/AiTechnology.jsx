import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import TechIntegration from "./TechIntegration";
import Framework from "./Framework";
import CTA from "./CTA";
import FAQ from "./FAQ";

const AiTechnology = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <HeroSection />
      <Services />
      <TechIntegration />
      <Framework />
      <CTA />
    
    </div>
  );
};

export default AiTechnology;

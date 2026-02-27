import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import TechIntegration from "./TechIntegration";
import Framework from "./Framework";
import CTA from "./CTA";
import FAQ from "./FAQ";

import { Helmet } from "react-helmet-async";


const AiTechnology = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>Artificial Intelligence (AI) and Technology Services | RiskMan </title>
        <meta
          name="description"
          content="Discover RiskMan's AI & Technology services: Leverage advanced AI, NIST-compliant frameworks, and cutting-edge tools to transform enterprise risk management."
        />
        <link
          rel="canonical"
          href="https://www.riskman.in/ai-and-technology"
        />
      </Helmet>


      <HeroSection />
      <Services />
      <TechIntegration />
      <Framework />
      <CTA />
    
    </div>
  );
};

export default AiTechnology;

import React from 'react';
import HeroSection from './HeroSection';
import StrategicImperative from "./StrategicImperative";
import ESGStakeholderEcosystem from './ESGStakeholderEcosystem';
import Scope123ValueChain from './Scope123ValueChain'; 
import FoundationalFrameworks from './FoundationalFrameworks'; 
import ESGProgramLifecycle from './ESGProgramLifecycle';
import ValueCreationFramework from './ValueCreationFramework';
import ServicePortfolio from "./ServicePortfolio";
import WhyRiskManAndCTA from './WhyRiskManAndCTA';



function ESGPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-bgDark">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Strategic Imperative Section */}
      <StrategicImperative />
      
      {/* ESG Frameworks Section */}
      <ESGStakeholderEcosystem />
      
      {/* ESG Methodology Section */}
      <Scope123ValueChain />
      
      {/* Value Proposition Section */}
      <FoundationalFrameworks />
      
      {/* Service Portfolio Section */}
      <ESGProgramLifecycle />
      
      {/* Why RiskMan & CTA Section */}
      <ValueCreationFramework />


         <ServicePortfolio />

         <WhyRiskManAndCTA />
    </div>
  );
}

export default ESGPage;
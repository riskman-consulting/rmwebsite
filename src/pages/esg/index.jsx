// import React from 'react';
// import HeroSection from './HeroSection';
// import StrategicImperativeSection from './StrategicImperativeSection';
// import ESGFrameworksSection from './ESGFrameworksSection';
// import ESGMethodologySection from './ESGMethodologySection';
// import ValuePropositionSection from './ValuePropositionSection';
// import ServicePortfolioSection from './ServicePortfolioSection';
// import WhyRiskManSection from './WhyRiskManSection';

// function ESGPage() {
//   return (
//     <div className="min-h-screen bg-white dark:bg-bgDark">
//       {/* Hero Section */}
//       <HeroSection />
      
//       {/* Strategic Imperative Section */}
//       <StrategicImperativeSection />
      
//       {/* ESG Frameworks Section */}
//       <ESGFrameworksSection />
      
//       {/* ESG Methodology Section */}
//       <ESGMethodologySection />
      
//       {/* Value Proposition Section */}
//       <ValuePropositionSection />
      
//       {/* Service Portfolio Section */}
//       <ServicePortfolioSection />
      
//       {/* Why RiskMan & CTA Section */}
//       <WhyRiskManSection />
//     </div>
//   );
// }

// export default ESGPage;







import React from 'react';
import HeroSection from './HeroSection';
import StrategicImperative from './StrategicImperativeSection';
import ESGEvolutionTimeline from './ESGEvolutionSections';
import MultiStakeholderImperative from './MultiStakeHolderImperative';
import ESGStakeholderEcosystem from './Esgstakeholderecosystem';
import FoundationalFrameworks from './FoundationFramework';
import Scope123ValueChain from './Scope123ValueChain';
import ESGProgramLifecycle from './Esgprogramlifecycle';
import ESGMaturityModel from './ESGMaturityModel';
import ESGValueCreation from './ESGValueCreation';
import ESGServicePortfolio from './ESGServicePortfolio';
import ServiceDetails from './ServiceDetail';
import WhyRiskManAndCTA from './WhyRiskManCTA';

function ESGPage() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      {/* Hero Section with ESG Pillars */}
      <HeroSection/>

      {/* Strategic Imperative - Introduction */}
      <StrategicImperative />

      {/* ESG Evolution Timeline */}
      <ESGEvolutionTimeline />

      {/* Multi-Stakeholder Imperative */}
      <MultiStakeholderImperative />

      {/* Interactive ESG Stakeholder Ecosystem Diagram */}
      <ESGStakeholderEcosystem />

      {/* Foundational ESG Frameworks (SDGs, GHG) */}
      <FoundationalFrameworks />

      {/* GHG Scope 1-2-3 Value Chain Interactive Diagram */}
      <Scope123ValueChain />

      {/* ESG Program Lifecycle - RiskMan Methodology */}
      <ESGProgramLifecycle />

      {/* ESG Maturity Model & Assessment */}
      <ESGMaturityModel />

      {/* ESG Value Creation Framework */}
      <ESGValueCreation />

      {/* Service Portfolio Architecture */}
      <ESGServicePortfolio />

      {/* Detailed Service Offerings */}
      <ServiceDetails />

      {/* Why RiskMan & CTA */}
      <WhyRiskManAndCTA />
    </div>
  );
}

export default ESGPage;
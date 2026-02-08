import React from 'react';

// Import all Credit Policy Framework components
import CreditPolicyHero from './HeroSection';
import CoreObjectives from './Coreobjectives';
import ValueChainManagement from './Valuechainmanagement';
import PolicyGovernanceCTAandFAQ from './Policygovernancectaandfaq';
import PolicyFAQ from './PolicyFAQ';

/**
 * Credit Policy Framework - Complete Service Page
 * 
 * This is the main entry point for the Credit Policy Framework service page.
 * All sections are assembled in the correct order as per the content document.
 */
function CreditPolicyFrameworkApp() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      {/* Optional: Add Navigation/Header here */}
      {/* <YourHeader /> */}

      {/* Hero Section - Strategic Credit Policy Framework */}
      <CreditPolicyHero />

      {/* Core Objectives Section - Strategic Alignment, Asset Quality, Risk Tolerance */}
      <CoreObjectives />

      {/* Value Chain Management Section - 6-step Credit Process */}
      <ValueChainManagement />

      {/* Policy Governance & Evolution + Call-to-Action & FAQ Section */}
      <PolicyGovernanceCTAandFAQ />

      <PolicyFAQ/>

      {/* Optional: Add Footer here */}
      {/* <YourFooter /> */}
    </div>
  );
}



export default CreditPolicyFrameworkApp;
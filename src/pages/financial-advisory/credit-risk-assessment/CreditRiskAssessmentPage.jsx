import React from 'react';


// Import all Credit Risk Assessment components
import CreditRiskAssessmentHero from './HeroSection';
import QuantitativeMetrics from './Quantitativemetrics';
import FiveCsFramework from './Fivecsframework';
import RiskCategorization from './Riskcategorization';
import CreditRiskCTAandFAQ from './Creditriskctaandfaq';

import { Helmet } from 'react-helmet-async';

/**
 * Credit Risk Assessment - Complete Service Page
 * 
 * This is the main entry point for the Credit Risk Assessment service page.
 * All sections are assembled in the correct order as per the content document.
 */
function CreditRiskAssessmentApp() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">

    <Helmet>
                                   <title>Credit Risk Assessment Services | RiskMan</title>
                                   <meta
                                     name="description"
                                     content="Elevate your credit decisions with RiskMan’s sophisticated risk assessment. We quantify borrower reliability through data-driven analysis and strategic ring-fencing."
                                   />
                                   <link
                                     rel="canonical"
                                     href="https://www.riskman.in/credit-risk-assessment"
                                   />
                                 </Helmet>

      {/* Optional: Add Navigation/Header here */}
      {/* <YourHeader /> */}

      {/* Hero Section - Advanced Credit Risk Assessment */}
      <CreditRiskAssessmentHero />

      {/* Quantitative Metric Analysis Section - PD, EAD, LGD */}
      <QuantitativeMetrics />

      {/* The 5 C's Framework Section - Character, Capacity, Capital, Collateral, Conditions */}
      <FiveCsFramework />

      {/* Risk Categorization & Ring-Fencing Section - External & Internal Risk */}
      <RiskCategorization />

      {/* Call-to-Action & FAQ Section */}
      <CreditRiskCTAandFAQ />

      {/* Optional: Add Footer here */}
      {/* <YourFooter /> */}
    </div>
  );
}

// Render the app
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CreditRiskAssessmentApp />
//   </React.StrictMode>
// );

export default CreditRiskAssessmentApp;
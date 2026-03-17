import React from 'react';
import { Helmet } from "react-helmet-async";
import Hero from './Herosection';
import ServicesSection from './Services';
import CTA from './CTA';
import FAQ from './FAQ';


function App() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>PCI-DSS Compliance Services | RiskMan Consulting</title>
        <meta name="description" content="Achieve and maintain PCI-DSS compliance with RiskMan Consulting. Our experts guide organizations through the full Payment Card Industry Data Security Standard assessment and certification process." />
        <link rel="canonical" href="https://www.riskman.in/services/pci-dss-compliance" />
      </Helmet>
      <main>
        <Hero />
        <ServicesSection />
        <CTA />
        <FAQ />
      </main>
   
    </div>
  );
}

export default App;

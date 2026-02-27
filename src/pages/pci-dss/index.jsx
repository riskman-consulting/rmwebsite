import React from 'react';

import Hero from './Herosection';
import ServicesSection from './Services';
import CTA from './CTA';
import FAQ from './FAQ';

import { Helmet } from 'react-helmet-async';


function App() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark">
     <Helmet>
                          <title>Payment Card Industry Data Security Standard Services | RiskMan</title>
                          <meta
                              name="description"
                              content="Achieve PCI DSS compliance with RiskMan. We help Organizations secure cardholder data through network hardening, encryption, and continuous monitoring."
                          />
                          <link
                              rel="canonical"
                              href="https://www.riskman.in/pci-dss"
                          />
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

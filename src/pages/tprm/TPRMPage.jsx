// TPRM.jsx
import React, { useEffect } from 'react';
import Hero from './HeroSection';
import GovernanceFramework from './GovernanceFramework';
import VendorInventory from './VendorInventory';
import VendorOnboarding from './VendorOnboarding';
import SecurityControls from './SecurityControls';
import ContinuousMonitoring from './ContinuousMonitoring';
import CTASection from './CTASection';
import FAQ from './FAQ';

const TPRM = () => {
  useEffect(() => {
    // Set meta tags
    document.title = 'Third-party Risk Management (TPRM) Services | RiskMan';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Secure your enterprise with audit-ready Third-Party Risk Management (TPRM). We provide evidence-driven frameworks, vendor due diligence, and continuous monitoring.');
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <GovernanceFramework />
      <VendorInventory />
      <VendorOnboarding />
      <SecurityControls />
      <ContinuousMonitoring />
      <CTASection />
      <FAQ />
    </main>
  );
};

export default TPRM;
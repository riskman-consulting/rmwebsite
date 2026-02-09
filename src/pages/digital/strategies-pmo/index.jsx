import React from 'react'
import HeroSection from './HeroSection'
import GovernanceSection from "./GovernanceSection"
import LifecycleSection from "./LifecycleSection"
import RiskSection from "./RiskSection"
import CTASection from "./CTASection"
import FAQSection from "./FAQSection"
function StrategiesPage() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      <HeroSection/>
      <GovernanceSection/>
      <LifecycleSection />
      <RiskSection/>
      <CTASection/>
      <FAQSection/>
    </div>
  )
}

export default StrategiesPage
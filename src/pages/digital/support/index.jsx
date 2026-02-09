import React from 'react'
import HeroSection from './HeroSection'
import TestingSection from './TestingSection'
import ManagementSection from './ManagementSection'
import ImprovementSection from './ImprovementSection'
import CTASection from './CTASection'
import FAQSection from './FAQSection'

function SupportPage() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight" >
      <HeroSection/>
      <TestingSection/>
      <ManagementSection/>
      <ImprovementSection/>
      <CTASection/>
      <FAQSection/>
    </div>
  )
}

export default SupportPage
import React from 'react'
import HeroSection from "./HeroSection"
import Intelligence from "./IntelligenceSection"
import OutComebanner from "./OutComeBanner"
import Technology from "./TechnologySection"
import RMFSection from "./RMFSection"
import CTASection from "./CTASection"
import FAQSection from "./FAQSection"

function AITecnologyPage() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <HeroSection/>
      <Intelligence/>
      <OutComebanner/>
      <Technology/>
      <RMFSection/>
      <CTASection/>
      <FAQSection/>
    </div>
  )
}

export default AITecnologyPage
import React from 'react'
import HeroSection from './HeroSection'
import ToolSection from "./ToolSection"
import ProcessSection from './ProcessSection'
import ManagementSection from './ManagementSection'
import SolutionSection from "./SolutionSection"
import FAQSection from './FAQSection'

function ImplementPage() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
        <HeroSection/>
        <ToolSection/>
        <ProcessSection/>
        <ManagementSection/>
        <SolutionSection/>
        <FAQSection/>
    </div>
  )
}

export default ImplementPage
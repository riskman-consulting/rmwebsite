import React from 'react'
import HeroSection from './HeroSection'
import Overview from './Overview'
import Service from './Service'
import CTASection from './CTASection'
import FAQSection from './FAQSection'

function DigitalTransformation() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
        <HeroSection/>
        <Overview/>
        <Service/>
        <CTASection/>
        <FAQSection/>
    </div>
  )
}

export default DigitalTransformation
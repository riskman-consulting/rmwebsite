import { Brain } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-brandDark via-brandPrimary to-brandNavy">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brandAccent/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brandGold/10 rounded-full blur-3xl animate-evaporate"></div>
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl animate-pulse-custom"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="0" cy="0" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl py-20">
            <div className="flex items-center gap-3 mb-6 animate-[fadeInUp_0.8s_ease-out]">
              <Brain className="w-12 h-12 text-brandAccent" />
              <span className="text-lg font-semibold tracking-wider uppercase text-brandAccent">AI-Powered Solutions</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
              Harness AI for Enterprise Risk Mastery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Elevate your risk strategy with RiskMan's AI-driven technology solutions. Achieve precision, foresight, and compliance in a dynamic threat landscape seamlessly integrated for your organization.
            </p>
            <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
              <Link 
                href="#services" 
                className="px-8 py-4 font-semibold transition-all duration-300 rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-2xl hover:shadow-brandAccent/30"
              >
                Explore Our Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-brandNavy hover:-translate-y-1"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

  )
}

export default HeroSection
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import bg from '../../../assets/images/cpa/compliance-audits/hero.png'

function HeroSection() {
  return (
    <section className="relative text-white py-24 lg:py-36 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Dark Base Overlay */}
      <div className="absolute inset-0 bg-brandDark/85" />

      {/* Accent Glow (your original) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary rounded-full blur-[120px] -mr-20 -mt-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandAccent/10 border border-brandAccent/20 text-brandAccent rounded-md text-xs font-bold uppercase mb-6 tracking-widest">
            Strategic Regulatory Oversight
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Strategic Compliance <span className="text-brandAccent">Oversight</span> for Organizations
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            RiskMan ensures Organizations maintain a perfect standing with regulators through rigorous compliance auditing and proactive risk mitigation across all jurisdictions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandLight transition-all shadow-lg">
              <ArrowLeft size={18} /> Return to Services
            </button>

            <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">
              Speak with a Specialist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
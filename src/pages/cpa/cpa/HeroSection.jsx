import { Building2 } from 'lucide-react'
import React from 'react'
import bg from "../../../assets/images/cpa/cpa/hero.png"

function HeroSection() {
  return (
    <section className="relative text-white py-14 md:py-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Dark Base Overlay */}
      <div className="absolute inset-0 bg-brandDark/85" />

      {/* Decorative Icon (your original) */}
      <div className="absolute inset-0 opacity-10">
        <Building2 className="absolute -right-10 bottom-0 w-[500px] h-[500px] text-brandAccent" />
      </div>

      <div className="relative z-10 px-6 lg:px-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest mb-6">
            Institutional Integrity
          </div>

          <h1 className="font-heading text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Advanced Assurance Solutions for <span className="text-brandAccent">Modern Organizations</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            RiskMan delivers high-fidelity assurance frameworks, integrating real-time oversight and rigorous standards to safeguard institutional integrity and enhance stakeholder confidence.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-brandAccent text-brandDark px-10 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-xl">
              Explore Our Services
            </button>

            <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-md font-bold hover:bg-white hover:text-brandDark transition-all">
              Consult Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
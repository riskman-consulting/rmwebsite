import { ArrowLeft, Globe } from 'lucide-react'
import React from 'react'
import bg from "../../../assets/images/data-privacy/gdpr/hero.png"
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigator=useNavigate()
  return (
    <section className="relative py-24 overflow-hidden text-white lg:py-36">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Dark Base */}
      <div className="absolute inset-0 bg-brandDark/85" />

      {/* Texture Overlay (your original) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-300 uppercase border rounded-full bg-brandPrimary/30 border-brandPrimary/50">
            <Globe size={14} className="animate-pulse" /> EU Privacy Standard
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight font-heading lg:text-7xl">
            Global GDPR Governance for <span className="text-brandAccent">Resilient Organizations</span>
          </h1>

          <p className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-300 lg:text-xl">
            Ensure seamless compliance with the EU’s gold standard for privacy through expert consulting, impact assessments, and cross-border transfer strategies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={()=>navigator("/services")} className="flex items-center gap-2 px-8 py-4 font-bold transition-all bg-white rounded-md text-brandDark hover:bg-brandLight">
              <ArrowLeft className="w-4 h-4" /> Back To Main Page
            </button>

            <button onClick={()=>navigator("/contact")} className="px-8 py-4 font-bold transition-all rounded-md bg-brandAccent text-brandDark hover:bg-brandGold">
              Consult A Specialist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
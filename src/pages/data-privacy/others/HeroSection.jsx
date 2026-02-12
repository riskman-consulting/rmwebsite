import { ArrowLeft, Globe2 } from 'lucide-react'
import React from 'react'
import bg from "../../../assets/images/data-privacy/others/hero.png"
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

      {/* Decorative Globe (your original) */}
      <div className="absolute inset-0 opacity-10">
        <Globe2 className="absolute -right-20 top-0 w-[600px] h-[600px] text-brandAccent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-300 uppercase border rounded-full bg-brandPrimary/30 border-brandPrimary/50">
            Multi-Jurisdictional Privacy
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight font-heading lg:text-7xl">
            Unified Compliance for <span className="text-brandAccent">Global Privacy Mandates</span>
          </h1>

          <p className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-300 lg:text-xl">
            Streamline your international regulatory obligations by integrating CCPA, HIPAA, and regional data laws into a single, high-performance privacy management system.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={()=>navigator("/services")} className="flex items-center gap-2 px-8 py-4 font-bold transition-all bg-white rounded-md text-brandDark hover:bg-brandLight">
              <ArrowLeft className="w-4 h-4" /> Back To Main Page 
            </button>

            <button onClick={()=>navigator("/contact")} className="px-8 py-4 font-bold transition-all rounded-md shadow-xl bg-brandAccent text-brandDark hover:bg-brandGold shadow-brandAccent/10">
              Request Global Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
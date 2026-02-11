import { ArrowLeft } from 'lucide-react'
import React from 'react'
import bg from "../../../assets/images/data-privacy/dpdp/hero.png"
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigator = useNavigate()
  return (
    <section className="relative py-24 overflow-hidden text-white lg:py-36">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Dark Base Overlay */}
      <div className="absolute inset-0 bg-brandDark/85" />

      {/* Gradient Overlay (your original intent preserved) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/20 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-tighter uppercase rounded bg-brandAccent text-brandDark">
            DPDP Act 2023 | India Mandate
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight font-heading lg:text-7xl">
            Strategic DPDP Compliance for <span className="text-brandAccent">Indian Operations</span>
          </h1>

          <p className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-300 lg:text-xl">
            Align your enterprise with India’s primary data mandate through automated consent frameworks, fiduciary accountability, and resilient data principal rights management.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => navigator("/services")} className="flex items-center gap-2 px-8 py-4 font-bold transition-all bg-transparent border rounded-md border-white/20 hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" /> Back to Main Page
            </button>

            <button onClick={() => navigator("/contact")} className="px-8 py-4 font-bold transition-all rounded-md shadow-xl bg-brandAccent text-brandDark hover:bg-brandGold shadow-brandAccent/10">
              Connect with Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
import React from 'react'
import bg from "../../../assets/images/data-privacy/data-privacy/hero.png"
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigator=useNavigate()
  return (
    <section className="relative overflow-hidden text-white py-14 md:py-20">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-brandDark/90 dark:bg-bgDark/90 bg-gradient-to-r from-brandDark via-brandDark/80 to-transparent" />

      {/* Accent Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary rounded-full blur-[150px] -mr-48 -mt-48 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brandAccent rounded-full blur-[120px] -ml-20 -mb-20 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto lg:px-20">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 mb-6 border rounded-full border-brandAccent/30 bg-brandAccent/10 backdrop-blur-sm">
            <span className="text-sm font-bold tracking-wider uppercase text-brandAccent">Next-Gen Privacy Control</span>
          </div>
          
          <h1 className="mb-8 text-5xl font-bold leading-tight font-heading lg:text-7xl drop-shadow-lg">
            Strategic Data Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">Governance</span>
          </h1>

          <p className="max-w-2xl mb-12 text-lg leading-relaxed text-gray-200 lg:text-xl drop-shadow-md">
            Empower your enterprise with robust privacy frameworks that transform
            regulatory requirements into a sustainable competitive advantage and
            digital consumer trust.
          </p>

          <div className="flex flex-wrap gap-6">
            <button onClick={()=>navigator("/services")} className="px-10 py-4 font-bold transition-all rounded-full shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold shadow-brandAccent/20 hover:scale-105 active:scale-95">
              View Our Services
            </button>

            <button onClick={()=>navigator("/contact")} className="px-10 py-4 font-bold transition-all border rounded-full border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-brandDark hover:scale-105 active:scale-95">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
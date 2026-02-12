import React from 'react'
import image from "../../../assets/images/cpa/quality-assurance/hero.png"

function HeroSection() {
  return (
    <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
      
      {/* Decorative Glow (your original) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary rounded-full blur-[120px] -mr-32 -mt-32"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content (unchanged) */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandAccent/10 border border-brandAccent/30 text-brandAccent rounded-md text-xs font-bold uppercase mb-6 tracking-widest">
              Peak Operational Performance
            </div>

            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Elevating Standards Through <span className="text-brandAccent">Quality Assurance</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              RiskMan provides Organizations with the validation and oversight necessary to maintain peak operational performance and consistent service delivery across the enterprise.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-brandPrimary text-white px-8 py-4 rounded-md font-bold hover:bg-brandNavy transition-all shadow-lg">
                Discover All Services
              </button>

              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">
                Consult A Quality Lead
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <img
              src={image}
              alt="Quality Assurance"
              className="w-full max-w-xl mx-auto rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
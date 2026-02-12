import { ArrowLeft, Zap } from 'lucide-react'
import React from 'react'
import image from "../../../assets/images/cpa/internal-control/hero.png"

function HeroSection() {
  return (
    <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
      
      {/* Decorative Glow (your original) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandPrimary rounded-full blur-[150px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content (unchanged) */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-brandAccent text-xs font-bold uppercase mb-6 tracking-widest">
              <Zap size={14} className="animate-pulse" /> Operational Excellence
            </div>

            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Optimizing Institutional <span className="text-brandAccent">Control Environments</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
              RiskMan empowers Organizations to identify structural vulnerabilities and implement robust control activities that prevent fraud and enhance operational performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 px-8 py-4 rounded-md font-bold transition-all">
                <ArrowLeft size={18} /> Back To Assurance
              </button>

              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-xl shadow-brandAccent/20">
                Discuss Your Controls
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <img
              src={image}
              alt="Internal Control Environment"
              className="w-full max-w-xl mx-auto rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
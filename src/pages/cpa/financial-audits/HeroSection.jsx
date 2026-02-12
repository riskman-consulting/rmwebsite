import { Scale } from 'lucide-react'
import React from 'react'
import image from "../../../assets/images/cpa/financial-audits/hero.png"

function HeroSection() {
  return (
    <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
      
      {/* Decorative Background (your original) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-brandAccent via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content (unchanged) */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandPrimary/40 border border-brandPrimary text-blue-200 rounded text-xs font-bold uppercase mb-6">
              <Scale size={14} /> Financial Integrity & Accuracy
            </div>

            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Precision In <span className="text-brandAccent">Financial Statement</span> Auditing
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
              RiskMan provides Organizations with comprehensive financial verification, ensuring every disclosure reflects the highest standards of accuracy and regulatory compliance.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-brandPrimary text-white px-8 py-4 rounded-md font-bold hover:bg-brandNavy transition-all border border-brandPrimary shadow-lg">
                View Assurance Suite
              </button>

              <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-md font-bold hover:bg-white hover:text-brandDark transition-all">
                Contact Our Audit Team
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <img
              src={image}
              alt="Financial Audits"
              className="w-full max-w-xl mx-auto rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
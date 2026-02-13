import { Scale } from 'lucide-react'
import React from 'react'
import image from "../../../assets/images/cpa/financial-audits/hero.png"

function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white py-14 md:py-20 bg-brandDark lg:py-28">
      
      {/* Decorative Background (your original) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-brandAccent via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* LEFT: Content (unchanged) */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold text-blue-200 uppercase border rounded bg-brandPrimary/40 border-brandPrimary">
              <Scale size={14} /> Financial Integrity & Accuracy
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight font-heading lg:text-7xl">
              Precision In <span className="text-brandAccent">Financial Statement</span> Auditing
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-gray-300 lg:text-xl">
              RiskMan provides Organizations with comprehensive financial verification, ensuring every disclosure reflects the highest standards of accuracy and regulatory compliance.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 font-bold text-white transition-all border rounded-md shadow-lg bg-brandPrimary hover:bg-brandNavy border-brandPrimary">
                View Assurance Suite
              </button>

              <button className="px-8 py-4 font-bold transition-all border rounded-md border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-brandDark">
                Contact Our Audit Team
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <img
              src={image}
              alt="Financial Audits"
              className="w-full max-w-xl mx-auto shadow-2xl rounded-xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
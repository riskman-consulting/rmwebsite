import { TrendingUp } from 'lucide-react'
import React from 'react'

function CTASection() {
  return (
     <section className="py-20">
        <div className="container">
          <div className="bg-brandGold rounded-3xl p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
             <div className="absolute bottom-0 right-0 opacity-10">
                <TrendingUp size={300} />
             </div>
             <div className="relative z-10 lg:w-2/3 text-center lg:text-left">
                <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brandDark mb-4">Prepare Your Business for the Unexpected</h2>
                <p className="text-brandNavy text-lg font-medium">Build a resilient organization that thrives under pressure with RiskMan’s expert continuity and recovery consulting.</p>
             </div>
             <div className="relative z-10 lg:w-1/3 flex justify-center lg:justify-end">
                <button className="bg-brandDark text-white px-10 py-5 rounded-md font-black text-xl hover:bg-brandNavy transition-all shadow-xl">
                  Start Your Journey
                </button>
             </div>
          </div>
        </div>
      </section>
  )
}

export default CTASection
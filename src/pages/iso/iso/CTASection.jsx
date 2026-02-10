import { AlertOctagon } from 'lucide-react'
import React from 'react'

function CTASection() {
  return (
    <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-brandAccent rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden group shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700"></div>
             <div className="relative z-10">
                <AlertOctagon className="w-16 h-16 mx-auto mb-8 text-brandDark opacity-20" />
                <h2 className="font-heading text-3xl lg:text-6xl font-black text-brandDark mb-6">Secure Your Automotive Partnerships</h2>
                <p className="text-xl text-brandNavy font-medium mb-12 max-w-2xl mx-auto">
                    Don't let non-compliance stall your growth—partner with RiskMan for a streamlined and successful TISAX journey.
                </p>
                <button className="bg-brandDark text-white px-12 py-5 rounded-full font-black text-xl hover:bg-brandNavy transition-all shadow-xl hover:-translate-y-1">
                  Become TISAX Ready
                </button>
             </div>
          </div>
        </div>
      </section>
  )
}

export default CTASection
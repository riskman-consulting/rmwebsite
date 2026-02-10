import { Database, Zap } from 'lucide-react'
import React from 'react'

function Future_ProofSection() {
  return (
     <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-brandLight rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5">
               <Database size={400} />
            </div>
            <div className="max-w-2xl relative z-10">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-brandDark">Future-Proof Your Data Strategy</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Contact RiskMan today to elevate your privacy program from a cost center to a strategic business enabler.
              </p>
              <button className="bg-brandPrimary text-white px-10 py-5 rounded-md font-black text-lg hover:bg-brandNavy transition-all shadow-xl flex items-center gap-3">
                Schedule A Consultation <Zap size={20} className="text-brandAccent" />
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Future_ProofSection
import { AlertCircle } from 'lucide-react'
import React from 'react'

function CTASection() {
  return (
       <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-brandDark rounded-3xl p-12 lg:p-20 text-center text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brandPrimary/20 to-transparent"></div>
            <div className="relative z-10">
              <AlertCircle className="mx-auto mb-6 text-brandAccent opacity-50" size={48} />
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Eliminate Regulatory Uncertainty</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
                Identify and close gaps before they escalate. Secure your license to operate with a professional RiskMan audit.
              </p>
              <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl hover:-translate-y-1">
                Begin Your Compliance Audit
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTASection
import React from 'react'

function CTASection() {
  return (
    <section className="py-20">
        <div className="container">
          <div className="bg-brandDark rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Master Your Risk Landscape</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Partner with RiskMan to build a culture of risk awareness that protects your future and drives organizational performance.
              </p>
              <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all transform hover:-translate-y-1">
                Book Your Audit
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTASection
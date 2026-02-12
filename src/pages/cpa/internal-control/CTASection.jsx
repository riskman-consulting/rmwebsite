import React from 'react'

function CTASection() {
  return (
        <section className="py-20">
        <div className="container text-center">
          <div className="bg-brandPrimary rounded-3xl p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Build A Resilient Organization</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
              Secure your operational foundations today. Partner with RiskMan for sophisticated audit and control frameworks.
            </p>
            <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl">
              Discuss Your Controls
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTASection
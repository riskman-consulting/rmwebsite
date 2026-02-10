import React from 'react'

function CTASection() {
  return (
     <section className="py-20">
        <div className="container">
          <div className="bg-brandPrimary rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Future-Proof Your AI Initiatives</h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Implement a robust AI Management System with RiskMan and lead your industry in responsible and secure innovation.
              </p>
              <button className="bg-brandGold text-brandDark px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-lg shadow-black/20">
                Request AI Insights
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTASection
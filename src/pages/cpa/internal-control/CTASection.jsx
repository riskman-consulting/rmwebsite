import React from 'react'
import { useNavigate } from 'react-router-dom'

function CTASection() {
  const navigate = useNavigate()
  return (
    <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container text-center">
          <div className="bg-brandPrimary rounded-2xl p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Build A Resilient Organization</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
              Secure your operational foundations today. Partner with RiskMan for sophisticated audit and control frameworks.
            </p>
            <button onClick={() => navigate("/contact")} className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl">
              Discuss Your Controls
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTASection
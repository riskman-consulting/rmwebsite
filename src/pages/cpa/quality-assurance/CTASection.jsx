import React from 'react'
import { useNavigate } from 'react-router-dom'

function CTASection() {
  const navigate = useNavigate()
  return (
    <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <div className="bg-brandDark rounded-2xl p-12 lg:p-24 text-center text-white relative shadow-2xl overflow-hidden border-t-8 border-brandAccent">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Commit To Excellence</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
              Partner with RiskMan to embed a culture of high-quality execution into the DNA of your organization.
            </p>
            <button onClick={() => navigate("/contact")} className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl hover:-translate-y-1">
              Optimize Your Quality Standards
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTASection
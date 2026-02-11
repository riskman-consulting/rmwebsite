import React from 'react'
import { useNavigate } from 'react-router-dom'

function CTASection() {
  const navigator=useNavigate()
  return (
        <section className="py-20">
        <div className="container">
          <div className="bg-brandPrimary rounded-[3rem] p-12 lg:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-brandAccent/20 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold font-heading lg:text-6xl">Simplify Your International Compliance</h2>
              <p className="max-w-2xl mx-auto mb-12 text-xl text-blue-100">
                Turn global regulatory fragmentation into a unified business advantage with RiskMan’s cross-border privacy expertise.
              </p>
              <button onClick={()=>navigator("/contact")} className="px-12 py-5 text-xl font-black transition-all rounded-md shadow-xl bg-brandGold text-brandDark hover:scale-105">
                Start Your Global Roadmap
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTASection
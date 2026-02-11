import React from 'react'
import { useNavigate } from 'react-router-dom'



function CTASection() {
  const navigator=useNavigate()
  return (
     <section className="py-20 bg-white">
        <div className="container">
          <div className="relative p-12 overflow-hidden text-center border-2 shadow-2xl bg-brandAccent rounded-3xl lg:p-20 text-brandDark border-brandGold">
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-black tracking-tight uppercase font-heading lg:text-5xl">Secure Your Fiduciary Status</h2>
              <p className="max-w-2xl mx-auto mb-10 text-xl font-medium opacity-80">
                Ensure Seamless DPDP Adherence. Partner with RiskMan to transform regulatory complexity into a streamlined, compliant ecosystem.
              </p>
              <button onClick={()=>navigator("/contact")} className="px-12 py-5 text-xl font-black text-white transition-all rounded-md shadow-xl bg-brandDark hover:bg-brandNavy">
                Request A Compliance Gap Analysis
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTASection
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CtaSection() {
  const navigator = useNavigate()
  return (
    <section className="container py-20">
        <div className="flex flex-col items-center justify-between p-10 bg-brandGold rounded-3xl lg:p-16 lg:flex-row text-brandDark">
          <div className="mb-10 lg:max-w-xl lg:mb-0">
            <h2 className="mb-4 text-3xl italic font-bold font-heading md:text-4xl">Give Your Customers’ Auditors Fewer Reasons to Say No</h2>
            <p className="font-medium text-brandDark/80">Use SOC 1 to prove that the financial processes you run for customers are controlled, tested, and reliable.</p>
          </div>
          <button onClick={()=>navigator("/contact")} className="px-10 py-5 text-lg font-extrabold text-white transition-all shadow-xl bg-brandDark hover:bg-brandNavy rounded-xl whitespace-nowrap">
            Request SOC 1 Assessment
          </button>
        </div>
      </section>
  )
}

export default CtaSection
import React from 'react'

function CtaSection() {
  return (
    <section className="py-20 container">
        <div className="bg-brandGold rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-brandDark">
          <div className="lg:max-w-xl mb-10 lg:mb-0">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 italic">Give Your Customers’ Auditors Fewer Reasons to Say No</h2>
            <p className="text-brandDark/80 font-medium">Use SOC 1 to prove that the financial processes you run for customers are controlled, tested, and reliable.</p>
          </div>
          <button className="bg-brandDark text-white hover:bg-brandNavy px-10 py-5 rounded-xl font-extrabold text-lg transition-all shadow-xl whitespace-nowrap">
            Request SOC 1 Assessment
          </button>
        </div>
      </section>
  )
}

export default CtaSection
import React from 'react'

function CtaSection() {
  return (
    <section className="py-20 container">
        <div className="bg-brandGold rounded-[2.5rem] p-10 lg:p-20 text-center text-brandDark shadow-2xl">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-6">Turn SOC from Obligation into Advantage</h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
            Use SOC reports not just to pass audits, but to strengthen trust, unlock deals, and support strategic growth.
          </p>
          <button className="bg-brandDark text-white hover:bg-brandNavy px-12 py-5 rounded-full font-black text-lg transition-all shadow-xl hover:scale-105 transform">
            Discuss Your SOC Roadmap
          </button>
        </div>
      </section>
  )
}

export default CtaSection
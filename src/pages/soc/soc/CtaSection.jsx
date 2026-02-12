import React from 'react'
import { Link } from 'react-router-dom'

function CtaSection() {

  return (
    <section className="container py-20">
        <div className="bg-brandGold rounded-[2.5rem] p-10 lg:p-20 text-center text-brandDark shadow-2xl">
          <h2 className="mb-6 text-3xl font-extrabold font-heading md:text-5xl">Turn SOC from Obligation into Advantage</h2>
          <p className="max-w-2xl mx-auto mb-10 text-xl font-medium opacity-80">
            Use SOC reports not just to pass audits, but to strengthen trust, unlock deals, and support strategic growth.
          </p>
          <Link to="/contact" className="px-6   py-5 text-sm md:text-lg font-black text-white transition-all transform rounded-full shadow-xl bg-brandDark hover:bg-brandNavy hover:scale-105">
            Discuss Your SOC Roadmap
          </Link>
        </div>
      </section>
  )
}

export default CtaSection
import React from 'react'

function CTASection() {
  return (
    <section className="py-20 text-white bg-brandNavy dark:bg-brandDark">
        <div className="container px-5 mx-auto text-center sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-5xl">Ready to Future-Proof Your Business? </h2>
          <p className="mb-10 text-xl opacity-90">Partner with RiskMan to bridge the gap between strategy and execution. </p>
          <button className="px-12 py-4 font-bold transition-transform transform rounded-full bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </section>
  )
}

export default CTASection
import React from 'react'

function CTASection() {
  return (
     <section className="py-20 text-center">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl">Ready to Elevate Your Strategy?</h2>
          <p className="mb-10 text-xl opacity-80">Bridge the execution gap with RiskMan's governance-driven expertise.</p>
          <button className="px-12 py-4 font-bold transition-transform rounded-md shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
  )
}

export default CTASection
import React from 'react'

function CTASection() {
  return (
      <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandAccent/20 blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandGold/15 blur-3xl animate-pulse-custom"></div>
        </div>

        <div className="container relative z-10 px-6 text-center lg:px-20">
          <h2 className="mb-6 text-4xl font-bold text-white font-heading md:text-5xl lg:text-6xl">
            Secure Your Financial Future
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
            Strengthen your corporate governance and mitigate risks with RiskMan's specialized SOX, ICOFR, and IFC service offerings.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-5 text-lg font-bold transition-all duration-300 rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandAccent/40"
          >
            Send Us an Enquiry
          </a>
        </div>
      </section>
  )
}

export default CTASection
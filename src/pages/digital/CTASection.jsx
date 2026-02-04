import React from "react"

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-brandDark dark:bg-brandNavy rounded-[2.5rem] overflow-hidden relative shadow-2xl p-10 md:p-20 text-center">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent opacity-10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandPrimary opacity-10 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Future-Proof Your Business?
            </h2>
            <p className="mb-10 text-lg text-white/70">
              Partner with RiskMan to bridge the gap between strategy and
              execution.
            </p>
            <button className="px-10 py-4 text-lg font-bold transition-all rounded-full bg-brandAccent text-brandDark hover:shadow-lg hover:shadow-brandAccent/20 hover:-translate-y-1 active:scale-95">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

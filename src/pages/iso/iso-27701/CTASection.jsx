import React from 'react'

function CTASection() {
  return (
    <section className="py-20">
        <div className="container">
          <div className="bg-brandDark rounded-[2rem] p-8 lg:p-16 text-center text-white border border-brandAccent/20 relative shadow-2xl">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Protect Your Data Subjects Today</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Let RiskMan guide your organization through the complexities of international privacy management and ISO 27701 certification.
            </p>
            <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-lg hover:bg-brandGold transition-all transform hover:scale-105">
              Secure Your Quote
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTASection
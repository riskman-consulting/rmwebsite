import React from 'react'

function CTASection() {
  return (
    <section className="py-16">
        <div className="container">
          <div className="bg-brandPrimary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent opacity-10 rounded-full -mr-20 -mt-20"></div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Secure Your Competitive Edge Today</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Partner with RiskMan to transform your compliance requirements into a strategic and sustainable business advantage.
            </p>
            <button className="bg-brandAccent text-brandDark px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTASection
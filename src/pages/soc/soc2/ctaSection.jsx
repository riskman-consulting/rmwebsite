import React from 'react'

function ctaSection() {
  return (
     <section className=" py-14 md:py-20 container px-6 lg:px-20">
        <div className="bg-brandPrimary rounded-[2.5rem] p-10 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Make SOC 2 A Growth Enabler, Not A Checkbox</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Use SOC 2 to remove security as a sales blocker and position your service as a low-risk, high-trust choice.
            </p>
            <button className="bg-brandGold hover:bg-brandAccent text-brandDark px-10 py-5 rounded-full font-extrabold text-lg transition-all transform hover:scale-105 shadow-2xl">
              Schedule SOC 2 Strategy Call
            </button>
          </div>
          {/* Abstract background circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brandNavy/40 rounded-full translate-x-1/4 translate-y-1/4" />
        </div>
      </section>
  )
}

export default ctaSection
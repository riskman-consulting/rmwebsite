import React from 'react'

function HeroSection() {
  return (
   <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandPrimary rounded-full blur-[120px] -mr-48 -mt-48"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Strategic Data Privacy <span className="text-brandAccent">Governance</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Empower your enterprise with robust privacy frameworks that transform regulatory requirements into a sustainable competitive advantage and digital consumer trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all shadow-lg shadow-brandAccent/10">View Our Services</button>
              <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-md font-bold hover:bg-white hover:text-brandDark transition-all">Contact Our Experts</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
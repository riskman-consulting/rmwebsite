import React from 'react'
import { internationalMarkets } from './data'

function InternationalSection() {
  return (
     <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Emerging International Markets</h2>
            <p className="text-gray-600">Enter new markets without being stalled by localized requirements.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {internationalMarkets.map((market, i) => (
              <div key={i} className="text-center p-10 bg-brandLight rounded-3xl border border-transparent hover:border-brandPrimary transition-all group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-brandPrimary group-hover:text-white transition-colors">
                  {market.icon}
                </div>
                <h4 className="font-bold text-xl mb-3 text-brandDark">{market.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{market.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default InternationalSection
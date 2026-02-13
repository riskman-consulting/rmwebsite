import { Megaphone } from 'lucide-react'
import React from 'react'

function SupportSection() {
  return (
     <section className="py-14 md:py-20 bg-brandNavy text-white overflow-hidden">
        <div className="container px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brandGold/20 rounded-full blur-3xl" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 relative">How SOC 3 Supports <br/><span className="text-brandGold">Go-To-Market</span></h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A SOC 3 seal or report on your website, trust center, and sales materials reduces early-stage security friction and reassures potential customers before formal due diligence. It becomes an easy, visible shorthand for independently tested controls.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-6">
              <Megaphone className="text-brandGold h-8 w-8" />
              <span className="font-bold text-xl uppercase tracking-widest">Sales Enablement</span>
            </div>
            <ul className="space-y-4">
              {['Speed up RFP pre-screening', 'Easy attachment for investor decks', 'Publicly verifiable trust signal'].map((li, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-200">
                  <div className="h-1.5 w-1.5 bg-brandGold rounded-full" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  )
}

export default SupportSection
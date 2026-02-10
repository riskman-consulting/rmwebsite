import React from 'react'
import { outcomes } from './data'

function HighSection() {
  return (
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">High-Value Privacy Outcomes</h2>
              <p className="text-gray-400">Move beyond checklist compliance to create an evidence-based privacy culture that mitigates risk.</p>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-3 gap-6">
              {outcomes.map((outcome, i) => (
                <div key={i} className="p-8 bg-surfaceDark border border-white/5 rounded-2xl hover:border-brandAccent transition-colors">
                  <div className="text-brandAccent mb-4">{outcome.icon}</div>
                  <h4 className="font-bold mb-2">{outcome.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{outcome.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default HighSection
import React from 'react'
import { pillars } from './data'

function PillarsSection() {
  return (
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Resilience Framework Pillars</h2>
            <p className="text-gray-600">A successful Business Continuity Management System (BCMS) relies on proactive planning and a deep understanding of critical operations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((item, index) => (
              <div key={index} className="flex gap-6 p-8 border border-borderLight rounded-2xl hover:bg-brandLight transition-all group">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-brandPrimary transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PillarsSection
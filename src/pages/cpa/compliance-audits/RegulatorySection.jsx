import React from 'react'
import { landscapeMapping } from './data'

export default function RegulatorySection() {
  return (
     <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Regulatory Landscape Mapping</h2>
            <p className="text-gray-600 text-lg">Organizations must navigate a dense web of overlapping regulations that vary by industry and geographic location.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {landscapeMapping.map((item, idx) => (
              <div key={idx} className="p-8 border border-borderLight rounded-2xl hover:border-brandPrimary transition-all bg-surfaceLight">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

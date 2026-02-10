import React from 'react'
import { framework } from './data'

function FrameworkSection() {
  return (
    <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">The Risk Management Framework</h2>
            <p className="text-gray-600">A systematic approach to identifying threats and converting them into actionable business intelligence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {framework.map((item, index) => (
              <div key={index} className="p-8 rounded-2xl border border-borderLight hover:border-brandAccent transition-all hover:shadow-lg bg-surfaceLight group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-heading text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FrameworkSection
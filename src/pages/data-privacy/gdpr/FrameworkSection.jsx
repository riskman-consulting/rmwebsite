import React from 'react'
import { frameworks } from './data'

function FrameworkSection() {
  return (
       <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Advanced Regulatory Frameworks</h2>
            <p className="text-gray-600">Organizations operating within the EEA must adhere to a "high-water mark" of privacy demanding continuous monitoring.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((item, idx) => (
              <div key={idx} className="p-10 border border-borderLight rounded-2xl hover:border-brandAccent transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-brandAccent group-hover:h-full transition-all duration-300"></div>
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

export default FrameworkSection
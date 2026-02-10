import React from 'react'
import { pillars } from './data'


function PillarsSection() {
  return (
    <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">AI Management Pillars</h2>
            <p className="text-gray-600">Managing Artificial Intelligence requires a specialized framework that addresses the unique risks, transparency needs, and ethical considerations of the technology.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, index) => (
              <div key={index} className="p-8 bg-white border border-borderLight rounded-2xl hover:shadow-2xl transition-all border-b-4 hover:border-b-brandAccent">
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

export default PillarsSection
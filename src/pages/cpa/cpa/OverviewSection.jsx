import { ArrowRight } from 'lucide-react'
import React from 'react'
import { services } from './data'

function OverviewSection() {
  return (
       <section className="py-14 md:py-20 bg-white">
        <div className="container px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Integrated Service Overview</h2>
            <p className="text-gray-600">A holistic ecosystem of assurance services designed to mitigate complexity and fortify corporate governance across all operational layers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col p-8 border border-borderLight rounded-2xl hover:border-brandPrimary transition-all bg-surfaceLight group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-heading text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <button className="flex items-center gap-2 text-brandPrimary font-bold text-xs uppercase tracking-tighter hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OverviewSection
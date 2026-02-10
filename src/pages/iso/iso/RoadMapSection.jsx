import { Zap } from 'lucide-react'
import React from 'react'
import { roadmap } from './data'

function RoadMapSection() {
  return (
    <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">The TISAX Process Roadmap</h2>
            <p className="text-gray-600">Navigating the automotive security landscape requires a dedicated focus on assessment mechanisms and industry-specific protocols.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((item, index) => (
              <div key={index} className="relative group">
                <div className="p-8 bg-brandLight rounded-2xl h-full border border-transparent hover:border-brandAccent transition-all hover:bg-white hover:shadow-xl">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 z-20 text-brandAccent/30">
                    <Zap size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default RoadMapSection
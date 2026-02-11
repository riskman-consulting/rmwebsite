import React from 'react'
import { stateFrameworks } from './data'

function FrameworksSection() {
  return (
       <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">US State Privacy Frameworks</h2>
            <p className="text-gray-600">Navigate a patchwork of state-level laws, starting with the foundational requirements of California’s privacy statutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stateFrameworks.map((item, idx) => (
              <div key={idx} className="p-8 border border-borderLight rounded-2xl hover:border-brandAccent transition-all hover:bg-brandLight group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FrameworksSection
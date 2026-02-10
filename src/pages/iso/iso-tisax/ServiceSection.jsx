import { ArrowRight } from 'lucide-react'
import React from 'react'
import { services } from './data'
import { useNavigate } from 'react-router-dom'

function ServiceSection() {
    const navigator = useNavigate()
  return (
     <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Comprehensive Compliance Solutions</h2>
            <p className="text-gray-600">RiskMan provides a suite of specialized services designed to fortify your security posture and meet stringent international standards.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div key={index} className="p-8 border border-borderLight rounded-xl hover:shadow-xl transition-shadow bg-surfaceLight group">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-brandPrimary transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.desc}</p>
                <button onClick={()=>navigator(item.path)} className="flex items-center text-brandPrimary font-bold text-sm hover:gap-2 transition-all">
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ServiceSection
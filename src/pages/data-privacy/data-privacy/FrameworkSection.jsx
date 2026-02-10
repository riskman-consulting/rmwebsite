import React from 'react'
import { complianceCards } from './data'
import { ArrowRight } from 'lucide-react'

function FrameworkSection() {
  return (
     <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Integrated Compliance Frameworks</h2>
            <p className="text-gray-600">A unified approach to privacy, ensuring Organizations remain resilient across multiple legal jurisdictions and evolving technological landscapes.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {complianceCards.map((card, i) => (
              <div key={i} className="flex flex-col p-8 rounded-2xl border border-borderLight hover:border-brandAccent transition-all hover:shadow-2xl bg-surfaceLight group">
                <div className="mb-4 flex justify-between items-start">
                  <div className="p-3 bg-brandLight rounded-xl">{card.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brandPrimary bg-brandPrimary/10 px-2 py-1 rounded">{card.tag}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{card.desc}</p>
                <button className="flex items-center gap-2 text-brandPrimary font-bold text-sm hover:translate-x-1 transition-transform">
                  LEARN MORE <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FrameworkSection
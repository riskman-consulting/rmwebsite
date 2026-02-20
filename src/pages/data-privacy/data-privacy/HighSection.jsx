import React from 'react'
import { outcomes } from './data'
import highValueBg from '../../../assets/images/data-privacy/data-privacy/high-value-bg.jpg'

function HighSection() {
  return (
      <section className="relative py-14 md:py-20 bg-brandNavy dark:bg-bgDark text-white overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${highValueBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/90 to-brandDark/95 dark:from-bgDark/90 dark:to-black/95" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">High-Value Privacy Outcomes</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Move beyond checklist compliance to create an evidence-based privacy culture that mitigates risk and drives business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, i) => (
              <div key={i} className="group relative p-8 bg-surfaceDark/50 dark:bg-surfaceDark/30 backdrop-blur-md border border-white/10 rounded-3xl hover:border-brandAccent/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandAccent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brandPrimary/30 flex items-center justify-center text-brandAccent mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    {outcome.icon}
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-4 group-hover:text-brandAccent transition-colors">{outcome.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{outcome.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default HighSection
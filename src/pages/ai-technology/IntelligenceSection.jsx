import React from 'react'
import { aiFeatures } from './data'

function IntelligenceSection() {
  return (
    
    <section id="services" className="py-20 bg-white dark:bg-surfaceDark">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
              AI-Powered Risk Intelligence
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Transform raw data into strategic foresight with RiskMan's AI ecosystem, empowering CXOs to lead with precision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((feature, index) => (
              <div 
                key={index}
                className="relative p-8 overflow-hidden transition-all duration-500 border shadow-sm group bg-gradient-to-br from-white to-gray-50 dark:from-surfaceDark dark:to-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-3"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-brandAccent/5 to-brandPrimary/5 group-hover:opacity-100"></div>
                
                {/* Top Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 transition-all duration-500 rounded-bl-full bg-gradient-to-br from-brandAccent/20 to-transparent group-hover:w-32 group-hover:h-32"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 shadow-lg bg-gradient-to-br from-brandPrimary to-brandAccent rounded-xl group-hover:scale-110 group-hover:rotate-6">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default IntelligenceSection
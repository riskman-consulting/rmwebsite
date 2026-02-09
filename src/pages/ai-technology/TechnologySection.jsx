import React from 'react'
import { techFeatures } from './data'

function TechnologySection() {
  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
              Advanced Technology Integration
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Embed cutting-edge tech into your risk framework with RiskMan, driving agility and resilience for global enterprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {techFeatures.map((feature, index) => (
              <div 
                key={index}
                className="relative p-8 overflow-hidden transition-all duration-500 bg-white border group dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl"
              >
                {/* Left Accent Bar */}
                <div className="absolute top-0 bottom-0 left-0 w-1 transition-transform duration-500 origin-top transform scale-y-0 bg-gradient-to-b from-brandAccent to-brandGold group-hover:scale-y-100"></div>

                {/* Icon */}
                <div className="flex items-center justify-center mb-6 transition-all duration-300 w-14 h-14 bg-gradient-to-br from-brandAccent/20 to-brandGold/20 rounded-xl group-hover:scale-110">
                  <div className="text-brandPrimary dark:text-brandAccent">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default TechnologySection
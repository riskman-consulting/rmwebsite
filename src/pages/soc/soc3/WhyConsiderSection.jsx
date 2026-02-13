import { Award, Globe, Layers, UserCheck } from 'lucide-react'
import React from 'react'

function WhyConsiderSection() {
  return (
    
    <section className=" py-14 md:py-20 container px-6 lg:px-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Why Should Organizations Consider SOC 3?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: <Award className="text-brandGold" />, title: "Market Maturity", text: "Demonstrate control maturity to customers who may not request detailed reports." },
            { icon: <Globe className="text-brandPrimary dark:text-brandGold" />, title: "Brand Positioning", text: "Strengthen brand positioning as a transparent, well-governed provider." },
            { icon: <UserCheck className="text-brandPrimary dark:text-brandGold" />, title: "Quick Assurance", text: "Provide quick assurance to partners, investors, and non-technical stakeholders." },
            { icon: <Layers className="text-brandPrimary dark:text-brandGold" />, title: "Secure Disclosure", text: "Complement SOC 1/SOC 2 without oversharing sensitive information." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 p-8 rounded-2xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default WhyConsiderSection
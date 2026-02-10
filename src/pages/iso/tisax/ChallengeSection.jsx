import React from 'react'
import { challenges } from './data'

function ChallengeSection() {
  return (
     <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Addressing TISAX Challenges</h2>
            <p className="text-gray-600">RiskMan helps organizations overcome the common hurdles associated with automotive security assessments through expert resource allocation.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {challenges.map((challenge, i) => (
              <div key={i} className="p-10 rounded-3xl bg-brandLight border border-borderLight text-center hover:bg-white hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-brandNavy rounded-full flex items-center justify-center mx-auto mb-6">
                  {challenge.icon}
                </div>
                <h4 className="font-heading text-xl font-bold mb-4">{challenge.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ChallengeSection
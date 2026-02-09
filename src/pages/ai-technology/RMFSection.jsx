import React from 'react'
import { nistFramework } from './data'

function RMFSection() {
  return (
    <section className="py-20 bg-white dark:bg-surfaceDark">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-brandAccent/10">
              <span className="text-sm font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">NIST-Aligned Framework</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
              AI Risk Management Framework (NIST-Aligned)
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              RiskMan operationalizes NIST AI RMF for trustworthy deployments, delivering compliance and innovation for CXO strategies.
            </p>
          </div>

          <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {nistFramework.map((item, index) => (
              <div 
                key={index}
                className="relative p-6 transition-all duration-300 border-2 group bg-gradient-to-br from-white to-gray-50 dark:from-surfaceDark dark:to-bgDark rounded-xl border-borderLight dark:border-borderDark hover:border-brandAccent hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-transform duration-300 rounded-lg bg-gradient-to-br from-brandPrimary to-brandAccent group-hover:scale-110">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-brandAccent/10 to-brandGold/10 rounded-2xl">
              <h3 className="mb-3 text-2xl font-bold font-heading md:text-3xl text-brandDark dark:text-white">
                Proven Impact
              </h3>
              <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Mitigate vulnerabilities, build trust, and accelerate innovation with audit-ready, NIST-validated AI risk mastery.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default RMFSection
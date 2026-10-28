import React from 'react'
import { fieldwork } from './data'

function TestingSection() {
  return (
    <section className="py-16 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Advanced Fieldwork & Testing</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">We use data analytics to test transactions in greater depth and in less time than manual sampling allows.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {fieldwork.map((field, i) => (
              <div key={i} className="h-full bg-white dark:bg-surfaceDark p-10 rounded-2xl border border-borderLight dark:border-borderDark shadow-sm hover:border-brandPrimary transition-all group">
                <div className="w-12 h-12 bg-brandPrimary/10 text-brandPrimary rounded-lg flex items-center justify-center mb-6 group-hover:bg-brandPrimary group-hover:text-white transition-all">
                  {field.icon}
                </div>
                <h4 className="font-heading text-xl font-bold mb-3">{field.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{field.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TestingSection
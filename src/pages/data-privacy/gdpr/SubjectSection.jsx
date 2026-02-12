import React from 'react'
import { rights } from './data'

function SubjectSection() {
  return (
     <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Data Subject Rights Management</h2>
            <p className="text-gray-600">Highly responsive and automated internal infrastructure for rights fulfillment.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {rights.map((right, i) => (
              <div key={i} className="text-center p-8 bg-brandLight rounded-3xl border border-transparent hover:border-brandPrimary transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {right.icon}
                </div>
                <h4 className="font-bold text-xl mb-3 text-brandDark">{right.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{right.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default SubjectSection
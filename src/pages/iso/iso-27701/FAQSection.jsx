import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { faqs } from './data'

function FAQSection() {
    const [activeFaq, setActiveFaq] = useState()
  return (
    <section className="py-20 bg-brandLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">Privacy Compliance FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-borderLight">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="pr-8">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 animate-fadeIn">
                    <div className="pt-4 border-t border-gray-100">{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQSection
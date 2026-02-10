import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { faqs } from './data'

function FAQSection() {
    const [activeFaq, setActiveFaq] = useState(null);
  return (
      <section className="py-20 bg-brandLight">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-heading text-3xl font-bold shrink-0">TISAX Knowledge Base</h2>
            <div className="h-px bg-brandPrimary/20 w-full"></div>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandNavy">{faq.q}</span>
                  <div className={`p-1 rounded-full transition-colors ${activeFaq === idx ? 'bg-brandAccent text-brandDark' : 'bg-gray-100'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 animate-fadeIn">
                    {faq.a}
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
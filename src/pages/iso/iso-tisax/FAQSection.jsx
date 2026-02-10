import React, { useState } from 'react'
import { faqs } from './data'
import { ChevronDown } from 'lucide-react'

function FAQSection() {
    const [activeFaq, setActiveFaq] = useState(null);
  return (
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-borderLight rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 bg-gray-50 text-gray-600 border-t border-borderLight animate-fadeIn">
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
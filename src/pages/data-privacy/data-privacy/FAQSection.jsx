import { ChevronDown, HelpCircle } from 'lucide-react'
import React, { useState } from 'react'
import { faqs } from './data'

function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(0); // Open first one by default

  return (
     <section className="py-14 md:py-20 bg-bgLight dark:bg-bgDark transition-colors duration-300">
        <div className="container max-w-4xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brandAccent/10 text-brandAccent mb-4">
              <HelpCircle size={24} />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-brandDark dark:text-white mb-4">Privacy Governance FAQ</h2>
            <p className="text-gray-600 dark:text-gray-400">Common questions about our compliance frameworks and services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeFaq === idx 
                    ? 'bg-white dark:bg-surfaceDark border-brandAccent shadow-lg' 
                    : 'bg-white dark:bg-surfaceDark/50 border-borderLight dark:border-borderDark hover:border-brandPrimary/30'
                }`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${
                    activeFaq === idx ? 'text-brandPrimary dark:text-brandAccent' : 'text-brandDark dark:text-white'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeFaq === idx ? 'bg-brandAccent text-brandDark rotate-180' : 'bg-brandLight dark:bg-white/10 text-gray-500'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <div className={`grid transition-all duration-300 ease-in-out ${
                  activeFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-dashed border-gray-100 dark:border-white/10 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  )
}

export default FAQSection
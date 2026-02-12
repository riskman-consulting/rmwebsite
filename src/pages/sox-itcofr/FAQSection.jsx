import React, { useState } from 'react'
import { faqs } from './data'
import { ChevronDown } from 'lucide-react'

function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-20 bg-white dark:bg-surfaceDark">
      <div className="container px-6 lg:px-20">

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl md:text-5xl font-heading text-brandDark dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white border rounded-xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-xl"
            >

              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors duration-300 sm:px-8 hover:bg-bgLight dark:hover:bg-bgDark/50"
              >
                <span className="pr-4 text-base font-semibold sm:text-lg md:text-xl font-heading text-brandDark dark:text-white">
                  {faq.question}
                </span>

                <div className={`flex-shrink-0 w-8 h-8 rounded-full
                                 bg-gradient-to-br from-brandAccent to-brandPrimary
                                 flex items-center justify-center
                                 transition-transform duration-300
                                 ${openFaq === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-white" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out
                            ${openFaq === index
                              ? 'grid-rows-[1fr] opacity-100'
                              : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 sm:px-8">
                    <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                      {faq.answer}
                    </p>
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
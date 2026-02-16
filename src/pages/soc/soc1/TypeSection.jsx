import React from 'react'

function TypeSection() {
  return (
    <section className=" py-14 md:py-20 bg-bgLight dark:bg-bgDark">
        <div className="container px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-0 border border-borderLight dark:border-borderDark rounded-3xl overflow-hidden shadow-xl">
            <div className="p-10 bg-surfaceLight dark:bg-surfaceDark border-r border-borderLight dark:border-borderDark">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold font-heading">Type I</h3>
                <span className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-brandDark rounded-full">Point in Time</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Independent opinion on control design accuracy at a specific date. Useful for initial baseline assessments.</p>
            </div>
            <div className="p-10 bg-brandPrimary text-white relative">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold font-heading">Type II</h3>
                <span className="text-xs font-bold px-3 py-1 bg-white/20 rounded-full">6–12 Month Period</span>
              </div>
              <p className="text-white/80">Opinion on design and operating effectiveness over time. This is the <strong>market expectation</strong> for mature providers.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TypeSection
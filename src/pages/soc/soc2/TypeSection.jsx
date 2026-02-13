import { Clock, Shield } from 'lucide-react'
import React from 'react'

function TypeSection() {
  return (
    <section className="py-14 md:py-20 container px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-2 border-brandPrimary/20 dark:border-brandGold/20">
            <h3 className="font-heading text-2xl font-bold mb-4 flex items-center">
              <Clock className="mr-3 text-brandPrimary dark:text-brandGold" /> SOC 2 Type I
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Snapshot of control design at a specific date.</p>
            <span className="inline-block py-1 px-4 bg-gray-100 dark:bg-brandDark rounded-full text-xs font-bold">First Milestone</span>
          </div>
          <div className="p-10 rounded-3xl bg-brandPrimary text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <Shield className="h-16 w-16 opacity-10 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-3 text-brandGold" /> SOC 2 Type II
            </h3>
            <p className="text-white/80 mb-4">Evidence of design and operating effectiveness over 6–12 months.</p>
            <span className="inline-block py-1 px-4 bg-brandGold text-brandDark rounded-full text-xs font-bold">Market Standard</span>
          </div>
        </div>
        <p className="mt-10 text-center text-gray-500 italic">Many growing companies start with Type I and progress quickly to Type II.</p>
      </section>
  )
}

export default TypeSection
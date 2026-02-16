import { BarChart } from 'lucide-react'
import React from 'react'

function WhenItSection() {
  return (
    
     <section className=" py-14 md:py-20 bg-brandLight dark:bg-brandDark/50">
        <div className="container px-6 lg:px-12">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">When SOC 3 Adds Most Value</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            {[
              "High-volume digital products where detailed reports are impractical.",
              "Markets where buyers lack formal security review teams but expect governance.",
              "Brand-building efforts focused on trust and responsible data handling."
            ].map((text, i) => (
              <div key={i} className="flex-1 p-8 bg-surfaceLight dark:bg-surfaceDark rounded-2xl shadow-sm border border-borderLight dark:border-borderDark flex items-start space-x-4">
                <BarChart className="text-brandPrimary dark:text-brandGold flex-shrink-0" />
                <p className="font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhenItSection
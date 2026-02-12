import React from 'react'
import contact from "../../assets/images/hero-section/contact/contact.png"

function HeroSection() {
  return (
     <section className="relative isolate min-h-[70vh] flex items-center justify-center section-padding overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-bgLight/70 via-bgLight/60 to-bgLight/50 dark:from-bgDark/70 dark:via-bgDark/60 dark:to-bgDark/50" />
              <img
                src={contact}
                alt="Contact Us - Modern Office"
                className="object-cover object-top w-full h-full"
              />
            </div>
     
            <div className="container relative z-10 max-w-6xl mx-auto">
              <div className="text-center">
                <p className="mb-4 text-lg font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">
                  Get in Touch
                </p>
     
                <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white">
                  Contact
                  <br />
                  <span className="text-brandPrimary dark:text-brandAccent">
                    Our Team
                  </span>
                </h1>
     
                <p className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-brandNavy dark:text-gray-400">
                  Ready to strengthen your business resilience? Let's discuss your unique challenges and craft tailored solutions
                </p>
              </div>
            </div>
          </section>
  )
}

export default HeroSection
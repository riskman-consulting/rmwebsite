import React from "react"

const offerings = [
  {
    title: "Strategic PMO",
    description:
      "Establish rigorous governance and risk control across the entire project lifecycle to ensure milestone-driven success.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V22"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        />
      </svg>
    )
  },
  {
    title: "Implementation Excellence",
    description:
      "Accelerate value realization through optimized digital tools, process re-engineering, and seamless data migration.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    )
  },
  {
    title: "Support Services",
    description:
      "Sustain long-term performance through structured change management, comprehensive user testing, and post-launch hypercare.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    )
  }
]

const Offerings = () => {
  return (
    <section
      id="services"
      className="py-24 bg-surfaceLight dark:bg-surfaceDark"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl text-brandDark dark:text-brandLight">
            Explore Our Core Digital Transformation Offerings
          </h2>
          <p className="text-lg text-brandNavy/70 dark:text-brandLight/70">
            RiskMan Consulting bridges the gap between strategy and execution
            through governance-led PMO, implementation excellence, and
            comprehensive support. The services we offer are the following:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className="p-8 transition-all border group bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandAccent hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent rounded-xl group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-brandLight">
                {item.title}
              </h3>
              <p className="mb-8 leading-relaxed text-brandNavy/70 dark:text-brandLight/60">
                {item.description}
              </p>
              <a
                href={`#${item.title.toLowerCase().replace(" ", "-")}`}
                className="inline-flex items-center font-bold transition-all text-brandPrimary dark:text-brandAccent hover:gap-2"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings

import React from "react";

const RBIALandscape = () => {
  return (
    <section className="overflow-hidden transition-colors duration-300 py-14 bg-bgLight dark:bg-bgDark md:py-20">
      <div className="container px-6 mx-auto">
        <div className="relative overflow-hidden bg-white border shadow-2xl dark:bg-surfaceDark rounded-[2rem] border-borderLight dark:border-borderDark">
          <div className="grid items-stretch lg:grid-cols-12">
            {/* Left Content Area */}
            <div className="flex flex-col justify-center px-4 py-10 sm:px-10 md:px-12 lg:px-16 lg:py-20 lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-brandAccent" />
                <span className="text-sm font-bold tracking-widest uppercase text-brandPrimary dark:text-brandAccent">
                  Industry Focus
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
                Strategic Assessment of the{" "}
                <span className="text-brandPrimary dark:text-brandGold">
                  Media Industry
                </span>{" "}
                Risk Landscape
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-gray-700 md:text-xl dark:text-gray-300">
                PTI’s mission relies on trust and speed, facing risks like
                cybersecurity and editorial integrity. Risk-Based Internal Audit
                (RBIA) provides proactive, independent assurance across financial
                and operational areas. This focus protects revenue and strengthens
                governance, aligning audit efforts with PTI’s unique risk landscape
                and strategic objectives.
              </p>

              <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2">
                <div className="flex items-start gap-4 p-5 border rounded-xl bg-bgLight dark:bg-brandNavy/20 border-borderLight dark:border-borderDark">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brandAccent text-brandDark shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark dark:text-white">
                      Editorial Integrity
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Ensuring truth and accuracy in reporting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 border rounded-xl bg-bgLight dark:bg-brandNavy/20 border-borderLight dark:border-borderDark">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brandPrimary text-brandAccent shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark dark:text-white">
                      Cyber Resilience
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Protecting digital assets and infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-full lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop"
                alt="Media newsroom and professional working environment"
                className="absolute inset-0 object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-transparent via-transparent to-white dark:to-surfaceDark lg:to-transparent" />
              <div className="absolute inset-0 bg-brandPrimary/20 mix-blend-multiply" />

              <div className="absolute p-6 shadow-xl left-6 right-6 bottom-6 lg:left-auto lg:right-8 lg:w-64 bg-brandAccent rounded-2xl lg:rotate-3">
                <p className="text-2xl font-black tracking-tighter text-brandDark">
                  TRUST & SPEED
                </p>
                <p className="mt-1 text-xs font-bold tracking-widest uppercase text-brandDark/80">
                  Core Media Pillars
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RBIALandscape;

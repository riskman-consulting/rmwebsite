const YOUTUBE_VIDEO_ID = "oonsDSc64YA";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 transition-colors duration-300 dark:bg-bgDark lg:pt-20">
      {/* Top Content */}
      <div className="container relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-14 bg-brandGold" />

              <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-brandGold">
                RiskMan Insights
              </span>
            </div>

            <h2 className="max-w-[620px] font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-brandDark transition-colors duration-300 dark:text-white sm:text-5xl lg:text-6xl">
              RiskMan&apos;s{" "}
              <span className="text-brandGold">Vision</span>
              <br />
              in Motion
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button className="rounded-full bg-brandDark px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-brandPrimary dark:bg-brandGold dark:text-brandDark dark:hover:bg-[#ffd24d]">
                Strategic Advisory
              </button>

              <a
                href="#"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brandDark transition-colors duration-300 dark:text-white"
              >
                Learn More

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:pt-5">
            <p className="max-w-[640px] text-base leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-300 sm:text-lg">
              Step inside our process and see how RiskMan protects what
              matters most. From proactive planning to rapid response,
              we are the dedicated partner you can trust to secure your
              business and strengthen resilience in an evolving world.
            </p>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="relative z-20 mt-14 lg:mt-16">
        <div className="container">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-borderLight bg-brandDark shadow-[0_30px_80px_rgba(0,31,63,0.18)] transition-colors duration-300 dark:border-borderDark dark:bg-surfaceDark">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1`}
                title="RiskMan Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Theme Area */}
      <div className="-mt-16 h-40 bg-brandDark transition-colors duration-300 dark:bg-[#000c18] sm:h-48 lg:-mt-20 lg:h-56" />
    </section>
  );
}
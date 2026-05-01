const YOUTUBE_VIDEO_ID = "oonsDSc64YA";

export default function VideoAboutSection() {
  return (
    <section className="relative bg-slate-50 py-20 transition-colors duration-300 dark:bg-bgDark">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left - Video */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl border border-borderLight dark:border-borderDark">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?controls=1&rel=0&modestbranding=1`}
                  title="RiskMan About Video"
                  allow="encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>

            {/* small decorative element */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-brandGold/20 blur-2xl" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brandGold">
              About Us
            </span>

            <h2 className="mt-4 font-heading text-4xl font-extrabold text-brandDark dark:text-white sm:text-5xl">
              The RiskMan Approach
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Take a look behind the scenes of our process to see how we defend what you’ve built.
              From preventative planning to agile intervention, we are the committed partner you
              can count on to keep your organization secure.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="rounded-full bg-brandGold px-6 py-3 text-sm font-semibold text-brandDark transition hover:scale-105">
                Our Strategy
              </button>

              <button className="rounded-full border border-brandDark px-6 py-3 text-sm font-semibold text-brandDark transition hover:bg-brandDark hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
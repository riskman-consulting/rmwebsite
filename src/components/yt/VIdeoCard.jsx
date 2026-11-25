import { useState } from "react";
import { Link } from "react-router-dom";

const YOUTUBE_VIDEO_ID = "oonsDSc64YA";

export default function HeroSection() {
  // The YouTube player is ~1 MB of script and sets third-party cookies, so it
  // loads only when the visitor presses play; until then a thumbnail shows.
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white pt-16 transition-colors duration-300 dark:bg-bgDark lg:pt-20">
      {/* Top Content */}
      <div className="container relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-14 bg-brandGold" />

              <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-[#8A6500] dark:text-brandGold">
                RiskMan Insights
              </span>
            </div>

            <h2 className="max-w-[620px] font-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.05] text-brandDark transition-colors duration-300 dark:text-white ">
              RiskMan&apos;s{" "}
              <span className="text-[#B87F00] dark:text-brandGold">Vision</span>
              <br />
              in Motion
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button onClick={()=> window.location.href = "/contact"} className="rounded-full bg-brandDark px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-brandPrimary dark:bg-brandGold dark:text-brandDark dark:hover:bg-[#ffd24d]">
                Contact Us
              </button>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brandDark transition-colors duration-300 dark:text-white"
              >
                Learn More<span className="sr-only"> about RiskMan</span>

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
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="lg:pt-5">
            <p className="max-w-[640px] text-[15px] leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-300 ">
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
              {showPlayer ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=1&rel=0&modestbranding=1&playsinline=1`}
                  title="RiskMan Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowPlayer(true)}
                  className="group absolute inset-0 h-full w-full"
                  aria-label="Play RiskMan video"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
                    }}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="1280"
                    height="720"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* YouTube-style play button */}
                  <svg
                    viewBox="0 0 68 48"
                    className="absolute left-1/2 top-1/2 h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <path
                      d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                      fill="#FF0000"
                    />
                    <path d="M45 24 27 14v20" fill="#fff" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Theme Area */}
      <div className="-mt-16 h-40 bg-brandDark transition-colors duration-300 dark:bg-[#000c18] sm:h-48 lg:-mt-20 lg:h-56" />
    </section>
  );
}
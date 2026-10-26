import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ModuleBreadcrumb from "./ModuleBreadcrumb";

const ctaClass =
  "inline-flex items-center justify-center gap-1.5 mt-7 px-5 py-2.5 text-sm font-semibold transition-colors rounded-md bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandAccent";

/** Internal paths route in-app; full URLs (e.g. the GRC tool) open in a new tab. */
const Cta = ({ cta }) => {
  const content = (
    <>
      {cta.label}
      <ArrowRight className="w-4 h-4" />
    </>
  );

  return /^https?:\/\//.test(cta.href) ? (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={ctaClass}>
      {content}
    </a>
  ) : (
    <Link to={cta.href} className={ctaClass}>
      {content}
    </Link>
  );
};

/**
 * Walkthrough videos for the module, managed in Sanity as `moduleVideo`
 * documents. When a module has at least one uploaded video, `ModulePage`
 * opens the page with this section as the hero — breadcrumb, h1 and video —
 * and ModuleHero follows it. Modules without a video skip it entirely.
 *
 * A module's `videoSection` in productsData overrides the heading copy and can
 * add a call-to-action; without it the generic walkthrough heading is used.
 *
 * `preload="metadata"` keeps the page light — only the duration and first
 * frame load until the visitor presses play.
 */
const ModuleVideos = ({ product, mod, videos }) => (
  <section
    id="videos"
    className="border-b bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark"
  >
    {/* Tighter top padding: the breadcrumb sits close under the module tabs */}
    <div className="container relative pt-6 pb-10 md:pt-8 md:pb-16">
      <ModuleBreadcrumb product={product} mod={mod} />

      {/* Copy on the left, video on the right from lg up; stacked below that.
          With several videos the copy sticks beside them as they scroll.
          Top-aligned, not centred: the copy column is usually the taller one,
          and centring pushed the video down past the bottom of the screen. */}
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div
          className={`lg:col-span-5 ${
            videos.length > 1 ? "lg:sticky lg:top-[220px]" : ""
          }`}
        >
          <p className="mb-3 text-sm font-semibold text-brandNavy/60 dark:text-white/50">
            See it in action
          </p>
          {/* Same title style as ModuleHero */}
          <h1 className="text-3xl font-bold leading-[1.15] sm:text-[32px] md:text-[38px] text-brandDark dark:text-white">
            {mod.videoSection?.title || `${mod.shortName} walkthrough`}
          </h1>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed sm:text-base text-gray-800 dark:text-white/80">
            {mod.videoSection?.lead ||
              "A short tour of the module, recorded on the working product."}
          </p>
          {mod.videoSection?.cta && <Cta cta={mod.videoSection.cta} />}
        </div>

        <div className="w-full space-y-10 lg:col-span-7 md:space-y-14">
          {videos.map((video) => (
            <figure
              key={video._id}
              /* From lg up the width is capped by viewport height so the whole
                 16:9 frame fits on the first screen. 300px = fixed header and
                 module tabs (~195px) + this section's top padding and
                 breadcrumb (~80px) + ~25px clear below the frame. */
              className="w-full mx-auto lg:max-w-[max(20rem,calc((100svh_-_300px)*16/9))]"
            >
              <div className="overflow-hidden bg-black border rounded-lg border-borderLight dark:border-borderDark">
                {/* No download button, picture-in-picture or right-click
                    "Save video as". This deters casual saving only — the file
                    is still a public Sanity CDN URL. */}
                <video
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture
                  disableRemotePlayback
                  onContextMenu={(event) => event.preventDefault()}
                  playsInline
                  preload="metadata"
                  poster={video.poster || undefined}
                  className="block w-full h-auto aspect-video"
                >
                  <source src={video.videoUrl} type={video.mimeType || undefined} />
                  Your browser does not support embedded video.
                </video>
              </div>

              <figcaption className="mt-3">
                <h3 className="mb-2 text-base font-bold text-brandDark dark:text-white">
                  {video.title}
                </h3>
                {video.caption && (
                  <p className="text-sm leading-relaxed md:text-base text-gray-800 dark:text-white/80">
                    {video.caption}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ModuleVideos;

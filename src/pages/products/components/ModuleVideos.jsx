import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ModuleBreadcrumb from "./ModuleBreadcrumb";

const ctaClass =
  "inline-flex items-center justify-center gap-2 mt-6 px-6 py-3.5 text-sm font-black tracking-wide uppercase transition-all duration-200 rounded-full bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:opacity-90";

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
    className="relative overflow-hidden border-b bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
  >
    {/* Same soft brand wash as ModuleHero, so the page still opens on it. */}
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_80%_at_85%_0%,rgba(0,64,128,0.07),transparent_60%)] dark:bg-[radial-gradient(60%_80%_at_85%_0%,rgba(255,184,0,0.08),transparent_60%)]"
    />

    {/* Tighter top padding: the breadcrumb sits close under the module tabs */}
    <div className="container relative pt-6 pb-10 md:pt-8 md:pb-16">
      <ModuleBreadcrumb product={product} mod={mod} />

      {/* Copy on the left, video on the right from lg up; stacked below that.
          With several videos the copy sticks beside them as they scroll.
          Top-aligned, not centred: the copy column is usually the taller one,
          and centring pushed the video down past the bottom of the screen. */}
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`lg:col-span-5 ${
            videos.length > 1 ? "lg:sticky lg:top-[220px]" : ""
          }`}
        >
          <span className="inline-block mb-3 text-xs font-black tracking-[0.2em] uppercase text-brandPrimary dark:text-brandGold">
            See it in action
          </span>
          <h1 className="text-3xl font-black leading-[1.1] font-heading sm:text-4xl md:text-5xl text-brandDark dark:text-white">
            {mod.videoSection?.title || `${mod.shortName} walkthrough`}
          </h1>
          <p className="mt-5 text-base leading-relaxed sm:text-lg text-brandNavy/70 dark:text-white/60">
            {mod.videoSection?.lead ||
              "A short tour of the module, recorded on the working product."}
          </p>
          {mod.videoSection?.cta && <Cta cta={mod.videoSection.cta} />}
        </motion.div>

        <div className="w-full space-y-10 lg:col-span-7 md:space-y-14">
          {videos.map((video, index) => (
            <motion.figure
              key={video._id}
              /* From lg up the width is capped by viewport height so the whole
                 16:9 frame fits on the first screen. 300px = fixed header and
                 module tabs (~195px) + this section's top padding and
                 breadcrumb (~80px) + ~25px clear below the frame. */
              className="w-full mx-auto lg:max-w-[max(20rem,calc((100svh_-_300px)*16/9))]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            >
              <div className="overflow-hidden border shadow-xl bg-black border-borderLight dark:border-borderDark rounded-2xl shadow-brandDark/5 dark:shadow-black/30">
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

              <figcaption className="mt-4 text-center">
                <h3 className="mb-2 text-base font-bold font-heading md:text-lg text-brandDark dark:text-white">
                  {video.title}
                </h3>
                {video.caption && (
                  <p className="text-sm leading-relaxed md:text-[15px] text-brandNavy/70 dark:text-white/60">
                    {video.caption}
                  </p>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ModuleVideos;

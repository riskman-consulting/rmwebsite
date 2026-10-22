import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";

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
 * documents. `ModulePage` only renders this when the module has at least one
 * uploaded video, so modules without one skip the section entirely.
 *
 * A module's `videoSection` in productsData overrides the heading copy and can
 * add a call-to-action; without it the generic walkthrough heading is used.
 *
 * `preload="metadata"` keeps the page light — only the duration and first
 * frame load until the visitor presses play.
 */
const ModuleVideos = ({ mod, videos }) => (
  <section
    id="videos"
    /* Sits between Challenges (page tone) and Capabilities (surface tone);
       the gradient carries one into the other with no seam. No vertical
       padding of its own: the neighbours' py-14/md:py-20 already space it,
       and adding more doubled the gap. */
    className="scroll-mt-[200px] bg-gradient-to-b from-bgLight to-surfaceLight dark:from-bgDark dark:to-surfaceDark"
  >
    {/* Copy on the left, video on the right from lg up; stacked below that.
        With several videos the copy sticks beside them as they scroll. */}
    <div
      className={`container grid gap-10 lg:grid-cols-12 lg:gap-14 ${
        videos.length > 1 ? "items-start" : "items-center"
      }`}
    >
      <div
        className={`lg:col-span-5 lg:[&>div]:mb-0 ${
          videos.length > 1 ? "lg:sticky lg:top-[220px]" : ""
        }`}
      >
        <SectionHeading
          eyebrow="See it in action"
          title={mod.videoSection?.title || `${mod.shortName} walkthrough`}
          lead={
            mod.videoSection?.lead ||
            "A short tour of the module, recorded on the working product."
          }
        >
          {mod.videoSection?.cta && <Cta cta={mod.videoSection.cta} />}
        </SectionHeading>
      </div>

      <div className="w-full space-y-10 lg:col-span-7 md:space-y-14">
        {videos.map((video, index) => (
          <motion.figure
            key={video._id}
            /* Width capped by viewport height so the whole 16:9 frame fits
               below the sticky header + module tabs (~200px) without overlap. */
            className="w-full mx-auto max-w-[max(20rem,calc((100svh_-_260px)*16/9))]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
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
  </section>
);

export default ModuleVideos;

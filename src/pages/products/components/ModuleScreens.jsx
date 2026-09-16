import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";

/**
 * Product screenshots for the module, in an application chrome so the image
 * reads as a screen rather than as a floating picture.
 *
 * Two or fewer screens stack. More than that — a dashboard cut into panels —
 * switch on tabs instead, so the section stays one screen tall however many
 * panels a module carries. Only rendered when the module has a `screens`
 * array, so modules without artwork skip the section entirely.
 */
const Frame = ({ screen }) => (
  <div className="overflow-hidden border shadow-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl shadow-brandDark/5 dark:shadow-black/30">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
      <span className="w-2.5 h-2.5 rounded-full bg-brandNavy/15 dark:bg-white/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-brandNavy/15 dark:bg-white/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-brandNavy/15 dark:bg-white/15" />
      <span className="ml-3 text-[11px] font-bold tracking-wide uppercase truncate text-brandNavy/40 dark:text-white/30">
        {screen.title}
      </span>
    </div>

    <img
      src={screen.image}
      alt={screen.alt}
      loading="lazy"
      decoding="async"
      className="block w-full h-auto"
    />
  </div>
);

const Caption = ({ screen }) => (
  <figcaption className="max-w-3xl mx-auto mt-5 text-center">
    <h3 className="mb-2 text-base font-bold font-heading md:text-lg text-brandDark dark:text-white">
      {screen.title}
    </h3>
    <p className="text-sm leading-relaxed md:text-[15px] text-brandNavy/70 dark:text-white/60">
      {screen.caption}
    </p>
  </figcaption>
);

const ModuleScreens = ({ mod }) => {
  const screens = mod.screens || [];
  const [active, setActive] = useState(0);
  const tabbed = screens.length > 2;
  const current = screens[Math.min(active, screens.length - 1)];

  return (
    <section
      id="screens"
      /* Capabilities above ends on the surface tone and the lifecycle below
         starts on the page tone — the gradient carries one into the other so
         the screenshot band has no hard seam on either side. */
      className="py-14 md:py-20 scroll-mt-[200px] bg-gradient-to-b from-surfaceLight to-bgLight dark:from-surfaceDark dark:to-bgDark"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Inside the product"
          title={`${mod.shortName} on screen`}
          lead="The actual working screens — not an illustration of them."
        />

        {tabbed ? (
          <div className="max-w-5xl mx-auto">
            {/* Panel switcher — scrolls sideways on a phone rather than
                wrapping into a block of chips. */}
            <div
              role="tablist"
              aria-label={`${mod.shortName} screens`}
              className="flex gap-2 pb-2 mb-6 -mx-1 overflow-x-auto md:justify-center md:flex-wrap md:overflow-visible"
            >
              {screens.map((screen, index) => (
                <button
                  key={screen.title}
                  role="tab"
                  type="button"
                  aria-selected={index === active}
                  onClick={() => setActive(index)}
                  className={`flex-shrink-0 px-4 py-2 mx-1 text-xs font-bold tracking-wide uppercase transition-colors border rounded-full ${
                    index === active
                      ? "bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark border-brandPrimary dark:border-brandGold"
                      : "border-borderLight dark:border-borderDark text-brandNavy/70 dark:text-white/60 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
                  }`}
                >
                  {screen.tab || screen.title}
                </button>
              ))}
            </div>

            <motion.figure
              key={current.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Frame screen={current} />
              <Caption screen={current} />
            </motion.figure>
          </div>
        ) : (
          <div className="space-y-10 md:space-y-14">
            {screens.map((screen, index) => (
              <motion.figure
                key={screen.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="max-w-5xl mx-auto"
              >
                <Frame screen={screen} />
                <Caption screen={screen} />
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ModuleScreens;

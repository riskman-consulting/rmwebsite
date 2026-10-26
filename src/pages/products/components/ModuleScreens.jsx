import React, { useState } from "react";
import DocSection from "./DocSection";

/**
 * Product screenshots for the module, framed with a thin border and the
 * screen's name above it.
 *
 * Two or fewer screens stack. More than that — a dashboard cut into panels —
 * switch on tabs instead, so the section stays one screen tall however many
 * panels a module carries. Only rendered when the module has a `screens`
 * array, so modules without artwork skip the section entirely.
 */
const Frame = ({ screen }) => (
  <div className="overflow-hidden border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">

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
  <figcaption className="max-w-3xl mt-4">
    <h3 className="mb-2 text-base font-bold text-brandDark dark:text-white">
      {screen.title}
    </h3>
    <p className="text-sm leading-relaxed md:text-base text-gray-800 dark:text-white/80">
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
    <DocSection
      id="screens"
      wide
      title={`${mod.shortName} on screen`}
      lead="Screenshots taken from the live product."
    >

        {tabbed ? (
          <div className="max-w-5xl">
            {/* Panel switcher — scrolls sideways on a phone rather than
                wrapping into a block of chips. */}
            <div
              role="tablist"
              aria-label={`${mod.shortName} screens`}
              className="flex gap-2 pb-2 mb-6 -mx-1 overflow-x-auto md:flex-wrap md:overflow-visible"
            >
              {screens.map((screen, index) => (
                <button
                  key={screen.title}
                  role="tab"
                  type="button"
                  aria-selected={index === active}
                  onClick={() => setActive(index)}
                  className={`flex-shrink-0 px-3 py-1.5 mx-1 text-sm font-medium transition-colors border rounded-md ${
                    index === active
                      ? "bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark border-brandPrimary dark:border-brandGold"
                      : "border-borderLight dark:border-borderDark text-gray-800 dark:text-white/80 hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandGold"
                  }`}
                >
                  {screen.tab || screen.title}
                </button>
              ))}
            </div>

            <figure
              key={current.title}
            >
              <Frame screen={current} />
              <Caption screen={current} />
            </figure>
          </div>
        ) : (
          <div className="space-y-10 md:space-y-14">
            {screens.map((screen, index) => (
              <figure
                key={screen.title}
                className="max-w-5xl"
              >
                <Frame screen={screen} />
                <Caption screen={screen} />
              </figure>
            ))}
          </div>
        )}
    </DocSection>
  );
};

export default ModuleScreens;

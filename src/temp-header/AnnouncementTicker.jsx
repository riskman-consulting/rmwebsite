import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "../pages/products/productsData";

const product = PRODUCTS[0];
const modules = product.modules;

/** How long each module stays on screen, and how long the slide takes. */
const HOLD_MS = 4000;
const SLIDE_MS = 500;

/**
 * The RiskMan GRC modules in the announcement bar above the navbar, one at a
 * time: each slides up from below, stays long enough to read, then makes way
 * for the next. Clicking one opens its module page; the module being viewed
 * is highlighted. Pauses while the pointer or keyboard focus is on it. With
 * reduced motion the module changes without the slide.
 *
 * The first module is repeated after the last, so the step from the last back
 * to the first still slides upward; once it lands, the list jumps back to the
 * real first item with the transition off.
 */
const AnnouncementTicker = () => {
  const { pathname } = useLocation();
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    query.addEventListener?.("change", onChange);
    return () => query.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(() => {
      setAnimate(!reduceMotion);
      setIndex((i) => i + 1);
    }, HOLD_MS);
    return () => clearTimeout(timer);
  }, [index, paused, reduceMotion]);

  // Landed on the repeated first item: jump back to the real one, unanimated
  useEffect(() => {
    if (index < modules.length) return undefined;
    const timer = setTimeout(
      () => {
        setAnimate(false);
        setIndex(0);
      },
      reduceMotion ? 0 : SLIDE_MS
    );
    return () => clearTimeout(timer);
  }, [index, reduceMotion]);

  const visible = index % modules.length;
  const slides = [...modules, modules[0]];

  return (
    <div className="flex items-center w-full h-full">
      <Link
        to={product.path}
        className="flex items-center flex-shrink-0 h-full gap-2 pl-4 pr-3 text-[12px] font-semibold tracking-wide text-brandDark bg-brandGold hover:bg-brandAccent sm:pl-6 sm:pr-4"
      >
        RiskMan GRC
      </Link>

      <nav
        aria-label="RiskMan GRC modules"
        className="relative flex-1 h-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <ul
          className="h-full"
          style={{
            transform: `translateY(-${index * 100}%)`,
            transition: animate ? `transform ${SLIDE_MS}ms ease-out` : "none",
          }}
        >
          {slides.map((mod, i) => {
            const to = `${product.path}/${mod.slug}`;
            const active = pathname === to;
            const shown = i % modules.length === visible && i === index;
            return (
              <li
                key={`${mod.slug}-${i}`}
                aria-hidden={shown ? undefined : "true"}
                className="flex items-center h-full"
              >
                <Link
                  to={to}
                  tabIndex={shown ? undefined : -1}
                  className={`group flex items-center min-w-0 gap-2 px-4 sm:px-6 text-[13px] transition-colors ${
                    active
                      ? "text-brandGold dark:text-brandPrimary"
                      : "text-white/85 hover:text-brandGold dark:text-brandDark/80 dark:hover:text-brandPrimary"
                  }`}
                >
                  <span className="font-semibold whitespace-nowrap">{mod.name}</span>
                  <span className="hidden truncate md:inline text-white/60 group-hover:text-current dark:text-brandDark/55">
                    {mod.tagline}
                  </span>
                  <ArrowRight className="flex-shrink-0 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Which of the six is showing */}
      <span className="flex-shrink-0 hidden pr-6 text-[12px] tabular-nums text-white/50 sm:inline dark:text-brandDark/50">
        {visible + 1} / {modules.length}
      </span>
    </div>
  );
};

export default AnnouncementTicker;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PRODUCTS } from "../pages/products/productsData";

const product = PRODUCTS[0];

/**
 * Scrolling list of the RiskMan GRC modules in the announcement bar above the
 * navbar. Each item opens its module page; the module being viewed is
 * highlighted. The list is rendered twice so the CSS loop (index.css,
 * .module-ticker-track) is seamless; the copy is hidden from screen readers
 * and the keyboard. Pauses on hover and focus; with reduced motion it stays
 * still and scrolls sideways instead.
 */
const AnnouncementTicker = () => {
  const { pathname } = useLocation();

  const items = (copy) =>
    product.modules.map((mod) => {
      const to = `${product.path}/${mod.slug}`;
      const active = pathname === to;
      return (
        <li
          key={`${copy}-${mod.slug}`}
          aria-hidden={copy ? "true" : undefined}
          className="flex items-center flex-shrink-0"
        >
          <Link
            to={to}
            tabIndex={copy ? -1 : undefined}
            className={`group flex items-center gap-2 px-5 text-[13px] whitespace-nowrap transition-colors ${
              active
                ? "text-brandGold dark:text-brandPrimary"
                : "text-white/85 hover:text-brandGold dark:text-brandDark/80 dark:hover:text-brandPrimary"
            }`}
          >
            <span className="font-semibold">{mod.name}</span>
            <span className="hidden sm:inline text-white/55 group-hover:text-current dark:text-brandDark/55">
              {mod.tagline}
            </span>
          </Link>
          <span aria-hidden="true" className="text-brandGold/70 dark:text-brandPrimary/60">
            •
          </span>
        </li>
      );
    });

  return (
    <div className="flex items-center w-full h-full">
      <Link
        to={product.path}
        className="flex items-center flex-shrink-0 h-full gap-2 pl-4 pr-3 text-[12px] font-semibold tracking-wide text-brandDark bg-brandGold hover:bg-brandAccent sm:pl-6 sm:pr-4"
      >
        RiskMan GRC
        <span className="hidden sm:inline font-normal">modules</span>
      </Link>

      <nav
        aria-label="RiskMan GRC modules"
        className="relative flex-1 h-full overflow-hidden module-ticker motion-reduce:overflow-x-auto"
      >
        <ul className="flex items-center h-full w-max module-ticker-track">
          {items("")}
          {items("copy")}
        </ul>
      </nav>
    </div>
  );
};

export default AnnouncementTicker;

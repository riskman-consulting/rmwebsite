import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { PRODUCTS_BASE_PATH } from "../productsData";

/**
 * Products › product › module trail. Rendered by whichever section opens the
 * page — the video hero when the module has videos, ModuleHero otherwise.
 */
const ModuleBreadcrumb = ({ product, mod }) => (
  <nav
    aria-label="Breadcrumb"
    className="flex flex-wrap items-center gap-1 mb-8 text-[13px] text-brandNavy/55 dark:text-white/45"
  >
    <Link
      to={PRODUCTS_BASE_PATH}
      className="hover:text-brandPrimary dark:hover:text-brandGold"
    >
      Products
    </Link>
    <ChevronRight className="w-3 h-3" />
    <Link
      to={product.path}
      className="hover:text-brandPrimary dark:hover:text-brandGold"
    >
      {product.shortName}
    </Link>
    <ChevronRight className="w-3 h-3" />
    <span className="font-medium text-brandDark dark:text-white/80">{mod.name}</span>
  </nav>
);

export default ModuleBreadcrumb;

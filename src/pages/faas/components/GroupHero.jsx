import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FAAS_BASE_PATH } from "../faasData";

const GroupHero = ({ group }) => {
  const hasImage = Boolean(group.image);

  return (
    <section className="relative overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
      <div className="container py-12 md:py-16">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1 mb-8 text-xs font-bold tracking-wide uppercase text-brandNavy/50 dark:text-white/40"
        >
          <Link
            to="/services"
            className="hover:text-brandPrimary dark:hover:text-brandGold"
          >
            Services
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to={FAAS_BASE_PATH}
            className="hover:text-brandPrimary dark:hover:text-brandGold"
          >
            FAAS
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brandPrimary dark:text-brandGold">
            {group.title}
          </span>
        </nav>

        {/* Two columns once there is a picture to show; otherwise the copy
            keeps the full width so an image-less group still looks finished. */}
        <div
          className={
            hasImage
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              : "max-w-3xl"
          }
        >
          <div className={hasImage ? "" : "max-w-3xl"}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-3xl font-black leading-tight font-heading md:text-5xl text-brandDark dark:text-white"
          >
            {group.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-lg leading-relaxed md:text-xl text-brandNavy/70 dark:text-white/60"
          >
            {group.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-black tracking-wide uppercase transition-all duration-200 rounded-full bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:opacity-90"
            >
              Talk to our team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          </div>

          {hasImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative overflow-hidden shadow-xl rounded-2xl aspect-[4/3] lg:aspect-[5/4] bg-brandPrimary/5 dark:bg-brandGold/5"
            >
              <img
                src={group.image}
                alt={group.imageAlt}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GroupHero;

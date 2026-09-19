import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";

/** Closing call to action, pitched at a walkthrough rather than a signup. */
const ModuleCta = ({ mod }) => (
  <section className="py-14 md:py-20 bg-bgLight dark:bg-bgDark">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden p-8 md:p-12 lg:p-14 rounded-3xl bg-brandDark dark:bg-surfaceDark dark:border dark:border-borderDark"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_100%_at_100%_0%,rgba(255,192,0,0.16),transparent_60%)]"
        />

        <div className="relative max-w-3xl">
          <span className="inline-block mb-4 text-xs font-black tracking-[0.2em] uppercase text-brandAccent">
            Next step
          </span>
          <h2 className="mb-4 text-2xl font-black leading-tight font-heading sm:text-3xl md:text-4xl text-white">
            See {mod.shortName} running on your own framework
          </h2>
          <p className="mb-8 text-base leading-relaxed sm:text-lg text-white/70">
            A working session with our team — we walk the module against your
            current process, your matrix and your reporting calendar, and you
            see what the file looks like at the end of a cycle.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black tracking-wide uppercase transition-all duration-200 rounded-full bg-brandAccent text-brandDark hover:opacity-90"
            >
              <CalendarCheck className="w-4 h-4" />
              Book a walkthrough
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black tracking-wide uppercase transition-all duration-200 border rounded-full border-white/25 text-white hover:border-brandAccent hover:text-brandAccent"
            >
              Ask a question
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ModuleCta;

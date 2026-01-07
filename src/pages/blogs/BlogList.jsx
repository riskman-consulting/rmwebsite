import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaClock,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import blogs from "../../data/blogs.json";
// import BackgroundGrid from "../../component/common/BackgroundGrid";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function BlogList() {
  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* <BackgroundGrid /> */}

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden isolate">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 z-0 w-full h-full overflow-hidden -translate-x-1/2 pointer-events-none left-1/2">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brandPrimary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] -right-[5%] w-[30%] h-[30%] bg-brandAccent/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandPrimary/10 border-brandPrimary/30 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent dark:border-brandAccent/30"
            >
              <div className="w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent animate-pulse" />
              Insights & Perspectives
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-8 text-5xl font-bold leading-tight md:text-7xl font-heading text-brandDark dark:text-white"
            >
              Knowledge <span className="text-brandPrimary dark:text-brandAccent">Hub</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg leading-relaxed md:text-xl text-brandNavy dark:text-gray-400"
            >
              Expert views on risk management, regulatory compliance, cybersecurity, and strategic resilience in an evolving global landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= SEARCH & FILTER (VISUAL ONLY) ================= */}
      <section className="relative z-20 pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search insights..."
                className="w-full py-5 text-lg transition-all duration-300 border shadow-xl outline-none px-14 rounded-3xl bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent group-hover:shadow-2xl"
              />
              <FaSearch className="absolute transition-colors -translate-y-1/2 left-6 top-1/2 text-brandNavy/40 dark:text-gray-500 group-focus-within:text-brandPrimary dark:group-focus-within:text-brandAccent" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {["All", "Risk Management", "Compliance", "Cybersecurity", "Strategy", "Business"].map((cat, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${i === 0
                      ? "bg-brandPrimary text-white shadow-lg shadow-brandPrimary/30 dark:bg-brandAccent dark:text-brandDark dark:shadow-brandAccent/30"
                      : "bg-surfaceLight/50 dark:bg-surfaceDark/50 border border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark isolate">
        <div className="container">
          <motion.div
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                variants={scaleIn}
                className="group relative h-full flex flex-col bg-surfaceLight dark:bg-surfaceDark rounded-[2.5rem] border border-borderLight dark:border-borderDark overflow-hidden transition-all duration-500 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
              >
                <Link to={`/insights/${blog.slug}`} className="flex flex-col h-full">
                  {/* Image wrapper */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 z-10 transition-colors duration-500 bg-brandDark/20 group-hover:bg-transparent" />
                    <motion.img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="object-cover w-full h-full transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                      whileHover={{ scale: 1.1 }}
                    />

                    {/* Category Overlay */}
                    <div className="absolute z-20 top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-brandDark/90 backdrop-blur-sm text-brandDark dark:text-white text-xs font-bold tracking-wide uppercase border border-white/20 shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-brandNavy/60 dark:text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <FaCalendar className="text-brandPrimary dark:text-brandAccent" />
                        {blog.date}
                      </div>
                      <div className="w-1 h-1 rounded-full bg-borderLight dark:bg-borderDark" />
                      <div className="flex items-center gap-1.5">
                        <FaClock className="text-brandPrimary dark:text-brandAccent" />
                        {blog.readTime}
                      </div>
                    </div>

                    <h3 className="mb-4 text-2xl font-bold leading-tight transition-colors duration-300 font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="mb-8 leading-relaxed text-brandNavy/70 dark:text-gray-400 line-clamp-3">
                      {blog.shortDescription}
                    </p>

                    <div className="pt-6 mt-auto border-t border-borderLight/50 dark:border-borderDark/30">
                      <div className="flex items-center justify-between group/btn">
                        <span className="text-sm font-bold text-brandPrimary dark:text-brandAccent">Read Full Post</span>
                        <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 group-hover/btn:bg-brandPrimary dark:group-hover/btn:bg-brandAccent">
                          <FaChevronRight className="transition-all duration-300 text-brandPrimary dark:text-brandAccent group-hover/btn:text-white dark:group-hover/btn:text-brandDark" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= NEWSLETTER CTA ================= */}
      <section className="relative px-6 py-24 overflow-hidden isolate">
        <div className="container">
          <div className="relative max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-brandDark dark:bg-surfaceDark border border-borderLight dark:border-borderDark p-8 md:p-16 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brandAccent blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandPrimary blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Stay Ahead of the Curve</h2>
              <p className="mb-10 text-lg text-white/70">Subscribe to our newsletter for the latest insights in risk management and strategic advisory delivered to your inbox.</p>

              <div className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 text-white transition-all border rounded-full outline-none bg-white/10 border-white/20 placeholder:text-white/40 focus:border-brandAccent"
                />
                <button className="px-8 py-4 font-bold transition-all rounded-full shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-brandAccent/20">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

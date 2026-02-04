import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCalendar, FaClock, FaUser, FaChevronLeft, FaQuoteRight, FaQuestionCircle } from "react-icons/fa";
// import BackgroundGrid from "../component/common/BackgroundGrid";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
};

export default function BlogTemplate({ blog }) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen p-6 bg-bgLight dark:bg-bgDark">
        <BackgroundGrid />
        <div className="space-y-4 text-center">
          <div className="text-6xl text-brandPrimary dark:text-brandAccent">⚠️</div>
          <p className="text-lg font-semibold text-brandNavy dark:text-gray-400">
            Insights article not found.
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
          >
            Back to Hub
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* <BackgroundGrid /> */}

      {/* ================= BACK BUTTON ================= */}
      <div className="fixed z-50 hidden top-24 left-6 xl:block">
        <Link
          to="/insights"
          className="flex items-center gap-3 px-5 py-3 transition-all duration-300 border rounded-full shadow-xl group bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent"
        >
          <FaChevronLeft className="transition-transform text-brandPrimary dark:text-brandAccent group-hover:-translate-x-1" />
          <span className="text-sm font-bold">Back to Hub</span>
        </Link>
      </div>

      {/* ================= IMMERSIVE HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-brandDark/40 via-brandDark/60 to-bgLight dark:to-bgDark" />
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="object-cover w-full h-full grayscale brightness-50"
          />
        </motion.div>

        <div className="container relative z-20 pt-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex px-4 py-1.5 mb-8 rounded-full bg-brandAccent text-brandDark text-xs font-black tracking-widest uppercase shadow-2xl">
              {blog.category}
            </div>

            <h1 className="mb-10 text-4xl md:text-7xl font-bold font-heading leading-[1.1] text-brandDark dark:text-white">
              {blog.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-brandNavy/80 dark:text-white/60">
              <span className="flex items-center gap-2.5">
                <FaUser className="text-brandPrimary dark:text-brandAccent" /> {blog.author}
              </span>
              <span className="flex items-center gap-2.5">
                <FaCalendar className="text-brandPrimary dark:text-brandAccent" /> {blog.date}
              </span>
              <span className="flex items-center gap-2.5">
                <FaClock className="text-brandPrimary dark:text-brandAccent" /> {blog.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <main className="relative z-20 pb-32 -mt-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-surfaceLight/95 dark:bg-surfaceDark/95 backdrop-blur-xl border border-borderLight dark:border-borderDark p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-brandDark/10 dark:shadow-black/40"
          >
            <div className="space-y-10 prose prose-lg dark:prose-invert prose-brand max-w-none">
              {blog.content.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="text-lg leading-relaxed md:text-xl text-brandNavy/80 dark:text-gray-300">
                        {block.text}
                      </p>
                    );

                  case "heading":
                    return (
                      <h2
                        key={index}
                        className="pt-8 pb-4 text-3xl font-bold border-b md:text-4xl font-heading text-brandDark dark:text-white border-borderLight dark:border-borderDark"
                      >
                        {block.text}
                      </h2>
                    );

                  case "list":
                    return (
                      <ul
                        key={index}
                        className="pl-2 space-y-4"
                      >
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-lg text-brandNavy/80 dark:text-gray-300">
                            <div className="mt-2.5 w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  case "quote":
                    return (
                      <div key={index} className="relative my-16 group">
                        <div className="absolute text-6xl transition-transform duration-500 -top-6 -left-6 text-brandPrimary/10 dark:text-brandAccent/10 group-hover:scale-110">
                          <FaQuoteRight />
                        </div>
                        <blockquote className="relative z-10 rounded-[2rem] bg-brandDark dark:bg-bgDark border-l-8 border-brandAccent p-10 md:p-14 shadow-2xl">
                          <p className="text-2xl italic leading-relaxed text-white md:text-3xl font-heading">
                            “{block.text}”
                          </p>
                          <footer className="flex items-center gap-4 mt-8">
                            <div className="w-8 h-px bg-brandAccent" />
                            <cite className="text-sm not-italic font-bold tracking-wide uppercase text-brandAccent">
                              {block.author}
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    );

                  case "image":
                    return (
                      <figure key={index} className="my-16 space-y-4">
                        <div className="overflow-hidden border shadow-xl rounded-3xl border-borderLight dark:border-borderDark group">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            src={block.url}
                            alt={block.caption || ""}
                            className="w-full"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="text-sm italic font-medium text-center text-brandNavy/50 dark:text-gray-500">
                            — {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );

                  case "faq":
                    return (
                      <div key={index} className="pt-12 space-y-10">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10">
                            <FaQuestionCircle className="text-2xl text-brandPrimary dark:text-brandAccent" />
                          </div>
                          <h2 className="text-3xl font-bold font-heading text-brandDark dark:text-white">Expert FAQ</h2>
                        </div>

                        <div className="grid gap-6">
                          {block.items.map((faq, i) => (
                            <div
                              key={i}
                              className="group p-8 rounded-[2rem] bg-bgLight/50 dark:bg-bgDark/50 border border-borderLight dark:border-borderDark transition-all duration-300 hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-xl"
                            >
                              <h3 className="flex items-start gap-3 mb-4 text-xl font-bold text-brandDark dark:text-white">
                                <span className="text-brandPrimary dark:text-brandAccent">Q.</span>
                                {faq.question}
                              </h3>
                              <p className="pl-8 leading-relaxed text-brandNavy/70 dark:text-gray-400">
                                {faq.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>

            {/* TAGS & SHARE */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-10 mt-20 border-t border-borderLight dark:border-borderDark">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold tracking-wider uppercase text-brandNavy/40">Tags:</span>
                {["Risk", "Compliance", "Advisory"].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-bold transition-colors border rounded-lg cursor-pointer bg-surfaceLight dark:bg-bgDark border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= COMMENTS SECTION ================= */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="rounded-[3rem] bg-surfaceLight/95 dark:bg-surfaceDark/95 backdrop-blur-xl border border-borderLight dark:border-borderDark p-8 md:p-16 shadow-2xl">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
                Contribute to the Discussion
              </h2>
              <p className="mb-10 text-brandNavy/60 dark:text-gray-400">
                Your email address will not be published. Required fields are marked *
              </p>

              <form className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-sm font-bold tracking-widest uppercase text-brandNavy/80 dark:text-white/80">Name *</label>
                    <input
                      className="w-full px-6 py-4 transition-all duration-300 border outline-none rounded-2xl bg-bgLight/50 dark:bg-bgDark/50 border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent text-brandDark dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold tracking-widest uppercase text-brandNavy/80 dark:text-white/80">Email *</label>
                    <input
                      className="w-full px-6 py-4 transition-all duration-300 border outline-none rounded-2xl bg-bgLight/50 dark:bg-bgDark/50 border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent text-brandDark dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold tracking-widest uppercase text-brandNavy/80 dark:text-white/80">Comment *</label>
                  <textarea
                    rows={6}
                    className="w-full px-6 py-4 transition-all duration-300 border outline-none resize-none rounded-3xl bg-bgLight/50 dark:bg-bgDark/50 border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent text-brandDark dark:text-white"
                    placeholder="Share your thoughts..."
                  />
                </div>

                <button className="flex items-center gap-3 px-10 py-5 font-black text-white transition-all duration-500 rounded-full shadow-xl group bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-brandPrimary/20">
                  Post Comment
                  <FaChevronLeft className="transition-transform rotate-180 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            <div className="flex justify-center mt-12">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-brandNavy/40 hover:text-brandPrimary dark:hover:text-brandAccent transition-colors"
              >
                ← Return to Insights Hub
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}

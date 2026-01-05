import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* =======================
   ANIMATIONS (SAME STYLE)
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function BlogTemplate({ blog }) {
  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen p-6 bg-bgLight dark:bg-bgDark">
        <div className="space-y-4 text-center">
          <div className="text-6xl text-brandPrimary dark:text-brandAccent">⚠️</div>
          <p className="text-lg font-semibold text-brandNavy dark:text-gray-400">
            Blog not found.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[60vh] flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-bgLight/80 dark:bg-bgDark/80" />
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="object-cover w-full h-full grayscale opacity-20"
          />
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-bold text-white rounded-full shadow-lg bg-brandPrimary dark:bg-brandAccent dark:text-brandDark">
            {blog.category}
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl text-brandDark dark:text-white">
            {blog.title}
          </h1>

          <div className="flex justify-center gap-6 text-sm text-brandNavy dark:text-gray-400">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brandPrimary dark:bg-brandAccent" /> {blog.author}</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brandPrimary dark:bg-brandAccent" /> {blog.date}</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brandPrimary dark:bg-brandAccent" /> {blog.readTime}</span>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURED IMAGE ================= */}
      <section className="relative pt-0 isolate section-padding">
        <div className="container max-w-5xl mx-auto">
          <motion.img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative section-padding isolate">
        <div className="container max-w-5xl mx-auto space-y-10 text-lg leading-relaxed text-brandNavy dark:text-gray-400">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return <p key={index}>{block.text}</p>;

              case "heading":
                return (
                  <h2
                    key={index}
                    className="mt-12 text-3xl font-bold text-brandDark dark:text-white"
                  >
                    {block.text}
                  </h2>
                );

              case "list":
                return (
                  <ul
                    key={index}
                    className="pl-6 space-y-2 list-disc marker:text-brandPrimary dark:marker:text-brandAccent"
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="p-8 text-xl italic border-l-4 shadow-lg rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-brandPrimary dark:border-brandAccent text-brandDark dark:text-white"
                  >
                    “{block.text}”
                    <div className="mt-4 text-sm not-italic text-brandNavy dark:text-gray-400">
                      — {block.author}
                    </div>
                  </blockquote>
                );

              case "image":
                return (
                  <div key={index} className="my-10">
                    <img
                      src={block.url}
                      alt=""
                      className="w-full shadow-md rounded-2xl"
                    />
                    {block.caption && (
                      <p className="mt-4 text-sm text-center text-brandNavy dark:text-gray-400">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );

              case "faq":
                return (
                  <div key={index} className="mt-16 space-y-8">
                    <h2 className="text-3xl font-bold text-brandDark dark:text-white">FAQ</h2>
                    {block.items.map((faq, i) => (
                      <div
                        key={i}
                        className="p-8 transition-all duration-300 border shadow-lg rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandAccent"
                      >
                        <p className="flex items-start gap-3 text-lg font-bold text-brandDark dark:text-white">
                          <span className="text-brandPrimary dark:text-brandAccent">Q:</span> {faq.question}
                        </p>
                        <p className="mt-4 text-brandNavy dark:text-gray-400 ml-7">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </section>

      {/* ================= COMMENTS ================= */}
      <section className="relative pt-0 section-padding isolate">
        <div className="container max-w-5xl mx-auto">
          <div className="p-8 border shadow-xl rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-brandDark dark:text-white">
              Leave a Reply
            </h2>
            <p className="mb-8 text-sm text-brandNavy dark:text-gray-400">
              Your email address will not be published.
            </p>

            <form className="space-y-5">
              {["Name", "Email"].map((label, i) => (
                <div key={i}>
                  <label className="block mb-2 font-semibold text-brandDark dark:text-white">{label}</label>
                  <input
                    className="w-full p-4 transition-all duration-300 border outline-none rounded-xl bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent text-brandDark dark:text-white"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-2 font-semibold text-brandDark dark:text-white">Comment</label>
                <textarea
                  rows={5}
                  className="w-full p-4 transition-all duration-300 border outline-none rounded-xl bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent text-brandDark dark:text-white"
                />
              </div>

              <button className="px-8 py-4 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold">
                Submit Comment →
              </button>
            </form>
          </div>

          <div className="mt-10">
            <Link
              to="/blogs"
              className="inline-flex items-center px-8 py-3 transition-all duration-300 border rounded-full border-borderLight dark:border-borderDark text-brandNavy dark:text-gray-400 hover:text-brandPrimary dark:hover:text-brandAccent hover:border-brandPrimary dark:hover:border-brandAccent"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
  FaFileAlt,
  FaHome,
  FaQuoteLeft,
} from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

/* =======================
   MAIN COMPONENT
======================= */
export default function ServiceTemplate() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJSON() {
      try {
        setLoading(true);
        const data = await import(`../data/services/${id}.json`);
        let serviceData = data.default;
        
         if (serviceData.services && serviceData.services[id]) {
          serviceData = serviceData.services[id];
        }
        
        console.log("Service Data:", serviceData);
        console.log("Homepage:", serviceData.homepage);
        console.log("Blog:", serviceData.blog);
        
        setService(serviceData);
        setLoading(false);
      } catch (e) {
        console.error("JSON not found for service:", id);
        setError(true);
        setLoading(false);
      }
    }
    loadJSON();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bgLight dark:bg-bgDark">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 rounded-full border-brandPrimary dark:border-brandAccent border-t-transparent"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bgLight dark:bg-bgDark">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6 text-center"
        >
          <div className="text-6xl text-brandPrimary dark:text-brandAccent">⚠️</div>
          <h1 className="text-3xl font-bold text-brandDark dark:text-white">Service Not Found</h1>
          <p className="text-brandNavy dark:text-gray-400">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl"
          >
            <FaHome /> Back to Services
          </Link>
        </motion.div>
      </div>
    );
  }

  if (!service) return null;

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 text-brandDark dark:text-white bg-bgLight dark:bg-bgDark">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate min-h-[60vh] flex items-center justify-center section-padding overflow-hidden">
        {/* Background Image - Always show with fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/20 to-brandAccent/20">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={service.hero?.image || service.hero?.headerImage || service.headerImage || "/images/services/default.jpg"}
            alt={service.title}
            className="absolute inset-0 object-cover w-full h-full"
            onError={(e) => {
              e.target.src = "/images/services/default.jpg";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40 dark:hidden" />

          <div className="absolute inset-0 hidden bg-gradient-to-b from-black/50 via-black/30 to-black/50 dark:block" />
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto">
          {/* Hero with Sections (Consulting Style) */}
          {service.hero?.sections ? (
            <motion.div
              className="space-y-12"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div className="text-center" variants={fadeInUp}>
                <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white">
                  <span className="text-brandPrimary dark:text-brandAccent">
                    {service.hero.heading}
                  </span>
                </h1>
                <p className="max-w-3xl mx-auto text-xl md:text-2xl text-brandNavy dark:text-brandLight">
                  {service.hero.subheading}
                </p>
              </motion.div>

              {/* Three Column Sections */}
              <div className="grid gap-6 md:grid-cols-3">
                {service.hero.sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    className="p-6 border bg-surfaceLight/50 dark:bg-surfaceDark/50 backdrop-blur-sm border-borderLight dark:border-borderDark rounded-2xl"
                  >
                    <h3 className="mb-3 text-2xl font-bold text-brandPrimary dark:text-brandAccent">
                      {section.title}
                    </h3>
                    <p className="text-brandNavy dark:text-gray-400">
                      {section.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {service.hero.cta && (
                <motion.div variants={fadeInUp} className="text-center">
                  <a
                    href={service.hero.cta.link}
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white transition-all duration-300 rounded-full shadow-xl bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
                  >
                    {service.hero.cta.text}
                    <FaArrowRight />
                  </a>
                </motion.div>
              )}
            </motion.div>
          ) : (
            /* Standard Hero (Risk Advisory Style) */
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {service.hero?.tagline && (
                <motion.p
                  variants={fadeInUp}
                  className="mb-4 text-lg font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandAccent"
                >
                  {service.hero.tagline}
                </motion.p>
              )}

              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white"
              >
                <span className="text-brandPrimary dark:text-brandAccent">
                  {service.hero?.heading || service.title}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-brandNavy dark:text-gray-400"
              >
                {service.hero?.subheading || service.summary}
              </motion.p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= MISSION STATEMENT (Consulting Only) ================= */}
      {service.mission && (
        <section className="relative section-padding">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative overflow-hidden border shadow-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12">
                  <h2 className="text-3xl font-bold leading-tight md:text-4xl text-brandDark dark:text-white">
                    {service.mission.heading}
                  </h2>
                </div>
                {service.mission.image && (
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={service.mission.image}
                      alt="Mission"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative section-padding isolate">
        <div className="container max-w-6xl mx-auto">
          {/* ================= OFFERINGS ================= */}
          {service.offerings && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaLightbulb className="text-4xl text-brandPrimary dark:text-brandAccent" />
                <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  {service.offerings.heading || "Our"}{" "}
                  <span className="text-brandPrimary dark:text-brandAccent">
                    {service.offerings.heading ? "" : "Offerings & Solutions"}
                  </span>
                </h2>
              </div>

              <p className="mb-8 text-lg leading-relaxed text-brandNavy dark:text-gray-400">
                {service.offerings.intro || service.offerings.subheading}
              </p>

              {service.offerings.cta && (
                <div className="mb-8">
                  <a
                    href={service.offerings.cta.link}
                    className="inline-flex items-center gap-2 font-semibold transition-colors text-brandPrimary dark:text-brandAccent hover:text-brandDark dark:hover:text-white"
                  >
                    {service.offerings.cta.text}
                    <FaArrowRight />
                  </a>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {service.offerings.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative p-6 overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-3 mb-3">
                        {item.number && (
                          <span className="text-2xl font-bold text-brandPrimary dark:text-brandAccent">
                            {item.number}
                          </span>
                        )}
                        {!item.number && <FaCheckCircle className="flex-shrink-0 mt-1 text-brandPrimary dark:text-brandAccent" />}
                        <h3 className="text-lg font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                          {item.title}
                        </h3>
                      </div>
                      <p className={`${item.number ? '' : 'ml-6'} leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80`}>
                        {item.desc || item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= ACHIEVEMENTS (Consulting Only) ================= */}
          {service.achievements && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl text-brandDark dark:text-white">
                {service.achievements.heading}
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {service.achievements.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 text-center border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl"
                  >
                    <div className="mb-4 text-5xl font-bold text-brandPrimary dark:text-brandAccent">
                      {stat.number}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-white">
                      {stat.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= HOW WE HELP (Consulting Only) ================= */}
          {service.howWeHelp && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="relative overflow-hidden border shadow-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl">
                <div className="grid md:grid-cols-2">
                  <div className="p-10 md:p-12">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                      {service.howWeHelp.heading}
                    </h2>
                    <p className="mb-8 text-lg text-brandNavy dark:text-gray-400">
                      {service.howWeHelp.description}
                    </p>

                    <div className="mb-8 space-y-4">
                      {service.howWeHelp.services.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 text-sm font-bold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
                            {item.number}
                          </span>
                          <span className="font-semibold text-brandDark dark:text-white">
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    {service.howWeHelp.cta && (
                      <a
                        href={service.howWeHelp.cta.link}
                        className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
                      >
                        {service.howWeHelp.cta.text}
                        <FaArrowRight />
                      </a>
                    )}
                  </div>

                  {service.howWeHelp.images && service.howWeHelp.images.length > 0 && (
                    <div className="relative grid h-full grid-cols-2 gap-2 p-4">
                      {service.howWeHelp.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Service ${idx + 1}`}
                          className="object-cover w-full h-full rounded-xl"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {/* ================= TESTIMONIALS ================= */}
          {service.testimonials && service.testimonials.items && service.testimonials.items.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl text-brandDark dark:text-white">
                {service.testimonials.heading}
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {service.testimonials.items.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative p-8 overflow-hidden border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl"
                  >
                    <FaQuoteLeft className="mb-4 text-3xl text-brandPrimary/20 dark:text-brandAccent/20" />
                    <p className="mb-6 text-lg italic leading-relaxed text-brandNavy dark:text-gray-400">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      {testimonial.image && (
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full"
                        />
                      )}
                      <div>
                        <p className="font-bold text-brandDark dark:text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-brandNavy dark:text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= RISK PROCESS (Risk Advisory Only) ================= */}
          {service.riskProcess && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="relative p-10 overflow-hidden border shadow-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  {service.riskProcess.title}
                </h2>
                <p className="mb-8 text-lg text-brandNavy dark:text-gray-400">
                  {service.riskProcess.description}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {service.riskProcess.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 border rounded-xl bg-surfaceLight/50 dark:bg-surfaceDark/50 border-borderLight dark:border-borderDark"
                    >
                      <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-brandDark dark:text-white">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* ================= INDUSTRY INSIGHTS (Risk Advisory Only) ================= */}
          {service.industryInsights && service.industryInsights.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-12 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                Industry <span className="text-brandPrimary dark:text-brandAccent">Insights</span>
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {service.industryInsights.map((insight, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl"
                  >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
                      {insight.category}
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-white">
                      {insight.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-brandNavy dark:text-gray-400">
                      {insight.description}
                    </p>
                    {insight.statistic && (
                      <p className="text-sm font-semibold text-brandPrimary dark:text-brandAccent">
                        {insight.statistic}
                      </p>
                    )}
                    {insight.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {insight.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-brandNavy/10 dark:bg-white/10 text-brandNavy dark:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= DIFFERENTIATORS (Risk Advisory Only) ================= */}
          {service.differentiators && service.differentiators.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-12 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                Why Choose <span className="text-brandPrimary dark:text-brandAccent">RiskMan</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {service.differentiators.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative p-6 overflow-hidden transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-3xl font-bold text-brandPrimary dark:text-brandAccent">
                          {item.number}
                        </span>
                        <div>
                          <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= CLIENT SUCCESS (Risk Advisory Style) ================= */}
          {service.clientSuccess && service.clientSuccess.length > 0 && !service.testimonials && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaUsers className="text-4xl text-brandPrimary dark:text-brandAccent" />
                <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  Client <span className="text-brandPrimary dark:text-brandAccent">Success Stories</span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {service.clientSuccess.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative p-6 overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />

                    <div className="relative z-10">
                      <h3 className="mb-3 text-lg font-bold transition-colors duration-300 text-brandPrimary dark:text-brandAccent group-hover:text-brandDark dark:group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80">
                        {item.desc}
                      </p>
                      {item.author && (
                        <div className="pt-4 mt-4 border-t border-borderLight dark:border-borderDark">
                          <p className="font-semibold text-brandDark dark:text-white">
                            {item.author}
                          </p>
                          {item.company && (
                            <p className="text-sm text-brandNavy dark:text-gray-400">
                              {item.company}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= BLOG INSIGHTS (Consulting Only) ================= */}
          {service.blogInsights && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-12 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                {service.blogInsights.heading}
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {service.blogInsights.articles.map((article, idx) => (
                  <motion.a
                    key={idx}
                    href={article.link}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="block overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                  >
                    {article.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-brandNavy dark:text-gray-400">
                        <span className="font-semibold text-brandPrimary dark:text-brandAccent">
                          {article.category}
                        </span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                        {article.title}
                      </h3>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= RESOURCES ================= */}
          {service.resources && service.resources.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaFileAlt className="text-4xl text-brandPrimary dark:text-brandAccent" />
                <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  <span className="text-brandPrimary dark:text-brandAccent">Resources</span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {service.resources.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative p-6 overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />

                    <div className="relative z-10 text-center">
                      <h3 className="mb-3 text-lg font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= WHY RISKMAN ================= */}
          {service.whyRiskMan && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="relative p-10 overflow-hidden border shadow-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl">
                <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent" />

                <div className="relative z-10">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                    Why <span className="text-brandPrimary dark:text-brandAccent">RiskMan?</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-brandNavy dark:text-gray-400">
                    {service.whyRiskMan}
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* ================= RELATED OFFERINGS ================= */}
          {service.relatedOfferings && service.relatedOfferings.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                Related <span className="text-brandPrimary dark:text-brandAccent">Offerings</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {service.relatedOfferings.map((item, idx) => (
                  <Link key={idx} to={`/services/${item.id}`}>
                    <motion.div
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative h-full p-6 overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:shadow-2xl hover:-translate-y-1 hover:border-brandGold dark:hover:border-brandAccent"
                    >
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />

                      <div className="relative z-10">
                        <h3 className="mb-2 text-lg font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                          {item.label}
                        </h3>
                        {item.desc && (
                          <p className="text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80">
                            {item.desc}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-4 text-sm font-semibold transition-all duration-300 text-brandPrimary dark:text-brandAccent group-hover:translate-x-1">
                          Learn More <FaArrowRight size={12} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= FAQ ================= */}
          {service.faqs && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                {service.faqs.heading || "Frequently Asked"}{" "}
                <span className="text-brandPrimary dark:text-brandAccent">
                  {service.faqs.heading ? "" : "Questions"}
                </span>
              </h2>

              <div className="space-y-4">
                {(service.faqs.items || service.faqs).map((item, idx) => (
                  <motion.details
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-6 transition-all duration-300 border shadow-md cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl group hover:border-brandGold dark:hover:border-brandAccent"
                    open={item.expanded}
                  >
                    <summary className="flex items-start gap-3 text-lg font-semibold list-none transition-colors duration-300 cursor-pointer text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      <FaCheckCircle className="flex-shrink-0 mt-1 text-brandPrimary dark:text-brandAccent" />
                      <span>{item.q || item.question}</span>
                    </summary>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 ml-8 leading-relaxed text-brandNavy dark:text-gray-400"
                    >
                      {item.a || item.answer}
                    </motion.p>
                  </motion.details>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= CTA ================= */}
          {service.cta && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="relative p-10 overflow-hidden text-center transition-colors duration-300 border shadow-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl md:p-12">
                <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent" />

                <div className="relative z-10">
                  <h2 className="mb-4 text-3xl font-bold text-brandDark dark:text-white md:text-4xl">
                    {service.cta.heading}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-brandNavy dark:text-gray-400">
                    {service.cta.text}
                  </p>
                  <motion.a
                    href={service.cta.link || "/contact"}
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white transition-all duration-300 rounded-full shadow-xl bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.cta.button || "Get Started"}
                    <FaArrowRight />
                  </motion.a>
                </div>
              </div>
            </motion.section>
          )}

          {/* ================= HOMEPAGE CONTENT ================= */}
          {service.homepage && (
            <div className="py-20">
              {/* Trusted Brands */}
              {service.homepage.trustedBrands && (
                <motion.section
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="mb-20 py-16 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 rounded-2xl"
                >
                  <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                    {service.homepage.trustedBrands.title}
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {service.homepage.trustedBrands.logos.map((logo, idx) => (
                      <motion.div
                        key={idx}
                        variants={scaleIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="h-20 md:h-24 flex items-center justify-center bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm"
                      >
                        <img
                          src={logo.logo}
                          alt={logo.name}
                          className="h-full max-w-[140px] object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="text-xs font-semibold text-center text-brandNavy dark:text-gray-300">${logo.name}</div>`;
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          )}

          {/* ================= BLOG SECTION ================= */}
          {service.blog && service.blog.articles && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-12 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                Latest from Our <span className="text-brandPrimary dark:text-brandAccent">Experts</span>
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {service.blog.articles.map((article, idx) => (
                  <motion.article
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="overflow-hidden transition-all duration-300 border shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-xl hover:scale-105"
                  >
                    {article.image && (
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brandPrimary to-brandDark dark:from-gray-700 dark:to-gray-900 flex items-center justify-center">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brandPrimary to-brandDark dark:from-gray-700 dark:to-gray-900"><div class="text-white text-center px-4"><div class="text-4xl mb-2">📰</div><div class="text-sm font-semibold">${article.title.substring(0, 30)}...</div></div></div>`;
                          }}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase text-brandPrimary dark:text-brandAccent">
                          {article.category}
                        </span>
                        <span className="text-xs text-brandNavy dark:text-gray-400">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-brandDark dark:text-white">
                        {article.title}
                      </h3>
                      <p className="text-sm text-brandNavy dark:text-gray-400 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="text-xs font-semibold text-brandPrimary dark:text-brandAccent">
                        By {article.author}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </section>
    </div>
  );
}
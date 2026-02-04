// src/event/components/JourneyTimeline.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeUp, stagger } from "./motionConfig";
import { journeyData } from "../pages/event/data";


/* =====================================================
   MAIN JOURNEY PAGE
===================================================== */
export default function JourneyTimeline() {
  const {
    hero,
    timeline,
    experience,
    culture,
    lifeAtRiskMan,
    summary,
  } = journeyData;

  return (
    <section className="bg-bgLight">
      <div className="container py-24 space-y-32">

        {/* ================= HERO ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-brandNavy">
            {hero.title}
          </h1>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            {hero.subtitle}
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {timeline.map((item, index) => (
            <TimelineBlock
              key={`${item.year}-${index}`}
              item={item}
              reverse={index % 2 !== 0}
            />
          ))}
        </motion.div>

        {/* ================= EXPERIENCE ================= */}
        {/* <Section title="Professional Experience">
          <GridList title="Industries" items={experience.industries} />
          <GridList title="Clients" items={experience.clients} />
          <GridList title="Service Areas" items={experience.serviceAreas} />
          <GridList
            title="Digital Transformation Exposure"
            items={experience.digitalInitiatives}
          />
        </Section> */}

        {/* ================= CULTURE ================= */}
        {/* <Section title={culture.title}>
          <p className="text-gray-600 max-w-3xl">
            {culture.description}
          </p>

          <GridList title="Core Values" items={culture.values} />
          <GridList title="Culture Highlights" items={culture.highlights} />
        </Section> */}

        {/* ================= LIFE AT RISKMAN ================= */}
        <Section title="Life at RiskMan">
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {lifeAtRiskMan.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-surfaceLight border border-borderLight rounded-xl overflow-hidden"
              >
                <div className="h-48 bg-bgLight flex items-center justify-center text-xs text-gray-400">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-brandPrimary text-sm">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    {item.date || item.location || ""}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* ================= SUMMARY ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl border-t border-borderLight pt-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {summary.text}
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* =====================================================
   TIMELINE BLOCK
===================================================== */
function TimelineBlock({ item, reverse }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`grid gap-12 items-center ${
        reverse
          ? "md:grid-cols-[1fr_1.2fr]"
          : "md:grid-cols-[1.2fr_1fr]"
      }`}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <span className="text-sm font-semibold text-brandGold">
          {item.year}
        </span>
        <h3 className="mt-1 font-heading text-2xl font-semibold text-brandPrimary">
          {item.title}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
          {item.role}
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>

      <SwipeGallery images={item.images} />
    </motion.div>
  );
}

/* =====================================================
   SWIPE GALLERY
===================================================== */
function SwipeGallery({ images = [] }) {
  const [index, setIndex] = useState(0);
  if (!images.length) return null;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center text-xs text-gray-300"
          >
            <img src={images[index]} alt="Gallery" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-brandPrimary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* =====================================================
   GENERIC SECTIONS
===================================================== */
function Section({ title, children }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-10"
    >
      <motion.h2
        variants={fadeUp}
        className="font-heading text-3xl font-semibold text-brandNavy"
      >
        {title}
      </motion.h2>
      {children}
    </motion.div>
  );
}

function GridList({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-brandPrimary mb-4">
        {title}
      </h4>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="px-4 py-3 bg-surfaceLight border border-borderLight rounded-lg text-sm text-gray-700"
          >
            {item } 
          </div>
        ))}
      </div>
    </div>
  );
}

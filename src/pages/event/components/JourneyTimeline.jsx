// src/event/components/JourneyTimeline.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeUp, stagger } from "./motionConfig";
import { journeyData } from "../data";

export default function JourneyTimeline() {
  return (
    <section className="bg-bgLight">
      <div className="container py-24">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brandNavy">
            Our Journey Through the Years
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A visual walkthrough of milestones, moments, and memories that
            shaped our journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {journeyData.map((item, index) => (
            <YearBlock key={item.year} item={item} reverse={index % 2 !== 0} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------
   Year Block
----------------------------------*/
function YearBlock({ item, reverse }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`grid gap-10 items-center ${
        reverse ? "md:grid-cols-[1fr_1.3fr]" : "md:grid-cols-[1.3fr_1fr]"
      }`}
    >
      {/* Text */}
      <div className={reverse ? "md:order-2" : ""}>
        <span className="inline-block mb-2 text-sm font-semibold text-brandGold">
          {item.year}
        </span>

        <h3 className="font-heading text-2xl font-semibold text-brandPrimary">
          {item.title}
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>

      {/* Swipe Gallery */}
      <SwipeGallery images={item.images} />
    </motion.div>
  );
}

/* --------------------------------
   Swipe Gallery
----------------------------------*/
function SwipeGallery({ images = [] }) {
  const [index, setIndex] = useState(0);

  const paginate = (dir) => {
    setIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-72 sm:h-80 overflow-hidden rounded-2xl bg-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt=""
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) paginate(1);
              if (info.offset.x > 100) paginate(-1);
            }}
            initial={{ opacity: 0, x: 120, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -120, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover cursor-grab active:cursor-grabbing"
          />
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index
                ? "bg-brandPrimary scale-110"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { FaHeart } from "react-icons/fa";

export default function TributeSection() {
  return (
    <section className="relative py-10 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container grid md:grid-cols-[380px_1fr] gap-10 items-center">

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -inset-4 bg-brandPrimary/10 rounded-3xl blur-2xl opacity-20" />
          <img
            src="https://www.riskman.in/wp-content/uploads/2020/09/prabir-sengupta.png"
            className="relative h-[420px] w-full object-cover rounded-2xl grayscale hover:grayscale-0 transition"
            alt=""
          />
        </div>

        {/* CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-brandAccent/10 text-brandAccent">
            <FaHeart /> In Loving Memory
          </div>

          <h2 className="mb-6 text-4xl font-bold">
            A Tribute to <br />
            <span className="text-brandPrimary dark:text-brandAccent">
              Excellence & Leadership
            </span>
          </h2>

          <h3 className="px-2 mb-2 text-xl font-semibold">
            Prabirsen Gupta
          </h3>
          <blockquote className="pl-4 mb-4 text-lg italic border-l-4 border-brandAccent text-brandNavy/80 dark:text-white/70">
            "Excellence is not a destination; it is a continuous journey."
          </blockquote>

          <p className="text-brandNavy/70 dark:text-white/60">
            We honor the legacy of Prabir Sen Gupta whose vision and mentorship
            laid the foundation for RiskMan.
          </p>
        </div>

      </div>
    </section>
  );
}
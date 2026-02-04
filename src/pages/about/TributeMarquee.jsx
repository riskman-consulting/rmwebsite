import React from "react";
import { FaHeart } from "react-icons/fa";

export default function TributeMarquee() {
  return (
    <div className="w-full py-4 overflow-hidden bg-surfaceLight dark:bg-surfaceDark border-y border-brandAccent/20">
      <marquee behavior="scroll" direction="left" scrollamount="15">
        <div className="flex items-center gap-8">
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-wider uppercase rounded-full bg-brandAccent/10 text-brandAccent">
              <FaHeart className="text-xs" /> In Loving Memory
            </div>
            <span className="text-xl font-bold text-brandPrimary dark:text-brandAccent">
              Prabirsen Gupta:
            </span>
            <span className="text-lg italic text-brandNavy/70 dark:text-white/70">
              "Excellence is not a destination; it is a continuous journey."
            </span>
            <span className="mx-10 text-brandAccent/30">•</span>
          </div>

          {/* Item 2 (Repeated for seamless loop feel) */}
          <div className="flex items-center gap-4">
            <p className="text-lg font-medium text-brandNavy/80 dark:text-white/80">
              We honor the legacy of Prabir Sen Gupta whose vision and mentorship laid the foundation for RiskMan.
            </p>
            <span className="mx-10 text-brandAccent/30">•</span>
          </div>
        </div>
      </marquee>
    </div>
  );
}
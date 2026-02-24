


import React from "react";
import { FaHeart } from "react-icons/fa";

export default function TributeMarquee() {
  return (
    <div className="w-full py-5 bg-surfaceLight dark:bg-surfaceDark border-y border-brandAccent/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-center gap-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase rounded-full bg-brandAccent/10 text-brandAccent">
            <FaHeart className="text-xs" />
            In Loving Memory
          </div>

          {/* Divider */}
          <span className="text-lg text-brandAccent/40">•</span>

          {/* Name */}
          {/* <span className="text-lg font-semibold text-brandPrimary dark:text-brandAccent">
            Prabir Sengupta
          </span> */}

          {/* Name */}
<span className="text-lg font-semibold text-brandPrimary dark:text-brandAccent whitespace-nowrap shrink-0">
  Prabir Sengupta
</span>


          {/* Divider */}
          <span className="text-lg text-brandAccent/40">•</span>

          {/* Quote */}
          <p className="max-w-xl text-lg italic text-brandNavy/80 dark:text-white/80">
            “Excellence is not a destination; it is a continuous journey.”
          </p>

          {/* Divider */}
          <span className="text-lg text-brandAccent/40">•</span>

          {/* Tribute */}
          <p className="max-w-xs text-base text-brandNavy/80 dark:text-white/80">
            Honoring his vision and mentorship that shaped the foundation of RiskMan.
          </p>

        </div>
      </div>
    </div>
  );
}


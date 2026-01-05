import React, { useEffect, useState } from "react";
import { Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection1 from "../../assets/images/hero-section.jpg";

/* ================= COUNTER ================= */
const StatCounter = ({ end, suffix = "", label, subLabel }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col gap-1">
      <div className="text-3xl font-extrabold text-yellow-600 lg:text-4xl xl:text-5xl dark:text-yellow-400">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold uppercase lg:text-base text-brandDark dark:text-white">
        {label}
      </div>
      <div className="text-xs lg:text-sm text-brandNavy dark:text-gray-400">
        {subLabel}
      </div>
    </div>
  );
};

/* ================= HERO ================= */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Offset content by header height + proper padding */}
      <div className="pt-[110px] pb-16 lg:pt-[140px] lg:pb-24">
        {/* ✅ CONSISTENT CONTAINER */}
        <div className="container">
          {/* ✅ PROPER VERTICAL CENTERING GRID */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

            {/* ================= LEFT COLUMN ================= */}
            <div className="flex flex-col justify-center">
              {/* ✅ RESTORED BADGE */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 lg:mb-8
                  rounded-full bg-gray-900/5 dark:bg-white/5
                  border border-gray-900/10 dark:border-white/10
                  text-sm font-bold text-gray-900/80 dark:text-white/80
                  backdrop-blur-sm transition-all duration-700 w-fit
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <span className="text-lg text-yellow-600 dark:text-yellow-400">✦</span>
                Empowering Business Growth
              </div>

              <h1
                className={`mb-6 lg:mb-8 font-extrabold tracking-tight
                  text-brandDark dark:text-brandLight
                  text-[42px] sm:text-[38px] md:text-[46px]
                  lg:text-[50px] xl:text-[60px]
                  leading-[1.1] transition-all duration-700 delay-100
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <span className="block">Clarity, Risk Value </span>
                <span className="block text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text">
                 & Assurance
                </span>
              </h1>

              <p
                className={`max-w-xl mb-10 lg:mb-12 text-base lg:text-lg text-brandNavy dark:text-gray-300
                  transition-all duration-700 delay-200 leading-relaxed
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                Empowering your business with precise audits, trusted insights,
                and assurance services that drive transparency and growth.
              </p>

              <div
                className={`flex flex-wrap gap-4 mb-12 lg:mb-16 transition-all duration-700 delay-300
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <Link
                  to="/contact"
                  className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold text-white transition rounded-xl bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-105 shadow-lg"
                >
                  Get Started
                </Link>

                <Link
                  to="/about"
                  className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold transition border rounded-xl text-brandDark dark:text-white border-borderLight dark:border-borderDark hover:bg-black/5 dark:hover:bg-white/5"
                >
                  Learn More
                </Link>
              </div>

              <div
                className={`grid grid-cols-3 gap-6 lg:gap-12 pt-8 lg:pt-10
                  border-t border-borderLight dark:border-borderDark
                  transition-all duration-700 delay-500
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <StatCounter end={15} suffix="+" label="Audit" subLabel="Excellence" />
                <StatCounter end={98} suffix="%" label="Client" subLabel="Loyalty" />
                <StatCounter end={25} suffix="+" label="Certified" subLabel="Auditors" />
              </div>
            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div
              className={`relative flex items-center justify-center lg:justify-end
                transition-all duration-1000 delay-200
                ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              `}
            >
              <div className="relative w-full max-w-[600px]">
                {/* Main Image */}
                <div className="relative overflow-hidden border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark">
                  <img
                    src={HeroSection1}
                    alt="Professional Audit Team"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Floating Card - Top Right */}
                <div className="absolute p-4 border shadow-xl lg:p-6 top-4 lg:top-6 -right-2 lg:right-6 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 text-yellow-600 rounded-lg lg:w-12 lg:h-12 bg-yellow-600/20 dark:bg-yellow-400/20 dark:text-yellow-400">
                      <Shield size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold lg:text-base dark:text-white">Trusted Verification</p>
                      <p className="text-[10px] lg:text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
                        ISO Certified Standards
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Card - Bottom Left */}
                <div className="absolute p-4 text-white shadow-xl lg:p-6 bottom-4 lg:bottom-6 -left-2 lg:left-6 rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg lg:w-12 lg:h-12 bg-white/20">
                      <TrendingUp size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <p className="text-lg font-bold lg:text-xl">15+ Years</p>
                      <p className="text-xs opacity-90">Trusted Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
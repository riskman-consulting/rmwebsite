// Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/iso/iso27001hero.png"

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Accent shapes */}
      <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandAccent/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 rounded-full w-72 h-72 bg-brandGold/10 blur-3xl"></div>

      <div className="container relative z-10 px-6 lg:px-20">
        <div className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandAccent/10 border-brandAccent/30">
              <svg
                className="w-4 h-4 text-brandAccent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">
                ISO 27701 Privacy Certification
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl font-heading">
              Build Trust with{" "}
              <span className="text-brandAccent">ISO 27701</span>{" "}
              Privacy Excellence
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-gray-200 sm:text-xl">
              Establish a robust Privacy Information Management System (PIMS),
              ensure GDPR alignment, and demonstrate accountability in handling
              personal data across your organization.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/services/iso-certifications"
                className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 font-semibold transition-all duration-300 bg-white rounded-lg shadow-lg text-brandPrimary hover:bg-brandLight hover:shadow-xl hover:scale-105 sm:w-auto"
              >
                View ISO Overview
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 font-semibold transition-all duration-300 rounded-lg shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-xl hover:scale-105 sm:w-auto"
              >
                Get ISO 27701 Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
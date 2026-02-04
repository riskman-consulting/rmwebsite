import React, { useState } from "react";
import { motion } from "framer-motion";

import image1 from "../../assets/team-accomplishment/iia_conference_mumbai_march_2025​_3.webp";

import image2 from "../../assets/team-accomplishment/iia_conference_mumbai_jan_2026​_4.webp";

import image3 from "../../assets/team-accomplishment/iia_conference_mumbai_march_2025​_1.webp";

import image5 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_2.webp";

import image6 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_4.webp";

import image7 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_5.webp";

import image8 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_7.webp";

import image9 from "../../assets/team-accomplishment/western_1.jpeg";
import image10 from "../../assets/team-accomplishment/western_2.jpeg";
import image11 from "../../assets/team-accomplishment/western_3.jpeg";
import image12 from "../../assets/team-accomplishment/western_4.jpeg";
import image13 from "../../assets/team-accomplishment/western_5.jpeg";
import image14 from "../../assets/team-accomplishment/western_6.jpeg";
import image15 from "../../assets/team-accomplishment/western_7.jpeg";
import image16 from "../../assets/team-accomplishment/western_8.jpeg";
import image17 from "../../assets/team-accomplishment/western_9.jpeg";
// import image18 from "../../assets/team-accomplishment/western_10.jpeg";

export default function EventRecognition() {
  const [activeTab, setActiveTab] = useState("accomplishments");
  const [showMoreAccomplishments, setShowMoreAccomplishments] = useState(false);
  const [showMoreEmerging, setShowMoreEmerging] = useState(false);

  /* ================= ACCOMPLISHMENTS ================= */
  const accomplishmentsInitial = [
    { image: image1 },
    { image: image17 },
    { image: image2 },
    { image: image3 },
  ];

  const allAccomplishments = [
    { image: image1 },
    { image: image17 },
    { image: image2 },
    { image: image3 },
  ];

  /* ================= EMERGING AWARDS ================= */
  const emergingInitial = [
    { image: image5 },
    { image: image6 },
    { image: image7 },
    { image: image8 },
  ];

  const allEmerging = [
    { image: image5 },
    { image: image6 },
    { image: image7 },
    { image: image8 },
    { image: image9 },
    { image: image10 },
    { image: image11 },
    { image: image12 },
    { image: image13 },
    { image: image14 },
    { image: image15 },
    { image: image16 },
  ];

  return (
    <section id="accomplishments" className="relative bg-gradient-to-b from-bgLight to-bgLight dark:from-bgDark dark:to-bgDark border-y border-borderLight dark:border-borderDark">
      <div className="container py-32">
        
        {/* PAGINATION TABS */}
        <div className="flex justify-center gap-6 mb-16">
          <motion.button
            onClick={() => setActiveTab("accomplishments")}
            className={`relative px-8 py-4 text-lg font-bold transition-all duration-300 rounded-full ${
              activeTab === "accomplishments"
                ? "bg-gradient-to-r from-brandAccent to-brandGold text-brandDark shadow-lg scale-105"
                : "text-brandDark dark:text-white hover:bg-brandAccent/10 dark:hover:bg-brandGold/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Team Accomplishment
          </motion.button>

          <motion.button
            onClick={() => setActiveTab("emerging")}
            className={`relative px-8 py-4 text-lg font-bold transition-all duration-300 rounded-full ${
              activeTab === "emerging"
                ? "bg-gradient-to-r from-brandAccent to-brandGold text-brandDark shadow-lg scale-105"
                : "text-brandDark dark:text-white hover:bg-brandAccent/10 dark:hover:bg-brandGold/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Emerging Risk Assurance & Advisory Firm of the Year 2024
          </motion.button>
        </div>

        {/* ACCOMPLISHMENTS TAB */}
        {activeTab === "accomplishments" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16">
              <h2 className="mb-4 text-4xl font-bold lg:text-5xl font-heading text-brandDark dark:text-white">
                Team Accomplishment
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-brandAccent to-brandGold rounded-full" />
              <p className="max-w-3xl mt-6 text-lg text-slate-600 dark:text-slate-400">
                Recognizing key achievements, leadership milestones, and award moments that define our journey.
              </p>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {(showMoreAccomplishments ? allAccomplishments : accomplishmentsInitial).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden transition-all duration-300 shadow-lg group rounded-2xl hover:shadow-xl h-72"
                >
                  <img
                    src={item.image}
                    alt="Team accomplishment"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setShowMoreAccomplishments(!showMoreAccomplishments)}
                className="px-8 py-3 font-semibold transition-all duration-300 rounded-full bg-gradient-to-r from-brandAccent to-brandGold text-brandDark hover:shadow-lg hover:scale-105"
              >
                {showMoreAccomplishments ? "View Less" : "View More"}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* EMERGING TAB */}
        {activeTab === "emerging" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16">
              <h2 className="mb-4 text-4xl font-bold lg:text-5xl font-heading text-brandDark dark:text-white">
                Emerging Risk Assurance & Advisory Firm of the Year 2024
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-brandAccent to-brandGold rounded-full" />
              <p className="max-w-3xl mt-6 text-lg text-slate-600 dark:text-slate-400">
                Highlights from recent events showcasing growing recognition and industry leadership.
              </p>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {(showMoreEmerging ? allEmerging : emergingInitial).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden transition-all duration-300 shadow-lg group rounded-2xl hover:shadow-xl h-72"
                >
                  <img
                    src={item.image}
                    alt="Event highlight"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setShowMoreEmerging(!showMoreEmerging)}
                className="px-8 py-3 font-semibold transition-all duration-300 rounded-full bg-gradient-to-r from-brandAccent to-brandGold text-brandDark hover:shadow-lg hover:scale-105"
              >
                {showMoreEmerging ? "View Less" : "View More"}
              </motion.button>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

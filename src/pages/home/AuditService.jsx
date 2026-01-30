import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= Swiper ================= */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ================= Images ================= */
import riskAssessmentImage from "../../assets/images/home/risk-assessment-audit.webp";
import operationalFinancialImage from "../../assets/images/home/operational-financial-audit.webp";
import riskComplianceAuditImage from "../../assets/images/home/risk-compliance-audit.webp";
import itCybersecurityImage from "../../assets/images/home/it-cybersecurity-audit.webp";

/* ================= Services Data ================= */
const services = [
  {
    id: "01",
    title: "Enterprise Risk Management",
    subtitle: "Governance & Risk",
    description:
      "Strengthening the backbone of corporate governance. We help organizations shift from reactive risk management to a proactive, risk-aware culture. By leveraging the COSO Framework, we ensure your internal controls are not just a compliance checkbox but a driver of operational efficiency.",
    image: riskAssessmentImage,
  },
  {
    id: "02",
    title: "IT Risk & Cybersecurity",
    subtitle: "Digital Assurance",
    description:
      "Securing your digital frontier in an age of volatility. Digital transformation is only as strong as its weakest link. We provide comprehensive assurance using NIST and ISO 27001 standards to safeguard your data assets and maintain stakeholder trust.",
    image: itCybersecurityImage,
  },
  {
    id: "03",
    title: "ESG & Sustainability Advisory",
    subtitle: "Sustainability",
    description:
      "Future-proofing your business for a low-carbon economy. Sustainability is no longer optional—it is a mandate from investors and regulators alike. We translate green goals into measurable metrics.",
    image: riskComplianceAuditImage,
  },
  {
    id: "04",
    title: "Financial Advisory",
    subtitle: "Capital Strategy",
    description:
      "Protecting integrity and optimizing capital structures. With leadership experience from top-tier rating agencies and global banks, we provide the technical depth required for high-stakes financial decision-making.",
    image: operationalFinancialImage,
  },
];

/* ================= Card ================= */
const RiskmanRevealCard = ({ service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="
        group h-full flex flex-col
        rounded-2xl bg-surfaceLight dark:bg-surfaceDark
        border border-borderLight dark:border-borderDark
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
      "
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden rounded-t-2xl bg-black">
        <motion.img
          src={service.image}
          alt={service.title}
          initial={{ scale: 1.08 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover
            transition-transform duration-[1800ms]
            group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-white/90 text-brandDark">
            {service.subtitle}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col py-8 px-7">
        <span className="mb-3 text-[10px] tracking-widest uppercase font-semibold text-brandDark dark:text-brandAccent">
          Advisory Service
        </span>

        <h3 className="mb-4 text-lg font-semibold text-brandDark dark:text-white">
          {service.title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-brandNavy dark:text-white/70">
          {service.description}
        </p>

        <button className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest border-b border-borderLight dark:border-borderDark hover:text-brandPrimary">
          Explore Service
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

/* ================= Main ================= */
export default function RiskmanAuditCarousel() {
  return (
    /**
     * 🔑 CRITICAL FIX:
     * - NO top padding
     * - Only bottom padding
     * - Previous section controls spacing
     */
    <section className="pt-0 pb-14 bg-bgLight dark:bg-bgDark">
      <div className="container">

        {/* HEADER — ONLY YOUR CONTENT */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-brandDark/5 text-brandDark dark:bg-brandAccent/10 dark:text-brandAccent">
            Our Key Services
          </span>

          <p className="text-base leading-relaxed text-brandNavy dark:text-white/70">
            At RiskMan, we don't just identify gaps; we build the bridges to fill
            them. Our services are designed to align with global standards while
            addressing the unique operational realities of your enterprise.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-end gap-3 mb-5">
          <button className="p-3 border rounded-full risk-prev border-borderLight dark:border-borderDark">
            <ChevronLeft />
          </button>
          <button className="p-3 border rounded-full risk-next border-borderLight dark:border-borderDark">
            <ChevronRight />
          </button>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          loop
          speed={1100}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{ prevEl: ".risk-prev", nextEl: ".risk-next" }}
          pagination={{ clickable: true, el: ".risk-pagination" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="px-3">
              <RiskmanRevealCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-3 mt-8 risk-pagination" />
      </div>
    </section>
  );
}

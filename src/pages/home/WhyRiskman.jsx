import React from "react";
import {
  Globe,
  Zap,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Award,
  Target,
  ZapIcon,
} from "lucide-react";
import { FeatureCard } from "../../components/FeatureCardProps";
import WhyRiskManImage from "../../assets/images/home/whyChoose.png";

const WhyRiskman = () => {
  return (
    <section className="relative py-20 bg-bgLight dark:bg-bgDark overflow-hidden">

      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-surfaceLight to-transparent dark:from-surfaceDark pointer-events-none" />

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest
            text-brandPrimary bg-brandAccent/10 border border-brandAccent/20 rounded-full">
            Why Partner With Us
          </span>

          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-brandDark dark:text-white mb-4">
            Why <span className="text-brandAccent">Choose</span> RiskMan?
          </h1>

          <p className="max-w-2xl mx-auto text-brandPrimary/80 dark:text-brandLight/70
            text-base md:text-lg leading-relaxed">
            Unparalleled risk management solutions driven by industry veterans
            and operational discipline.
          </p>
        </div>

        {/* HUB & SPOKE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* LEFT */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
            <FeatureCard
              align="right"
              icon={<Briefcase size={20} />}
              title="Enriched Domain Expertise"
              description="Decades of leadership experience across Big 4 firms, banks, and rating agencies."
            />
            <FeatureCard
              align="right"
              icon={<Zap size={20} />}
              title="Agile & Lean Approach"
              description="Outcome-driven delivery models focused on speed, clarity, and efficiency."
            />
          </div>

          {/* CENTER */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden
                bg-surfaceLight dark:bg-surfaceDark
                border border-borderLight dark:border-borderDark
                shadow-lg">
                <img
                  src={WhyRiskManImage}
                  alt="Leadership"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BADGES */}
              <div className="absolute -top-3 -right-6 bg-surfaceLight dark:bg-surfaceDark
                px-3 py-1.5 rounded-md border border-borderLight dark:border-borderDark
                shadow-sm flex items-center gap-2">
                <CheckCircle2 size={12} className="text-brandAccent" />
                <span className="text-[11px] font-semibold text-brandDark dark:text-white">
                  ISO Certified
                </span>
              </div>

              <div className="absolute -bottom-3 -left-6 bg-brandDark
                px-3 py-1.5 rounded-md shadow-sm flex items-center gap-2">
                <Award size={12} className="text-brandAccent" />
                <span className="text-[11px] font-semibold text-white">
                  Top Rated 2024
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:items-start">
            <FeatureCard
              align="left"
              icon={<ShieldCheck size={20} />}
              title="Predictable Engagement"
              description="Fixed pricing, transparent scope, and a 100% on-time delivery track record."
            />
            <FeatureCard
              align="left"
              icon={<Globe size={20} />}
              title="Global Footprint"
              description="Headquartered in India with delivery across USA, EU, and AMEA."
            />
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="mt-16 pt-10 border-t border-borderLight dark:border-borderDark">
          <div className="flex flex-wrap justify-center gap-10">
            <TrustItem icon={<Target size={16} />} title="100% On-Time" subtitle="Delivery" />
            <TrustItem icon={<ZapIcon size={16} />} title="Fixed Pricing" subtitle="No Surprises" />
            <TrustItem icon={<Globe size={16} />} title="Global Reach" subtitle="Multi-Region" />
          </div>
        </div>

      </div>
    </section>
  );
};

const TrustItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-full bg-surfaceLight dark:bg-surfaceDark
      border border-borderLight dark:border-borderDark
      flex items-center justify-center text-brandPrimary">
      {icon}
    </div>
    <div>
      <div className="text-sm font-bold text-brandDark dark:text-white">
        {title}
      </div>
      <div className="text-[10px] uppercase tracking-wide text-brandPrimary/70 dark:text-brandLight/60">
        {subtitle}
      </div>
    </div>
  </div>
);

export default WhyRiskman;

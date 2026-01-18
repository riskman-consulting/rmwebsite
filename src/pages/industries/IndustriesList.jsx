// src/pages/industries/IndustriesList.jsx
import { useRef } from "react";
import {  useScroll, useTransform } from "framer-motion";


// Components
import StatsSection from "../home/StatsSection";
import { ExpertiseSection } from "./ExpertiseSection";
import { IndustriesGrid } from "./IndustriesGrid";
import { CTASection } from "./CTASection";
import { HeroSection } from "./HeroSection";
import { FeatureHighlights } from "./FeatureHighlights";


export default function IndustriesList() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden text-brandDark bg-bgLight dark:bg-bgDark dark:text-white">
      <HeroSection heroRef={heroRef} y={y} opacity={opacity} />
      <StatsSection />
      <ExpertiseSection />
      <IndustriesGrid />
      <FeatureHighlights />
      <CTASection />
    </div>
  );
}
import React, { useState } from "react";
import { Mail, Phone, MapPin, Award, Shield, Zap, TrendingUp, MessageSquare, Calendar, HeadphonesIcon, ArrowRight, ExternalLink } from "lucide-react";
import { teamsImages } from "../../assets/teams";
import HeroSection from "./HeroSection";
import FormSection from './FormSection';

export default function Contact() {
  const locationData = [
    {
      location: "Kolkata, India",
      founder: "Prasen Pal",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906075/Prasen_pal_xe5jx8.webp",
    },
    {
      location: "Gurgaon, India",
      founder: "Arpit Garg",
      image: teamsImages.arpitSir
    },
    {
      location: "Chennai, India",
      founder: "Narayanan Rajendran",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768904950/narayanan_er15xk.webp"
    },
    {
      location: "Mumbai, India",
      founder: "Jitendra Khimavat",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898657/jitendra_s8wq8i.webp"
    }
  ];

  const officeFeatures = [
    { icon: <MessageSquare className="w-8 h-8 text-brandGold" />, title: "Free Consultation", description: "Initial 30-minute high-level risk assessment." },
    { icon: <Calendar className="w-8 h-8 text-brandGold" />, title: "Flexible Scheduling", description: "Available across multiple global time zones." },
    { icon: <HeadphonesIcon className="w-8 h-8 text-brandGold" />, title: "Dedicated Support", description: "Direct access to a senior account manager." },
    { icon: <Award className="w-8 h-8 text-brandGold" />, title: "Quality Assurance", description: "ISO certified processes and 98% satisfaction." }
  ];

  return (
    <div className="min-h-screen font-sans bg-bgLight dark:bg-bgDark selection:bg-brandGold/30">
      
      <HeroSection />

      {/* ================= FORM SECTION WRAPPER ================= */}
      <div className="relative z-10 px-4 -mt-20">
        <FormSection />
      </div>

      {/* ================= VALUE PROPS / FEATURES ================= */}
      <section className="container px-6 lg:px-12 py-24 mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {officeFeatures.map((f, i) => (
            <div 
              key={i} 
              className="group p-8 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brandDark/5 dark:hover:shadow-brandGold/5"
            >
              <div className="inline-block p-4 mb-6 transition-colors bg-brandLight dark:bg-bgDark rounded-2xl group-hover:bg-brandGold/10">
                {f.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-white font-heading">{f.title}</h3>
              <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LOCATION MAP ================= */}
      <section className="relative py-24 overflow-hidden bg-brandDark">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brandGold blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brandPrimary blur-[120px]" />
        </div>

        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-brandGold/20 text-brandGold text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Our Global Network
            </span>
            <h2 className="mb-6 text-4xl font-extrabold text-white md:text-5xl font-heading">
              Expertise Across <span className="text-brandGold">India</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Connect with our regional leaders for localized risk management solutions tailored to your market.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {locationData.map((loc, i) => (
              <div 
                key={i} 
                className="w-full sm:w-[280px] group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.5rem] hover:bg-white/10 hover:border-brandGold/50 transition-all duration-500"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 transition-all duration-500 scale-105 rounded-full opacity-0 bg-brandGold group-hover:opacity-20 blur-md" />
                  <img 
                    src={loc.image} 
                    alt={loc.founder} 
                    className="object-cover object-top w-full h-full transition-colors duration-500 border-4 rounded-full border-white/10 group-hover:border-brandGold"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-brandGold">{loc.founder}</h3>
                  <div className="flex items-center justify-center gap-2 mt-3 text-gray-400 transition-colors group-hover:text-white">
                    <MapPin size={16} className="text-brandGold" />
                    <span className="text-sm font-medium tracking-wide">{loc.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="container max-w-5xl px-4 py-24 mx-auto">
        <div className="bg-brandGold p-1 rounded-[3rem]"> {/* Gradient Border Wrapper */}
          <div className="bg-bgLight dark:bg-surfaceDark rounded-[2.9rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="mb-8 text-4xl font-black md:text-4xl font-heading text-brandDark dark:text-white">
                  Ready to secure your <br />
                  <span className="text-brandPrimary dark:text-brandGold">digital future?</span>
                </h2>
                <div className="flex flex-col items-center justify-center gap-6 mt-12 sm:flex-row">
                  <a 
                    href="/services" 
                    className="flex items-center gap-3 px-8 py-4 font-bold text-white transition-all rounded-full shadow-lg group bg-brandDark hover:bg-brandNavy hover:shadow-brandDark/20"
                  >
                    View Our Services
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a 
                    href="/about" 
                    className="flex items-center gap-3 px-8 py-4 font-bold transition-all border-2 rounded-full group border-brandDark dark:border-white text-brandDark dark:text-white hover:bg-brandDark hover:text-white dark:hover:bg-white dark:hover:text-brandDark"
                  >
                    About Riskman
                    <ExternalLink size={18} />
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
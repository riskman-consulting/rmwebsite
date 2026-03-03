import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "../../components/Marquee/Marquee";
import { useClientStore } from "../../store/client";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function MarqueeClientsSection({ title = "Our Marquee Clients", bgStyle = "bg-surfaceLight dark:bg-surfaceDark" }) {
  const {clients, loading, error,fetchClients} = useClientStore()


  useEffect(()=>{
    fetchClients()
    
  },[])
  return (
    <section className={`relative overflow-hidden py-14 ${bgStyle} md:py-20`}>
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-start md:text-4xl"
        >
          {title.split(" ")[0] + " "}
          {/* <br /> */}
          <span className="text-brandPrimary dark:text-brandAccent">{title.split(" ")[1]+" "}</span>{title.length >= 3 && title.split(" ").slice(2).join(" ")}
        </motion.h2>

        {/* Marquee Rows */}
        <div className="space-y-6">
          {/* Row 1 - Left to Right */}
          <Marquee
            companies={clients.slice(0, 6)}
            start={0}
            end={"-100%"}
            duration={30}
          />

          {/* Row 2 - Right to Left */}
          <Marquee
            companies={clients.slice(6, 12)}
            start={"-100%"}
            end={0}
            duration={28}
          />

          {/* Row 3 - Left to Right */}
          <Marquee
            companies={clients.slice(12, 18)}
            start={0}
            end={"-100%"}
            duration={32}
          />

          {/* Row 4 - Right to Left */}
          <Marquee
            companies={clients.slice(18, 23)}
            start={"-100%"}
            end={0}
            duration={26}
          />
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const IntroSection = ({ data }) => {
  return (
    <section className="relative bg-bgLight py-20 dark:bg-bgDark md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Label */}
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brandPrimary">
              <Compass className="h-4 w-4" />
              Our ERM Journey
            </div>

            {/* Heading */}
            <h2 className="mb-6 font-heading text-3xl font-black leading-tight text-brandDark dark:text-brandLight sm:text-4xl md:text-5xl">
              Turning Uncertainty <br />
              into <span className="text-brandPrimary dark:text-brandAccent">
                Opportunity
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-brandDark/80 dark:text-brandLight/80">
              In an ever-evolving business landscape where uncertainty is the only
              constant, RiskMan serves as the guardian of your corporate success
              story. We don’t just consult — we partner with you to navigate
              complex risks, strengthen governance, and unlock strategic
              opportunities with confidence.
            </p>
          </motion.div>

          {/* RIGHT — Visual (Zig-Zag Down) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative lg:mt-10"
          >
            <img
              src={data.image}
              alt="ERM Journey"
              className="w-full rounded-3xl object-cover shadow-xl"
            />

            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const IntroSection = ({ data }) => {
  return (
    <section className="relative py-20 bg-bgLight dark:bg-bgDark md:py-28">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-brandPrimary">
              <Compass className="w-4 h-4" />
              Our ERM Journey
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-black leading-tight font-heading text-brandDark dark:text-brandLight sm:text-4xl md:text-5xl">
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
              className="object-cover w-full shadow-xl rounded-3xl"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brandDark/10 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const WhyRiskManSection = ({ data }) => {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brandPrimary/5 dark:bg-brandPrimary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 dark:bg-brandAccent/20 border-brandAccent/30 dark:border-brandAccent/40 text-brandDark dark:text-brandAccent">
              <Award className="w-4 h-4" />
              Why Choose Us
            </div>

            <h2 className="mb-6 text-3xl font-black sm:text-4xl md:text-4xl text-brandDark dark:text-brandLight font-heading">
              {data.title}
            </h2>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandDark/70 dark:text-brandLight/70">
              {data.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {data.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="p-8 transition-all duration-300 border shadow-lg group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent rounded-2xl hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-brandDark dark:text-brandLight group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-brandDark/70 dark:text-brandLight/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default WhyRiskManSection;
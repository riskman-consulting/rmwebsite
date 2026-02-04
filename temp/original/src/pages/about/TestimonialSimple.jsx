// Alternative Testimonials Section (Without Tree - Simpler)
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CFO",
    company: "TechVentures India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "RiskMan's strategic advisory transformed our risk management approach. Their insights helped us navigate complex compliance challenges with confidence.",
  },
  {
    name: "Rajesh Kumar",
    role: "CEO",
    company: "FinSecure Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Their cybersecurity audit uncovered vulnerabilities we never knew existed. The team's expertise and professionalism are unmatched.",
  },
  {
    name: "Ananya Desai",
    role: "Director",
    company: "Healthcare Innovations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    rating: 5,
    text: "Working with RiskMan has been transformative. Their ESG advisory helped us align our business practices with sustainable growth goals.",
  },
  {
    name: "Vikram Malhotra",
    role: "COO",
    company: "RetailConnect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    rating: 4,
    text: "The forensic investigation services provided crucial insights that protected our organization. Highly recommend their meticulous approach.",
  },
  {
    name: "Meera Patel",
    role: "VP Risk Management",
    company: "BankSecure",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    rating: 5,
    text: "RiskMan's IT risk management solutions are comprehensive and practical. They helped us build a robust framework for digital transformation.",
  },
  {
    name: "Arjun Singh",
    role: "Managing Director",
    company: "AutoTech Industries",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Their compliance consulting gave us the clarity we needed to expand internationally. The team is knowledgeable, responsive, and truly invested in our success.",
  },
];

export default function TestimonialsSimple() {
  return (
    <section className="relative py-20 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      {/* Background Decorations */}
      <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-brandPrimary/5 dark:bg-brandAccent/5 blur-3xl" />
      <div className="absolute rounded-full bottom-20 right-10 w-80 h-80 bg-brandPrimary/5 dark:bg-brandAccent/5 blur-3xl" />

      <div className="container px-6 mx-auto max-w-7xl sm:px-8 md:px-10 lg:px-12">
        {/* Header with Badge */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surfaceLight dark:bg-surfaceDark rounded-full shadow-md mb-6 border border-borderLight dark:border-borderDark"
          >
            <Star className="text-brandPrimary dark:text-brandAccent" size={18} fill="currentColor" />
            <span className="text-sm font-bold tracking-wider uppercase text-brandDark dark:text-gray-300">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold md:text-5xl text-stone-900 dark:text-white"
          >
            Client
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">
              Testimonials
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-brandNavy dark:text-gray-400"
          >
            Hear what our clients say about working with RiskMan
          </motion.p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative p-8 overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 transition-all duration-300 opacity-0 pointer-events-none bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent" />

              {/* Quote Icon */}
              <FaQuoteLeft className="absolute text-4xl transition-opacity duration-500 opacity-20 top-6 right-6 group-hover:opacity-40 text-brandPrimary dark:text-brandAccent" />

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <FaStar
                      key={j}
                      className="text-lg transition-transform duration-300 text-brandGold group-hover:scale-110"
                      style={{ transitionDelay: `${j * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 italic leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-300">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-borderLight dark:border-borderDark">
                  <div className="relative">
                    <div className="absolute inset-0 transition-opacity duration-300 rounded-full bg-brandPrimary/20 dark:bg-brandAccent/20 blur opacity-40 group-hover:opacity-60" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative object-cover transition-all duration-300 border-2 rounded-full w-14 h-14 border-brandPrimary/30 dark:border-brandAccent/30 group-hover:border-brandPrimary dark:group-hover:border-brandAccent group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-brandPrimary dark:text-brandAccent">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats or CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 border shadow-xl sm:flex-row bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="mb-1 text-4xl font-bold text-brandPrimary dark:text-brandAccent">500+</div>
                <div className="text-sm text-brandNavy dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="w-px h-16 bg-borderLight dark:bg-borderDark" />
              <div className="text-center">
                <div className="mb-1 text-4xl font-bold text-brandPrimary dark:text-brandAccent">4.9</div>
                <div className="text-sm text-brandNavy dark:text-gray-400">Average Rating</div>
              </div>
              <div className="w-px h-16 bg-borderLight dark:bg-borderDark" />
              <div className="text-center">
                <div className="mb-1 text-4xl font-bold text-brandPrimary dark:text-brandAccent">98%</div>
                <div className="text-sm text-brandNavy dark:text-gray-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useHomePage } from "../../store/home";
import { useEffect } from "react";



/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};


/* ================= COMPONENT ================= */
export default function KeyServices() {
  const {keyServices,fetchHomePage} = useHomePage()

  
  
  const routeHandler = (pathUrl)=>{
    window.location.href = pathUrl;
  }


  
  useEffect(()=>{
    if(keyServices?.services.length<=0){
      fetchHomePage()
    }
  },[])
  
  return (
    <section className="transition-colors py:14 md:py-12 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-brandDark dark:text-white">
            {keyServices?.title}
          </h2>
          <p className="text-lg leading-relaxed text-brandNavy dark:text-white/70">
            {keyServices?.subtitle}
          </p>
        </div>

        {/* Vertical Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {keyServices?.services.map((service, index) => (
            <motion.article
              key={service.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service?.image?.asset?.url}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 border border-brandGold/20 rounded-t-3xl" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="block mb-2 text-sm font-semibold tracking-widest text-brandGold">
                  {service.id}
                </span>

                <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-white">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-brandNavy dark:text-white/70">
                  {service.description}
                </p>

                <button
                  onClick={()=>routeHandler(service?.path)}
                  className="inline-flex items-center gap-2 font-semibold text-brandDark hover:text-brandGold dark:text-brandAccent dark:hover:text-brandGold"
                >
                  Explore Service <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <Link
            to="/services"
           
            className="px-12 py-4 font-semibold text-white border-2 rounded-full border-brandDark bg-brandDark dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

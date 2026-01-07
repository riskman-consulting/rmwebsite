import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import internalAuditImage from '../../assets/images/home/internal-audit.png'
import professionalIntegrityExportAssuranceImage from "../../assets/images/home/professional-integrity-export-assurance.png"
import riskAssuranceImage from "../../assets/images/home/risk-assurance.png"
import complainReviewImage from '../../assets/images/home/compliance-review.png'

const AuditServicesSplit = () => {
  const [activeService, setActiveService] = useState(null);
  const [revealedImages, setRevealedImages] = useState(new Set());
  const observerRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Professional Integrity",
      subtitle: "Expert Assurance",
      description:
        "Our services are delivered by highly qualified professionals, ensuring accuracy, independence, and compliance with the highest international auditing standards for complete stakeholder confidence.",
      image:
        professionalIntegrityExportAssuranceImage,
      stats: "International Standards",
    },
    {
      id: 2,
      title: "Internal Audit",
      subtitle: "Operational Excellence",
      description:
        "We're always here to help—reach out anytime for comprehensive internal audit solutions that evaluate your operational effectiveness, identify control weaknesses, and recommend strategic improvements.",
      image:
        internalAuditImage,
      stats: "500+ Audits Completed",
    },
    {
      id: 3,
      title: "Risk Assurance",
      subtitle: "Strategic Risk Management",
      description:
        "Boost your confidence with powerful risk assurance services that identify, assess, and mitigate business risks while ensuring compliance with regulatory requirements and industry standards.",
      image:
        riskAssuranceImage,
      stats: "98% Risk Mitigation Rate",
    },
    {
      id: 4,
      title: "Compliance Review",
      subtitle: "Regulatory Excellence",
      description:
        "Ensuring accuracy, independence, and adherence to the highest regulatory and governance standards, helping your organization maintain compliance and build trust with stakeholders.",
      image:
        complainReviewImage,
      stats: "100% Compliance Rate",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = entry.target.getAttribute("data-image-id");
            setRevealedImages((prev) => new Set([...prev, imageId]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    const images = document.querySelectorAll(".service-image");
    images.forEach((image) => observerRef.current.observe(image));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="relative z-20 w-full transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark">
      {/* ✅ USING CONTAINER - Same as Features & HeroSection */}
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-start">
          <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Services
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
            Services we offer
          </h2>
          <p className="max-w-2xl text-lg text-brandNavy/80 dark:text-white/70">
            From comprehensive audit solutions to seamless compliance
            experiences, our collection is meticulously curated.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 lg:space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeService === service.id;
            const isRevealed = revealedImages.has(service.id.toString());

            return (
              <div
                key={service.id}
                className={`flex flex-col gap-8 lg:gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Image Side */}
                <div className="lg:w-1/2">
                  <div
                    data-image-id={service.id}
                    className={`service-image relative overflow-hidden transition-all duration-700 rounded-3xl shadow-xl group ${isActive
                        ? "ring-4 ring-brandGold dark:ring-brandAccent"
                        : ""
                      }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full transition-transform duration-700 h-96 group-hover:scale-110"
                    />

                    {/* Curtain Effect - Top Half */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1/2 bg-brandDark dark:bg-brandAccent transition-transform duration-1000 ease-out ${isRevealed ? "-translate-y-full" : "translate-y-0"
                        }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    />

                    {/* Curtain Effect - Bottom Half */}
                    <div
                      className={`absolute bottom-0 left-0 w-full h-1/2 bg-brandDark dark:bg-brandAccent transition-transform duration-1000 ease-out ${isRevealed ? "translate-y-full" : "translate-y-0"
                        }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    />

                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-brandDark/40 dark:bg-brandAccent/20 group-hover:opacity-100" />

                    {/* Floating Stats Badge */}
                    <div
                      className={`absolute top-6 left-6 px-4 py-2 bg-white dark:bg-brandDark rounded-full shadow-lg transition-all duration-500 ${isActive && isRevealed
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-4"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <img
                              key={i}
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${service.id}-${i}`}
                              alt="Client"
                              className="w-6 h-6 border-2 border-white rounded-full dark:border-brandDark"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className="text-yellow-400"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-1 text-xs font-semibold text-brandDark dark:text-white">
                        {service.stats}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center lg:w-1/2">
                  <div
                    className={`p-8 transition-all duration-500 border rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark ${isActive
                        ? "shadow-2xl border-brandGold dark:border-brandAccent transform lg:scale-105"
                        : "shadow-md"
                      }`}
                  >
                    <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-lg font-semibold text-brandGold dark:text-brandAccent">
                      {service.subtitle}
                    </p>
                    <p className="mb-6 text-base leading-relaxed text-brandNavy/70 dark:text-white/70">
                      {service.description}
                    </p>
                    <button
                      className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 rounded-full ${isActive
                          ? "bg-brandGold border-brandGold text-white dark:bg-brandAccent dark:border-brandAccent dark:text-brandDark"
                          : "border-brandDark text-brandDark hover:bg-brandDark hover:text-white dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark"
                        }`}
                    >
                      Learn more
                      <ArrowRight
                        size={18}
                        className={`transition-transform duration-300 ${isActive ? "translate-x-1" : ""
                          }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center gap-6 p-12 mt-20 text-center border shadow-xl rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
          <h3 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
            Ready to strengthen your financial integrity?
          </h3>
          <p className="max-w-2xl text-lg text-brandNavy/80 dark:text-white/70">
            Let's discuss how our audit and assurance services can deliver
            value-driven insights for your organization.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 rounded-full shadow-lg border-brandDark text-brandDark hover:bg-brandDark hover:text-white dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark hover:shadow-xl hover:scale-105">
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuditServicesSplit;
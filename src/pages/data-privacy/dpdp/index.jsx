import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  Users,
  Map,
  ShieldCheck,
  ArrowLeft,
  ChevronDown,
  Search,
  Globe,
  Zap,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Scale,
  FileText,
  Eye,
  Shield,
  Lock,
  Fingerprint,
  Building2,
  UserCheck,
  ClipboardList,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ───────────────────── DATA ───────────────────── */
const fiduciaryGovernance = [
  {
    title: "Significant Data Fiduciary (SDF) Classification",
    desc: "We evaluate your processing volume to determine if you meet SDF criteria requiring independent audits.",
    icon: ShieldCheck,
  },
  {
    title: "Data Protection Officer (DPO) Appointment",
    desc: "RiskMan assists in appointing a localized DPO as the primary contact for the Data Protection Board.",
    icon: Users,
  },
  {
    title: "Inventory and Mapping",
    desc: "Our teams conduct deep-asset discovery to create an immutable Record of Processing Activities (ROPA).",
    icon: Map,
  },
];

const empowermentSteps = [
  {
    title: "Multilingual Consent Orchestration",
    desc: "Deploy notice frameworks in English and scheduled Indian languages for valid, informed consent.",
  },
  {
    title: "Consent Manager Integration",
    desc: "Integrate specialized platforms allowing individuals to manage permissions via a unified interface.",
  },
  {
    title: "Rights Fulfillment Portals",
    desc: "Build automated workflows for Data Principals to exercise rights of access, correction, and erasure.",
  },
];

const operationalItems = [
  {
    t: "Breach Notification",
    d: "Designs 72-hour incident response plans for immediate reporting to the Data Protection Board.",
    icon: ShieldCheck,
  },
  {
    t: "Privacy by Design",
    d: "Embedding data protection into your product development lifecycle as a core functional requirement.",
    icon: Search,
  },
  {
    t: "Employee Training",
    d: "Delivering high-level sensitization to internal teams to prevent human-error breaches.",
    icon: BookOpen,
  },
];

const faqs = [
  {
    q: "Does DPDP apply to legacy data?",
    a: "Yes, organizations must provide fresh notices for data collected prior to enforcement. This retroactive requirement ensures all personal data falls under the new protection framework.",
  },
  {
    q: "How do you handle data localization?",
    a: "We help navigate government notifications regarding restricted cross-border transfers. Our team monitors evolving directives and adjusts your transfer mechanisms accordingly.",
  },
  {
    q: "What is a Data Processor?",
    a: "Any entity processing data on your behalf; we secure these roles through strict contracts with clearly defined responsibilities and accountability provisions.",
  },
  {
    q: "Does the Act cover offline data?",
    a: "Only if it is digitized later or originally collected in digital form. Physical-only records remain outside the Act's scope unless they are subsequently converted to digital formats.",
  },
  {
    q: "How often should we audit?",
    a: "Significant Data Fiduciaries must conduct periodic audits by an independent auditor. The frequency depends on your classification and processing scale.",
  },
];

/* ──────────────── SCROLL REVEAL HOOK ──────────────── */
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────── SHARED STYLES ─────── */
const cx = {
  section: (bg = "#fff") => ({ background: bg, padding: "6rem 0", position: "relative", overflow: "hidden" }),
  container: { maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem" },
  heading: (color = "#001F3F") => ({
    fontFamily: "Montserrat, sans-serif",
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
    fontWeight: 800,
    color,
    lineHeight: 1.2,
    marginBottom: "1rem",
  }),
  badge: (bg, color) => ({
    display: "inline-block",
    padding: "0.35rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.7rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    background: bg,
    color,
    marginBottom: "1rem",
  }),
};

/* ──────────────────── HERO SECTION ──────────────────── */
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const navigator = useNavigate()
  useEffect(() => setLoaded(true), []);

  return (
    <section className="relative overflow-hidden text-white" style={{ minHeight: "92vh" }}>
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,31,63,0.94) 0%, rgba(0,51,102,0.9) 50%, rgba(0,31,63,0.96) 100%)",
        }}
      />
      {/* Saffron-white-green accent at top */}
      <div className="absolute top-0 left-0 w-full h-1.5 flex">
        <div className="flex-1" style={{ background: "#FF9933" }} />
        <div className="flex-1" style={{ background: "#FFFFFF" }} />
        <div className="flex-1" style={{ background: "#138808" }} />
      </div>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,192,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,192,0,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 flex items-center" style={{ minHeight: "92vh", padding: "0 max(1.25rem, calc((100% - 1280px)/2))" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-[1280px] mx-auto py-20">
          {/* Left */}
          <div>
            <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)", transition: "all 0.6s ease 0.1s" }}>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide"
                style={{ background: "#FFC000", color: "#001F3F" }}
              >
                <Fingerprint size={14} /> DPDP Act 2023 | India Mandate
              </div>
            </div>

            <h1
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                margin: "1.5rem 0",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(28px)",
                transition: "all 0.7s ease 0.2s",
              }}
            >
              Strategic DPDP Compliance for{" "}
              <span style={{ color: "#FFC000" }}>Indian Operations</span>
            </h1>

            <p
              style={{
                fontSize: "1.12rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: 540,
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(28px)",
                transition: "all 0.7s ease 0.35s",
              }}
            >
              Align your enterprise with India's primary data mandate through automated consent frameworks,
              fiduciary accountability, and resilient data principal rights management.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(28px)",
                transition: "all 0.7s ease 0.45s",
              }}
            >
              <button onClick={()=>navigator("/contact")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm"
                style={{ background: "#FFC000", color: "#001F3F" }}
              >
                Connect with Our Team <ArrowRight size={16} />
              </button>
              <button onClick={()=>navigator("/services")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff" }}
              >
                <ArrowLeft size={16} /> Back to Main Page
              </button>
            </div>

            {/* Trust markers */}
            <div
              className="flex flex-wrap items-center gap-6 mt-12"
              style={{ opacity: loaded ? 1 : 0, transition: "all 0.7s ease 0.6s" }}
            >
              {["DPDP Certified", "MeitY Aligned", "ISO 27701"].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
                  <CheckCircle size={14} style={{ color: "#FFC000" }} /> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Key metrics card */}
          <div
            className="hidden lg:block"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s ease 0.5s",
            }}
          >
            <div
              className="relative p-8 overflow-hidden rounded-3xl"
              style={{
                background: "rgba(0,26,51,0.65)",
                border: "1px solid rgba(255,192,0,0.12)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,192,0,0.08) 0%, transparent 70%)" }} />
              <h3 className="mb-6 text-lg font-bold" style={{ fontFamily: "Montserrat, sans-serif", color: "#FFC000" }}>
                India Compliance Dashboard
              </h3>
              {[
                { label: "Data Fiduciary Assessments", value: "850+", sub: "across 12 Indian states" },
                { label: "Consent Frameworks Deployed", value: "1,200+", sub: "multilingual coverage" },
                { label: "Avg. Breach Response", value: "< 48hrs", sub: "well under 72-hr mandate" },
                { label: "DPO Appointments Facilitated", value: "320+", sub: "localized expertise" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                >
                  <div>
                    <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{stat.sub}</div>
                  </div>
                  <div className="text-xl font-bold" style={{ fontFamily: "Montserrat, sans-serif", color: "#fff" }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────── DATA FIDUCIARY GOVERNANCE ──────────── */
function DataFiduciarySection() {
  return (
    <section style={cx.section("#fff")}>
      <div style={cx.container}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — Image */}
          <Reveal>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                alt="Data governance and analytics"
                className="object-cover w-full rounded-3xl"
                style={{ height: 460, border: "1px solid rgba(0,31,63,0.06)" }}
              />
              <div
                className="absolute -bottom-4 -right-2 lg:-right-4 rounded-2xl px-5 py-3.5 flex items-center gap-3"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  border: "1px solid rgba(0,31,63,0.08)",
                  boxShadow: "0 16px 40px rgba(0,31,63,0.1)",
                }}
              >
                <Building2 size={22} style={{ color: "#004080" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#001F3F", fontSize: "0.85rem" }}>SDF Classified</div>
                  <div style={{ color: "#999", fontSize: "0.7rem" }}>Independent audit ready</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Content */}
          <Reveal delay={0.12}>
            <div>
              <div style={cx.badge("rgba(255,192,0,0.1)", "#004080")}>Fiduciary Governance</div>
              <h2 style={cx.heading()}>Data Fiduciary Governance</h2>
              <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Organizations must establish a clear hierarchy of accountability to manage personal data life cycles
                in accordance with the DPDP Act's standards.
              </p>

              <div className="space-y-4">
                {fiduciaryGovernance.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-5 p-5 rounded-2xl"
                      style={{
                        background: "#FAFAFA",
                        border: "1px solid rgba(0,31,63,0.06)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,192,0,0.35)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,31,63,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0,31,63,0.06)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl"
                        style={{ background: "rgba(255,192,0,0.08)" }}
                      >
                        <Icon size={24} style={{ color: "#FFC000" }} />
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#001F3F", marginBottom: "0.25rem" }}>
                          {item.title}
                        </h4>
                        <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────── CONSENT & EMPOWERMENT ──────────── */
function EmpowermentSection() {
  return (
    <section style={cx.section("#FAFAFA")}>
      <div style={cx.container}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — Content */}
          <Reveal>
            <div>
              <div style={cx.badge("rgba(0,64,128,0.06)", "#004080")}>Consent Framework</div>
              <h2 style={cx.heading()}>Consent and Principal Empowerment</h2>
              <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "2rem" }}>
                The DPDP Act requires organizations to implement transparent and revocable consent mechanisms
                across all digital touchpoints.
              </p>

              <div className="space-y-4">
                {empowermentSteps.map((step, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div
                      className="flex items-start gap-4 p-5 rounded-xl"
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(0,31,63,0.06)",
                        borderLeft: "3px solid #FFC000",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,31,63,0.06)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(255,192,0,0.1)" }}
                      >
                        <Zap size={16} style={{ color: "#FFC000" }} />
                      </div>
                      <div>
                        <h5 style={{ fontWeight: 700, color: "#001F3F", fontSize: "0.95rem", marginBottom: "0.2rem" }}>
                          {step.title}
                        </h5>
                        <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.6 }}>{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — Image with overlay */}
          <Reveal delay={0.15}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
                alt="Digital consent and user empowerment"
                className="object-cover w-full rounded-3xl"
                style={{ height: 500, border: "1px solid rgba(0,31,63,0.06)" }}
              />
              {/* Quote overlay */}
              <div
                className="absolute p-6 bottom-6 left-6 right-6 rounded-2xl"
                style={{
                  background: "rgba(0,31,63,0.92)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,192,0,0.15)",
                }}
              >
                <div style={{ color: "#FFC000", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                  India Mandate
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.6 }}>
                  "Valid, informed, and granular consent is no longer an option — it is the foundation of trust."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────── OPERATIONAL RESILIENCE ──────────── */
function OperationSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #001F3F 0%, #003366 100%)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,192,0,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(0,64,128,0.5) 0%, transparent 50%)`,
        }}
      />

      <div style={{ ...cx.container, position: "relative", zIndex: 2 }}>
        <Reveal>
          <div className="text-center" style={{ maxWidth: 640, margin: "0 auto 4rem" }}>
            <div style={cx.badge("rgba(255,192,0,0.1)", "#FFC000")}>Resilience</div>
            <h2 style={cx.heading("#fff")}>Operational Resilience and Reporting</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              Proactive breach management, privacy-first development, and organization-wide awareness programs.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {operationalItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={i} delay={i * 0.12}>
                <div
                  className="relative p-8 overflow-hidden text-center rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,192,0,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,192,0,0.2)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="flex items-center justify-center mx-auto mb-6 w-14 h-14 rounded-2xl"
                    style={{ background: "rgba(255,192,0,0.08)" }}
                  >
                    <Icon size={26} style={{ color: "#FFC000" }} />
                  </div>
                  <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: "0.75rem" }}>
                    {item.t}
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Image strip below cards */}
        <Reveal delay={0.2}>
          <div className="relative mt-12 overflow-hidden rounded-2xl" style={{ height: 220 }}>
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1200&q=80"
              alt="Team collaboration on data security"
              className="object-cover w-full h-full"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(0,31,63,0.85) 0%, rgba(0,51,102,0.5) 50%, rgba(0,31,63,0.85) 100%)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center gap-12">
              {[
                { val: "72hr", label: "Breach Response SLA" },
                { val: "100%", label: "Privacy by Design Adoption" },
                { val: "5,000+", label: "Employees Trained" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#FFC000" }}>{s.val}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginTop: "0.25rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────── FAQ SECTION ─────────────────── */
function FAQSection() {
  const [active, setActive] = useState(null);
  return (
    <section style={cx.section("#FAFAFA")}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 1.25rem" }}>
        <Reveal>
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div style={cx.badge("rgba(255,192,0,0.1)", "#004080")}>FAQ</div>
            <h2 style={{ ...cx.heading(), marginBottom: 0 }}>Compliance FAQ</h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div
                className="overflow-hidden rounded-xl"
                style={{
                  background: "#fff",
                  border: `1px solid ${active === idx ? "rgba(255,192,0,0.3)" : "rgba(0,31,63,0.06)"}`,
                  transition: "border-color 0.3s ease",
                }}
              >
                <button
                  onClick={() => setActive(active === idx ? null : idx)}
                  className="flex items-center justify-between w-full p-5 text-left"
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ fontWeight: 700, color: "#001F3F", fontSize: "0.95rem", paddingRight: "1rem" }}>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "#004080",
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: active === idx ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </button>
                <div style={{ maxHeight: active === idx ? "200px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                  <div style={{ padding: "0 1.25rem 1.25rem", color: "#666", fontSize: "0.9rem", lineHeight: 1.7, borderTop: "1px solid rgba(0,31,63,0.04)", paddingTop: "1rem" }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CTA SECTION ─────────────────── */
function CTASection() {
  return (
    <section style={cx.section("#fff")}>
      <div style={cx.container}>
        <Reveal>
          <div
            className="relative overflow-hidden text-center"
            style={{
              background: "#FFC000",
              borderRadius: "2rem",
              padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 4vw, 4rem)",
              border: "2px solid #FFB800",
            }}
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 rounded-full w-80 h-80 opacity-20" style={{ background: "radial-gradient(circle, #FFB800, transparent)", transform: "translate(30%, -40%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #001F3F, transparent)", transform: "translate(-30%, 40%)" }} />

            <div className="relative z-10">
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#001F3F",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                Secure Your Fiduciary Status
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(0,31,63,0.65)",
                  marginBottom: "2.5rem",
                  maxWidth: 560,
                  margin: "0 auto 2.5rem",
                  lineHeight: 1.7,
                }}
              >
                Ensure seamless DPDP adherence. Partner with RiskMan to transform regulatory complexity
                into a streamlined, compliant ecosystem.
              </p>
              <button
                className="inline-flex items-center gap-2 px-10 py-4 text-lg font-bold rounded-xl"
                style={{
                  background: "#001F3F",
                  color: "#fff",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 24px rgba(0,31,63,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#003366";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,31,63,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#001F3F";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,31,63,0.2)";
                }}
              >
                Request A Compliance Gap Analysis <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid rgba(0,31,63,0.06)", padding: "3rem 0" }}>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row" style={cx.container}>
        <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "#001F3F" }}>
          RISK<span style={{ color: "#FFC000" }}>MAN</span>
        </div>
        <p style={{ color: "#999", fontSize: "0.8rem" }}>© 2026 RiskMan Consulting | Specialized India DPDP Advisory</p>
      </div>
    </footer>
  );
}

/* ───────────────── MAIN PAGE ───────────────── */
export default function DPDPCompliancePage() {
  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif", color: "#001F3F", background: "#FAFAFA" }}>
      <Helmet>
        <title>DPDP Act Compliance Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting helps organizations comply with India's Digital Personal Data Protection (DPDP) Act through readiness assessments, data mapping, policy design, and ongoing compliance support." />
        <link rel="canonical" href="https://www.riskman.in/services/data-privacy/dpdp" />
      </Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap"
        rel="stylesheet"
      />
      <HeroSection />
      <DataFiduciarySection />
      <EmpowermentSection />
      <OperationSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
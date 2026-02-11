import { useState, useEffect, useRef } from "react";
import {
  Globe,
  FileText,
  Search,
  ShieldCheck,
  Trash2,
  Share2,
  ChevronDown,
  ArrowLeft,
  Scale,
  Zap,
  Lock,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Shield,
  Eye,
  Database,
  Server,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ───────────────────── DATA ───────────────────── */
const frameworks = [
  {
    title: "Privacy Impact Assessments (DPIA)",
    desc: "We identify and mitigate risks for high-stakes processing activities to meet Article 35 requirements.",
    icon: Search,
  },
  {
    title: "Lawful Basis Optimization",
    desc: "RiskMan evaluates operations to determine the most appropriate legal grounds, such as 'Contractual Necessity'.",
    icon: Scale,
  },
  {
    title: "Article 30 Record Keeping",
    desc: "We maintain detailed, evergreen inventories of processing activities for supervisory authority audits.",
    icon: FileText,
  },
];

const rights = [
  {
    title: "Automated DSAR Workflows",
    d: "Streamlining the Access Request process to meet the mandatory 30-day window.",
    icon: Zap,
  },
  {
    title: "Right to Erasure Protocols",
    d: "Mapping data across servers to ensure 'Right to be Forgotten' requests are executed.",
    icon: Trash2,
  },
  {
    title: "Portability Solutions",
    d: "Establishing secure methods to move data in structured, machine-readable formats.",
    icon: Share2,
  },
];

const faqs = [
  {
    q: "What is the 72-hour rule?",
    a: "Breach reports to supervisory authorities must occur within 72 hours of awareness. This is one of GDPR's most time-critical requirements, and failure to comply can result in significant fines.",
  },
  {
    q: "Who needs a DPO?",
    a: "Organizations involved in large-scale monitoring or processing sensitive data must appoint a Data Protection Officer. The DPO acts as an independent advocate for data protection within the organization.",
  },
  {
    q: "Does GDPR apply to small organizations?",
    a: "Yes, if they process the data of EU residents, regardless of the organization's size. GDPR applies based on data subjects' residency, not the company's location or headcount.",
  },
  {
    q: "How do you manage sub-processors?",
    a: "Through due diligence and specific contractual flow-downs to ensure they adhere to primary controller standards. Sub-processors must be vetted, documented, and continuously monitored.",
  },
  {
    q: "Is a DPA mandatory?",
    a: "Yes, a Data Processing Agreement is required whenever a controller uses a processor. This agreement outlines the scope, nature, and purpose of data processing activities.",
  },
];

const transferItems = [
  {
    t: "Transfer Impact Assessments (TIA)",
    d: "Required assessments for data moving to 'third countries' to evaluate the legal framework of the destination.",
  },
  {
    t: "Standard Contractual Clauses (SCCs)",
    d: "Implementing modular SCCs for controller-processor legalization with the latest EU-approved templates.",
  },
  {
    t: "Adequacy Monitoring",
    d: "Proactive strategy shifts for changing global jurisdictional statuses and evolving regulatory landscapes.",
  },
];

/* ───────────────── SCROLL ANIMATION HOOK ───────────────── */
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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ──────────────────── HERO SECTION ──────────────────── */
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const navigator = useNavigate()
  useEffect(() => setLoaded(true), []);

  return (
    <section className="relative overflow-hidden text-white" style={{ minHeight: "92vh" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)`,
        }}
      />
      {/* Deep navy overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,31,63,0.92) 0%, rgba(0,51,102,0.88) 50%, rgba(0,31,63,0.95) 100%)" }} />
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, transparent, #FFC000, transparent)" }} />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,192,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,192,0,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex items-center" style={{ minHeight: "92vh", padding: "0 max(1.25rem, calc((100% - 1280px)/2))" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-[1280px] mx-auto py-20">
          {/* Left content */}
          <div>
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.6s ease 0.1s",
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                style={{
                  background: "rgba(0,64,128,0.4)",
                  border: "1px solid rgba(255,192,0,0.3)",
                  color: "#FFC000",
                }}
              >
                <Globe size={14} /> EU Privacy Standard
              </div>
            </div>

            <h1
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease 0.2s",
              }}
            >
              Global GDPR Governance for{" "}
              <span style={{ color: "#FFC000" }}>Resilient Organizations</span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "540px",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease 0.35s",
              }}
            >
              Ensure seamless compliance with the EU's gold standard for privacy
              through expert consulting, impact assessments, and cross-border
              transfer strategies.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease 0.45s",
              }}
            >
              <button onClick={()=>navigator("/contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm"
                style={{ background: "#FFC000", color: "#001F3F" }}
              >
                Consult A Specialist <ArrowRight size={16} />
              </button>
              <button onClick={()=>navigator("/services")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                }}
              >
                <ArrowLeft size={16} /> Back To Main Page
              </button>
            </div>

            {/* Trust badges */}
            <div
              className="flex items-center gap-6 mt-12"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "all 0.7s ease 0.6s",
              }}
            >
              {["ISO 27701", "SOC 2", "EU-US DPF"].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs font-semibold"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <CheckCircle size={14} style={{ color: "#FFC000" }} />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats card */}
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
                background: "rgba(0,26,51,0.7)",
                border: "1px solid rgba(255,192,0,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,192,0,0.1) 0%, transparent 70%)" }} />
              <h3 className="mb-6 text-lg font-bold" style={{ fontFamily: "Montserrat, sans-serif", color: "#FFC000" }}>
                Compliance at a Glance
              </h3>
              {[
                { label: "Data Processing Records", value: "2,400+", sub: "across 30 jurisdictions" },
                { label: "Avg. DSAR Response Time", value: "< 72hrs", sub: "below 30-day mandate" },
                { label: "Successful Audits", value: "99.7%", sub: "pass rate for clients" },
                { label: "Active DPO Engagements", value: "180+", sub: "enterprise-grade support" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                >
                  <div>
                    <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {stat.label}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {stat.sub}
                    </div>
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

/* ──────────────── FRAMEWORK SECTION ──────────────── */
function FrameworkSection() {
  const IconMap = { Search, Scale, FileText };
  return (
    <section style={{ background: "#FAFAFA", padding: "6rem 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem" }}>
        <RevealSection>
          <div className="text-center" style={{ maxWidth: 640, margin: "0 auto 4rem" }}>
            <div
              className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full"
              style={{ background: "rgba(255,192,0,0.1)", color: "#004080" }}
            >
              Core Services
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "#001F3F", marginBottom: "1rem" }}>
              Advanced Regulatory Frameworks
            </h2>
            <p style={{ color: "#666", lineHeight: 1.7 }}>
              Organizations operating within the EEA must adhere to a "high-water mark" of privacy demanding continuous monitoring.
            </p>
          </div>
        </RevealSection>

        <div className="grid gap-8 md:grid-cols-3">
          {frameworks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealSection key={idx} delay={idx * 0.12}>
                <div
                  className="relative p-8 overflow-hidden rounded-2xl group"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,31,63,0.08)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,192,0,0.5)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,31,63,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,31,63,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{
                      background: "linear-gradient(90deg, #FFC000, #FFB800)",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease",
                    }}
                    ref={(el) => {
                      if (el) {
                        const parent = el.parentElement;
                        parent.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
                        parent.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
                      }
                    }}
                  />
                  <div
                    className="flex items-center justify-center mb-6 w-14 h-14 rounded-2xl"
                    style={{ background: "rgba(255,192,0,0.08)" }}
                  >
                    <Icon size={28} style={{ color: "#FFC000" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#001F3F",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────── INTERNATIONAL SECTION ────────────── */
function InternationalSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #001F3F 0%, #003366 100%)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,192,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,64,128,0.5) 0%, transparent 50%)`,
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem", position: "relative", zIndex: 2 }}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Image */}
          <RevealSection>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
                alt="Data encryption visualization"
                className="object-cover w-full rounded-3xl"
                style={{
                  height: 480,
                  border: "1px solid rgba(255,192,0,0.15)",
                }}
              />
              {/* Floating badge */}
              <div
                className="absolute flex items-center gap-3 px-6 py-4 -bottom-5 -right-3 lg:-right-5 rounded-2xl"
                style={{
                  background: "rgba(0,26,51,0.95)",
                  border: "1px solid rgba(255,192,0,0.2)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <Shield size={24} style={{ color: "#FFC000" }} />
                <div>
                  <div className="text-sm font-bold text-white">30+ Jurisdictions</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>Active compliance</div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Right - Content */}
          <RevealSection delay={0.15}>
            <div>
              <div
                className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full"
                style={{ background: "rgba(255,192,0,0.1)", color: "#FFC000" }}
              >
                Cross-Border
              </div>
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                International Data Sovereignty
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Managing data flows across borders requires sophisticated legal and technical safeguards to ensure
                equivalent protection levels.
              </p>
              <div className="space-y-5">
                {transferItems.map((info, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,192,0,0.05)";
                      e.currentTarget.style.borderColor = "rgba(255,192,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <ShieldCheck size={22} style={{ color: "#FFC000", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <h5 style={{ fontWeight: 700, color: "#FFC000", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                        {info.t}
                      </h5>
                      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.6 }}>{info.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SUBJECT RIGHTS SECTION ──────────────── */
function SubjectSection() {
  const IconMap = { Zap, Trash2, Share2 };
  return (
    <section style={{ background: "#fff", padding: "6rem 0", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem" }}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Content */}
          <RevealSection>
            <div>
              <div
                className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full"
                style={{ background: "rgba(0,64,128,0.06)", color: "#004080" }}
              >
                Rights Management
              </div>
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#001F3F",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Data Subject Rights Management
              </h2>
              <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Highly responsive and automated internal infrastructure for rights fulfillment, ensuring your
                organization meets every obligation with precision.
              </p>

              <div className="space-y-5">
                {rights.map((right, i) => {
                  const Icon = right.icon;
                  return (
                    <RevealSection key={i} delay={i * 0.1}>
                      <div
                        className="flex gap-5 p-5 rounded-2xl"
                        style={{
                          background: "#FAFAFA",
                          border: "1px solid rgba(0,31,63,0.06)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0,64,128,0.2)";
                          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,31,63,0.06)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0,31,63,0.06)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div
                          className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl"
                          style={{ background: "rgba(0,64,128,0.06)" }}
                        >
                          <Icon size={22} style={{ color: "#004080" }} />
                        </div>
                        <div>
                          <h4
                            style={{
                              fontFamily: "Montserrat, sans-serif",
                              fontWeight: 700,
                              fontSize: "1.05rem",
                              color: "#001F3F",
                              marginBottom: "0.3rem",
                            }}
                          >
                            {right.title}
                          </h4>
                          <p style={{ color: "#888", fontSize: "0.875rem", lineHeight: 1.6 }}>{right.d}</p>
                        </div>
                      </div>
                    </RevealSection>
                  );
                })}
              </div>
            </div>
          </RevealSection>

          {/* Right - Image */}
          <RevealSection delay={0.15}>
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80"
                alt="Data privacy and security"
                className="object-cover w-full rounded-3xl"
                style={{ height: 540, border: "1px solid rgba(0,31,63,0.08)" }}
              />
              {/* Overlay card */}
              <div
                className="absolute p-5 -bottom-4 -left-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(0,31,63,0.08)",
                  boxShadow: "0 20px 40px rgba(0,31,63,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg"
                    style={{ background: "rgba(0,64,128,0.08)" }}
                  >
                    <Eye size={20} style={{ color: "#004080" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#001F3F", fontSize: "0.9rem" }}>Full Transparency</div>
                    <div style={{ color: "#999", fontSize: "0.75rem" }}>Real-time rights tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FAQ SECTION ─────────────────── */
function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(null);
  return (
    <section style={{ background: "#FAFAFA", padding: "6rem 0" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 1.25rem" }}>
        <RevealSection>
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div
              className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full"
              style={{ background: "rgba(255,192,0,0.1)", color: "#004080" }}
            >
              FAQ
            </div>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                fontWeight: 800,
                color: "#001F3F",
              }}
            >
              GDPR Knowledge Center
            </h2>
          </div>
        </RevealSection>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <RevealSection key={idx} delay={idx * 0.06}>
              <div
                className="overflow-hidden rounded-xl"
                style={{
                  background: "#fff",
                  border: `1px solid ${activeFaq === idx ? "rgba(255,192,0,0.3)" : "rgba(0,31,63,0.06)"}`,
                  transition: "border-color 0.3s ease",
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="flex items-center justify-between w-full p-5 text-left"
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ fontWeight: 700, color: "#001F3F", fontSize: "0.95rem", paddingRight: "1rem" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "#004080",
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: activeFaq === idx ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: activeFaq === idx ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 1.25rem 1.25rem",
                      color: "#666",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(0,31,63,0.04)",
                      paddingTop: "1rem",
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CTA SECTION ─────────────────── */
function CTASection() {
  return (
    <section style={{ background: "#fff", padding: "6rem 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem" }}>
        <RevealSection>
          <div
            className="relative overflow-hidden text-center"
            style={{
              background: "linear-gradient(135deg, #001F3F 0%, #003366 60%, #001F3F 100%)",
              borderRadius: "2rem",
              padding: "clamp(3rem, 6vw, 6rem) clamp(2rem, 4vw, 4rem)",
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute top-0 right-0 rounded-full w-96 h-96 opacity-10"
              style={{ background: "radial-gradient(circle, #FFC000, transparent)", transform: "translate(30%, -40%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
              style={{ background: "radial-gradient(circle, #FFC000, transparent)", transform: "translate(-30%, 40%)" }}
            />
            {/* Gold line accent */}
            <div
              className="absolute top-0 w-24 h-1 -translate-x-1/2 rounded-b-full left-1/2"
              style={{ background: "#FFC000" }}
            />

            <div className="relative z-10">
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2,
                }}
              >
                Strengthen Your European Footprint
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "2.5rem",
                  maxWidth: 580,
                  margin: "0 auto 2.5rem",
                  lineHeight: 1.7,
                }}
              >
                Leverage RiskMan's deep expertise to build a GDPR-compliant framework that enhances stakeholder trust
                and enables global data flows.
              </p>
              <button
                className="inline-flex items-center gap-2 px-10 py-4 text-lg font-bold rounded-xl"
                style={{
                  background: "#FFC000",
                  color: "#001F3F",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFB800";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(255,192,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FFC000";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Secure Your GDPR Audit <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  return (
    <footer
      style={{
        background: "#fff",
        borderTop: "1px solid rgba(0,31,63,0.06)",
        padding: "3rem 0",
      }}
    >
      <div
        className="flex flex-col items-center justify-between gap-4 md:flex-row"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem" }}
      >
        <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "#001F3F" }}>
          Risk<span style={{ color: "#FFC000" }}>Man</span>
          <span style={{ fontSize: "0.65rem", fontWeight: 400, color: "#999", marginLeft: "0.5rem" }}>
            gdpr division
          </span>
        </div>
        <p style={{ color: "#999", fontSize: "0.8rem" }}>
          © 2026 RiskMan Consulting | EEA Data Sovereignty & GDPR Compliance
        </p>
      </div>
    </footer>
  );
}

/* ───────────────── MAIN PAGE ───────────────── */
export default function GDPRCompliancePage() {
  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif", color: "#001F3F", background: "#FAFAFA" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap"
        rel="stylesheet"
      />
      <HeroSection />
      <FrameworkSection />
      <InternationalSection />
      <SubjectSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
import { useState } from "react";
import {
  Globe,
  ChevronDown,
  ArrowLeft,
  Shield,
  Map,
  FileText,
  Stethoscope,
  Building2,
  Zap,
  LayoutDashboard,
  Lock,
  Scale,
  Eye,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ─── palette (mirrors tailwind config) ─── */
const C = {
  brandDark: "#001F3F",
  brandNavy: "#003366",
  brandPrimary: "#004080",
  brandLight: "#F5F5F5",
  brandAccent: "#FFC000",
  brandGold: "#FFB800",
  bgLight: "#FAFAFA",
  bgDark: "#001122",
  surfaceLight: "#FFFFFF",
  surfaceDark: "#001A33",
  borderLight: "rgba(0,31,63,0.1)",
  borderDark: "rgba(255,192,0,0.15)",
};

/* ─── data ─── */
const stateFrameworks = [
  {
    title: "CCPA / CPRA Alignment",
    desc: "Implementing 'Do Not Sell or Share' mechanisms and sensitive data limitations for California residents.",
    Icon: Shield,
  },
  {
    title: "Multi-State Synchronization",
    desc: "Creating a baseline standard covering Virginia (VCDPA), Colorado (CPA), and emerging state regulations.",
    Icon: Map,
  },
  {
    title: "Notice at Collection",
    desc: "Designing dynamic notices that inform consumers of data categories at the point of entry.",
    Icon: FileText,
  },
];

const industryCards = [
  {
    t: "HIPAA Safeguards",
    d: "Technical controls to protect Electronic Protected Health Information (ePHI).",
    Icon: Stethoscope,
  },
  {
    t: "GLBA Compliance",
    d: "Managing Non-Public Personal Information (NPI) through encryption.",
    Icon: Building2,
  },
  {
    t: "Cross-Sectoral Mapping",
    d: "Identifying overlapping rules to eliminate redundant compliance tasks.",
    Icon: Zap,
  },
];

const internationalMarkets = [
  {
    title: "Brazil LGPD Integration",
    d: "Mapping processes to the ten legal bases for South American operations.",
    Icon: Globe,
  },
  {
    title: "Middle East & APAC",
    d: "Localized expertise for Saudi Arabia (PDPL) and Singapore (PDPA).",
    Icon: Globe,
  },
  {
    title: "Unified Dashboard",
    d: "A 'single pane of glass' view to monitor compliance across dozens of jurisdictions.",
    Icon: LayoutDashboard,
  },
];

const faqs = [
  {
    q: 'What is the "Right to Limit Use" in CCPA?',
    a: "It allows consumers to restrict the use and disclosure of their Sensitive Personal Information (SPI) by an organization.",
  },
  {
    q: "Does HIPAA apply to tech companies?",
    a: "Yes, if they handle Protected Health Information (PHI) as a 'Business Associate' for a healthcare provider or insurer.",
  },
  {
    q: "How does LGPD differ from GDPR?",
    a: "While similar, LGPD has different legal bases, specific requirements for an 'Encarregado' (DPO), and different breach notification timelines.",
  },
  {
    q: "What is PIPL?",
    a: "China's Personal Information Protection Law, featuring strict data localization requirements and heavy penalties for non-compliance.",
  },
  {
    q: "Do US laws require a DPO?",
    a: "Most US state laws do not strictly mandate a DPO by title, but they recommend a designated privacy lead to oversee compliance.",
  },
];

/* ─── helpers ─── */
const container = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "0 1.25rem",
};

/* ─── HERO ─── */
function HeroSection() {
  const navigator = useNavigate()
  return (
    <section
      style={{
        position: "relative",
        color: "#fff",
        padding: "7rem 0 6rem",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${C.brandDark} 0%, ${C.brandNavy} 40%, ${C.brandPrimary} 100%)`,
      }}
    >
      {/* hero image overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />
      {/* noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-conic-gradient(rgba(255,255,255,0.015) 0% 25%, transparent 0% 50%) 0 0/4px 4px",
        }}
      />
      {/* decorative globe */}
      <Globe
        style={{
          position: "absolute",
          right: -80,
          top: -40,
          width: 520,
          height: 520,
          color: C.brandAccent,
          opacity: 0.06,
        }}
      />

      <div style={{ ...container, position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 740 }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: "rgba(0,64,128,0.45)",
              border: "1px solid rgba(0,64,128,0.7)",
              color: "#93c5fd",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 28,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Multi-Jurisdictional Privacy
          </span>

          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Unified Compliance for{" "}
            <span style={{ color: C.brandAccent }}>
              Global Privacy Mandates
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#bcc8d6",
              lineHeight: 1.7,
              maxWidth: 600,
              marginBottom: 40,
            }}
          >
            Streamline your international regulatory obligations by integrating
            CCPA, HIPAA, and regional data laws into a single,
            high-performance privacy management system.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <button onClick={()=>navigator("/services")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                color: C.brandDark,
                padding: "14px 32px",
                borderRadius: 6,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <ArrowLeft size={16} /> Back To Main Page
            </button>
            <button onClick={()=>navigator("/contact")}
              style={{
                background: C.brandAccent,
                color: C.brandDark,
                padding: "14px 32px",
                borderRadius: 6,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                boxShadow: `0 12px 40px ${C.brandAccent}22`,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Request Global Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FRAMEWORKS ─── */
function FrameworksSection() {
  return (
    <section style={{ padding: "5.5rem 0", background: "#fff" }}>
      <div style={container}>
        <div
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3.5rem" }}
        >
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              marginBottom: 12,
              color: C.brandDark,
            }}
          >
            US State Privacy Frameworks
          </h2>
          <p style={{ color: "#666", fontSize: 16, lineHeight: 1.7 }}>
            Navigate a patchwork of state-level laws, starting with the
            foundational requirements of California's privacy statutes.
          </p>
        </div>

        {/* image banner */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 48,
            height: 260,
            background: `linear-gradient(to right, ${C.brandNavy}, ${C.brandPrimary})`,
            position: "relative",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1508738249927-2e79926b58cf?w=1200&q=80"
            alt="US privacy landscape"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.35,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <Scale size={48} color={C.brandAccent} />
            <span
              style={{
                color: "#fff",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: 1,
              }}
            >
              50+ State-Level Regulations Managed
            </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {stateFrameworks.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: 32,
                border: `1px solid ${C.borderLight}`,
                borderRadius: 16,
                transition: "all .3s",
                cursor: "default",
                background: "#fff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.brandAccent;
                e.currentTarget.style.background = C.brandLight;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.borderLight;
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <item.Icon
                size={32}
                color={C.brandAccent}
                style={{ marginBottom: 20 }}
              />
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: C.brandDark,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SPECIFIC (Industry) ─── */
function SpecificSection() {
  return (
    <section
      style={{ padding: "5.5rem 0", background: C.brandNavy, color: "#fff" }}
    >
      <div style={container}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* left */}
          <div style={{ flex: "1 1 420px" }}>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                marginBottom: 20,
                color: C.brandGold,
              }}
            >
              Industry-Specific Data Standards
            </h2>
            <p
              style={{
                color: "#b0bec5",
                fontSize: 17,
                marginBottom: 36,
                lineHeight: 1.7,
              }}
            >
              Specialized controls for healthcare and finance that go beyond
              general privacy mandates.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {industryCards.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: 20,
                    background: "rgba(0,64,128,0.25)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <item.Icon
                    size={24}
                    color={C.brandAccent}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <h5
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        marginBottom: 4,
                      }}
                    >
                      {item.t}
                    </h5>
                    <p style={{ fontSize: 13, color: "#90a4ae" }}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right – image + quote card */}
          <div style={{ flex: "1 1 400px" }}>
            {/* image */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                marginBottom: 24,
                height: 220,
                position: "relative",
              }}
            >
              <img
                src="https://medtrainer.com/wp-content/uploads/2023/09/Key-Healthcare-Compliance-Examples-To-Understand-Its-Importance.png"
                alt="Healthcare compliance"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,26,51,0.85) 0%, transparent 60%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 24,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Lock size={18} color={C.brandAccent} />
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    End-to-End Data Protection
                  </span>
                </div>
              </div>
            </div>

            {/* quote card */}
            <div
              style={{
                padding: 3,
                background: `linear-gradient(135deg, ${C.brandAccent}, ${C.brandPrimary})`,
                borderRadius: 28,
              }}
            >
              <div
                style={{
                  background: C.surfaceDark,
                  padding: "36px 32px",
                  borderRadius: 26,
                }}
              >
                <h3
                  style={{
                    color: C.brandGold,
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 14,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Vertical Compliance
                </h3>
                <p
                  style={{
                    color: "#b0bec5",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    fontSize: 15,
                  }}
                >
                  "RiskMan identifies the intersection of industry regulations
                  and privacy laws to ensure no data asset is left
                  unprotected."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── INTERNATIONAL ─── */
function InternationalSection() {
  return (
    <section style={{ padding: "6rem 0", background: "#fff" }}>
      <div style={container}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              marginBottom: 12,
              color: C.brandDark,
            }}
          >
            Emerging International Markets
          </h2>
          <p style={{ color: "#666", fontSize: 16 }}>
            Enter new markets without being stalled by localized requirements.
          </p>
        </div>

        {/* image strip */}
        <div
          style={{
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 48,
            height: 240,
            position: "relative",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80"
            alt="Global map"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${C.brandDark}dd 0%, ${C.brandPrimary}99 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <Eye size={40} color={C.brandAccent} />
            <span
              style={{
                color: "#fff",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              120+ Jurisdictions Covered
            </span>
            <span style={{ color: "#93c5fd", fontSize: 14 }}>
              From GDPR to PIPL — one platform, every regulation
            </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 28,
          }}
        >
          {internationalMarkets.map((market, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "40px 28px",
                background: C.brandLight,
                borderRadius: 24,
                border: "2px solid transparent",
                transition: "all .3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.brandPrimary;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,31,63,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 4px 16px rgba(0,31,63,0.07)",
                }}
              >
                <market.Icon size={26} color={C.brandPrimary} />
              </div>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 10,
                  color: C.brandDark,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {market.title}
              </h4>
              <p
                style={{ fontSize: 14, color: "#777", lineHeight: 1.7 }}
              >
                {market.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const [active, setActive] = useState(null);
  return (
    <section style={{ padding: "5.5rem 0", background: C.bgLight }}>
      <div style={{ ...container, maxWidth: 740 }}>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 800,
            marginBottom: 40,
            textAlign: "center",
            color: C.brandDark,
          }}
        >
          Global Privacy FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, idx) => {
            const open = active === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  boxShadow: "0 2px 8px rgba(0,31,63,0.04)",
                  border: `1px solid ${C.borderLight}`,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setActive(open ? null : idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    textAlign: "left",
                    fontWeight: 700,
                    fontSize: 15,
                    color: C.brandNavy,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <span style={{ paddingRight: 16 }}>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    color={C.brandPrimary}
                    style={{
                      flexShrink: 0,
                      transform: open ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform .25s",
                    }}
                  />
                </button>
                {open && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                      color: "#555",
                      borderTop: "1px solid #f5f5f5",
                      paddingTop: 16,
                      fontSize: 14,
                      lineHeight: 1.7,
                      animation: "fadeSlide .25s ease-out",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section style={{ padding: "5.5rem 0" }}>
      <div style={container}>
        <div
          style={{
            background: C.brandPrimary,
            borderRadius: 40,
            padding: "clamp(48px, 6vw, 96px) clamp(32px, 4vw, 80px)",
            textAlign: "center",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,31,63,0.25)",
          }}
        >
          {/* radial glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top left, rgba(255,192,0,0.2), transparent 60%)",
            }}
          />
          {/* image bg */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.06,
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 3.4rem)",
                fontWeight: 800,
                marginBottom: 20,
                lineHeight: 1.15,
              }}
            >
              Simplify Your International Compliance
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "#a5c4e8",
                marginBottom: 44,
                maxWidth: 580,
                margin: "0 auto 44px",
                lineHeight: 1.7,
              }}
            >
              Turn global regulatory fragmentation into a unified business
              advantage with RiskMan's cross-border privacy expertise.
            </p>
            <button
              style={{
                background: C.brandGold,
                color: C.brandDark,
                padding: "18px 48px",
                borderRadius: 6,
                fontWeight: 900,
                fontSize: 18,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 12px 40px rgba(255,184,0,0.3)",
                transition: "transform .2s",
                fontFamily: "Montserrat, sans-serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Start Your Global Roadmap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer
      style={{
        padding: "48px 0",
        borderTop: `1px solid ${C.borderLight}`,
        background: "#fff",
      }}
    >
      <div
        style={{
          ...container,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: -1,
            color: C.brandNavy,
            textTransform: "uppercase",
          }}
        >
          RISK<span style={{ color: C.brandAccent }}>MAN</span>
          <span
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "#999",
              textTransform: "lowercase",
              marginLeft: 10,
            }}
          >
            global division
          </span>
        </div>
        <p style={{ color: "#999", fontSize: 13 }}>
          © 2026 RiskMan Consulting | CCPA, HIPAA & Global Privacy Strategy
        </p>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function OtherCompliancesPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: C.bgLight, color: C.brandDark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        img { display: block; }
        button { font-family: inherit; }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <HeroSection />
      <FrameworksSection />
      <SpecificSection />
      <InternationalSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
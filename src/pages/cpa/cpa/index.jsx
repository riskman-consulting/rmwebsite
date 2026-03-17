import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

// ─── THEME TOKENS (from tailwind config, applied via inline + CSS vars) ───
const theme = {
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
  borderLight: "rgba(0, 31, 63, 0.1)",
  borderDark: "rgba(255, 192, 0, 0.15)",
};

// ─── SVG ILLUSTRATIONS ───
const HeroIllustration = () => (
  <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="heroGrad1" x1="0" y1="0" x2="600" y2="500" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC000" stopOpacity="0.3" />
        <stop offset="1" stopColor="#004080" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="heroGrad2" x1="200" y1="100" x2="500" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC000" stopOpacity="0.6" />
        <stop offset="1" stopColor="#FFB800" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    {/* Abstract building / shield shapes */}
    <rect x="120" y="140" width="100" height="260" rx="6" fill="#004080" opacity="0.25" />
    <rect x="140" y="100" width="100" height="300" rx="6" fill="#004080" opacity="0.35" />
    <rect x="260" y="80" width="120" height="320" rx="6" fill="#003366" opacity="0.4" />
    <rect x="280" y="60" width="80" height="340" rx="6" fill="url(#heroGrad2)" opacity="0.5" />
    <rect x="400" y="120" width="100" height="280" rx="6" fill="#004080" opacity="0.3" />
    <rect x="420" y="160" width="60" height="240" rx="6" fill="#003366" opacity="0.2" />
    {/* Shield overlay */}
    <path d="M300 50 L420 110 L420 280 Q420 380 300 430 Q180 380 180 280 L180 110 Z" fill="none" stroke="#FFC000" strokeWidth="2" opacity="0.4" />
    <path d="M300 80 L400 130 L400 270 Q400 350 300 400 Q200 350 200 270 L200 130 Z" fill="url(#heroGrad1)" opacity="0.15" />
    {/* Check mark inside shield */}
    <path d="M250 230 L285 265 L355 195" stroke="#FFC000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    {/* Decorative dots */}
    {[...Array(8)].map((_, i) => (
      <circle key={i} cx={100 + i * 60} cy={440} r="3" fill="#FFC000" opacity={0.2 + i * 0.05} />
    ))}
    {/* Floating data lines */}
    <line x1="460" y1="100" x2="540" y2="100" stroke="#FFC000" strokeWidth="2" opacity="0.3" />
    <line x1="470" y1="120" x2="530" y2="120" stroke="#FFC000" strokeWidth="2" opacity="0.2" />
    <line x1="460" y1="140" x2="550" y2="140" stroke="#FFC000" strokeWidth="2" opacity="0.25" />
    <line x1="480" y1="160" x2="540" y2="160" stroke="#FFC000" strokeWidth="2" opacity="0.15" />
  </svg>
);

const GovernanceIllustration = () => (
  <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="govGrad" x1="0" y1="0" x2="500" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC000" stopOpacity="0.4" />
        <stop offset="1" stopColor="#004080" stopOpacity="0.15" />
      </linearGradient>
    </defs>
    {/* Network/graph visualization */}
    <circle cx="250" cy="200" r="60" fill="#004080" opacity="0.2" stroke="#FFC000" strokeWidth="1"  />
    <circle cx="250" cy="200" r="30" fill="#FFC000" opacity="0.15" />
    <circle cx="100" cy="100" r="35" fill="#004080" opacity="0.15" stroke="#FFC000" strokeWidth="1"  />
    <circle cx="400" cy="100" r="35" fill="#004080" opacity="0.15" stroke="#FFC000" strokeWidth="1"  />
    <circle cx="100" cy="300" r="35" fill="#004080" opacity="0.15" stroke="#FFC000" strokeWidth="1"  />
    <circle cx="400" cy="300" r="35" fill="#004080" opacity="0.15" stroke="#FFC000" strokeWidth="1"  />
    {/* Connecting lines */}
    <line x1="130" y1="120" x2="220" y2="180" stroke="#FFC000" strokeWidth="1.5" opacity="0.3" />
    <line x1="370" y1="120" x2="280" y2="180" stroke="#FFC000" strokeWidth="1.5" opacity="0.3" />
    <line x1="130" y1="280" x2="220" y2="220" stroke="#FFC000" strokeWidth="1.5" opacity="0.3" />
    <line x1="370" y1="280" x2="280" y2="220" stroke="#FFC000" strokeWidth="1.5" opacity="0.3" />
    <line x1="100" y1="135" x2="100" y2="265" stroke="#FFC000" strokeWidth="1" opacity="0.2" />
    <line x1="400" y1="135" x2="400" y2="265" stroke="#FFC000" strokeWidth="1" opacity="0.2" />
    <line x1="135" y1="100" x2="365" y2="100" stroke="#FFC000" strokeWidth="1" opacity="0.2" />
    <line x1="135" y1="300" x2="365" y2="300" stroke="#FFC000" strokeWidth="1" opacity="0.2" />
    {/* Center icon */}
    <path d="M240 190 L250 180 L260 190 L260 210 L240 210 Z" fill="#FFC000" opacity="0.6" />
    <circle cx="250" cy="200" r="5" fill="#FFC000" opacity="0.8" />
    {/* Data points */}
    {[90, 160, 240, 320, 400].map((x, i) => (
      <rect key={i} x={x} y={350} width="20" height={20 + i * 8} rx="2" fill="#FFC000" opacity={0.15 + i * 0.05} transform={`translate(0, ${-(20 + i * 8)})`} style={{ transform: `translateY(${-(20 + i * 8) + 350}px)` }} />
    ))}
  </svg>
);

const ServiceIcon = ({ type }) => {
  const icons = {
    audit: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="#FFC000" strokeWidth="2" fill="#FFC000" fillOpacity="0.08" />
        <line x1="14" y1="16" x2="34" y2="16" stroke="#FFC000" strokeWidth="2" opacity="0.6" />
        <line x1="14" y1="22" x2="30" y2="22" stroke="#FFC000" strokeWidth="2" opacity="0.4" />
        <line x1="14" y1="28" x2="26" y2="28" stroke="#FFC000" strokeWidth="2" opacity="0.3" />
        <path d="M28 32 L32 36 L40 26" stroke="#FFC000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    control: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
        <rect x="4" y="8" width="16" height="14" rx="3" stroke="#FFC000" strokeWidth="2" fill="#FFC000" fillOpacity="0.08" />
        <rect x="28" y="8" width="16" height="14" rx="3" stroke="#FFC000" strokeWidth="2" fill="#FFC000" fillOpacity="0.08" />
        <rect x="4" y="28" width="16" height="14" rx="3" stroke="#FFC000" strokeWidth="2" fill="#FFC000" fillOpacity="0.08" />
        <rect x="28" y="28" width="16" height="14" rx="3" stroke="#FFC000" strokeWidth="2" fill="#FFC000" fillOpacity="0.12" />
        <line x1="20" y1="15" x2="28" y2="15" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
        <line x1="12" y1="22" x2="12" y2="28" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
        <line x1="36" y1="22" x2="36" y2="28" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
        <line x1="20" y1="35" x2="28" y2="35" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    compliance: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
        <path d="M24 4 L40 14 L40 30 Q40 42 24 46 Q8 42 8 30 L8 14 Z" stroke="#FFC000" strokeWidth="2" fill="#FFC000" fillOpacity="0.08" />
        <path d="M18 24 L22 28 L30 20" stroke="#FFC000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    quality: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
        <circle cx="24" cy="24" r="18" stroke="#FFC000" strokeWidth="2" fill="#FFC000" fillOpacity="0.08" />
        <circle cx="24" cy="24" r="10" stroke="#FFC000" strokeWidth="1.5" opacity="0.5" fill="none" />
        <circle cx="24" cy="24" r="3" fill="#FFC000" opacity="0.7" />
        <line x1="24" y1="6" x2="24" y2="10" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
        <line x1="24" y1="38" x2="24" y2="42" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
        <line x1="6" y1="24" x2="10" y2="24" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
        <line x1="38" y1="24" x2="42" y2="24" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  };
  return icons[type] || icons.audit;
};

// ─── ANIMATED COUNTER ───
const AnimatedCounter = ({ end, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, end]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <p style={{ fontSize: 42, fontWeight: 900, color: theme.brandAccent, fontFamily: "Montserrat, sans-serif", lineHeight: 1 }}>
        {prefix}{count}{suffix}
      </p>
      <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 8 }}>{label}</p>
    </div>
  );
};

// ─── FADE-IN WRAPPER ───
const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(40px)", right: "translateX(-40px)" };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ─── DATA ───
const services = [
  { title: "Financial Statement Audits", desc: "Rigorous examination of financial disclosures to ensure transparency and compliance with evolving regulatory benchmarks.", iconType: "audit" },
  { title: "Internal Control Reviews", desc: "Systematic evaluation of organizational protocols to eliminate inefficiencies and mitigate systemic risk factors effectively.", iconType: "control" },
  { title: "Compliance Audits", desc: "Specialized assessments ensuring strict adherence to federal, state, and industry-specific legal mandates.", iconType: "compliance" },
  { title: "Quality Assurance", desc: "Comprehensive validation of operational processes to maintain superior performance standards and institutional resilience.", iconType: "quality" },
];

const faqs = [
  { q: "What distinguishes RiskMan's assurance approach?", a: "We prioritize intelligent assurance, moving beyond backward-looking verification to provide real-time, data-driven insights that empower decision-makers with forward-looking clarity." },
  { q: "How do these services benefit large organizations?", a: "They streamline reporting, reduce regulatory friction, and provide leadership with a clear view of enterprise-wide risk across all operational layers." },
  { q: "Are these services scalable?", a: "Yes, our frameworks are designed to adapt to the shifting complexity of global operational footprints, from mid-market firms to multinational enterprises." },
  { q: "How does RiskMan handle emerging regulatory changes?", a: "We maintain a proactive monitoring posture to ensure all assurance activities align with the latest US standards and anticipate upcoming regulatory shifts." },
  { q: "What is the typical engagement lifecycle?", a: "Engagements begin with a high-level risk assessment followed by tailored execution, continuous reporting phases, and periodic strategic reviews." },
];

const processSteps = [
  { num: "01", title: "Discovery & Risk Assessment", desc: "Comprehensive evaluation of your current governance landscape and identification of critical risk vectors." },
  { num: "02", title: "Framework Design", desc: "Custom assurance architecture built around your operational complexity and regulatory environment." },
  { num: "03", title: "Implementation & Integration", desc: "Seamless deployment of oversight protocols with real-time monitoring systems embedded across operations." },
  { num: "04", title: "Continuous Optimization", desc: "Ongoing refinement through data-driven insights, ensuring sustained compliance and institutional resilience." },
];

const testimonials = [
  { quote: "RiskMan transformed our audit process from a compliance burden into a strategic advantage. Their real-time oversight capabilities are unmatched.", name: "Sarah Chen", role: "CFO, Meridian Holdings", initials: "SC" },
  { quote: "The depth of their internal control reviews uncovered efficiencies we never knew existed. A true partner in institutional governance.", name: "James Whitfield", role: "VP Risk, Atlantic Corp", initials: "JW" },
  { quote: "Scalable, rigorous, and forward-thinking — exactly what we needed to navigate an increasingly complex regulatory landscape.", name: "Maria Torres", role: "Director of Compliance, Vertex Group", initials: "MT" },
];

// ─── MAIN COMPONENT ───
export default function USAssurancePage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: theme.bgLight, color: theme.brandDark }}>
      <Helmet>
        <title>CPA & US Assurance Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting provides CPA and US Assurance services including financial statement audits, internal control reviews, compliance audits, and quality assurance for global enterprises." />
        <link rel="canonical" href="https://www.riskman.in/services/cpa-us-assurance" />
      </Helmet>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&family=Inter:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        @media (min-width: 768px) { .container { padding: 0 48px; } }
        .heading { font-family: Montserrat, sans-serif; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.5; } 50% { transform: scale(1.05); opacity: 0.2; } 100% { transform: scale(0.9); opacity: 0.5; } }
        .float-anim { animation: float 6s ease-in-out infinite; }
        .service-card:hover { transform: translateY(-6px); border-color: ${theme.brandPrimary}; box-shadow: 0 20px 60px rgba(0,31,63,0.1); }
        .service-card:hover .service-icon { transform: scale(1.1); }
        .faq-btn:hover { background: rgba(0,64,128,0.03); }
        .cta-btn { position: relative; overflow: hidden; }
        .cta-btn::after { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.5s; }
        .cta-btn:hover::after { left: 100%; }
        .process-line { position: absolute; left: 23px; top: 48px; bottom: 0; width: 2px; background: linear-gradient(to bottom, ${theme.brandAccent}, transparent); }
      `}</style>

      {/* ═══════════ HERO ═══════════ */}
      <section  style={{ position: "relative", overflow: "hidden", background: `linear-gradient(135deg, ${theme.brandDark} 0%, ${theme.brandNavy} 50%, ${theme.bgDark} 100%)`, minHeight: "90vh", display: "flex", alignItems: "center" }}>
        {/* Decorative grid pattern */}
        <div  style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,192,0,0.5) 60px, rgba(255,192,0,0.5) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,192,0,0.5) 60px, rgba(255,192,0,0.5) 61px)` }} />
        {/* Gradient orbs */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, rgba(255,192,0,0.08) 0%, transparent 70%)` }} />
        <div style={{ position: "absolute", bottom: -200, left: -100, width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, rgba(0,64,128,0.15) 0%, transparent 70%)` }} />

        <div className="container" style={{ position: "relative", zIndex: 10, padding: "120px 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 60, alignItems: "center" }}>
            <div>
              <FadeIn delay={0}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 4, background: `linear-gradient(135deg, ${theme.brandPrimary}, ${theme.brandNavy})`, border: `1px solid rgba(255,192,0,0.2)`, marginBottom: 28 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: theme.brandAccent, animation: "pulse-ring 2s infinite" }} />
                  <span style={{ color: "white", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Institutional Integrity</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h1 className="heading" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, lineHeight: 1.05, color: "white", marginBottom: 28, maxWidth: 800 }}>
                  Advanced Assurance Solutions for{" "}
                  <span style={{ color: theme.brandAccent, position: "relative" }}>
                    Modern Organizations
                    <svg viewBox="0 0 300 12" style={{ position: "absolute", bottom: -8, left: 0, width: "100%", height: 12 }}>
                      <path d="M0 6 Q75 0 150 6 Q225 12 300 6" stroke={theme.brandAccent} strokeWidth="2" fill="none" opacity="0.4" />
                    </svg>
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 600, marginBottom: 48 }}>
                  RiskMan delivers high-fidelity assurance frameworks, integrating real-time oversight and rigorous standards to safeguard institutional integrity and enhance stakeholder confidence.
                </p>
              </FadeIn>

              <FadeIn delay={0.45}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                  <button className="cta-btn" style={{ background: theme.brandAccent, color: theme.brandDark, padding: "18px 40px", borderRadius: 6, fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "Montserrat, sans-serif", boxShadow: "0 8px 32px rgba(255,192,0,0.3)" }}>
                    Explore Our Services →
                  </button>
                  <button style={{ background: "rgba(255,255,255,0.05)", color: "white", padding: "18px 40px", borderRadius: 6, fontWeight: 700, fontSize: 15, border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: "Inter, sans-serif", backdropFilter: "blur(8px)" }}>
                    Consult Our Experts
                  </button>
                </div>
              </FadeIn>

              {/* Trust badges */}
              <FadeIn delay={0.6}>
                <div style={{ display: "flex", gap: 32, marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {[{ num: "500+", label: "Enterprises Served" }, { num: "99.8%", label: "Client Retention" }, { num: "24/7", label: "Real-Time Monitoring" }].map((stat, i) => (
                    <div key={i}>
                      <p className="heading" style={{ fontSize: 22, fontWeight: 900, color: theme.brandAccent }}>{stat.num}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Side illustration (visible on larger conceptual screens) */}
        <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: "40%", maxWidth: 500, opacity: 0.5 }} className="float-anim">
          <HeroIllustration />
        </div>
      </section>

      {/* ═══════════ SERVICES OVERVIEW ═══════════ */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: theme.brandPrimary, marginBottom: 12 }}>What We Do</p>
              <h2 className="heading" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 900, marginBottom: 16, color: theme.brandDark }}>Integrated Service Overview</h2>
              <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7 }}>A holistic ecosystem of assurance services designed to mitigate complexity and fortify corporate governance across all operational layers.</p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="service-card" style={{ display: "flex", flexDirection: "column", padding: 36, border: `1px solid ${theme.borderLight}`, borderRadius: 20, background: "white", transition: "all 0.4s ease", cursor: "pointer", height: "100%" }}>
                  <div className="service-icon" style={{ marginBottom: 24, transition: "transform 0.3s ease" }}>
                    <ServiceIcon type={service.iconType} />
                  </div>
                  <h3 className="heading" style={{ fontSize: 18, fontWeight: 800, marginBottom: 12, color: theme.brandDark }}>{service.title}</h3>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, flexGrow: 1, marginBottom: 24 }}>{service.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: theme.brandPrimary, fontWeight: 700, fontSize: 12, letterSpacing: 1, textTransform: "uppercase" }}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section style={{ padding: "60px 0", background: `linear-gradient(135deg, ${theme.brandDark}, ${theme.brandNavy})`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `radial-gradient(circle at 20% 50%, ${theme.brandAccent} 1px, transparent 1px), radial-gradient(circle at 80% 50%, ${theme.brandAccent} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }}>
            <AnimatedCounter end={500} suffix="+" label="Enterprises Served" />
            <AnimatedCounter end={98} suffix="%" label="High-Fidelity Assurance" />
            <AnimatedCounter end={24} suffix="/7" label="Real-Time Insights" />
            <AnimatedCounter end={15} suffix="+" label="Years of Excellence" />
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS SECTION ═══════════ */}
      <section style={{ padding: "100px 0", background: theme.bgLight }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <FadeIn direction="right">
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: theme.brandPrimary, marginBottom: 12 }}>Our Process</p>
                <h2 className="heading" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 900, marginBottom: 20, color: theme.brandDark }}>How We Deliver Assurance Excellence</h2>
                <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7, marginBottom: 48 }}>
                  Our proven methodology transforms complex compliance requirements into streamlined, actionable governance frameworks tailored to your organization.
                </p>

                <div style={{ position: "relative" }}>
                  {processSteps.map((step, i) => (
                    <FadeIn key={i} delay={i * 0.15}>
                      <div style={{ display: "flex", gap: 24, marginBottom: i < processSteps.length - 1 ? 36 : 0, position: "relative" }}>
                        <div style={{ width: 48, height: 48, borderRadius: "50%", background: i === 0 ? theme.brandAccent : "rgba(0,64,128,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: i === 0 ? "none" : `2px solid ${theme.borderLight}` }}>
                          <span className="heading" style={{ fontWeight: 900, fontSize: 14, color: i === 0 ? theme.brandDark : theme.brandPrimary }}>{step.num}</span>
                        </div>
                        {i < processSteps.length - 1 && (
                          <div style={{ position: "absolute", left: 23, top: 48, width: 2, height: 36, background: `linear-gradient(to bottom, ${theme.borderLight}, transparent)` }} />
                        )}
                        <div>
                          <h4 className="heading" style={{ fontWeight: 800, fontSize: 16, marginBottom: 6, color: theme.brandDark }}>{step.title}</h4>
                          <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{step.desc}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div style={{ background: `linear-gradient(135deg, ${theme.brandNavy}, ${theme.brandDark})`, borderRadius: 32, padding: 48, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, rgba(255,192,0,0.12) 0%, transparent 70%)` }} />
                <GovernanceIllustration />
                <div style={{ marginTop: 32, textAlign: "center" }}>
                  <p className="heading" style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 8 }}>Enterprise Governance Network</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>Integrated oversight connecting every operational node with real-time assurance protocols</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ TRANSFORMATION / GOVERNANCE ═══════════ */}
      <section style={{ padding: "100px 0", background: theme.brandNavy }}>
        <div className="container">
          <div style={{ background: theme.surfaceDark, padding: "clamp(40px, 5vw, 80px)", borderRadius: 48, border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
            {/* Decorative skew */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: `linear-gradient(135deg, ${theme.brandPrimary}15, transparent)`, transform: "skewX(-12deg) translateX(25%)" }} />

            <div style={{ position: "relative", zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <FadeIn>
                <div>
                  <h2 className="heading" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: 24 }}>
                    Strengthen Your Governance Framework
                  </h2>
                  <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 48 }}>
                    Partner with RiskMan to transform your assurance processes into a strategic asset for sustainable growth. We move beyond simple verification to provide enterprise-wide clarity.
                  </p>
                  <button className="cta-btn" style={{ background: theme.brandAccent, color: theme.brandDark, padding: "20px 48px", borderRadius: 6, fontWeight: 900, fontSize: 16, border: "none", cursor: "pointer", fontFamily: "Montserrat, sans-serif", boxShadow: "0 8px 32px rgba(255,192,0,0.25)" }}>
                    Request A Comprehensive Review
                  </button>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { icon: "⟲", title: "Real-Time", sub: "Oversight", offset: 0 },
                    { icon: "◈", title: "Rigorous", sub: "Standards", offset: 40 },
                    { icon: "⊞", title: "Scalable", sub: "Frameworks", offset: 0 },
                    { icon: "◉", title: "Data-Driven", sub: "Insights", offset: 40 },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: 32, background: "rgba(0,64,128,0.2)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", textAlign: "center", marginTop: item.offset, transition: "all 0.3s ease" }}>
                      <div style={{ fontSize: 28, color: theme.brandAccent, marginBottom: 8 }}>{item.icon}</div>
                      <span className="heading" style={{ display: "block", fontSize: 20, fontWeight: 800, color: "white" }}>{item.title}</span>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase" }}>{item.sub}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: theme.brandPrimary, marginBottom: 12 }}>Client Voices</p>
              <h2 className="heading" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 900, color: theme.brandDark }}>Trusted by Industry Leaders</h2>
            </div>
          </FadeIn>

          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", minHeight: 240 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ opacity: activeTestimonial === i ? 1 : 0, transform: activeTestimonial === i ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease", position: activeTestimonial === i ? "relative" : "absolute", top: 0, left: 0, right: 0, pointerEvents: activeTestimonial === i ? "auto" : "none" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, ${theme.brandPrimary}, ${theme.brandNavy})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                  <span className="heading" style={{ color: theme.brandAccent, fontWeight: 800, fontSize: 20 }}>{t.initials}</span>
                </div>
                <p style={{ fontSize: 20, color: theme.brandDark, lineHeight: 1.7, fontStyle: "italic", marginBottom: 24, maxWidth: 600, margin: "0 auto 24px" }}>"{t.quote}"</p>
                <p className="heading" style={{ fontWeight: 800, fontSize: 15, color: theme.brandDark }}>{t.name}</p>
                <p style={{ fontSize: 13, color: "#9CA3AF" }}>{t.role}</p>
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 36 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: activeTestimonial === i ? 32 : 10, height: 10, borderRadius: 5, background: activeTestimonial === i ? theme.brandAccent : theme.borderLight, border: "none", cursor: "pointer", transition: "all 0.3s ease" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section style={{ padding: "100px 0", background: theme.bgLight }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: theme.brandPrimary, marginBottom: 12 }}>FAQ</p>
              <h2 className="heading" style={{ fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 900, color: theme.brandDark }}>Assurance FAQ</h2>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div style={{ background: "white", borderRadius: 16, border: `1px solid ${theme.borderLight}`, overflow: "hidden", boxShadow: activeFaq === idx ? "0 8px 32px rgba(0,31,63,0.08)" : "0 1px 3px rgba(0,0,0,0.04)", transition: "box-shadow 0.3s ease" }}>
                  <button
                    className="faq-btn"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 28px", textAlign: "left", fontWeight: 700, color: theme.brandDark, fontSize: 15, border: "none", background: "transparent", cursor: "pointer", fontFamily: "Inter, sans-serif", transition: "background 0.2s ease" }}
                  >
                    <span style={{ paddingRight: 32 }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme.brandPrimary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transform: activeFaq === idx ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div style={{ maxHeight: activeFaq === idx ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                    <div style={{ padding: "0 28px 22px", color: "#6B7280", fontSize: 14, lineHeight: 1.7, borderTop: `1px solid ${theme.bgLight}`, paddingTop: 16 }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section style={{ padding: "80px 0", background: theme.brandAccent, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: `radial-gradient(circle at 30% 50%, ${theme.brandDark} 2px, transparent 2px)`, backgroundSize: "30px 30px" }} />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <FadeIn>
            <h2 className="heading" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: theme.brandDark, marginBottom: 8 }}>Safeguard Your Institutional Integrity Today</h2>
            <p style={{ fontSize: 16, color: "rgba(0,31,63,0.6)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>Take the first step toward enterprise-wide assurance clarity with a confidential consultation.</p>
            <button className="cta-btn" style={{ background: theme.brandDark, color: "white", padding: "20px 56px", borderRadius: 50, fontWeight: 800, fontSize: 16, border: "none", cursor: "pointer", fontFamily: "Montserrat, sans-serif", boxShadow: "0 12px 40px rgba(0,31,63,0.3)", transition: "all 0.3s ease" }}>
              Contact A Specialist
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer style={{ padding: "64px 0 48px", background: theme.brandDark, borderTop: `1px solid rgba(255,255,255,0.05)` }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <p className="heading" style={{ fontSize: 24, fontWeight: 900, color: "white", marginBottom: 16 }}>
                RISK<span style={{ color: theme.brandAccent }}>MAN</span>
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 300 }}>
                Delivering high-fidelity assurance frameworks for modern organizations. Your partner in institutional integrity.
              </p>
            </div>
            {[
              { title: "Services", links: ["Financial Audits", "Internal Controls", "Compliance", "Quality Assurance"] },
              { title: "Company", links: ["About Us", "Leadership", "Careers", "Contact"] },
              { title: "Resources", links: ["Insights", "Case Studies", "Whitepapers", "Events"] },
            ].map((col, i) => (
              <div key={i}>
                <p className="heading" style={{ fontSize: 12, fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>{col.title}</p>
                {col.links.map((link, j) => (
                  <p key={j} style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", marginBottom: 12, cursor: "pointer" }}>{link}</p>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>© 2026 RiskMan Consulting | US Assurance & Corporate Governance Group</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
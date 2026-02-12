import React from "react";
import { Award, Briefcase, TrendingUp, Target } from "lucide-react";

/* =========================
   PRASEN PAL – Rich Bio (2-Column Optimized)
========================= */
export function PrasenPalRichBio() {
  return (
    <>
      {/* LEFT COLUMN Content */}
      <div className="space-y-6">
        {/* Header Badge */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-brandGold/10">
            <Briefcase className="w-5 h-5 text-brandGold" />
          </div>
          <div className="inline-block px-4 py-2 text-sm font-semibold border rounded-full bg-brandGold/10 text-brandDark dark:text-brandAccent border-brandGold/30">
            Co-Founder & Partner | ERS & Sustainability
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-6 border-l-4 rounded-r-xl bg-brandPrimary/5 dark:bg-brandPrimary/10 border-brandGold">
          <p className="text-base leading-relaxed text-brandDark/90 dark:text-white/90">
            A seasoned professional with over{" "}
            <span className="font-bold text-brandPrimary dark:text-brandAccent">
              18 years of distinguished experience
            </span>{" "}
            across Big Four and global consulting powerhouses—including{" "}
            <span className="font-semibold">Deloitte, EY, and Genpact</span>—he
            brings a rare blend of strategic vision and technical mastery to the
            firm's leadership.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="p-6 transition-all duration-300 bg-white border rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brandPrimary/10">
              <Target className="w-5 h-5 text-brandPrimary dark:text-brandAccent" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Core Expertise
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Enterprise Risk Management",
              "Internal Audit",
              "ESG & BRSR",
              "Sustainability Strategy",
              "Process Excellence",
              "AI Automation",
              "Tax & Compliance Advisory",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-2 text-xs font-medium transition-all duration-300 border rounded-lg bg-brandPrimary/5 text-brandDark dark:bg-brandAccent/10 dark:text-white/90 border-brandPrimary/20 dark:border-brandAccent/20 hover:border-brandPrimary hover:shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandGold/5 to-brandPrimary/5 dark:from-brandGold/10 dark:to-brandPrimary/10 border-brandGold/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brandGold/20">
              <TrendingUp className="w-5 h-5 text-brandGold" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Key Highlights
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Big Four veteran with global consulting experience</span>
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Pioneer in ESG integration and sustainability reporting</span>
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Expert in deploying automation and AI at scale</span>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN Content */}
      <div className="space-y-6">
        {/* Professional Certifications */}
        <div className="p-6 transition-all duration-300 bg-white border rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-brandGold/10">
              <Award className="w-5 h-5 text-brandGold" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Professional Certifications
            </h4>
          </div>
          <ul className="space-y-3 text-sm text-brandDark/80 dark:text-white/80">
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">Sustainability & Climate Risk (SCR)</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">GARP</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">Lean Six Sigma Green Belt</strong>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">RPA Business Analyst</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">Implementation Specialist</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">BRSR & Sustainability</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">ICAI</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">GST Certification</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">ICAI</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">AICA (L-1)</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">ICAI</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Professional Philosophy */}
        <div className="p-6 border-l-4 rounded-r-xl bg-brandPrimary/5 dark:bg-brandPrimary/10 border-brandPrimary">
          <p className="mb-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
            He is widely recognized for architecting end-to-end advisory
            solutions that help organizations navigate complexity—whether
            embedding ESG into corporate strategy, engineering leaner processes,
            deploying automation at scale, or harnessing AI for competitive
            advantage.
          </p>
          <p className="text-sm italic font-medium leading-relaxed text-brandPrimary/90 dark:text-brandAccent/90">
            A trusted advisor to leading corporate houses, he continues to shape
            how businesses think about risk, resilience, and responsible growth
            in an evolving global landscape.
          </p>
        </div>
      </div>
    </>
  );
}

/* =========================
   SUKANTA NAG – Rich Bio (2-Column Optimized)
========================= */
export function SukantaNagRichBio() {
  return (
    <>
      {/* LEFT COLUMN Content */}
      <div className="space-y-6">
        {/* Header Badge */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-brandGold/10">
            <Briefcase className="w-5 h-5 text-brandGold" />
          </div>
          <div className="inline-block px-4 py-2 text-sm font-semibold border rounded-full bg-brandGold/10 text-brandDark dark:text-brandAccent border-brandGold/30">
            Co-Founder & Partner | Financial Advisory
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-6 border-l-4 rounded-r-xl bg-brandPrimary/5 dark:bg-brandPrimary/10 border-brandGold">
          <p className="mb-4 text-base leading-relaxed text-brandDark/90 dark:text-white/90">
            A distinguished professional with over{" "}
            <span className="font-bold text-brandPrimary dark:text-brandAccent">
              41 years of unparalleled experience
            </span>{" "}
            spanning Credit Rating, Corporate Banking, Risk Management, and
            Financial & Management Consulting.
          </p>
          <p className="text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
            Holding the prestigious qualifications of{" "}
            <span className="font-semibold text-brandPrimary dark:text-brandAccent">
              CA, CS, CMA, CAIIB, and M.Com
            </span>
            , he embodies a unique combination of deep regulatory insight,
            financial acumen, and strategic consulting prowess.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="p-6 transition-all duration-300 bg-white border rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brandPrimary/10">
              <Target className="w-5 h-5 text-brandPrimary dark:text-brandAccent" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Core Expertise
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "BFSI Asset Financing",
              "Corporate Banking",
              "Credit Rating",
              "Risk Management",
              "Management Consulting",
              "Corporate Valuation",
              "Business Assurance",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-2 text-xs font-medium transition-all duration-300 border rounded-lg bg-brandPrimary/5 text-brandDark dark:bg-brandAccent/10 dark:text-white/90 border-brandPrimary/20 dark:border-brandAccent/20 hover:border-brandPrimary hover:shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandGold/5 to-brandPrimary/5 dark:from-brandGold/10 dark:to-brandPrimary/10 border-brandGold/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brandGold/20">
              <TrendingUp className="w-5 h-5 text-brandGold" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Key Strengths
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Holistic business approach with 360-degree solutions</span>
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Deep expertise across credit, risk & banking sectors</span>
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Building meaningful, long-term client relationships</span>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN Content */}
      <div className="space-y-6">
        {/* Professional Qualifications */}
        <div className="p-6 transition-all duration-300 bg-white border rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-brandGold/10">
              <Award className="w-5 h-5 text-brandGold" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Professional Qualifications
            </h4>
          </div>
          <ul className="space-y-3 text-sm text-brandDark/80 dark:text-white/80">
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">Chartered Accountant (CA)</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">ICAI</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">Company Secretary (CS)</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">ICSI</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">Cost & Management Accountant (CMA)</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">ICMAI</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">CAIIB</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">Indian Institute of Bankers</span>
              </div>
            </li>
            {/* <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">Master of Commerce (M.Com)</strong>
              </div>
            </li> */}
          </ul>
        </div>

        {/* Professional Philosophy */}
        <div className="p-6 border-l-4 rounded-r-xl bg-brandPrimary/5 dark:bg-brandPrimary/10 border-brandPrimary">
          <p className="mb-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
            Renowned for building meaningful, long-term relationships with
            clients, he has served as a trusted advisor to some of India's
            leading corporations, guiding them through complex financial
            landscapes with precision, integrity, and strategic foresight.
          </p>
          <p className="text-sm italic font-medium leading-relaxed text-brandPrimary/90 dark:text-brandAccent/90">
            His unmatched depth of experience across credit, risk, banking, and
            advisory positions him as a cornerstone of leadership at the firm.
          </p>
        </div>
      </div>
    </>
  );
}

/* =========================
   ARPIT GARG – Rich Bio (2-Column Optimized)
========================= */
export function ArpitGargRichBio() {
  return (
    <>
      {/* LEFT COLUMN Content */}
      <div className="space-y-6">
        {/* Header Badge */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-brandGold/10">
            <Briefcase className="w-5 h-5 text-brandGold" />
          </div>
          <div className="inline-block px-4 py-2 text-sm font-semibold border rounded-full bg-brandGold/10 text-brandDark dark:text-brandAccent border-brandGold/30">
            Co-Founder & Partner | ERS & ITRS
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-6 border-l-4 rounded-r-xl bg-brandPrimary/5 dark:bg-brandPrimary/10 border-brandGold">
          <p className="mb-4 text-base leading-relaxed text-brandDark/90 dark:text-white/90">
            A dynamic professional with over{" "}
            <span className="font-bold text-brandPrimary dark:text-brandAccent">
              14 years of specialized experience
            </span>{" "}
            in Risk Assurance and Advisory, bringing a sharp focus on internal
            controls, IT risk, and fraud analytics.
          </p>
          <p className="text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
            A{" "}
            <span className="font-semibold text-brandPrimary dark:text-brandAccent">
              Chartered Accountant (CA) with globally recognized certifications
            </span>{" "}
            including CIA, CRMA, and CISA, he has built his career across
            premier organizations including{" "}
            <span className="font-semibold">EY, Genpact ERC, and SNB</span>,
            where he honed his expertise in enterprise risk and control
            frameworks.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="p-6 transition-all duration-300 bg-white border rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brandPrimary/10">
              <Target className="w-5 h-5 text-brandPrimary dark:text-brandAccent" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Core Expertise
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Risk-Based Internal Audit",
              "SOC & ISO 27001",
              "TISAX & ITGC",
              "SOP Designing",
              "TPRM",
              "Data Analytics",
              "Project Management",
              "Fraud Analytics",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-2 text-xs font-medium transition-all duration-300 border rounded-lg bg-brandPrimary/5 text-brandDark dark:bg-brandAccent/10 dark:text-white/90 border-brandPrimary/20 dark:border-brandAccent/20 hover:border-brandPrimary hover:shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Key Impact Areas */}
        <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandGold/5 to-brandPrimary/5 dark:from-brandGold/10 dark:to-brandPrimary/10 border-brandGold/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brandGold/20">
              <TrendingUp className="w-5 h-5 text-brandGold" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Key Impact Areas
            </h4>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Enhancing operational efficiency and strengthening controls</span>
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Designing risk-based audit strategies for complex organizations</span>
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brandGold" />
              <span>Mitigating fraud exposure with advanced analytics</span>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN Content */}
      <div className="space-y-6">
        {/* Professional Certifications */}
        <div className="p-6 transition-all duration-300 bg-white border rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-brandGold/10">
              <Award className="w-5 h-5 text-brandGold" />
            </div>
            <h4 className="text-base font-bold text-brandDark dark:text-white">
              Professional Certifications
            </h4>
          </div>
          <ul className="space-y-3 text-sm text-brandDark/80 dark:text-white/80">
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">Chartered Accountant (CA)</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">ICAI</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">Certified Internal Auditor (CIA)</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">IIA</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">RPA Business Analyst</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">Certification</span>
              </div>
            </li>
            <li className="flex gap-3 group">
              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandGold group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-brandDark dark:text-white">FAFD & IT Certification</strong>
                <span className="block text-xs text-brandDark/60 dark:text-white/60">ICAI</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Professional Philosophy */}
        <div className="p-6 border-l-4 rounded-r-xl bg-brandPrimary/5 dark:bg-brandPrimary/10 border-brandPrimary">
          <p className="mb-3 text-sm leading-relaxed text-brandDark/80 dark:text-white/80">
            Recognized for his ability to design and execute risk-based audit
            strategies, he has helped organizations proactively identify
            vulnerabilities, mitigate fraud exposure, and build resilient
            control environments that align with global best practices.
          </p>
          <p className="text-sm italic font-medium leading-relaxed text-brandPrimary/90 dark:text-brandAccent/90">
            As a Partner at RiskMan Assurance and Advisory, he continues to lead
            high-impact engagements, delivering pragmatic solutions that balance
            risk, compliance, and business agility in an increasingly complex
            regulatory landscape.
          </p>
        </div>
      </div>
    </>
  );
}
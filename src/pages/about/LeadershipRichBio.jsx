import React from "react";

/* =========================
   PRASEN PAL – Rich Bio (FIXED LAYOUT)
========================= */
export function PrasenPalRichBio() {
  return (
    <div className="space-y-6">
      {/* Two-column grid - fixed for better responsiveness */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* ========================= LEFT COLUMN ========================= */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-brandGold/10 text-brandDark dark:text-brandAccent border border-brandGold/30">
            Co-Founder & Partner
          </div>

          <p className="text-base leading-relaxed text-brandDark/80 dark:text-white/80">
            A seasoned professional with over{" "}
            <span className="font-semibold text-brandPrimary dark:text-brandAccent">
              18 years of distinguished experience
            </span>{" "}
            across Big Four and global consulting powerhouses—including{" "}
            <span className="font-semibold">Deloitte, EY, and Genpact</span>—he
            brings a rare blend of strategic vision and technical mastery to the
            firm's leadership.
          </p>

          {/* Expertise Pills */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">
              Core Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Enterprise Risk Management & Internal Audit",
                "Sustainability & ESG Strategy, Reporting & BRSR",
                "Process Excellence & Intelligent Automation",
                "Tax, Regulatory & Compliance Advisory",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-brandPrimary/5 text-brandDark dark:bg-brandAccent/10 dark:text-white/90 border border-brandPrimary/20 dark:border-brandAccent/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================= RIGHT COLUMN ========================= */}
        <div className="space-y-6">
          {/* Certifications */}
          <div className="p-5 border rounded-xl bg-brandGold/5 border-brandGold/20 dark:bg-brandAccent/5 dark:border-brandAccent/20">
            <h4 className="mb-4 text-sm font-bold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">
              Professional Certifications
            </h4>
            <ul className="space-y-2.5 text-sm text-brandDark/80 dark:text-white/80">
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>Sustainability & Climate Risk (SCR)</strong> — GARP
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>Lean Six Sigma Green Belt</strong>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>RPA Business Analyst & Implementation Specialist</strong>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>BRSR & Sustainability Certification</strong> — ICAI
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>GST Certification</strong> — ICAI
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>AICA (L-1)</strong> — ICAI
                </span>
              </li>
            </ul>
          </div>

          {/* Narrative */}
          <p className="text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
            He is widely recognized for architecting end-to-end advisory
            solutions that help organizations navigate complexity—whether
            embedding ESG into corporate strategy, engineering leaner processes,
            deploying automation at scale, or harnessing AI for competitive
            advantage.
          </p>

          <p className="text-sm italic leading-relaxed text-brandDark/70 dark:text-white/70">
            A trusted advisor to leading corporate houses, he continues to shape
            how businesses think about risk, resilience, and responsible growth
            in an evolving global landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================
   SUKANTA NAG – Rich Bio (FIXED LAYOUT)
========================= */
export function SukantaNagRichBio() {
  return (
    <div className="space-y-6">
      {/* Two-column grid - fixed for better responsiveness */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* ========================= LEFT COLUMN ========================= */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-brandGold/10 text-brandDark dark:text-brandAccent border border-brandGold/30">
            Co-Founder & Partner
          </div>

          <p className="text-base leading-relaxed text-brandDark/80 dark:text-white/80">
            A distinguished professional with over{" "}
            <span className="font-semibold text-brandPrimary dark:text-brandAccent">
              41 years of unparalleled experience
            </span>{" "}
            spanning Credit Rating, Corporate Banking, Risk Management, and
            Financial & Management Consulting.
          </p>

          <p className="text-base leading-relaxed text-brandDark/80 dark:text-white/80">
            Holding the prestigious qualifications of{" "}
            <span className="font-semibold">
              CA, CS, CMA, CAIIB, and M.Com
            </span>
            , he embodies a unique combination of deep regulatory insight,
            financial acumen, and strategic consulting prowess.
          </p>

          {/* Expertise Pills */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">
              Core Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "BFSI Asset Financing",
                "Corporate Banking",
                "Credit Rating",
                "Risk Management",
                "Management Consulting",
                "Corporate Valuation & Assurances",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-brandPrimary/5 text-brandDark dark:bg-brandAccent/10 dark:text-white/90 border border-brandPrimary/20 dark:border-brandAccent/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================= RIGHT COLUMN ========================= */}
        <div className="space-y-6">
          {/* Professional Qualifications */}
          <div className="p-5 border rounded-xl bg-brandGold/5 border-brandGold/20 dark:bg-brandAccent/5 dark:border-brandAccent/20">
            <h4 className="mb-4 text-sm font-bold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">
              Professional Qualifications
            </h4>
            <ul className="space-y-2.5 text-sm text-brandDark/80 dark:text-white/80">
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>Chartered Accountant (CA)</strong> — ICAI
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>Company Secretary (CS)</strong> — ICSI
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>Cost & Management Accountant (CMA)</strong> — ICMAI
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>
                    Certified Associate of Indian Institute of Bankers (CAIIB)
                  </strong>{" "}
                  — IIBF
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>Master of Commerce (M.Com)</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* Narrative */}
          <p className="text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
            His key strengths lie in understanding the holistic approach to
            business challenges and client needs, enabling him to deliver{" "}
            <span className="font-semibold">360-degree solutions</span> that
            drive sustainable value creation.
          </p>

          <p className="text-sm italic leading-relaxed text-brandDark/70 dark:text-white/70">
            Renowned for building meaningful, long-term relationships with
            clients, he has served as a trusted advisor to some of India's
            leading corporations, guiding them through complex financial
            landscapes with precision, integrity, and strategic foresight.
          </p>

          <p className="text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
            His unmatched depth of experience across credit, risk, banking, and
            advisory positions him as a cornerstone of leadership at the firm.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================
   ARPIT GARG – Rich Bio (FIXED LAYOUT)
========================= */
export function ArpitGargRichBio() {
  return (
    <div className="space-y-6">
      {/* Two-column grid - fixed for better responsiveness */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* ========================= LEFT COLUMN ========================= */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-brandGold/10 text-brandDark dark:text-brandAccent border border-brandGold/30">
            Co-Founder & Partner
          </div>

          <p className="text-base leading-relaxed text-brandDark/80 dark:text-white/80">
            A dynamic professional with over{" "}
            <span className="font-semibold text-brandPrimary dark:text-brandAccent">
              14 years of specialized experience
            </span>{" "}
            in Risk Assurance and Advisory, bringing a sharp focus on internal
            controls, IT risk, and fraud analytics.
          </p>

          <p className="text-base leading-relaxed text-brandDark/80 dark:text-white/80">
            A{" "}
            <span className="font-semibold">
              Chartered Accountant (CA) with globally recognized certifications
            </span>{" "}
            including CIA, CRMA, and CISA, he has built his career across
            premier organizations including{" "}
            <span className="font-semibold">EY, Genpact ERC, and SNB</span>,
            where he honed his expertise in enterprise risk and control
            frameworks.
          </p>

          {/* Expertise Pills */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">
              Core Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Risk-Based Internal Audit",
                "SOC,ISO 27001 TISAX, ITGC,ITAC",
                "SOP Desigining",
                "TPRM",
                "Data Analytics",
                "Project Management",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-brandPrimary/5 text-brandDark dark:bg-brandAccent/10 dark:text-white/90 border border-brandPrimary/20 dark:border-brandAccent/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================= RIGHT COLUMN ========================= */}
        <div className="space-y-6">
          {/* Professional Certifications */}
          <div className="p-5 border rounded-xl bg-brandGold/5 border-brandGold/20 dark:bg-brandAccent/5 dark:border-brandAccent/20">
            <h4 className="mb-4 text-sm font-bold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">
              Professional Certifications
            </h4>
            <ul className="space-y-2.5 text-sm text-brandDark/80 dark:text-white/80">
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>Chartered Accountant (CA)</strong> — ICAI
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>Certified Internal Auditor (CIA)</strong> — IIA
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>
                    Certification - RPA Business Analyst
                  </strong>{" "}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold" />
                <span>
                  <strong>FAFD and IT Certification</strong>{" "}
                  — ICAI
                </span>
              </li>
            </ul>
          </div>

          {/* Narrative */}
          <p className="text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
            His approach is centered on enhancing{" "}
            <span className="font-semibold">
              operational efficiency, strengthening controls, ensuring
              compliance, and driving measurable cost savings
            </span>{" "}
            across diverse industry sectors including financial services,
            technology, manufacturing, and retail.
          </p>

          <p className="text-sm italic leading-relaxed text-brandDark/70 dark:text-white/70">
            Recognized for his ability to design and execute risk-based audit
            strategies, he has helped organizations proactively identify
            vulnerabilities, mitigate fraud exposure, and build resilient
            control environments that align with global best practices.
          </p>

          <p className="text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
            As a Partner at RiskMan Assurance and Advisory, he continues to lead
            high-impact engagements, delivering pragmatic solutions that balance
            risk, compliance, and business agility in an increasingly complex
            regulatory landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
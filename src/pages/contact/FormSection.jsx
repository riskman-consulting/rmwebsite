import { useState } from "react";

const ZOHO_URL =  import.meta.env.VITE_ZOHO_API_URL




export default function ContactForm() {
  const [form, setForm] = useState({
    Name_First: "",
    Name_Last: "",
    Email: "",
    SingleLine: "",
    SingleLine1: "",
    Checkbox: [],
    MultiLine: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  const services = [
    "Risk Assurance and Advisory",
    "Digital Transformation",
    "Sustainability & ESG",
    "Financial Advisory",
    "AI & Technology",
    "Forensics and Investigation",
    "SOC Compliance",
    "ISO & TISAX Readiness",
    "PCI DSS",
    "ITGC and ITAC",
    "BCP/DR",
    "Cyber Security",
    "Data Privacy",
  ];

  // ---------- validation ----------
  const validate = () => {
    const e = {};
    if (!form.Name_First.trim()) e.Name_First = "Required";
    if (!form.Name_Last.trim()) e.Name_Last = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.Email)) e.Email = "Invalid email";
    if (!form.SingleLine.trim()) e.SingleLine = "Required";
    if (!form.SingleLine1.trim()) e.SingleLine1 = "Required";
    if (!form.MultiLine.trim()) e.MultiLine = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ---------- handlers ----------
  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const toggleService = (s) => {
    setForm((p) => ({
      ...p,
      Checkbox: p.Checkbox.includes(s)
        ? p.Checkbox.filter((x) => x !== s)
        : [...p.Checkbox, s],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setOk(false);

    try {
      const fd = new FormData();
      fd.append("Name_First", form.Name_First);
      fd.append("Name_Last", form.Name_Last);
      fd.append("Email", form.Email);
      fd.append("SingleLine", form.SingleLine);
      fd.append("SingleLine1", form.SingleLine1);
      fd.append("MultiLine", form.MultiLine);

      form.Checkbox.forEach((s) => fd.append("Checkbox", s));
      fd.append("zf_referrer_name", "");
      fd.append("zf_redirect_url", "");
      fd.append("zc_gad", "");

      await fetch(ZOHO_URL, {
        method: "POST",
        body: fd,
        mode: "no-cors",
      });

      setOk(true);
      setForm({
        Name_First: "",
        Name_Last: "",
        Email: "",
        SingleLine: "",
        SingleLine1: "",
        Checkbox: [],
        MultiLine: "",
      });
    } catch (err) {
      console.error("Zoho submit failed", err);
    } finally {
      setLoading(false);
    }
  };

  // Shared Styles
  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-borderLight dark:border-borderDark bg-white dark:bg-bgDark text-brandDark dark:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brandAccent/50 focus:border-brandAccent/50 placeholder:text-gray-400";

  const labelCls = "block text-sm font-semibold mb-2 text-brandDark dark:text-brandAccent uppercase tracking-wider";

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-surfaceLight dark:bg-surfaceDark p-8 md:p-12 rounded-[2rem] border border-borderLight dark:border-borderDark shadow-2xl relative overflow-hidden">
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/10 rounded-full -mr-16 -mt-16 blur-3xl" />

        <header className="relative mb-10">
          <h2 className="text-4xl font-heading font-extrabold text-brandDark dark:text-white mb-2">
            Get in <span className="text-brandGold">Touch</span>
          </h2>
          <p className="text-brandNavy dark:text-gray-400">
            Have questions? Our team is here to help you navigate your risks.
          </p>
        </header>

        {ok && (
          <div className="mb-8 p-4 rounded-xl bg-brandGold/10 border border-brandGold/30 text-brandDark dark:text-brandAccent flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <span className="text-xl">✅</span>
            <span className="font-medium">Success! We'll get back to you shortly.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 relative">
          
          {/* Row 1: Names */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelCls}>First Name</label>
              <input
                name="Name_First"
                placeholder="John"
                value={form.Name_First}
                onChange={handleChange}
                className={inputCls}
              />
              {errors.Name_First && <p className="text-red-500 text-xs mt-1 font-medium">{errors.Name_First}</p>}
            </div>
            <div>
              <label className={labelCls}>Last Name</label>
              <input
                name="Name_Last"
                placeholder="Doe"
                value={form.Name_Last}
                onChange={handleChange}
                className={inputCls}
              />
              {errors.Name_Last && <p className="text-red-500 text-xs mt-1 font-medium">{errors.Name_Last}</p>}
            </div>
          </div>

          {/* Row 2: Email */}
          <div>
            <label className={labelCls}>Email Address</label>
            <input
              name="Email"
              type="email"
              placeholder="john@company.com"
              value={form.Email}
              onChange={handleChange}
              className={inputCls}
            />
            {errors.Email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.Email}</p>}
          </div>

          {/* Row 3: Designation + Company */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelCls}>Designation</label>
              <input
                name="SingleLine"
                placeholder="e.g. Director"
                value={form.SingleLine}
                onChange={handleChange}
                className={inputCls}
              />
              {errors.SingleLine && <p className="text-red-500 text-xs mt-1 font-medium">{errors.SingleLine}</p>}
            </div>
            <div>
              <label className={labelCls}>Company</label>
              <input
                name="SingleLine1"
                placeholder="e.g. Riskman Consulting"
                value={form.SingleLine1}
                onChange={handleChange}
                className={inputCls}
              />
              {errors.SingleLine1 && <p className="text-red-500 text-xs mt-1 font-medium">{errors.SingleLine1}</p>}
            </div>
          </div>

          {/* Row 4: Services */}
          <div>
            <label className={labelCls}>Services Interested In</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-6 rounded-2xl bg-bgLight dark:bg-bgDark/50 border border-borderLight dark:border-borderDark">
              {services.map((s) => (
                <label 
                  key={s} 
                  className="group flex items-center gap-3 text-sm cursor-pointer text-brandNavy dark:text-gray-300 hover:text-brandGold transition-colors"
                >
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={form.Checkbox.includes(s)}
                      onChange={() => toggleService(s)}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-brandDark/20 dark:border-white/10 bg-white dark:bg-surfaceDark checked:bg-brandGold checked:border-brandGold transition-all"
                    />
                    <svg className="absolute h-3.5 w-3.5 text-brandDark opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{s}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Row 5: Message */}
          <div>
            <label className={labelCls}>How can we help?</label>
            <textarea
              name="MultiLine"
              rows={4}
              placeholder="Tell us about your project requirements..."
              value={form.MultiLine}
              onChange={handleChange}
              className={`${inputCls} resize-none`}
            />
            {errors.MultiLine && <p className="text-red-500 text-xs mt-1 font-medium">{errors.MultiLine}</p>}
          </div>

          {/* Row 6: Submit */}
          <button
            disabled={loading}
            className="group relative w-full overflow-hidden bg-brandDark dark:bg-brandGold text-white dark:text-brandDark font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(255,184,0,0.3)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                "Send Message"
              )}
            </span>
            <div className="absolute inset-0 bg-brandPrimary dark:bg-brandAccent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
}
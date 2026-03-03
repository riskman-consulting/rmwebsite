import { useState } from "react";

const ZOHO_SUBSCRIBER = import.meta.env.VITE_ZOHO_SUBSCRIBER_URL;
const ZOHO_ZX = import.meta.env.VITE_ZOHO_ZX;
const ZOHO_ZCTD = import.meta.env.VITE_ZOHO_ZCTD;
const ZOHO_FORM_IX = import.meta.env.VITE_ZOHO_FORM_IX;

export default function InsightsSubscribe() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleIframeLoad = () => {
    if (!email) return;
    setMsg("Subscribed successfully ✅");
    setEmail("");
    setTimeout(() => setMsg(""), 4000);
  };

  return (
    <div className="w-full bg-[#073B6F] rounded-3xl p-6 sm:p-8 text-white shadow-lg">

      <h3 className="text-xl sm:text-2xl font-bold mb-3">
        Subscribe to Insights
      </h3>

      <p className="text-blue-200/80 text-sm sm:text-base mb-6 leading-relaxed">
        Get the latest risk alerts and compliance updates delivered to your inbox.
      </p>

      <iframe
        name="zoho_hidden_iframe"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      />

      <form
        method="POST"
        action={ZOHO_SUBSCRIBER}
        target="zoho_hidden_iframe"
        className="space-y-3"
      >
        <input
          type="email"
          name="CONTACT_EMAIL"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl bg-[#1D4B7D] border border-white/15 text-white text-sm sm:text-base placeholder:text-blue-200/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />

        <button
          type="submit"
          className="w-full h-12 sm:h-14 rounded-xl bg-[#FFC107] text-[#0B3A6E] text-sm sm:text-base font-semibold flex items-center justify-center gap-2 hover:brightness-105 transition"
        >
          Subscribe Now
          <span>→</span>
        </button>

        {msg && (
          <p className="text-green-300 text-xs text-center">
            {msg}
          </p>
        )}

        {/* Hidden Fields */}
        <input type="hidden" name="submitType" value="optinCustomView" />
        <input type="hidden" name="formType" value="QuickForm" />
        <input type="hidden" name="zx" value={ZOHO_ZX} />
        <input type="hidden" name="zcvers" value="2.0" />
        <input type="hidden" name="mode" value="OptinCreateView" />
        <input type="hidden" name="zctd" value={ZOHO_ZCTD} />
        <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
        <input type="hidden" name="zc_formIx" value={ZOHO_FORM_IX} />
        <input type="hidden" name="scriptless" value="yes" />
      </form>
    </div>
  );
}
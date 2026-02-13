import { useState } from "react";
 
const ZOHO_SUBSCRIBER = import.meta.env.VITE_ZOHO_SUBSCRIBER_URL;
const ZOHO_ZX = import.meta.env.VITE_ZOHO_ZX;
const ZOHO_ZCTD = import.meta.env.VITE_ZOHO_ZCTD;
const ZOHO_FORM_IX = import.meta.env.VITE_ZOHO_FORM_IX;
 
export default function InsightsSubscribe() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
 
  const handleIframeLoad = () => {
    if (!email) return; // ignore first load
    setMsg("Subscribed successfully ✅");
    setEmail("");
    setTimeout(() => setMsg(""), 4000);
  };
 
  return (
    <section className="container my-12">
      <div className="bg-brandNavy text-white rounded-3xl p-8 md:p-10 max-w-xl shadow-xl">
 
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
          Subscribe to Insights
        </h2>
 
        <p className="text-blue-100 mb-6">
          Get the latest risk alerts and compliance updates delivered to your inbox.
        </p>
 
        {/* hidden iframe */}
        <iframe
          name="zoho_hidden_iframe"
          style={{ display: "none" }}
          onLoad={handleIframeLoad}
        />
 
        <form
          method="POST"
          action={ZOHO_SUBSCRIBER}
          target="zoho_hidden_iframe"
          className="space-y-4"
        >
          {/* IMPORTANT — keep name exactly */}
          <input
            type="email"
            name="CONTACT_EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full rounded-xl px-5 py-4 bg-brandPrimary/60 border border-white/20 text-white"
          />
 
          <button
            type="submit"
            className="w-full rounded-xl py-4 bg-brandGold text-brandDark font-semibold"
          >
            Subscribe Now →
          </button>
 
          {msg && <p className="text-green-300 text-sm">{msg}</p>}
 
          {/* Zoho hidden fields */}
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
    </section>
  );
}
 
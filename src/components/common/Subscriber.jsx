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
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center lg:gap-10">
      <div className="lg:col-span-5">
        <h3 className="text-[15px] font-semibold text-brandDark dark:text-white">
          Get our newsletter
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-brandNavy/70 dark:text-brandLight/60">
          Risk alerts and compliance updates, once in a while. No spam.
        </p>
      </div>

      <iframe
        name="zoho_hidden_iframe"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      />

      <form
        method="POST"
        action={ZOHO_SUBSCRIBER}
        target="zoho_hidden_iframe"
        className="lg:col-span-7"
      >
        <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          name="CONTACT_EMAIL"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="w-full sm:flex-1 min-w-0 h-11 px-4 text-sm rounded-md bg-surfaceLight dark:bg-bgDark border border-borderLight dark:border-borderDark text-brandDark dark:text-white placeholder:text-brandNavy/40 dark:placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-brandPrimary/40 dark:focus:ring-brandAccent/50"
        />

        <button
          type="submit"
          className="h-11 px-5 text-sm font-semibold rounded-md bg-brandPrimary dark:bg-brandGold text-white dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandAccent transition-colors"
        >
          Subscribe
        </button>
        </div>

        {msg && (
          <p className="mt-2 text-xs text-green-700 dark:text-green-300">
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
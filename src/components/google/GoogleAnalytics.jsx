import { useEffect } from "react";

// GA_MEASUREMENT_ID
const GOOGLE_TAG_KEY = import.meta.env.VITE_GOOGLE_TAG_KEY

export default function GoogleAnalytics() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_KEY}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_TAG_KEY}');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}
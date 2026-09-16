import React, { useState } from "react";
import { FaLink, FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

/**
 * Copies an absolute URL for a job to the clipboard.
 *
 * navigator.clipboard is unavailable on insecure origins and in some in-app
 * browsers, so there is a textarea + execCommand fallback.
 */
export default function CopyLinkButton({ path, label = "Copy link", className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = path
      ? new URL(path, window.location.origin).href
      : window.location.href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const el = document.createElement("textarea");
        el.value = url;
        el.setAttribute("readonly", "");
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }

      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
      toast.error("Could not copy. Please copy the URL from the address bar.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={label}
      className={
        className ||
        "inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold tracking-widest uppercase transition-all border rounded-full border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-brandPrimary hover:border-brandPrimary"
      }
    >
      {copied ? <FaCheck size={11} /> : <FaLink size={11} />}
      {copied ? "Copied" : label}
    </button>
  );
}

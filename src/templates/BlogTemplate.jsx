import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaQuoteRight,
  FaClock,
  FaShareAlt,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaLink,
  FaCheckCircle,
  FaArrowRight,
  FaPlus,
  FaLightbulb,
} from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../api/sanity";
import { useBlogStore } from "../store/blog";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  try {
    return builder.image(source);
  } catch {
    return null;
  }
};

const resolveImageUrl = (value) => {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (value.asset?.url) return value.asset.url;
  if (value.url) return value.url;
  if (value.asset?._ref || value.asset?._id || value._ref) {
    const b = urlFor(value);
    return b ? b.auto("format").fit("max").url() : null;
  }
  return null;
};

const parseImageRefDims = (value) => {
  const ref = value?.asset?._ref || value?.asset?._id || value?._ref;
  if (!ref) return null;
  const match = /-(\d+)x(\d+)-/.exec(ref);
  if (!match) return null;
  return { width: Number(match[1]), height: Number(match[2]) };
};

const formatDate = (iso) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const estimateReadingTime = (body) => {
  if (!Array.isArray(body)) return 3;
  const text = body
    .map((block) => {
      if (block?._type === "block" && Array.isArray(block.children)) {
        return block.children.map((c) => c.text || "").join(" ");
      }
      if (block?._type === "faq" && Array.isArray(block.faqs)) {
        return block.faqs
          .map((f) => `${f.question || ""} ${f.answer || ""}`)
          .join(" ");
      }
      if (block?._type === "code") return block.code || "";
      return "";
    })
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
};

const blockText = (block) => {
  if (block?._type !== "block" || !Array.isArray(block.children)) return "";
  return block.children.map((c) => c.text || "").join("");
};

const slugify = (text) =>
  String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const extractHeadings = (body) => {
  if (!Array.isArray(body)) return [];
  return body
    .filter(
      (b) => b?._type === "block" && (b.style === "h2" || b.style === "h3")
    )
    .map((b) => {
      const text = blockText(b);
      return { level: b.style, text, id: slugify(text) };
    })
    .filter((h) => h.text);
};

const hasExplicitTocBlock = (body) =>
  Array.isArray(body) && body.some((b) => b?._type === "tableOfContents");

const isTocHeadingBlock = (block) =>
  block?._type === "block" && (block.style === "h2" || block.style === "h3");

const splitIntroBlocks = (body, hasHeadings) => {
  if (!Array.isArray(body) || !hasHeadings) {
    return { introBlocks: [], contentBlocks: body || [] };
  }
  const firstHeadingIndex = body.findIndex(isTocHeadingBlock);
  if (firstHeadingIndex <= 0) {
    return { introBlocks: [], contentBlocks: body };
  }
  return {
    introBlocks: body.slice(0, firstHeadingIndex),
    contentBlocks: body.slice(firstHeadingIndex),
  };
};

const splitAtMidpoint = (blocks) => {
  if (!Array.isArray(blocks) || blocks.length < 4) {
    return { first: blocks || [], second: [] };
  }
  const mid = Math.floor(blocks.length / 2);
  return { first: blocks.slice(0, mid), second: blocks.slice(mid) };
};

const parseYouTubeId = (url) => {
  if (!url) return null;
  const m = String(url).match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
  );
  return m ? m[1] : null;
};

/* =======================
   CUSTOM BLOCK COMPONENTS
======================= */
const CodeBlock = ({ value }) => {
  const code = value?.code || "";
  const language = value?.language || "text";
  const filename = value?.filename;
  return (
    <div className="my-8 overflow-hidden border rounded-xl border-borderLight dark:border-borderDark bg-brandDark dark:bg-black/50">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/40">
        {filename ? (
          <span className="font-mono text-xs truncate text-white/80">
            {filename}
          </span>
        ) : (
          <span />
        )}
        <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-white/10 text-brandAccent">
          {language}
        </span>
      </div>
      <pre className="p-4 overflow-x-auto text-xs leading-relaxed md:text-sm">
        <code className={`language-${language} font-mono text-gray-100`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

const YouTubeEmbed = ({ value }) => {
  const id = parseYouTubeId(value?.url);
  if (!id) return null;
  return (
    <div className="relative my-8 overflow-hidden border aspect-video rounded-2xl border-borderLight dark:border-borderDark">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        loading="lazy"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

const FaqBlock = ({ value }) => {
  const items = Array.isArray(value?.faqs) ? value.faqs : [];
  if (items.length === 0) return null;
  const title = value?.title || "Frequently Asked Questions";
  return (
    <section className="my-10">
      <h2 className="mb-5 text-lg font-bold md:text-xl font-heading text-brandDark dark:text-white">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <details
            key={i}
            className="overflow-hidden border group rounded-xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark"
          >
            <summary className="flex items-center justify-between gap-3 px-5 py-4 list-none cursor-pointer">
              <span className="text-sm font-semibold text-brandDark dark:text-white">
                {item?.question}
              </span>
              <FaPlus className="flex-shrink-0 text-xs transition-transform text-brandPrimary dark:text-brandAccent group-open:rotate-45" />
            </summary>
            <div className="px-5 pb-5 text-sm leading-relaxed whitespace-pre-wrap text-brandNavy/85 dark:text-gray-300">
              {item?.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

const InternalCtaBlock = ({ value }) => {
  const {
    title,
    description,
    buttonText = "Learn more",
    link = "/",
    variant = "gradient",
  } = value || {};

  const baseClasses =
    "my-10 px-6 py-7 md:px-8 md:py-8 rounded-2xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between";
  const variantClasses =
    variant === "outline"
      ? "border-2 border-brandPrimary/40 dark:border-brandAccent/40 bg-transparent text-brandDark dark:text-white"
      : variant === "dark"
      ? "bg-brandDark text-white"
      : "bg-gradient-to-br from-brandPrimary to-brandAccent text-white";
  const btnClasses =
    variant === "outline"
      ? "bg-brandPrimary text-white dark:bg-brandAccent dark:text-brandDark hover:opacity-90"
      : "bg-white text-brandDark hover:bg-brandGold";

  const isExternal = /^https?:\/\//i.test(link || "");
  const ButtonInner = (
    <>
      {buttonText}
      <FaArrowRight className="text-[10px]" />
    </>
  );

  return (
    <aside className={`${baseClasses} ${variantClasses}`}>
      <div className="flex-1">
        {title && (
          <h3 className="mb-1 text-base font-bold md:text-lg font-heading">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm opacity-90">{description}</p>
        )}
      </div>
      {isExternal ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full transition-all whitespace-nowrap ${btnClasses}`}
        >
          {ButtonInner}
        </a>
      ) : (
        <Link
          to={link}
          className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full transition-all whitespace-nowrap ${btnClasses}`}
        >
          {ButtonInner}
        </Link>
      )}
    </aside>
  );
};

const LatexBlock = ({ value }) => {
  const formula = value?.formula || "";
  const caption = value?.caption;
  const inline = value?.displayMode === "inline";
  if (inline) {
    return (
      <code className="px-1.5 py-0.5 mx-0.5 font-mono text-sm rounded bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
        {formula}
      </code>
    );
  }
  return (
    <figure className="my-8">
      <div className="px-6 py-5 overflow-x-auto font-mono text-base text-center border rounded-xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark text-brandDark dark:text-white">
        {formula}
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs italic text-center text-brandNavy/60 dark:text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const TableBlock = ({ value }) => {
  const rows = Array.isArray(value?.rows) ? value.rows : [];
  if (rows.length === 0) return null;
  const [headRow, ...bodyRows] = rows;
  return (
    <div className="my-8 overflow-x-auto border rounded-xl border-borderLight dark:border-borderDark">
      <table className="w-full text-sm text-left border-collapse">
        {headRow?.cells && (
          <thead className="bg-bgLight dark:bg-bgDark">
            <tr>
              {headRow.cells.map((cell, i) => (
                <th
                  key={i}
                  className="px-4 py-3 font-bold border-b border-borderLight dark:border-borderDark text-brandDark dark:text-white"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {bodyRows.map((row, ri) => (
            <tr
              key={ri}
              className="even:bg-bgLight/40 dark:even:bg-bgDark/40"
            >
              {row?.cells?.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 border-b border-borderLight/50 dark:border-borderDark/50 text-brandNavy/85 dark:text-gray-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PortableImage = ({ value }) => {
  const url = resolveImageUrl(value);
  if (!url) return null;

  const dims = parseImageRefDims(value);
  const alignment = value?.alignment || "center";
  // Normalize: accept both legacy and verbose names from the schema.
  const rawMode = value?.displayMode || "fit";
  const displayMode =
    rawMode === "fitWidth"
      ? "fit"
      : rawMode === "originalSize"
      ? "original"
      : rawMode;
  const caption = value?.caption;

  const alignWrap =
    alignment === "left"
      ? "items-start text-left"
      : alignment === "right"
      ? "items-end text-right"
      : "items-center text-center";

  if (displayMode === "fullBleed") {
    return (
      <figure className="my-10 overflow-hidden not-prose -mx-4 md:-mx-12 lg:-mx-32">
        <img
          src={url}
          alt={value?.alt || ""}
          width={dims?.width}
          height={dims?.height}
          loading="lazy"
          className="block w-full h-auto"
        />
        {caption && (
          <figcaption className="px-4 mt-3 text-xs italic font-medium text-center md:text-sm text-brandNavy/60 dark:text-gray-500">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (displayMode === "original") {
    return (
      <figure className={`not-prose my-8 flex flex-col ${alignWrap}`}>
        <img
          src={url}
          alt={value?.alt || ""}
          width={dims?.width}
          height={dims?.height}
          loading="lazy"
          className="block h-auto border max-w-full rounded-2xl border-borderLight dark:border-borderDark"
        />
        {caption && (
          <figcaption className="max-w-2xl mt-3 text-xs italic font-medium md:text-sm text-brandNavy/60 dark:text-gray-500">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (displayMode === "contained") {
    return (
      <figure className="flex flex-col items-center my-8 not-prose">
        <div className="relative w-full overflow-hidden border shadow-sm rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
          <img
            src={url}
            alt={value?.alt || ""}
            width={dims?.width}
            height={dims?.height}
            loading="lazy"
            className="block w-full h-auto max-h-[560px] object-contain mx-auto"
          />
        </div>
        {caption && (
          <figcaption className="max-w-2xl mx-auto mt-3 text-xs italic font-medium text-center md:text-sm text-brandNavy/60 dark:text-gray-500">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // default: fit (width-constrained)
  const aspectRatio =
    dims?.width && dims?.height ? dims.width / dims.height : null;
  const isTall = aspectRatio && aspectRatio < 1;
  const isWide = aspectRatio && aspectRatio >= 1;
  return (
    <figure className="flex flex-col items-center my-8 not-prose">
      <div
        className={`relative w-full overflow-hidden border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark shadow-sm ${
          isTall ? "max-w-md mx-auto" : "max-w-full"
        }`}
      >
        <img
          src={url}
          alt={value?.alt || ""}
          width={dims?.width}
          height={dims?.height}
          loading="lazy"
          className={`block w-full h-auto ${
            isWide ? "max-h-[560px]" : "max-h-[720px]"
          } object-contain mx-auto`}
        />
      </div>
      {caption && (
        <figcaption className="max-w-2xl mx-auto mt-3 text-xs italic font-medium text-center md:text-sm text-brandNavy/60 dark:text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

/* =======================
   PORTABLE TEXT (BASE)
======================= */
const alignmentClass = (style) => {
  if (style === "alignLeft") return "text-left";
  if (style === "alignCenter") return "text-center";
  if (style === "alignRight") return "text-right";
  if (style === "alignJustify") return "text-justify";
  return null;
};

const basePortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="pt-10 pb-3 text-xl font-bold leading-tight md:text-2xl font-heading text-brandDark dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children, value }) => (
      <h2
        id={slugify(blockText(value))}
        className="pt-8 pb-3 text-lg font-bold leading-tight md:text-xl font-heading text-brandDark dark:text-white scroll-mt-24"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={slugify(blockText(value))}
        className="pt-6 pb-2 text-base font-bold md:text-lg font-heading text-brandDark dark:text-white scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="pt-5 pb-2 text-sm font-bold md:text-base font-heading text-brandDark dark:text-white">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="pt-4 pb-2 text-sm font-bold font-heading text-brandDark dark:text-white">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="pt-3 pb-1 text-xs font-bold uppercase tracking-wider font-heading text-brandDark dark:text-white">
        {children}
      </h6>
    ),
    blockquote: ({ children }) => (
      <div className="relative my-10 group">
        <div className="absolute text-5xl transition-transform duration-500 -top-3 -left-3 text-brandPrimary/10 dark:text-brandAccent/10 group-hover:scale-110">
          <FaQuoteRight />
        </div>
        <blockquote className="relative z-10 rounded-2xl bg-gradient-to-br from-brandDark to-brandNavy dark:from-surfaceDark dark:to-bgDark border-l-[5px] border-brandAccent p-6 md:p-8 shadow-lg">
          <div className="text-sm italic font-light leading-relaxed text-white md:text-base font-heading">
            {children}
          </div>
        </blockquote>
      </div>
    ),
    normal: ({ children, value }) => {
      const align = alignmentClass(value?.style);
      return (
        <p
          className={`text-sm leading-[1.75] text-brandNavy/85 dark:text-gray-300 ${
            align || ""
          }`}
        >
          {children}
        </p>
      );
    },
    alignLeft: ({ children }) => (
      <p className="text-sm leading-[1.75] text-left text-brandNavy/85 dark:text-gray-300">
        {children}
      </p>
    ),
    alignCenter: ({ children }) => (
      <p className="text-sm leading-[1.75] text-center text-brandNavy/85 dark:text-gray-300">
        {children}
      </p>
    ),
    alignRight: ({ children }) => (
      <p className="text-sm leading-[1.75] text-right text-brandNavy/85 dark:text-gray-300">
        {children}
      </p>
    ),
    alignJustify: ({ children }) => (
      <p className="text-sm leading-[1.75] text-justify text-brandNavy/85 dark:text-gray-300">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="pl-2 my-6 space-y-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="pl-6 my-6 space-y-4 list-decimal marker:text-brandPrimary marker:dark:text-brandAccent marker:font-bold">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-sm leading-relaxed text-brandNavy/85 dark:text-gray-300">
        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brandPrimary dark:bg-brandAccent flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="pl-2 text-sm leading-relaxed text-brandNavy/85 dark:text-gray-300">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-brandDark dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u className="underline">{children}</u>,
    "strike-through": ({ children }) => (
      <s className="line-through opacity-70">{children}</s>
    ),
    s: ({ children }) => (
      <s className="line-through opacity-70">{children}</s>
    ),
    highlight: ({ children }) => (
      <mark className="px-1 rounded bg-brandGold/30 dark:bg-brandAccent/30 text-brandDark dark:text-white">
        {children}
      </mark>
    ),
    code: ({ children }) => (
      <code className="px-2 py-0.5 text-sm font-mono rounded-md bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline transition-all decoration-brandPrimary/30 dark:decoration-brandAccent/30 underline-offset-4 text-brandPrimary dark:text-brandAccent hover:decoration-brandPrimary dark:hover:decoration-brandAccent"
      >
        {children}
      </a>
    ),
    internalLink: ({ value, children }) => {
      const ref = value?.reference;
      const type = ref?._type;
      const slug = ref?.slug?.current || ref?.slug;
      if (!slug) return <span>{children}</span>;
      const to =
        type === "category" ? `/blogs?category=${slug}` : `/blog/${slug}`;
      return (
        <Link
          to={to}
          className="font-medium underline transition-all decoration-brandPrimary/30 dark:decoration-brandAccent/30 underline-offset-4 text-brandPrimary dark:text-brandAccent hover:decoration-brandPrimary dark:hover:decoration-brandAccent"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: PortableImage,
    code: CodeBlock,
    youtube: YouTubeEmbed,
    faq: FaqBlock,
    internalCTA: InternalCtaBlock,
    latex: LatexBlock,
    table: TableBlock,
    // tableOfContents is injected per-instance in the main component
  },
};

/* =======================
   TABLE OF CONTENTS
======================= */
const TableOfContents = ({ headings, title = "Table of Contents" }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!headings || headings.length === 0) return;
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
    if (history.replaceState) history.replaceState(null, "", `#${id}`);
  };

  if (!headings || headings.length === 0) return null;
  return (
    <nav
      aria-label="Table of contents"
      className="px-5 py-5 mb-8 border rounded-xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark"
    >
      <h2 className="mb-3 text-xs font-black tracking-[0.2em] uppercase text-brandPrimary dark:text-brandAccent">
        {title}
      </h2>
      <ol className="space-y-2 text-sm">
        {headings.map((h, i) => {
          const isActive = activeId === h.id;
          return (
            <li
              key={`${h.id}-${i}`}
              className={h.level === "h3" ? "pl-4" : ""}
            >
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                className={`inline-flex gap-2 leading-snug transition-colors ${
                  isActive
                    ? "text-brandPrimary dark:text-brandAccent font-semibold"
                    : "text-brandNavy/80 dark:text-gray-300 hover:text-brandPrimary dark:hover:text-brandAccent"
                }`}
              >
                <span
                  className={`font-bold tabular-nums ${
                    isActive
                      ? "text-brandPrimary dark:text-brandAccent"
                      : "text-brandPrimary/70 dark:text-brandAccent/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{h.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

/* =======================
   SHARE ROW
======================= */
const ShareRow = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const links = [
    {
      label: "Share on Twitter",
      icon: <FaTwitter />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "Share on LinkedIn",
      icon: <FaLinkedin />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Share on Facebook",
      icon: <FaFacebook />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center justify-between gap-4 py-6 border-y border-borderLight dark:border-borderDark">
      <div className="flex items-center gap-2 text-sm font-semibold text-brandNavy/70 dark:text-gray-400">
        <FaShareAlt className="text-xs" />
        Share
      </div>
      <div className="flex items-center gap-2">
        {links.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex items-center justify-center text-sm transition-all duration-300 rounded-full w-9 h-9 bg-bgLight dark:bg-bgDark text-brandNavy/70 dark:text-gray-400 hover:bg-brandPrimary dark:hover:bg-brandAccent hover:text-white dark:hover:text-brandDark"
          >
            {s.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          className={`flex items-center justify-center w-9 h-9 text-sm transition-all duration-300 rounded-full ${
            copied
              ? "bg-green-500 text-white"
              : "bg-bgLight dark:bg-bgDark text-brandNavy/70 dark:text-gray-400 hover:bg-brandPrimary dark:hover:bg-brandAccent hover:text-white dark:hover:text-brandDark"
          }`}
        >
          {copied ? <FaCheckCircle /> : <FaLink />}
        </button>
      </div>
    </div>
  );
};

/* =======================
   RELATED ARTICLES
======================= */
const RelatedArticles = ({ items, title = "Related Articles" }) => {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="mb-5 text-base font-bold md:text-lg font-heading text-brandDark dark:text-white">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.slice(0, 2).map((post) => (
          <Link
            key={post._id || post.slug}
            to={`/blog/${post.slug}`}
            className="overflow-hidden transition-all duration-300 border group rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-lg"
          >
            {post.mainImage && (
              <div className="overflow-hidden aspect-[16/9] bg-bgLight dark:bg-bgDark border-b border-borderLight dark:border-borderDark">
                <img
                  src={post.mainImage}
                  alt={post.mainImageAlt || post.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="mb-2 text-sm font-bold leading-snug text-brandDark dark:text-white line-clamp-2">
                {post.title}
              </h3>
              {(post.shortDescription || post.metaDescription || post.tldr) && (
                <p className="mb-3 text-xs leading-relaxed text-brandNavy/65 dark:text-gray-400 line-clamp-2">
                  {post.shortDescription || post.metaDescription || post.tldr}
                </p>
              )}
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brandPrimary dark:text-brandAccent">
                Read More
                <FaArrowRight className="text-[9px]" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

/* =======================
   INLINE GUIDANCE CTA (mid-article)
======================= */
const InlineGuidanceCta = () => (
  <aside className="relative overflow-hidden my-12 rounded-2xl border border-borderLight dark:border-borderDark bg-gradient-to-r from-brandPrimary/[0.06] via-surfaceLight to-brandAccent/[0.08] dark:from-brandAccent/[0.08] dark:via-surfaceDark dark:to-brandPrimary/[0.08] p-6 md:p-8">
    <div className="grid items-center gap-5 md:grid-cols-[auto_1fr_auto]">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/15 text-brandPrimary dark:text-brandAccent">
        <FaLightbulb className="text-2xl" />
      </div>
      <div>
        <h3 className="mb-1 text-base font-bold md:text-lg font-heading text-brandDark dark:text-white">
          Need Guidance for Your Business?
        </h3>
        <p className="text-sm leading-relaxed text-brandNavy/75 dark:text-gray-400">
          Talk to our advisory team about translating these patterns into your
          specific operating context.
        </p>
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold transition-all rounded-full whitespace-nowrap bg-brandDark text-white hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
      >
        View My Services
        <FaArrowRight className="text-[10px]" />
      </Link>
    </div>
  </aside>
);

/* =======================
   BREADCRUMB
======================= */
const Breadcrumb = ({ title }) => (
  <nav
    aria-label="Breadcrumb"
    className="flex flex-wrap items-center gap-1.5 mb-6 text-[12px] font-medium text-brandNavy/55 dark:text-gray-500"
  >
    <Link
      to="/"
      className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent"
    >
      Home
    </Link>
    <FaChevronRight className="text-[8px] opacity-60" />
    <Link
      to="/blogs"
      className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent"
    >
      Blogs
    </Link>
    <FaChevronRight className="text-[8px] opacity-60" />
    <span className="text-brandDark dark:text-white line-clamp-1">{title}</span>
  </nav>
);

/* =======================
   MAIN COMPONENT
======================= */
export default function BlogTemplate({ blog }) {
  const { scrollYProgress } = useScroll();
  const [showBackTop, setShowBackTop] = useState(false);
  const { posts, fetchPosts } = useBlogStore();

  useEffect(() => {
    if (!posts || posts.length === 0) fetchPosts();
  }, [posts, fetchPosts]);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const readingTime = useMemo(
    () => estimateReadingTime(blog?.body),
    [blog?.body]
  );
  const headings = useMemo(() => extractHeadings(blog?.body), [blog?.body]);
  const explicitToc = useMemo(
    () => hasExplicitTocBlock(blog?.body),
    [blog?.body]
  );
  const { introBlocks, contentBlocks } = useMemo(
    () => splitIntroBlocks(blog?.body, headings.length > 0),
    [blog?.body, headings.length]
  );

  const portableTextComponents = useMemo(
    () => ({
      ...basePortableTextComponents,
      types: {
        ...basePortableTextComponents.types,
        tableOfContents: ({ value }) => (
          <TableOfContents headings={headings} title={value?.title} />
        ),
      },
    }),
    [headings]
  );

  const { first: contentFirstHalf, second: contentSecondHalf } = useMemo(
    () => splitAtMidpoint(contentBlocks),
    [contentBlocks]
  );

  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen p-6 bg-bgLight dark:bg-bgDark">
        <div className="space-y-4 text-center">
          <div className="text-6xl text-brandPrimary dark:text-brandAccent">
            !
          </div>
          <p className="text-lg font-semibold text-brandNavy dark:text-gray-400">
            Insights article not found.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
          >
            Back to Hub
          </Link>
        </div>
      </div>
    );

  const shareUrl = `https://www.riskman.in/blog/${blog.slug || ""}`;

  const publishedAt =
    blog.publishedDate || blog._createdAt || blog._updatedAt || null;
  const updatedAt = blog.lastUpdated || blog._updatedAt || null;
  const showUpdated =
    updatedAt &&
    publishedAt &&
    new Date(updatedAt).getTime() - new Date(publishedAt).getTime() >
      24 * 60 * 60 * 1000;

  const authorName = blog.author?.name || "Riskman";
  const authorImage = blog.author?.image;
  const authorTitle = blog.author?.title;
  const authorBio =
    blog.author?.bio ||
    "Risk advisory, regulatory compliance, and digital transformation experts helping organizations build resilient, future-ready businesses.";

  const categories = Array.isArray(blog.categories) ? blog.categories : [];
  const tags = Array.isArray(blog.tags) ? blog.tags : [];

  const curatedRelated = Array.isArray(blog.relatedPosts)
    ? blog.relatedPosts.filter((p) => p?.slug && p.slug !== blog.slug)
    : [];
  const autoRelated = Array.isArray(posts)
    ? posts.filter((p) => p?.slug && p.slug !== blog.slug).slice(0, 2)
    : [];
  const relatedItems =
    curatedRelated.length > 0 ? curatedRelated : autoRelated;

  const relatedPosition = blog.relatedPostsPosition || "end";
  const showRelatedMiddle =
    relatedPosition === "middle" || relatedPosition === "both";
  const showRelatedEnd =
    relatedPosition === "end" ||
    relatedPosition === "both" ||
    !relatedPosition ||
    !["middle", "end", "both"].includes(relatedPosition);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* ================= READING PROGRESS BAR ================= */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-brandPrimary to-brandAccent dark:from-brandAccent dark:to-brandGold origin-left"
      />

      {/* ================= ARTICLE ================= */}
      <article className="pt-20 pb-16 md:pt-24">
        <div className="container max-w-6xl px-4 mx-auto md:px-6">
          {/* Breadcrumb */}
          <Breadcrumb title={blog.title} />

          {/* Two-column layout: content + sticky sidebar */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
            <div className="min-w-0">
          {/* Back to Blogs */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 mb-6 text-sm font-semibold transition-colors text-brandPrimary dark:text-brandAccent hover:opacity-80"
          >
            <FaChevronLeft className="text-xs" />
            Back to Blogs
          </Link>

          {/* Tags row: content type + categories */}
          {(blog.contentType || categories.length > 0) && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {blog.contentType && (
                <span className="inline-flex px-3 py-1 rounded-full bg-brandAccent/20 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent text-[11px] font-bold tracking-wider uppercase">
                  {blog.contentType}
                </span>
              )}
              {categories.map((c) => (
                <Link
                  key={c.slug || c.title}
                  to={`/blogs?category=${c.slug || ""}`}
                  className="inline-flex px-3 py-1 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent text-[11px] font-bold tracking-wider uppercase hover:bg-brandPrimary/20 dark:hover:bg-brandAccent/20 transition-colors"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold font-heading leading-[1.2] text-brandDark dark:text-white">
            {blog.title}
          </h1>

          {/* Author + meta row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-sm">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 p-1 overflow-hidden border rounded-full bg-white border-borderLight dark:border-borderDark shadow-sm">
                <img
                  src={authorImage || "/rm.png"}
                  alt={authorName}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-semibold text-brandDark dark:text-white">
                {authorName}
              </span>
            </div>
            {publishedAt && (
              <>
                <span className="hidden w-1 h-1 rounded-full bg-brandNavy/30 dark:bg-white/30 sm:block" />
                <span className="flex items-center gap-2 text-brandNavy/60 dark:text-gray-400">
                  <FaCalendar className="text-xs" />
                  {formatDate(publishedAt)}
                </span>
              </>
            )}
            <span className="hidden w-1 h-1 rounded-full bg-brandNavy/30 dark:bg-white/30 sm:block" />
            <span className="flex items-center gap-2 text-brandNavy/60 dark:text-gray-400">
              <FaClock className="text-xs" />
              {readingTime} min read
            </span>
            {showUpdated && (
              <>
                <span className="hidden w-1 h-1 rounded-full bg-brandNavy/30 dark:bg-white/30 sm:block" />
                <span className="text-brandNavy/60 dark:text-gray-400">
                  Updated {formatDate(updatedAt)}
                </span>
              </>
            )}
          </div>

          {/* Featured image */}
          {blog.mainImage && (
            <figure className="mb-8 overflow-hidden border shadow-sm rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
              <img
                src={blog.mainImage}
                alt={blog.mainImageAlt || blog.title}
                loading="eager"
                className="block w-full h-auto max-h-[520px] object-cover"
              />
            </figure>
          )}

          {/* Quick Overview */}
          {blog.tldr && (
            <aside className="px-5 py-4 mb-6 rounded-xl bg-brandPrimary/[0.06] dark:bg-brandAccent/[0.08] border-l-4 border-brandPrimary dark:border-brandAccent">
              <div className="mb-2 text-[11px] font-black tracking-[0.25em] uppercase text-brandPrimary dark:text-brandAccent">
                Quick Overview
              </div>
              <p className="text-sm leading-relaxed text-brandNavy/85 dark:text-gray-200">
                {blog.tldr}
              </p>
            </aside>
          )}

          {/* Key Takeaways */}
          {Array.isArray(blog.takeaways) && blog.takeaways.length > 0 && (
            <div className="mb-6">
              <div className="mb-3 text-[11px] font-black tracking-[0.25em] uppercase text-brandPrimary dark:text-brandAccent">
                Key Takeaways
              </div>
              <ul className="space-y-2">
                {blog.takeaways.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-brandNavy/85 dark:text-gray-300"
                  >
                    <span className="flex items-center justify-center flex-shrink-0 w-4 h-4 mt-0.5 text-[9px] font-bold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {introBlocks.length > 0 && (
            <div className="mb-6 prose prose-sm dark:prose-invert max-w-none">
              <PortableText
                value={introBlocks}
                components={portableTextComponents}
              />
            </div>
          )}

          {/* Auto TOC for mobile/tablet only — desktop shows it in the sticky sidebar */}
          {!explicitToc && (
            <div className="lg:hidden">
              <TableOfContents headings={headings} />
            </div>
          )}

          {/* Body */}
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {Array.isArray(contentBlocks) && contentBlocks.length > 0 ? (
              showRelatedMiddle && contentSecondHalf.length > 0 ? (
                <>
                  <PortableText
                    value={contentFirstHalf}
                    components={portableTextComponents}
                  />
                  <RelatedArticles items={relatedItems} />
                  <InlineGuidanceCta />
                  <PortableText
                    value={contentSecondHalf}
                    components={portableTextComponents}
                  />
                </>
              ) : contentBlocks.length >= 4 ? (
                <>
                  <PortableText
                    value={contentFirstHalf}
                    components={portableTextComponents}
                  />
                  <InlineGuidanceCta />
                  <PortableText
                    value={contentSecondHalf}
                    components={portableTextComponents}
                  />
                </>
              ) : (
                <PortableText
                  value={contentBlocks}
                  components={portableTextComponents}
                />
              )
            ) : (
              <p className="text-sm italic text-brandNavy/60 dark:text-gray-400">
                No content available for this article yet.
              </p>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-8">
              <span className="text-[11px] font-bold tracking-wider uppercase text-brandNavy/50 dark:text-gray-500">
                Tags:
              </span>
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-bgLight dark:bg-bgDark text-brandNavy/70 dark:text-gray-400 border border-borderLight dark:border-borderDark"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Share */}
          <div className="mt-10">
            <ShareRow title={blog.title} url={shareUrl} />
          </div>

          {/* About the Author */}
          <section className="mt-10 overflow-hidden border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <div className="px-6 py-3 text-[11px] font-bold tracking-[0.2em] uppercase text-brandNavy/50 dark:text-gray-500 bg-bgLight/60 dark:bg-bgDark/40 border-b border-borderLight dark:border-borderDark">
              About the Author
            </div>
            <div className="flex flex-col items-start gap-5 p-6 sm:flex-row md:p-8">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 p-2 overflow-hidden border rounded-full bg-white border-borderLight dark:border-borderDark shadow-sm">
                <img
                  src={authorImage || "/rm.png"}
                  alt={authorName}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-brandDark dark:text-white">
                  {authorName}
                </h3>
                {authorTitle && (
                  <span className="inline-block mt-1 mb-2 px-2 py-0.5 rounded-full bg-brandAccent/25 dark:bg-brandAccent/15 text-brandPrimary dark:text-brandAccent text-[10px] font-bold tracking-wider">
                    {authorTitle}
                  </span>
                )}
                {!authorTitle && (
                  <span className="inline-block mt-1 mb-2 px-2 py-0.5 rounded-full bg-brandAccent/25 dark:bg-brandAccent/15 text-brandPrimary dark:text-brandAccent text-[10px] font-bold tracking-wider">
                    Risk Advisory
                  </span>
                )}
                <p className="text-xs leading-relaxed text-brandNavy/70 dark:text-gray-400">
                  {authorBio}
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles (end) */}
          {showRelatedEnd && <RelatedArticles items={relatedItems} />}

          {/* More Articles button */}
          <div className="flex justify-center mt-10">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 rounded-full bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
            >
              <FaChevronLeft />
              More Articles
            </Link>
          </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* ================= BACK TO TOP ================= */}
      {showBackTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed z-50 flex items-center justify-center w-12 h-12 transition-all rounded-full shadow-2xl bottom-8 right-8 bg-brandDark dark:bg-brandAccent text-white dark:text-brandDark hover:scale-110 hover:bg-brandPrimary dark:hover:bg-brandGold"
        >
          <FaChevronUp />
        </motion.button>
      )}
    </div>
  );
}

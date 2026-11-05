"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Languages, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSite } from "./Providers";

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-14">
      <Reveal>
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

// Renders trusted inline HTML (<b>, <i>, <a>) from content/data.ts
export function Rich({ html, className = "", as: Tag = "p" }: { html: string; className?: string; as?: "p" | "span" | "li" }) {
  return <Tag className={`rich ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Card({ children, className = "", spotlight = false }: { children: React.ReactNode; className?: string; spotlight?: boolean }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={spotlight ? onMove : undefined}
      className={`rounded-2xl border border-line bg-card backdrop-blur-md ${spotlight ? "spotlight" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// Animates every number inside a string like "51% → 87%" from 0 when it scrolls into view
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce) return setProgress(1);
    if (!inView) return;
    const controls = animate(0, 1, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: setProgress });
    return () => controls.stop();
  }, [inView, reduce]);

  const text = value.replace(/\d+(?:\.\d+)?/g, (n) => {
    const decimals = n.includes(".") ? n.split(".")[1].length : 0;
    return (parseFloat(n) * progress).toFixed(decimals);
  });
  return <span ref={ref}>{text}</span>;
}

// Product screenshot inside a minimal browser window with a soft accent glow behind it
export function BrowserFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-accent/30 via-accent-2/20 to-transparent opacity-70 blur-2xl" />
      <div className="relative overflow-hidden rounded-xl border border-line bg-card-solid shadow-2xl shadow-black/30">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-lg border border-line bg-card px-2.5 py-1 text-xs leading-snug text-muted">{children}</span>
  );
}

export function Controls() {
  const { lang, setLang, dark, toggleTheme } = useSite();
  const btn =
    "inline-flex h-8 items-center gap-1.5 rounded-full border border-line bg-card px-2.5 text-xs font-medium text-muted transition hover:border-accent hover:text-accent";
  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        className={btn}
        onClick={() => setLang(lang === "en" ? "vi" : "en")}
        aria-label={lang === "en" ? "Chuyển sang tiếng Việt" : "Switch to English"}
      >
        <Languages size={14} />
        {lang === "en" ? "VI" : "EN"}
      </button>
      <button
        type="button"
        className={`${btn} w-8 justify-center px-0`}
        onClick={toggleTheme}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <Sun size={14} /> : <Moon size={14} />}
      </button>
    </div>
  );
}

export function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

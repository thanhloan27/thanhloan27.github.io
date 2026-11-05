"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Cake, Download, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { hero, profile, ui } from "@/content/data";
import { useSite } from "./Providers";
import { Controls, GithubIcon, LinkedinIcon } from "./ui";

const sections = ["bio", "news", "cv", "projects", "skills", "contact"] as const;

export function Header() {
  const { t } = useSite();
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };

  return (
    <header className="pt-16 pb-12 sm:pt-20">
      <motion.div {...fade(0)} className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Avatar />
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t(profile.name)}</h1>
          <p className="mt-1 text-muted">{t(profile.title)}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {t(profile.location)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Cake size={14} /> {t(profile.birthDate)}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Mail size={14} /> {profile.email}
            </a>
          </div>
          <div className="mt-3 flex items-center gap-3 text-muted">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent">
              <GithubIcon />
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent">
                <LinkedinIcon />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div {...fade(0.05)} className="mt-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-muted backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t(hero.status)}
        </span>
      </motion.div>
      <HeroRest />
    </header>
  );
}

// CTAs
function HeroRest() {
  const { t } = useSite();
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };
  return (
    <>
      <motion.div {...fade(0.15)} className="mt-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-[0_0_30px_-8px_var(--accent)] transition hover:brightness-110"
        >
          {t(ui.viewWork)}
          <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
        </a>
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition hover:border-accent hover:text-accent"
        >
          <Download size={16} />
          {t(ui.downloadCv)}
        </a>
      </motion.div>
    </>
  );
}

function Avatar() {
  const { t } = useSite();
  if (profile.avatar) {
    return (
      // 4:5 portrait frame for a waist-up photo
      <div className="relative aspect-[4/5] w-40 shrink-0 rounded-[1.25rem] bg-gradient-to-br from-accent to-accent-2 p-[2px] shadow-[0_0_40px_-10px_var(--accent)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={profile.avatar} alt={t(profile.name)} className="h-full w-full rounded-[1.15rem] object-cover" />
      </div>
    );
  }
  return (
    <div className="relative h-28 w-28 shrink-0 rounded-2xl bg-gradient-to-br from-accent to-accent-2 p-px">
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-bg text-3xl font-semibold">
        <span className="text-gradient">{profile.initials}</span>
      </div>
    </div>
  );
}

export function Navbar() {
  const { t } = useSite();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = sections.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 -mx-4 border-y border-line bg-bg/70 px-4 backdrop-blur-xl sm:-mx-6 sm:px-6">
      <div className="flex h-14 items-center justify-between gap-4">
        <ul className="flex min-w-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center gap-5 overflow-x-auto sm:gap-7">
          {sections.map((id) => (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                  active === id ? "text-accent" : "text-muted hover:text-fg"
                }`}
              >
                {t(ui.nav[id])}
              </a>
            </li>
          ))}
        </ul>
        <Controls />
      </div>
    </nav>
  );
}

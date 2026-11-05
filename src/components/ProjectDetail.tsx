"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Maximize2, UserRound } from "lucide-react";
import { useState } from "react";
import { projects, ui } from "@/content/data";
import { useSite } from "./Providers";
import { BrowserFrame, Card, Controls, CountUp, GithubIcon, Reveal, Tag } from "./ui";
import { Aurora, BackToTop, CursorGlow, Lightbox, ScrollProgress } from "./Effects";
import { Footer } from "./Sections";

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useSite();
  const p = projects.find((x) => x.slug === slug)!;
  const [shot, setShot] = useState<number | null>(null);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <div className="relative">
        <Aurora />
        <main className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex items-center justify-between pt-8">
            <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent">
              <ArrowLeft size={16} /> {t(ui.back)}
            </Link>
            <Controls />
          </div>

          <Reveal className="pt-12 pb-10">
            <h1 className="text-4xl font-semibold tracking-tight">
              <span className="text-gradient">{p.title}</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{t(p.tagline)}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <UserRound size={15} className="text-accent" /> {t(ui.role)}: {t(p.role)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={15} className="text-accent" /> {t(ui.period)}: {t(p.period)}
              </span>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:underline"
                >
                  <GithubIcon size={15} /> {p.github.replace("https://github.com/", "")}
                </a>
              )}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Reveal>

          {p.shots && p.shots.length > 0 && (
            <Reveal className="mb-12">
              <div className="space-y-6">
                {p.shots.map((s, i) => (
                  <figure key={s.src}>
                    <button
                      type="button"
                      onClick={() => setShot(i)}
                      aria-label={t(s.caption)}
                      className="group block w-full cursor-zoom-in text-left"
                    >
                      <BrowserFrame src={s.src} alt={t(s.caption)} className="transition duration-500 group-hover:-translate-y-1" />
                    </button>
                    <figcaption className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
                      <Maximize2 size={12} /> {t(s.caption)}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          )}

          {p.metrics.length > 0 && (
          <Reveal>
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {p.metrics.map((m) => (
                <Card key={m.value} spotlight className="p-4">
                  <dt className="sr-only">{t(m.label)}</dt>
                  <dd className="text-2xl font-semibold text-accent tabular-nums">
                    <CountUp value={m.value} />
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-muted">{t(m.label)}</dd>
                </Card>
              ))}
            </dl>
          </Reveal>
          )}

          {p.sections.map((s) => (
            <section key={s.heading.en} className="mt-12 border-t border-line pt-10">
              <Reveal>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t(s.heading)}</h2>
                {s.body && <p className="leading-relaxed text-muted">{t(s.body)}</p>}
                {s.points && (
                  <ul className="space-y-2.5 leading-relaxed text-muted">
                    {s.points.map((pt, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{t(pt)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </section>
          ))}

          <div className="mt-14">
            <Footer />
          </div>
        </main>
      </div>
      <BackToTop />
      {p.shots && <Lightbox photos={p.shots} index={shot} onClose={() => setShot(null)} />}
    </>
  );
}

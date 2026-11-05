"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight, Award, Briefcase, Download, GraduationCap, Mail, Maximize2, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { bio, certifications, news, profile, projects, skills, timeline, ui, type Photo, type Project, type TimelineItem } from "@/content/data";
import { Lightbox } from "./Effects";
import { useSite } from "./Providers";
import { BrowserFrame, Card, CountUp, Reveal, Rich, Section, Tag } from "./ui";

export function Bio() {
  const { t } = useSite();
  return (
    <Section id="bio" title={t(ui.nav.bio)}>
      <div className="space-y-4 text-[1.02rem] leading-relaxed text-muted">
        {bio.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <Rich html={t(p)} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function News() {
  const { t } = useSite();
  return (
    <Section id="news" title={t(ui.nav.news)}>
      <Reveal>
        <Card className="scroll-thin max-h-72 overflow-y-auto p-2">
          <ul>
            {news.map((n, i) => (
              <li key={i} className="flex gap-4 rounded-xl px-3 py-2.5 text-sm transition hover:bg-card">
                <span className="w-16 shrink-0 font-mono text-xs leading-6 text-accent">[{n.date}]</span>
                <Rich as="span" html={t(n.text)} className="leading-6 text-muted" />
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}

export function Resume() {
  const { t } = useSite();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const [lightbox, setLightbox] = useState<{ photos: Photo[]; index: number } | null>(null);
  const line = "absolute top-0 bottom-0 left-5 w-0.5 -translate-x-1/2 rounded-full md:left-1/2";

  return (
    <Section id="cv" title={t(ui.nav.cv)}>
      <Reveal>
        <p className="mb-10 text-muted">
          {t(ui.cvIntro)}{" "}
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
            PDF <Download size={14} />
          </a>
          .
        </p>
      </Reveal>
      {/* overflow-x-clip keeps the slide-in offsets from widening the page */}
      <div className="overflow-x-clip lg:-mx-20">
        <ol ref={ref} className="relative">
          <span aria-hidden="true" className={`${line} bg-line`} />
          {/* Line that fills in as the timeline scrolls into view */}
          <motion.span
            aria-hidden="true"
            className={`${line} origin-top bg-gradient-to-b from-accent to-accent-2`}
            style={{ scaleY: scrollYProgress }}
          />
          {timeline.map((item, i) => (
            <TimelineEntry
              key={item.org}
              item={item}
              left={i % 2 === 0}
              // Tuck an entry up beside a tall previous one so the two sides interlock
              tuck={i > 0 && timeline[i - 1].points.length > 0}
              onOpen={(index) => setLightbox({ photos: item.photos!, index })}
            />
          ))}
        </ol>
      </div>
      <Lightbox photos={lightbox?.photos ?? []} index={lightbox?.index ?? null} onClose={() => setLightbox(null)} />
    </Section>
  );
}

// One milestone. On desktop entries alternate around the center line; on mobile they stack to its right.
function TimelineEntry({
  item,
  left,
  tuck,
  onOpen,
}: {
  item: TimelineItem;
  left: boolean;
  tuck: boolean;
  onOpen: (index: number) => void;
}) {
  const { t } = useSite();
  const reduce = useReducedMotion();
  const KindIcon = item.kind === "work" ? Briefcase : GraduationCap;

  return (
    // The <li> is what gets observed, so the node can start at scale 0 (a zero-size box never "enters" the viewport)
    <motion.li
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      // Tucked entries overlap the previous one, so only the content column takes clicks
      className={`pointer-events-none relative pb-14 last:pb-0 ${tuck ? "md:-mt-40" : ""}`}
    >
      <motion.span
        aria-hidden="true"
        variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className="absolute top-[26px] left-5 z-10 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-accent bg-bg shadow-[0_0_0_4px_var(--bg),0_0_18px_var(--accent)] md:left-1/2"
      />
      <motion.div
        variants={{ hidden: { opacity: 0, x: left ? -32 : 32 }, show: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto pl-12 md:w-1/2 ${left ? "md:pr-10 md:pl-0" : "md:ml-auto md:pl-10"}`}
      >
        <div className={`flex flex-wrap items-center gap-3 md:flex-nowrap ${left ? "md:flex-row-reverse" : ""}`}>
          <Flag item={item} left={left} />
          <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-[11px] whitespace-nowrap text-accent">{t(item.time)}</span>
        </div>

        <div className={`mt-4 ${left ? "md:text-right" : ""}`}>
          <p className={`flex items-center gap-1.5 text-xs text-muted ${left ? "md:justify-end" : ""}`}>
            <KindIcon size={13} className="text-accent" />
            {t(item.kind === "work" ? ui.experience : ui.education)} · {t(item.place)}
          </p>
          <h4 className="mt-1 font-semibold">{t(item.role)}</h4>
        </div>

        {item.points.length > 0 && (
          <ul className="mt-3 space-y-1.5 rounded-xl border border-line bg-card p-4 text-sm leading-relaxed text-muted backdrop-blur-md">
            {item.points.map((p, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{t(p)}</span>
              </li>
            ))}
          </ul>
        )}
        {item.photos && item.photos.length > 0 && <PhotoStrip photos={item.photos} onOpen={onOpen} />}
      </motion.div>
    </motion.li>
  );
}

// Logo + organisation card with a small pointer towards the center line
function Flag({ item, left }: { item: TimelineItem; left: boolean }) {
  return (
    <div className="relative flex min-w-0 max-w-full items-center gap-3 rounded-xl border border-line bg-card-solid py-2 pr-4 pl-2 shadow-lg shadow-black/10">
      <span
        aria-hidden="true"
        className={`absolute top-1/2 -left-[6px] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-l border-line bg-card-solid ${
          left ? "md:right-[-6px] md:left-auto md:border-t md:border-r md:border-b-0 md:border-l-0" : ""
        }`}
      />
      <Logo item={item} />
      <span className="font-semibold leading-tight">{item.org}</span>
    </div>
  );
}

function PhotoStrip({ photos, onOpen }: { photos: Photo[]; onOpen: (index: number) => void }) {
  const { t } = useSite();
  return (
    <ul className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
      {photos.map((p, i) => (
        <motion.li
          key={p.src}
          className={photos.length === 1 ? "col-span-2" : ""}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <button
            type="button"
            onClick={() => onOpen(i)}
            className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-line"
            aria-label={t(p.caption)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={t(p.caption)}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-2 opacity-0 transition group-hover:opacity-100">
              <span className="flex items-center gap-1 text-left text-[11px] leading-tight text-white">
                <Maximize2 size={11} className="shrink-0" /> {t(p.caption)}
              </span>
            </span>
          </button>
        </motion.li>
      ))}
    </ul>
  );
}

function Logo({ item }: { item: TimelineItem }) {
  if (item.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      // Width follows the image, so wide logos get a wider badge instead of shrinking
      <img src={item.logo} alt={`${item.org} logo`} className="h-9 w-auto min-w-9 max-w-24 shrink-0 rounded-lg bg-white object-contain p-1" />
    );
  }
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent-2/20 text-[10px] font-bold tracking-tight text-accent">
      {item.short}
    </span>
  );
}

export function Projects() {
  const { t } = useSite();
  return (
    <Section id="projects" title={t(ui.nav.projects)}>
      <div className="space-y-5">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const { t } = useSite();
  return (
    <Link href={`/projects/${p.slug}/`} className="group block">
      <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
        <Card
          spotlight
          className={`overflow-hidden p-6 transition ${
            p.featured ? "shadow-[0_0_60px_-30px_var(--accent)]" : ""
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                {p.featured && (
                  <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {t(ui.featured)}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-muted">
                {t(p.role)} · {t(p.period)}
              </p>
            </div>
            <ArrowUpRight className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" size={20} />
          </div>
          <p className="mt-3 leading-relaxed text-muted">{t(p.tagline)}</p>
          {p.shots && p.shots.length > 0 && (
            // Slight 3D tilt that straightens on hover
            <div className="mt-6 [perspective:1200px]">
              <BrowserFrame
                src={p.shots[0].src}
                alt={t(p.shots[0].caption)}
                className="origin-bottom transition duration-700 ease-out [transform:rotateX(8deg)_scale(0.97)] group-hover:[transform:none]"
              />
            </div>
          )}
          {p.metrics.length > 0 && (
            <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {p.metrics.map((m) => (
                <div key={m.value} className="rounded-xl border border-line bg-bg/40 p-3">
                  <dt className="sr-only">{t(m.label)}</dt>
                  <dd className="text-lg font-semibold text-accent tabular-nums">
                    <CountUp value={m.value} />
                  </dd>
                  <dd className="mt-0.5 text-xs leading-snug text-muted">{t(m.label)}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-accent">{t(ui.readCase)} →</p>
        </Card>
      </motion.div>
    </Link>
  );
}

export function Skills() {
  const { t } = useSite();
  return (
    <Section id="skills" title={t(ui.nav.skills)}>
      <div className="grid gap-4 sm:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group.en} delay={i * 0.06}>
            <Card spotlight className="h-full p-5">
              <h3 className="mb-3 text-sm font-semibold">{t(s.group)}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
      {certifications.length > 0 && (
        <Reveal>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {certifications.map((c) => (
              <li key={c.name.en} className="flex items-center gap-2">
                <Award size={16} className="text-accent" />
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {t(c.name)}
                  </a>
                ) : (
                  t(c.name)
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}

export function Contact() {
  const { t } = useSite();
  const link =
    "inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium backdrop-blur-md transition hover:border-accent hover:text-accent";

  return (
    <Section id="contact" title={t(ui.nav.contact)}>
      <Reveal>
        <Card spotlight className="p-6 sm:p-8">
          <p className="max-w-xl text-lg leading-relaxed">{t(ui.contactText)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={`${link} border-accent/60 text-accent`}>
              <Mail size={16} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.tel}`} className={`${link} border-accent/60 text-accent`}>
              <Phone size={16} /> {profile.phone.display}
            </a>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  const { t } = useSite();
  return (
    <footer className="border-t border-line py-8 text-center text-xs text-muted">
      <p>
        © {new Date().getFullYear()} {t(profile.name)}
      </p>
      <p className="mt-1">{t(ui.footer)}</p>
    </footer>
  );
}

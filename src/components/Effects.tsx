"use client";

import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { activities, ui, type Photo } from "@/content/data";
import { useSite } from "./Providers";

export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="grid" />
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
    </div>
  );
}

// Soft glow that follows the pointer (desktop only)
export function CursorGlow() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const bg = useTransform(
    [sx, sy],
    ([a, b]) => `radial-gradient(500px circle at ${a}px ${b}px, color-mix(in srgb, var(--accent) 7%, transparent), transparent 70%)`
  );

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" style={{ background: bg }} />;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent to-accent-2"
      style={{ scaleX }}
    />
  );
}

export function BackToTop() {
  const { t } = useSite();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t(ui.backToTop)}
          className="fixed right-5 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg/80 text-muted backdrop-blur-xl transition hover:border-accent hover:text-accent"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Lightbox({ photos, index, onClose }: { photos: Photo[]; index: number | null; onClose: () => void }) {
  const { t } = useSite();
  const [i, setI] = useState(index ?? 0);
  const open = index !== null;

  useEffect(() => {
    if (index !== null) setI(index);
  }, [index]);

  const go = useCallback((d: number) => setI((v) => (v + d + photos.length) % photos.length), [photos.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  const photo = photos[i];
  const nav =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70";

  return (
    <AnimatePresence>
      {open && photo && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={t(photo.caption)}
        >
          <motion.figure
            className="relative w-full max-w-4xl"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={photo.src}
                src={photo.src}
                alt={t(photo.caption)}
                className="max-h-[78vh] w-full rounded-2xl object-contain"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white/80">
              <span>{t(photo.caption)}</span>
              {photos.length > 1 && (
                <span className="font-mono text-xs text-white/50">
                  {i + 1} / {photos.length}
                </span>
              )}
            </figcaption>
            {photos.length > 1 && (
              <>
                <button type="button" className={`${nav} left-2`} onClick={() => go(-1)} aria-label={t(ui.prev)}>
                  <ChevronLeft size={20} />
                </button>
                <button type="button" className={`${nav} right-2`} onClick={() => go(1)} aria-label={t(ui.next)}>
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label={t(ui.close)}
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition hover:bg-black"
            >
              <X size={16} />
            </button>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Slowly scrolling, tilted wall of activity photos behind the hero.
// Each column is the photo list rotated by its index and repeated, then duplicated for a seamless loop.
export function PhotoWall() {
  const { t } = useSite();
  if (activities.length === 0) return null;
  const columns = 7;
  // Each half of a column must be taller than the tilted wall (~1300px), so repeat the list to ≥12 tiles.
  // Repeats share URLs, so the browser still downloads each photo once.
  const perColumn = Math.ceil(12 / activities.length) * activities.length;

  return (
    <div className="photo-wall" aria-hidden="true">
      <div className="tilt">
        {Array.from({ length: columns }, (_, c) => {
          const list = Array.from({ length: perColumn }, (_, i) => activities[(i + c * 2) % activities.length]);
          return (
            <div
              key={c}
              className={`col ${c % 2 ? "down" : ""}`}
              // Duration scales with column length to keep a calm, even speed
              style={{ "--dur": `${perColumn * (5 + (c % 3) * 0.8)}s` } as React.CSSProperties}
            >
              {[...list, ...list].map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={p.src} alt={t(p.alt)} decoding="async" />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

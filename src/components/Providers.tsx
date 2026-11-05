"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { L, Lang } from "@/content/data";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: L) => string;
  dark: boolean;
  toggleTheme: () => void;
};

const SiteContext = createContext<Ctx | null>(null);

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  // Always start in light mode; the toggle only applies to the current visit.
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("lang") === "vi") setLangState("vi");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    save("lang", l);
  }, []);

  const toggleTheme = useCallback(() => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  }, []);

  const t = useCallback((s: L) => s[lang], [lang]);

  return (
    <SiteContext.Provider value={{ lang, setLang, t, dark, toggleTheme }}>{children}</SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <Providers>");
  return ctx;
}

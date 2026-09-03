"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { pt } from "@/lib/translations-pt";

export type Language = "en" | "pt";

const STORAGE_KEY = "nfc-language";
const CHANGE_EVENT = "nfc-language-change";

function getSnapshot(): Language {
  return window.localStorage.getItem(STORAGE_KEY) === "pt" ? "pt" : "en";
}

// Always "en" during SSR and the first client render, so the server-rendered
// markup and the initial client render agree — useSyncExternalStore then
// re-checks getSnapshot() right after hydration and re-renders if the
// stored preference actually says "pt". See Reveal's comment in
// motion-primitives.tsx for the same class of SSR-vs-client mismatch.
function getServerSnapshot(): Language {
  return "en";
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function setStoredLanguage(next: Language) {
  window.localStorage.setItem(STORAGE_KEY, next);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setStoredLanguage(language === "en" ? "pt" : "en");
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

type Vars = Record<string, string | number>;

function interpolate(text: string, vars?: Vars) {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, token) =>
    token in vars ? String(vars[token]) : match
  );
}

/**
 * t(key, english, vars?) — looks up `key` in the Portuguese dictionary when
 * the site is in Portuguese, falling back to `english` (the live source
 * text) if the key is missing or the site is in English. Keeps English the
 * single source of truth for copy: nothing needs to be duplicated in the
 * dictionary for the English side, only the Portuguese translation.
 *
 * Both `english` and the dictionary's Portuguese value may contain
 * `{token}` placeholders, filled in from `vars` after the language is
 * picked — so dynamic values (names, counts) work the same in both
 * languages without being baked into the string.
 */
export function useT() {
  const { language } = useLanguage();
  return useCallback(
    (key: string, english: string, vars?: Vars) =>
      interpolate(language === "pt" ? (pt[key] ?? english) : english, vars),
    [language]
  );
}

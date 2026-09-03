"use client";

import { useLanguage, useT } from "@/lib/language";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();
  const t = useT();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("language.toggleLabel", "Switch language")}
      className={cn(
        "inline-flex h-8 items-center gap-1 rounded-lg border px-1 text-xs font-medium tracking-wide text-muted-foreground",
        className
      )}
    >
      <span
        className={cn(
          "rounded-md px-1.5 py-1 transition-colors",
          language === "en" && "bg-primary text-primary-foreground"
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "rounded-md px-1.5 py-1 transition-colors",
          language === "pt" && "bg-primary text-primary-foreground"
        )}
      >
        PT
      </span>
    </button>
  );
}

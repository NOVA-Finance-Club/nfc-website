"use client";

import Link from "next/link";

import { ArticlesSearch } from "@/components/articles-search";
import { departments } from "@/lib/site-data";
import { useT } from "@/lib/language";

export function ArticlesContent() {
  const t = useT();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        {t("articles.heading", "Articles")}
      </h1>
      <p className="mt-3 text-muted-foreground">
        {t(
          "articles.introStart",
          "Search NFC's published articles and reports, from the"
        )}{" "}
        {departments.map((d, i) => (
          <span key={d.slug}>
            {i > 0 &&
              (i === departments.length - 1
                ? ` ${t("articles.introAnd", "and")} `
                : ", ")}
            <Link
              href={`/departments/${d.slug}`}
              className="underline underline-offset-4"
            >
              {t(`dept.${d.slug}.name`, d.name)}
            </Link>
          </span>
        ))}
        .
      </p>

      <ArticlesSearch />
    </div>
  );
}

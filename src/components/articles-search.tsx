"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { departments } from "@/lib/site-data";
import { useT } from "@/lib/language";
import { cn } from "@/lib/utils";

// No issues have been published yet, so this always returns empty — the
// search and filter UI is real and wired up, ready for articles as they land.
type Article = {
  title: string;
  department: string;
};

const articles: Article[] = [];

export function ArticlesSearch() {
  const [query, setQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState<string | null>(null);
  const t = useT();

  const results = useMemo(() => {
    return articles.filter((a) => {
      const matchesQuery = a.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesDept = !deptFilter || a.department === deptFilter;
      return matchesQuery && matchesDept;
    });
  }, [query, deptFilter]);

  return (
    <>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("articles.searchPlaceholder", "Search articles...")}
            className="w-full rounded-md border bg-background py-2 pr-3 pl-9 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button type="button" onClick={() => setDeptFilter(null)} className="cursor-pointer">
            <Badge variant={deptFilter === null ? "default" : "outline"}>
              {t("articles.all", "All")}
            </Badge>
          </button>
          {departments.map((d) => (
            <button
              key={d.slug}
              type="button"
              onClick={() => setDeptFilter(d.slug)}
              className="cursor-pointer"
            >
              <Badge variant={deptFilter === d.slug ? "default" : "outline"}>
                {t(`dept.${d.slug}.short`, d.name.replace(" Department", ""))}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "mt-6 rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground",
          results.length > 0 && "border-solid text-left"
        )}
      >
        {results.length > 0
          ? results.map((a) => <p key={a.title}>{a.title}</p>)
          : query || deptFilter
            ? t("articles.noMatch", "No articles match your search.")
            : t(
                "articles.noneYet",
                "No issues published yet. The first entries will appear here once they're published."
              )}
      </div>
    </>
  );
}

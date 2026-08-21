import Link from "next/link";
import type { Metadata } from "next";

import { ArticlesSearch } from "@/components/articles-search";
import { departments, publicationSeries, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Articles",
  description: `Search the articles and reports published by ${siteConfig.name}.`,
};

export default function ArticlesPage() {
  const publishingDepartments = departments.filter((d) =>
    publicationSeries.some((s) => s.producedBy === d.slug)
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">Articles</h1>
      <p className="mt-3 text-muted-foreground">
        Search NFC&apos;s published articles and reports, from the{" "}
        {publishingDepartments.map((d, i) => (
          <span key={d.slug}>
            {i > 0 && (i === publishingDepartments.length - 1 ? " and " : ", ")}
            <Link
              href={`/departments/${d.slug}`}
              className="underline underline-offset-4"
            >
              {d.name}
            </Link>
          </span>
        ))}
        .
      </p>

      <ArticlesSearch />
    </div>
  );
}

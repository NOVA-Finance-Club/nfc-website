import Link from "next/link";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PendingNote } from "@/components/pending-note";
import { departments, publicationSeries, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Articles",
  description: `The recurring publications and reports produced by ${siteConfig.name}.`,
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">Articles</h1>
      <p className="mt-3 text-muted-foreground">
        {siteConfig.shortName} publishes across two departments: recurring
        editorial pieces from{" "}
        <Link
          href="/departments/personal-finance"
          className="underline underline-offset-4"
        >
          Personal Finance
        </Link>
        , and regular markets and fund reporting from{" "}
        <Link
          href="/departments/investment"
          className="underline underline-offset-4"
        >
          Investment
        </Link>
        . Every issue will carry a title, a publication date, named authors
        and a short abstract, and this archive will list them in reverse
        chronological order as they are published.
      </p>

      <PendingNote className="mt-6">
        sourcing and review standards for published work (where data comes
        from, what review it passes before publishing).
      </PendingNote>

      <Separator className="my-10" />

      <h2 className="text-xl font-semibold tracking-tight">
        What we publish
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Five recurring series, each with its own cadence.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {publicationSeries.map((series) => {
          const dept = departments.find((d) => d.slug === series.producedBy);
          return (
            <div key={series.name} className="rounded-md border p-4">
              <p className="font-medium">
                {series.name}
                {series.englishGloss && (
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    ({series.englishGloss})
                  </span>
                )}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <Badge variant="outline">{series.cadence}</Badge>
                <Badge variant="secondary">{series.channel}</Badge>
              </div>
              {dept && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Produced by{" "}
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="underline underline-offset-4"
                  >
                    {dept.name}
                  </Link>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <Separator className="my-10" />

      <h2 className="text-xl font-semibold tracking-tight">Archive</h2>
      <div className="mt-4 rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
        No issues published yet. The first entries will appear here once{" "}
        {siteConfig.shortName} publishes its first issue.
      </div>
    </div>
  );
}

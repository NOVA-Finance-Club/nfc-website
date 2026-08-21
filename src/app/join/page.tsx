import Link from "next/link";
import type { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Join",
  description: `How to join ${siteConfig.name} at ${siteConfig.institution}.`,
};

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        Join {siteConfig.shortName}
      </h1>

      {/* Why join */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Why join</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          <li>
            Work on real deliverables — a virtual investment fund, weekly
            markets reports, editorial series published on LinkedIn, and
            quantitative finance projects with documented code, a written
            report and a final presentation.
          </li>
          <li>
            Build a public track record: work is dated, attributed, and
            published on the NFC GitHub and LinkedIn.
          </li>
          <li>
            Progress through a stated path in your department — for example
            Fund Analyst → Fund Lead, or Quant Trainee → Quant Analyst →
            Quant Researcher.
          </li>
          <li>
            Join a team of {siteConfig.memberCount} students across four
            departments, at {siteConfig.institution}.
          </li>
        </ul>
      </section>

      <Separator className="my-10" />

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <p className="text-muted-foreground">
          Not sure where you&apos;d fit?{" "}
          <Link
            href="/departments"
            className="font-medium text-foreground underline underline-offset-4"
          >
            See what each department does
          </Link>
          .
        </p>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Questions:{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-foreground underline underline-offset-4"
        >
          {siteConfig.email}
        </a>
      </p>
    </div>
  );
}

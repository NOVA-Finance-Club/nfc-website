import Link from "next/link";
import type { Metadata } from "next";

import { PendingNote, PendingInline } from "@/components/pending-note";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Join",
  description: `How to join ${siteConfig.name} at ${siteConfig.institution}.`,
};

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        Join {siteConfig.shortName}
      </h1>

      {/* Current status — stated first, per the club's own recruitment process */}
      <section className="mt-8">
        <PendingNote>
          current recruitment status — open until a date / opening in a
          given month / closed. The brief mentions a semesterly recruitment
          campaign run by the Events &amp; External Relations department,
          but no specific dates were provided.
        </PendingNote>
      </section>

      {/* Who can apply */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Who can apply
        </h2>
        <PendingNote>
          which faculties, years and backgrounds can apply.
        </PendingNote>
      </section>

      {/* Why join */}
      <section className="mt-10 space-y-3">
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

      {/* Process */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Application process
        </h2>
        <PendingNote>
          the step-by-step recruitment process (stages, what each stage
          assesses, and dates).
        </PendingNote>
      </section>

      {/* Time commitment */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Time commitment
        </h2>
        <PendingNote>
          the realistic weekly/monthly time commitment expected of members.
        </PendingNote>
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
        Questions: <PendingInline>a contact route for recruitment questions</PendingInline>
      </p>
    </div>
  );
}

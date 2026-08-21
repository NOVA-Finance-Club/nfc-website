import Link from "next/link";
import type { Metadata } from "next";

import { PendingNote } from "@/components/pending-note";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a student-run finance club at ${siteConfig.institution}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">About</h1>

      {/* Mission */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Mission</h2>
        <PendingNote>
          the club&apos;s mission statement — what {siteConfig.shortName} exists
          to achieve, in one short paragraph.
        </PendingNote>
      </section>

      {/* Vision / goals */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Vision &amp; goals</h2>
        <PendingNote>
          two to four concrete objectives for the {siteConfig.mandate}{" "}
          mandate.
        </PendingNote>
      </section>

      {/* Who we are */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Who we are</h2>
        <p className="text-muted-foreground">
          {siteConfig.name} ({siteConfig.shortName}) is a student-run finance
          club at {siteConfig.institution}. The {siteConfig.mandate} mandate
          counts {siteConfig.memberCount} members.
        </p>
        <PendingNote>
          which faculties/years/backgrounds the club draws from, and any
          eligibility scope beyond {siteConfig.institution}.
        </PendingNote>
      </section>

      {/* How we're organised */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          How we&apos;re organised
        </h2>
        <p className="text-muted-foreground">
          {siteConfig.shortName} is governed by an elected Board (Direção)
          and a General Council (Conselho Geral) — the General Assembly
          Board and the Fiscal Council together — and runs its day-to-day
          activity through four departments. See{" "}
          <Link
            href="/departments"
            className="font-medium underline underline-offset-4"
          >
            Departments
          </Link>{" "}
          for the current officers, department leads and members.
        </p>
        <PendingNote>
          how board members are chosen (election process) and how often the
          board transitions.
        </PendingNote>
      </section>

      {/* History */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">History</h2>
        <PendingNote>
          a founding year and a short timeline of key milestones (founding,
          formal recognition, first flagship event, first publication).
        </PendingNote>
      </section>

      <Separator className="my-10" />

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link href="/departments" className="font-medium underline underline-offset-4">
          See our departments →
        </Link>
        <Link href="/join" className="font-medium underline underline-offset-4">
          Join {siteConfig.shortName} →
        </Link>
      </div>
    </div>
  );
}

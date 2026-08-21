import Link from "next/link";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PendingNote } from "@/components/pending-note";
import { nfcFund, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "NFC Fund",
  description: `${nfcFund.name} — ${siteConfig.name}'s virtual investment fund.`,
};

export default function FundPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        {nfcFund.name}
      </h1>
      <p className="mt-3 text-muted-foreground">
        Run by the{" "}
        <Link
          href="/departments/investment"
          className="underline underline-offset-4"
        >
          Investment Department
        </Link>
        &apos;s Asset Management division.
      </p>

      <PendingNote className="mt-6">
        risk profile (conservative / balanced / growth), launch date, target
        return and time horizon.
      </PendingNote>

      {/* Mandate */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Mandate</h2>
        <p className="text-muted-foreground">{nfcFund.mandate}</p>
      </section>

      {/* Benchmark */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Benchmark</h2>
        <p className="text-muted-foreground">
          The brief that defines the Shareholders Report format uses{" "}
          <span className="font-medium text-foreground">
            {nfcFund.exampleBenchmark}
          </span>{" "}
          only as an example of a benchmark, not a confirmed choice.
        </p>
        <PendingNote>
          the actual benchmark, and a sentence justifying why it was chosen.
        </PendingNote>
      </section>

      {/* Methodology */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Methodology</h2>
        <p className="text-muted-foreground">
          The fund is split into coverage teams, each managing its own
          portion of the allocation. The brief gives these as illustrative
          examples of coverage teams, not a confirmed list:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {nfcFund.exampleCoverageTeams.map((team) => (
            <Badge key={team} variant="outline">
              {team} (example)
            </Badge>
          ))}
        </div>
        <PendingNote>
          the confirmed coverage teams, position selection process, weighting
          approach, rebalancing frequency, and asset universe.
        </PendingNote>
      </section>

      {/* Reporting */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Reporting</h2>
        <p className="text-muted-foreground">
          The{" "}
          <span className="font-medium text-foreground">
            {nfcFund.report.name}
          </span>{" "}
          is published {nfcFund.report.cadence.toLowerCase()} on{" "}
          {nfcFund.report.channel}, and covers:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {nfcFund.report.contents.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Performance & holdings */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Performance &amp; holdings
        </h2>
        <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
          No Shareholders Report has been published yet. Performance
          metrics and holdings will appear here once the fund reports its
          first quarter — not as a placeholder table showing zero.
        </div>
      </section>

      <Separator className="my-10" />

      <p className="text-sm text-muted-foreground">
        The {nfcFund.name} is a simulated, educational portfolio run by{" "}
        {siteConfig.shortName} members. Nothing on this page is investment
        advice.
      </p>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { nfcFund, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "NFC Fund",
  description: `${nfcFund.name} — ${siteConfig.name}'s virtual investment fund.`,
};

const TIME_RANGES = ["1W", "1M", "YTD", "1Y", "MAX"];

// Label above value, muted — the not-yet-available version of the stat-tile
// figure contract (no delta, no sparkline, no fabricated number).
function StatTile({ label }: { label: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 font-heading text-2xl font-bold tracking-tight text-muted-foreground">
        —
      </p>
    </div>
  );
}

function CardHeader({ children }: { children: ReactNode }) {
  return (
    <div className="bg-brand-navy px-4 py-2 text-center text-xs font-semibold tracking-wide text-brand-cream uppercase">
      {children}
    </div>
  );
}

// Reserved space for a real chart/archive, once there's data to show — a
// dashed, cream-tinted block matching the department pages' team-photo
// placeholder, so "reserved, not broken" reads consistently sitewide.
function EmptyState({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-48 flex-1 items-center justify-center bg-brand-cream/30 p-8 text-center text-sm text-muted-foreground">
      {children}
    </div>
  );
}

export default function FundPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
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
      </section>

      {/* Performance — chart + stats dashboard card, laid out after TIC's
          strategy pages (chart on the left, a headered stat card on the
          right). Both sides are honest empty states: the fund hasn't
          reported a quarter yet. */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Performance</h2>
        <p className="text-muted-foreground">
          Cumulative return against the benchmark, plus the headline risk
          figures from each Shareholders Report.
        </p>
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col overflow-hidden rounded-2xl border">
            <div className="flex flex-wrap items-center gap-1.5 border-b p-3">
              {TIME_RANGES.map((range) => (
                <Badge
                  key={range}
                  variant={range === "MAX" ? "default" : "outline"}
                >
                  {range}
                </Badge>
              ))}
            </div>
            <EmptyState>
              Cumulative performance will appear here once the fund reports
              its first quarter.
            </EmptyState>
          </div>
          <div className="overflow-hidden rounded-2xl border">
            <CardHeader>Headline figures</CardHeader>
            <div className="grid grid-cols-2 gap-6 p-6">
              <StatTile label="Cumulative return" />
              <StatTile label="Sharpe ratio" />
              <StatTile label="Max drawdown" />
              <StatTile label="vs. benchmark" />
            </div>
          </div>
        </div>
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
      </section>

      {/* Allocation */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Allocation</h2>
        <p className="text-muted-foreground">
          How the fund&apos;s positions break down by coverage team.
        </p>
        <div className="overflow-hidden rounded-2xl border">
          <CardHeader>By coverage team</CardHeader>
          <EmptyState>
            Allocation by coverage team will appear here once the fund
            reports its first quarter.
          </EmptyState>
        </div>
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

      {/* Shareholder Reports archive */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Shareholder Reports
        </h2>
        <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
          No Shareholders Report has been published yet. The first report
          will appear here once the fund reports its first quarter.
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

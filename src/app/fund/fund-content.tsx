"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { nfcFund, siteConfig } from "@/lib/site-data";
import { useT } from "@/lib/language";

const TIME_RANGES = ["1W", "1M", "YTD", "1Y", "MAX"];

const coverageTeamKey = (team: string) =>
  `fund.coverageTeam.${team.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}`;

const reportContentKey = (index: number) => `fund.report.content.${index}`;

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

export function FundContent() {
  const t = useT();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        {nfcFund.name}
      </h1>
      <p className="mt-3 text-muted-foreground">
        {t("fund.runByPrefix", "Run by the")}{" "}
        <Link
          href="/departments/investment"
          className="underline underline-offset-4"
        >
          Investment Department
        </Link>
        {t("fund.runBySuffix", "'s Asset Management division.")}
      </p>

      {/* Mandate */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.mandateHeading", "Mandate")}
        </h2>
        <p className="text-muted-foreground">
          {t("fund.mandateBody", nfcFund.mandate)}
        </p>
      </section>

      {/* Benchmark */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.benchmarkHeading", "Benchmark")}
        </h2>
        <p className="text-muted-foreground">
          {t(
            "fund.benchmarkBodyStart",
            "The brief that defines the Shareholders Report format uses"
          )}{" "}
          <span className="font-medium text-foreground">
            {nfcFund.exampleBenchmark}
          </span>{" "}
          {t(
            "fund.benchmarkBodyTail",
            "only as an example of a benchmark, not a confirmed choice."
          )}
        </p>
      </section>

      {/* Performance — chart + stats dashboard card, laid out after TIC's
          strategy pages (chart on the left, a headered stat card on the
          right). Both sides are honest empty states: the fund hasn't
          reported a quarter yet. */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.performanceHeading", "Performance")}
        </h2>
        <p className="text-muted-foreground">
          {t(
            "fund.performanceBody",
            "Cumulative return against the benchmark, plus the headline risk figures from each Shareholders Report."
          )}
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
              {t(
                "fund.cumulativePerformanceEmpty",
                "Cumulative performance will appear here once the fund reports its first quarter."
              )}
            </EmptyState>
          </div>
          <div className="overflow-hidden rounded-2xl border">
            <CardHeader>{t("fund.headlineFigures", "Headline figures")}</CardHeader>
            <div className="grid grid-cols-2 gap-6 p-6">
              <StatTile label={t("fund.stat.cumulativeReturn", "Cumulative return")} />
              <StatTile label={t("fund.stat.sharpeRatio", "Sharpe ratio")} />
              <StatTile label={t("fund.stat.maxDrawdown", "Max drawdown")} />
              <StatTile label={t("fund.stat.vsBenchmark", "vs. benchmark")} />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.methodologyHeading", "Methodology")}
        </h2>
        <p className="text-muted-foreground">
          {t(
            "fund.methodologyBody",
            "The fund is split into coverage teams, each managing its own portion of the allocation. The brief gives these as illustrative examples of coverage teams, not a confirmed list:"
          )}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {nfcFund.exampleCoverageTeams.map((team) => (
            <Badge key={team} variant="outline">
              {t(coverageTeamKey(team), team)} ({t("fund.exampleSuffix", "example")})
            </Badge>
          ))}
        </div>
      </section>

      {/* Allocation */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.allocationHeading", "Allocation")}
        </h2>
        <p className="text-muted-foreground">
          {t("fund.allocationBody", "How the fund's positions break down by coverage team.")}
        </p>
        <div className="overflow-hidden rounded-2xl border">
          <CardHeader>{t("fund.byCoverageTeam", "By coverage team")}</CardHeader>
          <EmptyState>
            {t(
              "fund.allocationEmpty",
              "Allocation by coverage team will appear here once the fund reports its first quarter."
            )}
          </EmptyState>
        </div>
      </section>

      {/* Reporting */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.reportingHeading", "Reporting")}
        </h2>
        <p className="text-muted-foreground">
          {t("fund.reportingBodyStart", "The")}{" "}
          <span className="font-medium text-foreground">
            {nfcFund.report.name}
          </span>{" "}
          {t("fund.reportingBodyMid", "is published")}{" "}
          {t(`fund.cadence.${nfcFund.report.cadence.toLowerCase()}`, nfcFund.report.cadence.toLowerCase())}{" "}
          {t("fund.reportingBodyEnd", "on")} {nfcFund.report.channel}
          {t("fund.reportingBodyTail", ", and covers:")}
        </p>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {nfcFund.report.contents.map((item, i) => (
            <li key={item}>{t(reportContentKey(i), item)}</li>
          ))}
        </ul>
      </section>

      {/* Shareholder Reports archive */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.reportsHeading", "Shareholder Reports")}
        </h2>
        <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
          {t(
            "fund.reportsEmpty",
            "No Shareholders Report has been published yet. The first report will appear here once the fund reports its first quarter."
          )}
        </div>
      </section>

      <Separator className="my-10" />

      <p className="text-sm text-muted-foreground">
        {t(
          "fund.disclaimer",
          "The {fundName} is a simulated, educational portfolio run by {shortName} members. Nothing on this page is investment advice.",
          { fundName: nfcFund.name, shortName: siteConfig.shortName }
        )}
      </p>
    </div>
  );
}

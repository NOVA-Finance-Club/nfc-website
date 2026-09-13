"use client";

import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/page-header";
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
    <div>
      <PageHeader
        title={`<${nfcFund.name}>`}
        subtitle={t(
          "fund.subtitle",
          "A simulated portfolio for real investment practice."
        )}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Mandate — folds the benchmark in as a second sentence rather than
          its own section, since it's a detail of the mandate, not a
          separate topic. */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.mandateHeading", "Mandate")}
        </h2>
        <p className="text-muted-foreground">
          {t("fund.mandateBody", nfcFund.mandate)}{" "}
          {t(
            "fund.benchmarkNote",
            "Benchmarked against the {benchmark} — an example, not yet confirmed.",
            { benchmark: nfcFund.exampleBenchmark }
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

      {/* Coverage Teams — a short provisional note replaces the old
          per-badge "(example)" suffix and paragraph explaining it. */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.coverageTeamsHeading", "Coverage Teams")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("fund.coverageTeamsNote", "Illustrative examples — not yet confirmed.")}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {nfcFund.exampleCoverageTeams.map((team) => (
            <Badge key={team} variant="outline">
              {t(coverageTeamKey(team), team)}
            </Badge>
          ))}
        </div>
      </section>

      {/* Allocation */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.allocationHeading", "Allocation")}
        </h2>
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

      {/* Reporting — cadence/channel as one line, contents as an inline
          dot-separated list rather than a bulleted block, with the
          archive's empty state folded in below instead of its own section. */}
      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("fund.reportingHeading", "Reporting")}
        </h2>
        <p className="text-muted-foreground">
          {t("fund.reportingSummary", "{reportName} — published {cadence} on {channel}.", {
            reportName: nfcFund.report.name,
            cadence: t(
              `fund.cadence.${nfcFund.report.cadence.toLowerCase()}`,
              nfcFund.report.cadence.toLowerCase()
            ),
            channel: nfcFund.report.channel,
          })}
        </p>
        <p className="text-sm text-muted-foreground">
          {nfcFund.report.contents.map((item, i) => t(reportContentKey(i), item)).join(" · ")}
        </p>
        <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
          {t(
            "fund.reportsEmpty",
            "None published yet — the first arrives after the fund's first quarter."
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
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

import { departments, governanceUnits, siteConfig } from "@/lib/site-data";
import { useT } from "@/lib/language";

function UnitCard({
  slug,
  name,
  nameKey,
  badgeImage,
  summary,
  summaryKey,
}: {
  slug: string;
  name: string;
  nameKey?: string;
  badgeImage: string;
  summary: string;
  summaryKey: string;
}) {
  const t = useT();
  return (
    <Link
      href={`/departments/${slug}`}
      className="flex items-start gap-4 rounded-lg border p-5 transition-colors hover:bg-accent"
    >
      <Image
        src={badgeImage}
        alt=""
        width={40}
        height={40}
        className="mt-0.5"
      />
      <div>
        <p className="font-medium">{nameKey ? t(nameKey, name) : name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {t(summaryKey, summary, { shortName: siteConfig.shortName })}
        </p>
      </div>
    </Link>
  );
}

export function DepartmentsContent() {
  const t = useT();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        {t("departments.index.heading", "Departments")}
      </h1>
      <p className="mt-3 text-muted-foreground">
        {t(
          "departments.index.subtitle",
          "{shortName}'s governance and its four functional departments.",
          { shortName: siteConfig.shortName }
        )}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {governanceUnits.map((unit) => (
          <UnitCard
            key={unit.slug}
            slug={unit.slug}
            name={unit.name}
            nameKey={`gov.${unit.slug}.name`}
            badgeImage={unit.badgeImage}
            summary={unit.summary}
            summaryKey={`gov.${unit.slug}.summary`}
          />
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        {t("departments.index.deptListHeading", "Departments")}
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {departments.map((dept) => (
          <UnitCard
            key={dept.slug}
            slug={dept.slug}
            name={dept.name}
            nameKey={`dept.${dept.slug}.name`}
            badgeImage={dept.badgeImage}
            summary={dept.summary}
            summaryKey={`dept.${dept.slug}.summary`}
          />
        ))}
      </div>
    </div>
  );
}

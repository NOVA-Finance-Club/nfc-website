import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { departments, governanceUnits, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Departments",
  description: `Governance and departments at ${siteConfig.name}.`,
};

function UnitCard({
  slug,
  name,
  badgeImage,
  summary,
}: {
  slug: string;
  name: string;
  badgeImage: string;
  summary: string;
}) {
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
        <p className="font-medium">{name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{summary}</p>
      </div>
    </Link>
  );
}

export default function DepartmentsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight">
        Departments
      </h1>
      <p className="mt-3 text-muted-foreground">
        {siteConfig.shortName}&apos;s governance and its four functional
        departments.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {governanceUnits.map((unit) => (
          <UnitCard key={unit.slug} {...unit} />
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        Departments
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {departments.map((dept) => (
          <UnitCard key={dept.slug} {...dept} />
        ))}
      </div>
    </div>
  );
}

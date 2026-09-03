"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PeopleGrid } from "@/components/person-card";
import { Reveal } from "@/components/motion-primitives";
import { siteConfig, type departments, type governanceUnits, type Person } from "@/lib/site-data";
import { useT } from "@/lib/language";

type GovernanceUnit = (typeof governanceUnits)[number];
type Department = (typeof departments)[number];
type Found =
  | { kind: "governance"; unit: GovernanceUnit }
  | { kind: "department"; unit: Department };

function subgroupTitleKey(title: string) {
  return `subgroup.${title.toLowerCase().replace(/\s+/g, "-")}`;
}

function BackLink() {
  const t = useT();
  return (
    <Link
      href="/departments"
      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="size-3.5" /> {t("departmentsSlug.back", "Departments")}
    </Link>
  );
}

function TeamHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center font-heading text-2xl font-bold tracking-tight">
      {children}
    </h2>
  );
}

// Reserved space for a real team/cohort photo, once one exists — deliberately
// left blank rather than filled with the department badge or any other
// stand-in image. Sits left of the name and description, in its own column.
function PhotoPlaceholder() {
  return (
    <div className="aspect-[4/5] w-full rounded-2xl border border-dashed border-brand-navy/15 bg-brand-cream/30 sm:aspect-auto sm:h-full" />
  );
}

export function DetailContent({ found }: { found: Found }) {
  const t = useT();

  if (found.kind === "governance") {
    const unit = found.unit;
    return (
      <div className="mx-auto max-w-7xl px-6 py-16">
        <BackLink />

        <Reveal className="mt-4 grid gap-8 sm:grid-cols-2 sm:items-stretch">
          <PhotoPlaceholder />
          <div>
            <div className="flex items-center gap-4">
              <Image src={unit.badgeImage} alt="" width={48} height={48} />
              <h1 className="font-heading text-3xl font-bold tracking-tight">
                {t(`gov.${unit.slug}.name`, unit.name)}
              </h1>
            </div>
            <p className="mt-4 text-muted-foreground">
              {t(`gov.${unit.slug}.summary`, unit.summary, {
                shortName: siteConfig.shortName,
              })}
            </p>
            <div className="mt-8">
              <Button nativeButton={false} render={<a href="#team" />}>
                {t("departmentsSlug.ourTeamButton", "Our team")}
                <ArrowDown className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="my-16 border-t" />

        <div id="team" className="scroll-mt-24">
          <TeamHeading>{t("departmentsSlug.ourTeam", "Our Team")}</TeamHeading>

          {unit.people && (
            <Reveal className="mt-10">
              <PeopleGrid people={unit.people as Person[]} hierarchy={false} />
            </Reveal>
          )}

          {unit.subgroups?.map((group) => (
            <div key={group.title} className="mt-14">
              <h3 className="text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {t(subgroupTitleKey(group.title), group.title)}
              </h3>
              <Reveal className="mt-6">
                <PeopleGrid people={group.people as Person[]} hierarchy={false} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const dept = found.unit;
  const people: Person[] = [
    { role: "Coordinator", name: dept.coordinator },
    ...dept.members.map((name) => ({ role: "Member", name })),
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <BackLink />

      <Reveal className="mt-4 grid gap-8 sm:grid-cols-2 sm:items-stretch">
        <PhotoPlaceholder />
        <div>
          <div className="flex items-center gap-4">
            <Image src={dept.badgeImage} alt="" width={48} height={48} />
            <h1 className="font-heading text-3xl font-bold tracking-tight">
              {t(`dept.${dept.slug}.name`, dept.name)}
            </h1>
          </div>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t(`dept.${dept.slug}.description`, dept.description ?? dept.summary)}
          </p>

          <div className="mt-8">
            <Button nativeButton={false} render={<a href="#team" />}>
              {t("departmentsSlug.ourTeamButton", "Our team")}
              <ArrowDown className="size-4" />
            </Button>
          </div>
        </div>
      </Reveal>

      {dept.divisions && (
        // Side-by-side from md up; stacked on mobile, but each division keeps
        // its own bordered card so the split stays visible at any width.
        <Reveal className="mt-14 grid gap-4 md:grid-cols-2 md:items-stretch">
          {dept.divisions.map((division, i) => (
            <div key={division.name} className="h-full rounded-lg border p-5">
              <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {t(`dept.${dept.slug}.divisions.${i}.name`, division.name)}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {t(`dept.${dept.slug}.divisions.${i}.description`, division.description)}
              </p>
            </div>
          ))}
        </Reveal>
      )}

      <div className="my-16 border-t" />

      <div id="team" className="scroll-mt-24">
        <TeamHeading>{t("departmentsSlug.ourTeam", "Our Team")}</TeamHeading>
        <Reveal className="mt-10">
          <PeopleGrid people={people} />
        </Reveal>
      </div>
    </div>
  );
}

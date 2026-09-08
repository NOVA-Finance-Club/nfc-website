"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PeopleGrid } from "@/components/person-card";
import { Reveal } from "@/components/motion-primitives";
import { departments, governanceUnits, siteConfig, type Person } from "@/lib/site-data";
import { useT } from "@/lib/language";
import { cn } from "@/lib/utils";

type GovernanceUnit = (typeof governanceUnits)[number];
type Department = (typeof departments)[number];
type Found =
  | { kind: "governance"; unit: GovernanceUnit }
  | { kind: "department"; unit: Department };

const allUnits = [...governanceUnits, ...departments];

function subgroupTitleKey(title: string) {
  return `subgroup.${title.toLowerCase().replace(/\s+/g, "-")}`;
}

function unitNameKey(unit: (typeof allUnits)[number]) {
  return "coordinator" in unit ? `dept.${unit.slug}.name` : `gov.${unit.slug}.name`;
}

// Total people shown on a unit's own team section — its direct roster plus
// anyone listed under a subgroup (e.g. the Board's department coordinators,
// or the General Council's two constituent bodies).
function unitMemberCount(unit: { people?: Person[]; subgroups?: { people: Person[] }[] }) {
  const direct = unit.people?.length ?? 0;
  const nested = unit.subgroups?.reduce((sum, group) => sum + group.people.length, 0) ?? 0;
  return direct + nested;
}

function BackLink() {
  const t = useT();
  return (
    <Link
      href="/departments"
      className="inline-flex items-center gap-1 text-sm text-brand-cream/70 hover:text-brand-cream"
    >
      <ArrowLeft className="size-3.5" /> {t("departmentsSlug.back", "Departments")}
    </Link>
  );
}

// Quick-switch pill row right under the hero, so a visitor can jump
// straight to another department or governance unit without going back
// through the index first.
function UnitSwitcher({ currentSlug }: { currentSlug: string }) {
  const t = useT();
  return (
    <div className="border-b bg-background">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4">
        {allUnits.map((unit) => (
          <Link
            key={unit.slug}
            href={`/departments/${unit.slug}`}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 text-sm whitespace-nowrap transition-colors",
              unit.slug === currentSlug
                ? "border-brand-navy bg-brand-navy text-brand-cream"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {t(unitNameKey(unit), unit.name)}
          </Link>
        ))}
      </div>
    </div>
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
// stand-in image. Sits left of the name and description, inside the hero.
function PhotoPlaceholder() {
  return (
    <div className="aspect-[4/5] w-full rounded-2xl border border-dashed border-brand-cream/20 bg-brand-cream/5 sm:aspect-auto sm:h-full" />
  );
}

export function DetailContent({ found }: { found: Found }) {
  const t = useT();

  if (found.kind === "governance") {
    const unit = found.unit;
    return (
      <div>
        <section className="bg-brand-navy py-16 text-brand-cream sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <BackLink />
            <Reveal className="mt-6 grid gap-8 sm:grid-cols-2 sm:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Image src={unit.badgeImage} alt="" width={40} height={40} />
                  <p className="text-xs font-semibold tracking-wide text-brand-cream/60 uppercase">
                    {t("departmentsSlug.eyebrowGovernance", "Governance · {count} members", {
                      count: unitMemberCount(unit),
                    })}
                  </p>
                </div>
                <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                  {`<${t(`gov.${unit.slug}.name`, unit.name)}>`}
                </h1>
                <p className="mt-4 text-brand-cream/80">
                  {t(`gov.${unit.slug}.summary`, unit.summary, {
                    shortName: siteConfig.shortName,
                  })}
                </p>
                <div className="mt-6">
                  <Button
                    nativeButton={false}
                    render={<a href="#team" />}
                    className="bg-brand-cream text-brand-navy hover:bg-brand-cream/90"
                  >
                    {t("departmentsSlug.ourTeamButton", "Our team")}
                    <ArrowDown className="size-4" />
                  </Button>
                </div>
              </div>
              <PhotoPlaceholder />
            </Reveal>
          </div>
        </section>

        <UnitSwitcher currentSlug={unit.slug} />

        <div className="mx-auto max-w-7xl px-6 py-16">
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
      </div>
    );
  }

  const dept = found.unit;
  const people: Person[] = [
    { role: "Coordinator", name: dept.coordinator },
    ...dept.members.map((name) => ({ role: "Member", name })),
  ];

  return (
    <div>
      <section className="bg-brand-navy py-16 text-brand-cream sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <BackLink />
          <Reveal className="mt-6 grid gap-8 sm:grid-cols-2 sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Image src={dept.badgeImage} alt="" width={40} height={40} />
                <p className="text-xs font-semibold tracking-wide text-brand-cream/60 uppercase">
                  {t("departmentsSlug.eyebrowDepartment", "Department · {count} members", {
                    count: dept.members.length + 1,
                  })}
                </p>
              </div>
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                {`<${t(`dept.${dept.slug}.name`, dept.name)}>`}
              </h1>
              <p className="mt-4 leading-relaxed text-brand-cream/80">
                {t(`dept.${dept.slug}.description`, dept.description ?? dept.summary)}
              </p>
              <div className="mt-6">
                <Button
                  nativeButton={false}
                  render={<a href="#team" />}
                  className="bg-brand-cream text-brand-navy hover:bg-brand-cream/90"
                >
                  {t("departmentsSlug.ourTeamButton", "Our team")}
                  <ArrowDown className="size-4" />
                </Button>
              </div>
            </div>
            <PhotoPlaceholder />
          </Reveal>
        </div>
      </section>

      <UnitSwitcher currentSlug={dept.slug} />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {dept.divisions && (
          <>
            {/* Side-by-side from md up; stacked on mobile, but each division
                keeps its own bordered card so the split stays visible at
                any width. */}
            <Reveal className="grid gap-4 md:grid-cols-2 md:items-stretch">
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
            <div className="my-16 border-t" />
          </>
        )}

        <div id="team" className="scroll-mt-24">
          <TeamHeading>{t("departmentsSlug.ourTeam", "Our Team")}</TeamHeading>
          <Reveal className="mt-10">
            <PeopleGrid people={people} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

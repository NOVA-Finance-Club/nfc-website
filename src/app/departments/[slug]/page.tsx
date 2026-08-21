import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowDown, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PeopleGrid } from "@/components/person-card";
import { Reveal } from "@/components/motion-primitives";
import { departments, governanceUnits, siteConfig, type Person } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

function findUnit(slug: string) {
  const governance = governanceUnits.find((u) => u.slug === slug);
  if (governance) return { kind: "governance" as const, unit: governance };
  const department = departments.find((d) => d.slug === slug);
  if (department) return { kind: "department" as const, unit: department };
  return null;
}

export function generateStaticParams() {
  return [...governanceUnits, ...departments].map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = findUnit(slug);
  if (!found) return {};
  return {
    title: found.unit.name,
    description: `${found.unit.name} at ${siteConfig.name}.`,
  };
}

function BackLink() {
  return (
    <Link
      href="/departments"
      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="size-3.5" /> Departments
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

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const found = findUnit(slug);
  if (!found) notFound();

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
                {unit.name}
              </h1>
            </div>
            <p className="mt-4 text-muted-foreground">{unit.summary}</p>
            <div className="mt-8">
              <Button nativeButton={false} render={<a href="#team" />}>
                Our team
                <ArrowDown className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="my-16 border-t" />

        <div id="team" className="scroll-mt-24">
          <TeamHeading>Our Team</TeamHeading>

          {unit.people && (
            <Reveal className="mt-10">
              <PeopleGrid people={unit.people} hierarchy={false} />
            </Reveal>
          )}

          {unit.subgroups?.map((group) => (
            <div key={group.title} className="mt-14">
              <h3 className="text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {group.title}
              </h3>
              <Reveal className="mt-6">
                <PeopleGrid people={group.people} hierarchy={false} />
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
              {dept.name}
            </h1>
          </div>

          <p className="mt-4 text-muted-foreground">{dept.summary}</p>

          {dept.description && (
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {dept.description}
            </p>
          )}

          <div className="mt-8">
            <Button nativeButton={false} render={<a href="#team" />}>
              Our team
              <ArrowDown className="size-4" />
            </Button>
          </div>
        </div>
      </Reveal>

      {dept.divisions && (
        <Reveal className="mt-14 space-y-6">
          {dept.divisions.map((division) => (
            <div key={division.name}>
              <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {division.name}
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                {division.description}
              </p>
            </div>
          ))}
        </Reveal>
      )}

      <div className="my-16 border-t" />

      <div id="team" className="scroll-mt-24">
        <TeamHeading>Our Team</TeamHeading>
        <Reveal className="mt-10">
          <PeopleGrid people={people} />
        </Reveal>
      </div>
    </div>
  );
}

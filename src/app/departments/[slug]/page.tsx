import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PeopleGrid } from "@/components/person-card";
import { PendingNote, PendingInline } from "@/components/pending-note";
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

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const found = findUnit(slug);
  if (!found) notFound();

  if (found.kind === "governance") {
    const unit = found.unit;
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <BackLink />

        <div className="mt-4 flex items-start gap-4">
          <Image
            src={unit.badgeImage}
            alt=""
            width={48}
            height={48}
            className="rounded-md"
          />
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            {unit.name}
          </h1>
        </div>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          {unit.summary}
        </p>

        {unit.people && (
          <div className="mt-8">
            <PeopleGrid people={unit.people} />
          </div>
        )}

        {unit.subgroups?.map((group) => (
          <div key={group.title} className="mt-10">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {group.title}
            </h2>
            <div className="mt-4">
              <PeopleGrid people={group.people} />
            </div>
          </div>
        ))}

        <PendingNote className="mt-10">
          member photographs (initials shown above as a placeholder),
          professional profile links, and direct emails.
        </PendingNote>
      </div>
    );
  }

  const dept = found.unit;
  const people: Person[] = [
    { role: "Coordinator", name: dept.coordinator },
    ...dept.members.map((name) => ({ role: "Member", name })),
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <BackLink />

      <div className="mt-4 flex items-start gap-4">
        <Image
          src={dept.badgeImage}
          alt=""
          width={48}
          height={48}
          className="rounded-md"
        />
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          {dept.name}
        </h1>
      </div>

      <p className="mt-4 max-w-2xl text-muted-foreground">{dept.summary}</p>

      {dept.description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {dept.description}
        </p>
      )}

      {dept.mandateGoal && (
        <p className="mt-4 text-sm">
          <span className="text-muted-foreground">
            {siteConfig.mandate} mandate goal:{" "}
          </span>
          <span className="font-medium">{dept.mandateGoal}</span>
        </p>
      )}

      {dept.editorialSeries && (
        <div className="mt-8 divide-y border-t border-b">
          {dept.editorialSeries.map((series) => (
            <div
              key={series.name}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
            >
              <div>
                <span className="font-medium">
                  {series.name}
                  {series.englishGloss && (
                    <span className="font-normal text-muted-foreground">
                      {" "}
                      ({series.englishGloss})
                    </span>
                  )}
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  {series.description}
                </p>
              </div>
              <Badge variant="outline" className="shrink-0">
                {series.cadence}
              </Badge>
            </div>
          ))}
        </div>
      )}

      {dept.divisions && (
        <div className="mt-8 space-y-6">
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
        </div>
      )}

      {dept.notes?.map((note) => (
        <PendingNote key={note} className="mt-6">
          {note}
        </PendingNote>
      ))}

      <div className="mt-10">
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          People
        </h2>
        <div className="mt-4">
          <PeopleGrid people={people} />
        </div>
      </div>

      <PendingNote className="mt-10">
        a &quot;who this suits&quot; line, to help prospective members
        self-select. <PendingInline>lead contact email and photo</PendingInline>{" "}
        for the coordinator.
      </PendingNote>
    </div>
  );
}

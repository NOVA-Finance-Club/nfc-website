"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { alumniTerms, siteConfig, type Person } from "@/lib/site-data";
import { useT } from "@/lib/language";

function PersonList({ people }: { people: Person[] }) {
  return (
    <ul className="mt-4 divide-y border-t">
      {people.map((person) => (
        <li
          key={person.name}
          className="flex items-baseline justify-between gap-4 py-3"
        >
          <span className="font-medium">{person.name}</span>
          <span className="text-sm text-muted-foreground">{person.role}</span>
        </li>
      ))}
    </ul>
  );
}

function groupTitleKey(title: string) {
  return `alumni.group.${title.toLowerCase().replace(/\s+/g, "-")}`;
}

export function AlumniContent() {
  const t = useT();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          {t("alumni.heading", "Alumni")}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {t(
            "alumni.subtitle",
            "{shortName}'s past elected leadership, mandate by mandate.",
            { shortName: siteConfig.shortName }
          )}
        </p>
      </Reveal>

      <div className="mt-14 space-y-20">
        {alumniTerms.map((term) => {
          const inaugurated = term.inauguratedDisplay
            ? t(`alumni.term.${term.label}.inaugurated`, term.inauguratedDisplay)
            : null;
          const location = term.location
            ? t("alumni.location", term.location, {
                institutionFullName: t("institution.full", siteConfig.institutionFullName),
              })
            : null;

          return (
            <section key={term.label} className="border-t pt-14 first:border-t-0 first:pt-0">
              <Reveal>
                <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                  {term.label}
                </h2>
                {inaugurated && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("alumni.swornIn", "Sworn in on")} {inaugurated}
                    {location ? ` ${t("alumni.swornInAt", "at")} ${location}` : ""}.
                  </p>
                )}
              </Reveal>

              <StaggerGroup className="mt-8 space-y-14">
                {term.groups.map((group) => (
                  <StaggerItem key={group.title}>
                    <h3 className="font-heading text-lg font-bold tracking-tight">
                      {t(groupTitleKey(group.title), group.title)}
                    </h3>

                    {group.people && <PersonList people={group.people} />}

                    {group.subgroups && (
                      <div className="mt-4 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                        {group.subgroups.map((subgroup) => (
                          <div key={subgroup.title}>
                            <h4 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                              {subgroup.title}
                            </h4>
                            <PersonList people={subgroup.people} />
                          </div>
                        ))}
                      </div>
                    )}
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </section>
          );
        })}
      </div>
    </div>
  );
}

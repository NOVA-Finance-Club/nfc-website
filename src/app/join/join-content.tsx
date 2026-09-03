"use client";

import Image from "next/image";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { departments, siteConfig } from "@/lib/site-data";
import { useT } from "@/lib/language";

const departmentPitch: Record<string, { label: string; lookingFor: string[] }> = {
  investment: {
    label: "Investments",
    lookingFor: [
      "want to actively manage a real fund and see how their calls play out",
      "want to get better at reading markets and picking stocks",
      "want to understand how investment decisions actually get made",
    ],
  },
  "personal-finance": {
    label: "Personal Finance",
    lookingFor: [
      "like explaining things clearly and want to write for a real audience",
      "are curious about the economy and want to follow it more closely",
      "want their work to be seen by people outside the club",
    ],
  },
  "quantitative-trading": {
    label: "Quantitative Trading",
    lookingFor: [
      "want to learn quant finance from scratch, no background needed",
      "enjoy coding and want to use it on real finance problems",
      "want to end up with a project they can actually point to",
    ],
  },
  "events-external-relations": {
    label: "Events & External Relations",
    lookingFor: [
      "like organizing things and talking to people",
      "want to help bring partners, speakers and events to the club",
      "want experience that isn't just academic",
    ],
  },
};

const process = [
  "Submit your application form",
  "Short interview with the department(s) of your choice",
  "Results and onboarding session",
];

export function JoinContent() {
  const t = useT();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <Reveal>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {t("join.heading", "Join Us")}
          </h1>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-8 inline-block rounded-md bg-brand-navy px-8 py-5 text-brand-cream"
        >
          <p className="font-heading text-lg font-bold tracking-tight">
            {t("join.applicationsClosed", "Applications closed")}
          </p>
          <p className="mt-1 text-sm text-brand-cream/80">
            {t("join.nextRecruitment", "Next recruitment: Spring Semester")}
          </p>
        </Reveal>
      </div>

      <Reveal
        delay={0.15}
        className="mx-auto mt-10 max-w-2xl space-y-4 text-center text-muted-foreground"
      >
        <p>
          {t(
            "join.intro1",
            "By joining {shortName} you'll get to know other students who are into finance, follow what's actually happening in markets and the economy, and put some of what you learn in class into practice.",
            { shortName: siteConfig.shortName }
          )}
        </p>
        <p>
          {t(
            "join.intro2",
            "Our members put in a real amount of their free time, and they'd tell you it's worth it. If finance is your thing, don't miss the next recruitment round."
          )}
        </p>
      </Reveal>

      {/* Who should apply */}
      <section className="mt-16 border-t pt-16">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t("join.whoShouldApplyHeading", "Who should apply?")}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            {t("join.whoShouldApplySubtitle", "We're looking for students across the following departments.")}
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-10 sm:grid-cols-2">
          {departments.map((dept) => {
            const pitch = departmentPitch[dept.slug];
            if (!pitch) return null;
            return (
              <StaggerItem key={dept.slug}>
                <div className="flex items-center gap-4">
                  <Image
                    src={dept.badgeImage}
                    alt=""
                    width={96}
                    height={96}
                    className="shrink-0"
                  />
                  <div>
                    <h3 className="font-heading text-lg font-bold tracking-tight">
                      {t(`dept.${dept.slug}.short`, pitch.label)}
                      {t("join.pitchHeadingSuffix", ", who:")}
                    </h3>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                      {pitch.lookingFor.map((line, i) => (
                        <li key={line}>
                          {t(`join.pitch.${dept.slug}.${i}`, line)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* Eligibility */}
      <section className="mt-16 border-t pt-16 text-center">
        <Reveal>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t(
              "join.eligibility",
              "To be eligible you need to be a student at {institution}, any course, any year. We look for genuine interest in finance and some real free time to give to the club.",
              { institution: t("institution.short", siteConfig.institution) }
            )}
          </p>
        </Reveal>
      </section>

      {/* How the process works */}
      <section className="mt-16 border-t pt-16 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t("join.processHeading", "How the process works")}
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-10 sm:grid-cols-3">
          {process.map((step, i) => (
            <StaggerItem key={step}>
              <p className="font-heading text-4xl font-bold text-brand-navy/25">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`join.process.${i}`, step)}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <Reveal className="mt-16 border-t pt-10 text-center text-sm text-muted-foreground">
        {t("join.questions", "Questions? Reach out at")}{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-foreground underline underline-offset-4"
        >
          {siteConfig.email}
        </a>
      </Reveal>
    </div>
  );
}

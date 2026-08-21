import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion-primitives";
import { missionStatement, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a student-run finance club at ${siteConfig.institution}.`,
};

export default function AboutPage() {
  return (
    <div>
      {/* Intro banner — full-bleed like "What we do" on the homepage, so
          the mission statement reads as a statement, not another h2+p
          block identical to the two below it. */}
      <section className="border-b bg-brand-cream/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h1 className="font-heading text-3xl font-bold tracking-tight">
              About
            </h1>
            <p className="mt-6 max-w-3xl font-heading text-xl leading-relaxed sm:text-2xl">
              {missionStatement}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <Reveal className="grid gap-10 sm:grid-cols-2">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">
              Who we are
            </h2>
            <p className="text-muted-foreground">
              {siteConfig.name} ({siteConfig.shortName}) is a student-run
              finance club at {siteConfig.institution}. The{" "}
              {siteConfig.mandate} mandate counts {siteConfig.memberCount}{" "}
              members.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">
              How we&apos;re organised
            </h2>
            <p className="text-muted-foreground">
              {siteConfig.shortName} is governed by an elected Board and a
              General Council — the General Assembly Board and the Fiscal
              Council together — and runs its day-to-day activity through
              four departments. See{" "}
              <Link
                href="/departments"
                className="font-medium underline underline-offset-4"
              >
                Departments
              </Link>{" "}
              for the current officers, department leads and members.
            </p>
          </section>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3 border-t pt-10">
          <Button variant="outline" nativeButton={false} render={<Link href="/departments" />}>
            See our departments
            <ArrowRight className="size-4" />
          </Button>
          <Button nativeButton={false} render={<Link href="/join" />}>
            Join {siteConfig.shortName}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

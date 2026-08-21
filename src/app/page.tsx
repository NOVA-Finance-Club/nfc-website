import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PendingNote } from "@/components/pending-note";
import { departments, siteConfig } from "@/lib/site-data";

export default function Home() {
  return (
    <div>
      {/* Hero — full-bleed brand-navy band with the FCT-NOVA/Lisbon banner */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-brand-cream">
        <Image
          src="/brand/hero-banner.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="text-sm font-medium tracking-[0.2em] text-brand-cream/70 uppercase">
            {siteConfig.institution}
          </p>
          <h1 className="mt-5 max-w-2xl font-heading text-5xl leading-[1.05] font-bold sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-brand-cream/85">
            {siteConfig.shortName} is a student-run finance club at{" "}
            {siteConfig.institution}, organised into a Board, a General
            Council, and four departments.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/#contact" />}
              className="bg-brand-cream text-brand-navy hover:bg-brand-cream/90"
            >
              Contact
              <Mail className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/departments" />}
              className="border-brand-cream/35 bg-transparent text-brand-cream hover:bg-brand-cream/10"
            >
              See what we do
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <PendingNote className="mt-10 max-w-2xl">
          founding year and a one-paragraph mission statement for the club
          (see About).
        </PendingNote>

        {/* What we do */}
        <section className="mt-6 border-t py-16">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            What we do
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Four departments, each with a stated remit and its own regular
            output.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {departments.map((dept) => (
              <Card key={dept.slug} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Image
                      src={dept.badgeImage}
                      alt=""
                      width={32}
                      height={32}
                      className="rounded-md"
                    />
                    <CardTitle className="text-base">{dept.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex h-full flex-col justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    {dept.summary}
                  </p>
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    Learn more <ArrowRight className="size-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* More from NFC — Articles & Fund */}
        <section className="border-t py-16">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            More from {siteConfig.shortName}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">Articles</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Recurring editorial series and markets reports, published
                  across departments.
                </p>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  Read our articles <ArrowRight className="size-3.5" />
                </Link>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">NFC Fund</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  The Investment Department&apos;s virtual fund — mandate,
                  methodology and quarterly reporting.
                </p>
                <Link
                  href="/fund"
                  className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  See the fund <ArrowRight className="size-3.5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scale in numbers */}
        <section className="border-t py-16">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            {siteConfig.shortName} in numbers
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <p className="font-heading text-4xl font-bold tracking-tight">
                {siteConfig.memberCount}
              </p>
              <p className="text-sm text-muted-foreground">members</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold tracking-tight">
                {departments.length}
              </p>
              <p className="text-sm text-muted-foreground">departments</p>
            </div>
          </div>
          <PendingNote className="mt-6 max-w-2xl">
            additional figures a homepage normally carries (alumni,
            publications to date, event attendance, subscribers) — none exist
            yet for this V0 site.
          </PendingNote>
        </section>

        {/* Team */}
        <section className="border-t py-16">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            The team
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            27 members across a Board, a General Council and four
            departments.
          </p>
          <PendingNote className="mt-4 max-w-2xl">
            cohort photograph.
          </PendingNote>
          <div className="mt-6">
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/departments" />}
            >
              Meet the team <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

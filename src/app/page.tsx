import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import {
  AnimatedStat,
  HeroParallax,
  HoverLift,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion-primitives";
import { departments, memberDegrees, missionStatement, siteConfig } from "@/lib/site-data";

export default function Home() {
  const distinctBackgrounds = new Set(
    Object.values(memberDegrees).map((degree) => degree.name)
  ).size;
  const yearsActive = new Date().getFullYear() - siteConfig.foundedYear;

  return (
    <div>
      {/* Hero — full-bleed brand-navy band with the FCT-NOVA/Lisbon banner */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-brand-cream">
        <HeroParallax>
          <Image
            src="/brand/hero-banner.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </HeroParallax>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/60 to-brand-navy/40" />
        <StaggerGroup
          immediate
          className="relative mx-auto max-w-7xl px-6 pt-28 pb-32 sm:pt-40 sm:pb-48"
        >
          <StaggerItem>
            <h1 className="font-heading text-6xl leading-[1.05] font-bold sm:text-7xl">
              {`<${siteConfig.name}>`}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl font-heading text-2xl text-brand-cream/85">
              {siteConfig.slogan}
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 max-w-xl text-lg text-brand-cream/85">
              We are a student-run finance club from {siteConfig.institutionFullName}.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-9 flex flex-wrap gap-3">
            <HoverLift>
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="/#contact" />}
                className="bg-brand-cream text-brand-navy hover:bg-brand-cream/90"
              >
                Contact
                <Mail className="size-4" />
              </Button>
            </HoverLift>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        {/* Founding + mission */}
        <section className="mt-10 py-10 text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl font-heading text-xl leading-relaxed sm:text-2xl">
              {missionStatement}
            </p>
          </Reveal>
        </section>

        {/* NFC in numbers */}
        <section className="mt-10 border-t py-16 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {siteConfig.shortName} in numbers
            </h2>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <StaggerItem>
              <AnimatedStat
                value={siteConfig.memberCount}
                className="font-heading text-4xl font-bold tracking-tight"
              />
              <p className="text-sm text-muted-foreground">members</p>
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat
                value={departments.length}
                className="font-heading text-4xl font-bold tracking-tight"
              />
              <p className="text-sm text-muted-foreground">departments</p>
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat
                value={distinctBackgrounds}
                className="font-heading text-4xl font-bold tracking-tight"
              />
              <p className="text-sm text-muted-foreground">
                distinct backgrounds
              </p>
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat
                value={yearsActive}
                className="font-heading text-4xl font-bold tracking-tight"
              />
              <p className="text-sm text-muted-foreground">years active</p>
            </StaggerItem>
          </StaggerGroup>
        </section>
      </div>

      {/* What we do — a full-bleed banner, breaking out of the max-w-7xl
          text column like the numbers/hero above it, so the homepage reads
          as distinct horizontal sections rather than one long scroll. Plain
          centered icon + title + description per department, no cards. */}
      <section className="mt-6 border-y bg-brand-cream/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What we do
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
              <StaggerItem key={dept.slug}>
                <Link
                  href={`/departments/${dept.slug}`}
                  className="group flex flex-col items-center text-center"
                >
                  <Image src={dept.badgeImage} alt="" width={96} height={96} />
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-tight group-hover:underline">
                    {dept.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {dept.summary}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        {/* Latest Articles from NFC */}
        <section className="py-16 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Latest Articles from {siteConfig.shortName}
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Recurring editorial series and markets reports, published
              across departments.
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="mt-6 rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground"
          >
            No articles published yet.{" "}
            <Link
              href="/articles"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Browse the archive
            </Link>
          </Reveal>
        </section>

        {/* NFC Fund */}
        <section className="border-t py-16 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {siteConfig.shortName} Fund
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              The Investment Department&apos;s virtual fund. Mandate,
              methodology and quarterly reporting.
            </p>
            <Link
              href="/fund"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:underline"
            >
              See the fund <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </section>
      </div>

      {/* Get in touch — a full-bleed navy banner, after the Contact Us
          section on investmentclub.tecnico.ulisboa.pt: centered heading,
          name + email side by side, message below, centered submit. The
          footer already carries the raw email/social links on every page,
          so this section's job is the interactive form, not a repeat of
          those links. */}
      <section
        id="contact"
        className="scroll-mt-24 bg-brand-navy py-20 text-brand-cream"
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

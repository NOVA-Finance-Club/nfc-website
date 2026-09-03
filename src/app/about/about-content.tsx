"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { aboutStory, siteConfig } from "@/lib/site-data";
import { useT } from "@/lib/language";

export function AboutContent() {
  const t = useT();

  return (
    <div>
      {/* Hero — editorial manifesto: the founding tension stated large,
          centered, no asset. This replaces the old generic
          mission-statement banner; the headline itself is the club's
          actual reason for existing. */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-16 text-center sm:pt-20">
        <Reveal>
          <h1 className="mx-auto max-w-2xl font-heading text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl">
            {t("about.hero.headline", aboutStory.heroHeadline)}
          </h1>
          <p className="mx-auto mt-6 max-w-sm text-lg text-muted-foreground">
            {t("about.hero.subtext", aboutStory.heroSubtext)}
          </p>
        </Reveal>
      </section>

      {/* The gap — full-bleed cream band, the same tint the homepage uses
          for "What we do", so this reads as its own beat rather than the
          hero paragraph continuing. */}
      <section className="border-y bg-brand-cream/40 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("about.gapBody", aboutStory.gapBody)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The response — full-bleed navy, the site's established
          "this is the important part" band (same treatment as the homepage
          hero and Get in Touch), so NFC's answer to the gap lands with
          real weight instead of sitting flush with the paragraph above. */}
      <section className="bg-brand-navy py-20 text-brand-cream">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl font-heading text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
              {t("about.responseStatement", aboutStory.responseStatement)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The community — a lead statement, then the two-way exchange it
          describes shown as two reciprocal blocks. Two, not three: the
          text names exactly two directions this goes, so the layout has
          exactly two cells. */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <Reveal>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("about.communityLead", aboutStory.communityLead)}
          </p>
        </Reveal>

        <StaggerGroup className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
          <StaggerItem>
            <div className="h-full rounded-lg border p-6 text-center">
              <p className="font-heading text-xl leading-snug font-bold tracking-tight">
                {t("about.communityExperienced", aboutStory.communityExperienced)}
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="h-full rounded-lg border p-6 text-center">
              <p className="font-heading text-xl leading-snug font-bold tracking-tight">
                {t("about.communityNewcomers", aboutStory.communityNewcomers)}
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-16 text-center">
        <div className="flex flex-wrap justify-center gap-3 border-t pt-10">
          <Button variant="outline" nativeButton={false} render={<Link href="/departments" />}>
            {t("about.seeDepartments", "See our departments")}
            <ArrowRight className="size-4" />
          </Button>
          <Button nativeButton={false} render={<Link href="/join" />}>
            {t("about.joinButton", "Join {shortName}", { shortName: siteConfig.shortName })}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${siteConfig.name}, a student-run finance club at ${siteConfig.institution}.`,
};

export default function AboutPage() {
  return <AboutContent />;
}

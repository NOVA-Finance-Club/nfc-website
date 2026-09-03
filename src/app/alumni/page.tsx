import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";
import { AlumniContent } from "./alumni-content";

export const metadata: Metadata = {
  title: "Alumni",
  description: `Past elected leadership of ${siteConfig.name}.`,
};

export default function AlumniPage() {
  return <AlumniContent />;
}

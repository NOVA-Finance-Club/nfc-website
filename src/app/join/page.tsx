import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";
import { JoinContent } from "./join-content";

export const metadata: Metadata = {
  title: "Join",
  description: `How to join ${siteConfig.name} at ${siteConfig.institution}.`,
};

export default function JoinPage() {
  return <JoinContent />;
}

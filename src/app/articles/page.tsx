import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";
import { ArticlesContent } from "./articles-content";

export const metadata: Metadata = {
  title: "Articles",
  description: `Search the articles and reports published by ${siteConfig.name}.`,
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}

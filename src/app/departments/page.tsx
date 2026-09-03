import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-data";
import { DepartmentsContent } from "./departments-content";

export const metadata: Metadata = {
  title: "Departments",
  description: `Governance and departments at ${siteConfig.name}.`,
};

export default function DepartmentsIndexPage() {
  return <DepartmentsContent />;
}

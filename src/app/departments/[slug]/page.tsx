import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { departments, governanceUnits, siteConfig } from "@/lib/site-data";
import { DetailContent } from "./detail-content";

type Props = { params: Promise<{ slug: string }> };

function findUnit(slug: string) {
  const governance = governanceUnits.find((u) => u.slug === slug);
  if (governance) return { kind: "governance" as const, unit: governance };
  const department = departments.find((d) => d.slug === slug);
  if (department) return { kind: "department" as const, unit: department };
  return null;
}

export function generateStaticParams() {
  return [...governanceUnits, ...departments].map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = findUnit(slug);
  if (!found) return {};
  return {
    title: found.unit.name,
    description: `${found.unit.name} at ${siteConfig.name}.`,
  };
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const found = findUnit(slug);
  if (!found) notFound();

  return <DetailContent found={found} />;
}

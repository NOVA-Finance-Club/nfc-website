import Image from "next/image";
import Link from "next/link";

import { navItems, siteConfig } from "@/lib/site-data";
import { PendingInline } from "@/components/pending-note";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/nfc-mark-navy.png"
              alt=""
              width={40}
              height={40}
              className="rounded-md"
            />
            <div className="space-y-1">
              <p className="font-heading text-base font-bold text-foreground">
                {siteConfig.name} ({siteConfig.shortName})
              </p>
              <p>Student finance club at {siteConfig.institution}.</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div id="contact" className="flex scroll-mt-24 flex-col gap-2">
          <p>
            Contact: <PendingInline>general contact email</PendingInline>
          </p>
          <p>
            Social: <PendingInline>Instagram and LinkedIn handles</PendingInline>
          </p>
          <p>
            <PendingInline>legal name / registration details, if formally constituted</PendingInline>
          </p>
        </div>

        <p className="text-xs">
          © {year} {siteConfig.name}. Mandate {siteConfig.mandate}.
        </p>
      </div>
    </footer>
  );
}

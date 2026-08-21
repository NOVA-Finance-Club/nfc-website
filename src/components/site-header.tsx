"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { departments, governanceUnits, navItems, siteConfig } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const departmentUnits = [...governanceUnits, ...departments];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/nfc-mark-navy.png"
            alt=""
            width={48}
            height={48}
            priority
          />
          <span className="font-heading text-base font-bold tracking-tight">
            {`<${siteConfig.name}>`}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/about"
            className={cn(
              "rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
              pathname === "/about" && "text-foreground font-medium"
            )}
          >
            About
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-muted-foreground hover:text-foreground",
                    pathname.startsWith("/departments") &&
                      "text-foreground font-medium"
                  )}
                >
                  Departments
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-64">
                  {departmentUnits.map((unit) => (
                    <NavigationMenuLink
                      key={unit.slug}
                      render={<Link href={`/departments/${unit.slug}`} />}
                    >
                      <Image
                        src={unit.badgeImage}
                        alt=""
                        width={24}
                        height={24}
                      />
                      {unit.name}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navItems
            .filter(
              (item) =>
                item.label !== "About" &&
                item.label !== "Departments" &&
                item.label !== "Join"
            )
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  pathname === item.href && "text-foreground font-medium"
                )}
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/join" />}
            className="font-heading text-base"
          >
            Join NFC
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="md:hidden"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
                  pathname === "/about" && "bg-accent text-foreground font-medium"
                )}
              >
                About
              </Link>

              <p className="mt-2 px-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Departments
              </p>
              {departmentUnits.map((unit) => (
                <Link
                  key={unit.slug}
                  href={`/departments/${unit.slug}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-2 py-2 pl-4 text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
                    pathname === `/departments/${unit.slug}` &&
                      "bg-accent text-foreground font-medium"
                  )}
                >
                  {unit.name}
                </Link>
              ))}

              <div className="mt-2 border-t pt-2">
                {navItems
                  .filter((item) => item.label !== "About" && item.label !== "Departments")
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
                        pathname === item.href &&
                          "bg-accent text-foreground font-medium"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

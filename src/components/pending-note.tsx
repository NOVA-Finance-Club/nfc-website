import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Visible placeholder for content the brief did not supply.
 * Deliberately styled off-palette (amber) so it reads as a work-in-progress
 * marker, never mistaken for published copy.
 */
export function PendingNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-dashed border-amber-500/60 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-400",
        className
      )}
    >
      <span className="font-semibold tracking-wide">PENDING —</span>{" "}
      {children}
    </div>
  );
}

export function PendingInline({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-dashed border-amber-500/60 bg-amber-500/10 px-1.5 py-0.5 text-amber-800 dark:text-amber-400">
      [PENDING: {children}]
    </span>
  );
}

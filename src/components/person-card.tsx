"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { memberDegrees, type Person } from "@/lib/site-data";
import { useT } from "@/lib/language";
import { cn } from "@/lib/utils";

// lucide-react dropped brand icons, so the LinkedIn glyph is inlined here.
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

// The role that leads a group gets a visibly bigger, highlighted card.
// Matching happens on these exact English strings — see PeopleGrid below —
// so translate the role for display only, never before this check runs.
export const LEAD_ROLES = ["Coordinator", "President"];

function roleKey(role: string) {
  return `role.${role.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function nameKey(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function PersonCard({
  person,
  featured = false,
  large = false,
}: {
  person: Person;
  featured?: boolean;
  /** Bigger avatar without the featured/highlighted card treatment — for
   * groups where nobody outranks anybody else, but the photo should still
   * be the focus. */
  large?: boolean;
}) {
  const t = useT();
  const degree = memberDegrees[person.name];
  const avatarSize = featured ? "size-44" : large ? "size-40" : "size-32";
  // The plain "Coordinator" role (a department's own team page) is gendered
  // per that specific coordinator's name, since the string alone doesn't
  // carry which department it's on. Every other role translates generically.
  const displayRole =
    person.role === "Coordinator"
      ? t(`role.coordinator.by-name.${nameKey(person.name)}`, person.role)
      : t(roleKey(person.role), person.role);

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-lg border p-6 text-center",
        featured && "border-brand-navy/25 bg-brand-cream/40 p-8"
      )}
    >
      <Avatar className={avatarSize}>
        <AvatarFallback
          className={cn(
            "bg-brand-navy/8 font-heading text-brand-navy",
            featured || large ? "text-4xl" : "text-3xl"
          )}
        >
          {initials(person.name)}
        </AvatarFallback>
      </Avatar>

      <div>
        <p className={cn("font-medium", featured && "text-lg")}>
          {person.name}
        </p>
        <p className="text-sm text-muted-foreground">{displayRole}</p>
      </div>

      {degree && (
        <p className="text-xs text-muted-foreground">
          {degree.level} in {degree.name}
        </p>
      )}

      <LinkedinIcon className="size-4 text-muted-foreground/40" />
    </div>
  );
}

// Renders the group's lead (Coordinator/President) as a bigger, highlighted
// card above the rest of the group's people in a regular grid. Pass
// `hierarchy={false}` for groups where every role carries equal weight (e.g.
// governance bodies) — everyone gets an equally large card, nobody featured.
export function PeopleGrid({
  people,
  hierarchy = true,
}: {
  people: Person[];
  hierarchy?: boolean;
}) {
  if (!hierarchy) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <PersonCard key={person.name} person={person} large />
        ))}
      </div>
    );
  }

  const leadIndex = people.findIndex((p) => LEAD_ROLES.includes(p.role));
  const lead = leadIndex >= 0 ? people[leadIndex] : null;
  const rest = leadIndex >= 0 ? people.filter((_, i) => i !== leadIndex) : people;

  return (
    <div className="space-y-6">
      {lead && (
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <PersonCard person={lead} featured />
          </div>
        </div>
      )}
      {rest.length > 0 && (
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
          {rest.map((person) => (
            <div
              key={person.name}
              className={
                rest.length < 4
                  ? "w-full sm:w-[calc(33.333%-1rem)]"
                  : "w-full sm:w-[calc(25%-1.125rem)]"
              }
            >
              <PersonCard person={person} large />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

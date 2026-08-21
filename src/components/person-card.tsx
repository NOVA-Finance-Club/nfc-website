import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PendingInline } from "@/components/pending-note";
import { memberDegrees, type Person } from "@/lib/site-data";
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
export const LEAD_ROLES = ["Coordinator", "President"];

export function PersonCard({
  person,
  featured = false,
}: {
  person: Person;
  featured?: boolean;
}) {
  const degree = memberDegrees[person.name];

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-lg border p-6 text-center",
        featured && "border-brand-navy/25 bg-brand-cream/40 p-8"
      )}
    >
      <Avatar className={featured ? "size-44" : "size-32"}>
        <AvatarFallback
          className={cn(
            "bg-brand-navy/8 font-heading text-brand-navy",
            featured ? "text-4xl" : "text-3xl"
          )}
        >
          {initials(person.name)}
        </AvatarFallback>
      </Avatar>

      <div>
        <p className={cn("font-medium", featured && "text-lg")}>
          {person.name}
        </p>
        <p className="text-sm text-muted-foreground">{person.role}</p>
      </div>

      {degree ? (
        <p className="text-xs text-muted-foreground">
          {degree.level} in {degree.name}
        </p>
      ) : (
        <p className="text-xs">
          <PendingInline>degree</PendingInline>
        </p>
      )}

      <LinkedinIcon className="size-4 text-muted-foreground/40" />
    </div>
  );
}

// Renders the group's lead (Coordinator/President) as a bigger, highlighted
// card above the rest of the group's people in a regular grid.
export function PeopleGrid({ people }: { people: Person[] }) {
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
        <div className="grid gap-3 sm:grid-cols-3">
          {rest.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { Activity } from "lucide-react";

const groups = [
  {
    label: "Product",
    items: ["Patient records", "Clinical workflows", "Labs", "Billing"],
  },
  {
    label: "Solutions",
    items: ["Hospitals", "Clinics", "Telehealth", "Research"],
  },
  {
    label: "Company",
    items: ["About", "Careers", "Press", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <Activity className="h-5 w-5 text-neon-cyan" strokeWidth={1.5} />
            <span className="font-mono text-sm tracking-[0.2em]">NERVEEHR</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-foreground/50">
            Modern infrastructure for modern care. Built with clinicians, for
            the hospitals running 24/7.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.label}>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40">
              {g.label}
            </p>
            <ul className="space-y-3 text-sm text-foreground/70">
              {g.items.map((i) => (
                <li key={i}>
                  <a href="#" className="transition-colors hover:text-foreground">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-widest text-foreground/40 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Nerve Systems Inc. · All rights reserved</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-lime shadow-[0_0_8px_var(--neon-lime)]" />
          Systems healthy · v1.0.1
        </span>
      </div>
    </footer>
  );
}

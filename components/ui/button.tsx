import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60";

const variants: Record<Variant, string> = {
  primary:
    "bg-neon-cyan text-black shadow-[0_0_24px_-4px_rgba(0,240,255,0.6)] hover:shadow-[0_0_32px_-2px_rgba(0,240,255,0.8)] hover:-translate-y-0.5",
  outline:
    "border border-white/15 bg-white/[0.02] text-foreground hover:border-white/30 hover:bg-white/[0.06]",
  ghost: "text-foreground/80 hover:text-foreground",
};

export function Button({ href, variant = "primary", className, children }: Props) {
  const cls = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}

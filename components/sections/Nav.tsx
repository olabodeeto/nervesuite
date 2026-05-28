"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-6">
      <div
        className={cn(
          "glass flex w-full items-center justify-between rounded-full px-4 py-2.5 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "border-white/15 bg-background/70 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]"
            : "border-white/[0.06]"
        )}
      >
        <Link href="/" className="flex items-center gap-2 px-2">
          <Activity className="h-5 w-5 text-neon-cyan" strokeWidth={1.5} />
          <span className="font-mono text-sm tracking-[0.2em] text-foreground">
            NERVEEHR
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {["Product", "Solutions", "Pricing", "Docs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href="#cta" variant="ghost" className="hidden px-4 py-2 sm:inline-flex">
            Sign in
          </Button>
          <Button href="#cta" className="px-5 py-2 text-xs">
            Request demo
          </Button>
        </div>
      </div>
    </header>
  );
}

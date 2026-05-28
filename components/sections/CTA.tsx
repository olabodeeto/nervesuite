"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-5 w-5 border-neon-cyan/60 ${className}`}
    />
  );
}

export function CTA() {
  return (
    <section id="cta" className="relative py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl px-6"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface px-8 py-20 text-center md:px-16">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute -inset-x-20 -top-20 h-64 bg-gradient-to-b from-neon-violet/30 via-neon-cyan/10 to-transparent blur-3xl" />

          <Corner className="left-4 top-4 border-l border-t" />
          <Corner className="right-4 top-4 border-r border-t" />
          <Corner className="left-4 bottom-4 border-l border-b" />
          <Corner className="right-4 bottom-4 border-r border-b" />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -inset-x-1/2 animate-sweep"
          >
            <div className="mx-auto h-full w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-12" />
          </div>

          <div className="relative">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
              {"// Get started"}
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Bring your{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta bg-clip-text text-transparent">
                hospital online
              </span>
              .
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-foreground/60">
              We&apos;re onboarding a select group of hospitals and clinics into
              our pilot program. Bring your hardest workflow — we&apos;ll show
              you NerveEHR on your real data within a week.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button>
                Request a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button variant="outline">Talk to our clinical lead</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

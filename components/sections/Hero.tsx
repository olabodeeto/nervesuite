"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/effects/GridBackground";
import { AuroraBlob } from "@/components/effects/AuroraBlob";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-28">
      <AuroraBlob />
      <GridBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={item}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
        >
          <HeartPulse className="h-3.5 w-3.5 text-neon-cyan" />
          <span className="font-mono tracking-widest text-foreground/80">
            v1.0 · HIPAA-READY · LIVE
          </span>
          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-neon-lime shadow-[0_0_8px_var(--neon-lime)]" />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          The nervous system for{" "}
          <span className="bg-gradient-to-br from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent neon-text">
            modern hospitals.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base text-foreground/65 md:text-lg"
        >
          NerveEHR is a unified electronic health record that connects patients,
          clinicians, labs, pharmacy, and billing — so every decision happens on
          one chart, with full context, in real time.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="#cta">
            Request a demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#product" variant="outline">
            See the workflow
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40"
        >
          <span>HIPAA · HITRUST</span>
          <span className="h-3 w-px bg-white/15" />
          <span>HL7 · FHIR R4</span>
          <span className="h-3 w-px bg-white/15" />
          <span>99.99% uptime</span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#product"
        aria-label="Scroll to product"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 transition-colors hover:text-foreground/70"
      >
        <span>Scroll</span>
        <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-white/15">
          <span className="mt-1.5 h-1.5 w-px bg-foreground/60 animate-scroll-dot" />
        </span>
      </motion.a>
    </section>
  );
}

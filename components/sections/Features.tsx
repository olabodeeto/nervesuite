"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  BellRing,
  ShieldCheck,
  Boxes,
  Network,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Accent = "cyan" | "magenta" | "lime" | "violet";

const accentStyles: Record<
  Accent,
  { icon: string; ring: string; glow: string }
> = {
  cyan: {
    icon: "text-neon-cyan",
    ring: "group-hover:border-neon-cyan/40",
    glow: "group-hover:shadow-[0_0_24px_-6px_var(--neon-cyan)]",
  },
  magenta: {
    icon: "text-neon-magenta",
    ring: "group-hover:border-neon-magenta/40",
    glow: "group-hover:shadow-[0_0_24px_-6px_var(--neon-magenta)]",
  },
  lime: {
    icon: "text-neon-lime",
    ring: "group-hover:border-neon-lime/40",
    glow: "group-hover:shadow-[0_0_24px_-6px_var(--neon-lime)]",
  },
  violet: {
    icon: "text-neon-violet",
    ring: "group-hover:border-neon-violet/40",
    glow: "group-hover:shadow-[0_0_24px_-6px_var(--neon-violet)]",
  },
};

const features: {
  icon: typeof HeartPulse;
  title: string;
  body: string;
  accent: Accent;
}[] = [
  {
    icon: HeartPulse,
    title: "Unified patient records",
    body: "One chart per patient across every department — from admission to discharge — with a complete longitudinal history.",
    accent: "cyan",
  },
  {
    icon: Stethoscope,
    title: "Smart clinical workflows",
    body: "Templates, order sets, and AI-assisted notes that adapt to each specialty so clinicians spend more time with patients.",
    accent: "magenta",
  },
  {
    icon: BellRing,
    title: "Real-time vitals & alerts",
    body: "Streaming bedside telemetry with configurable thresholds, escalation paths, and on-call routing built in.",
    accent: "lime",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-compliant by default",
    body: "End-to-end encryption, immutable audit trails, and role-based access. Compliance is the baseline, not the upsell.",
    accent: "violet",
  },
  {
    icon: Boxes,
    title: "Modular by department",
    body: "Bring up ED, ICU, OR, pharmacy, billing, and labs independently — or run the entire hospital on one runtime.",
    accent: "cyan",
  },
  {
    icon: Network,
    title: "Interoperable",
    body: "Native HL7, FHIR R4, and DICOM. Talk to every legacy system, lab, and imaging suite your hospital already runs.",
    accent: "magenta",
  },
];

export function Features() {
  return (
    <section id="product" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan/80">
            {"// The Platform"}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Built for every corner of the hospital.
          </h2>
          <p className="mt-5 text-foreground/60">
            Six modules. One coherent platform. One patient chart. Designed with
            clinicians and engineered for the teams who keep the hospital
            running 24/7.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const a = accentStyles[f.accent];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden bg-background p-8 transition-colors hover:bg-surface"
              >
                <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/25 transition-colors group-hover:text-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={cn(
                    "mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5",
                    a.ring,
                    a.glow,
                  )}
                >
                  <f.icon
                    className={cn(
                      "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                      a.icon,
                    )}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-2 text-lg font-medium">{f.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/55">
                  {f.body}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Building2 } from "lucide-react";

const codeLines = [
  { tone: "muted", text: "$ nerveehr admit --patient='J. Okafor' --bed=204" },
  { tone: "cyan", text: "→ pulling 12mo history ........... ok" },
  { tone: "cyan", text: "→ syncing labs from LabCorp ...... ok" },
  { tone: "magenta", text: "→ notifying care team (4) ........ ok" },
  { tone: "lime", text: "✓ ready for rounds in 1.2s" },
  { tone: "muted", text: "  https://nerveehr.app/p/J-Okafor" },
];

const toneClass: Record<string, string> = {
  muted: "text-foreground/45",
  cyan: "text-neon-cyan",
  magenta: "text-neon-magenta",
  lime: "text-neon-lime",
};

const lineVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export function Showcase() {
  return (
    <section id="solutions" className="relative py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta/80">
            {"// The Command Surface"}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            One workspace for every clinical decision.
          </h2>
          <p className="mt-5 max-w-md text-foreground/60">
            Clinicians, admins, and billers work from a single patient-centered
            workspace. No more chart-hunting across five systems — context
            follows the patient, not the tab.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { k: "Charting time saved", v: "62%", icon: Clock },
              { k: "Med errors prevented", v: "1.4k/mo", icon: ShieldCheck },
              { k: "Departments connected", v: "18+", icon: Building2 },
            ].map((s) => (
              <div key={s.k}>
                <s.icon className="mb-3 h-4 w-4 text-foreground/40" strokeWidth={1.5} />
                <dt className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                  {s.k}
                </dt>
                <dd className="mt-1 text-2xl font-medium text-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-neon-cyan/40 via-neon-violet/30 to-neon-magenta/40 opacity-60 blur-xl" />
          <div className="relative glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-neon-magenta/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-cyan/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-lime/70" />
              <span className="ml-3 font-mono text-[11px] tracking-widest text-foreground/40">
                ~/nerveehr — bed-204
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-neon-lime/30 bg-neon-lime/[0.06] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-neon-lime/90">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-lime shadow-[0_0_8px_var(--neon-lime)] animate-pulse-glow" />
                Live
              </span>
            </div>
            <motion.pre
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              transition={{ staggerChildren: 0.18, delayChildren: 0.25 }}
              className="overflow-x-auto p-6 font-mono text-sm leading-relaxed"
            >
              {codeLines.map((l, i) => (
                <motion.div
                  key={i}
                  variants={lineVariants}
                  className={toneClass[l.tone]}
                >
                  {l.text}
                </motion.div>
              ))}
              <motion.div
                variants={lineVariants}
                className="mt-3 inline-flex items-center text-foreground/60"
              >
                <span className="text-neon-cyan">$</span>
                <span className="ml-2 inline-block h-4 w-2 animate-pulse-glow bg-foreground/80" />
              </motion.div>
            </motion.pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AuroraBlob() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neon-violet/40 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-40 -left-32 h-[420px] w-[420px] rounded-full bg-neon-cyan/30 blur-[120px] animate-pulse-glow [animation-delay:-2s]" />
      <div className="absolute top-20 -right-24 h-[460px] w-[460px] rounded-full bg-neon-magenta/25 blur-[120px] animate-pulse-glow [animation-delay:-4s]" />
    </div>
  );
}

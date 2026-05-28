# Project: Futuristic Landing Page

A Next.js landing page with a futuristic aesthetic.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** next/font (geometric / mono pairings — e.g. Space Grotesk + JetBrains Mono)

## Design Direction

Futuristic, high-tech, minimal-but-bold. Reference moods:

- Dark base (near-black `#0a0a0f`) with neon accents (cyan `#00f0ff`, magenta `#ff00ea`, electric violet)
- Glassmorphism panels (`backdrop-blur`, subtle borders, low-opacity fills)
- Gradient meshes / radial glows in the background
- Grid overlays, scanlines, or subtle noise textures
- Glowing borders, hover-lift on cards
- Monospace for labels/metadata, geometric sans for headings
- Smooth scroll-driven animations and micro-interactions
- Aurora / shader-like blob backgrounds (consider react-three-fiber only if needed)

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, global providers
  page.tsx            # Landing page composition
  globals.css         # Tailwind directives + CSS vars (colors, glow shadows)
components/
  sections/           # Hero, Features, Showcase, CTA, Footer
  ui/                 # Reusable primitives (Button, Card, GlowBorder)
  effects/            # GridBackground, AuroraBlob, Noise, Cursor
lib/
  utils.ts            # cn() helper, etc.
public/
```

## Conventions

- Use the App Router. Server Components by default; mark `"use client"` only when needed (animations, interactivity).
- Compose Tailwind classes with a `cn()` helper (clsx + tailwind-merge).
- Keep section components self-contained — one file per section.
- Define design tokens (colors, glows, blurs) as CSS variables in `globals.css` and reference them in `tailwind.config.ts`.
- Prefer CSS animations / Framer Motion variants over ad-hoc JS animations.
- Optimize: `next/image` for all images, `next/font` for fonts, lazy-load heavy effects.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint
```

## Accessibility & Performance

- Maintain contrast ratios even on dark backgrounds (test neon text on dark).
- Respect `prefers-reduced-motion` — gate non-essential animations.
- Target Lighthouse 90+ across the board; keep the hero LCP under 2.5s.
- Defer or conditionally load WebGL / heavy canvas effects.

## Out of Scope (for now)

- Backend / API routes
- CMS integration
- Auth

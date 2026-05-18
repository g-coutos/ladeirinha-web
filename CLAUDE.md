# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server on localhost:3000
npm run build     # Production build
npm run check     # Lint with Biome
npm run check:fix # Lint and auto-fix with Biome
npm run format    # Format with Biome
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** via `@tailwindcss/postcss` — configured through `globals.css` with `@import "tailwindcss"` (no `tailwind.config.js`)
- **Biome** for linting and formatting (no ESLint/Prettier)
- Fonts: Inter (sans) and Instrument Serif (serif) via `next/font/google`, exposed as CSS variables `--font-inter` / `--font-instrument-serif`

## Architecture

This is a single-page marketing/landing site for Ladeirinha (a Strava integration that tracks annual elevation gain).

```
src/app/
  layout.tsx                        # Root layout: loads fonts, wraps with Header + Footer
  page.tsx                          # Home page (only real page)
  globals.css                       # Tailwind imports + theme tokens + global styles
  components/
    header/index.tsx                # Nav with anchor links
    footer/index.tsx                # Links + copyright
    cta/index.tsx                   # Reusable CTA anchor button
  politica-de-privacidade/page.tsx  # Privacy policy page
public/assets/
  images/                           # PNG/JPG assets referenced in page.tsx
  elements/                         # SVG decorative elements (wave.svg)
```

## Conventions

- Brand color: `#FC4C02` (Strava orange) — used for CTAs, accents, and `<b>` tags globally
- Components use named exports, co-located in `src/app/components/<name>/index.tsx`
- `next/image` is preferred for images; plain `<img>` is used only when responsive sizing requires it (suppress Biome warning with `biome-ignore lint/performance/noImgElement: need mobile first approach`)
- `dangerouslySetInnerHTML` is used in HOW_IT_WORKS cards to render inline `<b>` HTML — suppress with `biome-ignore lint/security/noDangerouslySetInnerHtml`
- Max content width: `max-w-5xl` centered with `mx-auto`

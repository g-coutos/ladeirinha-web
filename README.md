# Ladeirinha

Marketing website for Ladeirinha — a Strava integration that automatically adds your annual elevation gain to every activity description.

## The Problem

Strava doesn't surface cumulative yearly elevation in a visible, always-on way. Athletes with annual elevation goals have to manually check stats or build spreadsheets to track progress. Ladeirinha solves this by writing running and cycling elevation totals directly into the activity description after every workout — no extra apps, no manual tracking.

## Key Features

- Automatic annual elevation update on every Strava activity
- Running and cycling tracked separately, each with its own yearly total
- Elevation appears in the activity description, where athletes already look
- Fully free — no ads, no fees
- Waitlist signup via email (Resend)
- PostHog analytics

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 + Tailwind CSS v4 |
| Fonts | Inter + Instrument Serif (via `next/font/google`) |
| Email / Contacts | Resend |
| Analytics | PostHog |
| Linter / Formatter | Biome |

## Getting Started

### Prerequisites

- Node.js 20+
- A [Resend](https://resend.com) account with an audience created
- A [PostHog](https://posthog.com) project

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file at the project root:

```env
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=...
NEXT_PUBLIC_POSTHOG_KEY=phc_...
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

### Run

```bash
npm run dev      # development server on localhost:3000
npm run build    # production build
npm run check    # lint with Biome
```

## Project Structure

```
src/app/
  layout.tsx                          # Root layout: fonts, PostHog provider, Footer
  page.tsx                            # Landing page (Hero, How It Works, Why Use, Pricing, Waitlist)
  actions.ts                          # Server action: waitlist signup via Resend
  globals.css                         # Tailwind imports + theme tokens
  components/
    header/index.tsx                  # Navigation with anchor links
    footer/index.tsx                  # Links and copyright
    cta/index.tsx                     # Reusable CTA button (anchor)
    waitlist-form/index.tsx           # Email capture form with server action
    posthog-provider/index.tsx        # PostHog client provider
  politica-de-privacidade/page.tsx    # Privacy policy page
public/assets/
  images/                             # PNG/JPG assets
  elements/                           # SVG decorative elements
  gifs/                               # Animated assets
```

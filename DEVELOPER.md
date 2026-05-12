# Developer notes

Handoff document for developers joining or taking over the project.

## Local setup

```bash
# requires Node.js 18+
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build locally
```

## Design tokens

All colors, gradients, shadows, and radii are defined as CSS custom properties in `app/globals.css`. Change them there — everything else picks them up automatically.

Key variables:

```css
--grad-logo        /* brand logo gradient */
--grad-primary     /* primary button / accent gradient */
--grad-icon        /* icon backgrounds */
--color-primary    /* #ff6700 orange */
--color-secondary  /* #ff300b red */
--font-primary     /* Inter (set on body, inherited everywhere) */
--font-secondary   /* Lora (used for headings) */
```

## Components

| File | Section | Notes |
|------|---------|-------|
| `Nav.tsx` | Navigation bar | Sticky, blurred background |
| `Hero.tsx` | Hero + phone mockup | Phone preview is pure CSS, no images |
| `HowItWorks.tsx` | "4 steps" cards | Data array at the top of the file |
| `StoryExample.tsx` | Video + prompt card | `'use client'` — autoplay via IntersectionObserver |
| `CTA.tsx` | Request access form | `'use client'` — see form section below |
| `Footer.tsx` | Footer | |

## Request access form — temporary solution

`components/CTA.tsx` uses **[Formspree](https://formspree.io)** to send form submissions to the team's email. This is a **temporary setup** for the demo phase.

**When to replace it:**
- When the app has its own backend / auth system
- When a proper waitlist or CRM tool is set up (e.g. Mailchimp, HubSpot, Loops)

**Current endpoint** (line 7 in `CTA.tsx`):
```ts
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvyyznj';
```

To change the endpoint or switch to a different service — replace the `handleSubmit` function in `CTA.tsx`. The form fields are `name` and `email`.

**Formspree account:** whoever owns the temporary account on formspree.io has access to submissions.

## Video

`public/joe-unicorn.mp4` is the example story video shown in the "A real example" section. To replace it — swap the file and update the `src` in `components/StoryExample.tsx`.

## Fonts

Fonts are loaded via `next/font/google` in `app/layout.tsx` — no external `<link>` tags needed. The font CSS variables (`--font-inter`, `--font-lora`) are injected on `<body>` and aliased as `--font-primary` / `--font-secondary` in `globals.css`.

## Deployment

Hosted on Vercel (Hobby plan). Connected to the `main` branch — merging to `main` triggers automatic deployment. No environment variables are currently required.

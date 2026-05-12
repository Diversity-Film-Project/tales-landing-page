# Tales — Landing Page

Marketing landing page for the **Tales** app — an AI-powered tool that generates personalized story videos for children.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- TypeScript
- CSS Modules
- Fonts via `next/font/google` (Inter + Lora)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

The project is deployed on **Vercel** from the `main` branch of `Diversity-Film-Project/tales-landing-page`.

Live URL: _add after deployment_

Every push to `main` triggers an automatic redeploy.

## Project structure

```
app/
  layout.tsx       # Root layout, fonts, metadata
  page.tsx         # Page composition
  globals.css      # Design tokens (CSS variables), base reset

components/
  Nav.tsx          # Sticky navigation bar
  Hero.tsx         # Hero section with phone mockup
  HowItWorks.tsx   # "4 steps" section
  StoryExample.tsx # Video + AI prompt card
  CTA.tsx          # Request demo access form
  Footer.tsx       # Footer

public/
  joe-unicorn.mp4  # Example story video shown on the page
```

## Links

- App (demo): https://sagolik-app.vercel.app/

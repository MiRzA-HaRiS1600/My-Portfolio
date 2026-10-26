# Mirza Haris Amin — Portfolio

A responsive portfolio for Mirza Haris Amin, a BS Computer Science student. It
uses a light Urban Chic visual direction with ivory, blush, slate, and midnight
tones, and includes a home page, services, concept projects, FAQs, and contact
details.

## Stack

This project uses the modular T3 foundations that fit a content-focused
portfolio:

- Next.js App Router and React
- TypeScript
- Tailwind CSS
- Zod and `@t3-oss/env-nextjs` for validated environment configuration

The T3 stack is modular. tRPC, a database, and authentication are not included
because the current site has no server-side data or account features. The
contact form opens a pre-filled email in the visitor's email app; it does not
send messages through a backend.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To validate the app before
deployment:

```bash
npm run typecheck
npm run build
```

## Pages

- `/` — Home, learning interests, concept projects, FAQs, and contact
- `/services` — Areas of interest and individual service detail pages
- `/portfolio` — Sample concepts and individual project detail pages
- `/faq` — Frequently asked questions
- `/contact` — Contact details and email-draft form

## Personalize

- Update the service descriptions and learning topics in `src/data/services.ts`.
- Replace the clearly labeled sample concepts in `src/data/projects.ts` with
  completed work and real links when available.
- Change the displayed contact address in `src/components/portfolio-page.tsx`
  and `src/components/interactive.tsx`.
- Adjust shared navigation and footer links in `src/components/interactive.tsx`
  and `src/components/site-frame.tsx`.
- Refine Tailwind utility classes in `src/components/tailwind-styles.ts` and
  Urban Chic color tokens in `tailwind.config.ts`.

The interface is styled with Tailwind utilities. `src/app/project-art.css` is
limited to the decorative miniature project-preview illustrations, while
`src/app/globals.css` provides Tailwind layers and browser-level defaults.

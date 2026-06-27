# Taranjeet Singh — Portfolio

A Next.js 15 portfolio built from your resume, targeting React.js / Next.js front-end roles.

**Stack:** Next.js 15 (App Router) · JavaScript · Tailwind CSS · shadcn/ui-style components · Lucide icons · Framer Motion · EmailJS · Next.js Metadata API · Dark/Light mode

## Design notes

The whole site leans on one idea: it's built by the same person it's about. Section labels read as JSX opening tags (`<Experience>`, `<Projects>`), and the hero's signature element is a syntax-highlighted code card that "renders" your profile as a component. The stat strip (20% / 25% / 30%) is pulled directly from your resume's measured impact, not decoration.

Palette is a warm charcoal-navy dark mode with amber + violet accents (and a matching warm-paper light mode) — deliberately not the cream-serif or black-and-acid-green look every other AI portfolio reaches for. Type: Space Grotesk (display), Inter (body), JetBrains Mono (code/labels/stats).

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Wire up the contact form (EmailJS)

The form works out of the box even without setup — it falls back to opening the visitor's email client with the message pre-filled. To get real in-app sending:

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an **Email Service** (e.g. Gmail) and an **Email Template** with variables `from_name`, `from_email`, `message`, `to_email`.
3. Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

4. Restart the dev server.

> Prefer Formspree instead? Swap the `handleSubmit` logic in `components/sections/contact.jsx` for a `fetch('https://formspree.io/f/your-id', { method: 'POST', body: formData })` call — the rest of the form/UI stays the same.

## 3. Add a real resume PDF (optional)

Drop a `resume.pdf` into `/public` and link it from the navbar/hero if you'd like a "Download Resume" button — currently the CTAs route to email/sections to avoid linking a file that doesn't exist yet.

## 4. Deploy to Vercel

```bash
npx vercel
```

or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Set the same environment variables from `.env.example` in the Vercel project settings (**Settings → Environment Variables**), including `NEXT_PUBLIC_SITE_URL` set to your real production domain (used by the Metadata API, sitemap, and robots.txt).

## Project structure

```
app/
  layout.js        — fonts, SEO metadata, theme provider
  page.js           — assembles all sections
  globals.css       — design tokens (light/dark HSL vars)
  sitemap.js        — Metadata API sitemap
  robots.js         — Metadata API robots.txt
components/
  layout/           — navbar, footer, theme toggle/provider
  sections/         — hero, stats, about, experience, projects, skills, contact
  shared/           — section-heading (JSX-tag eyebrow), code-card (hero signature)
  ui/                — shadcn-style primitives (button, card, badge, input, …)
lib/
  data.js            — all resume content in one place — edit this to update copy
  utils.js           — cn() class-merge helper
```

## Updating content

Everything text-based — name, summary, stats, experience bullets, projects, skills, education, contact details — lives in `lib/data.js`. Edit that one file to keep the whole site in sync.

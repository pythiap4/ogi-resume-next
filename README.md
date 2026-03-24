# Ognen Slavkovski — Resume Website

Modern resume website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — optimized for Vercel deployment.

## Features

- ⚡ **Next.js 15** with App Router and static generation
- 🎨 **Tailwind CSS v4** for utility-first styling
- ✨ **Framer Motion** scroll-driven animations and parallax effects
- 🌗 **Dark/Light mode** with system preference detection and persistence
- 📱 **Responsive** mobile-first design
- 🔍 **SEO optimized** with Next.js Metadata API
- 🚀 **Vercel-ready** — zero-config deployment

## Getting Started

```bash
git clone https://github.com/pythiap4/ogi-resume-next.git
cd ogi-resume-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

The easiest way to deploy is to connect this GitHub repository to [Vercel](https://vercel.com):

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `pythiap4/ogi-resume-next` repository
3. Click **Deploy**

No configuration needed — Vercel detects Next.js automatically.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with App Router |
| TypeScript | Type safety throughout |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Scroll animations & transitions |
| Vercel | Hosting & deployment |

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind imports + CSS custom properties
│   ├── layout.tsx        # Root layout with fonts, metadata, theme provider
│   └── page.tsx          # Home page composing all sections
├── components/
│   ├── ThemeProvider.tsx  # Dark/light mode context
│   ├── Navbar.tsx        # Fixed navigation with mobile menu
│   ├── Hero.tsx          # Hero section with parallax background
│   ├── About.tsx         # About/profile section
│   ├── Skills.tsx        # Skills cards with staggered tag animations
│   ├── Experience.tsx    # Experience timeline (NAB featured)
│   ├── Highlights.tsx    # Project highlight cards
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Footer
│   └── SectionHeader.tsx # Reusable section header
└── lib/
    └── motion.ts         # Shared Framer Motion variants
```

## License

MIT

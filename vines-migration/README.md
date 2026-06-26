# Vines Website — Source Code

This is the complete, editable source code for the Vines website. It is a
standard **React + Vite** project with **Tailwind CSS**. Any web developer can
run, edit, and deploy it. There are no external account dependencies.

## Requirements

- [Node.js](https://nodejs.org/) version 18 or newer (includes `npm`)

## Getting Started

```bash
# 1. Install dependencies (run once)
npm install

# 2. Start the local dev server (live preview while editing)
npm run dev
```

The dev server prints a local URL (usually http://localhost:5173). Open it in a
browser. Edits to files in `src/` update live.

## Editing the Site

All site content and components live in `src/`:

- `src/pages/`      — each page of the site
- `src/components/` — reusable pieces (header, footer, sections, etc.)
- `src/index.css`   — global styles
- `public/images/`  — all images used on the site

## Building for Production

```bash
npm run build
```

This generates a `dist/` folder containing the final static site (HTML, CSS,
JS, images). The contents of `dist/` are what gets hosted.

## Deploying

The site is a static build, so it can be hosted anywhere that serves static
files — Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any web host.

**Netlify (drag & drop):** run `npm run build`, then drag the `dist/` folder
onto the Netlify dashboard.

> Note: `public/_redirects` (`/* /index.html 200`) is included so that page
> routing works correctly on Netlify. Keep this file when deploying.

## Project Structure

```
.
├── public/           static assets copied as-is (images, _redirects)
├── src/              all editable source code
│   ├── components/   reusable UI components
│   ├── pages/        individual site pages
│   ├── lib/          utilities
│   ├── App.jsx       app routing
│   └── main.jsx      app entry point
├── index.html        HTML entry point
├── package.json      dependencies and scripts
├── vite.config.js    build configuration
└── tailwind.config.js  Tailwind CSS configuration
```

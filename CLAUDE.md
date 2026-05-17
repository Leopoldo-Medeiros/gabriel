# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server on port 5174 (see `vite.config.ts`; moved from 3000 because a local DDEV/Docker stack occupies that port)
- `npm run build` — `tsc` typecheck then `vite build` to `dist/`
- `npm run lint` — ESLint over `.ts`/`.tsx`, fails on any warning (`--max-warnings 0`)
- `npm run preview` — preview built bundle
- No test runner is configured; `npm test` is a placeholder that exits 1.

## Architecture

Single-page marketing site in Brazilian Portuguese (pt-BR) for fonoaudiólogo Gabriel Lechenakoski. Vite + React 18 + TypeScript + Tailwind, deployed on Netlify (see `netlify.toml`; SPA fallback rewrites all paths to `index.html`).

**Routing.** `App.tsx` wraps everything in `BrowserRouter` with three routes: `/` (renders `Hero` + `About` + `Testimonials`), `/termos-de-uso`, `/politica-privacidade`. `Header` and `Footer` render on every route. Header navigation uses hash anchors (`#home`, `#especialidades`, etc.) that only resolve when the home route is active — if you add nav links on legal pages, they will not scroll.

**Content lives in `constants.tsx`, not in components.** `WHATSAPP_LINK`, `CONTACT_INFO`, `TESTIMONIALS`, and `SPECIALTIES` are the single source of truth for phone numbers, addresses, and copy. Edit there rather than hardcoding in components.

**Files are flat at the repo root** (no `src/`): `App.tsx`, `index.tsx`, `constants.tsx`, `index.css` sit alongside `components/`. Tailwind's `content` glob in `tailwind.config.js` only scans `./*.tsx`, `./components/*.tsx`, and `./constants.tsx` — if you add a nested component directory, extend the glob or its classes won't be generated.

**Styling.** Tailwind with a custom palette (`primary`, `accent`, `dark`, `muted`, etc.) and Poppins font loaded via Google Fonts in `index.css`. Reusable component classes (`.btn-primary`, `.btn-outline`, `.section-title`, `.section-subtitle`, `.container`) are defined in `index.css` under `@layer components` — prefer these over re-implementing the same Tailwind chains.

**Images.** Static assets are served from `public/images/` and referenced as absolute paths like `/images/Gabriel.jpeg`. The top-level `images/` directory is legacy and not served — a recent commit (`683b0d4`) moved assets into `public/` and set `publicDir: 'public'` in `vite.config.ts`. Add new images under `public/images/`.

## TypeScript gotchas

- `tsconfig.json` has `allowImportingTsExtensions: true`, so some imports include `.tsx` (`./App.tsx`, `'../constants.tsx'`) and some don't (`'../constants'`). Both work; match the surrounding file's style.
- `strict`, `noUnusedLocals`, and `noUnusedParameters` are all on. `npm run build` will fail on unused imports.
- Components are typed as `React.FC` but most files only `import { useState, useEffect } from 'react'`. The `React` namespace resolves through `@types/react`; do not add an unused `import React from 'react'`.
- `@types/react` is v19 while runtime `react` is v18 — mismatched but currently working. Be cautious adding APIs that only exist in one version.

## Third-party UI

- `lucide-react` for icons (imported per-symbol, e.g. `import { Menu, X } from 'lucide-react'`).
- `swiper` for carousels. Custom pagination/arrow styles live in `index.css` under "Swiper Custom Styles" and reference the palette colors directly (`#1C2331`).

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

**Routing & i18n.** The site is trilingual (pt-BR default, es, en) via **language-prefixed URLs**: `/` (PT), `/es`, `/en`, and the same for legal pages (`/es/termos-de-uso`, etc.). `App.tsx` wraps everything in `BrowserRouter` (react-router-dom v7); PT routes are unprefixed at the top level and the `es`/`en` variants live under a `/:lang` layout route guarded by `LangGuard` (unknown languages → `<Navigate to="/">`). `Header`, `Footer`, and `WhatsAppFloat` (a fixed floating CTA) render outside `<Routes>`, so they appear on every route. Header navigation uses hash anchors (`#home`, `#especialidades`, etc.) that only resolve when a home route is active.

The current language is **derived from the URL**, not stored in component state. `i18n/LanguageContext.tsx` provides `LanguageProvider` (wraps the app inside `<Router>`) and the hooks you consume in components: `useTranslation()` returns the active language's `Dict`, and `useLang()` additionally returns `{ lang, localePath, switchLang, whatsappLink }`. Use `localePath('termos-de-uso')` to build language-correct `<Link>` targets (it prefixes `/es`/`/en` automatically; PT stays unprefixed). `switchLang(code)` navigates to the same page in another language and persists the choice to `localStorage` (`preferred-lang`); a returning visitor hitting `/` is soft-redirected to their stored language (first-time visitors and bots keep PT). `LanguageSwitcher` (compact in the `Header`, pill variant in the `Hero`) is the UI for it.

**Content lives in `i18n/translations.ts`, not in components.** This is the single source of truth for all visitor-facing copy across all three languages — UI strings, hero/about text, the testimonials array, specialty titles/descriptions, footer, page `<title>`/meta, and the full legal-page content (modeled as structured `LegalDoc`/`LegalSection` data, rendered generically by `components/LegalPage.tsx`). The `Dict` interface enforces that pt/es/en stay in sync — a missing key fails `tsc`. `constants.tsx` now holds only **non-translatable** facts: `WHATSAPP_NUMBER`/`WHATSAPP_LINK`, `CONTACT_INFO` (phone, address, email), and `SPECIALTIES` (image + a `key` that indexes into `t.specialties`). When adding copy, add it to all three language objects in `translations.ts`.

**SEO / page metadata.** Two layers: (1) `index.html` holds the static baseline — JSON-LD `MedicalBusiness`/`LocalBusiness` structured data (incl. `knowsLanguage`), Open Graph / Twitter tags, canonical, geo tags, and static `hreflang` alternates — all hardcoded for the PT home page; (2) `hooks/usePageMeta.ts` is a `useEffect` hook that *imperatively* mutates `document.title`, `<html lang>`, `meta[name=description]`, the `og:`/`twitter:` tags, the canonical `<link>`, and the per-language `hreflang` alternates at runtime. There is no react-helmet. Route components call `usePageMeta({ title, description, path })` where `path` is the language-agnostic base (`''`, `'termos-de-uso'`, `'politica-privacidade'`); it reads the active `lang` from context and builds the canonical/alternates for `https://lechenakoski.com.br`. Pass translated `title`/`description` from `t.meta.*`. If you add a route, give it a `usePageMeta` call or it inherits the home page's metadata.

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

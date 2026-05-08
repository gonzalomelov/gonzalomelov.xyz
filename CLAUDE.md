# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

Personal landing page for `gonzalomelov.eth` — a fork of [LittleLink](https://github.com/sethcottle/littlelink) (a self-hosted LinkTree alternative). Deployed to Vercel as plain static files. The page at `index.html` is the only end-user surface; everything else is supporting assets or the CV pipeline.

## Architecture

- **Static site, no build step.** `index.html` is the entry point. It pulls in `css/normalize.css`, `css/skeleton-auto.css` (theme-aware shell), and `css/brands.css` (LittleLink button styles). There is no bundler, package manager, or framework at the top level — edits are made directly to HTML/CSS and served as-is by Vercel.
- **Theming.** `skeleton-auto.css` switches between light/dark via the user's system setting. `skeleton-light.css` and `skeleton-dark.css` are alternative entry points if you want to force a theme; swap the `<link>` in `index.html`.
- **Buttons.** Each link in `index.html` uses a `button button-<brand>` class defined in `css/brands.css`. Adding a new link = pick or add a `.button-<brand>` rule and drop in an SVG under `images/icons/`.
- **Routing/redirects.** `vercel.json` defines redirects (e.g. `/videos` → Loom folder). Add new redirects there, not in HTML.
- **Privacy page.** `privacy.html` is standalone and currently unlinked from `index.html` (footer commented out).

## CV subproject (`cv/`)

Self-contained Node project that converts the Markdown CV into the PDF served from the homepage's "Hire" button (`cv/Gonzalo Melo - CV.pdf`).

- Source of truth: `cv/Gonzalo Melo - CV.md`. The PDF is a build artifact but **is committed** because it's served directly by Vercel.
- Watch + auto-convert: `cd cv && npm run watch` — uses `chokidar` + `md-to-pdf` (`watch-and-convert.js`) to regenerate the PDF on save.
- One-shot conversion: `cd cv && npx md-to-pdf "Gonzalo Melo - CV.md"`.
- After editing the CV markdown, **commit both the `.md` and the regenerated `.pdf`** so the homepage download stays in sync.
- Other markdown files in `cv/` are reference/working documents, not part of the deployed site.

## Local development

No tooling required for the main site — open `index.html` directly in a browser, or serve the repo root with any static server (e.g. `python3 -m http.server`) to test relative paths and fonts.

For the CV pipeline: `cd cv && npm install` once, then `npm run watch`.

## Deployment

Vercel auto-deploys from the repo (see `.vercel/`). No build command — Vercel serves files as-is plus applies `vercel.json` redirects.

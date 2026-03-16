# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Stack

- **React 18** + **Vite 7** + **Tailwind CSS v4**
- Tailwind is loaded via the `@tailwindcss/vite` plugin (no `tailwind.config.js` needed); CSS entry is `src/index.css` with a single `@import "tailwindcss"`.
- JSX only (no TypeScript). ESLint is configured for `.js`/`.jsx` with `react-hooks` and `react-refresh` plugins.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow ([.github/workflows/deploy-gh-pages.yml](.github/workflows/deploy-gh-pages.yml)), which builds and deploys to the `gh-pages` branch. The site is served at `butters.idv.tw` (CNAME configured).

## Design files

`design/` contains `.pen` files (Pencil MCP format) used for visual design references — use the `pencil` MCP tools to read/edit them, not standard file tools.

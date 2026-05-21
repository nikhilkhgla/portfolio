# Nikhil Khandelwal — Portfolio

A fast, futuristic personal portfolio with a cosmic 3D theme, animated per-project
workflows, and dedicated Services & Contact pages.

**Live:** https://portfolio-ten-dusky-q7b2420uo4.vercel.app/

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS
- Three.js (cosmic WebGL background)
- React Router
- Deployed on Vercel

## Develop locally

```bash
npm install
npm run dev
```

The dev server prints a local URL (e.g. http://localhost:5173).

## Build

```bash
npm run build      # outputs to dist/
```

## Project structure

- `src/react-app/pages` — Home, Services, Contact, ProjectDetail
- `src/react-app/components` — UI + cosmic background + workflow animations
- `src/react-app/data/projects.ts` — project content & per-project workflows

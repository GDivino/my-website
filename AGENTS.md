# AGENTS.md

## Build & Dev Commands

- `npm run dev` — start Vite dev server
- `npm run build` — build for production (Vite only, no lint/test/typecheck)
- `npm run preview` — preview production build locally

## Notable Build Steps

`build.sh` (called by Netlify) runs `npm run build`, then manually moves face 3D assets into `dist/assets/`:
- `src/components/landing/face/scene.json` → `dist/assets/scene.json`
- `src/components/landing/face/runtime.js` → `dist/assets/runtime.js`
- `src/components/landing/face/raleway_regular.json` → `dist/assets/raleway_regular.json`
- `prod_files/index.html` → `dist/assets/index.html`

Netlify also has redirect rules mapping `/src/components/landing/face/scene.json` → `/assets/scene.json` and similar for `raleway_regular.json`. If you modify or move these files, update both `build.sh` and `netlify.toml`.

## Architecture

- Single-page React 17 app, entry point `src/main.jsx`
- Main component `src/components/App.jsx`
- Styling via SCSS in `src/styles/`
- 3D face asset loader in `src/components/landing/face/`

## Toolchain

Vite with `@vitejs/plugin-react`. No lint, test, or typecheck scripts configured.
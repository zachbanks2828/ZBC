# ZBC Website

This repository contains the Zion Baptist Church website. It is built with React and Vite.

## Quick Start

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Build for production: `npm run build`
- Preview the production build: `npm run preview`

## Tech Stack

- React 19
- Vite 7
- ESLint 9

## Project Status

Initial commit with a minimal placeholder UI. Replace the placeholder content in `src/App.jsx` as you develop the site.


## Deployment on Vercel

This project is a single-page application (SPA) built with Vite and React and lives in the subfolder "ZBC website".

Vercel is configured via the root vercel.json to:
- Build the app in the subfolder: buildCommand: npm run build --prefix "ZBC website"
- Serve the production output from: outputDirectory: ZBC website/dist
- Rewrite all routes to /index.html so client-side routes don’t 404 on refresh or deep links.

If you move or rename the app folder, update vercel.json accordingly (buildCommand and outputDirectory). If deploying under a subpath/domain, configure Vite’s base in vite.config.js as needed.

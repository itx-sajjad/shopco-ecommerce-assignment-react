# SHOP.CO — Fashion E-commerce Frontend

A responsive React e-commerce frontend for a clothing brand, built with Vite,
React Router, and Tailwind CSS. Matches the "SHOP.CO" e-commerce Figma
community template layout.

## Pages

- **Home** — hero with stats, brand strip, New Arrivals, Top Selling, Browse by
  Dress Style, customer testimonials
- **Shop** — full catalog with category filter and sort
- **Product detail** — image gallery, size selector, quantity, add to cart / buy now
- **Cart** — quantity editing, remove items, discount + delivery fee summary
- **Checkout** — contact / shipping / payment form with full validation and an
  order confirmation screen

## Tech stack

React 19 + Vite · React Router v7 · Tailwind CSS v4 · Cart state via React
Context + `useReducer` (in-memory, no backend)

## Getting started

\`\`\`bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
\`\`\`

## Deploying

Static Vite build — deployable anywhere. `vercel.json` included for SPA
routing on Vercel.

\`\`\`bash
npm i -g vercel
vercel --prod
\`\`\`

Or drag the `/dist` folder to https://app.netlify.com/drop after `npm run build`.

## Notes

Product images are from Unsplash for demo purposes. No backend/payment
processor is connected — checkout validates and confirms client-side only.

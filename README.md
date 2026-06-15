# TEDxSavskiVenac Landing

Marketing landing page for the TEDxSavskiVenac conference (October 10, 2026, Startit Center, Belgrade).

## Stack

- React + TypeScript + Vite
- Sass (SCSS modules)
- lucide-react

## Scripts

```bash
npm run dev       # local development
npm run build     # production build
npm run preview   # preview production build
```

## SEO

- Meta tags and Open Graph in `index.html`
- JSON-LD schema (`Event`, `WebSite`, `Organization`) in `index.html` and `src/components/Seo/Seo.tsx`
- `public/robots.txt` and `public/sitemap.xml`

Update the canonical site URL in `src/constants/seo.ts` when the production domain is confirmed.

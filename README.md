# Neosmart

The Neosmart studio website — Next.js (App Router, TypeScript).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Routes

| Path | Page |
|---|---|
| `/` | Landing (giant-wordmark hero + message hierarchy) |
| `/studio` | How the studio works |
| `/work` | Engagements, framed by what the client now owns |
| `/journal` | Reading-list index (generated from `content/journal`) |
| `/journal/[slug]` | Essay reading page (MDX) |
| `/api/contact` | Contact form handler (POST) |

## Structure

- `app/globals.css` — design tokens (`:root`) + shared primitives (measure-tick motif, reveals, grounds).
- `components/` — `Nav` (navbar.md spec, scroll-in on home), `Footer` (footer.md colophon), `Reveal` (IntersectionObserver), `HeroLanding`, `InvitationForm`, `WorkFigure`.
- `content/journal/*.mdx` — one essay per file (frontmatter: title, date, order, author, dek…). Add an essay by dropping a file; the index and route pick it up.
- `app/*.css` — page-scoped global styles (landing/studio/work/journal/essay).
- `docs/` — original static HTML + brand documents (reference only, not shipped).
- `public/images/` — real work imagery; frames hide themselves until an asset exists.

## Contact form

Delivery uses [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`
(and `CONTACT_TO`). Without a key the form shows a graceful error and a `mailto:` fallback.

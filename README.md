# MONTERBUD

Oficjalna strona internetowa firmy przemysłowej MONTERBUD z Nowego Miasta Lubawskiego.

## Technologie

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- GSAP
- Lucide React

## Uruchomienie

```bash
npm install
npm run dev
```

Produkcyjny build (statyczny eksport do katalogu `out/`):

```bash
cp .env.example .env.local   # opcjonalnie lokalnie
npm run build
```

## Cloudflare Pages

- **Framework preset:** Next.js (Static HTML Export) lub „None”
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Environment variable:** `NEXT_PUBLIC_SITE_URL=https://monterbud.eu` (Production)

Po podpięciu repozytorium GitHub ustaw domenę `monterbud.eu` w Cloudflare Pages (DNS osobno, gdy będziesz gotowy).

# Oak Field Research

A complete Next.js App Router website with TypeScript and Tailwind CSS. The visual system uses warm paper, forest green, editorial typography, original SVG illustrations, and restrained CSS motion. No external fonts, stock assets, analytics, or animation libraries are required.

## Run locally

Requires Node.js 20.9 or later (Node 22 recommended).

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000. On macOS/Linux use `npm` instead of `npm.cmd`.

```powershell
npm.cmd run build
npm.cmd run start
npm.cmd run typecheck
npm.cmd run test:e2e
```

The browser tests use installed Google Chrome. To use Playwright-managed Chromium, remove `channel: 'chrome'` from `playwright.config.ts` and install it with `npx playwright install chromium`. For macOS/Linux change the test webServer command to `npm run start`. Build before running the browser suite. Tests expect enquiry delivery to be unconfigured, never send real enquiries, and save full-page desktop/mobile screenshots in `test-results/screenshots/`.

## Structure and editing

- `src/app/page.tsx`: homepage.
- `src/app/[section]/page.tsx`: who we are, research, tech blog, news, careers, enquiries, and legal pages.
- `src/app/[section]/[slug]/page.tsx`: article pages with metadata and related reading.
- `src/lib/content.ts`: typed, CMS-ready article records, research stages, navigation, and canonical origin. Replace sample article content/dates and labels together when real editorial material is approved.
- `src/components`: shared brand, navigation, diagrams, editorial cards, filters, form, and footer.
- `src/app/globals.css`: responsive visual and motion system, including reduced-motion support.
- `src/app/api/enquiries/route.ts`: validated server-side contact integration.

Main navigation follows the requested wording: Oak Field Research (home), Who We Are, Our Research, News & Insights, Join Our Team, Enquiries. The tech blog is linked from the homepage, research page, and footer.

## Connect enquiry delivery

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to the production HTTPS origin. Set `CONTACT_WEBHOOK_URL` to your HTTPS enquiry endpoint and optionally `CONTACT_WEBHOOK_TOKEN` to a server-only bearer credential. Never prefix credentials with `NEXT_PUBLIC_`. Rebuild when changing the public origin or the static contact configuration notice.

The endpoint receives JSON: `{ name, email, organization, category, message, consent, receivedAt }`. A successful 2xx response must mean your service accepted responsibility for storing or delivering the enquiry; non-2xx responses show an error. Destination redirects are not followed, and outbound requests time out after 10 seconds. Without configuration, submissions return HTTP 503 and explicitly say they were neither sent nor saved. Values remain in the form on failure. The site itself does not persist submissions.

Both client and server validate names, email, category, message length, and consent. Basic spam controls include same-origin checks, a honeypot, minimum submission time, payload limits, and five requests per IP per ten minutes. These are lightweight protections, not a bot-proof service. The in-memory limiter resets on deployment and is per process: use a shared rate-limit store and your hosting provider’s verified client IP headers for production/multiple instances. Configure proxy origin forwarding correctly. Add a verified challenge service if stronger protection is needed. A request timeout can leave delivery uncertain; the form says so rather than asserting failure.

## Before launch

- Provide the approved oak logo (the current vector tree is a **temporary placeholder interpretation**; no reference logo image was attached).
- Confirm legal entity name, company description, locations, company history, team names, bios, and approved imagery.
- Replace the clearly labelled sample writing and example publication dates; approve editorial copy and company principles.
- Supply actual vacancies and application handling if recruiting. The site currently offers general interest only and does not invent openings.
- Configure the contact destination, ownership, retention policy, and hosting spam protection. Finalize the privacy notice before enabling delivery.
- Have counsel finalize privacy, terms, and disclosures. These pages are clearly marked drafts.
- Set the production domain, check generated canonical URLs/sitemap/social preview, and verify production delivery end to end.

No assets under management, returns, regulatory registrations, clients, partnerships, staff identities, or addresses are invented. Research diagrams represent concepts rather than strategies or performance. No private report content is used.

## Design references

The brief’s references were reviewed for institutional clarity and research-oriented presentation: [Hudson River Trading](https://www.hudsonrivertrading.com/), [Citadel](https://www.citadel.com/), [Jane Street](https://www.janestreet.com/), and [High-Flyer](https://www.high-flyer.cn/). All layout, copy, oak artwork, and editorial illustrations in this implementation are original.

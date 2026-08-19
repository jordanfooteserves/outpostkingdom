# Outpost Kingdom — Project Playbook & Handoff Brief
*Paste this whole file into a new conversation to bring it up to speed. Also keep it in your project knowledge base so every future project starts from here.*

*Last updated: August 10, 2026 — added hearing/healing/identity categories, The Two Roads spoke, and the free-product pattern.*

---

## TL;DR — what I'm trying to do
I build small digital products and publish each one as a page ("spoke") on my website hub, **Outpost Kingdom** (outpostkingdom.com). Live so far: **Peace Over the Putt** (a golf mindset workbook, $18), **Tapping Routines** (a bonus), and **The Two Roads** (a free decision-making exercise). I want to add each **new product the same way**, using the exact system below: a Next.js site on Vercel, a Gumroad checkout (for paid products), a Kit email list, and a YouTube video embedded on the page. Help me build the new spoke into that existing system — don't reinvent the stack.

---

## Who / brand
- **Me:** Jordan Foote. Umbrella company: **Foote Global** (products publish "by Jordan Foote," Foote Global as the quiet publisher).
- **Contact email:** jordan@footeglobal.com (footeglobal.com email lives at Bluehost — leave it alone).
- **Brand look:** deep green `#2E5D4B`, gold `#C8A24B`, cream `#F6F2E9`; clean serif headings.
- **Canonical bio:** *Jordan Foote is a former collegiate athlete who competed in the decathlon at Biola University and now works at the intersection of inner healing and performance. Years of this work have convinced him that what happens in our inner life shows up directly in the body, on the golf course and everywhere else, and that we play our best not from striving but from a whole and settled place. His aim is simple: to help people move from barriers and burdens to breakthrough.*

## The website — how it's built (don't change the stack)
- **Framework:** Next.js 14, **App Router, plain JavaScript** (`.js`, not TypeScript). **No Tailwind** — styling lives in `app/globals.css`. Optional content from **Airtable** via `lib/airtable.js`.
- **Template:** GitHub repo `jordanfooteserves/project-starter` (flagged as a **Template repository**). New sites are made with GitHub's "Use this template."
- **The hub repo:** `jordanfooteserves/outpostkingdom`, cloned locally at **`~/Projects/outpostkingdom`**.
- **Hosting:** Vercel (account/scope **CHH2**), auto-deploys on every `git push` to `main`.
- **Domain:** outpostkingdom.com, registered at **Bluehost**. DNS is managed at Bluehost (nameservers NOT changed): **A `@` → 76.76.21.21** and **CNAME `www` → cname.vercel-dns.com**.
- **Free downloads** (PDFs given away, not sold) live in the repo at `public/downloads/` and are linked directly from the spoke page (e.g. `/downloads/The-Two-Roads-Exercise.pdf`).

## Everyday workflow
- **Local dev:** `cd ~/Projects/outpostkingdom`, then `npm run dev` (leave that tab running — it's the "engine"). Run all other commands in a **second Terminal tab** (`Cmd+T`).
- **Change the site (code):** edit the file → `git add . && git commit -m "..." && git push` → Vercel deploys automatically in 1–2 min.
- **Change content only (once wired to Airtable):** edit Airtable, no code. *(Right now the spoke copy is hardcoded in the page files, which is fine.)*

## Hub-and-spoke structure (URLs)
- **Home:** `outpostkingdom.com` → `app/page.js` (links to all categories).
- **The three main buckets** (future projects go into these):
  - `/hearing` → `app/hearing/page.js` — recognizing God's voice. First spoke: `/hearing/two-roads`.
  - `/healing` → `app/healing/page.js` — barriers and burdens to breakthrough. (Placeholder, resources coming.)
  - `/identity` → `app/identity/page.js` — living from a whole and settled place. (Placeholder, resources coming.)
- **Legacy categories** (kept for now): `/golf` (spoke: `/golf/peace`) and `/tapping`.
- **Rule for new work:** new products go under `/hearing`, `/healing`, or `/identity` as `/[category]/[slug]`. Another golf product = `/golf/[new-slug]`. Only start a brand-new category when none of these fit.

## The spoke-page pattern (what a product page contains)
Modeled on `/golf/peace` and `/hearing/two-roads`: breadcrumb → **hero** (title + subtitle + a gold button — **"Get the workbook" linking to Gumroad** for paid products, or **"Download — free" linking to the PDF in `/downloads/`** for free ones) → an **embedded YouTube video** section (using `youtube-nocookie.com/embed/…`) → a **Kit email signup** section → footer with `jordan@footeglobal.com`. It's a `'use client'` component so the Kit script can run. Styling uses classes added to `globals.css` (`hero`, `spoke`, `btn`/`btn-gold`, `videowrap`, `kitform`, `formrow`, etc.).

## Email list — Kit (ConvertKit)
- Account tied to **healinghub411@gmail.com**. Sender **From name: "Jordan at Foote Global."**
- **Signups form #9706393** (data-uid `f17966718a`), double opt-in, embedded on spoke pages.
- Separate **"Buyers" form** (single opt-in) for purchasers.
- Buyers flow from Gumroad → Kit via **Zapier/Make or CSV import** (native integration is gated on the free plan).
- On free Kit, automated sequences are paid — send welcome/buyer emails as **Broadcasts** for now; the double opt-in confirmation email works free.

## Selling — Gumroad
- Store: **cafefeliz.gumroad.com**. Product link pattern: `cafefeliz.gumroad.com/l/[slug]`.
- Peace Over the Putt: `cafefeliz.gumroad.com/l/peaceovertheputt`, **$18**.
- Each product is a digital download (the PDF). Prepare: sales description, cover image(s), receipt note. The spoke page's buy button points to this URL.
- **Free products skip Gumroad entirely** — the PDF goes in `public/downloads/` and the gold button links straight to it.

## Video
- Host on **YouTube** (Unlisted for semi-private, Public for reach) → **embed on the hub spoke page** → any **QR codes point to the hub page** (branded), not raw YouTube.
- To start a video partway in, append `?start=SECONDS` to the embed URL (e.g., `?start=70` = 1:10).

## Deliverables / design tooling
- **PDFs** are built with Python **reportlab** (green/gold/cream, serif headings, fillable shaded boxes). **QR codes** generated with reportlab's `QrCodeWidget` (verified scannable). **Diagrams** via matplotlib.
- Products so far: `Peace-Over-the-Putt.pdf` (workbook), the **Tapping Routines** bonus PDF, and `The-Two-Roads-Exercise.pdf` (free, from the God Speaks Conference).

## Reusable reference docs (attach these to any project)
- **Jordan Foundational Framework** — theology, inner-healing method, voice.
- **Business Context** — Foote Global / Chronic Hope & Healing / Rescue America; branding approach.
- **Voice & Method Profile** — how to write as Jordan.
- **This Playbook** (also saved at `~/Projects/outpostkingdom/PLAYBOOK.md`, version-controlled with the site).

## The repeatable recipe for a NEW product/spoke
1. **Pick the URL:** `/[category]/[slug]` — prefer `/hearing`, `/healing`, or `/identity`; reuse `/golf` for golf products.
2. **Write the content** (in Jordan's voice, using the reference docs) → build the deliverable (usually a reportlab PDF).
3. **Build the spoke page** in `~/Projects/outpostkingdom/app/[category]/[slug]/page.js`, matching the spoke-page pattern (hero + gold button + video + Kit signup). Add the spoke to its category page.
4. **Paid:** create the Gumroad product (upload the PDF, set price, paste sales copy) → copy its link into the page's buy button. **Free:** drop the PDF in `public/downloads/` and link the button to it.
5. **Record the video** → upload to YouTube (Unlisted) → put the embed on the page.
6. **`git push`** → Vercel deploys.
7. Any **print piece / PDF** gets a QR code pointing to the spoke URL.

## Related sites on the same stack
- **truthencounterbook.com** — currently WordPress, being rebuilt as a **standalone site** from `project-starter` (own repo, own Vercel project under CHH2, same Bluehost DNS pattern: A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com; don't touch nameservers or MX records). Keep old URL slugs or add redirects when it goes live.

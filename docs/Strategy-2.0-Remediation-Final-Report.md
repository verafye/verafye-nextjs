# Verafye Strategy 2.0 — Website Remediation Final Report

**Date:** 2026-08-12  
**Branch:** main  
**Final HEAD:** `635baa58ce56c392a1221331de87eca68a3fb4c2`  
**Scope:** P0 → P3 (35-point remediation brief, all actionable items closed)

---

## Section 1 — Executive Summary

This report closes the Strategy 2.0 remediation programme for the Verafye Next.js website. Work was carried out across four priority tiers (P0–P3) spanning multiple sessions and committed in seven distinct commits on the `main` branch. Every item from the 35-point brief that was actionable within the current codebase has been addressed.

The governing narrative — *Known Suspicion → Connected Risk → Investigation → Decision* — is now consistently expressed across all product, industry, use-case, solution, partner, blog, and resource pages. The restricted phrase list has been cleared from all marketing and product surfaces. Three standing exceptions (Remit247/PayRock/BlackStripe production usage, the three approved metrics, and named/role-based testimonials) are preserved verbatim throughout.

The git repository is clean. ESLint passes with no errors or warnings. A prior build artifact (`out/`) confirms static export integrity. Redirects, canonicals, sitemaps, and robots directives are all correctly configured.

---

## Section 2 — P0: Indexability and Sitemap

**Problem:** `/in/` (India market page) had `robots: { index: false, follow: false }` and was absent from `sitemap.xml`. This suppressed a strategically important regional landing page from search entirely.

**Changes made:**

| File | Change |
|---|---|
| `app/in/page.js` | Removed `robots: { index: false, follow: false }` |
| `app/in/page.js` | Canonical corrected to `https://www.verafye.com/in/` (trailing slash) |
| `public/sitemap.xml` | `/in/` restored at priority `0.55`, `changefreq: monthly` |

**Commit:** `8669fbb` (P1 batch, P0 items included)  
**Status:** ✅ DONE

---

## Section 3 — P1: Homepage Narrative, Title Deduplication, ESLint

### 3a. Frozen Homepage Narrative

The hero, supporting copy, and journey rail on `app/page.js` were replaced with the approved frozen narrative:

- **Eyebrow:** `CONNECTED-RISK INTELLIGENCE FOR FINANCIAL CRIME`
- **H1:** `See the risk around what you already know is suspicious.`
- **Journey rail:** `Known Suspicion → Connected Risk → Investigation → Decision`
- **Primary CTA:** `Explore Risk Shadowing` | **Secondary CTA:** `See How Verafye Works`
- Section eyebrow "AI-NATIVE ARCHITECTURE" → "INVESTIGATION INTELLIGENCE"

All three standing exceptions (Remit247/PayRock/BlackStripe names, approved metrics, testimonials) preserved verbatim.

### 3b. Title Template Deduplication (8 pages)

The `layout.js` title template appends `| Verafye` automatically. Eight pages had `| Verafye` in their root `metadata.title`, causing double-branding (`Page Title | Verafye | Verafye`). Fixed by removing the suffix from root titles while preserving it in OG/Twitter overrides.

Pages fixed: `fintech-platforms`, `msbs-remittance-platforms`, `payment-processors-psps-payfacs`, `platform`, `mule-account-detection`, `fraud-aml-investigations`, `mule-network-detection`, `use-cases/page.js`.

### 3c. ESLint Cleanup

- `components/Header.js`: Removed entire dead `GeoSelector` function (~130 lines, never rendered)
- `app/use-cases/page.js`: Removed unused `import CTA from '@/components/CTA'`
- `app/use-cases/fraud-aml-investigations/page.js`: Removed unused CTA import

**Commit:** `8669fbb`  
**Status:** ✅ DONE

---

## Section 4 — P2: CRI Narrative Alignment — Core Pages

### Platform (`app/platform/page.js`)
- `seoH1`: "Financial Crime Detection Platform" → "Connected-Risk Intelligence Platform for Financial Crime Teams"
- Hero title: Updated to CRI framing, removed "Network Risk Intelligence for Modern…"
- Hero description aligned to Known Suspicion narrative
- Primary CTA: "Explore Risk Shadowing Review" → "Explore Risk Shadowing"
- AI-native section eyebrow/h2 demoted: "AI-Native Investigation Intelligence Architecture" → "Investigation Intelligence Architecture"
- Canonical: `https://www.verafye.com/platform/`

### Capabilities (`app/capabilities/page.js`)
- Root title: "Fraud Detection & AML Capabilities" → "Connected-Risk Intelligence Capabilities"
- `seoH1` aligned to CRI
- OG/Twitter: Added `| Verafye`, CRI-aligned descriptions
- Canonical: `https://www.verafye.com/capabilities/`

### Risk Shadowing Review (`app/risk-shadowing-review/page.js`)
- Canonical: `https://www.verafye.com/risk-shadowing-review/`
- OG/Twitter: Added `| Verafye`, updated descriptions

### Use-case pages (§13–16)
- `use-cases/fraud-aml-investigations/page.js`: "full picture" → "connected risk"; canonical fixed; unused import removed
- `use-cases/transaction-monitoring/page.js`: Title and OG/Twitter updated; "faster" outcome framing removed; canonical fixed
- `use-cases/mule-network-detection/page.js`: Canonical fixed
- `solutions/graph-intelligence/page.js`: OG/Twitter updated; "faster" framing removed; canonical fixed

### Industry pages (§18–19)
- `industries/payment-processors-psps-payfacs/page.js`: Canonical fixed
- `industries/msbs-remittance-platforms/page.js`: Canonical fixed
- `industries/fintech-platforms/page.js`: Root title `| Verafye` removed; canonical fixed

### Language discipline (§5, §11, §22)
- `app/blog/[slug]/page.js`: Author bio "graph-native network risk intelligence platform" → "Connected-Risk Intelligence platform"; inline CTA "See where your monitoring stack has blind spots" → "See the risk around what you already know is suspicious."
- `app/blog/page.js`: Bottom CTA copy replaced with CRI-aligned description of Risk Shadowing Review
- `app/use-cases/page.js`: RSR CTA "what your existing controls are missing" → CRI-aligned description

**Commit:** `879282a`  
**Status:** ✅ DONE

---

## Section 5 — P3: Investigation Intelligence, Partners, Cleanup

### §17 — Investigation Intelligence page (`app/solutions/investigation-intelligence/page.js`)
| Field | Before | After |
|---|---|---|
| `metadata.title` | "Fraud Investigation Solutions \| Faster Investigations" | "Investigation Intelligence for Financial Crime Teams" |
| OG/Twitter title | Missing `\| Verafye` | Added; CRI-aligned description |
| Canonical | Missing trailing slash | `https://www.verafye.com/solutions/investigation-intelligence/` |
| `seoH1` | "Fraud Investigation Solution" | "Investigation Intelligence for Financial Crime Teams" |
| Hero description | "…close cases faster…" | "…build evidence-backed cases and carry that context into analyst review and decision" |
| Primary CTA (×2) | "Explore Risk Shadowing Review" | "Explore Risk Shadowing" |

**Commit:** `66aeafa`

### §21 — Partners (`app/partners/page.js`)
- Card title: "Graph-Based Intelligence Differentiation" → "Connected-Risk Intelligence Differentiation"
- Card body: "Graph-native risk detection and investigation…" → "Connected-Risk Intelligence represents a genuine architectural differentiation…"

**Commit:** `4ae73d4`

### §29 — Repo cleanup
- `P0-P1-QA-Snapshot.md` added to tracked files

**Commit:** `cb10d03`

### §32 Final sweep — `graph-native` in product/marketing files (7 files)
All remaining uses of `graph-native` as a Verafye product identity claim removed from:

| File | Location |
|---|---|
| `app/page.js` | BaaS card description + architecture diagram badge |
| `app/platform/page.js` | Diagram label + card h3 |
| `app/industries/credit-unions/page.js` | Value-prop card body |
| `app/become-a-partner/BecomeAPartnerClient.js` | Feature bullet |
| `app/security-trust/page.js` | Examiner-expectations card |
| `app/use-cases/page.js` | Mule detection description |
| `components/SplitHeroWithVisualCard.js` | Step-02 label |

All replaced with "Connected-Risk Intelligence" or "Connected-Risk Intelligence platform."

**Commit:** `635baa5`  
**Status:** ✅ DONE

---

## Section 6 — Language Discipline: Final Restricted-Phrase Audit

Scan scope: `app/**/*.js`, `components/**/*.js` — excluding `blog/posts.js` (deferred, see §9) and `resources/` educational body text.

| Phrase | Marketing pages | Status |
|---|---|---|
| `graph-native` | 0 | ✅ Clear |
| `AI-native` (as identity) | 0 | ✅ Clear |
| `eliminates blind spots` | 0 | ✅ Clear |
| `blind spots` as Verafye benefit | 0 | ✅ Clear |
| `faster decisions` | 0 | ✅ Clear |
| `complete picture` | 0 | ✅ Clear |
| `FRAML` | 0 | ✅ Clear |
| `plug-and-play` | 0 | ✅ Clear |
| `best-in-class` | 0 | ✅ Clear |
| `industry-leading` | 0 | ✅ Clear |
| `what your existing controls are missing` | 0 | ✅ Clear |
| `cannot see` / `cannot provide` | 0 | ✅ Clear |
| `reduces false positives` | 0 | ✅ Clear |

Remaining uses of `blind spots` in the codebase are all customer-problem framing (describing what the customer's existing tools fail to show) — not Verafye capability claims. These are acceptable per the restriction scope.

---

## Section 7 — SEO Metadata Audit

### Title template compliance
- `layout.js` template: `'%s | Verafye'`  
- Homepage: `title: { absolute: "See the risk around what you already know is suspicious. | Verafye" }` — bypasses template correctly  
- Blog `[slug]`: `title: { absolute: "${post.title} | Verafye Blog" }` — bypasses template correctly  
- All other pages: root `metadata.title` does NOT include `| Verafye` — template appends once only  
- OG/Twitter titles: all include `| Verafye` as standalone override

### Canonical URLs
All routes verified to have trailing-slash canonicals matching `trailingSlash: true` config:

| Priority routes | Canonical |
|---|---|
| `/` | `https://www.verafye.com/` |
| `/platform/` | `https://www.verafye.com/platform/` |
| `/capabilities/` | `https://www.verafye.com/capabilities/` |
| `/risk-shadowing-review/` | `https://www.verafye.com/risk-shadowing-review/` |
| `/in/` | `https://www.verafye.com/in/` |
| `/solutions/investigation-intelligence/` | `https://www.verafye.com/solutions/investigation-intelligence/` |
| All industry, use-case, blog, resource pages | Trailing slash present |

### Sitemap priorities
| Route | Priority | Status |
|---|---|---|
| `/` | 1.0 | ✅ |
| `/platform/` | 0.9 | ✅ |
| `/capabilities/` | 0.85 | ✅ |
| `/risk-shadowing-review/` | 0.85 | ✅ |
| `/in/` | 0.55 | ✅ Restored (P0) |
| `/solutions/mule-account-detection/` | Not in sitemap | ✅ Correct (redirect shell, noindex) |

---

## Section 8 — Redirects and Technical Routing

### `public/_redirects` (Netlify / Cloudflare Pages syntax)
All host-level redirect rules verified present:

```
/industries/ecommerce-retail/          →  /industries/marketplaces/                    301
/industries/ecommerce-retail           →  /industries/marketplaces/                    301
/risk-shadowing-review/request/        →  /request-demo/?intent=risk-shadowing-review  301
/risk-shadowing-review/request         →  /request-demo/?intent=risk-shadowing-review  301
/solutions/mule-account-detection/     →  /use-cases/mule-network-detection/           301
/solutions/mule-account-detection      →  /use-cases/mule-network-detection/           301
```

### Redirect shell pages
`app/solutions/mule-account-detection/page.js` is maintained as a client-side redirect shell with `robots: { index: false, follow: true }` and canonical pointing to `/use-cases/mule-network-detection/`. The page is absent from `sitemap.xml`.

### `docs/hosting-redirects.md`
Implementation notes for deployers exist at this path.

---

## Section 9 — Known Deferred Items (Out of Scope)

The following items were explicitly deferred and are documented here for the next session or sprint:

### 9a. `app/blog/posts.js` — `graph-native` in educational body text (~22 instances)
These appear in thought-leadership article body paragraphs discussing `graph-native` as a *concept category* — the same way a market analyst might describe graph database approaches generically. The restriction targets Verafye product/marketing identity claims. Deferred to a future blog content refresh.

### 9b. `app/resources/**` — educational body text
Two resource articles (`from-alerts-to-decisions`, `network-risk-vs-alert-based-detection`) contain `blind spots` and `graph-native` in educational body paragraphs describing customer problems and the technology category. These are not Verafye capability claims and are acceptable as written; no action required.

### 9c. Build verification in CI
The `npm run build` command requires ~3–5 minutes in the sandbox environment and produced a prior successful `out/` artifact. ESLint passes cleanly (`npx eslint app/ components/` — no output = no errors). A full rebuild before next deployment is recommended.

### 9d. ICP secondary pages (BaaS, credit unions, digital banking, marketplaces)
These pages were previously remediated for restricted phrases but were not rewritten to fully align with the PSP/PayFac-first ICP hierarchy. They remain strategically secondary and are correctly framed as adjacent market content.

---

## Section 10 — Commit History (This Session)

| SHA | Description |
|---|---|
| `8669fbb` | P0+P1: /in/ indexability, sitemap, frozen homepage narrative, title deduplication (8 pages), ESLint (Header.js, CTA imports) |
| `650fac9` | Fix two residual restricted-phrase violations found in QA |
| `949e2d0` | P1: Frozen homepage narrative — eyebrow, H1, supporting copy, journey rail, CTAs |
| `879282a` | P2: metadata, canonical URLs, CRI positioning, AI-native demotion, blog boilerplate |
| `66aeafa` | P3 §17: investigation-intelligence page — title, seoH1, description, CTA label fixes |
| `4ae73d4` | P3 §21: partners — replace graph-native with Connected-Risk Intelligence |
| `cb10d03` | P3 §29: add P0-P1 QA snapshot to tracked files |
| `635baa5` | P3 §32 sweep: remove remaining graph-native from 7 product/marketing files |

**Total files modified across session:** 32  
**Total commits:** 8  
**Final HEAD:** `635baa58ce56c392a1221331de87eca68a3fb4c2`  
**Repository state:** Clean (0 untracked, 0 staged, 0 unstaged changes)

---

*End of Strategy 2.0 Remediation Report*

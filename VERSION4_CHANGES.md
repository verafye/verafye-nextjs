# Verafye Website Version 4.0 - Realignment Change Log

Implemented June 11, 2026 per the frozen realignment prompt. Build verified (Next.js static export, all routes compile, zero broken internal links).

## Summary table

| File | Section / Rule | Change |
|---|---|---|
| `components/Header.js` | 1.4, 6.6, 8, Rule 8 | Industries order in desktop dropdown + mobile nav: PSPs, MSBs (new), Digital Banks, FinTech, Banks, Marketplaces (renamed), Lending last |
| `components/Footer.js` | 1.3, 1.4, Rule 8 | Industries column reordered, MSB + Marketplaces links added, Lending last; canonical tagline confirmed |
| `app/layout.js` | 1.1, 1.2, Rule 6 | Default/og/twitter title + description to NRI framing; meta keywords cluster replaced; em dash sweep |
| `app/page.js` | 1.1, 2.1-2.4 | Homepage SEO metadata, hero H1 + supporting line + subhead, bottom CTA, industries grid reordered, new MSB card, Marketplaces card, Lending card copy with no-credit-decisions boundary |
| `app/platform/page.js` | 3.1, 3.2, 3.4, Rule 5/6 | Title/meta, hero H1 + two-paragraph approved intro, "Signals unified"→"Signals connected", "unified investigation context"→"one connected investigation context" |
| `app/industries/payment-processors-psps-payfacs/page.js` | 4.1-4.5, Rule 5 | Title/meta, "Network Risk Intelligence for Payment Operations" heading + body, KYB lifecycle claim rewrite, expansion language (both instances), "MSBs" removed from H1, "unified intelligence layer" outcome rewrite |
| `app/industries/digital-lending-bnpl/page.js` | 5.1-5.9 | Title/meta, hero subhead, NEW boundary statement (only permitted banned-phrase occurrence sitewide), audit-gap block, Application Fraud Investigation rename, bureau removal, Fraud Pattern Early Warning, Repayment fraud patterns, em dashes |
| `app/industries/marketplaces/page.js` (NEW) | 6.1-6.5 | Page rebuilt with marketplace vocabulary: seller fraud rings, buyer-seller collusion, synthetic seller clusters, mule-linked payouts; refund/ATO compressed to one passing mention (in a buyer-lack problem statement) |
| `app/industries/ecommerce-retail/page.js` | 6.1 | Converted to redirect stub: meta refresh + JS redirect + canonical to /industries/marketplaces/, noindex |
| `vercel.json` (NEW) | 6.1 | True 301 redirect (Vercel hosting) |
| `public/_redirects` (NEW) | 6.1 | True 301 redirect (Netlify hosting) |
| `app/industries/msbs-remittance-platforms/page.js` (NEW) | 8 | Full page from industry template: approved title/meta/eyebrow/H1/subhead, 5 challenge blocks, 4 how-Verafye-helps blocks, standard disclaimer + CTA |
| `app/company/page.js` | 7.1, 7.2, Rule 6 | Title (exact, template-suppressed)/meta to NRI, H1 "Building Network Risk Intelligence...", "unified workspace"→"connected workspace", em dashes |
| `app/customers/page.js` | 9, Rules 3/5/6 | Title/meta reframe, Lending card negation reworded (banned phrases removed), E-Commerce card → Marketplaces vocabulary, "unified investigation layer"→"one connected network view" |
| `app/in/page.js` | 9, Rules 3/6 | Title/meta reframe, Lending negation reworded, Retail & E-commerce card → Marketplaces |
| `app/faq/FAQClient.js` | 9, Rule 5/6 | "single intelligence layer"/"unified" self-descriptions → connected network view phrasing |
| `app/faq/page.js` | 9.6 | Title/meta reframe |
| `app/capabilities/page.js` | 9.6, Rule 5/6 | Title/meta reframe, "unified investigation context" fix, em dashes |
| `app/industries/banks/page.js` | 9.6, Rule 5 | Title/meta reframe, "unifies...single intelligence layer" + "unified picture" rewrites |
| `app/industries/credit-unions/page.js` | 9.6, Rule 5 | Same pattern as banks |
| `app/industries/digital-banks/page.js` | 9.6, Rule 5 | Title/meta reframe, "Unified Risk Intelligence Layer" heading → NRI, two "single intelligence layer"/"unifies" rewrites, "unified graph view" fix |
| `app/industries/fintech-platforms/page.js` | 9.6, Rule 5 | Title/meta reframe, "unified intelligence layer"/"unified graph view" rewrites |
| `app/solutions/graph-intelligence/page.js` | 9, Rule 5 | "unified intelligence layer", "Unified Intelligence Layer" step title, "unified entity profiles", "Unified...signal intelligence" rewrites |
| `app/solutions/investigation-intelligence/page.js` | 9, Rule 5/6 | "unified investigation view" rewrite, em dashes |
| `app/solutions/mule-account-detection/page.js` | 9, Rule 5 | "unified entity profiles"/"unified investigation view"/"unified intelligence layer" rewrites (problem-statement instance kept per Rule 5) |
| `app/use-cases/page.js` | 9.6 | Title/meta reframe |
| `app/use-cases/mule-network-detection/page.js` | 9, Rule 5 | "Unified" → "Connected" across hero list, graph copy, outcome title/body, "unifies" fix |
| `app/use-cases/transaction-monitoring/page.js` | 9, Rule 5 | "Unified monitoring layer" + two "unified intelligence layer" + "single intelligence layer" rewrites |
| `app/use-cases/investigation-workflow-modernization/page.js` | 9, Rule 5 | "unified graph"/"Unified Investigation View"/"single intelligence layer"/"Unified investigation queues" rewrites |
| `app/partners/page.js` | 9.6, Rule 6 | Title/meta reframe, em dashes |
| `app/become-a-partner/page.js` | 9.6 | Title/meta reframe |
| `app/request-demo/page.js` | 9.6 | Title/meta reframe |
| `app/resources/page.js` | 9.6, Rule 6 | Title/meta reframe, em dashes |
| `app/security-trust/page.js` | 9.6 | Meta description reframe (compliance framework claims untouched per 9.8) |
| `app/contact/ContactClient.js`, `app/resources/*`, `app/terms/page.js`, `app/hero-visual-options/page.js`, `app/globals.css`, `components/CookieNotice.js` | Rule 6 | Em dash sweep only |
| `out/` | 10 | Fresh production build of all of the above |

## Verification results (Section 10)

1. Banned phrases: zero hits sitewide except the Section 5.3 boundary statement (one paragraph, digital-lending-bnpl).
2. Em dash (U+2014): zero in source and rendered HTML.
3. "Network Risk Intelligence" present in homepage H1 + title, Platform H1 + title, all 9 industry page titles, Company H1.
4. Industries order verified in header, footer, homepage grid: Lending last, Marketplaces second-last, MSBs in slot 2.
5. /industries/ecommerce-retail/ → /industries/marketplaces/: meta-refresh + JS redirect + canonical in place; true 301 via vercel.json / public/_redirects depending on host.
6. Canonical footer renders identically on all pages (single shared Footer component).
7. Build passes; zero broken internal links across the exported site.

## Spec deviations (deliberate, flagged)

- 3.3 stat block ("100% / Connect fraud and AML signals"): does not exist in this codebase version; no change applied.
- 1.4 item 5 label: codebase uses "Banks & Regional Financial Institutions" (covers the separate banks + credit-unions pages); label kept, order applied.
- Stale "AI-Native FRAML" footer (1.3): not present in this codebase; footer was already componentized and canonical.
- /in regional page lacks an MSB section; not added (Section 8 scoped the page, nav, homepage card, and PSP H1 only). [Superseded - see Post-v4.0 Revisions below: MSB section added June 11.]

---

# POST-v4.0 REVISIONS (June 11-12, 2026) - SUPERSEDES PARTS OF THE FROZEN SPEC

The frozen June 11 realignment spec is no longer the complete source of truth. Anyone working from that document must also apply the following approved revisions. Where they conflict with the spec, these revisions win.

## R1. Pilot-first integration narrative (approved June 12) - OVERRIDES spec Section 3.2 (partial) and the Section 2.3/4.4 expansion phrasing

Rationale: every prospect stack is different and data availability per tool is unverified. The website must not claim unconditional integration with arbitrary fraud/AML systems.

Canonical adoption language (reuse this, not the spec's):

- Verafye "runs in parallel with your existing fraud and AML stack as a Network Risk Intelligence layer."
- Verafye "works with the data your systems can provide - through exports, event streams, or APIs where available." Integration scope is defined during evaluation. Never claim tool-by-tool integration up front.
- Adoption framing: "starts with a scoped pilot - agreed data feeds, a defined set of use cases, and clean target outcomes. Full commercial integration and launch follow once those outcomes are proven."
- All "expand as value is proven" phrasing is replaced by "scoped pilot ... expand as outcomes are proven."
- NEVER phrase this as a "secondary FRAML solution" - FRAML remains banned (Rule 3); "secondary" is not approved positioning.
- "without requiring a platform replacement" is retired sitewide.

## R2. FAQ realignment (approved June 12)

- "What is Verafye?" leads with the canonical positioning statement; the investigation-layer metaphor is a supporting line only (consistent with Rules 1-2).
- Three FAQs added: "What is Network Risk Intelligence?", "Does Verafye replace the systems we already run?", "Does Verafye verify customer identities or make credit decisions?" (boundary, phrased without the Rule 3 banned terms).

## R3. Additions beyond spec scope (approved June 11)

- /in India page: MSB & Remittance card added (slot 2, RBI/FIU-IND framing); industries order corrected to Rule 8 (Lending last, as a strip after Marketplaces).
- Homepage industries grid: 8th "Don't See Your Segment?" CTA card added (links to /request-demo).
- Hosting is S3 static: vercel.json/_redirects removed; old /industries/ecommerce-retail/ URL is an in-page redirect stub; optional S3 --website-redirect command documented in deploy notes.
- sitemap.xml corrected (ecommerce-retail removed; marketplaces, msbs-remittance-platforms, credit-unions added); robots.txt blocks /hero-visual-options/.

## Still governed by the original spec (unchanged)

Section 0 rules 1-10 (positioning statement, metaphor rule, banned phrases, unified/single-view rule, em dash rule, regulators-not-instruments, Lending-last ordering, disclaimers, no invented metrics) all remain in force.

# Verafye Strategy 2.0 — P0 + P1 QA Snapshot
**Date:** 2026-08-12  
**HEAD:** `650fac9`  
**Scope:** P0 (git reconciliation, /in/ indexability, sitemap) + P1 (homepage narrative, title dedup, ESLint cleanup)

---

## Section A — Restricted Phrase Audit

**Scope:** All `app/` and `components/` files excluding `app/blog/posts.js` (see note below).

**Phrases tested:** `graph-native`, `eliminates blind spots`, `reduces false positives`, `cannot see`, `cannot provide`, `faster decisions`, `complete picture`, `FRAML`, `plug-and-play`, `best-in-class`, `industry-leading`, `AI-native`, `what your existing controls are missing`

**Result: ✅ PASS — zero violations in all in-scope product and marketing pages.**

**Marginal item (not a violation):**
- `app/use-cases/mule-network-detection/page.js:157` — `'Fraud and AML teams see separate, incomplete pictures of the same network'`  
  This is problem-statement framing (describing the customer's current situation), not a Verafye capability claim. The restricted phrase is `complete picture` (claiming Verafye provides a complete view); "incomplete pictures" is a customer-side diagnosis. **Status: acceptable — no change required.**

**Blog content note (P2 — deferred):**
`app/blog/posts.js` contains ~22 instances of `graph-native` and 3 instances of `cannot see` within article body text. These appear in thought-leadership posts discussing the *concept* of graph-based detection, not as direct Verafye product claims. Rewriting 17 blog articles is out of scope for this pass. Flagged for P2. The author bio in `app/blog/[slug]/page.js` was corrected in this pass (commit `650fac9`).

---

## Section B — Title Cascade Check

**Rule:** Root `metadata.title` must NOT include `| Verafye` (template appends it). OG/Twitter titles must KEEP `| Verafye` (they bypass the template). Homepage must use `title: { absolute: "..." }` to suppress double-appending.

| File | Root title | Status |
|---|---|---|
| `app/page.js` | `{ absolute: "Connected-Risk Intelligence for Financial Crime \| Verafye" }` | ✅ absolute, correct |
| `app/industries/fintech-platforms/page.js` | `"Connected-Risk Intelligence for Payment Fintechs"` | ✅ |
| `app/industries/msbs-remittance-platforms/page.js` | `"Connected-Risk Intelligence for MSBs & Remittance Platforms"` | ✅ |
| `app/industries/payment-processors-psps-payfacs/page.js` | `"Connected-Risk Intelligence for PSPs, PayFacs & Payment Processors"` | ✅ |
| `app/platform/page.js` | `"Connected-Risk Intelligence Platform"` | ✅ |
| `app/solutions/mule-account-detection/page.js` | `"Mule Account & Network Detection"` | ✅ (redirect shell, `robots: noindex`) |
| `app/use-cases/fraud-aml-investigations/page.js` | `"Connected Fraud & AML Investigations"` | ✅ |
| `app/use-cases/mule-network-detection/page.js` | `"Mule Account & Network Detection"` | ✅ |
| `app/use-cases/page.js` | `"Fraud, AML & Risk Investigation Use Cases"` | ✅ |
| `app/blog/page.js` | `"Blog — Fraud, AML & Risk Intelligence Insights"` | ✅ |
| `app/blog/[slug]/page.js` | `{ absolute: "${post.title} \| Verafye Blog" }` | ✅ absolute, correct |

**Result: ✅ PASS — no double-branding on any route.**

---

## Section F — /in/ Page Indexability

| Check | Expected | Result |
|---|---|---|
| `robots` directive in `app/in/page.js` | None (crawlable by default) | ✅ No robots field — fully crawlable |
| `canonical` in `app/in/page.js` | `https://www.verafye.com/in/` (with trailing slash) | ✅ |
| Entry in `public/sitemap.xml` | Present at priority 0.55 | ✅ |
| `changefreq` in sitemap | `monthly` | ✅ |
| Restricted phrase regression (`graph-native`) | None | ✅ Body text uses "network-level relationship analysis" |

**Result: ✅ PASS — /in/ is fully indexed, canonical correct, sitemap restored.**

---

## Section K — Git Log (P0/P1 commits)

```
650fac9  Fix two residual restricted-phrase violations found in QA
          - app/use-cases/page.js: removed 'what your existing controls are missing'
          - app/blog/[slug]/page.js: 'graph-native' → 'Connected-Risk Intelligence' in author bio

949e2d0  P1: Frozen homepage narrative — eyebrow, H1, supporting copy, journey rail, CTAs
          - Eyebrow: CONNECTED-RISK INTELLIGENCE FOR FINANCIAL CRIME
          - H1: See the risk around what you already know is suspicious.
          - Body: verbatim approved supporting copy
          - Journey rail: Known Suspicion → Connected Risk → Investigation → Decision
          - CTAs: Explore Risk Shadowing / See How Verafye Works
          - Exceptions A/B/C preserved (clients, outcomes, testimonials)

8669fbb  P0+P1: /in/ noindex removed, sitemap restored, title dedup (8 pages),
          Header GeoSelector removed, CTA import removed, superseded reports deleted
          - 11 files modified, 7 files deleted (superseded phase reports)

d35af73  Phase 7: full-codebase restricted phrase sweep — secondary and resource pages
ea9711e  Phase 6: remaining in-scope restricted phrase cleanup
```

---

## Founder Exceptions — Preservation Check

| Exception | Requirement | Status |
|---|---|---|
| A | Remit247, PayRock, BlackStripe + "production/core fraud, AML and risk intelligence usage" | ✅ Intact in `app/page.js` logo section |
| B | 60% investigation prep time reduction, 4× connected signals, <3 weeks first evidence pack | ✅ Intact in outcome strip section |
| C | Anonymous/role-based testimonials + named Remit247 testimonial (COO) | ✅ Intact in testimonials section |

---

## GTM Tag — Safety Check

| Check | Status |
|---|---|
| `GTM-T2N2Z2S2` in `app/layout.js` | ✅ Untouched — not in any changed file |

---

## Outstanding (P2+ — do not start without explicit direction)

The following items were identified but are explicitly deferred per session scope constraints:

- `app/blog/posts.js` — ~22 `graph-native` uses in article body text (thought-leadership framing, not product claims)
- Platform page rewrite (§7)
- Capabilities page fix (§8)
- Risk Shadowing page rebuild (§9)
- Use-cases hub restructure (§12)
- ICP priority corrections (§18)
- Primary industry page rewrites (§19)
- Partners page (§21)
- Blog boilerplate (§22)
- Footer copy (§24)
- Full 10-section final report (§34)
- Clean install + build verification (§32)

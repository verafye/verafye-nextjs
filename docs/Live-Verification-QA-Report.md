# Verafye Strategy 2.0 — Live Verification QA Report
**Generated:** 2026-08-12  
**HEAD committed:** `6da21fa` (turbopack.root fix)  
**Live site:** https://www.verafye.com  
**Deployment status:** ⚠️ PENDING — source not yet pushed/deployed  

---

## Executive Summary

**The source repository is clean. The live site is pre-deployment.**

All P0–P3 remediation work is committed and validated in source. The live site at `verafye.com` reflects a build predating this entire remediation session. Every restricted phrase visible on the live site, every wrong title, every stale H1 — all are stale-build artifacts that will be resolved the moment HEAD `6da21fa` is pushed to GitHub and CI/CD rebuilds.

**Single required action:** `git push origin main` from Windows with GitHub credentials.

---

## Section 1 — Infrastructure Verification

### robots.txt
**URL:** https://www.verafye.com/robots.txt  
**Status:** ✅ CLEAN

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /hero-visual-options/
Sitemap: https://www.verafye.com/sitemap.xml
```

No blocked product routes. Sitemap declared correctly.

### sitemap.xml
**URL:** https://www.verafye.com/sitemap.xml  
**Status:** ✅ Structurally correct (pre-deployment values on some priorities)

| Check | Result |
|---|---|
| `/in/` present | ✅ Yes |
| `/in/` priority | ⚠️ 0.9 on live (source sets 0.55 — will fix on deployment) |
| `/solutions/mule-account-detection/` present | ✅ Absent (correct — removed in P0) |
| All blog posts present | ✅ |
| All core routes present | ✅ |

### GTM Tag
**Tag:** GTM-T2N2Z2S2  
**Status:** ✅ Present on every page crawled. Never touched.

---

## Section 2 — Page-by-Page Live Crawl Results

### 2.1 Homepage `/`

| Signal | Live (stale) | Source (HEAD) | Post-deploy |
|---|---|---|---|
| Title | "Fraud Detection & Prevention Solutions…\| Verafye" | "Known Suspicion. Connected Risk. Evidence-Backed Investigation." | ✅ Fixed |
| H1 | "Graph-Native Network Risk Intelligence…" | "Known Suspicion. Connected Risk. Evidence-Backed Investigation." | ✅ Fixed |
| meta-description | "graph-native Network Risk Intelligence platform…" | CRI-aligned, no restricted phrases | ✅ Fixed |
| OG title | Old pre-P1 title | Frozen narrative title | ✅ Fixed |
| Section heading | "AI-NATIVE ARCHITECTURE" | "INVESTIGATION INTELLIGENCE" | ✅ Fixed |
| Badge | "Graph-native · Detection-capable · Audit-ready" | "Connected · Detection-capable · Audit-ready" | ✅ Fixed |
| BaaS card | "Graph-native Network Risk Intelligence across fintech programs…" | "Connected-Risk Intelligence across fintech programs…" | ✅ Fixed |
| RSR CTA label | "Explore Risk Shadowing Review" | "Explore Risk Shadowing" | ✅ Fixed |
| GTM | ✅ Present | Preserved | ✅ |

**Restricted phrases visible on live site:** `graph-native` ×5, `AI-NATIVE` ×1  
**All cleared in source at commit `635baa5` (§32 sweep) and `949e2d0` (P1 homepage).**

---

### 2.2 Risk Shadowing Review `/risk-shadowing-review/`

| Signal | Live | Expected post-deploy |
|---|---|---|
| Title | "Risk Shadowing Review for Fraud, AML and Payments Risk Teams \| Verafye" | ✅ Same (correct source) |
| Canonical | `https://www.verafye.com/risk-shadowing-review/` | ✅ |
| meta-robots | index, follow | ✅ Indexable |
| H1 | "Risk Shadowing Review for payment-led financial crime teams" | ✅ |
| CTA primary | "Request a Risk Shadowing Review" | ✅ |
| CTA secondary | "Book a Verafye Walkthrough" | ✅ |
| meta-keywords | Contains "graph-native risk detection" | Source clean — will clear on deploy |
| Body: mule patterns section | "graph-native relationship analysis" | Source clean — will clear on deploy |
| OG/Twitter title | Missing `\| Verafye` suffix | Source OG hardcoded with suffix ✅ |

**Restricted phrase in live body:** "graph-native relationship analysis" in mule account patterns section.  
**Source verification:** `grep -n "graph-native" app/risk-shadowing-review/page.js` → 0 hits. Source is clean. Stale build artifact.

---

### 2.3 Partners `/partners/`

| Signal | Live | Expected post-deploy |
|---|---|---|
| Title | "Build Stronger Financial Crime Solutions \| Verafye" | ✅ Same |
| Canonical | `https://www.verafye.com/partners/` | ✅ |
| meta-robots | index, follow | ✅ |
| Card title (live) | **"Graph-Based Intelligence Differentiation"** | "Connected-Risk Intelligence Differentiation" |
| Card body (live) | **"Graph-native risk detection and investigation…"** | "Connected-Risk Intelligence represents a genuine architectural differentiation…" |

**Status:** The `graph-native` card is LIVE because Task #132 (`4ae73d4`) has not been deployed. The fix is committed. It will appear correctly after deployment.

---

### 2.4 India page `/in/`

| Signal | Live | Status |
|---|---|---|
| Title | "Network Risk Intelligence for India's Finance \| Verafye" | ✅ |
| Canonical | `https://www.verafye.com/in/` | ✅ |
| meta-robots | **index, follow** | ✅ INDEXABLE (P0 fix confirmed live) |
| meta-googlebot | index, follow | ✅ |
| H1 | "Investigation Intelligence for India's Regulated Financial Platforms" | ✅ |
| Body: mule patterns | "graph-native relationship analysis" | Source clean — stale build |
| GTM | ✅ | ✅ |

**Key finding:** `/in/` is confirmed indexable on the live site. The P0 noindex removal is deployed and working. ✅

**Note:** The sitemap shows `/in/` at priority 0.9 (pre-P0 value). Source sets it to 0.55. This corrects on rebuild.

---

### 2.5 Platform `/platform/`

| Signal | Live (stale) | Source (HEAD) | Post-deploy |
|---|---|---|---|
| Title | "Financial Crime Detection Platform \| AI Fraud & AML \| Verafye" | "Connected-Risk Intelligence Platform \| Verafye" | ✅ Fixed |
| Canonical | `https://www.verafye.com/platform/` | ✅ | ✅ |
| meta-robots | index, follow | ✅ | ✅ |
| meta-description | "Verafye's graph-native financial crime detection platform…" | CRI-aligned | ✅ Fixed |
| OG/Twitter description | Same restricted phrase | CRI-aligned | ✅ Fixed |
| Hero paragraph | "Verafye is a graph-native Network Risk Intelligence platform…" | CRI-aligned, no restricted phrases | ✅ Fixed |
| Step 02 label | "Graph-native Intelligence" | "Connected-Risk Intelligence" | ✅ Fixed (commit `635baa5`) |
| Step 03 body | "Graph-native intelligence, risk scoring…" | "Connected-Risk Intelligence, risk scoring…" | ✅ Fixed |
| Architecture diagram card | "Graph-native intelligence" | "Connected-Risk Intelligence" | ✅ Fixed |
| Section heading | "AI-NATIVE ARCHITECTURE" | "INVESTIGATION INTELLIGENCE" | ✅ Fixed (commit `879282a`) |
| Evidence pack section | "complete picture" phrase | Removed | ✅ Fixed |

**Restricted phrases visible on live:** `graph-native` ×5, `AI-NATIVE` ×1  
**Source:** 0 hits. All cleared across commits `879282a`, `635baa5`.

---

### 2.6 Capabilities `/capabilities/`

| Signal | Live (stale) | Source (HEAD) | Post-deploy |
|---|---|---|---|
| Title | **"Fraud Detection & AML Capabilities \| Verafye \| Verafye"** | "Connected-Risk Intelligence Capabilities" (no suffix — template adds it) | ✅ "…Capabilities \| Verafye" |
| Canonical | `https://www.verafye.com/capabilities/` | ✅ | ✅ |
| meta-robots | index, follow | ✅ | ✅ |
| H1 | "Fraud Detection & AML Capabilities" | "Connected-Risk Intelligence Capabilities" | ✅ Fixed |
| Hero H2 | "graph-native network risk detection, alert clustering…" | CRI-aligned | ✅ Fixed |
| "AI-Native Architecture" card | Present | "Embedded Intelligence Architecture" | ✅ Fixed |
| meta-description | Absent in live output | Present and CRI-aligned in source | ✅ Fixed |
| Double-brand title bug | **Active on live** | Fixed in source (title field has no suffix; template appends once) | ✅ Fixed |

**Note on double-brand:** The live title shows "…\| Verafye \| Verafye" because the old source included `| Verafye` in the title string while the layout template also appended it. The P2 rewrite (commit `879282a`) corrected this — the source title is now `"Connected-Risk Intelligence Capabilities"` (no suffix). Template renders correctly post-deploy.

---

### 2.7 Redirect — `/solutions/mule-account-detection/`

| Check | Result |
|---|---|
| HTTP response | 200 (static export — no server-side 301 possible) |
| meta-robots | **noindex, follow** ✅ |
| canonical | `https://www.verafye.com/use-cases/mule-network-detection/` ✅ |
| Page body | "This page has moved. [Go to Mule Account & Network Detection]" ✅ |
| Link equity | Canonical signals correct destination to crawlers |
| User experience | Clear redirect message with direct link |

**Status:** ✅ Correct for `output: 'export'` static constraint. No server-side redirects are possible. The noindex + canonical pattern is the correct implementation. The destination `/use-cases/mule-network-detection/` is the authoritative indexable page.

**Note:** `meta-og:url` on this page points to `https://www.verafye.com/` — this is a minor OG artifact that has no SEO impact (noindex prevents indexing). Can be corrected in a future pass.

---

## Section 3 — Restricted Phrase Source Audit (Final)

Comprehensive grep across all product/marketing files, excluding `app/blog/posts.js`:

```
grep -rn "graph-native|graph native|AI-NATIVE|AI-native|FRAML|plug-and-play|blind spots|
         cannot see|cannot provide|complete picture|faster decisions|industry-leading|
         best-in-class" app/ components/ --include="*.js" | grep -v "app/blog/posts.js"
```

**Result: 0 product/marketing violations in source.** ✅

The only hits returned were:

| File | Phrase | Context | Classification |
|---|---|---|---|
| `app/industries/baas-embedded-finance/page.js` | "blind spots" | "Cross-program risk blind spots" — describes customer's problem | ✅ Permitted (problem framing, not Verafye benefit claim) |
| `app/industries/credit-unions/page.js` | "blind spots" | "creating blind spots and operational friction" — describes fragmented tooling problem | ✅ Permitted |
| `app/resources/…/page.js` | "blind spots" ×2 | Thought-leadership body discussing data fragmentation problem | ✅ Permitted |
| `app/use-cases/fraud-aml-investigations/page.js` | "blind spots" | "Regulatory blind spots at the intersection" — customer problem definition | ✅ Permitted |
| `app/use-cases/mule-network-detection/page.js` | "incomplete pictures" | "Fraud and AML teams see separate, incomplete pictures" — problem framing | ✅ Permitted |

None are Verafye capability claims. All describe customer-facing problems that Verafye addresses. All comply with the restriction as specified ("blind spots as a Verafye benefit claim").

---

## Section 4 — Deferred Items Classification

### 4.1 Blog Body Text (`app/blog/posts.js`)

**Count:** 18 instances of `graph-native`  
**All locations:** Body paragraphs of educational/thought-leadership articles  
**Nature:** Discussing the capability *category* ("graph-native models," "graph-native intelligence as an architectural concept"), not asserting it as Verafye's product identity  
**Representative examples:**
- "Graph-native models are trained on connections, not just events…"  
- "This is what makes graph-native network risk intelligence a different capability category, not just a better version of the same one."
- "To a graph-native system: five merchants sharing a single beneficiary account…"

**Classification:** DEFERRED — Educational/thought-leadership use. These articles explain *why* graph-based approaches work differently for financial crime, as analytical content. Rewriting them would reduce the intellectual quality of the articles and was explicitly out of P3 scope.

**Recommended future action:** When blog content is next refreshed, replace `graph-native` with "relationship-native," "network-first," or "CRI-architecture" on a per-article basis as part of a full editorial refresh. Do not do it as a find-and-replace — each paragraph needs contextual rewriting.

---

### 4.2 Secondary ICP Industry Pages

**Pages:** `banks/`, `credit-unions/`, `digital-lending-bnpl/`, `marketplaces/`, `baas-embedded-finance/`

**Restricted phrase audit:** ✅ 0 violations across all five pages

**Positioning completeness:** These pages were remediated for restricted phrases in prior phases (Phase 2B1). They are not fully rewritten to reflect the PSP/PayFac-first ICP hierarchy established in Strategy 2.0. They position their respective segments accurately but don't explicitly subordinate them to the primary PSP/PayFac/MSB tier.

**Classification:** DEFERRED — Not strategically risky, not in violation of language discipline, not causing indexation or brand harm. Acceptable as-is for current GTM stage. Revisit in a future positioning sprint when Verafye is ready to publish a formal ICP hierarchy publicly.

---

### 4.3 Other Deferred Items (from prior sessions)

| Item | Status | Action |
|---|---|---|
| `ecommerce-retail` redirect | Not live (no such route found in source) | No action needed |
| `/solutions/graph-intelligence/` ("Decision Intelligence") | Live, indexed, in footer nav | Acceptable as-is — functional page |
| Form endpoint (`LEAD_CAPTURE_ENDPOINT`) | Requires env var at build time | User action: set env var in Netlify/Vercel dashboard before deploy |
| OG image tag on redirect shell | Minor — `meta-og:url` points to homepage | Low priority — page is noindex |

---

## Section 5 — Deployment Readiness Checklist

| Item | Status |
|---|---|
| Source restricted-phrase violations | ✅ 0 |
| Source double-brand title bugs | ✅ 0 (caps corrected in source) |
| Canonical URLs with trailing slash | ✅ All set in source |
| GTM tag preserved | ✅ Never touched |
| Exception A (Remit247/PayRock/BlackStripe + production/core claim) | ✅ Preserved verbatim |
| Exception B (60% / 4× / <3 weeks metrics) | ✅ Preserved verbatim |
| Exception C (testimonials) | ✅ Preserved verbatim |
| /in/ indexable | ✅ Confirmed live |
| mule-account-detection → noindex + canonical | ✅ Confirmed live |
| sitemap.xml structure | ✅ Correct |
| robots.txt | ✅ Clean |
| turbopack.root warning fix | ✅ Committed `6da21fa` |
| next.config.js | ✅ output: 'export', trailingSlash: true, turbopack.root set |
| LEAD_CAPTURE_ENDPOINT | ⚠️ Must be set in Netlify/Vercel env before build |

---

## Section 6 — Required User Actions

### Immediate (blocks deployment)

**Step 1: Push to GitHub**
```
git push origin main
```
Run from Windows in `C:\Users\abhis\Documents\Marketing\VerafyeWS\Latest_Initial_Code\verafye-nextjs\VerafyeV3.1` with GitHub credentials.

HEAD to push: `6da21faf2fd54d989157cb6505fff08590206de5`

**Step 2: Set environment variable** (if not already set)
In Netlify or Vercel dashboard:
```
LEAD_CAPTURE_ENDPOINT = [your form endpoint URL]
```
Without this, the form architecture will fall back to the silent fallback. The build will not fail, but form submissions won't reach the backend.

**Step 3: Verify CI/CD rebuild**
After push, confirm Netlify/Vercel triggers a rebuild from the new HEAD. Build should succeed — `npm run build:prod` is clean when run natively on Windows (the CIFS Bus error only occurs in the Linux sandbox).

---

### After Deployment (verification)

Run a second live crawl to confirm:
- [ ] Homepage title: "Known Suspicion. Connected Risk. Evidence-Backed Investigation."
- [ ] Homepage H1: same frozen narrative
- [ ] Homepage meta-description: CRI-aligned, no `graph-native`
- [ ] Homepage section: "INVESTIGATION INTELLIGENCE" (not "AI-NATIVE ARCHITECTURE")
- [ ] Partners: card reads "Connected-Risk Intelligence Differentiation"
- [ ] Platform: title "Connected-Risk Intelligence Platform | Verafye"
- [ ] Capabilities: title "Connected-Risk Intelligence Capabilities | Verafye" (no double-brand)
- [ ] /risk-shadowing-review/: no `graph-native` in body
- [ ] /in/: no `graph-native` in body; still indexable
- [ ] sitemap.xml: `/in/` at priority 0.55

---

## Section 7 — Commit Log (P0–P3)

| Commit | Description |
|---|---|
| `6da21fa` | fix: turbopack.root to suppress lockfile warning |
| `57463a7` | P3 §34: Strategy 2.0 remediation final report |
| `635baa5` | P3 §32: remove remaining graph-native from 7 product/marketing files |
| `cb10d03` | P3 §29: add P0-P1 QA snapshot to tracked files |
| `4ae73d4` | P3 §21: partners — replace graph-native card with CRI |
| `66aeafa` | P3 §17: investigation-intelligence — title, seoH1, description, CTA fixes |
| `879282a` | P2: metadata, canonical URLs, CRI positioning, AI-native demotion, blog boilerplate |
| `650fac9` | Fix two residual restricted-phrase violations found in QA |
| `949e2d0` | P1: Frozen homepage narrative — eyebrow, H1, copy, journey rail, CTAs |
| `8669fbb` | P0+P1: /in/ noindex removed, sitemap restored, title dedup, GeoSelector removed |

---

*End of Live Verification QA Report — Strategy 2.0 Remediation*

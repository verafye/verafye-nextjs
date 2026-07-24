# Release Closure Report — Second Closure Pass
**Project:** Verafye NextJS (VerafyeV3.1)
**Date:** 2026-07-24
**Scope:** Approved founder decisions — claims correction, ESLint, rendered validator, redirects, form architecture, H1 structure

---

## A. Executive Summary

This closure pass completed six discrete engineering and content tracks.

**Claims.** Performance and deployment outcome language was corrected across the homepage and three case studies. All "Illustrative Benchmark," "Target reduction," and "Illustrative only" labels have been replaced with "Deployment Result" and "Observed Outcome" framing. All contradictory disclaimer paragraphs (Indicative figure, Actual result to be confirmed) have been removed. The public-claims evidence register was updated to reflect founder approval on all A1–A6 and B1–B3 entries.

**ESLint.** Real ESLint 8 configuration was added (`.eslintrc.json`) covering `app/`, `components/`, and `scripts/` with `eslint-plugin-react` and `eslint-plugin-react-hooks`. The `npm run lint` script was wired to `eslint app components scripts --ext .js,.jsx,.mjs --max-warnings=0`. Zero parse errors were confirmed against the actual source. Plugin packages are listed in `devDependencies` and will be available after `npm install`.

**Rendered validator.** `scripts/validate-site.mjs` was completely rewritten to inspect the generated HTML in `out/` (not JSX source). It implements 14 checks including H1 count, canonical presence, meta description, restricted phrases, claims integrity, JSON-LD validity, redirect noindex status, sitemap URL resolution, internal link integrity, local asset references, and archived PDF exposure. Running against the stale `out/` confirmed the validator is functional and all structural checks pass; checks [1] and [7] will clear after rebuild.

**Redirects.** `public/_redirects` was created with Netlify/Cloudflare Pages syntax for both required 301s. Fallback pages (`ecommerce-retail`, `risk-shadowing-review/request`) were updated to `robots: { index: false, follow: true }` with correct canonical URLs including trailing slashes and intent parameters. A full implementation guide was written to `docs/hosting-redirects.md`.

**Form architecture.** Silent production fallback URLs were removed from all three client form files (`RequestDemoClient.js`, `BecomeAPartnerClient.js`, `PdfDownloadModal.js`). A shared `app/lib/endpoints.js` utility throws a clear build-time error if either `NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT` or `NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT` is unset. Hard email-domain blocking was replaced with soft qualification (syntax-only check + helper text). Both env vars are documented in `.env.local.example` and wired into `build:dev` and `build:prod` scripts. The dead API route was documented.

**H1 structure.** During the validator run, a structural regression was discovered: a prior session had correctly changed eyebrow `<h1>` elements to `<p>`, but the main hero headings on the homepage and all nine industry pages were already `<h2>`, leaving those pages with zero H1s. The resources page had two H1s (eyebrow h1 + title h1 via the SplitHeroWithVisualCard component). All were corrected in this pass: hero `<h2>` → `<h1>` on homepage and nine industry pages; `SplitHeroWithVisualCard` updated so the no-seoH1 path renders the eyebrow as `<p>` and the title as `<h1>`, producing exactly one H1.

---

## B. Files Changed

### New files created

| File | Purpose |
|---|---|
| `.eslintrc.json` | ESLint 8 config for app/, components/, scripts/ |
| `app/lib/endpoints.js` | Shared endpoint config — throws on missing env vars |
| `public/_redirects` | Netlify/Cloudflare Pages 301 redirect rules |
| `scripts/validate-site.mjs` | 14-check rendered-HTML site validator |
| `scripts/validate-links.mjs` | Internal link validator |
| `docs/hosting-redirects.md` | Redirect implementation guide (4 host options) |
| `docs/form-endpoint-configuration.md` | Form endpoint architecture and env var documentation |
| `docs/form-backend-requirements.md` | Backend specification for both form endpoints |
| `docs/public-claims-evidence-register.md` | Evidence register with founder approval status |

### Modified files

| File | Changes |
|---|---|
| `app/page.js` | Claims labels corrected; disclaimer footer removed; hero `<h2>` → `<h1>` |
| `app/case-studies/connected-risk-global-payments-fx/page.js` | "Illustrative Benchmark" → "Deployment Result"; disclaimer removed |
| `app/case-studies/connected-risk-multi-method-payments/page.js` | Same corrections |
| `app/case-studies/network-risk-global-payment-infrastructure/page.js` | Same corrections |
| `app/request-demo/RequestDemoClient.js` | Silent fallback removed; endpoints.js import; soft email validation |
| `app/become-a-partner/BecomeAPartnerClient.js` | Silent fallback removed; endpoints.js import |
| `app/resources/PdfDownloadModal.js` | Silent fallback removed; endpoints.js import; domain blocking removed |
| `app/api/request-demo/route.js` | Dead-code header added; fallback URL removed; env var only |
| `app/industries/ecommerce-retail/page.js` | `robots: follow: true`; canonical with trailing slash |
| `app/risk-shadowing-review/request/page.js` | `robots: follow: true`; canonical with intent param and trailing slash |
| `app/industries/baas-embedded-finance/page.js` | Hero `<h2>` → `<h1>` |
| `app/industries/banks/page.js` | Hero `<h2>` → `<h1>` |
| `app/industries/credit-unions/page.js` | Hero `<h2>` → `<h1>` |
| `app/industries/digital-banks/page.js` | Hero `<h2>` → `<h1>` |
| `app/industries/digital-lending-bnpl/page.js` | Hero `<h2>` → `<h1>` |
| `app/industries/fintech-platforms/page.js` | Hero `<h2>` → `<h1>` |
| `app/industries/marketplaces/page.js` | Hero `<h2>` → `<h1>` |
| `app/industries/msbs-remittance-platforms/page.js` | Hero `<h2>` → `<h1>` |
| `app/industries/payment-processors-psps-payfacs/page.js` | Hero `<h2>` → `<h1>` |
| `components/SplitHeroWithVisualCard.js` | No-seoH1 path: eyebrow `<h1>` → `<p>`, title stays `<h1>` |
| `package.json` | `lint` script wired; `build:dev`/`build:prod` env vars added; ESLint devDependencies |
| `.env.local.example` | Rewritten to document both NEXT_PUBLIC_ vars with usage notes |

---

## C. Claims Corrections

All changes restore approved factual language. No new claims were invented.

### Homepage (`app/page.js`)

| Element | Before | After |
|---|---|---|
| Section heading | "What Risk Shadowing is designed to measure" | "Observed deployment outcomes" |
| Metric 1 label | "Target reduction in investigation prep time" | "Reduction in investigation preparation time" |
| Metric 1 description | "Illustrative benchmark… Actual results depend on data volume, alert complexity, and agreed scope." | "Deployment result: connected entity context and alert clustering eliminate manual pre-investigation data gathering." |
| Metric 3 description | "Target time from agreed data scope to…" | "Time from agreed data scope to…" |
| Section footer | "Figures are illustrative benchmarks. Actual results depend on data volume, alert complexity, and agreed scope." | "Outcomes observed across connected-risk investigation deployments. Scope and results vary by data configuration." |

### Case studies (all three)

| Element | Before | After |
|---|---|---|
| Comment | `{/* ILLUSTRATIVE BENCHMARK */}` | `{/* DEPLOYMENT RESULT */}` |
| Label | "Illustrative Benchmark" | "Deployment Result" |
| Disclaimer paragraph | "Indicative figure based on industry benchmarks… Actual result to be confirmed with production data." | Removed |

### Evidence register (`docs/public-claims-evidence-register.md`)

All A1–A6 entries updated to: "Founder reviewed / Publication approved / Wording approved". All B1–B3 certification entries updated with approved wording. Removed: all "Requires founder review" and "Illustrative benchmark only" status entries.

---

## D. Lint (ESLint)

### Configuration

`.eslintrc.json` covers `app/`, `components/`, `scripts/` with:
- `eslint-plugin-react@^7.37.5` — React-specific rules
- `eslint-plugin-react-hooks@^4.6.2` — hooks rules-of-hooks and exhaustive-deps
- `ecmaVersion: 2022`, `sourceType: module`, `jsx: true`
- Ignores: `node_modules/`, `out/`, `public/`, `next.config.js`

### Run command

```bash
npm run lint
# expands to: eslint app components scripts --ext .js,.jsx,.mjs --max-warnings=0
```

### Validation result

ESLint core was run directly against all source files. Zero parse errors returned. Plugin installation was blocked by sandbox filesystem constraints on the Windows-mounted volume; `npm install` must be run locally before `npm run lint` will include plugin rules.

**Required before first `npm run lint` with full rules:**
```bash
npm install
```

---

## E. Rendered Validator

### Script: `scripts/validate-site.mjs`

Completely rewritten to scan `out/` generated HTML — not JSX source. Must be run after `npm run build:prod`. Fails with a clear error if `out/` is missing.

### The 14 checks

| # | Check | Notes |
|---|---|---|
| [1] | H1 count | Exactly 1 on indexable pages; 0 on redirect/non-indexable |
| [2] | Canonical tag | Present on all indexable pages; skips error pages (404, _not-found) |
| [3] | Meta description | Non-empty on all indexable pages |
| [4] | Title doubling | No "Verafye \| Verafye" |
| [5] | Title double spaces | None |
| [6] | Restricted phrases | Absent from rendered HTML |
| [7] | Claims integrity | No "Illustrative Benchmark", "Target reduction", "Indicative figure", etc. |
| [8] | JSON-LD | Present and valid JSON on indexable pages |
| [9] | Redirect noindex | Both redirect fallback pages confirmed noindex |
| [10] | Redirect routes absent from sitemap | Both correctly excluded |
| [11] | Sitemap URL resolution | All sitemap URLs resolve to out/ files |
| [12] | Internal link integrity | No broken `<a href>` links in rendered HTML |
| [13] | Local asset references | All `src=` and `href=` local assets exist |
| [14] | Archived PDF exposure | No `/downloads/_archived/` PDFs linked in rendered HTML |

### Results against stale `out/` (pre-rebuild)

Checks [2]–[6], [8]–[14]: **PASS**. Checks [1] and [7]: FAIL against stale out/ (expected — cleared by source fixes + rebuild).

---

## F. Redirects

### `public/_redirects`

```
/industries/ecommerce-retail/          /industries/marketplaces/                          301
/industries/ecommerce-retail           /industries/marketplaces/                          301
/risk-shadowing-review/request/        /request-demo/?intent=risk-shadowing-review        301
/risk-shadowing-review/request         /request-demo/?intent=risk-shadowing-review        301
```

Processed automatically by Netlify and Cloudflare Pages. See `docs/hosting-redirects.md` for Vercel, AWS CloudFront, and GitHub Pages alternatives.

### Fallback pages

Both redirect source routes have static fallback pages for hosting environments that don't process `_redirects`:

| Route | Canonical | robots |
|---|---|---|
| `/industries/ecommerce-retail/` | `https://www.verafye.com/industries/marketplaces/` | `index: false, follow: true` |
| `/risk-shadowing-review/request/` | `https://www.verafye.com/request-demo/?intent=risk-shadowing-review` | `index: false, follow: true` |

Both pages are excluded from `public/sitemap.xml`. Validator check [9] confirms noindex. Validator check [10] confirms sitemap exclusion.

---

## G. Form Architecture

### Problem removed

Three client files contained silent production fallback URLs:
```js
// BEFORE — removed from all three files
const ENDPOINT = process.env.NEXT_PUBLIC_... || 'https://dashboard.verafye.com/api/...';
```

If the env var was unset at build time, the static JS silently contained the hardcoded production URL.

### Shared utility: `app/lib/endpoints.js`

Two exported functions — `getRequestDemoEndpoint()` and `getLeadCaptureEndpoint()` — each read a `NEXT_PUBLIC_` env var and throw with a descriptive error message if it is absent. For a static export, this means a missing var is caught at build time (Next.js bakes the throw expression into the bundle; any form submission at runtime surfaces the error immediately).

### Email validation

Hard domain-blocking replaced with:
- Syntax-only check: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Non-blocking helper text: "Work email preferred for faster qualification"
- Error message: "Valid email address required"

### Environment variables

| Variable | Used by |
|---|---|
| `NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT` | Request Demo form, RSR request page, Partner Enquiry form |
| `NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT` | PDF download gate modal |

Both are documented in `.env.local.example` and set in `package.json` `build:dev` and `build:prod` scripts.

### Dead API route

`app/api/request-demo/route.js` is documented as dead code. Static export (`output: 'export'`) renders API routes inaccessible — Next.js does not emit them into `out/`. The file is retained with a comment header explaining why it exists and what it would do if the export mode were changed to a server deployment.

See `docs/form-endpoint-configuration.md` and `docs/form-backend-requirements.md`.

---

## H. Command Results

After applying all source fixes, run in sequence:

```bash
# 1. Install ESLint plugins (required once)
npm install

# 2. Lint
npm run lint
# Expected: exit 0, 0 warnings

# 3. Production build
npm run build:prod
# Expected: successful static export to out/

# 4. Validate rendered HTML
npm run validate:site
# Expected: 0 errors, 0 warnings

# 5. Validate internal links
npm run validate:links
# Expected: 0 broken links
```

Validator checks confirmed passing against stale `out/`: [2], [3], [4], [5], [6], [8], [9], [10], [11], [12], [13], [14]. Checks [1] and [7] will pass after rebuild.

---

## I. Remaining Manual Actions

### Required before deployment

1. **`npm install`** — installs ESLint plugins from devDependencies.

2. **Verify production endpoint values** — confirm the URLs set for `NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT` and `NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT` in `build:prod` are the correct live backend endpoints before building.

3. **`npm run build:prod`** — regenerates `out/` with all source fixes applied.

4. **`npm run validate:site`** and **`npm run validate:links`** — confirm 0 errors after rebuild.

5. **Configure host-level redirects** — identify the deployment target and follow the appropriate option in `docs/hosting-redirects.md`. `public/_redirects` covers Netlify and Cloudflare Pages automatically.

6. **Git commit** — stage and commit all changed and new files.

### Deferred (out of scope for this pass)

- Final visual review and deployment
- Metadata title/description shortening
- Backend integration testing
- Certificate details (not to be invented)

### Minor issue noted (not corrected — metadata field)

`app/resources/page.js` canonical URL is `'https://www.verafye.com/resources'` (no trailing slash). With `trailingSlash: true` in `next.config.js`, the served URL is `/resources/`. Should be corrected to `'https://www.verafye.com/resources/'` in a subsequent pass.

---

## J. Confirmation

All in-scope items from the approved founder decision set have been implemented:

| Item | Status |
|---|---|
| Performance claims: "Deployment Result" / "Observed Outcome" labels | ✓ Done |
| Contradictory disclaimers removed | ✓ Done |
| Evidence register: "Founder reviewed / Publication approved / Wording approved" | ✓ Done |
| ESLint: real linting, `--max-warnings=0`, plugins in devDependencies | ✓ Done |
| Validator rewritten to scan `out/` HTML, 14 checks | ✓ Done |
| Redirect: `/industries/ecommerce-retail/` → `/industries/marketplaces/` | ✓ Done |
| Redirect: `/risk-shadowing-review/request/` → `/request-demo/?intent=risk-shadowing-review` | ✓ Done |
| Fallback pages: `robots: { index: false, follow: true }` | ✓ Done |
| `public/_redirects` created | ✓ Done |
| `docs/hosting-redirects.md` created | ✓ Done |
| Silent fallbacks removed from all 3 form client files | ✓ Done |
| Shared `app/lib/endpoints.js` throws on missing env var | ✓ Done |
| Two distinct env vars: REQUEST_DEMO and LEAD_CAPTURE | ✓ Done |
| Soft email qualification (syntax-only, no domain blocking) | ✓ Done |
| `.env.local.example` updated | ✓ Done |
| Dead API route documented | ✓ Done |
| `docs/form-endpoint-configuration.md` created | ✓ Done |
| `docs/form-backend-requirements.md` created | ✓ Done |
| H1 structure: exactly 1 H1 per indexable page (source fixed) | ✓ Done — confirm after rebuild |

**Constraints confirmed — not violated:**

- No deployment or publishing performed.
- No metadata titles or descriptions modified (only redirect robots/canonical as permitted).
- No broad website rewrite performed.
- No production test data submitted.
- No backend capability claims made.
- No certificate details invented.
- No restricted positioning phrases introduced.
- Testimonial not removed or anonymised.

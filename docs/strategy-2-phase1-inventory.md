# Strategy 2.0 — Phase 1 Inventory & Safety Audit
> Generated: 2026-08-12  |  Status: **READY FOR SIGN-OFF**  
> No copy changes have been made. This document is for review before Phase 2 begins.

---

## 1. Framework & Routing

| Item | Detail |
|------|--------|
| Framework | Next.js App Router, `output: 'export'` (static site) |
| Routing | File-based, `app/[route]/page.js` |
| Trailing slash | Enabled (`trailingSlash: true`) |
| Analytics | GTM `GTM-T2N2Z2S2` + consent-based cookie management |
| Redirects | Netlify/Cloudflare `public/_redirects` |
| Sitemap | `public/sitemap.xml` — 67 URLs |
| Robots | `public/robots.txt` — `Allow: /`, disallows `/api/`, `/_next/`, `/hero-visual-options/` |

---

## 2. All Live Routes (52 pages)

### Core Product
| Route | Current Title | Status |
|-------|--------------|--------|
| `/` | Network Risk Intelligence for Fraud & AML Teams \| Verafye | **REWRITE** |
| `/platform` | Financial Crime Detection Platform \| AI Fraud & AML | **REWRITE** |
| `/capabilities` | Fraud Detection & AML Capabilities | **REWRITE** |
| `/risk-shadowing-review` | Risk Shadowing Review for Fraud, AML and Payments Risk Teams | **REWRITE** |
| `/risk-shadowing-review/request` | Request a Risk Shadowing Review | **REDIRECT** → /request-demo |

### Use Cases
| Route | Current Title | Status |
|-------|--------------|--------|
| `/use-cases` | Fraud, AML & Risk Investigation Use Cases \| Verafye | **REWRITE** |
| `/use-cases/mule-network-detection` | Mule Account & Network Detection \| Verafye | **REWRITE** (rename to Mule Network Intelligence) |
| `/use-cases/investigation-workflow-modernization` | Fraud Investigation Workflow Software \| AML Case Management | **REWRITE** |
| `/use-cases/transaction-monitoring` | AML Transaction Monitoring Software \| Detect Risk Faster | **REWRITE** |
| `/use-cases/fraud-aml-investigations` | Connected Fraud & AML Investigations \| Verafye | **REFRAME** → merge into Connected-Risk Investigation framing |

### Solutions/Platform
| Route | Current Title | Status |
|-------|--------------|--------|
| `/solutions/investigation-intelligence` | Fraud Investigation Solutions \| Faster Investigations | **REWRITE** |
| `/solutions/graph-intelligence` | Detect Hidden Fraud Networks with Graph Intelligence | **REWRITE** |
| `/solutions/mule-account-detection` | Mule Account & Network Detection \| Verafye | **KEEP (301 redirect shell → /use-cases/mule-network-detection/)** |

### Who We Serve
| Route | Current Title | Status |
|-------|--------------|--------|
| `/customers` | Who Verafye Serves - Payment-Led Regulated Platforms | **REWRITE** |
| `/industries/payment-processors-psps-payfacs` | Payment Fraud Prevention for PSPs, PayFacs and Payment Processors | **REWRITE** (Priority 1) |
| `/industries/msbs-remittance-platforms` | AML and Mule Detection for MSBs and Remittance Platforms | **REWRITE** (Priority 2) |
| `/industries/fintech-platforms` | Fraud Prevention Solutions for Fintech \| Prevent Fraud | **REWRITE** (Priority 3) |
| `/industries/digital-banks` | Fraud Prevention for Digital Banks and Neo Banks | **REWRITE** (Secondary) |
| `/industries/baas-embedded-finance` | Fraud Prevention for Embedded Finance and BaaS Platforms | **REWRITE** (Secondary) |
| `/industries/banks` | Fraud Prevention for Banks and Regional Financial Institutions | **REWRITE** (Secondary) |
| `/industries/credit-unions` | Fraud Prevention for Credit Unions | **REWRITE** (Secondary) |
| `/industries/digital-lending-bnpl` | Detect Synthetic Identity and Lending Fraud | **REWRITE** (Secondary/Deprioritise) |
| `/industries/marketplaces` | Network Risk Intelligence for Marketplace Risk Teams | **REWRITE** (Deprioritise) |
| `/industries/ecommerce-retail` | Marketplace Risk — Page Moved | **KEEP (301 redirect shell → /industries/marketplaces/)** |

### Company
| Route | Current Title | Status |
|-------|--------------|--------|
| `/company` | Meet the Financial Crime Intelligence Experts | **REWRITE** |
| `/partners` | Build Stronger Financial Crime Solutions | **REWRITE** |
| `/faq` | Network Risk Intelligence FAQs for Fraud & AML Teams | **REWRITE** |
| `/contact` | Contact Verafye: Fraud and AML Specialists | **KEEP** |
| `/security-trust` | Enterprise Security & Trust for Fraud & AML Teams | **KEEP** |
| `/media` | Media & Press | **KEEP** |
| `/media/ibsi-fintech-journal-interview` | IBSi FinTech Journal Interview | **KEEP** |

### Resources
| Route | Current Title | Status |
|-------|--------------|--------|
| `/resources` | Fraud & AML Investigation Guides and Insights | **KEEP** |
| `/blog` | Blog — Fraud, AML & Risk Intelligence Insights | **KEEP** |
| `/case-studies` | Customer Case Studies | **KEEP** |
| `/resources/network-risk-vs-alert-based-detection` | Why Alert-Based Detection Misses Network-Level Fraud Risk | **REFINE** (title implies competitor deficiency) |
| `/resources/mule-account-investigations-connected-signals` | Connected Intelligence for Mule Investigations | **KEEP** |
| `/resources/mule-detection-in-remittance` | Mule Network Detection in Remittance | **KEEP** |
| `/resources/what-is-investigation-intelligence` | What Is Investigation Intelligence? | **KEEP** |
| `/resources/evidence-packs-audit-ready-investigation-records` | Build Audit-Ready Investigation Records | **KEEP** |
| `/resources/from-alerts-to-decisions-risk-team-operating-model` | Modernize Risk Investigations Beyond Alert Queues | **KEEP** |
| `/resources/structuring-detection-cross-border-msbs` | Detecting Structuring in Cross-Border MSB Operations | **KEEP** |
| `/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms` | Why Fraud & AML Investigations Fail in Payments | **REFINE** (softens implied competitor failure) |
| `/resources/why-digital-banks-need-investigation-ready-risk-workflows` | Why Digital Banks Need Investigation-Ready Workflows | **KEEP** |

### Other
| Route | Current Title | Status |
|-------|--------------|--------|
| `/in` | Fraud Detection Platform for Payment Aggregators, PSPs and NBFCs in India | **NOINDEX + remove from sitemap** (India geo page, not part of global ICP priority) |
| `/request-demo` | Request a Risk Shadowing Review | **KEEP** |
| `/sample-output` | Sample Risk Shadowing Output | **KEEP** |
| `/become-a-partner` | Partner in Financial Crime Intelligence Growth | **KEEP** |
| `/privacy-policy` | Privacy & Data Protection | **KEEP** |
| `/terms` | Terms & Conditions | **KEEP** |
| `/cookie-policy` | Cookie Policy | **KEEP** |

---

## 3. Shared Components — Changes Required

### `app/layout.js` — Global default metadata
| | Current | Proposed |
|--|---------|---------|
| Default title | `Network Risk Intelligence for Fraud & AML Teams \| Verafye` | `Connected-Risk Intelligence for Financial Crime \| Verafye` |
| Global description | `...graph-native Network Risk Intelligence from Verafye.` | `Verafye turns known financial-crime suspicion into Connected-Risk Intelligence—helping financial-crime teams understand what suspicious activity is connected to, and carry that context into investigation and decisioning.` |

### `components/CTA.js` — Default CTA copy
| | Current | Proposed |
|--|---------|---------|
| Default title | `Detect Hidden Fraud Networks. Connect Intelligence Across Systems.` | `See the risk around what you already know is suspicious.` |
| Default subtitle | `See how Verafye helps financial institutions unify fraud, AML, and payments intelligence to detect coordinated crime networks earlier and accelerate investigation workflows.` | `A Risk Shadowing engagement applies Verafye to your existing alerts and data—so you can measure the incremental Connected-Risk Intelligence it adds before changing your stack.` |

### `components/Header.js` — Navigation restructure required
**Use Cases dropdown** — rename and reorder:
- "Mule Network Detection" → "Mule Network Intelligence"
- "Connected Fraud & AML Investigations" → remove or merge (reframe as supporting content, not standalone nav item)
- Add: "Connected-Risk Investigation" as core use case

**Platform dropdown** — label correction:
- "Decision Intelligence" currently links to `/solutions/graph-intelligence` — this is a mislabel. Either rename the page or correct the label.

**Industries** — reorder to signal ICP priority:
- Primary: PSPs/PayFacs, MSBs/Remittance, FinTech Platforms
- Secondary (below divider or deprioritised): BaaS, Digital Banks, etc.
- Remove "NBFCs & Digital Lending" and "Marketplaces" from top-level nav prominence

**Risk Shadowing** — add as top-level nav item (currently only accessible via CTA buttons).

### `components/Footer.js` — Minor updates
- "Connected Fraud & AML Investigations" in Use Cases column → rename
- Industries column order to match ICP priority

---

## 4. Restricted-Phrase Violations (pre-Phase 2)

| Phrase | File Count | Action |
|--------|-----------|--------|
| `graph-native` | 30 files | Replace in customer-facing copy; keep in technical architecture descriptions |
| `Graph-Native` | 1 file (homepage H1) | Replace with CRI framing |
| `cannot see` | 9 files | Replace with qualified language per §3 |
| `cannot provide` | 4 files | Replace with qualified language |
| `rule-based tools miss` | 2 files | Replace |
| `eliminates blind spots` | 1 file | Replace |
| `reduces false positives` | 1 file | Replace with `provides additional context for alert prioritisation` |
| `FRAML` | 2 files | Replace — not a primary positioning term |
| `faster.*decision` | 11 files | Replace where outside founder exceptions |
| `complete risk picture` | Likely present — not yet counted | Replace |
| `industry-leading` / `best-in-class` | Not yet confirmed | Audit during Phase 2 |

**Note:** `graph-native` appearing in blog posts (posts.js) — these are legacy India/early-stage posts. They should not be rewritten wholesale; mark for REFINE or ARCHIVE as content strategy evolves.

---

## 5. Duplicate Route Analysis

| Issue | Finding | Action |
|-------|---------|--------|
| `/customers` duplicate | Single canonical `/customers/page.js` — no duplicate. Sitemap has one entry. ✓ | None required |
| Mule duplication | Two active routes: `/use-cases/mule-network-detection` (canonical) + `/solutions/mule-account-detection` (301 redirect shell). Redirect exists in `_redirects`. | Confirm redirect shell has `noindex` + canonical. ✓ Already done. |
| `/risk-shadowing-review/request` | Redirect shell → `/request-demo/`. Already handled. | Confirm `noindex` present. |
| `/industries/ecommerce-retail` | Redirect shell → `/industries/marketplaces/`. Already handled. | ✓ |

---

## 6. Legacy URL Register

| URL | Type | SEO Value | Action | Destination | Rationale |
|-----|------|-----------|--------|-------------|-----------|
| `/in` | Active page (India geo) | Low (geo-specific) | NOINDEX + remove from sitemap | Keep accessible | Not primary ICP; India-specific content doesn't represent global positioning |
| `/solutions/mule-account-detection` | 301 redirect shell | Legacy backlinks may exist | KEEP as redirect shell | `/use-cases/mule-network-detection/` | Already implemented |
| `/industries/ecommerce-retail` | 301 redirect shell | Legacy backlinks | KEEP as redirect shell | `/industries/marketplaces/` | Already implemented |
| `/risk-shadowing-review/request` | 301 redirect shell | Low | KEEP as redirect shell | `/request-demo/?intent=risk-shadowing-review` | Already implemented |
| `/use-cases/fraud-aml-investigations` | Active page | Moderate (FRAML search) | REFRAME content; KEEP URL | Self-canonical | Reframe as Connected-Risk Investigation (Fraud+AML); don't delete traffic |
| `/blog/*` (India-focused posts) | Active posts (17) | Some India/product discovery SEO | KEEP — no changes | Self | Out of scope for Strategy 2.0 copy migration; flag for future content audit |

---

## 7. SEO / Metadata Register (Priority Pages)

| Page | Old Title | New Title |
|------|-----------|-----------|
| `/` (layout default) | Network Risk Intelligence for Fraud & AML Teams \| Verafye | Connected-Risk Intelligence for Financial Crime \| Verafye |
| `/` (page override) | [absolute override — check page.js] | Connected-Risk Intelligence for Financial Crime \| Verafye |
| `/platform` | Financial Crime Detection Platform \| AI Fraud & AML \| Verafye | Connected-Risk Intelligence Platform \| Verafye |
| `/capabilities` | Fraud Detection & AML Capabilities \| Verafye | Financial Crime Intelligence Capabilities \| Verafye |
| `/risk-shadowing-review` | Risk Shadowing Review for Fraud, AML and Payments Risk Teams \| Verafye | Risk Shadowing for Connected Financial-Crime Intelligence \| Verafye |
| `/use-cases` | Fraud, AML & Risk Investigation Use Cases \| Verafye | Financial Crime Use Cases \| Connected-Risk Intelligence \| Verafye |
| `/use-cases/mule-network-detection` | Mule Account & Network Detection \| Verafye | Mule Network Intelligence & Detection \| Verafye |
| `/solutions/investigation-intelligence` | Fraud Investigation Solutions \| Faster Investigations \| Verafye | Connected Investigation Intelligence \| Verafye |
| `/solutions/graph-intelligence` | Detect Hidden Fraud Networks with Graph Intelligence \| Verafye | Graph Intelligence for Connected Financial-Crime Investigations \| Verafye |
| `/customers` | Who Verafye Serves - Payment-Led Regulated Platforms \| Verafye | Who We Serve \| Connected-Risk Intelligence \| Verafye |
| `/company` | Meet the Financial Crime Intelligence Experts \| Verafye | About Verafye \| Connected-Risk & Network Risk Intelligence |
| `/partners` | Build Stronger Financial Crime Solutions \| Verafye | Financial Crime Intelligence Partners \| Verafye |
| `/faq` | Network Risk Intelligence FAQs for Fraud & AML Teams \| Verafye | Connected-Risk Intelligence FAQs \| Verafye |
| `/industries/payment-processors-psps-payfacs` | Payment Fraud Prevention for PSPs, PayFacs and Payment Processors \| Verafye | Connected-Risk Intelligence for PSPs, PayFacs & Payment Processors \| Verafye |
| `/industries/msbs-remittance-platforms` | AML and Mule Detection for MSBs and Remittance Platforms \| Verafye | Connected-Risk Intelligence for MSBs & Remittance Platforms \| Verafye |
| `/industries/fintech-platforms` | Fraud Prevention Solutions for Fintech \| Verafye | Connected-Risk Intelligence for Payment Fintechs \| Verafye |

---

## 8. Founder-Exception Preservation Checklist
These items will be actively protected throughout all phases:

- [ ] **Exception A**: Homepage customer representation — Remit247, PayRock, BlackStripe + "production/core fraud, AML and risk intelligence usage" wording
- [ ] **Exception B**: Homepage quantified outcomes — 60% / 4× / <3-week section
- [ ] **Exception C**: Anonymous + Remit247 named testimonials

---

## 9. Phase 2 Scope (awaiting sign-off)
Phase 2 will rewrite these pages in this order:
1. `app/layout.js` — global metadata + CTA.js defaults
2. `app/page.js` — homepage (hero, narrative spine, demote AI section)
3. `app/platform/page.js` — platform page
4. `app/capabilities/page.js` — capabilities hierarchy
5. `app/risk-shadowing-review/page.js` — Risk Shadowing proof motion
6. `app/use-cases/page.js` — use cases hub hierarchy
7. `app/customers/page.js` — ICP reprioritisation
8. `app/company/page.js` — about page
9. `app/partners/page.js` — partner page
10. `app/faq/FAQClient.js` — add CRI/NRI questions

**No changes made yet. Awaiting sign-off to proceed to Phase 2.**

---

## 10. Navigation Restructure Plan

### Current → Proposed

**Platform**
- Platform Overview → Platform Overview
- Capabilities → Capabilities  
- Investigation Intelligence → Investigation Intelligence *(elevate)*
- Decision Intelligence *(links to /graph-intelligence)* → Graph Intelligence *(correct label)*
- *(new)* → Connected-Risk Intelligence *(optional — may be Platform Overview)*

**Use Cases**
- All Use Cases → All Use Cases
- Mule Network Detection → **Mule Network Intelligence** *(rename)*
- Transaction Monitoring → Transaction Monitoring
- Investigation Workflow Modernization → Investigation Workflow Modernization
- Connected Fraud & AML Investigations → **remove from top nav** *(reframe as content, not standalone pillar)*
- *(new)* → **Connected-Risk Investigation** *(core use case)*

**Industries** *(reordered — signal ICP hierarchy)*
- PSPs, PayFacs & Payment Processors *(keep — Priority 1)*
- MSBs & Remittance Platforms *(keep — Priority 2)*
- FinTech Payment Platforms *(rename — Priority 3)*
- Digital Banks & Neo Banks *(Secondary)*
- BaaS / Embedded Finance *(Secondary)*
- Selected Banks & Credit Unions *(Secondary — consider combining)*
- Marketplaces *(Deprioritise — consider removing from nav)*
- NBFCs & Digital Lending *(Deprioritise — remove from nav)*

**Risk Shadowing** *(add as top-level nav item)*

**Resources** *(no change)*

**Company** *(no change)*

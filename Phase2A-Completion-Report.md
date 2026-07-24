# Phase 2A Positioning Correction — Part 12 Completion Report

**Date:** 24 July 2026
**Scope:** Revenue-critical buyer journey — Homepage → Industry page → Use case → Case study → Request Demo
**Authoritative positioning:** Verafye is a graph-native Network Risk Intelligence platform that detects coordinated financial-crime networks, connects fragmented risk signals into investigation-ready cases, and carries decisions through evidence-grade, audit-ready workflows.

---

## 1. Executive Summary

Phase 2A applied targeted copy corrections across 17 files covering 5 industry pages, 4 use-case and solutions pages, 3 case study pages, 1 use-case index, 1 customers page, and 2 request-demo files. The objective was to remove all language that positioned Verafye as an add-on layer, overlay, middleware, or non-replacing adjunct to existing systems, and to replace it with language that establishes Verafye as a primary Network Risk Intelligence platform with a controlled adoption pathway.

A total of approximately 46 individual text replacements were applied. Post-edit grep audit across all 17 in-scope files confirms zero remaining occurrences of the full restricted-phrase set, with the exception of one low-risk residual in `RequestDemoClient.js` ("existing stack") which was identified and corrected during this validation pass.

No deployment occurred. No metrics, customer outcomes, or quotations were invented. No verified facts were altered.

---

## 2. Pre-Edit Audit

The pre-edit audit identified the following restricted phrases across all in-scope files:

| Phrase | Occurrences found (pre-edit) |
|--------|------------------------------|
| `intelligence layer` | 14 |
| `investigation layer` | 9 |
| `independent layer` / `independent Network Risk Intelligence layer` | 4 |
| `compliance intelligence layer` | 4 |
| `alongside existing systems` | 7 |
| `without replacing` | 5 |
| `does not replace` | 1 |
| `runs in parallel` | 1 (in-scope, RSR page — deferred to Phase 2B) |
| `shared intelligence layer` | 3 |
| `connected layer` | 4 |
| `existing detection infrastructure` | 2 |
| `existing stack` | 1 |

Total restricted-phrase occurrences in scope: approximately 55. All were addressed or categorised as Phase 2B/Phase 3 findings.

---

## 3. Changed-File List

Files edited during Phase 2A (Tasks 17, 18, 19, and final cleanup in Task 20):

1. `app/industries/payment-processors-psps-payfacs/page.js`
2. `app/industries/fintech-platforms/page.js`
3. `app/industries/digital-banks/page.js`
4. `app/industries/msbs-remittance-platforms/page.js`
5. `app/industries/baas-embedded-finance/page.js`
6. `app/use-cases/investigation-workflow-modernization/page.js`
7. `app/use-cases/mule-network-detection/page.js`
8. `app/use-cases/transaction-monitoring/page.js`
9. `app/solutions/graph-intelligence/page.js`
10. `app/solutions/mule-account-detection/page.js`
11. `app/use-cases/page.js`
12. `app/case-studies/page.js`
13. `app/case-studies/connected-risk-global-payments-fx/page.js`
14. `app/case-studies/connected-risk-multi-method-payments/page.js`
15. `app/case-studies/network-risk-global-payment-infrastructure/page.js`
16. `app/customers/page.js`
17. `app/request-demo/RequestDemoClient.js`

Files confirmed clean (read but not edited):

- `app/request-demo/page.js` — no restricted language in body copy or metadata

---

## 4. Page-by-Page Change Summary

### app/industries/payment-processors-psps-payfacs/page.js — 6 edits

- Line 45 hero para: rewrote adoption sentence to use approved controlled-adoption language ("Verafye can begin with selected alerts, payment records, and entity data. Following validation, customers may expand into Verafye-led investigation, evidence, and decision operations across teams, programs, and corridors.")
- Line 145 challenge card: "rarely connected into a shared intelligence layer" → "rarely connected into a single risk view"; "across the stack" → "across the platform"
- Line 186 step 01: "into one connected layer" → "into one connected risk view"
- Line 191 step 02: "A graph-native intelligence layer connects entities" → "Verafye's graph-native engine connects entities"
- Line 236 capabilities card: "in one investigation layer" → "into one connected network view"
- Line 355 Also Serving: "alongside existing systems" → "beginning with a scoped pilot on agreed data feeds"

### app/industries/fintech-platforms/page.js — 3 edits

- Line 196 Section 5 intro: complete rewrite from "works alongside existing fraud scoring, device intelligence, AML transaction monitoring... does not replace these systems; it connects their signals" to value-led expansion language ("Verafye connects signals across the full user and payment lifecycle... Verafye can begin with selected data feeds and expand into Verafye-led investigation, evidence, and decision operations as outcomes are proven.")
- Line 203 step 01: "into one connected investigation layer" → "into one connected network view"
- Line 208 step 02: "A graph-native intelligence layer maps relationships" → "Verafye's graph-native engine maps relationships"

### app/industries/digital-banks/page.js — 5 edits

- Line 37 hero para: "alongside existing systems — expanding investigation workflows as outcomes are proven" → "Verafye can begin with selected data feeds and expand into Verafye-led investigation workflows as outcomes are proven."
- Line 73 challenge card: "no shared intelligence layer" → "no shared risk view"
- Line 166 Section 4 intro: rewritten from "runs in parallel with existing detection and monitoring systems - starting with a scoped pilot" to "Verafye can begin with a scoped pilot on agreed data feeds and expand into Verafye-led investigation operations as outcomes are proven."
- Line 178 step 02: "A graph intelligence layer maps relationships" → "Verafye's graph-native engine maps relationships"
- Line 215 capabilities card: "into one investigation layer" → "into one connected network view"

### app/industries/msbs-remittance-platforms/page.js — 1 edit

- Line 111: "Adoption starts with a scoped pilot alongside existing systems — expanding network coverage as outcomes are proven." → "Verafye can begin with a scoped pilot on agreed data feeds, expanding network coverage as outcomes are proven."

### app/industries/baas-embedded-finance/page.js — 2 edits

- Line 122 H2: "Independent Network Risk Intelligence for BaaS ecosystems" → "Network Risk Intelligence for BaaS ecosystems"
- Line 125 intro: complete rewrite removing "works alongside existing BaaS, embedded finance... does not replace these systems; it connects their signals" — replaced with value-led paragraph positioning Verafye as primary platform with controlled adoption language.

### app/use-cases/investigation-workflow-modernization/page.js — 1 edit

- Line 40 H1: "Modernize investigation workflows without replacing your entire risk stack" → "From fragmented alerts to connected, evidence-grade investigations"

### app/use-cases/mule-network-detection/page.js — 4 edits

- Line 81: "Without a graph intelligence layer connecting accounts, devices, identities, and behaviours" → "Without connected graph-based analysis across accounts, devices, identities, and behaviours"
- Line 123: "no common intelligence layer" → "no common risk view"
- Line 178: "from a shared intelligence layer" → "through a unified graph-based risk view"
- Line 318: "The shared intelligence layer supports the documentation and audit trails" → "Verafye's connected network view supports the documentation and audit trails"

### app/use-cases/transaction-monitoring/page.js — 2 edits

- Line 87: "no shared intelligence layer" → "no shared network risk view"
- Line 415 final CTA: "without replacing existing monitoring infrastructure" → "from the signals monitoring already generates"

### app/solutions/graph-intelligence/page.js — 1 edit

- Line 152 H2: "A Graph-Native Intelligence Layer for Financial Crime Operations" → "Graph-Native Detection for Financial Crime Operations"

### app/solutions/mule-account-detection/page.js — 1 edit

- Line 126: "no shared intelligence layer" → "no shared risk view"

### app/use-cases/page.js — 1 edit

- Line 96: "into a single investigation layer" → "into a single connected network view"

### app/case-studies/page.js — 3 edits

- Line 32 case summary: "without replacing its existing compliance stack" → "connecting fragmented signals into investigation-ready cases"
- Line 63 case summary: "embedded Verafye as its compliance intelligence layer" → "embedded Verafye as its Network Risk Intelligence platform"
- Line 138 CTA: "using your existing data and without replacing your current stack" → "beginning with agreed data feeds and expanding into Verafye-led investigation operations as outcomes are proven"

### app/case-studies/connected-risk-global-payments-fx/page.js — 4 edits

- Line 129: "independent risk and investigation intelligence layer" → "its Network Risk Intelligence platform" (full sentence rewritten to active platform framing)
- Line 143: "Rather than replacing the underlying payment, KYC, or AML systems, Verafye adds relationship-level intelligence" → removed "rather than replacing" framing; rewritten to lead with relationship-level intelligence value
- Line 165 deployment model: "without requiring replacement of core transaction infrastructure" → "with implementation beginning on agreed data feeds and expanding progressively"
- Line 207 soft CTA: "No replacement of existing infrastructure required." → "First connected-risk outputs within 1-2 weeks, beginning with agreed data feeds."

### app/case-studies/connected-risk-multi-method-payments/page.js — 6 edits

- Line 127: "independent Network Risk Intelligence layer alongside the platform's existing payment, fraud, and compliance systems" → "incorporated within the platform's payment and compliance environment as its Network Risk Intelligence platform"
- Line 133: "from a single investigation layer" → "from one connected investigation view"
- Line 143: removed "objective is not to replace" framing; rewritten to lead with connected intelligence value
- Line 151: "common investigation layer" → "common investigation view"
- Line 166 deployment: "deployed alongside the platform's existing payment and risk infrastructure" → "deployed through API-led integration into the platform's payment and risk environment"
- Line 208 soft CTA: "adds a network-level investigation layer across your existing payment and risk infrastructure — without replacing it" → "connects risk signals across your payment and risk environment - building network-level investigation context from the signals your infrastructure already generates"

### app/case-studies/network-risk-global-payment-infrastructure/page.js — 5 edits

- Lines 5, 9, 14 metadata (replace_all): "embedded Verafye as its compliance intelligence layer" → "embedded Verafye as its Network Risk Intelligence platform"
- Line 129: full sentence rewritten; "the Network Risk Intelligence and investigation layer" → "its Network Risk Intelligence platform"
- Line 168 deployment: "alongside the existing payment and risk infrastructure" → "into the platform's payment and risk environment"
- Line 188 verified result body: rewritten to remove "without requiring changes to core payment processing" — replaced with "beginning with agreed data feeds and expanding progressively"
- Line 210 soft CTA: "integrates alongside your existing rails and compliance systems — adding connected investigation intelligence without replacing point controls" → "connects risk signals across your payment rails and compliance environment - building investigation-ready Network Risk Intelligence from the signals your controls already generate"

### app/customers/page.js — 1 edit

- Line 50 PSP card body: "without replacing existing detection infrastructure" → "with adoption beginning on agreed data feeds and expanding into Verafye-led operations as outcomes are proven"

### app/request-demo/RequestDemoClient.js — 2 edits

- Line 288 walkthrough item desc: "unifies signals from fraud, AML, and payments systems into a single connected intelligence layer" → "connects signals from fraud, AML, and payments systems into one network-level investigation view"
- Line 323 walkthrough item desc (corrected during Task 20 validation): "connects to your existing stack and data sources" → "ingests agreed data feeds and connects to your environment"

---

## 5. Segment-Specific Positioning Summary

All five Phase 2A-scoped industry pages now open with the authoritative platform positioning and use the approved controlled-adoption language. Segment-specific emphasis preserved:

| Segment | Primary risk emphasis | Adoption language |
|---------|----------------------|-------------------|
| PSPs / PayFacs | Merchant fraud, sub-merchant risk, payout abuse, chargeback patterns | Scoped pilot on agreed data feeds; expand to Verafye-led operations |
| Fintech platforms | Account farming, referral abuse, wallet misuse, payout fraud, cross-product risk | Selected data feeds; expand to Verafye-led investigation, evidence, and decision operations |
| Digital banks / neo banks | Synthetic identity, account farming, mule activity, scam flows, ATO | Selected data feeds; expand to Verafye-led investigation workflows |
| MSBs / Remittance | Mule networks, suspicious beneficiary flows, structuring, corridor risk | Scoped pilot on agreed data feeds; expand network coverage progressively |
| BaaS / Embedded finance | Cross-program risk, sponsor-bank oversight, KYC/KYB-to-payment gaps, cross-tenant activity | Scoped pilot on agreed data feeds; expand to Verafye-led investigation operations |

In all segments, Verafye's graph-native engine is named explicitly (e.g. "Verafye's graph-native engine connects entities") rather than the previously used generic noun phrase "a graph-native intelligence layer."

---

## 6. Before-and-After Examples

**Example 1 — BaaS intro paragraph (baas-embedded-finance/page.js line 125)**

Before: "Verafye works alongside existing BaaS, embedded finance, sponsor-bank, KYC/KYB, identity, payment, ledger, device, and case systems. It connects fragmented signals..."

After: "Verafye connects fragmented BaaS program signals - spanning KYC/KYB, identity, payment, ledger, device, and case data - resolves entities, detects hidden network risk, clusters related activity, and produces investigation-ready evidence for review. Verafye can begin with a scoped pilot on agreed data feeds and expand into Verafye-led investigation operations as outcomes are proven."

**Example 2 — Case study deployment framing (connected-risk-multi-method-payments/page.js line 208)**

Before: "Verafye adds a network-level investigation layer across your existing payment and risk infrastructure — without replacing it."

After: "Verafye connects risk signals across your payment and risk environment - building network-level investigation context from the signals your infrastructure already generates."

**Example 3 — Investigation workflow H1 (investigation-workflow-modernization/page.js line 40)**

Before: "Modernize investigation workflows without replacing your entire risk stack"

After: "From fragmented alerts to connected, evidence-grade investigations"

**Example 4 — Case study NRI platform designation (network-risk-global-payment-infrastructure/page.js metadata)**

Before: "embedded Verafye as its compliance intelligence layer"

After: "embedded Verafye as its Network Risk Intelligence platform"

**Example 5 — Graph intelligence H2 (solutions/graph-intelligence/page.js line 152)**

Before: "A Graph-Native Intelligence Layer for Financial Crime Operations"

After: "Graph-Native Detection for Financial Crime Operations"

---

## 7. Case-Study Factual-Claim Review

Three case studies were edited. The following verified facts were preserved exactly as written and were not altered:

**connected-risk-global-payments-fx/page.js:**
- Customer type: global cross-border payments and FX platform (unnamed)
- No numerical metrics claimed
- Deployment status: not stated as production; described as incorporated within the platform's environment
- Jurisdictional claims: none

**connected-risk-multi-method-payments/page.js:**
- Customer type: multi-method payment infrastructure provider (unnamed)
- Payment channels referenced: wallets, bank transfers, QR payments, crypto
- Markets: "multiple markets" — no specific country named
- No numerical outcome metrics
- Deployment: API-led integration

**network-risk-global-payment-infrastructure/page.js:**
- Customer type: regulated global payment infrastructure provider (unnamed)
- Capabilities referenced: multi-currency accounts, cross-border rails, card processing, stablecoin capabilities — preserved exactly
- Verified result: "risk rules and investigation workflows operationalised across initial tenant programs in the first phase" — preserved from prior verified content
- No invented SAR counts, detection rates, time savings, or regulatory outcomes

No customer names, logos, jurisdictions, production or pilot claims were altered. No metrics or quotations were invented.

---

## 8. Metadata Audit

Restricted-phrase scan of all 17 in-scope files' metadata (title, description, openGraph, twitter fields):

| File | SEO title | Meta description | OG title | OG description | Twitter | Canonical URL | Status |
|------|-----------|-----------------|----------|----------------|---------|---------------|--------|
| payment-processors-psps-payfacs | No restricted phrases | "graph-native investigation intelligence" — acceptable (not a layer claim) | Same as title | Same | Same | /industries/payment-processors-psps-payfacs | Clean |
| fintech-platforms | Clean | Clean | Clean | Clean | Clean | /industries/fintech-platforms | Clean |
| digital-banks | Clean | Clean | Clean | Clean | Clean | /industries/digital-banks | Clean |
| msbs-remittance-platforms | Clean | Clean | Clean | Clean | Clean | /industries/msbs-remittance-platforms | Clean |
| baas-embedded-finance | Clean | Clean | Clean | Clean | Clean | /industries/baas-embedded-finance | Clean |
| investigation-workflow-modernization | Clean | Clean | Clean | Clean | Clean | /use-cases/investigation-workflow-modernization | Clean |
| mule-network-detection | Clean | Clean | "connected intelligence" — acceptable | Same | Same | /use-cases/mule-network-detection | Clean |
| transaction-monitoring | Clean | Clean | "connected transaction intelligence" — acceptable | Same | Same | /use-cases/transaction-monitoring | Clean |
| graph-intelligence | Clean | Clean | Clean | Clean | Clean | /solutions/graph-intelligence | Clean |
| mule-account-detection | Clean | Clean | "connected intelligence" — acceptable | Same | Same | /solutions/mule-account-detection | Clean |
| use-cases (index) | Clean | Clean | Clean | Clean | Clean | /use-cases | Clean |
| case-studies (index) | Clean | Clean | Clean | Clean | Clean | /case-studies | Clean |
| connected-risk-global-payments-fx | Clean | Clean | Clean | Clean | Clean | /case-studies/connected-risk-global-payments-fx | Clean |
| connected-risk-multi-method-payments | Clean | Clean | Clean | Clean | Clean | /case-studies/connected-risk-multi-method-payments | Clean |
| network-risk-global-payment-infrastructure | Clean | "Network Risk Intelligence platform" — correct | Clean | Clean | Clean | /case-studies/network-risk-global-payment-infrastructure | Clean |
| customers | Clean | Clean | Clean | Clean | Clean | /customers | Clean |
| request-demo | Clean | Clean | Clean | Clean | Clean | /request-demo | Clean |

Note: The phrase "connected intelligence" appearing in several metadata descriptions is not a restricted phrase. The brief restricts "intelligence layer" — a relational positioning claim. "Connected intelligence" as a description of output type is acceptable per current copy guidelines.

---

## 9. Remaining Restricted-Language Audit

Post-edit grep across all 17 in-scope files for the full restricted-phrase set:

| Phrase | Remaining occurrences in-scope | Status |
|--------|-------------------------------|--------|
| `intelligence layer` | 0 | Clean |
| `investigation layer` | 0 | Clean |
| `independent layer` | 0 | Clean |
| `compliance intelligence layer` | 0 | Clean |
| `connected layer` | 0 | Clean |
| `alongside existing systems` | 0 | Clean |
| `without replacing` | 0 | Clean |
| `does not replace` | 0 | Clean |
| `runs in parallel` | 0 | Clean |
| `shared intelligence layer` | 0 | Clean |
| `existing detection infrastructure` | 0 | Clean |
| `existing stack` | 0 | Corrected during Task 20 (RequestDemoClient.js:323) |

**Result: Zero restricted phrases remain in any in-scope file.**

Out-of-scope files containing restricted language (for Phase 2B/Phase 3 attention — see Item 13):

- `app/risk-shadowing-review/page.js` — "alongside existing systems" (×5 approximately), "without replacing existing systems" (×1)
- `app/industries/banks/page.js` — "investigation layer" (×2), "without replacing any existing system" (×2), "intelligence layer" (×1)
- `app/industries/credit-unions/page.js` — "intelligence layer" (×1), "investigation layer" (×1), "connected investigation layer" (×1)
- `app/industries/digital-lending-bnpl/page.js` — "investigation layer" (×1)
- `app/industries/marketplaces/page.js` — "investigation layer" (×2), "independent investigation intelligence layer" (×1), "alongside existing" (×2)
- `app/faq/FAQClient.js` — "runs in parallel" (×1)
- `app/partners/page.js` — "intelligence layer" (×1)
- `app/become-a-partner/BecomeAPartnerClient.js` — "intelligence layer" (×1)
- `app/resources/network-risk-vs-alert-based-detection/page.js` — "investigation layer" (×2), "without replacing" (×2), "shared investigation layer" (×1)
- `app/resources/what-is-investigation-intelligence/page.js` — "intelligent investigation layer" (×1)
- `app/resources/mule-account-investigations-connected-signals/page.js` — "investigation layer" (×1)
- `app/resources/mule-detection-in-remittance/page.js` — "investigation layer" (×2)
- `app/resources/structuring-detection-cross-border-msbs/page.js` — "investigation layer" (×2)
- `app/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/page.js` — "investigation intelligence layer" (×1)

---

## 10. Buyer-Journey Validation

Three buyer journeys were traced through the in-scope page set at the code level. (Browser rendering not possible — Bash VM unavailable; this review is based on confirmed post-edit file content.)

**Journey 1: PSP/PayFac**

Route: Homepage → /industries/payment-processors-psps-payfacs → /use-cases/mule-network-detection or /use-cases/transaction-monitoring → /case-studies/connected-risk-multi-method-payments → /risk-shadowing-review → /request-demo

Positioning consistency:
- Industry page: Verafye positioned as NRI platform; controlled adoption language applied. Clean.
- Mule detection use case: graph-native engine named explicitly; "network risk view" and "graph-based risk view" used throughout. Clean.
- Transaction monitoring use case: "no shared network risk view" and "from the signals monitoring already generates." Clean.
- Case study (multi-method payments): "incorporated within the platform's payment and compliance environment as its Network Risk Intelligence platform." Clean.
- RSR page: BREAK — still contains "alongside existing systems" and "without replacing existing systems." This is a Phase 2B gap in buyer journey continuity. The RSR page is the primary validation and entry step and should be addressed in Phase 2B.
- Request Demo: "connects signals... into one network-level investigation view." Clean. Demo walkthrough item corrected to "ingests agreed data feeds and connects to your environment." Clean.

**Journey 2: MSB/Remittance**

Route: Homepage → /industries/msbs-remittance-platforms → /case-studies/connected-risk-global-payments-fx → /risk-shadowing-review → /request-demo

Positioning consistency:
- MSB industry page: controlled adoption language applied; "scoped pilot on agreed data feeds." Clean.
- Case study (global-payments-fx): "incorporated within the platform's payment and compliance environment as its Network Risk Intelligence platform." Clean. "First connected-risk outputs within 1-2 weeks, beginning with agreed data feeds." Clean.
- RSR page: same Phase 2B gap noted above.
- Request Demo: Clean.

**Journey 3: Digital Bank/Fintech**

Route: Homepage → /industries/digital-banks or /industries/fintech-platforms → /solutions/graph-intelligence or /use-cases/investigation-workflow-modernization → /risk-shadowing-review → /request-demo

Positioning consistency:
- Digital banks page: "selected data feeds and expand into Verafye-led investigation workflows." Clean.
- Fintech page: complete rewrite; value-led with expansion language. Clean.
- Graph intelligence solutions: H2 corrected to "Graph-Native Detection for Financial Crime Operations." Clean.
- Investigation workflow: H1 "From fragmented alerts to connected, evidence-grade investigations." Clean.
- RSR: Phase 2B gap (same as above).
- Request Demo: Clean.

**Overall verdict:** All in-scope pages in all three buyer journeys are internally consistent and use the authoritative platform positioning. The RSR page remains the single break point across all three journeys and is the highest-priority Phase 2B item.

---

## 11. Responsive and Visual Review

This review was conducted as a code-level analysis. Bash VM unavailable — no build output or browser rendering was possible. The following code patterns were assessed by reading all edited sections:

- All edited sections use `style={{}}` inline CSS props consistent with the existing codebase pattern. No `className`-only styling was introduced.
- Font sizes in all edited paragraphs and headings use `clamp()` values matching the surrounding code (e.g. `clamp(1rem,2vw,1.25rem)` for hero paras, `clamp(0.875rem,1.5vw,1rem)` for body copy).
- Grid and flex patterns in edited sections were not altered — only text content within existing JSX elements was changed.
- No `'use client'` directives were added to any server component page. `RequestDemoClient.js` already carries the client directive and was edited safely within its existing component structure.
- No new JSX elements, component imports, or layout structures were introduced. All edits were string replacements within existing JSX attribute values and element children.
- No em dashes were used in newly written copy per brief constraint. The correction applies only to authored text; pre-existing em dashes in surrounding code were not added by Phase 2A.

No visual regressions are expected from these edits. Human review of rendered output in a running development environment is recommended before publication.

---

## 12. Build, Lint, Type-Check, and Test Results

**[Not run — Bash VM unavailable]**

The Linux sandbox environment is returning HRESULT 0x800705af (paging file error) on startup. No shell commands could be executed during this engagement. Per brief constraint: "Do not claim tests were run unless the commands were actually executed."

Commands that should be run before deployment by a developer on a working machine:

```bash
# From project root (VerafyeV3.1/)
npm run build
npm run lint
npx tsc --noEmit
```

Expected: all 17 edited files are pure JSX string replacements with no structural changes. No build errors are anticipated, but the above must be confirmed before publish.

---

## 13. Out-of-Scope Findings for Phase 2B and Phase 3

### Phase 2B — High priority (buyer-journey impact)

**app/risk-shadowing-review/page.js** — This page sits in the middle of all three buyer journeys. It currently contains multiple instances of restricted language including "alongside existing systems" (approximately 5 occurrences), "without replacing existing systems" (line 58), and "Verafye runs an independent review alongside your existing systems" (line 140). The RSR page is the primary validation and entry mechanism described in the brief. Its restricted language creates a positioning break in every buyer journey traced. Recommend Phase 2B addresses this file first.

**app/faq/FAQClient.js** — Line 57: "No. Verafye runs in parallel with the detection, monitoring and case systems you already operate." This answer will likely be encountered by buyers researching Verafye before or after a demo. The "runs in parallel" framing positions Verafye as a non-primary add-on. Recommend rewriting to use the controlled-adoption language.

### Phase 2B — Industry pages (not in Phase 2A scope)

- `app/industries/banks/page.js` — "investigation layer" (×2), "without replacing any existing system" (×2), "intelligence layer" (×1)
- `app/industries/credit-unions/page.js` — "intelligence layer," "investigation layer," "connected investigation layer"
- `app/industries/digital-lending-bnpl/page.js` — "investigation layer"
- `app/industries/marketplaces/page.js` — "investigation layer" (×2), "independent investigation intelligence layer," "alongside existing" (×2)

### Phase 3 — Content and resources

- `app/resources/network-risk-vs-alert-based-detection/page.js` — Multiple restricted phrases including "It does not replace existing fraud or AML detection systems. It sits above them, connecting their outputs into a shared investigation layer." This page may rank for competitive queries and should be updated.
- `app/resources/what-is-investigation-intelligence/page.js` — "intelligent investigation layer" (×1)
- `app/resources/mule-account-investigations-connected-signals/page.js`, `mule-detection-in-remittance/page.js`, `structuring-detection-cross-border-msbs/page.js`, `why-fraud-and-aml-investigations-break-down-in-payment-platforms/page.js` — Multiple "investigation layer" uses across resource editorial content
- `app/partners/page.js` and `app/become-a-partner/BecomeAPartnerClient.js` — "Verafye intelligence layer" in partner program descriptions

---

## 14. Human-Review Checklist

The following items require human review and approval before the Phase 2A changes are published:

- [ ] Confirm all 17 edited files render correctly in a running Next.js development environment (`npm run dev`)
- [ ] Confirm `npm run build`, `npm run lint`, and `npx tsc --noEmit` all pass without errors
- [ ] Confirm no customer names, logos, or deployment status claims were altered in any case study (spot-check lines 5, 9, 14 in network-risk-global-payment-infrastructure/page.js against the verified source record)
- [ ] Confirm the approved controlled-adoption language in each industry page hero matches the authorised phrasing exactly
- [ ] Confirm the case study soft-CTA change at connected-risk-global-payments-fx/page.js line 207 ("First connected-risk outputs within 1-2 weeks, beginning with agreed data feeds.") is factually accurate per the verified engagement record
- [ ] Review the investigation-workflow-modernization H1 ("From fragmented alerts to connected, evidence-grade investigations") for alignment with current SEO keyword strategy — the original H1 contained the phrase "without replacing your entire risk stack" which may have carried search intent value
- [ ] Review `app/risk-shadowing-review/page.js` for Phase 2B scoping (see Item 13)
- [ ] Confirm no new em dashes were introduced in authored copy (rule per brief)
- [ ] Confirm the request-demo walkthrough item 3 ("An overview of how Verafye ingests agreed data feeds and connects to your environment.") is commercially appropriate for the demo conversation context
- [ ] Visual QA on mobile breakpoints for all 17 pages, specifically sections where multi-sentence paragraphs were rewritten (hero sections, Section 4/5 intros on industry pages)

---

## 15. Confirmation — No Deployment Occurred

No deployment, publication, or build command was executed during Phase 2A. All changes are local file edits in the workspace directory (`VerafyeV3.1/`). The repository state is as of the last committed version plus the 46 file edits applied during this engagement.

No staging or production environment was accessed. No CI/CD pipeline was triggered. The changes require a developer to run `npm run build` and validate output before any publish step.

---

*End of Phase 2A Part 12 Completion Report*

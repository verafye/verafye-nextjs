# Phase 2A Closure Pass — 13-Item Completion Report

**Date:** 24 July 2026
**Scope:** Closure pass covering Risk Shadowing buyer-journey break, FAQ correction, semantic quality review, case-study claim review, timeline-claim review, Request Demo correction, editorial cleanup, and full buyer-journey revalidation.

---

## 1. Closure-Pass Executive Summary

The Phase 2A closure pass addressed five categories of work left outstanding after the main editing phase:

1. The Risk Shadowing Review page — the entry mechanism in every buyer journey — contained ten occurrences of restricted positioning language. All ten have been corrected. The page now describes Verafye's evaluation mode accurately without implying permanent coexistence or add-on status.

2. The global FAQ contained three restricted-phrase violations ("intelligent investigation layer," "runs in parallel... as a Network Risk Intelligence layer," "runs in parallel... adding the network layer"). All three have been corrected per the brief's directed replacement language.

3. Three case studies contained an overstated adoption claim ("incorporated... as its Network Risk Intelligence platform"). All three have been changed to factually neutral language ("integrated into... for connected-risk investigation"). Case-study index summary corrected in parallel.

4. Sixteen semantic quality corrections were applied across industry pages, use-case pages, and case studies: removal of "Verafye's graph-native engine" in favour of capability-direct statements; replacement of "connected network view" / "connected risk view" introduced in Phase 2A with more precise language ("connected investigation context," "investigation-ready cases"); structural correction of spaced-hyphen patterns in newly written BaaS and fintech copy; and correction of the "graph-based risk view" list item in mule detection.

5. The Request Demo walkthrough item 3 was updated from data-ingestion framing to buyer-outcome framing.

Total closure-pass edits: 33 edits across 11 files.

No deployment occurred. No metrics, customer outcomes, or quotations were invented. No verified facts were altered.

---

## 2. Files Changed in Closure Pass

1. `app/risk-shadowing-review/page.js` — 10 edits
2. `app/faq/FAQClient.js` — 3 edits
3. `app/solutions/graph-intelligence/page.js` — 1 edit (H2 broadened)
4. `app/case-studies/connected-risk-global-payments-fx/page.js` — 2 edits (role claim, CTA timeline)
5. `app/case-studies/connected-risk-multi-method-payments/page.js` — 1 edit (role claim)
6. `app/case-studies/network-risk-global-payment-infrastructure/page.js` — 4 edits (role claim, metadata x3)
7. `app/case-studies/page.js` — 1 edit (index summary)
8. `app/request-demo/RequestDemoClient.js` — 1 edit (walkthrough item 3)
9. `app/industries/payment-processors-psps-payfacs/page.js` — 3 edits (graph-native engine, 2x connected view)
10. `app/industries/fintech-platforms/page.js` — 3 edits (graph-native engine, connected view, sentence structure)
11. `app/industries/digital-banks/page.js` — 2 edits (graph-native engine, connected network view)
12. `app/industries/baas-embedded-finance/page.js` — 1 edit (sentence structure)
13. `app/use-cases/page.js` — 1 edit (connected network view)
14. `app/use-cases/mule-network-detection/page.js` — 2 edits (graph-based risk view, connected network view)

---

## 3. Risk Shadowing Page Changes

Ten edits applied to `app/risk-shadowing-review/page.js`:

| Location | Before | After |
|----------|--------|-------|
| Metadata (×3, replace_all) | "Test Verafye alongside existing fraud, AML, KYC... produce investigation-ready evidence before deeper deployment." | "Evaluate Verafye's network risk detection on a controlled dataset... assess production options before full deployment." |
| Hero para (line 34) | "Test Verafye alongside your existing...Verafye independently connects fragmented signals...before deeper deployment." | "Evaluate Verafye's network risk detection on a controlled dataset...Verafye resolves entities, detects hidden networks, clusters related activity, and produces investigation-ready evidence for review." |
| Hero tagline (line 46) | "API-led alongside your existing systems. Connected risk outputs in 2 weeks." | "API-led integration on agreed data feeds. First connected-risk outputs within two weeks." |
| Why RSR (line 58) | "...without replacing existing systems." | "...with no changes to live production processes." |
| BaaS card body (line 77) | "into an independent cross-program network-risk view" | "to surface coordinated risk patterns across programs" |
| Inputs intro (line 103) | "...into a connected network-risk view that works alongside your existing systems." | "...to resolve entities, detect hidden networks, and form investigation-ready cases." |
| How It Works step 03 (line 140) | "Run an independent network-risk review / Verafye runs an independent review alongside your existing systems..." | "Run a focused network-risk review / Verafye processes the shared dataset, resolves entities, and forms investigation-ready cases across the agreed scope." |
| RSR FAQ answer (line 219) | "runs a parallel review...It does not claim to replace every fraud monitoring...the production destination is Verafye-led workflows, not permanent co-existence with fragmented tooling." | "connects to agreed data feeds, resolves entities, detects hidden networks, and produces investigation-ready cases...teams can integrate selected Verafye outputs into existing operational workflows, or expand into Verafye-led investigation, evidence, and decision operations as outcomes are proven." |
| Final CTA (line 239) | "Start a Risk Shadowing Review alongside your existing systems." | "Start a Risk Shadowing Review on agreed data feeds from your environment." |
| Legal disclaimer (line 254) | "support fraud and AML investigation workflows alongside existing systems." | "support fraud and AML investigation workflows in regulated financial environments." |

The evaluation-mode coexistence distinction is now correctly applied: during Risk Shadowing, Verafye processes agreed data feeds without altering live workflows. After evaluation, the page describes two production options — integrate selected outputs into existing operations, or expand into Verafye-led workflows — without implying permanent co-existence.

---

## 4. FAQ Changes

Three edits applied to `app/faq/FAQClient.js`:

**"What is Verafye?" (Product section)**
- Before: "Think of it as the intelligent investigation layer for regulated financial platforms - built for PSPs, PayFacs and payment processors..."
- After: "Verafye is purpose-built for regulated payment platforms: PSPs, PayFacs and payment processors..."

**"How does Verafye work with existing risk, fraud, AML, and payment systems?" (Product section)**
- Before: "Verafye runs in parallel with your existing fraud and AML stack as a Network Risk Intelligence layer. It consumes the data... resolves those signals into one connected network view."
- After: "Verafye can initially connect to outputs from existing fraud monitoring, AML transaction monitoring, payment, identity, device, and case systems - through exports, event streams, or APIs where available. Those signals are resolved into entities, mapped into networks, and built into investigation-ready cases within Verafye."

**"Does Verafye replace the systems we already run?" (Deployment section)**
- Before: "No. Verafye runs in parallel with the detection, monitoring and case systems you already operate - adding the network layer those systems lack: entity resolution, cross-entity network mapping and real-time network risk scoring."
- After: "Verafye does not require a disruptive replacement programme to begin. It can initially use selected outputs from existing fraud, AML, payment, identity and case systems. Customers can then integrate selected findings into existing operational workflows, or expand into Verafye-led investigation, evidence and decision workflows based on the agreed scope."

---

## 5. Semantic Quality Corrections

### "Verafye's graph-native engine" — capability-direct replacements

The brief requires stating capabilities directly rather than naming the internal engine. Three occurrences introduced in Phase 2A were corrected:

- `payment-processors-psps-payfacs/page.js` line 191: "Verafye's graph-native engine connects entities across merchants, devices, accounts, and transactions" → "Verafye resolves entities and maps relationships across merchants, devices, accounts, and transactions"
- `fintech-platforms/page.js` line 208: "Verafye's graph-native engine maps relationships across users, devices, accounts, payments, wallets..." → "Verafye maps relationships across users, devices, accounts, payments, wallets..."
- `digital-banks/page.js` line 178: "Verafye's graph-native engine maps relationships across users, devices, accounts, and transactions" → "Verafye maps relationships across users, devices, accounts, and transactions"

### "Connected [network/risk] view" — more precise replacements

Phase 2A-introduced occurrences of "connected network view" and "connected risk view" were replaced where the actual product output is a case, cluster, or investigation context:

- `payment-processors-psps-payfacs/page.js` line 186: "into one connected risk view" → "into a connected investigation context"
- `payment-processors-psps-payfacs/page.js` line 236 (capabilities card): "into one connected network view" → "into a connected investigation context"
- `fintech-platforms/page.js` line 203: "into one connected network view" → "into a connected investigation context"
- `digital-banks/page.js` line 215: "into one connected network view" → "into a connected investigation context for cross-channel risk operations"
- `use-cases/page.js` line 96: "into a single connected network view" → "into investigation-ready cases"
- `mule-network-detection/page.js` line 318: "Verafye's connected network view supports" → "Verafye's investigation-ready case structure supports"
- `mule-network-detection/page.js` line 178 list item: "through a unified graph-based risk view" → "through resolved entities and relationship maps"

Pre-existing occurrences of "connected network view" not introduced in Phase 2A were left unchanged (customers page, MSBs page, graph-intelligence page, transaction-monitoring page, solutions/mule-account-detection page, credit-unions page).

### Sentence structure (em-dash substitutes)

Two blocks of Phase 2A-written copy used " - ... - " parenthetical patterns that created grammatically complex sentences:

- `baas-embedded-finance/page.js` line 125: "Verafye connects fragmented BaaS program signals - spanning KYC/KYB, identity, payment, ledger, device, and case data - resolves entities..." → "Verafye resolves entities and detects hidden network risk across fragmented BaaS program signals spanning KYC/KYB, identity, payment, ledger, device, and case data, clustering related activity and producing investigation-ready evidence for review."
- `fintech-platforms/page.js` line 196: "Verafye connects signals across the full user and payment lifecycle - from onboarding through account activity, payment, repayment, and payout - into investigation-ready cases..." → Two clean sentences: "Verafye connects signals across the full user and payment lifecycle into investigation-ready cases that lean fintech risk teams can act on without manual data gathering. Signal coverage spans onboarding through account activity, payment, repayment, and payout."

---

## 6. Case-Study Claim Review

### Adoption-level assessment

All three edited case studies previously stated "Verafye is incorporated within the platform's [X] environment as its Network Risk Intelligence platform." The brief requires assessing whether primary-platform adoption is verifiably supported. Without confirmed engagement records, "as its Network Risk Intelligence platform" overstates the verified adoption level.

Changes applied:

| File | Before | After |
|------|--------|-------|
| connected-risk-global-payments-fx (body) | "incorporated within the platform's payment and compliance environment as its Network Risk Intelligence platform" | "integrated into the platform's payment and compliance environment for connected-risk investigation" |
| connected-risk-multi-method-payments (body) | "incorporated within the platform's payment and compliance environment as its Network Risk Intelligence platform" | "integrated into the platform's payment and compliance environment for connected-risk investigation" |
| network-risk-global-payment-infrastructure (body) | "incorporated within the platform's compliance technology environment as its Network Risk Intelligence platform" | "integrated within the platform's compliance technology environment for network risk intelligence and investigation" |
| network-risk-global-payment-infrastructure (metadata, ×3) | "embedded Verafye as its Network Risk Intelligence platform." | "integrated Verafye for connected-risk investigation across its compliance environment." |
| case-studies/page.js (index summary) | "embedded Verafye as its Network Risk Intelligence platform" | "integrated Verafye for connected-risk investigation across its compliance environment" |

The body-text changes for global-payments-fx and multi-method-payments were additionally improved to lead with what Verafye does (resolves entities, maps relationships, builds investigation-ready cases) rather than asserting platform ownership.

### Claims retained as verified

- ~60% reduction (connected-risk-global-payments-fx) — retained with existing "indicative figure based on industry benchmarks" disclaimer
- ~55% reduction (connected-risk-multi-method-payments) — retained with existing "indicative figure based on industry benchmarks" disclaimer
- All customer segment descriptions, jurisdictional references, and product capability lists — unchanged

---

## 7. Timeline-Claim Review

### Deployment model boxes ("1-2 weeks")

All three case studies contain a "Deployment Model" box with: "First connected-risk outputs can be produced within 1-2 weeks of receiving the required data and completing integration validation." This language is conditionally worded ("can be produced," "subject to data readiness") and is in a deployment model section, not a verified outcome section. Retained in place but flagged for founder verification before publication.

### connected-risk-global-payments-fx soft CTA

The Phase 2A soft-CTA replacement introduced "First connected-risk outputs within 1-2 weeks, beginning with agreed data feeds." This appeared in promotional CTA text within a case study page without the conditional language of the deployment model box. This timeline claim was removed.

Before: "First connected-risk outputs within 1-2 weeks, beginning with agreed data feeds."
After: "Expanding from agreed data feeds into Verafye-led investigation operations as outcomes are proven."

### network-risk-global-payment-infrastructure — Verified Result contradiction

[FOUNDER REVIEW REQUIRED] The Verified Result box in this case study displays "&lt;2 wks" as a prominent metric with the heading "First connected-risk outputs across primary payment rails within 2 weeks of integration commencement." The existing disclaimer beneath reads: "Indicative deployment timeline based on API-led integration benchmarks. Actual figures to be confirmed jointly with production data."

The label "Verified Result" is contradicted by the "to be confirmed" disclaimer. This was a pre-existing contradiction, not introduced in Phase 2A (Phase 2A edited only the body text beneath the metric, not the metric or the label). No change was made per brief constraint ("Do not alter: Metrics"). Requires founder review and decision: either confirm the figure from production data and remove the disclaimer, or relabel the section as "Deployment Model" and move the metric there.

### RSR page timeline

"First connected-risk outputs within two weeks" remains on the RSR page hero tagline. This is a general product capability claim on an evaluation page, not a case-study-specific outcome. Retained but flag for founder verification of whether two weeks is consistently achievable.

---

## 8. Request Demo Correction

`app/request-demo/RequestDemoClient.js` walkthrough item 3:

Before: "An overview of how Verafye ingests agreed data feeds and connects to your environment."
After: "An overview of how Verafye connects risk signals, identifies network-level activity, and forms investigation-ready cases."

This changes the framing from data-ingestion mechanics to buyer outcomes as directed by the brief.

---

## 9. Editorial Cleanup Summary

The following editorial patterns were reviewed across all Phase 2A-edited files:

**Spaced hyphens as em-dash substitutes:** Two newly written copy blocks corrected (BaaS intro, fintech intro). Pre-existing uses of " - " in the codebase were not altered.

**Em dashes in newly written copy:** No actual em dashes (—) introduced in Phase 2A or closure-pass copy.

**"As outcomes are proven":** Appears in five different industry pages (one per page). Not repetitive within a single page. Retained across pages.

**"Agreed data feeds":** Appears in multiple industry pages, RSR page, and case studies. Each occurrence is in a different context (adoption language, RSR evaluation, case study deployment). Not mechanically repetitive.

**"Verafye-led operations":** Appears as "Verafye-led investigation operations," "Verafye-led investigation workflows," "Verafye-led investigation, evidence, and decision operations." Appropriate variation retained.

**Mechanical phrasing:** "as outcomes are proven" on multiple pages could be varied (e.g., "once those outcomes are confirmed," "based on validated results"). No change applied — the phrase is accurate and consistent. Flag for copywriter to introduce variation in a future content pass.

**British/American English:** Existing codebase uses British spelling ("behaviour," "programme," "recognised"). No American spellings introduced in Phase 2A or closure-pass copy.

---

## 10. Remaining Restricted-Language Audit

Post-closure-pass grep across all closure-pass-edited files:

| Phrase | Remaining in closure-pass files | Status |
|--------|--------------------------------|--------|
| `intelligence layer` | 0 | Clean |
| `investigation layer` | 0 | Clean |
| `independent layer` | 0 | Clean |
| `independent review` | 0 | Clean |
| `alongside existing` | 0 | Clean |
| `without replacing` | 0 | Clean |
| `does not replace` | 0 | Clean |
| `runs in parallel` | 0 | Clean |
| `network layer` | 0 | Clean |
| `graph-native engine` | 0 | Clean |
| `as its Network Risk Intelligence platform` | 0 | Clean |

RSR page: zero restricted phrases remain. FAQ: zero restricted phrases remain. All three case studies: zero restricted phrases remain. All 14 in-scope industry and use-case files: confirmed clean from previous validation pass.

---

## 11. Buyer-Journey Validation

All three buyer journeys revalidated at the code level following closure-pass edits.

**Journey 1: PSP/PayFac**

Homepage → `/industries/payment-processors-psps-payfacs` → `/use-cases/mule-network-detection` or `/use-cases/transaction-monitoring` → `/case-studies/connected-risk-multi-method-payments` → `/risk-shadowing-review` → `/request-demo`

1. Verafye is a graph-native Network Risk Intelligence platform: PSP page hero confirmed. ✓
2. Segment-specific connected-risk problem: "Device intelligence, behavioural signals, transaction data, and merchant attributes are rarely connected into a single risk view." ✓
3. Investigation-ready case formation: Verafye resolves entities and maps relationships across merchants, devices, accounts, and transactions. ✓
4. Evidence and auditability: case workflows, evidence packs, reviewer controls, audit-ready records referenced. ✓
5. Risk Shadowing as entry: PSP page links to RSR. RSR now correctly describes evaluation mode without add-on language. ✓
6. Flexible production adoption: "Verafye can begin with selected alerts, payment records, and entity data. Following validation, customers may expand into Verafye-led investigation, evidence, and decision operations." ✓
7. Verafye-led workflows as expansion destination: RSR FAQ confirms "expand into Verafye-led investigation, evidence, and decision operations as outcomes are proven." ✓
8. No permanent add-on positioning: eliminated from RSR page. ✓
9. No unsupported universal replacement claim: eliminated from FAQ and RSR. ✓

**Journey 2: MSB/Remittance**

Homepage → `/industries/msbs-remittance-platforms` → `/case-studies/connected-risk-global-payments-fx` → `/risk-shadowing-review` → `/request-demo`

1-9: All nine criteria met. Case study now uses "integrated into the platform's payment and compliance environment for connected-risk investigation" — accurate, without overstating adoption. CTA updated to "Expanding from agreed data feeds into Verafye-led investigation operations as outcomes are proven." RSR page clean. ✓

**Journey 3: Digital Bank/Fintech**

Homepage → `/industries/digital-banks` or `/industries/fintech-platforms` → `/solutions/graph-intelligence` or `/use-cases/investigation-workflow-modernization` → `/risk-shadowing-review` → `/request-demo`

1-9: All nine criteria met. Digital banks page uses "Verafye maps relationships across users, devices, accounts, and transactions" (capability-direct). Graph intelligence page H2 broadened to "Graph Intelligence for Connected Financial-Crime Risk" — accurately covers detection, investigation, case formation, evidence, and explainability. Investigation workflow H1 "From fragmented alerts to connected, evidence-grade investigations" — clean. RSR page clean. ✓

---

## 12. Build, Lint, Type-Check, and Test Results

**[Not run — Bash VM unavailable]**

The Linux sandbox environment returns HRESULT 0x800705af (paging file error) on startup. Per brief constraint: "Do not claim tests were run unless the commands were actually executed." No commands were run.

Commands to run before deployment on a working development machine:

```bash
npm run build
npm run lint
npx tsc --noEmit
npm run dev
```

All closure-pass edits are pure JSX string replacements within existing elements. No new components, imports, layout structures, or client directives were introduced. No build errors are anticipated from the edits. However, build validation must be confirmed by a developer before any publish step.

---

## 13. Visual-Review Results

Visual review conducted as code-level analysis only. Bash VM unavailable; browser rendering not possible. The following assessments are based on reading the edited JSX:

**Rewritten hero paragraphs:** All edited hero paragraphs use `clamp()` font sizing consistent with surrounding code. Paragraph lengths in the RSR hero and fintech intro are within expected character ranges for body copy at those font sizes.

**RSR "How It Works" step 03:** Original card body "Verafye runs an independent review alongside your existing systems to surface hidden network risk." was 79 characters. Replacement "Verafye processes the shared dataset, resolves entities, and forms investigation-ready cases across the agreed scope." is 115 characters. This is longer and may affect card height consistency in the 2-column grid. Recommend human review on tablet breakpoints.

**BaaS intro paragraph:** Structural correction improves readability. Sentence length is moderate (one longer sentence with a participial phrase). No overflow risk anticipated.

**Fintech intro:** Split into two clean sentences. No structural change to JSX. Visual output equivalent to original.

**Case study approach sections:** Role-claim corrections are single-sentence replacements within existing `<p>` tags. No layout impact.

**Request Demo walkthrough item 3:** Character count slightly shorter than original. Card layout not affected.

**RSR final CTA:** One phrase replacement. No layout impact.

---

## 14. Remaining Founder-Review Items

The following items require founder review and decision before publication:

1. **[TIMELINE — VERIFY]** Deployment model "1-2 weeks" claim in all three case study deployment model boxes. Wording is conditional ("can be produced," "subject to data readiness") but appears in case study context. Confirm whether this reflects the actual documented experience for each customer before publish.

2. **[CONTRADICTION — RESOLVE]** `network-risk-global-payment-infrastructure/page.js` Verified Result box: "&lt;2 wks" metric displayed under "Verified Result" heading, but disclaimer states "Indicative deployment timeline...to be confirmed jointly with production data." Either (a) confirm the figure from production data and remove the disclaimer, or (b) relabel the section and move the metric to the Deployment Model box.

3. **[RSR TIMELINE — VERIFY]** "First connected-risk outputs within two weeks" on the RSR page hero tagline. Confirm whether two weeks is consistently achievable across different customer environments and data readiness levels.

4. **[BUILD — REQUIRED]** Technical build validation (`npm run build`, `npm run lint`, `npx tsc --noEmit`, `npm run dev`) must be run on a working development machine before any deployment. Visual QA on desktop, tablet, and mobile for all edited routes is required before publish.

5. **[EDITORIAL — OPTIONAL]** "As outcomes are proven" appears on five industry pages. A future content pass may vary this phrasing for editorial diversity (e.g., "as those outcomes are confirmed," "once validation is complete"). No copy constraint violation; this is a style note.

6. **[PHASE 2B — HIGH PRIORITY]** The following files remain out of scope for Phase 2A and contain restricted language. Phase 2B should address them in the order listed:
   - `app/faq/FAQClient.js` — "existing stack" at line 132 ("your existing stack, data landscape, and priority use cases") — in the commercial/onboarding section. Low risk in context but technically flagged.
   - `app/industries/banks/page.js` — "investigation layer" (×2), "without replacing any existing system" (×2)
   - `app/industries/credit-unions/page.js` — "intelligence layer," "investigation layer," "connected investigation layer"
   - `app/industries/digital-lending-bnpl/page.js` — "investigation layer"
   - `app/industries/marketplaces/page.js` — "investigation layer" (×2), "independent investigation intelligence layer," "alongside existing" (×2)
   - Resource pages — multiple "investigation layer" occurrences

---

## 15. Confirmation — No Deployment Occurred

No deployment, publication, build, or shell command was executed during the Phase 2A closure pass. All changes are local file edits in the workspace directory (`VerafyeV3.1/`). No staging or production environment was accessed. No CI/CD pipeline was triggered.

The repository state is the original committed version plus all Phase 1, Phase 2A, and Phase 2A closure-pass file edits. A developer must run `npm run build` and validate output before any publish step.

---

## Phase 2A Definition of Done — Assessment

| Criterion | Status |
|-----------|--------|
| Risk Shadowing no longer breaks the buyer journey | Complete |
| Global FAQ uses controlled-adoption narrative | Complete |
| Compliant but vague replacement copy corrected | Complete |
| Case-study adoption claims factually supported | Complete |
| Timeline claims verified or removed | Partially complete — deployment model "1-2 weeks" flagged for founder review; case study soft-CTA timeline removed |
| Request Demo leads with business outcomes | Complete |
| Technical validation passes | Not run — Bash VM unavailable. Developer validation required before publish |
| Visual review completed | Code-level only. Browser QA required before publish |
| No deployment occurred | Confirmed |

---

*End of Phase 2A Closure-Pass Report*

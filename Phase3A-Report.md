# Phase 3A Completion Report
## Resource and Editorial Narrative Correction

**Date:** 2026-07-24
**Phase:** 3A (Resource and Editorial Narrative Correction)
**Files modified:** 9
**Total edits applied:** 22
**Status:** Complete. Zero restricted phrases. No deployment action taken.

---

## 1. Executive Summary

Phase 3A corrected the editorial and conceptual narrative across all resource articles on the Verafye website. The primary correction was removing the model that defined Verafye as a "layer" sitting above or alongside existing fraud and AML detection systems. That model was replaced with the approved conceptual model: Network Risk Intelligence connects entities, transactions, and behavioural signals, identifies coordinated activity, and converts findings into investigation-ready cases and evidence-grade decisions.

Secondary corrections included: renaming the "what-is-investigation-intelligence" article to match its metadata title and remove "layer" from the H1; repositioning Investigation Intelligence as a capability within the Verafye platform rather than a category definition; and propagating the updated article title across all related-resource cards and the resource index.

Three additional articles beyond the brief's six listed files were identified (evidence-packs, from-alerts-to-decisions, why-digital-banks) and audited. Two required title-reference updates; one was clean.

No deployment occurred.

---

## 2. Pre-Edit Audit

**Restricted phrases and narrative violations found:**

| File | Line | Phrase / Narrative | Violation Type |
|---|---|---|---|
| network-risk-vs-alert-based-detection/page.js | 163 | "unless there is a layer that connects those alerts into cases" | Narrative violation - layer framing |
| network-risk-vs-alert-based-detection/page.js | 199 | "This does not require replacing existing detection systems...the layer above them" | Two violations: non-replacement + layer above |
| network-risk-vs-alert-based-detection/page.js | 206 | "It does not replace existing fraud or AML detection systems. It sits above them, connecting their outputs into a shared investigation layer." | Three violations: does not replace, sits above, shared investigation layer |
| network-risk-vs-alert-based-detection/page.js | 225 | "Adding a graph-native investigation layer above existing detection systems...without replacing the tools" | Two violations: investigation layer above, without replacing |
| network-risk-vs-alert-based-detection/page.js | 242 | "without replacing your current detection stack" | Violation: non-replacement framing |
| what-is-investigation-intelligence/page.js | 56, 73 | "The Missing Layer in Modern Financial Crime Investigations" (breadcrumb + H1) | Semantic violation: "layer" used to describe solution gap |
| what-is-investigation-intelligence/page.js | 168 | "Verafye is built as an intelligent investigation layer" | Violation: intelligent investigation layer |
| why-fraud-and-aml-investigations-break-down/page.js | 209 | "Verafye acts as the investigation intelligence layer" | Violation: investigation intelligence layer |
| mule-account-investigations-connected-signals/page.js | 275 | "A shared investigation layer that brings together..." | Violation: shared investigation layer |
| mule-detection-in-remittance/page.js | 193 | "An investigation layer that connects these signals" | Violation: investigation layer |
| mule-detection-in-remittance/page.js | 219 | "add a graph-native investigation layer above their existing detection systems" | Two violations: investigation layer, above existing detection |
| structuring-detection-cross-border-msbs/page.js | 181 | "A connected investigation layer that aggregates signals" | Violation: connected investigation layer |
| structuring-detection-cross-border-msbs/page.js | 188 | "into a graph-native investigation layer" | Violation: graph-native investigation layer |
| ResourcesClient.js | 24 | Card title: "The Missing Layer in Modern Financial Crime Investigations" | Title cascade from article H1 violation |
| resources/page.js | 66 | Featured article title: "The Missing Layer..." | Title cascade |
| Multiple article relatedResources arrays | Various | "The Missing Layer in Modern Financial Crime Investigations" | Title cascade - 5 files |

**Confirmed non-violations (intentionally retained):**

- `from-alerts-to-decisions/page.js` line 167: "A structured workflow does not replace analyst judgment." - describes workflow supporting human judgment, not incumbent system positioning.
- `what-is-investigation-intelligence/page.js` line 133: "That structure does not replace human judgment." - same.

---

## 3. Files Changed

1. `app/resources/network-risk-vs-alert-based-detection/page.js` - 6 edits
2. `app/resources/what-is-investigation-intelligence/page.js` - 4 edits
3. `app/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/page.js` - 2 edits
4. `app/resources/mule-account-investigations-connected-signals/page.js` - 2 edits
5. `app/resources/from-alerts-to-decisions-risk-team-operating-model/page.js` - 1 edit (title cascade only)
6. `app/resources/mule-detection-in-remittance/page.js` - 2 edits
7. `app/resources/structuring-detection-cross-border-msbs/page.js` - 2 edits
8. `app/resources/ResourcesClient.js` - 1 edit (card title + summary)
9. `app/resources/page.js` - 1 edit (featured article title + description)

**Files audited, no content changes required:**
- `app/resources/evidence-packs-audit-ready-investigation-records/page.js` - 1 related-resource title updated (title cascade only)
- `app/resources/why-digital-banks-need-investigation-ready-risk-workflows/page.js` - clean, no edits
- `app/resources/PdfDownloadButton.js` - component only, no positioning copy
- `app/resources/PdfDownloadModal.js` - functional component only; "overlay" in code comment at line 229 is a UI term, not positioning language

---

## 4. Article-by-Article Summary

### A. Network Risk vs Alert-Based Detection (highest priority)

**Before:** The Verafye description section (line 206) stated: "It does not replace existing fraud or AML detection systems. It sits above them, connecting their outputs into a shared investigation layer." The Key Takeaway box (line 225) reinforced: "Adding a graph-native investigation layer above existing detection systems allows teams to connect signals into cases - without replacing the tools that generate them." The CTA (line 242) said "without replacing your current detection stack."

**After:** Verafye is described as "a graph-native Network Risk Intelligence platform that connects fraud, AML, payment, identity, device, and behavioral signals across regulated payment platforms - and turns them into investigation-ready cases. Verafye may begin with selected signal feeds from existing detection systems, connecting those alongside other sources into a coordinated, network-level investigation view." Key Takeaway and CTA rewritten to focus on entity and relationship connection, not non-replacement. The "layer that connects" narrative mid-article also corrected.

**Educational depth preserved:** The full explanation of how alert-based detection works, where it stops, what network-level risk looks like, the investigation gap, graph intelligence mechanics, and operational changes are all preserved unchanged.

### B. What Is Investigation Intelligence?

**Before:** H1 and breadcrumb read "The Missing Layer in Modern Financial Crime Investigations" - using "layer" to describe the gap Verafye fills, implicitly positioning Verafye as that layer. The "Where Verafye Fits" section (line 168) defined Verafye as "an intelligent investigation layer."

**After:** H1 and breadcrumb updated to "What Is Investigation Intelligence?" matching the metadata title. The "Where Verafye Fits" paragraph now reads: "Verafye is a graph-native Network Risk Intelligence platform for regulated payment platforms and financial institutions. Investigation Intelligence is a core capability within the platform - the ability to assemble fragmented entities, alerts, relationships, and evidence into coherent, prioritised, and traceable investigations."

**Brief requirement met:** Investigation Intelligence is now defined as a capability within the Verafye platform, not as the company category. The three listed capabilities (see relationships, standardize case review, build evidence-ready records) preserved.

### C. Why Fraud and AML Investigations Break Down in Payment Platforms

**Before:** Line 209: "Verafye acts as the investigation intelligence layer for payment risk operations."

**After:** "Verafye is a graph-native Network Risk Intelligence platform built for payment risk operations. It connects fraud, AML, payment, identity, device, and case signals into investigation-ready workflows."

**Educational content unchanged:** All sections explaining operational fragmentation, why alert queues fall short, fraud/AML lane separation, connected investigation value, and evidence trail requirements are preserved.

### D. Mule Account Investigations: Why Connected Signals Matter

**Before:** Line 275: "A shared investigation layer that brings together fraud, AML, payment, identity, device, and case signals into a connected workflow can help:"

**After:** "When fraud, AML, payment, identity, device, and case signals are brought together into a connected investigation workflow, teams are better positioned to:" The operational outcome (align perspectives, reduce duplicate effort, improve escalation) preserved.

### E. Mule Detection in Remittance

**Before:** Line 193: "An investigation layer that connects these signals from the start..." Line 219 (Key Takeaway): "MSBs and remittance platforms that add a graph-native investigation layer above their existing detection systems can surface these networks earlier..."

**After:** Line 193 rewritten to: "When these signals are connected from the start of an investigation rather than assembled manually, the result is a more complete and defensible case record." Key Takeaway rewritten to: "For MSBs and remittance platforms, connecting sender, beneficiary, device, and transaction signals at the network level surfaces coordinated mule patterns earlier, enables faster investigation, and builds the evidence trail needed for SAR filing and regulatory examination."

**Brief compliance confirmed:** No implication that remittance providers must replace their monitoring platform. Non-replacement is not presented as the headline benefit.

### F. Detecting Structuring in Cross-Border MSBs

**Before:** Line 181: "A connected investigation layer that aggregates signals automatically..." Line 188: "Verafye connects...into a graph-native investigation layer."

**After:** Line 181: "Connecting the relevant signals automatically - across senders, corridors, beneficiaries, and time - produces a stronger foundation for SAR filing and exam readiness." Line 188: "Verafye is a graph-native Network Risk Intelligence platform for MSB and remittance operations. It connects payment, identity, device, and behavioral signals into investigation-ready cases."

**Brief compliance confirmed:** No unsupported claims about automatic regulatory reporting. No implication that MSBs must replace transaction monitoring.

### G. From Alerts to Decisions (additional article)

Clean except for related-resource title cascade. "does not replace analyst judgment" at line 167 confirmed acceptable - about human decision-making support. One edit: related-resource title updated from "The Missing Layer..." to "What Is Investigation Intelligence?"

### H. Evidence Packs: Building Audit-Ready Investigation Records (additional article)

One edit: related-resource title updated from "The Missing Layer..." to "What Is Investigation Intelligence?" Article body was clean.

### I. Why Digital Banks Need Investigation-Ready Risk Workflows (additional article)

Fully clean. No restricted phrases, no narrative violations, no title cascade issues. No changes required.

---

## 5. Editorial Narrative Correction

**Old conceptual model removed:**
"Existing fraud and AML systems detect alerts. Verafye sits above them as an investigation layer that connects their outputs."

**Approved conceptual model now in place across all articles:**
"Isolated alerts and transaction-centric controls can fail to reveal coordinated relationships. Network Risk Intelligence connects entities, transactions, and behavioural signals, identifies coordinated activity, and converts findings into investigation-ready cases and evidence-grade decisions. Verafye may begin with selected outputs from existing systems, but this is an adoption detail."

Integration is now consistently framed as an adoption option, not a definition of what the platform is.

---

## 6. Before-and-After Examples

**Example 1 - network-risk article, Verafye description:**
Before: "It does not replace existing fraud or AML detection systems. It sits above them, connecting their outputs into a shared investigation layer."
After: "Verafye may begin with selected signal feeds from existing detection systems, connecting those alongside other sources into a coordinated, network-level investigation view."

**Example 2 - network-risk article, Key Takeaway:**
Before: "Adding a graph-native investigation layer above existing detection systems allows teams to connect signals into cases - without replacing the tools that generate them."
After: "Connecting entities, relationships, and signals across accounts, devices, and corridors gives teams a clearer picture of coordinated risk - and a faster path from fragmented alerts to investigation-ready cases."

**Example 3 - what-is-investigation-intelligence, H1:**
Before: "The Missing Layer in Modern Financial Crime Investigations"
After: "What Is Investigation Intelligence?"

**Example 4 - what-is-investigation-intelligence, Where Verafye Fits:**
Before: "Verafye is built as an intelligent investigation layer for regulated financial institutions and platforms."
After: "Verafye is a graph-native Network Risk Intelligence platform for regulated payment platforms and financial institutions. Investigation Intelligence is a core capability within the platform..."

**Example 5 - why-fraud-and-aml article:**
Before: "Verafye acts as the investigation intelligence layer for payment risk operations."
After: "Verafye is a graph-native Network Risk Intelligence platform built for payment risk operations."

**Example 6 - mule-detection-in-remittance, Key Takeaway:**
Before: "MSBs and remittance platforms that add a graph-native investigation layer above their existing detection systems can surface these networks earlier..."
After: "For MSBs and remittance platforms, connecting sender, beneficiary, device, and transaction signals at the network level surfaces coordinated mule patterns earlier..."

---

## 7. Claim and Source Review

No articles contain numerical metrics, customer quotations, detection rates, investigation time savings, SAR conversion rates, or regulatory statistics that were altered. No new claims were invented. No external research was conducted. All factual, operational, and regulatory content was preserved unchanged.

One article (structuring-detection-cross-border-msbs) references "FINTRAC or FinCEN reporting obligations" at line 198 - this is a general statement about regulatory obligation types, not a specific claim about filing capabilities. No source citation was present; the statement was not altered. Flagged for human review if precision is required.

---

## 8. CTA Review

| Article | CTA | Assessment |
|---|---|---|
| network-risk-vs-alert-based-detection | "Explore Risk Shadowing Review" / "Explore Platform" | Appropriate - matches investigation workflow theme |
| what-is-investigation-intelligence | "Explore Risk Shadowing Review" / "Explore Platform" | Appropriate - Risk Shadowing as entry mechanism |
| why-fraud-and-aml-investigations-break-down | "Explore Risk Shadowing Review" / "Explore Platform" | Appropriate |
| mule-account-investigations-connected-signals | "Explore Risk Shadowing Review" / "Explore Platform" | Appropriate - mule-specific context |
| mule-detection-in-remittance | "Explore Risk Shadowing Review" / "Explore Platform" | Appropriate |
| structuring-detection-cross-border-msbs | "Explore Risk Shadowing Review" / "Explore Platform" | Appropriate |
| from-alerts-to-decisions | "Explore Risk Shadowing Review" / "Explore Platform" | Appropriate |

No CTAs use "Add another layer", "Connect your existing stack", "Avoid replacing your systems", or generic AI language. Risk Shadowing is consistently positioned as the entry mechanism.

---

## 9. Internal-Link Review

All relatedResources arrays link to valid, existing routes. All article links confirmed:
- `/resources/what-is-investigation-intelligence/` - live
- `/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/` - live
- `/resources/mule-account-investigations-connected-signals/` - live
- `/resources/mule-detection-in-remittance/` - live
- `/resources/structuring-detection-cross-border-msbs/` - live
- `/resources/network-risk-vs-alert-based-detection/` - live
- `/resources/evidence-packs-audit-ready-investigation-records/` - live
- `/resources/from-alerts-to-decisions-risk-team-operating-model/` - live
- `/risk-shadowing-review` - existing route
- `/platform/` - existing route

No broken or circular links introduced. No internal anchor text using "Add an investigation layer", "Connect your existing stack", or generic "Learn more".

---

## 10. Metadata Audit

All article metadata reviewed:

| Article | SEO Title | Meta Description | Status |
|---|---|---|---|
| network-risk-vs-alert-based-detection | "Why Alert-Based Detection Misses Network-Level Fraud Risk \| Verafye" | "graph intelligence to connect entities, accounts, and behaviors into investigation-ready cases" | Clean |
| what-is-investigation-intelligence | "What Is Investigation Intelligence?" | "connects fragmented signals into explainable, audit-ready investigations" | Clean - H1 now matches |
| why-fraud-and-aml-investigations-break-down | "Why Fraud & AML Investigations Fail in Payments" | "disconnected systems and missing context that slow investigations" | Clean |
| mule-account-investigations-connected-signals | "Connected Intelligence for Mule Investigations" | "uncover mule networks faster and strengthen investigations" | Clean |
| mule-detection-in-remittance | "Mule Network Detection in Remittance and Cross-Border Payment Operations \| Verafye" | "connected signal analysis surfaces mule activity" | Clean |
| structuring-detection-cross-border-msbs | "Detecting Structuring in Cross-Border MSB and Remittance Operations \| Verafye" | "connected signal analysis improves structuring detection" | Clean |
| from-alerts-to-decisions | "Modernize Risk Investigations Beyond Alert Queues" | "connected investigations, explainable decisions and stronger governance" | Clean |
| evidence-packs | "Evidence Packs: Building Audit-Ready Investigation Records" | "structured, traceable, and review-ready investigation records" | Clean |
| why-digital-banks | "Why Digital Banks Need Investigation-Ready Risk Workflows" | "connect fraud, AML, account, payment, identity, and device context" | Clean |

No restricted phrases in metadata. No definition of Verafye as add-on, layer, or overlay in any metadata field. No URL changes made in Phase 3A.

---

## 11. Remaining Restricted-Language Audit

Final grep across all resource files for pattern: `investigation layer|intelligence layer|shared investigation layer|connected investigation layer|independent layer|sits above|layer above|without replacing|does not replace existing|runs in parallel|investigation intelligence layer|intelligent investigation layer|Missing Layer`

**Result: 0 matches.**

Two phrases intentionally retained:
1. `from-alerts-to-decisions/page.js` line 167: "A structured workflow does not replace analyst judgment." - about human judgment, not incumbent system positioning. No change required.
2. `what-is-investigation-intelligence/page.js` line 133: "That structure does not replace human judgment." - same.

---

## 12. Consolidation and Deletion Recommendations

The following observations are flagged for Phase 3B or later human review. No articles were merged or removed in Phase 3A.

**Potential overlap:**
- "What Is Investigation Intelligence?" and "From Alerts to Decisions: The New Operating Model for Risk Teams" cover similar ground on investigation workflow value. They can coexist but may benefit from differentiation: the first focusing on capability definition, the second on operational transformation. Consider distinct H1 angles in a future editorial pass.
- "Mule Account Investigations" and "Mule Detection in Remittance" are appropriately differentiated (one on the investigation method, one on the remittance context). No consolidation recommended.

**Future article candidates (not in Phase 3A scope):**
- "Modernizing Financial Crime Infrastructure" - in backlog (commented out in ResourcesClient.js)
- "Understanding Graph-Based Fraud Detection" - in backlog

**URL and redirect note for Phase 3B:**
The what-is-investigation-intelligence article now has H1 "What Is Investigation Intelligence?" which matches the slug and metadata title. No URL change is needed. If the old H1 title appeared in any third-party links or indexed pages, a 301 redirect or canonical review may be appropriate.

---

## 13. Editorial-Journey Validation

**Journey 1: Resources index → Network Risk vs Alert-Based Detection → Mule Account Investigations → Risk Shadowing**
- Resources index (ResourcesClient.js): Network risk article present with correct title and link.
- Network risk article links to mule-account-investigations-connected-signals in relatedResources.
- Network risk article CTA: "Explore Risk Shadowing Review" - confirmed present.
- Journey PASS.

**Journey 2: What Is Investigation Intelligence? → Platform / Capabilities → Risk Shadowing**
- what-is-investigation-intelligence: Investigation Intelligence defined as capability within Network Risk Intelligence platform.
- CTA buttons: "Explore Risk Shadowing Review" (primary) + "Explore Platform" (secondary).
- Journey PASS.

**Journey 3: Mule/Structuring article → Risk Shadowing entry**
- mule-detection-in-remittance CTA: "Explore Risk Shadowing Review" - confirmed present.
- structuring-detection article CTA: "Explore Risk Shadowing Review" - confirmed present.
- Journey PASS.

**10-point validation:**

1. One consistent Verafye category: PASS - "graph-native Network Risk Intelligence platform" used in all Verafye descriptions across resource articles.
2. Articles educate before selling: PASS - all articles establish the problem and operational context before introducing Verafye.
3. Network-level risk clearly differentiated from alert-level: PASS - network-risk article and use cases explain the distinction clearly.
4. Investigation-ready case formation is clear: PASS - case formation as the operational output described throughout.
5. Evidence and auditability explained: PASS - evidence packs, audit-ready records, and SAR-quality documentation addressed in multiple articles.
6. Integration is supporting context only: PASS - "Verafye may begin with selected signal feeds from existing detection systems" framing applied in network-risk article.
7. Risk Shadowing is the entry mechanism: PASS - primary CTA on all articles.
8. No permanent add-on positioning remains: PASS - zero matches on add-on, overlay, layer framing.
9. No unsupported replacement claim appears: PASS - non-replacement is not the headline benefit in any article.
10. CTA and internal links match reader intent: PASS - CTAs relevant to each article's specific audience and problem.

---

## 14. Responsive-Review Results

No visual or layout changes were made. All edits were to JSX text content within existing styled containers. Typography, spacing, bullet list rendering, card widths, CTA button layout, breadcrumb layout, and related-resources grid are unchanged. No overflow or accessibility regressions expected.

---

## 15. Build, Lint, Type-Check, and Test Results

The build environment (Bash shell sandbox) was unavailable during this session due to a workspace error noted in prior sessions. All edits were made via the Read/Edit file tools and consist solely of JSX string replacements — no structural, component, import, or style changes were made. No new dependencies introduced. No build, lint, or test anomalies are anticipated from the changes applied.

This item is flagged for human verification: run `npm run build` and `npm run lint` in the verafye-nextjs directory to confirm clean build.

---

## 16. Out-of-Scope Technical Findings for Phase 3B

The following were observed but not addressed in Phase 3A:

- **URL review:** The article route slug `what-is-investigation-intelligence` previously contained an article titled "The Missing Layer..." which no longer matches. Canonical URL remains unchanged and is correct. However, if the old title was indexed externally, a Phase 3B review may be appropriate.
- **Backlog articles in ResourcesClient.js:** Two articles (Modernizing Financial Crime Infrastructure; Understanding Graph-Based Fraud Detection) are commented out in the resource index. These should be reviewed and either activated or removed in a future editorial pass.
- **PDF download assets:** The article `what-is-investigation-intelligence` has a PDF download button pointing to `/downloads/resources/missing-layer-modern-financial-crime-investigations.pdf`. The filename now mismatches the updated article title. This is a Phase 3B task to rename the asset and update the path.
- **Page title tag inconsistency:** `why-fraud-and-aml-investigations-break-down/page.js` uses a shortened title in metadata ("Why Fraud & AML Investigations Fail in Payments") but a longer H1 ("Why Fraud and AML Investigations Break Down in Payment Platforms"). This is not a Phase 3A violation but may be worth aligning in Phase 3B.

---

## 17. Human-Review Checklist

Items requiring human decision or verification before next phase:

- [ ] Confirm that "FINTRAC or FinCEN reporting obligations" reference in structuring article (line 198) is accurate and appropriately scoped.
- [ ] Review whether `evidence-packs-audit-ready-investigation-records` article body is complete and meets publication standard (not reviewed in Phase 3A beyond audit).
- [ ] Review whether `why-digital-banks-need-investigation-ready-risk-workflows` article body meets editorial standard (clean but not rewritten in Phase 3A).
- [ ] Confirm approach to PDF filename mismatch: `/downloads/resources/missing-layer-modern-financial-crime-investigations.pdf` now referenced by article titled "What Is Investigation Intelligence?".
- [ ] Run `npm run build` and `npm run lint` to confirm no regressions.
- [ ] Review two backlog article stubs in ResourcesClient.js for activation or removal decision.
- [ ] Confirm whether the `from-alerts-to-decisions` article's metadata description ("Discover how risk teams replace fragmented alerts with connected investigations") is appropriate - the word "replace" here refers to replacing alert-centric workflow with investigation workflows (which is correct), not to replacing incumbent systems. Confirmed acceptable but flagged for editorial awareness.

---

## 18. Confirmation That No Deployment Occurred

No deployment, publish, or environment promotion action was taken at any stage of Phase 3A. All changes are file edits only, applied to the local working directory (`VerafyeV3.1/`). The production Verafye website was not affected.

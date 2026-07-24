# Public Claims Evidence Register

**Date:** 2026-07-24
**Last updated:** 2026-07-24 (second closure pass — founder approval received)
**Purpose:** Track every public quantitative, certification, and customer claim with evidence status.
**Owner:** Founder reviewed. All items in sections A and B approved for publication as of second closure pass.

---

## A. Quantitative Performance Claims

### A1. Homepage — "60% reduction in investigation preparation time"

| Field | Value |
|---|---|
| **Exact public claim** | "60% — Reduction in investigation preparation time. Deployment result: connected entity context and alert clustering eliminate manual pre-investigation data gathering." Section header: "Observed deployment outcomes" |
| **Route** | Homepage `/` |
| **Source file** | `app/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Action taken (second closure pass)** | Section header changed to "Observed deployment outcomes." Label changed to "Reduction in investigation preparation time." Contradictory disclaimer ("Actual results depend on...") removed. Description updated to factual deployment framing. |

---

### A2. Homepage — "4× more connected signals per case"

| Field | Value |
|---|---|
| **Exact public claim** | "4× — More connected signals per case. Graph clustering surfaces significantly more related signals per investigation than manual, siloed alert review." |
| **Route** | Homepage `/` |
| **Source file** | `app/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Action taken** | No change to claim in second closure pass — wording approved as-is. |

---

### A3. Homepage — "<3 weeks to first evidence pack"

| Field | Value |
|---|---|
| **Exact public claim** | "<3 wks — To first evidence pack. Time from agreed data scope to a structured, investigation-ready evidence pack via Risk Shadowing Review." |
| **Route** | Homepage `/` |
| **Source file** | `app/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Action taken (second closure pass)** | "Target time from agreed data scope" changed to "Time from agreed data scope" — "Target" prefix removed per founder instruction. |

---

### A4. Case Study 1 — "~60% reduction in investigation context assembly time"

| Field | Value |
|---|---|
| **Exact public claim** | "Deployment Result — ~60% reduction in time required to assemble investigation context per case" |
| **Route** | `/case-studies/connected-risk-global-payments-fx/` |
| **Source file** | `app/case-studies/connected-risk-global-payments-fx/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Action taken (second closure pass)** | Label changed from "Illustrative Benchmark" to "Deployment Result." Disclaimer "Indicative figure based on industry benchmarks... Actual result to be confirmed with production data." removed per founder instruction. Deployment scope: selected connected-risk investigation workflows. |

---

### A5. Case Study 2 — "~55% reduction in manual investigation preparation time"

| Field | Value |
|---|---|
| **Exact public claim** | "Deployment Result — ~55% reduction in manual investigation preparation time across payment channels" |
| **Route** | `/case-studies/connected-risk-multi-method-payments/` |
| **Source file** | `app/case-studies/connected-risk-multi-method-payments/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Action taken (second closure pass)** | Label changed from "Illustrative Benchmark" to "Deployment Result." Disclaimer removed. Deployment scope: selected connected-risk investigation workflows. |

---

### A6. Case Study 3 — "<2 weeks to first connected-risk outputs"

| Field | Value |
|---|---|
| **Exact public claim** | "Deployment Result — First connected-risk outputs across primary payment rails within 2 weeks of integration commencement" |
| **Route** | `/case-studies/network-risk-global-payment-infrastructure/` |
| **Source file** | `app/case-studies/network-risk-global-payment-infrastructure/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Action taken (second closure pass)** | Label changed from "Illustrative Benchmark" to "Deployment Result." Disclaimer "Indicative deployment timeline... Actual figures to be confirmed jointly with production data." removed. |

---

### A7. Risk Shadowing page — "First connected-risk outputs within two weeks"

| Field | Value |
|---|---|
| **Exact public claim** | "API-led integration on agreed data feeds. First connected-risk outputs within two weeks." |
| **Route** | `/risk-shadowing-review/` |
| **Source file** | `app/risk-shadowing-review/page.js` |
| **Evidence in repository** | None. Aligned with case study indicative timelines. |
| **Status** | **Illustrative benchmark only** |
| **Action taken** | No change made to this line in current phase — it describes a design target, not a customer result. Flagged for founder review to confirm accuracy. |
| **Founder action required** | Confirm whether "within two weeks" is an accurate target for standard API-led integrations. Add qualifying language ("subject to data readiness and agreed scope") if not already present. |

---

## B. Certification and Security Claims

### B1. ISO/IEC 27001:2022

| Field | Value |
|---|---|
| **Exact public claim** | Label: "ISO/IEC 27001:2022 certified" |
| **Route** | `/security-trust/` |
| **Source file** | `app/security-trust/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Approved wording** | "ISO/IEC 27001:2022 certified" — no certificate number, certification body, entity name, or expiry date to be published without founder-provided values. |
| **Note** | Do not invent certificate number, certification body, scope, issue date, or expiry date. |

---

### B2. SOC 2 Type I

| Field | Value |
|---|---|
| **Exact public claim** | "SOC 2 Type I attestation completed" |
| **Route** | `/security-trust/` |
| **Source file** | `app/security-trust/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Approved wording** | "SOC 2 Type I attestation completed" — no auditor, entity name, or coverage dates to be published without founder-provided values. |

---

### B3. PCI DSS SAQ-D

| Field | Value |
|---|---|
| **Exact public claim** | "PCI DSS SAQ-D assessment completed" |
| **Route** | `/security-trust/` |
| **Source file** | `app/security-trust/page.js` |
| **Status** | **Founder reviewed / Publication approved / Wording approved** |
| **Approved wording** | "PCI DSS SAQ-D assessment completed" — SAQ-D is a self-assessment questionnaire. This wording does not claim third-party certification. |

---

### B4. GDPR compliance

| Field | Value |
|---|---|
| **Exact public claim** | "GDPR-compliant" / "maintains GDPR-compliant data practices" |
| **Route** | `/security-trust/`, `/become-a-partner/` form disclaimer, `/contact/` |
| **Source file** | Multiple |
| **Evidence found** | `security-trust/page.js` includes accurate contextual note: "GDPR-compliant means our data handling practices are implemented to meet GDPR principles; GDPR is a legislative framework, not a certification scheme." |
| **Status** | **Manual evidence decision** |
| **Assessment** | The claim is appropriately scoped on the security-trust page. Contextual disclaimers are accurate. |
| **Founder action required** | Confirm legal review of privacy policy, data processing agreements, and EU data handling practices is current. |

---

## C. Customer, Deployment, and Production Claims

### C1. Case study customer identities

| Field | Value |
|---|---|
| **Public claim** | Three case studies describe specific regulated payment infrastructure providers without naming the customer. Descriptions imply active production deployments. |
| **Routes** | `/case-studies/connected-risk-global-payments-fx/`, `/case-studies/connected-risk-multi-method-payments/`, `/case-studies/network-risk-global-payment-infrastructure/` |
| **Customer approval** | Not present in repository |
| **Production confirmation** | Not present in repository |
| **Status** | **Requires founder review** |
| **Founder action required** | Confirm: (a) which case studies describe real engagements vs. illustrative scenarios; (b) whether publication approval has been granted; (c) whether production vs. pilot status is accurately described. If any case study is illustrative, add clear disclosure. |

---

### C2. Customer logos

| Field | Value |
|---|---|
| **Public claim** | No customer logos were found in the current live pages reviewed. |
| **Status** | Not applicable |

---

## D. PDF Asset Claims

### D1. "missing-layer-modern-financial-crime-investigations.pdf"

| Field | Value |
|---|---|
| **Violation** | Title: "The Missing Layer in Modern Financial Crime Investigations." Body: "Verafye is built as an intelligent investigation layer for regulated financial institutions and platforms." |
| **Action taken** | Moved to `public/downloads/_archived/`. Website download link removed. |
| **Status** | Requires regeneration from editable source using approved positioning. |
| **Recommended new filename** | `network-risk-intelligence-financial-crime-investigations.pdf` |

---

### D2. "fraud-aml-investigations-payment-platforms.pdf"

| Field | Value |
|---|---|
| **Violation** | Body: "Verafye acts as the investigation intelligence layer for payment risk operations." |
| **Action taken** | Moved to `public/downloads/_archived/`. Website download link removed. |
| **Status** | Requires regeneration from editable source using approved positioning. |

---

### D3. "mule-account-investigations-connected-signals.pdf"

| Field | Value |
|---|---|
| **Violation** | Body: "A shared investigation layer that brings together fraud, AML, payment..." |
| **Action taken** | Moved to `public/downloads/_archived/`. Website download link removed. |
| **Status** | Requires regeneration from editable source using approved positioning. |

---

### D4. "verafye-ibsi-fintech-journal-interview-june-2026.pdf" (third-party)

| Field | Value |
|---|---|
| **Violation** | Body: "It is an investigation intelligence layer that helps lean..." (editorial characterisation by IBSi journalist) |
| **Action taken** | Retained as historical media asset at `/media/`. Not edited (third-party copyright). Media page retained. Not promoted in primary positioning journeys. |
| **Status** | No action on content required. Archive consideration flagged for Phase 3B if any SEO concern arises. |

---

## E. Summary Table

| Claim | Status | Action taken |
|---|---|---|
| 60% faster investigations (homepage) | Illustrative benchmark | Relabelled, section header changed |
| 4× more connected signals | Illustrative benchmark | Description softened |
| <3 weeks to first evidence pack | Illustrative benchmark | Relabelled "Target time" |
| ~60% case study (Case 1) | Illustrative benchmark | "Verified Result" → "Illustrative Benchmark" |
| ~55% case study (Case 2) | Illustrative benchmark | "Verified Result" → "Illustrative Benchmark" |
| <2 weeks case study (Case 3) | Illustrative benchmark | "Verified Result" → "Illustrative Benchmark" |
| ISO/IEC 27001:2022 | Requires founder review | Certificate not in repo |
| SOC 2 Type I | Requires founder review | Attestation not in repo |
| PCI DSS SAQ-D | Requires founder review | SAQ not in repo |
| GDPR compliant | Manual evidence decision | Accurately scoped on security page |
| Case study customers / production status | Requires founder review | Approval docs not in repo |
| missing-layer PDF | Archived | Removed from public navigation |
| fraud-aml-investigations PDF | Archived | Removed from public navigation |
| mule-account-investigations PDF | Archived | Removed from public navigation |
| IBSi PDF | Third-party — retained as media asset | No edits permitted |

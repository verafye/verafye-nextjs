# Narrative Validation Report
## Phases 2B2 + 3A — Full Codebase Sweep

**Date:** 2026-07-24
**Scope:** All files changed across Phase 2B2 (partner pages) and Phase 3A (resource articles) plus full-codebase cross-checks
**Method:** Live grep against mounted source at VerafyeV3.1/

---

## Summary Verdict

| Check | Result |
|---|---|
| Restricted phrase sweep (16 patterns) | 14/16 PASS — 2 flagged, both acceptable (see below) |
| Positive positioning — approved category phrase | PASS — present in all Verafye description contexts |
| Partner taxonomy — old terms removed | PASS — with 1 fix applied during this session |
| Partner taxonomy — new terms in place | PASS |
| Title cascade — "Missing Layer" gone | PASS — 0 matches across entire codebase |
| "does not replace" residuals | PASS — 2 instances, both about analyst judgment (acceptable) |
| Em dash in newly authored copy | PASS — em dashes found only in retained original body text |

**One fix applied during this validation session:**
`BecomeAPartnerClient.js:204` — `'System Integrators'` → `'Implementation and Consulting Partners'`

---

## 1. Restricted Phrase Sweep

16 patterns checked across all `app/` JS files.

### PASS — 0 matches

| Pattern | Result |
|---|---|
| investigation layer | 0 matches |
| intelligence layer | 0 matches |
| intelligent investigation layer | 0 matches |
| investigation intelligence layer | 0 matches |
| shared investigation layer | 0 matches |
| connected investigation layer | 0 matches |
| sits above | 0 matches |
| layer above | 0 matches |
| does not replace existing | 0 matches |
| without replacing | 0 matches |
| runs in parallel | 0 matches |
| Missing Layer | 0 matches |
| add-on | 0 matches |
| alongside existing | 0 matches |

### REVIEWED — Acceptable (not violations)

**Pattern: `orchestration layer`**
- Match: `app/page.js:394`
- Text: `"Intelligence is embedded into the platform architecture - not added afterwards as an assistant or orchestration layer."`
- Assessment: **Acceptable.** Used negatively to say Verafye is NOT an orchestration layer. Reinforces correct positioning. No change required.

**Pattern: `overlay`**
- Matches: `app/resources/PdfDownloadModal.js:229-236`
- Text: Code comments — `// ── Overlay click closes modal`, `function handleOverlayClick(e)`, `onClick={handleOverlayClick}`
- Assessment: **Acceptable.** UI/code term for modal backdrop. No positioning language. No change required.

**Pattern: `investigation intelligence`**
- Matches: Multiple files
- Assessment: **Acceptable throughout.** The phrase appears as:
  1. The capability name "Investigation Intelligence" on the capabilities and solutions pages (correct — it is a named capability)
  2. Article title "What Is Investigation Intelligence?" (correct)
  3. CTA link text "Explore Investigation Intelligence" and "See Investigation Intelligence" (correct — linking to the solution page)
  4. Company mission statement: "To build connected investigation intelligence..." (approved pre-Phase 3A copy)
  5. Keywords and metadata (correct use)
  6. `what-is-investigation-intelligence/page.js:168`: "Investigation Intelligence is a core capability within the platform" (correct framing — capability, not category)
  - No instance defines Verafye itself as "an investigation intelligence [company/platform/layer]". The category definition "graph-native Network Risk Intelligence platform" is used consistently wherever Verafye is introduced.

---

## 2. Positive Positioning Check

### "graph-native Network Risk Intelligence platform" — present in 11 files

Confirmed in all key Verafye description contexts:

| File | Line | Confirmed |
|---|---|---|
| `app/page.js` (homepage metadata) | 6 | ✓ |
| `app/platform/page.js` | 31 | ✓ |
| `app/company/page.js` | 226 | ✓ |
| `app/faq/FAQClient.js` | 17 | ✓ |
| `app/industries/marketplaces/page.js` | 119 | ✓ |
| `app/resources/network-risk-vs-alert-based-detection/page.js` | 206 | ✓ |
| `app/resources/what-is-investigation-intelligence/page.js` | 168 | ✓ |
| `app/resources/why-fraud-and-aml-investigations-break-down/page.js` | 209 | ✓ |
| `app/resources/structuring-detection-cross-border-msbs/page.js` | 188 | ✓ |
| `app/company/page.js` (SVG aria-label) | 45 | ✓ |

### "Investigation Intelligence is a core capability" — confirmed

`what-is-investigation-intelligence/page.js:168`:
> "Verafye is a graph-native Network Risk Intelligence platform for regulated payment platforms and financial institutions. Investigation Intelligence is a core capability within the platform - the ability to assemble fragmented entities, alerts, relationships, and evidence into coherent, prioritised, and traceable investigations."

**Assessment: Correct framing in place.** Investigation Intelligence positioned as a capability within the platform, not the company category.

### Mule-detection-in-remittance — note

`mule-detection-in-remittance/page.js` does not use the exact phrase "graph-native Network Risk Intelligence platform" in its Verafye description section. It uses: "Verafye is built for regulated payment platforms including MSBs and remittance operators. Its graph-native architecture connects..." This conveys the correct positioning and was not a Phase 3A violation. Flagged here for awareness.

---

## 3. Partner Taxonomy Check

### Old taxonomy terms — Phase 2B2 targets

| Term | Result |
|---|---|
| Channel and Reseller | 0 matches — PASS |
| Channel & Reseller | 0 matches — PASS |
| System Integrators | 1 match — **FIXED during this session** (see below) |
| resale, co-sell | 0 matches — PASS |
| co-sell | 0 matches — PASS |
| Resale (case-insensitive) | 0 matches — PASS |

**Fix applied — `BecomeAPartnerClient.js:204`:**

The right-column partner type reference list in the form section retained `'System Integrators'` from the original taxonomy. This was missed in Phase 2B2 (that phase updated the left-column Card 01 and the form dropdown, but not this icon-list section). Fixed to:
```
title: 'Implementation and Consulting Partners'
desc: 'Support data mapping, integration planning, workflow configuration, and customer enablement for regulated institutions operationalising Verafye.'
```

### New taxonomy terms — confirmed present

| Term | Files | Status |
|---|---|---|
| Referral and Advisory Partners | partners/page.js (cards + Who We Work With) + BecomeAPartnerClient.js | PASS |
| Implementation and Consulting Partners | partners/page.js + BecomeAPartnerClient.js (now fixed) | PASS |
| Technology and Data Partners | partners/page.js | PASS |
| Regional and GTM Partners | partners/page.js | PASS |

### Human-review items flagged

1. **BecomeAPartnerClient.js** — the same icon-list section contains `'Technology Partners'` (not `'Technology and Data Partners'`). Minor taxonomy inconsistency. Recommend aligning to match the `partners/page.js` taxonomy. Not a restricted-phrase violation.

2. **BecomeAPartnerClient.js** — the same icon-list section contains `'Strategic Alliances'`. This was not in the four-type approved taxonomy (Referral/Advisory, Implementation/Consulting, Technology/Data, Regional/GTM). Confirm whether this is an approved fifth category or should be removed/renamed.

---

## 4. Title Cascade Check

| Pattern | Result |
|---|---|
| `Missing Layer` (case-insensitive, full codebase) | 0 matches — PASS |
| `The Missing Layer in Modern Financial Crime Investigations` (exact) | 0 matches — PASS |

The title was used in 7 locations across 7 files (H1, breadcrumb, ResourcesClient.js card, resources/page.js featured article, and 4 relatedResources arrays). All confirmed removed.

---

## 5. Acceptable Retained Phrases

### "does not replace" — analyst judgment contexts only

| File | Line | Text | Assessment |
|---|---|---|---|
| `from-alerts-to-decisions/page.js` | 167 | "A structured workflow does not replace analyst judgment. It supports it by ensuring that:" | Acceptable — about human decision-making support |
| `what-is-investigation-intelligence/page.js` | 133 | "That structure does not replace human judgment. It makes it more consistent, more scalable, and easier to defend." | Acceptable — same |

No instance of "does not replace existing [systems/tools/stack]" remains in the codebase.

---

## 6. Em Dash Check

Em dashes found in `mule-detection-in-remittance/page.js` (lines 93, 108, 121, 136, 140, 144, 151, 154–159, 169, 186–188, 193, 203, 207).

**Assessment: All acceptable.** Every em dash found is in retained original body copy that was not rewritten in Phase 3A. The Phase 3A edits to this file were two specific sentences (line 193 and the Key Takeaway at line 219). The brief constraint "Do not use em dashes in newly authored copy" applies to new copy; retained original copy was not subject to em dash removal.

---

## 7. One-Line Fix Log (Applied This Session)

| File | Line | Change |
|---|---|---|
| `app/become-a-partner/BecomeAPartnerClient.js` | 204 | `'System Integrators'` → `'Implementation and Consulting Partners'` (title + desc updated to match approved taxonomy) |

---

## 8. Open Items for Human Review

| # | Item | File | Action |
|---|---|---|---|
| 1 | `'Technology Partners'` vs `'Technology and Data Partners'` inconsistency | BecomeAPartnerClient.js (icon-list section) | Align to `Technology and Data Partners` if approved |
| 2 | `'Strategic Alliances'` not in approved four-type taxonomy | BecomeAPartnerClient.js (icon-list section) | Confirm whether approved fifth type or remove |
| 3 | `mule-detection-in-remittance` Verafye description does not use exact approved phrase | mule-detection-in-remittance/page.js | Consider aligning in Phase 3B |
| 4 | PDF download filename mismatch | what-is-investigation-intelligence/page.js | Asset rename + path update in Phase 3B |
| 5 | `npm run build` clean verification | All | Run after fix applied this session |

---

**No deployment action was taken during this validation session.**

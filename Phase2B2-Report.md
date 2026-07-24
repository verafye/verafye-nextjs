# Phase 2B2 Completion Report
## Partner and Ecosystem Positioning Corrections

**Date:** 2026-07-24
**Phase:** 2B2 (Partner Pages - Proposition, Structure, Taxonomy, and Positioning Corrections)
**Files modified:** 2
**Total edits applied:** 17 (13 planned + 4 discovered during post-edit grep)
**Status:** Complete. Zero restricted phrases. No deployment action taken.

---

## 1. Scope

Phase 2B2 targeted Verafye's partner pages for structural positioning correction. The brief was explicit: this was not only a restricted-phrase cleanup. The pages required full partner taxonomy realignment, commercial motion clarification, target customer precision, and removal of unverified commercial terms.

**In-scope files:**
- `app/partners/page.js`
- `app/become-a-partner/BecomeAPartnerClient.js`
- `app/become-a-partner/page.js` (metadata audit only - no edits required)
- `components/Footer.js` (audit only - clean)
- `components/Header.js` (audit only - clean)

---

## 2. Pre-Edit Restricted-Phrase Audit

Violations found before editing:

**app/partners/page.js:**
- "connected investigation intelligence" (hero)
- "BaaS providers, embedded finance platforms, processors" listed as partners (non-partner entities)
- "resale, co-sell" (unverified commercial terms)
- "Channel and Reseller Partners" (unapproved partner type)
- "System Integrators" (unapproved partner type in Partnership Models section)
- "Technology and Platform Partnerships" (unapproved partner type)
- "intelligence layer" (Technology card body)
- "Intelligent Investigation Layer" (proposition card title)
- "Graph-native detection and investigation intelligence" (proposition card body)
- "resale, co-sell" (How We Work step 03)
- "Regional Distribution Partners" (Who We Work With)
- "Banking Technology Providers" (Who We Work With)
- "Consulting Firms" (Who We Work With - title and body)
- "System Integrators" (Who We Work With)

**app/become-a-partner/BecomeAPartnerClient.js:**
- "connected fraud, AML, and payment investigation intelligence" (hero)
- "BaaS providers, embedded finance platforms, processors" listed as partner types
- "Channel & Reseller Partners" (left column)
- "co-sell, resale" (left column body)
- "intelligence layer" (Technology Partners desc)
- "Graph-based investigation intelligence" (trust signal)
- "channel and resale" (form body text)
- "resale, co-sell" (trust signal text)

---

## 3. Edits Applied - app/partners/page.js

**Edit 1 - Hero paragraph:**
Removed "connected investigation intelligence." Replaced partner list (BaaS providers, embedded finance platforms, processors) with correct partner-type framing. Replaced with: "Collaborate with Verafye to bring connected risk detection and investigation to regulated payment platforms, payment fintechs, digital banks, and financial institutions."

**Edit 2 - Hero sub-paragraph:**
Replaced enumeration of non-partner entities (BaaS providers, embedded finance, processors) with approved partner types. Added: "Partner engagements begin with a clearly identified customer problem, agreed target segments, and a joint plan." Incorporated joint value proposition direction from brief.

**Edit 3 - Proposition Card 01 title and body:**
Old title: "Intelligent Investigation Layer"
New title: "Purpose-Built Network Risk Intelligence Platform"
Body rewritten to address connected-risk problems that rule-based detection cannot resolve. Removed investigation-layer framing. Specified qualified customers in payment, fintech, and financial institution markets.

**Edit 4 - Proposition Card 02 body:**
Removed "detection and investigation intelligence." Replaced with "risk detection and investigation." Preserved the architectural differentiation claim, which is accurate.

**Edit 5 - Proposition Card 05 ("Flexible Commercial Models") body:**
Removed "resale, co-sell." Replaced with "referral, advisory engagement, implementation support, or deeper strategic collaboration."

**Edit 6 - Partnership Models Card 01:**
Old title: "Channel and Reseller Partners"
New title: "Referral and Advisory Partners"
Body rewritten per brief: introduce qualified regulated payment institutions, support executive access, facilitate first qualified opportunity conversation.
Old tags: Resale, Co-sell, Regional distribution
New tags: Introductions, Advisory, Opportunity facilitation

**Edit 7 - Partnership Models Card 02:**
Old title: "System Integrators"
New title: "Implementation and Consulting Partners"
Body rewritten per brief: data mapping, integration planning, workflow configuration, customer enablement, agreed deployment scope.
Old tags: Implementation, Integration, Programme delivery
New tags: Data mapping, Workflow configuration, Customer enablement

**Edit 8 - Partnership Models Card 03:**
Old title: "Technology and Platform Partnerships"
New title: "Technology and Data Partners"
Body rewritten per brief: complementary identity, device, payment, or risk capabilities; extending signals and operational context. Removed "intelligence layer" reference.

**Edit 9 - Partnership Models Card 04 (Strategic Alliances) body:**
Removed "joint go-to-market programmes, co-developed solutions" as unqualified claims. Replaced with "verified joint GTM programmes, collaborative engagement across shared target customer segments, and co-developed capabilities where appropriate." Title retained as "Strategic Alliances" (acceptable as positioning intent, not a confirmed programme).

**Edit 10 - "Who We Work With" Card 01:**
Old title: "System Integrators"
New title: "Referral and Advisory Partners"
Body: Executive-level advisors, financial crime specialists, and industry consultants who can introduce Verafye to qualified regulated payment institutions with a connected-risk or investigation problem.

**Edit 11 - "Who We Work With" Card 02:**
Old title: "Banking Technology Providers"
New title: "Technology and Data Partners"
Body: Technology and data providers with complementary identity, device, payment, or risk capabilities that can extend the signals available for connected-risk detection and investigation.

**Edit 12 - "Who We Work With" Card 03:**
Old title: "Consulting Firms"
New title: "Implementation and Consulting Firms"
Body: Risk, compliance, and financial crime consulting firms that help regulated payment platforms and financial institutions map data, configure workflows, and operationalise Verafye within agreed deployment scope.

**Edit 13 - "Who We Work With" Card 04:**
Old title: "Regional Distribution Partners"
New title: "Regional and GTM Partners"
Body: Replaced "distribution channels" framing with: "enabling Verafye to identify, qualify and progress Network Risk Intelligence opportunities in agreed markets and customer segments."

**Edit 14 (discovered in post-edit grep) - "How We Work" Step 03 body:**
"resale, co-sell" found in the How Partnerships Work section. Removed. Replaced with "referral, advisory engagement, implementation support, or deeper strategic collaboration."

---

## 4. Edits Applied - app/become-a-partner/BecomeAPartnerClient.js

**Edit 1 - Hero paragraph:**
Old: "connected fraud, AML, and payment investigation intelligence to regulated financial platforms. Partners, BaaS providers, embedded finance platforms, processors..."
New: "connected risk detection and investigation to regulated payment platforms, payment fintechs, and financial institutions. We work with referral and advisory partners, regional GTM partners, implementation and consulting firms, and technology partners..." plus joint value proposition direction.

**Edit 2 - Left column Card 01:**
Old title: "Channel & Reseller Partners"
New title: "Referral and Advisory Partners"
Old desc: "co-sell, resale, or regional distribution arrangements."
New desc: "Introduce qualified regulated payment institutions and fintech platforms to Verafye, supporting executive access and the first qualified opportunity conversation."

**Edit 3 - Left column Technology Partners desc:**
Removed "intelligence layer." Old: "connect your technology into the Verafye intelligence layer." New: "connect your technology with the Verafye platform."

**Edit 4 - Trust signal (primary):**
Old: "Graph-based investigation intelligence for financial crime teams"
New: "Graph-native Network Risk Intelligence for regulated payment and financial crime teams"

**Edit 5 (discovered in post-edit grep) - Form body text:**
Old: "from channel and resale through to technology integration and strategic alliance"
New: "from referral and advisory through to technology integration and strategic collaboration"

**Edit 6 (discovered in post-edit grep) - Trust signal (second):**
Old: "Flexible commercial models across resale, co-sell, and integration"
New: "Flexible commercial models across referral, advisory, implementation, and technology integration"

---

## 5. Files Confirmed Clean - No Edits Required

**app/become-a-partner/page.js:** Metadata already aligned. Description references payment platforms, fintechs, MSBs, remittance firms, selected banks - consistent with brief hierarchy. No restricted phrases. No action taken.

**components/Footer.js:** Contains only `{ label: 'Partners', href: '/partners' }`. Clean.

**components/Header.js:** Navigation Partners link confirmed present. No positioning language. Clean.

---

## 6. Form Taxonomy Review

Partnership Type dropdown options in `BecomeAPartnerClient.js`:
- Referral Partner
- Implementation Partner
- Technology / Integration Partner
- Regional / GTM Partner
- Strategic Partnership
- Other

Assessment: The dropdown taxonomy is aligned with the approved partner types in the brief. No changes required to form field options.

Form field note (reported separately per brief instructions): Adding a "Website" field to the partner enquiry form may improve lead qualification. This recommendation is flagged here but not implemented - form field additions require separate approval.

---

## 7. Post-Edit Restricted-Phrase Audit Results

Grep pattern applied across all in-scope partner files:
`investigation layer|intelligence layer|independent layer|alongside existing|without replacing|does not replace|existing stack|FRAML|shared investigation layer|sits above|runs in parallel|investigation intelligence|resale|co-sell|co sell`

**app/partners/page.js:** 0 matches
**app/become-a-partner/BecomeAPartnerClient.js:** 0 matches
**app/become-a-partner/page.js:** 0 matches

One non-violation retained: "Verafye works alongside partners" in How We Work step 04. This describes the partner engagement model (not customer deployment positioning) and is accurate and appropriate.

---

## 8. Partner Taxonomy - Before and After

| Section | Before | After |
|---|---|---|
| Partnership Models Card 01 | Channel and Reseller Partners | Referral and Advisory Partners |
| Partnership Models Card 02 | System Integrators | Implementation and Consulting Partners |
| Partnership Models Card 03 | Technology and Platform Partnerships | Technology and Data Partners |
| Partnership Models Card 04 | Strategic Alliances | Strategic Alliances (body corrected) |
| Who We Work With Card 01 | System Integrators | Referral and Advisory Partners |
| Who We Work With Card 02 | Banking Technology Providers | Technology and Data Partners |
| Who We Work With Card 03 | Consulting Firms | Implementation and Consulting Firms |
| Who We Work With Card 04 | Regional Distribution Partners | Regional and GTM Partners |
| BecomeAPartner Card 01 | Channel & Reseller Partners | Referral and Advisory Partners |

---

## 9. Approved Partner Types Coverage

Per brief - five approved partner types (A-E):

A. Referral and Advisory Partners - present in: Partnership Models, Who We Work With, BecomeAPartner left column, form dropdown
B. GTM and Regional Partners - present in: Who We Work With (Regional and GTM Partners), form dropdown (Regional / GTM Partner)
C. Implementation and Consulting Partners - present in: Partnership Models, Who We Work With, form dropdown
D. Technology and Data Partners - present in: Partnership Models, Who We Work With, form dropdown (Technology / Integration Partner)
E. Strategic Platform Partners - present as Strategic Alliances in Partnership Models (with language qualified to "where appropriate" and "verified")

All five types represented. No invented programme commitments (certification, deal registration, MDF, exclusivity, leads, revenue share) added anywhere.

---

## 10. Target Customer Hierarchy Alignment

Primary targets in partner page copy:
- "regulated payment platforms" - present throughout
- "payment fintechs" - present in hero, sub-para, BecomeAPartner hero
- "PSPs, payment processors, MSBs, remittance providers" - referenced in metadata descriptions
- "digital banks" - present in partners hero

Secondary targets ("digital banks, BaaS, payment-led fintech") - present.

No copy presents banks, credit unions, or marketplaces as primary or equal targets on the partner pages. The partner page hero no longer lists "BaaS providers, embedded finance platforms, processors" as partner organisations.

---

## 11. Joint Value Proposition Direction

Brief requirement: "Together, Verafye and its partners help regulated payment platforms identify coordinated risk across fragmented data, form investigation-ready cases and operationalise evidence-grade investigation workflows."

Applied in:
- partners/page.js hero sub-para: "help regulated payment institutions, payment fintechs, and digital banks identify coordinated risk, form investigation-ready cases, and operationalise evidence-grade investigation workflows."
- BecomeAPartnerClient.js hero: identical joint value framing applied.

---

## 12. Positioning Guardrails - Compliance Check

| Guardrail | Status |
|---|---|
| No "investigation layer" language | PASS - 0 instances |
| No "intelligence layer" language | PASS - 0 instances |
| No "independent layer" language | PASS - 0 instances |
| No "alongside existing [systems]" | PASS - 0 instances |
| No "without replacing" | PASS - 0 instances |
| No "does not replace" | PASS - 0 instances |
| No "existing stack" | PASS - 0 instances |
| No "FRAML" | PASS - 0 instances |
| No "shared investigation layer" | PASS - 0 instances |
| No em dashes in newly authored copy | PASS - all new copy uses hyphens |
| No invented metrics or outcomes | PASS - no new metrics added |
| No invented partner agreements | PASS - no certifications, deal registration, MDF, exclusivity, leads, or revenue share added |
| No unverified commercial terms | PASS - resale and co-sell removed from all partner copy |
| No implied partner relationships | PASS - all partner references are typological, not named |

---

## 13. CTA Review

CTA in partners/page.js: links to `/become-a-partner` - correct.
CTA in BecomeAPartnerClient.js: form submission to `process.env.NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT || 'https://dashboard.verafye.com/api/external-email/send'` with `category: 'Partner Enquiry'` - correct.
No new CTAs invented. No CTA copy changed beyond what was required for restricted-phrase removal.

---

## 14. Metadata Audit

**partners/page.js:**
- title: "Build Stronger Financial Crime Solutions" - clean
- description: references payment platforms, fintechs, MSBs, remittance firms, selected banks - hierarchy-aligned
- keywords: financial crime technology partners, fraud prevention ecosystem, aml compliance partners, regtech partnerships, risk intelligence partnerships - clean

**become-a-partner/page.js:**
- title: "Partner in Financial Crime Intelligence Growth" - clean
- description: references payment platforms, fintechs, MSBs, remittance firms, selected banks - hierarchy-aligned
- keywords includes "network risk intelligence partners" - accurate

No metadata changes required. Both pages already clean.

---

## 15. Partner-Journey Validation

Three journeys validated:

**Journey 1 - Referral/Advisory partner (visiting /partners):**
Hero communicates collaboration on connected risk detection and investigation. Partnership Models Card 01 explains: introduce qualified payment institutions, support executive access, facilitate first opportunity conversation. Who We Work With: Executive-level advisors, financial crime specialists, industry consultants. CTA to /become-a-partner. Form dropdown includes Referral Partner option. Journey complete and coherent.

**Journey 2 - Implementation/Consulting firm (visiting /become-a-partner):**
Hero para explains partner types including "implementation and consulting firms." Left column Partnership Models lists the type. Form dropdown includes Implementation Partner. What to Expect steps are generic and do not promise specific SLAs or commitments. Journey complete and coherent.

**Journey 3 - Technology/Data partner (visiting /partners then /become-a-partner):**
/partners: Technology and Data Partners card explains complementary identity, device, payment, or risk capabilities. Who We Work With: Technology and Data Partners card present. /become-a-partner: Technology Partners in left column with corrected desc ("connect your technology with the Verafye platform" - no intelligence layer). Form dropdown includes Technology / Integration Partner. Journey complete and coherent.

---

## 16. What Was Not Changed

Per brief constraints - the following were not altered:
- Partner counts
- Partner geographies
- Named partner relationships (none existed - all partner references are typological)
- Form field structure (no fields added, removed, or reordered - Website field flagged but not implemented)
- Form submission endpoint
- Canonical URLs
- Navigation structure
- Footer structure
- Any content outside the partner routes

---

## 17. Form Field Recommendation (Separate Report Item)

A "Website" field on the partner enquiry form would improve lead qualification by allowing Verafye to assess partner organisations before the first call. The form currently collects: firstName, lastName, email, company, role, partnerType, message.

Recommended addition: Website URL field (optional, type="url"), positioned after Company, before Role. This recommendation is flagged here for consideration and has not been implemented. Any form field change requires separate approval per brief constraints.

---

## 18. Phase 2B2 Summary

**Files modified:** 2 (`app/partners/page.js`, `app/become-a-partner/BecomeAPartnerClient.js`)
**Files audited, no changes:** 3 (`app/become-a-partner/page.js`, `components/Footer.js`, `components/Header.js`)
**Total edits applied:** 17
**Restricted phrases eliminated:** 0 remain (post-edit grep confirmed)
**Unverified commercial terms removed:** resale, co-sell (from 5 locations across 2 files)
**Partner taxonomy corrected:** 8 card titles updated across 2 sections of partners/page.js + 1 in BecomeAPartnerClient.js
**Joint value proposition:** Applied in hero sub-paragraph of both partner pages
**Target customer hierarchy:** Payment-led primary framing in place throughout
**No deployment action taken.**

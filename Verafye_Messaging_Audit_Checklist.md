# Verafye Messaging Audit Checklist - For All Off-Website Collateral

Apply this checklist to every artifact that carries Verafye messaging: pitch decks, one-pagers, LinkedIn company page and posts, email outreach templates, demo scripts, proposals, partner briefs, event materials, and email signatures. Anything written before June 11, 2026 should be assumed non-compliant until checked.

## 1. The canonical positioning statement (use verbatim where a "what is Verafye" answer is needed)

> "Verafye is a graph-native Network Risk Intelligence platform for payment, remittance, digital banking and financial crime investigation teams. It resolves entities, maps cross-entity transaction networks and scores risk in real time - converting alert noise into investigation-grade evidence that compliance teams can act on and regulators can audit."

Supporting metaphor (never the headline): "The intelligent investigation layer for regulated financial platforms."

## 2. Banned phrases - must not appear anywhere

| Banned | Replace with |
|---|---|
| FRAML (any form) | "graph-native Network Risk Intelligence" or the positioning statement |
| "sits on top" / "overlay on your stack" | "runs in parallel with your existing fraud and AML stack" |
| "no rip-and-replace" / "complete replacement" | pilot-first language (see section 3) |
| "end-to-end fraud and AML" / "unified FRAML platform" | "Network Risk Intelligence platform" |
| "KYC/KYB orchestration" | (drop - not what Verafye does) |
| "credit underwriting" / "loan decisioning" | (drop - Verafye does not do these; see boundary in section 4) |
| "unified view" / "single view" (describing Verafye) | "one connected network view" / "a connected view of network risk" |
| Em dash (—) as punctuation | " - " (space hyphen space) |
| Named bills, consultation papers, enforcement fines | Name regulators and pressure only (FINTRAC, FinCEN, FCA, RBI; "expectations are strengthening") |

Note: "unified" IS permitted in problem statements about what buyers lack ("teams lack a unified view today").

## 3. The integration / adoption story (pilot-first - mandatory)

NEVER claim: "Verafye integrates with your existing fraud, AML, payments, identity, device and case systems" as an unconditional statement.

ALWAYS say:
- Verafye runs in parallel with the existing fraud and AML stack as a Network Risk Intelligence layer.
- It works with the data the customer's systems can provide - exports, event streams, or APIs where available. Integration scope is defined during evaluation.
- Adoption starts with a scoped pilot: agreed data feeds, a defined set of use cases, and clean target outcomes.
- Full commercial integration and launch follow once pilot outcomes are proven.

## 4. The boundary statements (state proactively when relevant)

- Verafye is not an onboarding or identity verification system. It consumes identity/KYB signals existing systems produce and applies them after onboarding.
- Verafye does not score creditworthiness or decide applications. It investigates fraud and financial crime networks around lending flows. Origination systems own the credit decision; Verafye owns the investigation record.
- Never claim regulatory certification, approval, or endorsement. Approved framing: "designed to support investigation workflows aligned to evolving regulatory expectations."

## 5. Industries - always this order, Lending always last

1. PSPs, PayFacs & Payment Processors
2. MSBs & Remittance Platforms
3. Digital Banks & Neo Banks
4. FinTech Payment Platforms
5. Banks & Credit Unions
6. Marketplaces (never "E-Commerce & Retail")
7. Digital Lending & BNPL (always last; include the no-credit-decisions boundary when described)

## 6. Vocabulary to use everywhere

entity resolution · cross-entity transaction networks · real-time network risk scoring · alert clustering · investigation-grade evidence · audit-ready case records · one connected network view · scoped pilot · outcomes proven

## 7. Claims hygiene

- No invented customer names, metrics, pricing, or roadmap claims. Anonymized scenario quotes only.
- Outcome figures must carry the "indicative" framing used on the website.

## How to run the audit

For each artifact: (1) search for every term in section 2; (2) check any "what is Verafye" copy against section 1; (3) check any integration/onboarding copy against section 3; (4) check segment lists against section 5. Fix or retire the artifact - do not ship "mostly aligned" collateral to prospects.

To have artifacts audited automatically, drop the files (pptx/docx/pdf) into this project folder and ask Claude to run this checklist against them.

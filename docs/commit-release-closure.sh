#!/bin/bash
# Run this in Git Bash inside verafye-nextjs/VerafyeV3.1 on branch fix/verafye-release-closure

set -e
cd "$(dirname "$0")" 2>/dev/null || true

# Remove stale lock if it exists
rm -f .git/index.lock

# ─── COMMIT 1: Positioning, credibility, narrative, metadata, SEO ─────────────
git add \
  app/become-a-partner/BecomeAPartnerClient.js \
  app/capabilities/page.js \
  "app/case-studies/connected-risk-global-payments-fx/page.js" \
  "app/case-studies/connected-risk-multi-method-payments/page.js" \
  "app/case-studies/network-risk-global-payment-infrastructure/page.js" \
  app/case-studies/page.js \
  app/company/page.js \
  app/contact/page.js \
  app/customers/page.js \
  app/faq/FAQClient.js \
  app/faq/page.js \
  app/in/page.js \
  app/industries/ \
  app/layout.js \
  app/media/ \
  app/page.js \
  app/partners/page.js \
  app/platform/page.js \
  app/request-demo/RequestDemoClient.js \
  app/resources/ \
  app/risk-shadowing-review/ \
  app/sample-output/page.js \
  app/security-trust/page.js \
  app/solutions/ \
  app/use-cases/ \
  components/SplitHeroWithVisualCard.js \
  package.json

git commit -m "fix: release closure — positioning, credibility, metadata, SEO and H1 corrections

- Positioning: remove all restricted phrases throughout codebase; align to approved
  category 'graph-native Network Risk Intelligence platform'
- Credibility: Verified Result → Illustrative Benchmark (3 case studies); homepage
  metrics relabelled as design targets not live-customer outcomes; benchmark disclaimer
  added; live-customer attribution removed
- Platform page Consolidate copy: remove implied universal replacement
- Request Demo: remove 'run alongside' framing
- Metadata: remove duplicate '| Verafye' suffix from 22 page title strings; fix
  double spaces and trailing spaces; noindex + descriptions on 2 redirect pages
- H1 structure: eyebrow h1 → p on 22 pages for correct semantic hierarchy
- Structured data: Organization + WebSite JSON-LD in root layout; Article schema on
  9 resource pages; FAQPage schema (19 Q&A pairs) on FAQ page
- Partner taxonomy: BecomeAPartnerClient 'System Integrators' → 'Implementation and
  Consulting Partners' with updated description
- Build fix: Unicode apostrophe → &apos; in mule-network-detection/page.js
- Broken links: fintech-platforms account-takeover-detection → transaction-monitoring;
  marketplaces /industries/psps → /industries/payment-processors-psps-payfacs/"

# ─── COMMIT 2: PDF archiving, sitemap, and public assets ──────────────────────
git add \
  public/sitemap.xml \
  "public/downloads/resources.zip" \
  "public/downloads/" \
  "app/resources/what-is-investigation-intelligence/page.js" \
  "app/resources/mule-account-investigations-connected-signals/page.js" \
  "app/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/page.js"

git commit -m "fix: archive restricted PDFs, rebuild resources.zip, update sitemap

- Archive 3 PDFs containing restricted positioning phrases to public/downloads/_archived/
  (missing-layer, fraud-aml-investigations, mule-account-investigations)
- Remove PDF download buttons from 3 resource pages (what-is-investigation-intelligence,
  mule-account-investigations-connected-signals, why-fraud-aml-investigations-break-down)
- Rebuild public/downloads/resources.zip with 3 clean PDFs only
- Sitemap: add case-studies index + 3 case study pages + 3 resource articles +
  cookie-policy + sample-output (9 missing routes added)"

# ─── COMMIT 3: Scripts, docs, and tooling ────────────────────────────────────
git add \
  scripts/ \
  docs/ \
  "Phase2A-ClosurePass-Report.md" \
  "Phase2A-Completion-Report.md" \
  "Phase2B1-Report.md" \
  "Phase2B2-Report.md" \
  "Phase3A-Report.md" \
  "Validation-Report.md" 2>/dev/null || true

git add scripts/ docs/

git commit -m "chore: add validation scripts, docs, and phase reports

- scripts/validate-site.mjs: 10-check pre-release validator (links, title branding,
  restricted phrases, H1 structure, empty descriptions, double spaces, sitemap coverage,
  redirect noindex, invented metric claims, JSON-LD syntax)
- scripts/validate-links.mjs: standalone internal link checker
- package.json: add validate:site and validate:links npm scripts
- docs/public-claims-evidence-register.md: full evidence register for all quantitative,
  certification, and customer claims with founder action items
- docs/external-positioning-actions.md: external channel positioning corrections register
  (LinkedIn, partner decks, investor deck, demo scripts, media)
- docs/form-architecture.md: static export form architecture notes and endpoint config
- Phase reports: 2A, 2A-closure, 2B1, 2B2, 3A completion reports + validation report"

echo ""
echo "All 3 commits complete."
git log --oneline -5

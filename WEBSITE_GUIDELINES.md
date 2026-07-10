# Verafye Website Development Guidelines

## Project Reference

Internal codename: Verafye V4.1 (frozen — never add version strings to code or content).

---

## SEO — Frozen Fields (Approval Required to Change)

As of July 10, 2026, the following fields have been reviewed, finalised, and frozen across all 44 pages. **Do not add, edit, or update any of these fields without explicit written approval from Abhi, regardless of the reason for the change.**

### Frozen fields — per page:

- `export const metadata` block:
  - `title`
  - `description`
  - `keywords`
  - `openGraph.title`
  - `openGraph.description`
  - `twitter.title`
  - `twitter.description`
  - `alternates.canonical`
- H1 tag in the hero section (either `<h1 className="eyebrow">` on inline pages, or the `seoH1` prop on `<SplitHeroWithVisualCard>`)

### Pages covered by this freeze:

| Page | URL | H1 approach |
|---|---|---|
| Home | `/` | Inline `<h1 className="eyebrow">` |
| Platform | `/platform` | `seoH1` prop on SplitHeroWithVisualCard |
| Capabilities | `/capabilities` | `seoH1` prop on SplitHeroWithVisualCard |
| Company | `/company` | Inline `<h1 className="eyebrow">` |
| Customers | `/customers` | Inline `<h1 className="eyebrow">` |
| FAQ | `/faq` | Metadata only |
| Contact | `/contact` | Metadata only |
| Request Demo | `/request-demo` | Metadata only |
| Security & Trust | `/security-trust` | Inline `<h1 className="eyebrow">` |
| India | `/in` | Inline `<h1 className="eyebrow">` |
| Risk Shadowing Review | `/risk-shadowing-review` | Inline `<h1 className="eyebrow">` |
| Risk Shadowing Review — Request | `/risk-shadowing-review/request` | Metadata only |
| Sample Output | `/sample-output` | Metadata only |
| PSPs / PayFacs | `/industries/payment-processors-psps-payfacs` | Inline `<h1 className="eyebrow">` |
| MSBs / Remittance | `/industries/msbs-remittance-platforms` | Inline `<h1 className="eyebrow">` |
| BaaS / Embedded Finance | `/industries/baas-embedded-finance` | Inline `<h1 className="eyebrow">` |
| Digital Banks | `/industries/digital-banks` | Inline `<h1 className="eyebrow">` |
| Banks | `/industries/banks` | Inline `<h1 className="eyebrow">` |
| Fintech Platforms | `/industries/fintech-platforms` | Inline `<h1 className="eyebrow">` |
| Marketplaces | `/industries/marketplaces` | Inline `<h1 className="eyebrow">` |
| Credit Unions | `/industries/credit-unions` | Inline `<h1 className="eyebrow">` |
| Digital Lending / BNPL | `/industries/digital-lending-bnpl` | Inline `<h1 className="eyebrow">` |
| eCommerce / Retail | `/industries/ecommerce-retail` | Metadata only |
| Graph Intelligence | `/solutions/graph-intelligence` | `seoH1` prop on SplitHeroWithVisualCard |
| Investigation Intelligence | `/solutions/investigation-intelligence` | `seoH1` prop on SplitHeroWithVisualCard |
| Mule Account Detection | `/solutions/mule-account-detection` | `seoH1` prop on SplitHeroWithVisualCard |
| Use Cases | `/use-cases` | Inline `<h1 className="eyebrow">` |
| Mule Network Detection | `/use-cases/mule-network-detection` | Inline `<h1 className="eyebrow">` |
| Transaction Monitoring | `/use-cases/transaction-monitoring` | Inline `<h1 className="eyebrow">` |
| Investigation Workflow Modernization | `/use-cases/investigation-workflow-modernization` | Inline `<h1 className="eyebrow">` |
| Resources | `/resources` | `eyebrow` prop on SplitHeroWithVisualCard (renders as h1) |
| What Is Investigation Intelligence? | `/resources/what-is-investigation-intelligence` | Metadata only |
| Evidence Packs | `/resources/evidence-packs-audit-ready-investigation-records` | Metadata only |
| From Alerts to Decisions | `/resources/from-alerts-to-decisions-risk-team-operating-model` | Metadata only |
| Mule Account Investigations | `/resources/mule-account-investigations-connected-signals` | Metadata only |
| Why Digital Banks Need Investigation-Ready Workflows | `/resources/why-digital-banks-need-investigation-ready-risk-workflows` | Metadata only |
| Why Fraud & AML Investigations Break Down | `/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms` | Metadata only |
| Media | `/media` | Inline `<h1 className="eyebrow">` |
| IBSi FinTech Journal Interview | `/media/ibsi-fintech-journal-interview` | Inline `<h1 className="eyebrow">` |
| Partners | `/partners` | Inline `<h1 className="eyebrow">` |
| Become a Partner | `/become-a-partner` | Metadata only |
| Privacy Policy | `/privacy-policy` | Metadata only |
| Terms & Conditions | `/terms` | Metadata only |
| Cookie Policy | `/cookie-policy` | Metadata only |

### Rules for new pages

When a new page is added to the site:

1. Leave `title`, `description`, `openGraph`, `twitter`, and `alternates.canonical` blank (or with a `// TODO: SEO — pending approval` comment) until Abhi reviews and approves the values.
2. Do not infer or auto-generate meta titles or descriptions from page content.
3. Do not modify the H1 tag or `seoH1` prop of an existing page as a side effect of any other content change.

---

## Content Conventions

- No em dashes in rendered content — use ` - ` (space, hyphen, space) instead.
- No proprietary mechanics, rule thresholds, or scoring logic in any public-facing copy.
- No real screenshots or live product data in visual cards or diagrams.
- Disclaimer pattern for CTAs on industry pages: "We do not replace [existing systems], perform [regulated function], or guarantee [outcome]."

## CTA Patterns

- Risk Shadowing Review CTA: `href="/request-demo?intent=risk-shadowing-review"`, label "Request a Risk Shadowing Review"
- General walkthrough CTA: `href="/request-demo"`, label "Request a Walkthrough"

## Technical Constraints

- Next.js App Router, static export (`output: 'export'`).
- Server components only — do not add `'use client'` to industry or page files.
- No Tailwind, no CSS modules — inline styles only, using CSS variables (`var(--primary)`, `var(--dark)`, `var(--body)`, etc.).
- `clamp()` for responsive font sizing on all headings.
- `SplitHeroWithVisualCard` component: when `seoH1` prop is present it renders as `<h1 className="eyebrow">` and demotes the visual `title` to `<h2>`. When absent, the `eyebrow` prop renders as `<h1 className="eyebrow">` and `title` renders as `<h1>`.

import Link from 'next/link';
import PdfDownloadButton from '../PdfDownloadButton';

export const metadata = {
  title: "Why Digital Banks Need Investigation-Ready Workflows",
  description: "Learn how digital banks improve fraud detection, AML compliance and risk operations through connected investigation workflows.",
  keywords: ["investigation ready workflows", "banking risk operations", "digital banking fraud prevention", "aml workflow modernization"],
  openGraph: {
    title: "Why Digital Banks Need Investigation-Ready Workflows | Verafye",
    description: "Learn how digital banks improve fraud detection, AML compliance and risk operations through connected investigation workflows.",
    url: 'https://www.verafye.com/resources/why-digital-banks-need-investigation-ready-risk-workflows/',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Verafye - Investigation Intelligence' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Digital Banks Need Investigation-Ready Workflows | Verafye",
    description: "Learn how digital banks improve fraud detection, AML compliance and risk operations through connected investigation workflows.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.verafye.com/resources/why-digital-banks-need-investigation-ready-risk-workflows',
  },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const relatedResources = [
  {
    title: 'Why Fraud and AML Investigations Break Down in Payment Platforms',
    category: 'Industry Insights',
    readingTime: '6 min read',
    href: '/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/',
    ctaLabel: 'Read Insight',
  },
  {
    title: 'Mule Account Investigations: Why Connected Signals Matter',
    category: 'Use Case Deep Dives',
    readingTime: '7 min read',
    href: '/resources/mule-account-investigations-connected-signals/',
    ctaLabel: 'Explore Use Case',
  },
];

export default function ArticlePage() {
  return (
    <>
      {/* ── BREADCRUMB ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '1.5rem 0 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/resources/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Resources</Link>
            <span>/</span>
            <span style={{ color: 'var(--body)' }}>Why Digital Banks Need Investigation-Ready Risk Workflows</span>
          </nav>
        </div>
      </section>

      {/* ── ARTICLE HEADER ─────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 70%)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '4px', padding: '0.25rem 0.625rem' }}>
                Industry Insights
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>6 min read</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>May 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              Why Digital Banks Need Investigation-Ready Risk Workflows
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem', marginLeft: 0 }}>
              Digital banks move fast by design. Fast onboarding. Fast payments. Always-on customer activity. That speed creates investigation complexity for fraud, AML, and payment risk teams that alert queues alone cannot resolve.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ───────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Digital and neo banks operate in a fundamentally different environment from traditional financial institutions. The customer journey is entirely digital. Account opening happens in minutes. Payments flow around the clock. Devices, identities, and behavioral patterns generate continuous signals. That design is a competitive advantage - and a risk management challenge.
            </p>

            {/* ── Section 1 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              1. Why Digital Banking Risk Moves Differently
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              In traditional banking, risk operations were shaped by branch-based processes, relationship managers, and paper-based records that created natural checkpoints. Those checkpoints slowed things down - but they also created pause points where risk could be observed and evaluated.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Digital banks have none of those natural friction points. The entire customer lifecycle - from first application to daily transactions - unfolds through digital channels at the speed the customer expects. That speed is the product. But it also means that fraud, AML, and payment risk can escalate faster, with less opportunity for manual observation.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Risk teams at digital banks and neo banks are not operating in a slower environment with digital tools applied on top. They are operating in a high-speed environment where the risk management infrastructure needs to match the pace of the product.
            </p>

            {/* ── Section 2 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              2. Fast Onboarding, Fast Payments, and Always-On Customer Activity
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Three features define the digital banking environment for risk teams: fast onboarding, fast payments, and always-on customer activity.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Fast onboarding means new customers enter the ecosystem within minutes, with KYC and identity verification completed in real time. That efficiency creates value - and also creates an entry point that fraud actors target with synthetic identities, document manipulation, and coordinated account opening at scale.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Fast payments mean that once an account is open, funds can move quickly - to other accounts, through payment rails, and across borders. For legitimate customers, that speed is a core product benefit. For fraud and money laundering operations, it is the mechanism through which value is extracted before detection can occur.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Always-on activity means that digital banks generate continuous signals - account events, transaction flows, device interactions, login activity, behavioral patterns - around the clock. The volume of that signal is enormous, and the risk it contains is distributed across every layer of the customer lifecycle.
            </p>

            {/* ── Section 3 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              3. Where Fraud, AML, Account, Payment, Identity, and Device Signals Fragment
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Despite generating enormous volumes of data, digital banks often face a fragmentation problem: the signals relevant to any single investigation are spread across multiple systems, each designed to handle one domain of risk.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              A fraud alert may fire in the transaction monitoring system. The account history lives in a core banking platform. Identity verification records are held by a separate KYC provider. Device intelligence sits in a third-party fraud tool. AML alerts come from a different monitoring engine. Prior cases may be logged in a case management system that does not share data with the others.
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem' }}>To investigate a single alert, an analyst may need to manually pull context from:</p>
              {[
                'Transaction monitoring - for the triggering event and payment patterns.',
                'Core banking - for account history, balance movements, and customer profile.',
                'KYC / identity verification - for onboarding records and document checks.',
                'Device intelligence - for device fingerprints, login patterns, and shared device signals.',
                'AML monitoring - for prior typology flags and watchlist matches.',
                'Case management - for any prior investigations linked to the same customer.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              That manual data gathering takes time. More importantly, it creates gaps - connections that exist in the data but are never surfaced because no single system shows them together.
            </p>

            {/* ── Section 4 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              4. Why Lean Digital Banking Risk Teams Need Structure
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Digital banking risk teams are typically small relative to the volume of signals they manage. Unlike large traditional banks with dedicated investigation units, digital banks and neo banks often operate with compact teams handling fraud, AML, payments risk, and compliance functions - sometimes with significant overlap across roles.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              That lean structure creates pressure: there is less capacity to absorb inefficiency. If every investigation requires manual data gathering from six systems, the team falls behind. If documentation is inconsistent, audit readiness suffers. If escalation paths are informal, critical decisions may be made without appropriate review.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Structured investigation workflows are not a luxury for lean teams - they are an operational requirement. The structure is what allows a small team to operate at the pace the business demands without sacrificing review quality or compliance posture.
            </p>

            {/* ── Section 5 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              5. Why Relationship Visibility Matters
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              In digital banking, the most important risk signals are often relational rather than transactional. A single suspicious transaction may not be enough to act on. But the same device used to open five accounts, linked to three different payment beneficiaries, with AML alerts across two of them - that is a pattern that demands investigation.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Relationship visibility means being able to see those connections at the point of investigation - not after the fact, not by running manual queries across multiple systems, but as part of the standard review process.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              For mule account networks, synthetic identity fraud, and coordinated account abuse, relationship visibility is often the difference between detecting a pattern and treating each alert in isolation. Digital banks that can surface those connections during investigation are in a fundamentally stronger risk position than those that cannot.
            </p>

            {/* ── Section 6 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              6. Evidence-Ready Investigation Records for Digital Banking Teams
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Digital banks are subject to the same regulatory expectations as traditional financial institutions when it comes to financial crime documentation. Regulators and auditors expect to see structured records showing what was reviewed, what was found, what action was taken, and why.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              For digital banking risk teams operating at speed with lean headcount, building those records manually is a significant operational burden. Investigation workflows that capture documentation as a natural by-product of the review process - rather than an additional step after the fact - are what make audit readiness sustainable.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Evidence-ready records also support internal governance - giving compliance leadership and senior management visibility into investigation quality, review consistency, and risk decision patterns across the team.
            </p>

            {/* ── Where Verafye Fits ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Where Verafye Fits
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye is built to support the investigation needs of digital banking and neo banking risk teams. It connects fraud, AML, account, payment, identity, device, transaction, and case signals into structured investigation workflows so lean teams can:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
              {[
                'Surface entity context and relationship connections at the point of review.',
                'Investigate alerts with full cross-domain visibility without manual data gathering.',
                'Build documentation into the review process rather than adding it separately.',
                'Maintain structured, evidence-ready records that support regulatory examination readiness.',
                'Scale investigation capacity without scaling headcount proportionally.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '0.75rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Takeaway</p>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                Digital banks are built for speed. Investigation-ready risk workflows are what allow risk teams to match that speed without losing visibility, consistency, or the ability to explain every decision made.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOFT CTA ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-blue)', borderTop: '1px solid rgba(30,111,183,0.1)', borderBottom: '1px solid rgba(30,111,183,0.1)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem', letterSpacing: '-0.015em' }}>
                See how Verafye helps digital banking risk teams connect alerts, explain risk, and close cases faster
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Verafye connects fraud, AML, account, payment, identity, device, transaction, and case signals into investigation-ready workflows built on the Verafye platform.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/request-demo" className="btn-primary">Request Demo</Link>
              <Link href="/industries/digital-banks/" className="btn-secondary">Digital Banks</Link>
              <PdfDownloadButton
                pdfPath="/downloads/resources/digital-banks-investigation-ready-risk-workflows.pdf"
                pdfFilename="digital-banks-investigation-ready-risk-workflows.pdf"
                resourceTitle="Why Digital Banks Need Investigation-Ready Risk Workflows"
                resourceCategory="Industry Insights"
                articleSlug="why-digital-banks-need-investigation-ready-risk-workflows"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED RESOURCES ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Related Resources</p>
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.015em' }}>
              Continue reading
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(18rem,1fr))', gap: '1.5rem' }}>
              {relatedResources.map(r => (
                <Link key={r.title} href={r.href} style={{ textDecoration: 'none', display: 'block' }} className="card-hover">
                  <div className="card card-elevated" style={{ padding: '1.75rem' }}>
                    <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{r.category}</p>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.35 }}>{r.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>{r.readingTime}</span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>{r.ctaLabel} {ARROW}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/resources/" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
                Back to all resources {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

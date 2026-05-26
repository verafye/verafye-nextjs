import Link from 'next/link';
import PdfDownloadButton from '../PdfDownloadButton';

export const metadata = {
  title: "The Missing Layer in Modern Financial Crime Investigations | Verafye",
  description: "Learn how investigation intelligence helps fraud, AML, and risk teams connect fragmented signals into explainable, evidence-ready workflows.",
  openGraph: {
    title: "The Missing Layer in Modern Financial Crime Investigations | Verafye",
    description: "Learn how investigation intelligence helps fraud, AML, and risk teams connect fragmented signals into explainable, evidence-ready workflows.",
    url: 'https://www.verafye.com/resources/what-is-investigation-intelligence/',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Verafye - Investigation Intelligence' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Missing Layer in Modern Financial Crime Investigations | Verafye",
    description: "Learn how investigation intelligence helps fraud, AML, and risk teams connect fragmented signals into explainable, evidence-ready workflows.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.verafye.com/resources/what-is-investigation-intelligence',
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
            <span style={{ color: 'var(--body)' }}>The Missing Layer in Modern Financial Crime Investigations</span>
          </nav>
        </div>
      </section>

      {/* ── ARTICLE HEADER ─────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 70%)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '4px', padding: '0.25rem 0.625rem' }}>
                Product Insights
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>5 min read</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>May 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              The Missing Layer in Modern Financial Crime Investigations
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem', marginLeft: 0 }}>
              Fraud, AML, and risk teams are drowning in alerts - not because detection is broken, but because the work after the alert is messy.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ───────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Most regulated financial institutions and platforms already have fraud systems, AML tools, payment monitoring capabilities, identity and device signals, and case-management modules. What&apos;s missing is a clear way to connect those signals into decisions that can be reviewed, explained, and trusted. That&apos;s where investigation intelligence comes in.
            </p>

            {/* ── Section 1 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              1. Risk Is Not Local - It Is Connected
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Suspicious activity rarely lives inside one account or one transaction. Across payments businesses, banks, fintechs, and other financial services firms, risk often shows up across multiple accounts, shared devices, repeating beneficiaries, and similar transaction patterns across fraud and AML alerts.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Yet most teams still investigate alerts one by one, manually stitching context together. That is slow, inconsistent, and hard to audit.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Investigation intelligence changes that by surfacing relationships between accounts, customers, merchants, devices, identities, and transactions. Instead of asking &ldquo;Is this transaction risky?&rdquo; teams can answer, &ldquo;Is this part of a pattern?&rdquo;
            </p>

            {/* ── Section 2 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              2. Workflows Are Where Consistency Is Built
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              In many organizations, investigations are shaped more by individual analysts than by a repeatable operating model. One person documents deeply; another captures almost nothing. One escalates quickly; another keeps digging in isolation.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              The result is a fragile risk posture: decisions that are hard to explain and hard to reproduce.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              A strong investigation workflow helps teams:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.25rem' }}>
              {[
                'Ingest and cluster related alerts.',
                'Review entity context visually.',
                'Document rationale and evidence.',
                'Escalate with clear rules.',
                'Maintain time-stamped, audit-ready records.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              That structure does not replace human judgment. It makes it more consistent, more scalable, and easier to defend.
            </p>

            {/* ── Section 3 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              3. Evidence Trails Are the New Standard
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Regulators and internal auditors are less interested in how many alerts you blocked and more interested in how you made each decision.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Financial institutions and regulated platforms need to be able to reconstruct:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.25rem' }}>
              {[
                'What triggered the alert.',
                'Which signals were considered.',
                'How the case was reviewed.',
                'Who took each action and why.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Evidence-ready investigation records - with clear trails across fraud, AML, payments, identity, and device signals - are no longer a &ldquo;nice-to-have.&rdquo; They are table stakes for any serious financial services organization.
            </p>

            {/* ── Where Verafye Fits ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Where Verafye Fits
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye is built as an intelligent investigation layer for regulated financial institutions and platforms. It connects fragmented risk signals into structured workflows so teams can:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
              {[
                'See relationships, not just lists.',
                'Standardize how cases are reviewed.',
                'Build evidence-ready records by design.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '0.75rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>In summary</p>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                The goal is simple: help risk teams move from alerts to decisions faster, without losing explainability or control.
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
                See how Verafye helps risk teams move from alerts to decisions faster
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Verafye connects fragmented fraud, AML, payment, identity, device, transaction, and case signals into investigation-ready workflows built on the Verafye platform.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/request-demo" className="btn-primary">Request Demo</Link>
              <Link href="/platform/" className="btn-secondary">Explore Platform</Link>
              <PdfDownloadButton
                pdfPath="/downloads/resources/missing-layer-modern-financial-crime-investigations.pdf"
                pdfFilename="verafye-missing-layer-modern-financial-crime-investigations.pdf"
                resourceTitle="The Missing Layer in Modern Financial Crime Investigations"
                resourceCategory="Product Insights"
                articleSlug="what-is-investigation-intelligence"
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

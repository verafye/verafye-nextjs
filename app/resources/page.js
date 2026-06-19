import Link from 'next/link';
import SplitHeroWithVisualCard, { ResourcesVisualCard } from '../../components/SplitHeroWithVisualCard';
import ResourcesClient from './ResourcesClient';

export const metadata = {
  title: "Fraud, AML & Risk Intelligence Resources",
  description: "Explore expert guides, insights and best practices for fraud detection, AML compliance and financial crime investigations.",
  keywords: ["fraud prevention resources", "aml compliance resources", "financial crime investigation guides", "risk intelligence insights"],
  openGraph: {
    title: "Fraud, AML & Risk Intelligence Resources | Verafye",
    description: "Explore expert guides, insights and best practices for fraud detection, AML compliance and financial crime investigations.",
    url: 'https://www.verafye.com/resources/',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Verafye Resources - Investigation Intelligence for Risk Teams' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud, AML & Risk Intelligence Resources | Verafye",
    description: "Explore expert guides, insights and best practices for fraud detection, AML compliance and financial crime investigations.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.verafye.com/resources',
  },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default function ResourcesPage() {
  return (
    <>

      {/* ── 1. HERO - Option 1: Split Hero with Visual Card (approved) ────── */}
      <SplitHeroWithVisualCard
        eyebrow="Knowledge Hub"
        title="Resources for Financial Crime, Fraud, and Payment Risk Teams"
        description="Insights on investigation intelligence, fraud and AML workflows, mule account risk, evidence trails, and regulated money movement operations."
        primaryCTA={{ label: 'Explore Resources', href: '#resources-grid' }}
        secondaryCTA={{ label: 'Request a Risk Shadowing Review', href: '/request-demo' }}
        visualCard={<ResourcesVisualCard />}
      />

      {/* ── 2. FEATURED RESOURCE ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem', textAlign: 'center' }}>Featured Resource</p>
            <Link href="/resources/what-is-investigation-intelligence/" style={{ textDecoration: 'none', display: 'block' }}>
              <div
                className="card card-elevated card-hover"
                style={{
                  padding: '3rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '2.5rem',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg,#F8FBFF 0%,#EEF6FF 100%)',
                  border: '1px solid rgba(30,111,183,0.14)',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '4px', padding: '0.25rem 0.625rem', marginBottom: '1.25rem', display: 'inline-block' }}>
                    Product Insights
                  </span>
                  <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                    The Missing Layer in Modern Financial Crime Investigations
                  </h2>
                  <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '44rem' }}>
                    Understand why modern financial crime teams need investigation intelligence to connect fragmented alerts, risk signals, workflows, and evidence trails into explainable decisions.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                      Read Article {ARROW}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>5 min read</span>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
                  <div className="card-icon gradient-bg-2" style={{ width: '4rem', height: '4rem', borderRadius: '1rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                      <path d="M11 8v6"/><path d="M8 11h6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 + 4. BROWSE BY CATEGORY + ALL RESOURCES GRID ─────────────────── */}
      <section id="resources-grid" className="section-light" style={{ padding: '4rem 0 5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Browse by Category</p>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              All Resources
            </h2>
          </div>
          <ResourcesClient />
        </div>
      </section>

      {/* ── 5. BOTTOM DEMO CTA BAND ─────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '56rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Get Started</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,3rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
            See Verafye in action
          </h2>
          <p style={{ fontSize: 'clamp(0.9375rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Explore how Verafye helps regulated payment, fintech, and digital banking risk teams move from alerts to decisions faster.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/request-demo" className="btn-primary">
              Request a Risk Shadowing Review
              <span className="btn-arrow" style={{ marginLeft: '0.375rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/platform" className="btn-secondary">Explore Platform</Link>
          </div>
        </div>
      </section>

    </>
  );
}

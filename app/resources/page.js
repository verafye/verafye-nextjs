import Link from 'next/link';
import ResourcesClient from './ResourcesClient';

export const metadata = {
  title: 'Resources for Financial Crime, Fraud, and Payment Risk Teams | Verafye',
  description: 'Insights on investigation intelligence, fraud and AML workflows, mule account risk, evidence trails, and regulated money movement operations.',
  openGraph: {
    title: 'Resources for Financial Crime, Fraud, and Payment Risk Teams | Verafye',
    description: 'Insights on investigation intelligence, fraud and AML workflows, mule account risk, evidence trails, and regulated money movement operations.',
    url: 'https://verafye.com/resources/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources for Financial Crime, Fraud, and Payment Risk Teams | Verafye',
    description: 'Insights on investigation intelligence, fraud and AML workflows, mule account risk, evidence trails, and regulated money movement operations.',
  },
  alternates: {
    canonical: 'https://verafye.com/resources/',
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

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '54rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Knowledge Hub</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Resources for Financial Crime, Fraud, and Payment Risk Teams
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.75, maxWidth: '46rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2.5rem' }}>
              Insights on investigation intelligence, fraud and AML workflows, mule account risk, evidence trails, and regulated money movement operations.
            </p>
            <div className="animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="#resources-grid" className="btn-primary">
                Explore Resources
                <span className="btn-arrow" style={{ marginLeft: '0.375rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </a>
              <Link href="/request-demo" className="btn-secondary">Request Demo</Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* ── 5. DOWNLOADABLE BRIEFS ──────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Downloadable Briefs &amp; Guides</p>
              <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
                Practical Resources for Risk Teams
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Practical resources for regulated payment, fintech, and digital banking risk teams.
              </p>
            </div>
            <div className="grid-4" style={{ gap: '1.5rem' }}>
              {[
                {
                  title: 'Verafye Platform Brief',
                  desc: 'An overview of the Verafye platform - capabilities, design principles, and target segments.',
                  cta: 'Download Brief',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                    </svg>
                  ),
                  gradient: 'gradient-bg-2',
                },
                {
                  title: 'Investigation Intelligence for Payment Platforms',
                  desc: 'How investigation intelligence applies to PSPs, PayFacs, and payment processors.',
                  cta: 'Download Brief',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                  ),
                  gradient: 'gradient-bg-1',
                },
                {
                  title: 'Mule Account Investigation Playbook',
                  desc: 'A structured approach to mule account investigations across connected signals.',
                  cta: 'Download Guide',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  ),
                  gradient: 'gradient-bg-3',
                },
                {
                  title: 'Evidence Pack Readiness Guide',
                  desc: 'Building audit-ready investigation records that support regulatory examination readiness.',
                  cta: 'Download Guide',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  ),
                  gradient: 'gradient-bg-4',
                },
              ].map(brief => (
                <div key={brief.title} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', opacity: 0.82 }}>
                  <div className={`card-icon ${brief.gradient}`} style={{ marginBottom: '1.25rem' }}>{brief.icon}</div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem', lineHeight: 1.35 }}>{brief.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>{brief.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--muted-light)' }}>{brief.cta}</span>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '4px', padding: '0.2rem 0.5rem' }}>
                      Coming Soon
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM DEMO CTA BAND ─────────────────────────────────────────── */}
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
              Request Demo
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

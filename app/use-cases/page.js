import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Use Cases — Verafye',
  description: 'Explore how Verafye helps financial institutions detect, investigate, and manage financial crime risk across fraud, AML, and payments.',
  openGraph: {
    title: 'Use Cases — Verafye',
    description: 'Verafye connects signals across systems to support key use cases across detection, monitoring, and investigation workflows.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Use Cases — Verafye',
    description: 'Verafye connects signals across systems to support key use cases across detection, monitoring, and investigation workflows.',
  },
};

const useCases = [
  {
    eyebrow: 'Detection',
    title: 'Mule Network Detection',
    description: 'Detect and investigate coordinated fraud networks using graph-based intelligence across accounts, devices, identities, and transactions.',
    href: '/use-cases/mule-network-detection',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
        <path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
      </svg>
    ),
    gradient: 'gradient-bg-1',
    tags: ['Graph Intelligence', 'AML', 'Fraud'],
  },
  {
    eyebrow: 'Monitoring',
    title: 'Transaction Monitoring',
    description: 'Enhance transaction monitoring with context-aware intelligence across systems and behaviors — improving signal quality and reducing false positives.',
    href: '/use-cases/transaction-monitoring',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
    gradient: 'gradient-bg-2',
    tags: ['AML', 'Payments', 'Signal Quality'],
  },
  {
    eyebrow: 'Investigation',
    title: 'Investigation Workflow Modernization',
    description: 'Improve investigation efficiency, reduce backlog, and increase analyst productivity through connected intelligence and structured workflows.',
    href: '/use-cases/investigation-workflow-modernization',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" x2="8" y1="13" y2="13"/>
        <line x1="16" x2="8" y1="17" y2="17"/>
      </svg>
    ),
    gradient: 'gradient-bg-3',
    tags: ['Operations', 'Fraud', 'AML'],
  },
];

export default function UseCasesPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Use Cases</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Use Cases
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Explore how Verafye helps financial institutions detect, investigate, and manage financial crime risk across fraud, AML, and payments.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO ────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0 1rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Applied Intelligence</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
              Applied Intelligence Across Financial Crime Workflows
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75, maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye connects signals across systems to support key use cases across detection, monitoring, and investigation workflows. Each use case is designed to improve visibility, efficiency, and decision-making for fraud, AML, and payment operations teams.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. USE CASE CARDS ────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 0 5rem', background: '#fff' }}>
        <div className="container">
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {useCases.map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <div className={`card-icon ${item.gradient}`} style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{item.eyebrow}</p>
                <h3 style={{ fontSize: 'clamp(1.0625rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem', lineHeight: 1.25 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {item.tags.map(tag => (
                    <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>
                  ))}
                </div>
                <Link
                  href={item.href}
                  style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginTop: 'auto' }}
                >
                  Explore use case
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA ──────────────────────────────────────────────────────────── */}
      <CTA
        title="Explore Verafye in Action"
        subtitle="See how Verafye supports fraud, AML, and payment intelligence across real-world use cases."
      />

    </>
  );
}

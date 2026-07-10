import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata = {
  title: "Financial Crime Investigation Use Cases",
  description: "Explore fraud, AML and payment investigation use cases that help financial institutions uncover hidden financial crime with connected intelligence.",
  keywords: ["fraud investigation use cases", "aml compliance use cases", "financial crime investigation workflows", "risk intelligence applications"],
  openGraph: {
    title: "Financial Crime Investigation Use Cases",
    description: "Explore proven fraud, AML and risk investigation use cases including mule detection, transaction monitoring and workflow modernization.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Financial Crime Investigation Use Cases",
    description: "Explore proven fraud, AML and risk investigation use cases including mule detection, transaction monitoring and workflow modernization.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/use-cases',
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
    description: 'Enhance transaction monitoring with context-aware intelligence across systems and behaviors - improving signal quality and reducing false positives.',
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
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Use Cases</h1>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Fraud, AML &amp; Investigation Use Cases
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Explore how Verafye helps financial institutions detect, investigate, and manage financial crime risk across fraud, AML, and payments.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. HOW VERAFYE SUPPORTS EACH USE CASE ───────────────────────────── */}
      <section style={{ padding: '4rem 0 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Connected Investigation Intelligence</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
              One platform, three core use cases
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75, maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye connects fraud, AML, payments, identity, device, and behavior signals into a single investigation layer - improving visibility, efficiency, and decision quality across each of these workflows.
            </p>
          </div>
          {/* How it connects - 3-column context strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: '72rem', margin: '0 auto', paddingBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
            {[
              {
                color: '#1E6FB7',
                label: 'Graph-based detection',
                text: 'Surface coordinated fraud rings, mule account clusters, and suspicious entity networks using connected graph intelligence across accounts, transactions, devices, and identities.',
              },
              {
                color: '#7C3AED',
                label: 'Signal-aware monitoring',
                text: 'Enhance transaction monitoring by bringing cross-system context into alert review - reducing false positives and helping teams focus on signals with real investigative value.',
              },
              {
                color: '#059669',
                label: 'Structured investigation',
                text: 'Replace fragmented alert queues with connected case workflows, pre-assembled context, AI-assisted summaries, and audit-ready decision trails across every investigation.',
              },
            ].map(c => (
              <div key={c.label} style={{ padding: '1.75rem', background: 'var(--bg-tint)', border: '1px solid var(--border)', borderRadius: '12px', borderTop: `3px solid ${c.color}` }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: c.color, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.625rem' }}>{c.label}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {item.tags.map(tag => (
                    <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Shared section-level CTA */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              href="/risk-shadowing-review"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: 'var(--primary)', color: '#fff', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}
            >
              Explore Verafye through Risk Shadowing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
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

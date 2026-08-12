import Link from 'next/link';

export const metadata = {
  title: "Fraud, AML & Risk Investigation Use Cases",
  description: "Explore how Verafye addresses mule network detection, transaction monitoring, investigation workflow modernisation, and connected fraud and AML investigations across financial institutions.",
  keywords: ["fraud investigation use cases", "aml compliance use cases", "mule network detection", "transaction monitoring", "investigation workflow modernization", "connected fraud aml investigations", "financial crime use cases"],
  openGraph: {
    title: "Fraud, AML & Risk Investigation Use Cases | Verafye",
    description: "Four use cases. One connected platform. Explore how Verafye addresses the operational problems financial crime teams face every day.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud, AML & Risk Investigation Use Cases | Verafye",
    description: "Four use cases. One connected platform. Explore how Verafye addresses the operational problems financial crime teams face every day.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/use-cases',
  },
};

const useCases = [
  {
    eyebrow: 'Detection',
    title: 'Mule Account & Network Detection',
    description: 'Account-level mule signals reveal the individual. Graph-native network intelligence reveals the ring. Verafye connects both into one investigation — exposing coordinated fraud clusters across accounts, devices, identities, and transactions.',
    href: '/use-cases/mule-network-detection',
    cta: 'Explore mule detection',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
        <path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
      </svg>
    ),
    gradient: 'gradient-bg-1',
    capabilities: ['Fraud Prevention', 'Decision Intelligence', 'Investigation Intelligence'],
    buyers: 'Head of Fraud · BSA Officer',
  },
  {
    eyebrow: 'Monitoring',
    title: 'Transaction Monitoring',
    description: 'Alert quality suffers when monitoring runs on transaction data alone. Verafye brings entity relationships, behavioral patterns, and cross-system context into every alert — improving alert signal quality and surfacing the signals that warrant investigation.',
    href: '/use-cases/transaction-monitoring',
    cta: 'Explore transaction monitoring',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
    gradient: 'gradient-bg-2',
    capabilities: ['AML & Transaction Monitoring', 'Decision Intelligence', 'Customer Risk Intelligence'],
    buyers: 'MLRO · Head of Compliance · BSA Officer',
  },
  {
    eyebrow: 'Investigation',
    title: 'Investigation Workflow Modernization',
    description: 'Alert backlogs grow when investigators spend time assembling context rather than making decisions. Verafye pre-assembles cases, clusters related alerts, and delivers structured workflows — so analysts investigate, not excavate.',
    href: '/use-cases/investigation-workflow-modernization',
    cta: 'Explore investigation workflows',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" x2="8" y1="13" y2="13"/>
        <line x1="16" x2="8" y1="17" y2="17"/>
      </svg>
    ),
    gradient: 'gradient-bg-3',
    capabilities: ['Investigation Intelligence', 'AI Copilot', 'Enterprise Platform'],
    buyers: 'Head of Investigations · VP Operations',
  },
  {
    eyebrow: 'Convergence',
    title: 'Connected-Risk Investigation',
    description: 'Fraud teams and AML teams often catch different pieces of the same crime. Verafye brings both signal sets into a shared investigation surface — so the analyst working a fraud alert sees the AML dimension, and vice versa, without switching systems.',
    href: '/use-cases/fraud-aml-investigations',
    cta: 'Explore Connected-Risk Investigation',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    iconBg: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)',
    capabilities: ['Fraud Prevention', 'AML & Transaction Monitoring', 'Investigation Intelligence'],
    buyers: 'CCO · Head of Fraud · BSA Officer',
  },
];

// Capability-to-use-case mapping matrix
// Columns = use cases (abbreviated), Rows = capabilities
const capabilityMap = [
  {
    capability: 'Customer Risk Intelligence',
    useCases: [false, true, false, true],
  },
  {
    capability: 'AML & Transaction Monitoring',
    useCases: [true, true, true, true],
  },
  {
    capability: 'Fraud Prevention',
    useCases: [true, false, true, true],
  },
  {
    capability: 'Screening',
    useCases: [false, true, true, true],
  },
  {
    capability: 'Investigation Intelligence',
    useCases: [true, true, true, true],
  },
  {
    capability: 'Decision Intelligence',
    useCases: [true, true, false, true],
  },
  {
    capability: 'AI Copilot',
    useCases: [false, false, true, true],
  },
];

const industries = [
  { label: 'PSPs, PayFacs & Payment Processors', href: '/industries/payment-processors-psps-payfacs' },
  { label: 'MSBs & Remittance Platforms', href: '/industries/msbs-remittance-platforms' },
  { label: 'Digital Banks & Neo Banks', href: '/industries/digital-banks' },
  { label: 'BaaS & Embedded Finance', href: '/industries/baas-embedded-finance' },
  { label: 'FinTech Payment Platforms', href: '/industries/fintech-platforms' },
  { label: 'NBFCs & Digital Lending', href: '/industries/digital-lending-bnpl' },
];

export default function UseCasesPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Use Cases</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Four operational problems.<br />One connected platform.
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Verafye addresses the specific workflows where financial crime teams lose time, miss connections, and carry unnecessary risk — across fraud, AML, payments, and investigations.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. USE CASE CARDS ────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 0 5rem', background: '#fff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '72rem',
            margin: '0 auto',
          }}>
            {useCases.map(item => (
              <Link
                key={item.title}
                href={item.href}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="card card-elevated"
                  style={{
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Icon */}
                  <div
                    className={item.iconBg ? '' : `card-icon ${item.gradient}`}
                    style={item.iconBg ? {
                      width: '52px', height: '52px', borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: item.iconBg, marginBottom: '1.5rem', flexShrink: 0,
                    } : { marginBottom: '1.5rem' }}
                  >
                    {item.icon}
                  </div>

                  {/* Eyebrow + Title */}
                  <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{item.eyebrow}</p>
                  <h3 style={{ fontSize: 'clamp(1.0625rem,2vw,1.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem', lineHeight: 1.25 }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
                    {item.description}
                  </p>

                  {/* Capabilities */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <p style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                      Capabilities activated
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                      {item.capabilities.map(cap => (
                        <span key={cap} className="tag" style={{ fontSize: '0.75rem' }}>{cap}</span>
                      ))}
                    </div>
                  </div>

                  {/* Buyers */}
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                    <span style={{ fontWeight: 600 }}>Buyers: </span>{item.buyers}
                  </p>

                  {/* CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600, marginTop: 'auto' }}>
                    {item.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CAPABILITY MAPPING ───────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Platform Coverage</p>
              <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                Which capabilities power each use case
              </h2>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', borderBottom: '2px solid var(--border)', width: '36%' }}>
                      Capability
                    </th>
                    {useCases.map(uc => (
                      <th key={uc.title} style={{ textAlign: 'center', padding: '0.75rem 0.5rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--dark)', borderBottom: '2px solid var(--border)', lineHeight: 1.3 }}>
                        {uc.eyebrow}
                        <br />
                        <span style={{ fontSize: '0.6875rem', fontWeight: 400, color: 'var(--muted)' }}>
                          {uc.title.split(' ').slice(0, 2).join(' ')}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {capabilityMap.map((row, i) => (
                    <tr key={row.capability} style={{ background: i % 2 === 0 ? '#fff' : 'transparent' }}>
                      <td style={{ padding: '0.8125rem 1rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--dark)', borderBottom: '1px solid var(--border)' }}>
                        {row.capability}
                      </td>
                      {row.useCases.map((active, j) => (
                        <td key={j} style={{ textAlign: 'center', padding: '0.8125rem 0.5rem', borderBottom: '1px solid var(--border)' }}>
                          {active ? (
                            <span style={{
                              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                              width: '22px', height: '22px', borderRadius: '50%',
                              background: 'var(--primary)', color: '#fff',
                            }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5"/>
                              </svg>
                            </span>
                          ) : (
                            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--border)' }} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', textAlign: 'center', marginTop: '1.25rem' }}>
              All use cases run on a single connected platform — no siloed deployments or duplicate data pipelines.{' '}
              <Link href="/capabilities" style={{ color: 'var(--primary)', fontWeight: 500 }}>See all capability pillars →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRY PATHWAYS ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>By Institution Type</p>
              <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '0.875rem' }}>
                Find your fit
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto' }}>
                The same use cases apply differently depending on your institution's regulatory environment, transaction volumes, and team structure.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {industries.map(ind => (
                <Link
                  key={ind.href}
                  href={ind.href}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="card"
                    style={{
                      padding: '1.125rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--dark)', lineHeight: 1.35 }}>{ind.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. RSR CTA ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '44rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Risk Shadowing Review</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3vw,2.125rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Test Verafye against your real environment
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.75, marginBottom: '2rem' }}>
              A Risk Shadowing Review runs Verafye&apos;s detection models on a sample of your actual transaction and entity data — so you see what your existing controls are missing, not what a demo environment shows. No sales pitch. No synthetic data.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link
                href="/risk-shadowing-review"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9375rem 2rem', background: 'var(--primary)', color: '#fff', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}
              >
                Request a Risk Shadowing Review
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
              <Link
                href="/request-demo"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9375rem 2rem', background: '#fff', color: 'var(--dark)', border: '1px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

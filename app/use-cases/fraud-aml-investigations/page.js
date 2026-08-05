import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata = {
  title: "Connected Fraud & AML Investigations | Verafye",
  description: "Fraud teams and AML teams catch different pieces of the same crime. Verafye brings both signal sets into a shared investigation surface — so teams investigate the full picture, not just their slice.",
  keywords: ["connected fraud aml investigations", "FRAML", "fraud aml convergence", "unified fraud aml platform", "cross-functional financial crime investigations", "fraud aml shared workflows"],
  openGraph: {
    title: "Connected Fraud & AML Investigations | Verafye",
    description: "Fraud teams and AML teams catch different pieces of the same crime. Verafye connects both into one investigation surface.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Connected Fraud & AML Investigations | Verafye",
    description: "Fraud teams and AML teams catch different pieces of the same crime. Verafye connects both into one investigation surface.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/use-cases/fraud-aml-investigations',
  },
};

const signals = [
  {
    team: 'Fraud signals',
    color: '#1E6FB7',
    items: ['Device fingerprinting', 'Behavioral biometrics', 'Account takeover patterns', 'Payment fraud indicators', 'Synthetic identity markers'],
  },
  {
    team: 'AML signals',
    color: '#7C3AED',
    items: ['Transaction typology matches', 'Entity relationship graph', 'Sanctions & PEP hits', 'Structuring detection', 'Cross-border flow patterns'],
  },
];

const problems = [
  {
    problem: 'Same mule account, two separate alerts',
    impact: 'Fraud closes the account-level case. AML never sees the network. The ring continues operating through connected accounts neither team examined.',
  },
  {
    problem: 'Siloed data, duplicated review effort',
    impact: 'Fraud analysts query one system. AML analysts query another. Both spend time assembling context that already exists — in different databases.',
  },
  {
    problem: 'No shared handoff between teams',
    impact: 'A fraud escalation with AML implications has no structured pathway. It moves via email or verbal handoff, losing evidence fidelity along the way.',
  },
  {
    problem: 'Regulatory blind spots at the intersection',
    impact: 'SAR filing decisions require both fraud and AML context. When those contexts live in separate tools, the SAR narrative is always incomplete.',
  },
];

const capabilities = [
  {
    title: 'Fraud Prevention',
    description: 'Device, behavioral, and payment fraud signals feed into the same investigation surface as AML data — no separate queue.',
    href: '/capabilities',
  },
  {
    title: 'AML & Transaction Monitoring',
    description: 'Transaction typologies and entity-level risk scoring surface alongside fraud indicators in every case.',
    href: '/capabilities',
  },
  {
    title: 'Investigation Intelligence',
    description: 'Alert clustering, case workflows, and evidence packs work across both fraud and AML alert types without separate tooling.',
    href: '/solutions/investigation-intelligence',
  },
  {
    title: 'Decision Intelligence',
    description: 'The entity graph resolves relationships across both fraud and AML signal sources — so the connection between a fraud ring and a structuring pattern is visible.',
    href: '/solutions/graph-intelligence',
  },
  {
    title: 'AI Copilot',
    description: 'Case summaries and SAR narratives pull from the full cross-domain evidence pack — not just the fraud or AML slice.',
    href: '/capabilities',
  },
];

export default function FraudAmlInvestigationsPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Convergence · Use Case</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Fraud teams and AML teams<br />are catching different pieces of the same crime
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Verafye brings both signal sets into a shared investigation surface — so neither team works a partial picture, and the full scope of the risk is visible before a decision is made.
            </p>
            <div className="animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
              <Link href="/risk-shadowing-review" className="btn-primary">Request a Risk Shadowing Review</Link>
              <Link href="/request-demo" className="btn-secondary">Request Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE CONVERGENCE PROBLEM ──────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Problem</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.375rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
                83% of financial institutions still run fraud and AML as separate teams
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--body)', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.75 }}>
                Separate teams mean separate data, separate queues, and separate decisions on what is often the same underlying criminal activity. The result: investigations that are closed without seeing the full picture, and SAR filings that tell half the story.
              </p>
            </div>

            {/* Two-column signal view — Fraud | Verafye | AML */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center', marginBottom: '3rem' }}>
              {/* Fraud signals */}
              <div style={{ padding: '2rem', background: 'var(--bg-tint)', border: '1px solid var(--border)', borderRadius: '12px', borderTop: `3px solid ${signals[0].color}` }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: signals[0].color, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '1rem' }}>{signals[0].team}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {signals[0].items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9rem', color: 'var(--dark)' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: signals[0].color, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Centre connector */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', marginTop: '0.625rem' }}>Verafye</p>
              </div>
              {/* AML signals */}
              <div style={{ padding: '2rem', background: 'var(--bg-tint)', border: '1px solid var(--border)', borderRadius: '12px', borderTop: `3px solid ${signals[1].color}` }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: signals[1].color, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '1rem' }}>{signals[1].team}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {signals[1].items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9rem', color: 'var(--dark)' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: signals[1].color, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHERE SILOS CREATE BLIND SPOTS ───────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Where Silos Fail</p>
              <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                The gaps that separate tools create
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              {problems.map(p => (
                <div key={p.problem} style={{ padding: '1.75rem', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px' }}>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.35 }}>{p.problem}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{p.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOW VERAFYE CONNECTS THEM ────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Verafye Approach</p>
              <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
                One investigation surface. Both signal sets.
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.75 }}>
                Verafye does not ask fraud teams and AML teams to merge. It connects their data so that any analyst — regardless of which team they sit in — can see the full scope of the risk before closing a case or filing a SAR.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
              {capabilities.map(cap => (
                <Link
                  key={cap.title}
                  href={cap.href}
                  style={{ textDecoration: 'none', flex: '0 1 calc(33.33% - 0.84rem)', minWidth: '240px' }}
                >
                  <div className="card" style={{ padding: '1.75rem', height: '100%' }}>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{cap.title}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{cap.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHO THIS IS FOR ──────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Buyers</p>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.5rem' }}>
              Built for the leaders who sit at the intersection
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
              {['Chief Compliance Officer', 'Head of Fraud', 'BSA Officer', 'Head of Financial Crime', 'VP Risk Operations'].map(role => (
                <span key={role} className="tag" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>{role}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75 }}>
              If your fraud team and AML team are regularly escalating to each other but working in separate systems, a Risk Shadowing Review will show you specifically where those handoffs are creating gaps — using your own transaction and entity data.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. RELATED USE CASES ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.625rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: '1.5rem', textAlign: 'center' }}>
              Related use cases
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { label: 'Mule Account & Network Detection', href: '/use-cases/mule-network-detection' },
                { label: 'Transaction Monitoring', href: '/use-cases/transaction-monitoring' },
                { label: 'Investigation Workflow Modernization', href: '/use-cases/investigation-workflow-modernization' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, color: 'var(--dark)',
                    gap: '0.5rem',
                  }}
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <CTA
        title="See what your fraud and AML teams are missing"
        subtitle="A Risk Shadowing Review runs Verafye's connected detection models on your real data — so you see the gaps, not a demo scenario."
      />

    </>
  );
}

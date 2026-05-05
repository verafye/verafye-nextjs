import Link from 'next/link';

export const metadata = {
  title: 'Investigation Intelligence for PSPs and PayFacs | Verafye',
  description: 'Verafye helps payment processors, PSPs, and PayFacs investigate merchant fraud, chargebacks, and transaction anomalies with unified signals and structured case workflows.',
  openGraph: {
    title: 'Investigation Intelligence for PSPs and PayFacs | Verafye',
    description: 'Verafye helps payment processors, PSPs, and PayFacs investigate merchant fraud, chargebacks, and transaction anomalies with unified signals and structured case workflows.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investigation Intelligence for PSPs and PayFacs | Verafye',
    description: 'Verafye helps payment processors, PSPs, and PayFacs investigate merchant fraud, chargebacks, and transaction anomalies with unified signals and structured case workflows.',
  },
  robots: { index: false, follow: false },
};

export default function LpPspPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '54rem', margin: '0 auto', textAlign: 'center' }}>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(30,111,183,0.08)', border: '1px solid rgba(30,111,183,0.2)', borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '1.75rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1e6fb7', flexShrink: 0 }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e6fb7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Payment Processors &middot; PSPs &middot; PayFacs
              </span>
            </div>

            <h1 className="animate-fade-up" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Stop Investigating Payment Fraud<br />
              <span style={{ color: 'var(--primary)' }}>Across Disconnected Systems</span>
            </h1>

            <p className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '46rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Payment processors and PayFacs generate alerts across merchant fraud, chargebacks, transaction anomalies, and AML indicators - spread across systems that share no investigation context. Detection is not the bottleneck. Moving from alerts to decisions is.
            </p>

            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2.25rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Verafye is the investigation layer that connects merchant-level signals, transaction context, and AML alerts - with alert clustering, case formation, and structured workflows that give your fraud and compliance teams a unified view from alert to decision.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
                See How Payment Teams Investigate Faster
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" className="btn-secondary">Request a PSP Walkthrough</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM SECTION ──────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Investigation Challenge</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              What PSPs and PayFacs Face Every Day
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
              The problem is not the volume of alerts. The problem is the absence of the investigation infrastructure needed to act on them consistently, quickly, and with a traceable audit trail.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/></svg>),
                title: 'Fraud and AML Signals That Never Meet',
                body: 'Merchant fraud scoring, chargeback data, device intelligence, and AML transaction monitoring outputs are held in separate tools with no shared layer. A merchant flagged in fraud remains invisible to AML - exactly the overlap that sophisticated schemes exploit.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>),
                title: 'Chargeback Investigations Built on Manual Evidence Gathering',
                body: 'When a chargeback dispute or card network inquiry lands, assembling the investigation trail manually across multiple platforms is slow and inconsistent. Every minute spent gathering context is time not spent resolving cases - and card scheme timelines do not flex.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Alert Volumes That Outpace Investigation Capacity',
                body: 'High transaction throughput drives proportional alert growth. Without alert clustering and intelligent prioritisation, investigation queues grow faster than teams can process them - increasing regulatory exposure and operational cost simultaneously.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
                title: 'Card Network Obligations Require Documented Investigation Trails',
                body: 'Visa and Mastercard fraud liability requirements and PCI DSS v4.0 obligations raise the bar for traceable, documented risk decisions. Fragmented tooling makes producing that documentation under audit pressure slow, inconsistent, and operationally expensive.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <div className={`card-icon ${item.gradient}`}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CURRENT SOLUTIONS FAIL ───────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Current Approaches Fall Short</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Neither Tier-1 Platforms Nor Point Tools Solve the Investigation Problem
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '72rem', margin: '0 auto' }}>
            <div className="card card-elevated" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Tier-1 Enterprise Platforms</div>
              {[
                '12–18 month implementation timelines that PSP operations cannot absorb',
                'Enterprise pricing structures designed for Tier-1 bank budgets',
                'Configuration complexity requiring dedicated vendor support teams',
                'Built for banking workflows - not multi-merchant payment operations',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.2rem' }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
            <div className="card card-elevated" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Point Tools and Siloed Detection</div>
              {[
                'Each tool generates alerts in isolation - no shared investigation context',
                'Fraud and AML teams work from separate queues with no connected view',
                'Cross-domain risk patterns require manual correlation across platforms',
                'Adding more detection tools increases alert volume, not investigation quality',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.2rem' }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SOLUTION ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Verafye Investigation Layer</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                A Connected Investigation Layer for Payment Platform Operations
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye sits across your existing fraud, AML, and payments infrastructure - connecting merchant-level signals, transaction context, device intelligence, and AML alerts into a unified investigation layer. Not a replacement. Not another detection tool. The investigation layer your stack is missing.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  n: '01',
                  title: 'Signal Aggregation Across Merchant Risk and AML',
                  body: 'Merchant fraud scores, transaction anomaly data, chargeback signals, device intelligence, and AML monitoring outputs aggregated into a single unified view - eliminating the blind spots that form when each tool operates in isolation.',
                },
                {
                  n: '02',
                  title: 'Alert Clustering Into Investigation Cases',
                  body: 'Related alerts across fraud and AML are automatically clustered into coherent investigation cases - reducing alert noise, surfacing coordinated patterns as single risk events, and enabling analysts to investigate rather than triage.',
                },
                {
                  n: '03',
                  title: 'Graph Intelligence for Merchant Network Risk',
                  body: 'Graph-native relationship analysis connects entities across merchants, devices, accounts, and payment flows - surfacing card testing rings, synthetic merchant schemes, and coordinated chargeback fraud that transaction-level rules cannot detect.',
                },
                {
                  n: '04',
                  title: 'Structured Workflows With AI-Assisted Decision Support',
                  body: 'Every case carries pre-assembled investigation context, entity relationships, and risk signals - with AI-assisted decision support that gives fraud and compliance teams the information needed to act confidently, consistently, and with a full audit trail.',
                },
              ].map(item => (
                <div key={item.n} className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.n}</div>
                  <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ICP USE CASES ────────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Use Cases</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              What PSP and PayFac Teams Investigate with Verafye
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>),
                title: 'Merchant Fraud Investigation',
                body: 'Connect merchant onboarding signals, transaction patterns, chargeback rates, and device intelligence into a single investigation case - giving risk teams the full context needed to act on merchant fraud without switching platforms.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
                title: 'Chargeback and Card Network Risk',
                body: 'Investigate chargeback patterns against merchant transaction history and fraud signals - with pre-assembled evidence trails aligned with Visa and Mastercard fraud liability documentation requirements.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Card Testing and Coordinated Fraud Rings',
                body: 'Graph intelligence surfaces card testing rings, synthetic merchant schemes, and coordinated fraud networks operating across multiple merchants and payment rails - patterns that individual transaction rules cannot see.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
                title: 'Fraud–AML Overlap on Payment Rails',
                body: 'Where transaction fraud and money laundering typologies overlap - structuring across merchants, layering through payment flows - Verafye surfaces the full pattern as a single connected investigation rather than parallel siloed alerts.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/></svg>),
                title: 'Regulatory and Scheme Audit Readiness',
                body: 'Structured case files with timestamped decision logs, signal history, and analyst actions - ready for card scheme inquiries, regulatory examinations, and PCI DSS v4.0 compliance documentation without reactive assembly.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Merchant Lifecycle Monitoring',
                body: 'Verafye supports merchant risk management across the full lifecycle - from onboarding and KYB through ongoing transaction monitoring to payout risk assessment - with continuous connected intelligence that evolves as merchant behaviour changes.',
              },
            ].map(item => (
              <div key={item.title} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How It Works</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                From Alerts to Decisions - In Four Steps
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }}>
              {[
                { step: '01', label: 'Signal Aggregation', desc: 'Fraud, AML, merchant risk, and transaction signals pulled into a unified view across your existing infrastructure.' },
                { step: '02', label: 'Alert Clustering', desc: 'Related alerts automatically grouped into coherent investigation cases - reducing noise and surfacing coordinated patterns.' },
                { step: '03', label: 'Case Formation', desc: 'Each case pre-assembled with entity context, signal history, relationship maps, and relevant risk indicators.' },
                { step: '04', label: 'AI-Assisted Decisions', desc: 'Analysts act on fully assembled case context with decision support - faster, more consistent, and fully audit-ready.' },
              ].map(item => (
                <div key={item.step} className="card" style={{ padding: '1.75rem', borderTop: '3px solid var(--primary)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.625rem', letterSpacing: '-0.02em' }}>{item.step}</div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{item.label}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. DIFFERENTIATION ──────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Verafye</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
              Not Another Detection Tool
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Not a siloed point solution. Not a heavy Tier-1 platform that takes 18 months to implement. Verafye is the investigation layer that connects your existing fraud and AML infrastructure - delivering the unified context, structured workflows, and AI-assisted decision support that payment platforms need to operate at regulatory pace.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', textAlign: 'left' }}>
              {[
                { label: 'Works Alongside Existing Systems', body: 'API-first integration. No rip-and-replace. Verafye connects to your existing detection tools, transaction monitoring, and fraud infrastructure.' },
                { label: 'Operational Quickly', body: 'Designed for regulated payment operations - not 12-month enterprise deployments. Your team is investigating with connected context, not waiting for configuration.' },
                { label: 'Selected in Competitive Evaluations', body: 'Chosen by payment platform risk teams over well-funded alternatives - for the investigation layer capability that point tools and Tier-1 platforms both lack.' },
              ].map(item => (
                <div key={item.label} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.label}</div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg,#0f2744 0%,#1a4070 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '50rem', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              PSPs &middot; PayFacs &middot; Payment Processors
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              See the Investigation Layer Built for Payment Platforms
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'rgba(255,255,255,0.72)', marginBottom: '2.25rem', lineHeight: 1.7, maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Request a walkthrough tailored to PSP and PayFac operations - merchant risk investigation, alert clustering, and unified fraud and AML case workflows in a single session.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-demo"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', height: '3rem', padding: '0 1.75rem', background: '#fff', color: '#0f2744', borderRadius: '8px', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none' }}
              >
                See How Payment Teams Investigate Faster
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/request-demo"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', height: '3rem', padding: '0 1.75rem', background: 'transparent', color: '#fff', borderRadius: '8px', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                Request a PSP Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'AML Investigation Intelligence for Money Services Businesses | Verafye',
  description: 'Verafye helps MSB compliance teams manage AML investigations across cross-border, high-velocity transactions with alert clustering, case workflows, and AI-assisted decision support.',
  openGraph: {
    title: 'AML Investigation Intelligence for Money Services Businesses | Verafye',
    description: 'Verafye helps MSB compliance teams manage AML investigations across cross-border, high-velocity transactions with alert clustering, case workflows, and AI-assisted decision support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AML Investigation Intelligence for Money Services Businesses | Verafye',
    description: 'Verafye helps MSB compliance teams manage AML investigations across cross-border, high-velocity transactions with alert clustering, case workflows, and AI-assisted decision support.',
  },
  robots: { index: false, follow: false },
};

export default function LpMsbPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '54rem', margin: '0 auto', textAlign: 'center' }}>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(30,111,183,0.08)', border: '1px solid rgba(30,111,183,0.2)', borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '1.75rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1e6fb7', flexShrink: 0 }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e6fb7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Money Services Businesses &middot; MSBs &middot; FINTRAC / FinCEN / FATF
              </span>
            </div>

            <h1 className="animate-fade-up" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              AML Investigations Built for the<br />
              <span style={{ color: 'var(--primary)' }}>Speed of Money Services</span>
            </h1>

            <p className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '46rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              MSBs generate significant AML alert volumes from cross-border, high-velocity transactions - under growing examiner scrutiny from FINTRAC, FinCEN, and FATF-aligned regulators. Compliance teams are not short of alerts. They are short of the investigation infrastructure to act on them consistently.
            </p>

            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2.25rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Verafye is the investigation layer built for AML-intensive MSB operations - aggregating KYC, transaction risk, and AML signals into unified case workflows, with graph intelligence for network-level risk and AI-assisted decision support that moves teams from alert overload to SAR-ready decisions.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
                See How MSB Compliance Teams Investigate Faster
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" className="btn-secondary">Request an MSB Walkthrough</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM SECTION ──────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The AML Investigation Challenge</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              What MSB Compliance Teams Face Every Day
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
              Detection is not the problem. The problem is what comes after: investigation backlogs, fragmented signals, and manually assembled case evidence that cannot scale to the volume or velocity of MSB transaction flows.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'High-Velocity Transaction Flows Drive AML Alert Overload',
                body: 'Cross-border money movement at scale generates AML alert volumes that compliance teams cannot meaningfully review with manual processes. Genuine risk gets buried in noise, triage becomes guesswork, and investigation backlogs grow faster than capacity.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/></svg>),
                title: 'KYC, Transaction Risk, and AML Signals in Separate Tools',
                body: 'Customer KYC data, transaction risk scoring, and AML monitoring outputs held in separate platforms with no shared investigation layer. Analysts must manually assemble context across systems before investigation can begin - slowing case resolution and increasing missed escalation risk.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Laundering Networks Invisible Without Cross-Account Context',
                body: 'Layering and structuring schemes operating across connected senders, recipients, and intermediary accounts are network-level patterns that transaction-level monitoring cannot surface. Without graph intelligence, coordinated laundering activity looks like isolated, low-risk transactions.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>),
                title: 'Examiner Scrutiny of Investigation Quality and SAR Consistency',
                body: 'FINTRAC, FinCEN, and FATF-aligned regulators are raising expectations for investigation quality, SAR narrative consistency, and documented decision trails. Manually assembled records create regulatory exposure that extends well beyond the underlying risk events.',
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
              Transaction Monitoring Alone Is Not an Investigation Strategy
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '72rem', margin: '0 auto' }}>
            <div className="card card-elevated" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Tier-1 AML Platforms</div>
              {[
                'Built for Tier-1 bank scale - implementation complexity and cost that MSB operations cannot absorb',
                'Configuration requires dedicated programme teams and extended timelines before value is realised',
                'Compliance workflows designed for banking typologies, not MSB transaction profiles',
                'Limited flexibility to adapt to the specific regulatory frameworks MSBs operate under',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.2rem' }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
            <div className="card card-elevated" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Standalone Transaction Monitoring</div>
              {[
                'Generates alerts at the transaction level with no investigation layer to act on them',
                'KYC, risk scoring, and AML outputs remain siloed - no shared investigation context',
                'Network-level laundering patterns invisible without cross-account relationship mapping',
                'SAR preparation requires manual evidence assembly from multiple systems under time pressure',
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
                An Investigation Layer Built for AML-Intensive MSB Operations
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects KYC, transaction risk, and AML signals into a unified investigation layer - with alert clustering, case formation, graph intelligence for network-level risk, and structured workflows that give compliance teams full context from the moment a case is created. Works alongside existing monitoring systems. No rip-and-replace.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  n: '01',
                  title: 'Signal Aggregation Across KYC, Transaction Risk, and AML',
                  body: 'KYC data, transaction risk scores, and AML monitoring alerts unified into a single investigation view - eliminating the need to switch between platforms to assemble context before investigation can begin.',
                },
                {
                  n: '02',
                  title: 'Alert Clustering Into AML Investigation Cases',
                  body: 'Related AML alerts are automatically clustered into coherent cases - reducing alert volume, surfacing coordinated transaction patterns as single investigation units, and enabling compliance teams to work through structured queues instead of individual alerts.',
                },
                {
                  n: '03',
                  title: 'Graph Intelligence for Network-Level Laundering Risk',
                  body: 'Graph-native relationship analysis connects entities across accounts and transaction flows - surfacing coordinated laundering patterns, structuring networks, and linked account risk that transaction-level monitoring cannot detect. Sanctions signals included as investigation context.',
                },
                {
                  n: '04',
                  title: 'Structured Workflows and AI-Assisted Decision Support',
                  body: 'Structured case workflows guide compliance teams through the investigation process - with AI-assisted decision support, consistent escalation paths, and full audit trails that support SAR quality and examiner review under FINTRAC, FinCEN, and FATF-aligned frameworks.',
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
              What MSB Compliance Teams Investigate with Verafye
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><circle cx="19" cy="7" r="3"/><circle cx="5" cy="17" r="3"/></svg>),
                title: 'Cross-Border Transaction Investigation',
                body: 'Connect cross-border money movement signals - transaction risk, sender and recipient profiles, KYC context, and historical patterns - into structured investigation cases that give compliance teams the full picture before decisions are made.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Mule Network and Structuring Detection',
                body: 'Graph intelligence surfaces mule networks, structuring patterns, and layering schemes operating across connected senders and recipients - typologies that are invisible at the individual transaction level but clear at the network level.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'SAR Preparation and Regulatory Readiness',
                body: 'Structured case files with full signal history, decision logs, and audit trails - produced through the investigation workflow, not assembled under time pressure when a regulatory request arrives.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'AML Case Queue Prioritisation',
                body: 'Risk-based case scoring draws on network-level signals and cross-account context - ensuring compliance teams always work the highest-risk AML cases first, regardless of alert creation time or rule weight.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>),
                title: 'High-Risk Customer Investigation',
                body: 'Aggregate customer-level risk signals - KYC, transaction history, network relationships, and AML indicators - into investigation cases that support enhanced due diligence decisions and ongoing monitoring under regulatory frameworks.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
                title: 'Examiner and Regulatory Response',
                body: 'Produce investigation documentation, decision trails, and case evidence on demand - aligned with the structured record-keeping expectations of FINTRAC, FinCEN, and FATF-aligned examiners.',
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
                From Alerts to SAR-Ready Decisions
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }}>
              {[
                { step: '01', label: 'Signal Aggregation', desc: 'KYC, transaction risk, and AML signals pulled into a unified view across your existing monitoring infrastructure.' },
                { step: '02', label: 'Alert Clustering', desc: 'Related AML alerts grouped into coherent investigation cases - reducing noise and surfacing coordinated patterns.' },
                { step: '03', label: 'Case Formation', desc: 'Each case pre-assembled with entity context, transaction history, network relationships, and risk indicators.' },
                { step: '04', label: 'AI-Assisted Decisions', desc: 'Compliance analysts act on fully assembled case context - with decision support and full audit trails for SAR and examiner readiness.' },
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
              Not a Transaction Monitoring Replacement. Not a Tier-1 AML Platform.
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Verafye is the investigation layer that works alongside your existing monitoring infrastructure - connecting KYC, transaction risk, and AML outputs into structured investigation workflows. No rip-and-replace. No 18-month implementation. MSB compliance teams investigate with full context from day one.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', textAlign: 'left' }}>
              {[
                { label: 'Works Alongside Existing Monitoring', body: 'API-first integration that connects to your current transaction monitoring, KYC, and risk infrastructure - without replacing any of it.' },
                { label: 'Designed for MSB Compliance Scale', body: 'Not a banking platform repurposed for MSBs. Investigation workflows, case structures, and signal logic aligned with MSB transaction profiles and regulatory frameworks.' },
                { label: 'Chosen Over Detection-Only Alternatives', body: 'Selected by MSB compliance teams in competitive evaluations for the investigation layer capability that standalone monitoring systems do not provide.' },
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
              Money Services Businesses &middot; FINTRAC &middot; FinCEN &middot; FATF
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              See the Investigation Layer Built for MSB Compliance Teams
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'rgba(255,255,255,0.72)', marginBottom: '2.25rem', lineHeight: 1.7, maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Request a walkthrough tailored to MSB operations - cross-border AML investigation workflows, alert clustering, network-level risk detection, and SAR-ready case management in a single session.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-demo"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', height: '3rem', padding: '0 1.75rem', background: '#fff', color: '#0f2744', borderRadius: '8px', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none' }}
              >
                See How MSB Teams Investigate Faster
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/request-demo"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', height: '3rem', padding: '0 1.75rem', background: 'transparent', color: '#fff', borderRadius: '8px', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                Request an MSB Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

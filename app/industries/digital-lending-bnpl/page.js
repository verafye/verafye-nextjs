import Link from 'next/link';

export const metadata = {
  title: "Stop Synthetic Identity & Lending Fraud",
  description: "Detect borrower networks, synthetic identities and coordinated application fraud rings before losses escalate and compliance risks increase.",
  keywords: ["lending fraud detection", "synthetic identity fraud", "application fraud detection", "bnpl fraud prevention", "borrower risk intelligence", "fraud analytics"],
  openGraph: {
    title: "Stop Synthetic Identity & Lending Fraud | Verafye",
    description: "Detect borrower networks, synthetic identities and coordinated application fraud rings before losses escalate and compliance risks increase.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stop Synthetic Identity & Lending Fraud | Verafye",
    description: "Detect borrower networks, synthetic identities and coordinated application fraud rings before losses escalate and compliance risks increase.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/industries/digital-lending-bnpl',
  },
};

export default function DigitalLendingBnplPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>DIGITAL LENDING &amp; BNPL</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Investigation Intelligence for Digital Lending &amp; BNPL Risk Teams
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.55 }}>
              Connect fraud, identity, payment, device and repayment signals into explainable investigations for lending and BNPL fraud workflows.
            </p>
            <p className="animate-fade-up delay-250" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--dark)', fontWeight: 600, marginBottom: '1.25rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye is not a credit underwriting or loan decisioning system. It investigates fraud and financial crime networks around lending flows - it does not score creditworthiness.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps digital lenders and BNPL providers move from fragmented signals to structured investigation cases - surfacing synthetic identities, application fraud, first-party fraud, mule-linked borrowers, and suspicious networks at application review and post-booking stages.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
                Request Demo
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/platform" className="btn-secondary">Explore Platform</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. KEY RISK CHALLENGES ─────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Key Risk Challenges</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              The operating pressures lending and BNPL risk teams face
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>),
                title: 'Synthetic Identity Fraud at Origination',
                body: 'Fabricated or stitched identities with clean bureau histories slip through standard origination checks - exploiting gaps between identity verification, device signals, and behavioral context that no single tool sees across.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
                title: 'First-Party Fraud and Friendly Default',
                body: 'Borrowers who never intended to repay create structured repayment patterns designed to game collections triggers. The signals exist - in device, behavior, and payment data - but are rarely connected into a coherent investigation view.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Mule Accounts Linked to Lending Fraud',
                body: 'Fraudulent borrowers route loan proceeds through mule account networks. Without graph intelligence connecting borrowers, accounts, devices, and counterparties, these networks remain invisible across case queues.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Alert Volume Without Investigation Context',
                body: 'Risk models generate high alert volumes at origination, servicing, and default - but analysts lack shared case context, entity history, and explainable decision support to work through them efficiently.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Device and Behavior Anomalies Missed',
                body: 'Emulators, rooted devices, session hijacking, and unusual application behavior signal elevated risk - but only when connected to account, identity, and repayment context can they drive actionable case decisions.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>),
                title: 'Audit Gaps in Decision Documentation',
                body: 'Regulators and internal audit increasingly require documented rationale for fraud flags, case dispositions and escalation actions. Verafye documents the investigation record - your origination systems own the credit decision.',
              },
            ].map((item, i) => (
              <div key={i} className="card card-elevated" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className={`card-icon ${item.gradient}`} style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 'clamp(1rem,1.75vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW VERAFYE HELPS ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Helps</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              From fragmented alerts to investigation-ready lending cases
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', marginTop: '1.25rem', lineHeight: 1.7, maxWidth: '48rem', margin: '1.25rem auto 0' }}>
              Verafye acts as the investigation layer for lending and BNPL risk teams - connecting signals from origination through servicing, surfacing hidden networks, and helping analysts reach explainable decisions faster.
            </p>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto', gap: '2rem' }}>

            <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div className="card-corner"></div>
              <div className="card-icon gradient-bg-4" style={{ marginBottom: '1.25rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 style={{ fontSize: 'clamp(1.125rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>Synthetic identity detection</h3>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', lineHeight: 1.7 }}>Connect identity, device and behavioral signals at application review to surface synthetic identity patterns that bypass single-layer checks - before fraud exposure materialises.</p>
            </div>

            <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div className="card-corner"></div>
              <div className="card-icon gradient-bg-4" style={{ marginBottom: '1.25rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
              </div>
              <h3 style={{ fontSize: 'clamp(1.125rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>Mule network and ring detection</h3>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', lineHeight: 1.7 }}>Graph intelligence maps relationships across borrowers, accounts, devices, counterparties, and payment destinations - exposing coordinated fraud rings and mule-linked applications that look unrelated in isolation.</p>
            </div>

            <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div className="card-corner"></div>
              <div className="card-icon gradient-bg-4" style={{ marginBottom: '1.25rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
              </div>
              <h3 style={{ fontSize: 'clamp(1.125rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>Repayment fraud patterns</h3>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', lineHeight: 1.7 }}>Surface emerging fraud indicators across payment behaviour, repayment cadence, and account activity - connecting fraud intent signals across the borrower lifecycle into investigation-ready cases.</p>
            </div>

            <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div className="card-corner"></div>
              <div className="card-icon gradient-bg-4" style={{ marginBottom: '1.25rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 style={{ fontSize: 'clamp(1.125rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>Audit-ready investigation trails</h3>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', lineHeight: 1.7 }}>Every case decision is documented with investigation history, evidence attachments, analyst notes, and disposition records - supporting regulatory review and internal audit without manual reconstruction.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. SIGNALS VERAFYE CONNECTS ─────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Signals Verafye Connects</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Connected context across the lending risk surface
            </h2>
          </div>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            {[
              { label: 'Application Identity Data', color: '#1E6FB7', bg: 'rgba(30,111,183,0.07)', border: 'rgba(30,111,183,0.18)' },
              { label: 'Device Fingerprint & Session', color: '#7C3AED', bg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.18)' },
              { label: 'Identity Verification Signals', color: '#0891B2', bg: 'rgba(8,145,178,0.07)', border: 'rgba(8,145,178,0.18)' },
              { label: 'Behavioral Patterns', color: '#059669', bg: 'rgba(5,150,105,0.07)', border: 'rgba(5,150,105,0.18)' },
              { label: 'Repayment & Payment Events', color: '#D97706', bg: 'rgba(217,119,6,0.07)', border: 'rgba(217,119,6,0.18)' },
              { label: 'Account & Counterparty Relationships', color: '#1E6FB7', bg: 'rgba(30,111,183,0.07)', border: 'rgba(30,111,183,0.18)' },
              { label: 'Fraud & AML Alerts', color: '#DC2626', bg: 'rgba(220,38,38,0.07)', border: 'rgba(220,38,38,0.18)' },
              { label: 'Watchlist & Sanctions Hits', color: '#7C3AED', bg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.18)' },
              { label: 'Network & IP Signals', color: '#0891B2', bg: 'rgba(8,145,178,0.07)', border: 'rgba(8,145,178,0.18)' },
              { label: 'Third-Party Enrichment', color: '#059669', bg: 'rgba(5,150,105,0.07)', border: 'rgba(5,150,105,0.18)' },
            ].map((sig) => (
              <span key={sig.label} style={{
                fontSize: '0.8125rem', fontWeight: 600, color: sig.color,
                background: sig.bg, border: `1px solid ${sig.border}`,
                borderRadius: '6px', padding: '0.5rem 1rem', lineHeight: 1.3,
              }}>
                {sig.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INVESTIGATION WORKFLOWS ──────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Investigation Workflows</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Case workflows built for lending risk teams
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '80rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Application Fraud Investigation',
                body: 'Structured cases that connect identity, device and behavioral signals around lending flows, assembled for analyst review. Verafye informs fraud dispositions; it does not decide applications.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Network-Level Ring Detection',
                body: 'Identify clusters of connected borrowers, shared devices, and coordinated applications using graph intelligence - surfacing organised fraud before it scales.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>),
                title: 'Mule Account Case Workflows',
                body: 'Investigation queues that surface mule-linked lending applications and associated account relationships - with case context connecting fraud, AML, and payment signals.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>),
                title: 'Fraud Pattern Early Warning',
                body: 'Surface emerging fraud indicators across repayment behavior, account activity and network patterns. Focused on fraud and financial crime risk - not credit risk.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>),
                title: 'Configurable Risk Rules',
                body: 'Define and adjust risk rules for lending-specific patterns across identity, network, and device signals - with configurable parameters and human review before any rule goes live.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>),
                title: 'Audit-Ready Disposition Records',
                body: 'Every origination decision, fraud flag, and case disposition is documented with investigation history and explainability records - supporting regulatory review and internal audit.',
              },
            ].map((wf, i) => (
              <div key={i} className="card card-elevated" style={{ padding: '1.75rem' }}>
                <div className="card-icon-sm" style={{ background: 'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))', border: '1px solid rgba(30,111,183,0.2)', borderRadius: '0.75rem', marginBottom: '1rem' }}>
                  {wf.icon}
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.5rem' }}>{wf.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65 }}>{wf.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BEFORE / AFTER ───────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>BEFORE VERAFYE / AFTER VERAFYE</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              What changes for lending risk teams
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#DC2626', marginBottom: '1.5rem' }}>Before Verafye</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Synthetic identity cases reviewed in isolation - no cross-signal context at origination',
                  'First-party fraud patterns invisible without connected repayment and device data',
                  'Mule-linked applications missed because accounts, devices, and borrowers are not graph-connected',
                  'High origination alert volumes with no structured investigation case context for analysts',
                  'Audit gaps in decision documentation when regulators or internal audit request case rationale',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, marginTop: '0.2rem', width: '1.25rem', height: '1.25rem', borderRadius: '50%', background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '2.5rem', background: '#EFF6FF', border: '1px solid rgba(30,111,183,0.2)', borderRadius: '12px' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '1.5rem' }}>After Verafye</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Fraud, identity and device signals connected into investigation-ready application fraud cases',
                  'First-party and BNPL fraud patterns surfaced through connected repayment, device, and behavior context',
                  'Graph intelligence exposes mule networks and coordinated borrower rings across applications',
                  'Alert clustering reduces noise - analysts start with structured cases, not raw alert queues',
                  'Every disposition documented with audit logs, investigation history, and explainability records',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, marginTop: '0.2rem', width: '1.25rem', height: '1.25rem', borderRadius: '50%', background: 'rgba(30,111,183,0.1)', border: '1px solid rgba(30,111,183,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--dark)', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. RELATED USE CASES ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Related Use Cases</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Lending and BNPL investigation workflows
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              { href: '/use-cases/mule-network-detection', label: 'Mule Network Detection', body: 'Detect borrower accounts linked to mule networks using graph intelligence across accounts, devices, and counterparties.' },
              { href: '/use-cases/transaction-monitoring', label: 'Transaction Monitoring', body: 'Monitor payment and repayment events against risk patterns with connected case context and audit-ready dispositions.' },
              { href: '/use-cases/investigation-workflow-modernization', label: 'Investigation Workflow Modernization', body: 'Replace manual alert triage with structured investigation queues, case management, and explainable decision support.' },
            ].map((uc) => (
              <Link key={uc.href} href={uc.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="card card-elevated card-hover" style={{ padding: '2rem', height: '100%', cursor: 'pointer' }}>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{uc.label}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem' }}>{uc.body}</p>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    Explore use case
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '48rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>GET STARTED</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.025em', color: 'var(--dark)', marginBottom: '1.25rem' }}>
            Explore Fraud-Network Investigation for Lending Risk Teams
          </h2>
          <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.65, maxWidth: '38rem', margin: '0 auto 2.25rem' }}>
            Connect borrower, identity, device, partner, repayment, beneficiary, and transaction signals into reviewable fraud-network cases.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/capabilities" className="btn-secondary">View Capabilities</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>

    </>
  );
}

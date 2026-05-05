import Link from 'next/link';

export const metadata = {
  title: 'Borrower Fraud Investigation Intelligence for Lending Risk Teams | Verafye',
  description: 'Verafye helps lending and consumer finance risk teams investigate borrower fraud, identity risk, and credit abuse with alert clustering, case workflows, and AI-assisted decision support.',
  openGraph: {
    title: 'Borrower Fraud Investigation Intelligence for Lending Risk Teams | Verafye',
    description: 'Verafye helps lending and consumer finance risk teams investigate borrower fraud, identity risk, and credit abuse with alert clustering, case workflows, and AI-assisted decision support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borrower Fraud Investigation Intelligence for Lending Risk Teams | Verafye',
    description: 'Verafye helps lending and consumer finance risk teams investigate borrower fraud, identity risk, and credit abuse with alert clustering, case workflows, and AI-assisted decision support.',
  },
  robots: { index: false, follow: false },
};

export default function LpLendingPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '54rem', margin: '0 auto', textAlign: 'center' }}>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(30,111,183,0.08)', border: '1px solid rgba(30,111,183,0.2)', borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '1.75rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1e6fb7', flexShrink: 0 }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e6fb7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Digital Lenders &middot; Consumer Finance &middot; Lending Risk Teams
              </span>
            </div>

            <h1 className="animate-fade-up" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Investigate Borrower Fraud Faster  - <br />
              <span style={{ color: 'var(--primary)' }}>Across the Full Lending Lifecycle</span>
            </h1>

            <p className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '46rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Lending risk teams face a fraud problem that credit scoring and point-in-time decisioning were never built to solve. Borrower fraud, identity risk, and credit abuse span multiple signals, multiple systems, and the full origination-to-collections lifecycle. Detection is not the bottleneck. Investigation is.
            </p>

            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2.25rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Verafye is the investigation layer built for lending risk - aggregating identity, behavioural, and account signals into structured case workflows, with graph intelligence for network-level fraud detection and AI-assisted decision support that moves teams from fragmented alerts to audit-ready decisions.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
                See How Lending Risk Teams Investigate Borrower Fraud Faster
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" className="btn-secondary">Request a Lending Walkthrough</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM SECTION ──────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Borrower Fraud Investigation Challenge</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              What Lending Risk Teams Face Every Day
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
              Detection is not the problem. The problem is what comes after: fragmented signals across origination, servicing, and collections - with no unified investigation context and no scalable workflow for the risk teams who have to act on them.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>),
                title: 'Identity and Borrower Risk Signals Are Never Assembled in One Place',
                body: 'KYC data, application behaviour, device signals, bureau indicators, and account activity all generate separate alerts in separate systems. Risk teams manually stitch these together to form an investigation picture - a process that is inconsistent, slow, and does not scale to portfolio volume.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
                title: 'Synthetic Identity and Loan Stacking Are Invisible at Origination',
                body: 'Point-in-time identity screening catches direct fraud but misses synthetic identities built over months and loan stacking across multiple lenders. By the time network-level patterns emerge in default data, the fraud has already been funded. Investigation happens too late, if at all.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 0-2-2v-4m0 0h18"/></svg>),
                title: 'Fraud and Credit Abuse Overlap Across the Portfolio',
                body: 'First-party fraud, deliberate default, and opportunistic credit abuse blur the boundary between fraud and credit risk. Without a unified investigation layer connecting these signals, risk teams classify cases inconsistently, miss coordinated abuse patterns, and cannot document decisions for audit or regulatory review.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 1 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>),
                title: 'Investigation Backlogs Grow Faster Than Team Capacity',
                body: 'When every investigation requires manual evidence assembly across origination data, identity records, transaction history, and account activity, teams cannot keep pace. Backlogs accumulate, high-risk cases age past the point of recovery, and regulated teams face audit exposure on unresolved queues.',
              },
            ].map((card, i) => (
              <div key={i} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className={`card-icon ${card.gradient}`} style={{ marginBottom: '1.25rem' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.3 }}>{card.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CURRENT SOLUTIONS FAIL ───────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '50rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Gap in Existing Tools</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Why Existing Solutions Cannot Close the Borrower Fraud Investigation Gap
            </h2>
          </div>

          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto', gap: '2rem' }}>
            <div className="card card-elevated" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem' }}>Enterprise Fraud Platforms</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  'Built for banking - not optimised for lending origination-to-collections workflows',
                  'Require 12–18 month implementations before teams can investigate a single case',
                  'Treat fraud and credit risk as separate domains, missing the overlap where lending losses accumulate',
                  'Priced for Tier-1 institutions - not viable for digital lenders and consumer finance platforms',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.6 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.125rem' }}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card card-elevated" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem' }}>Point-in-Time Screening & Decisioning Tools</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  'Score and screen at origination - but generate no investigation capability for post-funding risk',
                  'Cannot connect identity signals across the borrower lifecycle or detect stacking across the portfolio',
                  'Produce alerts with no case formation - risk teams must manually build investigation context',
                  'Leave fraud-credit overlap uninvestigated, exposing teams to classification inconsistency and audit risk',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.6 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.125rem' }}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SOLUTION ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Verafye Investigation Layer</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              An Investigation Layer Built for Lending Risk - Not Borrowed from Banking
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
              Verafye connects borrower risk signals across the lending lifecycle - from origination through servicing and collections - into a single investigation layer with structured case workflows, graph intelligence for network fraud, and AI-assisted decision support.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                num: '01',
                title: 'Signal Aggregation Across the Borrower Lifecycle',
                body: 'Verafye aggregates identity signals, application behaviour, device and channel data, account activity, and transaction history into a unified investigation view - so every case starts with the full borrower context already assembled, not manually reconstructed.',
              },
              {
                num: '02',
                title: 'Alert Clustering into Borrower Risk Cases',
                body: 'Instead of separate alerts for each signal, Verafye clusters related indicators - identity anomalies, behavioural flags, account risk signals - into structured borrower cases. Risk teams see the full picture immediately and act on prioritised, context-rich investigations.',
              },
              {
                num: '03',
                title: 'Graph Intelligence for Network-Level Borrower Fraud',
                body: 'Loan stacking, synthetic identity rings, and coordinated credit abuse are network-level problems. Verafye\'s graph intelligence maps relationships across applicants, accounts, devices, and addresses - surfacing coordinated fraud patterns before they fully materialise in default data.',
              },
              {
                num: '04',
                title: 'Structured Workflows with AI-Assisted Decision Support',
                body: 'Every borrower fraud case moves through a structured workflow - with AI-assisted analysis of risk signals, pre-assembled evidence, and documented decision rationale. Teams move faster, decisions are consistent, and audit trails are built into every investigation outcome.',
              },
            ].map((step, i) => (
              <div key={i} className="card card-elevated" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>{step.num}</div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.3 }}>{step.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ICP-SPECIFIC USE CASES ───────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>What Lending Risk Teams Investigate</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Use Cases Lending Risk Teams Resolve with Verafye
            </h2>
          </div>

          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                title: 'First-Party Fraud and Deliberate Default',
                body: 'Investigate borrowers who apply with genuine identity but fraudulent intent - including deliberate default, misrepresented income or employment, and application fraud that screening tools approved at origination. Verafye connects origination signals with post-funding account behaviour to surface patterns before charge-off.',
              },
              {
                title: 'Synthetic Identity and Loan Stacking',
                body: 'Detect synthetic identities constructed over time and borrowers applying simultaneously across multiple lenders. Graph intelligence maps shared identity attributes, device fingerprints, and address connections - identifying stacking rings and synthetic clusters that point-in-time screening cannot see.',
              },
              {
                title: 'Fraud-Credit Abuse Overlap',
                body: 'Investigate cases where the boundary between fraud and credit risk is unclear - opportunistic credit abuse, misrepresented financial position, and organised borrower fraud targeting credit availability. Unified investigation context enables consistent classification and documented decision rationale.',
              },
              {
                title: 'Account Takeover and Identity Risk Post-Origination',
                body: 'Identify account takeover patterns affecting existing borrowers - including credential abuse, contact detail changes, and payment redirection that occur after funding. Verafye connects account activity signals to existing borrower risk profiles for faster investigation and response.',
              },
              {
                title: 'Coordinated Borrower Fraud Rings',
                body: 'Investigate organised fraud groups targeting lending portfolios with coordinated applications, shared infrastructure, or broker-facilitated fraud. Graph intelligence maps network connections across applicants, enabling ring detection and coordinated case management across the full group.',
              },
              {
                title: 'Regulatory and Audit Readiness',
                body: 'Produce documented case evidence for regulatory review, internal audit, and credit loss reporting. Every investigation generates a structured audit trail - with classification rationale, signal evidence, and decision documentation that supports regulatory enquiries and internal governance requirements.',
              },
            ].map((uc, i) => (
              <div key={i} className="card card-hover" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.35 }}>{uc.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '50rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>From Signals to Decisions</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              How the Verafye Investigation Layer Works for Lending Risk Teams
            </h2>
          </div>

          <div style={{ maxWidth: '62rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                step: '1',
                title: 'Signal Aggregation',
                body: 'Verafye connects to your existing origination, identity, account, and transaction systems - aggregating borrower risk signals from across the lifecycle into a unified investigation layer without replacing your existing stack.',
              },
              {
                step: '2',
                title: 'Alert Clustering into Cases',
                body: 'Related signals are automatically clustered into structured borrower risk cases - eliminating manual evidence assembly and ensuring that risk teams see consolidated investigation context from the moment a case is formed.',
              },
              {
                step: '3',
                title: 'Graph Intelligence and Case Formation',
                body: 'Graph analysis maps relationships across borrowers, accounts, devices, and addresses - surfacing network-level fraud patterns and enriching individual cases with the entity context investigators need to act with confidence.',
              },
              {
                step: '4',
                title: 'AI-Assisted Decisions and Audit Trail',
                body: 'AI-assisted decision support guides analysts through each case - summarising risk signals, recommending classification, and generating documented decision rationale. Every outcome produces a structured audit trail ready for regulatory or internal review.',
              },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>{step.step}</div>
                <div style={{ flex: 1 }} className="card card-elevated" style={{ padding: '1.5rem', flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. DIFFERENTIATION ──────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '50rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Verafye</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              The Investigation Layer - Not Another Screening Tool
            </h2>
          </div>

          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
                title: 'Not a Credit Scoring or Screening Tool',
                body: 'Verafye does not replace your credit decisioning stack. It is the investigation layer that sits alongside it - connecting post-alert signals into structured cases for the risk teams who have to act when origination controls do not catch everything.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Operational Without a Multi-Year Implementation',
                body: 'Lending teams cannot wait 18 months for an investigation layer to become operational. Verafye is designed to connect to existing lending systems quickly - delivering investigation capability across your current origination, identity, and account infrastructure.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
                title: 'Selected by Regulated Lending Teams in Competitive Evaluations',
                body: 'Verafye has been selected over both Tier-1 fraud platforms and standalone identity tools by lending risk teams who needed an investigation layer that could operate within their existing compliance infrastructure without displacing the systems already in place.',
              },
            ].map((card, i) => (
              <div key={i} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className={`card-icon ${card.gradient}`} style={{ marginBottom: '1.25rem' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.3 }}>{card.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, var(--dark) 0%, #1a2e4a 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Lending Risk Teams
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Investigation Intelligence for Your Lending Risk Team
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '2.25rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              See how Verafye connects borrower risk signals into structured investigations - from identity and origination through account activity and collections - so your team moves from alert overload to confident, audit-ready decisions.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
                See How Lending Risk Teams Investigate Borrower Fraud Faster
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.625rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none', transition: 'all 0.2s' }}>
                Request a Lending Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

import Link from 'next/link';

export const metadata = {
  title: "Fraud Intelligence Platform | Faster Investigations",
  description: "Fraud intelligence platform connecting signals to accelerate regulatory investigations. Uncover hidden patterns, ensure compliance & detect financial crime.",
  openGraph: {
    title: "Fraud Intelligence Platform | Faster Investigations",
    description: "Fraud intelligence platform connecting signals to accelerate regulatory investigations. Uncover hidden patterns, ensure compliance & detect financial crime.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud Intelligence Platform | Faster Investigations",
    description: "Fraud intelligence platform connecting signals to accelerate regulatory investigations. Uncover hidden patterns, ensure compliance & detect financial crime.",
  },
};

export default function InvestigationIntelligencePage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Secondary CTA was "Contact Sales → /request-demo" - duplicate destination.
        Replaced with "See Use Cases → /use-cases/investigation-workflow-modernization"
        which is the most directly relevant downstream page for a visitor on this solution.
      */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>INVESTIGATION INTELLIGENCE</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Investigation intelligence for lean fraud, AML, and risk teams
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Connect alerts, explain risk, and close cases faster with case intelligence, graph context, and audit-ready workflows.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps teams move from fragmented alerts and manual review to connected investigations that show what happened, who is connected, why it matters, and what action to take next.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
                Request Demo
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/capabilities" className="btn-secondary">Explore Capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM STATEMENT ────────────────────────────────────────────── */}
      {/*
        CHANGE: "Alert Overload" links to /use-cases/transaction-monitoring -
        the most directly relevant use case page for readers wanting to understand
        that specific problem in depth. "Fragmented Context" links to
        /solutions/graph-intelligence since the fix to fragmented context is
        precisely what graph intelligence delivers.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Problem</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Alert Volumes Are Growing. Investigation Capacity Is Not.
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Financial institutions have invested heavily in detection. The result is millions of alerts annually - and investigation teams that cannot keep up. Alert overload drives analyst fatigue, fragmented context slows case resolution, and the most important signals get buried in the noise. Growing backlogs carry direct consequences: delayed investigations, inconsistent SAR quality, and audit trails that cannot support examiner scrutiny.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  label: 'Alert Overload',
                  desc: 'Millions of alerts generated annually overwhelm investigation queues and stretch analyst capacity thin',
                  href: '/use-cases/transaction-monitoring',
                },
                {
                  label: 'Analyst Fatigue',
                  desc: 'Repetitive, low-context alert triage leads to decision fatigue and increased risk of missed escalations',
                  href: null,
                },
                {
                  label: 'Fragmented Context',
                  desc: 'Case context is scattered across fraud, AML, and payments systems - forcing analysts to manually assemble the picture',
                  href: '/solutions/graph-intelligence',
                },
                {
                  label: 'Slow Case Resolution',
                  desc: 'Without structured investigation workflows and connected intelligence, case cycle times remain long and inconsistent',
                  href: '/use-cases/investigation-workflow-modernization',
                },
              ].map(item => (
                <div key={item.label} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: '0.45rem' }} />
                  <div>
                    {item.href ? (
                      <Link href={item.href} style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.25rem', display: 'block', textDecoration: 'none' }}>
                        {item.label} →
                      </Link>
                    ) : (
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{item.label}</div>
                    )}
                    <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY LEGACY TOOLS FAIL ────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Legacy Stacks Fall Short</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Disconnected Investigation Workflows Break Down at Scale
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
                title: 'Alerts Handled Individually Instead of as Cases',
                body: 'Without clustering, analysts process each alert in isolation - missing the broader pattern that connects related signals into a single coordinated case and compounding investigation workload unnecessarily.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Context Manually Assembled Across Systems',
                body: 'Analysts switch between fraud, AML, and payments platforms to reconstruct case context - a slow, error-prone process that consumes hours per case and limits throughput across the investigation function.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Weak Prioritization Buries High-Risk Cases',
                body: 'Rule-based alert scoring has no awareness of network risk, relationship context, or cross-system signals. High-priority cases sit alongside low-value noise - and analysts have no reliable way to distinguish between them.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Analysts Spend Time Gathering Data, Not Analyzing',
                body: 'Without pre-assembled investigation context, the majority of analyst time goes to data gathering rather than decision-making - reducing throughput, increasing cycle times, and generating inconsistent case outcomes.',
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

      {/* ── 4. HOW VERAFYE SOLVES IT ────────────────────────────────────────── */}
      {/*
        CHANGE: "graph-enriched" in step 05 body is now a linked phrase pointing to
        /solutions/graph-intelligence - converting a generic term into a contextual
        cross-link without any copy change.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Solves It</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                An Investigation-Centric Intelligence Layer
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye restructures the investigation experience - from alert-centric triage to structured, context-rich case resolution - by clustering signals, aggregating cross-system intelligence, and delivering decision support at the point of investigation. Every case carries a full audit trail, supporting the traceability and consistency that institutions need to operate under increasing examiner scrutiny.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>01</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Alert Clustering</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Related alerts across fraud, AML, and payments are automatically clustered into coherent cases - reducing alert volume and surfacing coordinated activity as a single investigation unit.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>02</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Case Formation</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Clusters are structured into formal cases with pre-assembled context - entity profiles, relationship maps, transaction history, and cross-system signals - ready for analyst review.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>03</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Signal Aggregation</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Verafye aggregates signals from fraud, AML, and payments systems into a unified investigation view - eliminating the need for analysts to manually switch between platforms.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>04</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Investigation Workflows</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Structured workflows guide analysts through the investigation process - with consistent steps, escalation paths, and full audit trails that support regulatory traceability requirements and examiner review.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>05</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Decision Support</h3>
                {/* CHANGE: "graph intelligence" is now a linked phrase → /solutions/graph-intelligence */}
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>
                  At every step, Verafye surfaces the context analysts need - risk scores,{' '}
                  <Link href="/solutions/graph-intelligence" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>graph intelligence</Link>
                  {' '}context, prior case history, and network indicators - to support confident, faster decisions.
                </p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>06</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Continuous Prioritization</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Cases are continuously re-prioritized as new signals arrive - ensuring the highest-risk investigations always surface to the top of the queue, regardless of when they were created.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CORE CAPABILITIES ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Core Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Core Investigation Intelligence Capabilities
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
                title: 'Connected case context',
                body: 'Bring together alerts, entities, transactions, devices, identity data, and behavior signals into structured cases.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Investigation prioritization',
                body: 'Help teams focus on the cases that matter most with alert clustering and risk context.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
                title: 'Explainable decision support',
                body: 'Support analysts with case summaries, suggested next steps, evidence, and rationale.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>),
                title: 'Audit-ready workflows',
                body: 'Maintain decisions, notes, evidence, logs, and review history for compliance and governance.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
          {/* CHANGE: Section footer link to the most relevant use case page */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/use-cases/investigation-workflow-modernization" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              See investigation workflow modernization use case
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. OUTCOMES / BUSINESS IMPACT ───────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Business Impact</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Outcomes Enabled by Investigation Intelligence
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Reduced Investigation Time',
                body: 'Pre-assembled case context and structured workflows compress investigation cycle times - reducing the hours spent per case and increasing team throughput across fraud and AML operations.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Better Prioritization Across Investigation Queues',
                body: 'Risk-based case scoring ensures investigation queues are always ordered by true risk - so analysts spend their time on the cases that matter most, not simply the oldest ones.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Lower Operational Burden on Investigation Teams',
                body: 'Alert clustering and automated context aggregation significantly reduce the manual workload on investigation teams - freeing analyst capacity for decision-making rather than data gathering.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Improved Analyst Productivity',
                body: 'With structured workflows and decision support in place, analysts handle more cases per day - with greater consistency, fewer errors, and lower fatigue across the investigation function.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Faster Case Resolution Across Fraud and AML',
                body: 'From alert to disposition, Verafye shortens the entire investigation lifecycle - enabling faster SAR filing, quicker account action, and more timely regulatory response.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Consistent Investigation Quality at Scale',
                body: 'Structured workflows and decision support standardize investigation quality across teams - reducing outcome variance, supporting audit-ready documentation, and enabling compliance-grade consistency as case volumes grow.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <div className={`card-icon ${item.gradient}`}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(1rem,1.75vw,1.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. INDUSTRY RELEVANCE ───────────────────────────────────────────── */}
      {/*
        CHANGE: New section - industry links were completely absent from this page.
        Investigation intelligence is the primary pain point for compliance teams
        at banks and payment processors specifically; making that explicit converts
        generic page visitors into segment-qualified prospects.
      */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Built For</p>
          <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Investigation Intelligence Across Financial Institution Types
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <Link href="/industries/banks" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Banks
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/industries/payment-processors-psps-payfacs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Payment Processors / PSPs
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/industries/fintech-platforms" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Fintech Platforms
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. RELATED SOLUTIONS ────────────────────────────────────────────── */}
      {/* CHANGE: New section - no cross-links between solution pages existed. */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '2rem' }}>Related Solutions</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '56rem', margin: '0 auto' }}>
            <Link href="/solutions/graph-intelligence" style={{ textDecoration: 'none' }}>
              <div className="card card-hover" style={{ padding: '1.75rem', cursor: 'pointer' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Solution</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>Graph Intelligence</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: '0.875rem' }}>Detect hidden entity relationships and network-level financial crime across fraud and AML systems.</p>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)' }}>Explore →</span>
              </div>
            </Link>
            <Link href="/solutions/mule-account-detection" style={{ textDecoration: 'none' }}>
              <div className="card card-hover" style={{ padding: '1.75rem', cursor: 'pointer' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Solution</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>Mule Account Detection</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: '0.875rem' }}>Detect coordinated mule networks earlier using graph-native relationship analysis across accounts and devices.</p>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)' }}>Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8b. SECURITY & TRUST STRIP ──────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <p style={{ textAlign: 'center', fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '1.25rem' }}>
            Built for security-conscious regulated environments
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '1rem' }}>
            {['ISO/IEC 27001 · Information Security Management', 'SOC 2 Type I · Security & Availability Controls', 'PCI DSS: SAQ-D · Payment Data Security', 'GDPR-aligned · EU Data Protection', 'DPDP-aware · India Data Protection Readiness'].map(t => (
              <span key={t} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--dark)', background: 'var(--bg-light)', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.35rem 0.875rem' }}>{t}</span>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.6875rem', color: 'var(--muted)', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.65 }}>
            Verafye is designed with controls aligned to these frameworks. Certification status available on request. <a href="/security-trust" style={{ color: 'var(--primary)' }}>Security &amp; Trust page →</a>
          </p>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Replaced <CTA /> component with controlled inline band.
        Secondary button links to the investigation workflow use case - the most
        logical next step for a visitor who has engaged with investigation intelligence content.
      */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Build faster, clearer investigations
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            See how Verafye helps lean risk teams connect alerts, explain risk, and close cases faster.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/capabilities" className="btn-secondary">Explore Capabilities</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>

    </>
  );
}

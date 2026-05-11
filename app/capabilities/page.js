export const metadata = {
  title: "Fraud & AML Capabilities | Verafye",
  description: "Explore Verafye's fraud and AML capabilities. Detect financial crime networks using AI-driven intelligence across transactions and payments.",
  openGraph: {
    title: "Fraud & AML Capabilities | Verafye",
    description: "Explore Verafye's fraud and AML capabilities. Detect financial crime networks using AI-driven intelligence across transactions and payments.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud & AML Capabilities | Verafye",
    description: "Explore Verafye's fraud and AML capabilities. Detect financial crime networks using AI-driven intelligence across transactions and payments.",
  },
};

const primaryCapabilities = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Investigation Intelligence',
    body: 'Connect signals, cases, and entities across fraud and AML workflows into a shared investigation layer - so risk teams see patterns, not just alerts.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Signal Aggregation',
    body: 'Ingest transaction, identity, device, behavior, and third-party signals through REST APIs and SDKs - normalized into a unified investigation context.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Alert Clustering',
    body: 'Group related alerts from multiple detection systems into coherent investigation clusters - reducing alert noise and surfacing patterns that single detectors miss.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    title: 'Graph Intelligence',
    body: 'Map relationships between accounts, devices, identities, and transactions to surface hidden networks, shared infrastructure, and coordinated activity.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Case Management',
    body: 'Manage investigations with structured case queues, analyst assignment, evidence attachment, review workflows, and disposition tracking - in one place.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    ),
    title: 'Integrations & Signal Orchestration',
    body: 'Connect third-party KYC, KYB, sanctions, watchlist, device, banking, and enrichment signals into investigation workflows through flexible APIs, SDKs, and integration support.',
  },
];

const supportingCapabilities = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Configurable Rules',
    body: 'Define and adjust risk rules using predefined templates, configurable thresholds, and parameter selection - with human review before any rule goes live.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Device & Behavior Signals',
    body: 'Capture device fingerprints, session behavior, and network indicators via JS, Android, and iOS SDKs - and connect them to account and transaction graph context.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'AML & Watchlist Workflows',
    body: 'Screen entities against sanctions lists, PEP databases, and adverse media sources - with fuzzy matching, case linkage, and human review workflows for dispositions.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'AI-Assisted Decision Support',
    body: 'Surface contextual signals, case summaries, and risk indicators to help analysts reach faster, explainable decisions - with humans in control of every outcome.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Audit & Compliance Readiness',
    body: 'Maintain structured audit logs, decision history, case evidence trails, and explainability records to support regulatory review - without rebuilding your compliance stack.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'APIs, SDKs & Integrations',
    body: 'Connect Verafye to existing systems via REST APIs, server-side SDKs, and pre-built connectors - without ripping out tools your teams already rely on.',
  },
];

const flowSteps = [
  {
    num: 1,
    label: 'Collect signals',
    desc: 'Transaction, identity, device, and behavior data ingested via APIs and SDKs',
  },
  {
    num: 2,
    label: 'Connect entities',
    desc: 'Graph intelligence links accounts, devices, and identities across your data',
  },
  {
    num: 3,
    label: 'Cluster alerts',
    desc: 'Related alerts from multiple detectors grouped into investigation clusters',
  },
  {
    num: 4,
    label: 'Investigate cases',
    desc: 'Analysts work structured cases with full context, evidence, and workflow support',
  },
  {
    num: 5,
    label: 'Explain decisions',
    desc: 'Every disposition recorded with audit logs, decision history, and explainability records',
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* ── Section 1: Hero (light) ── */}
      <section style={{
        background: 'linear-gradient(180deg, #F8FBFF 0%, #fff 100%)',
        padding: 'clamp(4.5rem,9vw,7rem) 1.5rem clamp(3.5rem,7vw,5.5rem)',
        textAlign: 'center',
      }}>
        <div className="container" style={{maxWidth: '56rem'}}>
          <p className="eyebrow animate-fade-up" style={{marginBottom: '1.25rem'}}>
            CAPABILITIES
          </p>
          <h1 className="animate-fade-up delay-100" style={{
            fontSize: 'clamp(1.875rem,5vw,3.25rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: 'var(--dark)',
            marginBottom: '1.25rem',
          }}>
            Capabilities for faster, explainable investigations
          </h1>
          <p className="animate-fade-up delay-200" style={{
            fontSize: 'clamp(1rem,2vw,1.25rem)',
            color: 'var(--body)',
            lineHeight: 1.65,
            maxWidth: '44rem',
            margin: '0 auto 2.25rem',
          }}>
            Explore how Verafye connects signals, clusters alerts, surfaces hidden networks, supports case decisions, and maintains audit-ready investigation trails.
          </p>
          <div className="animate-fade-up delay-300" style={{display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/request-demo" className="btn-primary">
              Request Demo
              <span style={{display: 'inline-flex', marginLeft: '0.5rem'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            <a href="/platform" className="btn-secondary">Explore Platform</a>
          </div>
        </div>
      </section>

      {/* ── Section 2: Overview intro ── */}
      <section style={{padding: 'clamp(3rem,6vw,5rem) 1.5rem 2rem', background: '#fff'}}>
        <div className="container">
          <div style={{maxWidth: '56rem', margin: '0 auto', textAlign: 'center'}}>
            <p className="eyebrow" style={{marginBottom: '0.75rem'}}>WHAT VERAFYE COVERS</p>
            <h2 style={{
              fontSize: 'clamp(1.5rem,3.5vw,2.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              color: 'var(--dark)',
              marginBottom: '1rem',
            }}>
              Everything risk teams need to move from alerts to decisions
            </h2>
            <p style={{fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75}}>
              Verafye brings together the capabilities that fraud, AML, and risk teams need to investigate effectively - from signal ingestion to case closure, and from alert triage to regulatory readiness.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3a: Primary capabilities ── */}
      <section className="section-light" style={{padding: 'clamp(2.5rem,5vw,4rem) 1.5rem'}}>
        <div className="container">
          <div style={{maxWidth: '72rem', margin: '0 auto'}}>
            <p style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
            }}>
              Primary Capabilities
            </p>
            <div className="grid-3" style={{gap: '1.25rem'}}>
              {primaryCapabilities.map((cap, i) => (
                <div key={i} className="card card-elevated" style={{padding: '1.75rem'}}>
                  <div className="card-icon gradient-bg-4" style={{marginBottom: '1rem'}}>
                    {cap.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--dark)',
                    marginBottom: '0.5rem',
                  }}>
                    {cap.title}
                  </h3>
                  <p style={{fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.6}}>
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3b: Supporting capabilities ── */}
      <section style={{padding: 'clamp(2.5rem,5vw,4rem) 1.5rem', background: '#fff'}}>
        <div className="container">
          <div style={{maxWidth: '72rem', margin: '0 auto'}}>
            <p style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: 'var(--secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
            }}>
              Supporting Capabilities
            </p>
            <div className="grid-3" style={{gap: '1.25rem'}}>
              {supportingCapabilities.map((cap, i) => (
                <div key={i} className="card card-elevated" style={{padding: '1.75rem'}}>
                  <div className="card-icon gradient-bg-4" style={{marginBottom: '1rem'}}>
                    {cap.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--dark)',
                    marginBottom: '0.5rem',
                  }}>
                    {cap.title}
                  </h3>
                  <p style={{fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.6}}>
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: How capabilities work together — horizontal pictorial flow ── */}
      <section className="section-light" style={{padding: 'clamp(3.5rem,7vw,5.5rem) 1.5rem'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '44rem', margin: '0 auto clamp(2.5rem,5vw,4rem)'}}>
            <p className="eyebrow" style={{marginBottom: '0.75rem'}}>HOW IT WORKS TOGETHER</p>
            <h2 style={{
              fontSize: 'clamp(1.5rem,3.5vw,2.3rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              color: 'var(--dark)',
              marginBottom: '1rem',
            }}>
              From signals to decisions — one connected flow
            </h2>
            <p style={{fontSize: '1rem', color: 'var(--body)', lineHeight: 1.65}}>
              Verafye capabilities are designed to work as a connected layer. Each stage feeds into the next so risk teams always have context when they need it.
            </p>
          </div>

          {/* Horizontal flow diagram — desktop left-to-right, mobile vertical */}
          <div className="cap-flow-outer" style={{maxWidth: '80rem', margin: '0 auto', overflowX: 'auto', paddingBottom: '0.5rem'}}>
            <div className="cap-flow-row">

              {/* Stage 1 — Signals In */}
              <div className="cap-flow-card" style={{borderTopColor: '#1E6FB7'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem'}}>
                  <div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9px', background: 'rgba(30,111,183,0.08)', border: '1px solid rgba(30,111,183,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </div>
                  <span style={{fontSize: '0.5625rem', fontWeight: 700, color: '#1E6FB7', background: 'rgba(30,111,183,0.07)', border: '1px solid rgba(30,111,183,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap'}}>Stage 1</span>
                </div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.2}}>Signals In</h3>
                <p style={{fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem', flex: 1}}>
                  Payments, identity, device, behavior, AML/watchlist, and third-party signals
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: 'auto'}}>
                  {['Fraud','AML','Payments','Identity','Device','Behavior'].map(t => (
                    <span key={t} style={{fontSize: '0.5625rem', fontWeight: 600, color: '#1E6FB7', background: 'rgba(30,111,183,0.06)', border: '1px solid rgba(30,111,183,0.15)', borderRadius: '4px', padding: '0.2rem 0.45rem'}}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Arrow connector */}
              <div className="cap-flow-arrow" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>

              {/* Stage 2 — Connected Risk Layer */}
              <div className="cap-flow-card" style={{borderTopColor: '#7C3AED'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem'}}>
                  <div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9px', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
                  </div>
                  <span style={{fontSize: '0.5625rem', fontWeight: 700, color: '#7C3AED', background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap'}}>Stage 2</span>
                </div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.2}}>Connected Risk Layer</h3>
                <p style={{fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem', flex: 1}}>
                  Signal aggregation, entity resolution, alert clustering, and graph intelligence
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: 'auto'}}>
                  {['Entity Resolution','Graph Intelligence','Alert Clustering'].map(t => (
                    <span key={t} style={{fontSize: '0.5625rem', fontWeight: 600, color: '#7C3AED', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: '4px', padding: '0.2rem 0.45rem'}}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Arrow connector */}
              <div className="cap-flow-arrow" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>

              {/* Stage 3 — Investigation Intelligence */}
              <div className="cap-flow-card" style={{borderTopColor: '#0891B2'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem'}}>
                  <div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9px', background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  </div>
                  <span style={{fontSize: '0.5625rem', fontWeight: 700, color: '#0891B2', background: 'rgba(8,145,178,0.07)', border: '1px solid rgba(8,145,178,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap'}}>Stage 3</span>
                </div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.2}}>Investigation Intelligence</h3>
                <p style={{fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem', flex: 1}}>
                  Case context, prioritization, explainable decision support, and analyst workflows
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: 'auto'}}>
                  {['Case Intelligence','Decision Support','Case Management'].map(t => (
                    <span key={t} style={{fontSize: '0.5625rem', fontWeight: 600, color: '#0891B2', background: 'rgba(8,145,178,0.06)', border: '1px solid rgba(8,145,178,0.15)', borderRadius: '4px', padding: '0.2rem 0.45rem'}}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Arrow connector */}
              <div className="cap-flow-arrow" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>

              {/* Stage 4 — Case Outcomes */}
              <div className="cap-flow-card" style={{borderTopColor: '#059669'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem'}}>
                  <div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9px', background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <span style={{fontSize: '0.5625rem', fontWeight: 700, color: '#059669', background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap'}}>Stage 4</span>
                </div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.2}}>Case Outcomes</h3>
                <p style={{fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem', flex: 1}}>
                  Faster closure, audit-ready records, and clearer investigation decisions
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: 'auto'}}>
                  {['Audit Trail','Explainability','Compliance Readiness'].map(t => (
                    <span key={t} style={{fontSize: '0.5625rem', fontWeight: 600, color: '#059669', background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.15)', borderRadius: '4px', padding: '0.2rem 0.45rem'}}>{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Responsive CSS — desktop: horizontal flex row; mobile: vertical stack */}
          <style>{`
            .cap-flow-row {
              display: flex;
              align-items: stretch;
              gap: 0;
              min-width: 640px;
            }
            .cap-flow-card {
              flex: 1;
              background: #fff;
              border-radius: 12px;
              border: 1px solid var(--border);
              border-top-width: 3px;
              padding: 1.5rem 1.375rem;
              display: flex;
              flex-direction: column;
              box-shadow: 0 1px 6px rgba(0,0,0,0.04);
              min-width: 0;
            }
            .cap-flow-arrow {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 0.375rem;
              flex-shrink: 0;
              color: #CBD5E1;
            }
            @media (max-width: 767px) {
              .cap-flow-outer { overflow-x: visible !important; padding-bottom: 0 !important; }
              .cap-flow-row { flex-direction: column; min-width: 0; gap: 0; }
              .cap-flow-card {
                border-top-width: 1px;
                border-left-width: 3px;
                border-radius: 10px;
                padding: 1.25rem;
              }
              .cap-flow-arrow { justify-content: center; padding: 0.25rem 0; transform: rotate(90deg); }
            }
          `}</style>

        </div>
      </section>

      {/* ── Section 5: CTA (light) ── */}
      <section style={{
        padding: 'clamp(3.5rem,7vw,5.5rem) 1.5rem',
        background: 'var(--bg-tint)',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <div className="container" style={{maxWidth: '48rem'}}>
          <p className="eyebrow" style={{marginBottom: '1rem'}}>GET STARTED</p>
          <h2 style={{
            fontSize: 'clamp(1.5rem,3.5vw,2.5rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            color: 'var(--dark)',
            marginBottom: '1.25rem',
          }}>
            Turn fragmented signals into explainable investigations
          </h2>
          <p style={{
            fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)',
            color: 'var(--body)',
            lineHeight: 1.65,
            maxWidth: '38rem',
            margin: '0 auto 2.25rem',
          }}>
            See how Verafye helps regulated financial platforms connect alerts, explain risk, and close cases faster.
          </p>
          <div style={{display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/request-demo" className="btn-primary">
              Request Demo
              <span style={{display: 'inline-flex', marginLeft: '0.5rem'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            <a href="/platform" className="btn-secondary">Explore Platform</a>
          </div>
        </div>
      </section>
    </>
  );
}

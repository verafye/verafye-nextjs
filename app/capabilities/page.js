import SplitHeroWithVisualCard, { CapabilitiesVisualCard } from '../../components/SplitHeroWithVisualCard';

export const metadata = {
  title: { absolute: "Fraud Detection & AML Capabilities | Verafye" },
  description: "Explore fraud detection, AML, investigation and decision intelligence capabilities that help financial institutions detect hidden financial crime faster.",
  keywords: [
    "network risk intelligence capabilities",
    "entity resolution",
    "graph analytics",
    "transaction intelligence",
    "investigation workflows",
    "financial crime investigations",
    "risk intelligence software",
    "fraud analytics platform",
  ],
  openGraph: {
    title: "Fraud Detection & AML Capabilities | Verafye",
    description: "Explore fraud detection, AML, investigation and decision intelligence capabilities that help financial institutions detect hidden financial crime faster.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud Detection & AML Capabilities | Verafye",
    description: "Explore fraud detection, AML, investigation and decision intelligence capabilities that help financial institutions detect hidden financial crime faster.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/capabilities',
  },
};

const pillars = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Customer Risk Intelligence',
    body: 'KYC/KYB onboarding, CDD and EDD workflows, UBO resolution, customer and merchant risk scoring, and ongoing monitoring — giving regulated teams a structured view of customer risk from onboarding through lifecycle.',
    chips: ['KYC / KYB', 'CDD / EDD', 'UBO Resolution', 'Risk Scoring', 'Ongoing Monitoring'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'AML & Transaction Monitoring',
    body: 'Configurable rules, AI-assisted behavioral detection, typology-based pattern recognition, and threshold management — tuned for payment-led AML teams running cross-border and domestic transaction risk.',
    chips: ['Rules Engine', 'AI Detection', 'Typology Patterns', 'Behavioral Analytics', 'Threshold Config'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Fraud Prevention',
    body: 'Payment fraud, card fraud, identity fraud, account takeover, and mule network detection — with device and behavior signal integration to surface coordinated fraud patterns across accounts and counterparties.',
    chips: ['Payment Fraud', 'Account Takeover', 'Mule Detection', 'Device Signals', 'Behavioral Patterns'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'Screening',
    body: 'Sanctions, PEP, and adverse media screening across 450+ lists via OpenSanctions and curated sources — with fuzzy matching, payment screening, and orchestration to premium providers for deeper coverage.',
    chips: ['450+ Sanctions Lists', 'PEP Screening', 'Adverse Media', 'Fuzzy Matching', 'Payment Screening'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Investigation Intelligence',
    body: 'Alert clustering, AI-assisted case context, analyst summaries, evidence packs, case workflows, reviewer controls, and regulatory reporting support — built around the investigator, not the alert queue.',
    chips: ['Alert Clustering', 'Case Workflows', 'Evidence Packs', 'Reviewer Controls', 'SAR / STR Support'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    title: 'Decision Intelligence',
    body: 'Entity resolution, graph analytics, multi-signal risk scoring, consortium intelligence, and signal ingestion — connecting signals from across your ecosystem into a unified intelligence architecture that feeds every investigation.',
    chips: ['Entity Resolution', 'Graph Analytics', 'Signal Ingestion', 'Multi-Signal Scoring', 'Consortium Data'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>
      </svg>
    ),
    title: 'AI Copilot',
    body: 'Explainable AI, case summaries, investigation assistance, and narrative generation — embedded into the investigation workflow so analysts spend less time assembling context and more time deciding.',
    chips: ['Case Summaries', 'Explainable AI', 'Investigation Assist', 'Narrative Generation', 'Human in Loop'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/>
      </svg>
    ),
    title: 'Enterprise Platform',
    body: 'APIs, SDKs, workflow automation, configurable dashboards, audit trails, and flexible deployment options — connecting into existing financial crime stacks without requiring a full infrastructure replacement.',
    chips: ['APIs & SDKs', 'Workflow Automation', 'Audit Trails', 'Dashboards', 'Deployment Flexibility'],
  },
];


export default function CapabilitiesPage() {
  return (
    <>
      {/* ── Section 1: Hero - Option 1: Split Hero with Visual Card (approved) ── */}
      <SplitHeroWithVisualCard
        eyebrow="CAPABILITIES"
        seoH1="Fraud Detection & AML Capabilities"
        title="Eight capability domains for detection-to-decision financial crime operations"
        description="Detection Intelligence, Investigation Intelligence, and Decision Intelligence in one platform — Connected-Risk network detection, alert clustering, case-ready evidence, and audit-ready decisions for fraud and AML teams."
        primaryCTA={{ label: 'Explore Risk Shadowing Review', href: '/risk-shadowing-review' }}
        secondaryCTA={{ label: 'Explore Platform', href: '/platform' }}
        visualCard={<CapabilitiesVisualCard />}
      />

      {/* ── Section 2: Overview intro ── */}
      <section style={{padding: 'clamp(2rem,4vw,3rem) 1.5rem 1.5rem', background: '#fff'}}>
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
              A connected capability stack for moving from signals and alerts into investigation and decision support.
            </h2>
            <p style={{fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75}}>
              Detection can originate within Verafye or arrive from existing controls. In either case, the same entity-resolution, network-intelligence and investigation architecture carries the signal forward. Verafye brings together signal ingestion, integrations, configurable workflows, alert clustering, graph intelligence, case workflows, reviewer controls, evidence packs, and audit trails — giving lean teams a practical operating workspace for fraud and AML investigations, from signal origination to case closure.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2b: Three pillars ── */}
      <section style={{padding: 'clamp(1rem,3vw,2rem) 1.5rem 0', background: '#fff'}}>
        <div className="container">
          <div style={{maxWidth: '72rem', margin: '0 auto'}}>
            <div className="grid-3" style={{gap: '1.25rem'}}>
              {[
                {
                  label: 'Detection Intelligence',
                  body: 'Graph-based risk detection, risk scoring, mule network detection, transaction pattern detection, entity-link analysis, and cross-account, cross-merchant, cross-device, and cross-beneficiary risk discovery - including cross-program network risk and sponsor-bank ecosystem risk patterns for BaaS and embedded finance providers.',
                  icon: (<svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                },
                {
                  label: 'Investigation Intelligence',
                  body: 'Alert clustering, case context, analyst summaries, evidence packs, investigation workflow, case collaboration, and network visualization - including program-level case clustering, partner-risk context, and investigation-ready evidence across sponsor-bank and embedded-finance workflows.',
                  icon: (<svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                },
                {
                  label: 'Decision Intelligence',
                  body: 'Explainability, audit trails, escalation logic, reviewer controls, SAR/STR support where applicable, and defensible decision records - including audit-ready program-risk summaries and explainable evidence for sponsor-bank, BaaS, and fintech oversight workflows.',
                  icon: (<svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>),
                },
              ].map((p, i) => (
                <div key={i} className="card card-elevated" style={{padding: '2rem'}}>
                  <div className="card-icon gradient-bg-4" style={{marginBottom: '1.1rem'}}>{p.icon}</div>
                  <h3 style={{fontSize: 'clamp(1.0625rem,1.8vw,1.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', letterSpacing: '-0.015em'}}>{p.label}</h3>
                  <p style={{fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65}}>{p.body}</p>
                </div>
              ))}
            </div>
            <div style={{maxWidth: '72rem', margin: '1.75rem auto 0'}}>
              <p style={{fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem'}}>Applied Across</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                {['PSP merchant & sub-merchant risk','PayFac portfolio risk','MSB & remittance corridor risk','BaaS & embedded finance program risk','Sponsor-bank ecosystem risk','Cross-program network risk','Mule account & mule network detection','Linked beneficiaries','Device-linked networks','Identity-linked networks','Wallet & digital bank risk','NBFC & digital lending fraud patterns','Marketplace seller and payout risk'].map(t => (
                  <span key={t} style={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--body)', background: 'var(--bg-tint)', border: '1px solid var(--border)', borderRadius: '999px', padding: '0.35rem 0.8rem'}}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Eight capability pillars ── */}
      <section className="section-light" style={{padding: 'clamp(2.5rem,5vw,4rem) 1.5rem'}}>
        <div className="container">
          <div style={{maxWidth: '72rem', margin: '0 auto'}}>

            <div style={{textAlign: 'center', maxWidth: '44rem', margin: '0 auto clamp(2rem,4vw,2.75rem)'}}>
              <p className="eyebrow" style={{marginBottom: '0.75rem'}}>PLATFORM CAPABILITIES</p>
              <h2 style={{
                fontSize: 'clamp(1.375rem,3vw,2rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: 'var(--dark)',
                marginBottom: '0.875rem',
              }}>
                Eight capability domains. One connected platform.
              </h2>
              <p style={{fontSize: 'clamp(0.9rem,1.6vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7}}>
                Every pillar is designed to work independently or as part of a connected fraud, AML, and risk workflow — without requiring a full infrastructure replacement.
              </p>
            </div>

            <style>{`
              .pillar-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
              @media (max-width: 640px) { .pillar-grid { grid-template-columns: 1fr; } }
            `}</style>

            <div className="pillar-grid">
              {pillars.map((p, i) => (
                <div key={i} className="card card-elevated" style={{
                  padding: '1.75rem',
                  borderLeft: i === 4 ? '3px solid var(--primary)' : '1px solid var(--border)',
                }}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem'}}>
                    <div className="card-icon gradient-bg-4" style={{flexShrink: 0, marginBottom: 0}}>
                      {p.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: 'var(--dark)',
                      lineHeight: 1.2,
                      margin: 0,
                      paddingTop: '0.25rem',
                    }}>
                      {p.title}
                      {i === 4 && (
                        <span style={{
                          display: 'inline-block',
                          marginLeft: '0.5rem',
                          fontSize: '0.625rem',
                          fontWeight: 700,
                          color: 'var(--primary)',
                          background: 'rgba(30,111,183,0.08)',
                          border: '1px solid rgba(30,111,183,0.2)',
                          borderRadius: '999px',
                          padding: '0.1rem 0.5rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          verticalAlign: 'middle',
                        }}>Core Differentiator</span>
                      )}
                    </h3>
                  </div>
                  <p style={{fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem'}}>
                    {p.body}
                  </p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.375rem'}}>
                    {p.chips.map(chip => (
                      <span key={chip} style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--body)',
                        background: 'var(--bg-tint)',
                        border: '1px solid var(--border)',
                        borderRadius: '999px',
                        padding: '0.2rem 0.65rem',
                      }}>{chip}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 4: How capabilities work together - horizontal pictorial flow ── */}
      <section className="section-light" style={{padding: 'clamp(3rem,6vw,4.5rem) 1.5rem'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '44rem', margin: '0 auto clamp(2rem,4vw,3rem)'}}>
            <p className="eyebrow" style={{marginBottom: '0.75rem'}}>HOW IT WORKS TOGETHER</p>
            <h2 style={{
              fontSize: 'clamp(1.5rem,3.5vw,2.3rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              color: 'var(--dark)',
              marginBottom: '1rem',
            }}>
              From signals to decisions - one connected flow
            </h2>
            <p style={{fontSize: '1rem', color: 'var(--body)', lineHeight: 1.65}}>
              Verafye capabilities work together across detection, entity resolution, network analysis, case formation, investigation, evidence, and decisioning. Each stage feeds into the next so risk teams always have context when they need it.
            </p>
          </div>

          {/* Horizontal flow diagram - desktop left-to-right, mobile vertical */}
          <div className="cap-flow-outer" style={{maxWidth: '80rem', margin: '0 auto', overflowX: 'auto', paddingBottom: '0.5rem'}}>
            <div className="cap-flow-row">

              {/* Stage 1 - Signals In */}
              <div className="cap-flow-card" style={{borderTopColor: '#1E6FB7'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem'}}>
                  <div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9px', background: 'rgba(30,111,183,0.08)', border: '1px solid rgba(30,111,183,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </div>
                  <span style={{fontSize: '0.5625rem', fontWeight: 700, color: '#1E6FB7', background: 'rgba(30,111,183,0.07)', border: '1px solid rgba(30,111,183,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap'}}>Stage 1</span>
                </div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.2}}>Originate or Ingest Risk Signals</h3>
                <p style={{fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem', flex: 1}}>
                  Native detection from raw activity, or external suspicion from existing controls — both paths feed the same Connected-Risk Intelligence architecture
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: 'auto'}}>
                  {['Fraud','AML','Payments','Identity','Device','KYC/KYB','Watchlist'].map(t => (
                    <span key={t} style={{fontSize: '0.5625rem', fontWeight: 600, color: '#1E6FB7', background: 'rgba(30,111,183,0.06)', border: '1px solid rgba(30,111,183,0.15)', borderRadius: '4px', padding: '0.2rem 0.45rem'}}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Arrow connector */}
              <div className="cap-flow-arrow" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>

              {/* Stage 2 - Signal Correlation and Entity Resolution */}
              <div className="cap-flow-card" style={{borderTopColor: '#7C3AED'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem'}}>
                  <div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9px', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
                  </div>
                  <span style={{fontSize: '0.5625rem', fontWeight: 700, color: '#7C3AED', background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap'}}>Stage 2</span>
                </div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.2}}>Signal Correlation and Entity Resolution</h3>
                <p style={{fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem', flex: 1}}>
                  Normalize signals, link entities, cluster alerts across accounts, merchants, beneficiaries, and devices, and add graph-based relationship context
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

              {/* Stage 3 - Investigation Intelligence */}
              <div className="cap-flow-card" style={{borderTopColor: '#0891B2'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem'}}>
                  <div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9px', background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  </div>
                  <span style={{fontSize: '0.5625rem', fontWeight: 700, color: '#0891B2', background: 'rgba(8,145,178,0.07)', border: '1px solid rgba(8,145,178,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap'}}>Stage 3</span>
                </div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.2}}>Investigation Intelligence</h3>
                <p style={{fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem', flex: 1}}>
                  Prioritize cases, guide reviewer workflows, support explainable decisions, preserve evidence packs, and maintain audit-ready investigation records
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: 'auto'}}>
                  {['Case Workflows','Reviewer Controls','Evidence Packs'].map(t => (
                    <span key={t} style={{fontSize: '0.5625rem', fontWeight: 600, color: '#0891B2', background: 'rgba(8,145,178,0.06)', border: '1px solid rgba(8,145,178,0.15)', borderRadius: '4px', padding: '0.2rem 0.45rem'}}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Arrow connector */}
              <div className="cap-flow-arrow" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>

              {/* Stage 4 - Case Outcomes */}
              <div className="cap-flow-card" style={{borderTopColor: '#059669'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem'}}>
                  <div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9px', background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <span style={{fontSize: '0.5625rem', fontWeight: 700, color: '#059669', background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap'}}>Stage 4</span>
                </div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.2}}>Case Outcomes</h3>
                <p style={{fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1rem', flex: 1}}>
                  Investigation context, clearer decisions, audit-ready records, and better operating visibility for risk teams
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: 'auto'}}>
                  {['Investigation Context','Audit-Ready Records','Reduced Manual Context Assembly'].map(t => (
                    <span key={t} style={{fontSize: '0.5625rem', fontWeight: 600, color: '#059669', background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.15)', borderRadius: '4px', padding: '0.2rem 0.45rem'}}>{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Responsive CSS - desktop: horizontal flex row; mobile: vertical stack */}
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
        padding: 'clamp(2.5rem,5vw,4rem) 1.5rem',
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
            See how Verafye helps regulated financial platforms connect alerts, carry connected context into investigation and decision support. Begin with a Risk Shadowing engagement around the capabilities your team needs - and expand as outcomes are proven.
          </p>
          <div style={{display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/risk-shadowing-review" className="btn-primary">
              Explore Risk Shadowing Review
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

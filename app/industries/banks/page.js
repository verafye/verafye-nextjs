import Link from 'next/link';

export const metadata = {
  title: "Investigation Workflows for Banks & Regional Institutions | Verafye",
  description: "Connect fraud, AML, and payments signals from existing systems into explainable investigation workflows built on the Verafye platform - designed for banks and regional financial institutions.",
  openGraph: {
    title: "Investigation Workflows for Banks & Regional Institutions | Verafye",
    description: "Connect fraud, AML, and payments signals from existing systems into explainable investigation workflows built on the Verafye platform - designed for banks and regional financial institutions.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Investigation Workflows for Banks & Regional Institutions | Verafye",
    description: "Connect fraud, AML, and payments signals from existing systems into explainable investigation workflows built on the Verafye platform - designed for banks and regional financial institutions.",
  },
};

export default function BanksPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Secondary CTA "Contact Sales → /request-demo" replaced with
        "Explore Platform → /platform"  -  gives early-stage visitors a product
        exploration path instead of a duplicate conversion button.

        CHANGE: Hero sub-paragraph now includes trust language
        "built for financial institutions" and "aligned with evolving regulatory
        expectations"  -  both required by the task brief, placed naturally
        within existing copy.
      */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>BANKS</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Investigation Intelligence for Banking Risk Operations
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Connect fraud, AML, payment, account, identity, device, and behavior signals into explainable investigation workflows.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps banks connect fragmented alerts and risk signals across systems, build investigation-ready cases, surface hidden networks, and maintain decision trails that support review, governance, and audit readiness. Start with focused mule detection, scam investigation, or payment risk workflows - and expand as value is proven.
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

      {/* ── 2. SEGMENT CHALLENGES ───────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Segment Challenges</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Fragmented Infrastructure No Longer Meets the Bar
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Fragmented Fraud and AML Systems',
                body: 'Fraud and AML teams operate on separate platforms with separate alert queues, separate data models, and separate reporting lines  -  creating blind spots at the boundary where fraud proceeds become money laundering.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Increasing Alert Volumes and Investigation Backlog',
                body: 'Rule-based monitoring generates alert volumes that consistently outpace investigation capacity  -  creating growing backlogs that increase regulatory risk and operational cost simultaneously.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Limited Visibility Across Connected Entities',
                body: 'Without a graph intelligence layer, banks cannot see the relationships between accounts, devices, and transactions that reveal coordinated fraud rings, mule networks, and complex AML typologies.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>),
                title: 'Non-Discretionary AML Obligations and Model Governance Scrutiny',
                body: 'AML obligations are not discretionary  -  and regulators are increasing scrutiny of the models, workflows, and decision trails that underpin financial crime operations. Banks face growing expectations around explainability, audit readiness, and the governance of detection infrastructure.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>),
                title: 'High Operational Cost of Compliance and Investigation',
                body: 'Scaling investigation capacity to meet growing alert volumes requires proportionally more analysts  -  driving compliance costs higher without improving detection quality or investigation outcomes.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Explainability Gaps Across Fraud and AML Investigation Workflows',
                body: 'Regulators increasingly expect fraud and AML teams to explain not just outcomes but the reasoning behind investigation decisions  -  and disconnected fraud and AML systems with no shared investigation layer make cross-product explainability difficult to achieve and audit-ready documentation harder to produce.',
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

      {/* ── 3. WHY CURRENT STACK FALLS SHORT ────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Legacy Fails</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Legacy Infrastructure Cannot Keep Up
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>),
                title: 'Fraud and AML Operate in Silos',
                body: 'Legacy platforms were built for a single domain  -  fraud or AML  -  not for the cross-domain intelligence that modern financial crime operations require. The result is structural blind spots that criminals exploit.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
                title: 'Detection Is Not Connected to Investigation Workflows',
                body: 'Alert generation and case investigation are disconnected processes. Analysts receive alerts with no pre-assembled context  -  requiring manual research before any meaningful investigation can begin.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Data and Signals Remain Fragmented Across Systems',
                body: 'Transaction data, device signals, identity attributes, and behavioural patterns live in separate systems with no common intelligence layer  -  preventing the cross-domain analysis that coordinated financial crime demands.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Scaling Requires More Analysts, Not Better Intelligence',
                body: 'Without smarter infrastructure, growth in transaction volume means proportional growth in alerts  -  and in the analyst headcount required to process them. This model is unsustainable at mid-market scale.',
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

      {/* ── 4. HOW VERAFYE FITS BANKS ────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Fits</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                An Intelligent Investigation Layer for Banking Operations
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects fraud, AML, and payments signals from existing systems into investigation-ready workflows built on the Verafye platform  -  improving detection coverage, accelerating investigation, and supporting explainable, audit-ready outcomes. Start by connecting signals from existing systems, then expand into Verafye-led investigation workflows as value is proven.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {/*
                Step content unchanged. Steps already contain trust language in step 04.
                CHANGE: Added solution page links beneath steps 02 and 03 so the
                "How Verafye Fits" section flows directly into deeper product exploration.
              */}
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>01</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Connects Fraud, AML, and Payments</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Verafye unifies signals from fraud monitoring, transaction monitoring, and payments infrastructure into a single intelligence layer  -  eliminating the blind spots that form at system boundaries and enabling cross-domain detection for the first time.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>02</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Graph-Based Detection</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>A graph-native intelligence layer resolves entities, maps relationships, and clusters networks across accounts, devices, and transactions  -  surfacing coordinated fraud rings, mule networks, and complex AML typologies that rules-based systems cannot see.</p>
                <Link href="/solutions/graph-intelligence" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  See Graph Intelligence <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>03</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Investigation-Centric Workflows</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>Verafye restructures the investigation experience  -  from individual alert handling to structured, context-rich case management. Analysts receive pre-assembled case context, network maps, and cross-system signals from the moment a case is created.</p>
                <Link href="/solutions/investigation-intelligence" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  See Investigation Intelligence <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>04</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Aligned With Evolving Regulatory Expectations</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Verafye is built with explainability and auditability at its core  -  supporting the governance, documentation, and decision-trail requirements that regulators increasingly expect from financial crime infrastructure. As AML frameworks evolve and model governance standards rise, Verafye provides the infrastructure foundation banks need to operate within those expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. RELEVANT CAPABILITIES ────────────────────────────────────────── */}
      {/*
        CHANGE: "Learn more" CTA labels replaced with specific destination labels.
        CHANGE: "Case Management and Workflows" now links to /solutions/investigation-intelligence.
        CHANGE: "Explainable Decisioning" now links to /security-trust  -  the most
        relevant page for a bank reader who wants to validate governance claims.
        CHANGE: Added use-case links at section footer for direct use-case navigation.
      */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Relevant Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Capabilities Built for Banking Operations
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Cross-system intelligence',
                body: 'Unify signals across fraud, AML, payments, accounts, identity, device, behavior, and third-party systems.',
                href: '/platform',
                cta: 'View Platform',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Graph intelligence',
                body: 'Reveal hidden relationships across customers, accounts, merchants, counterparties, devices, and transactions.',
                href: '/solutions/graph-intelligence',
                cta: 'Explore Graph Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Case intelligence',
                body: 'Turn fragmented alerts into structured cases with summaries, evidence, suggested resolutions, notes, and decision history.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
                title: 'Governance-ready workflows',
                body: 'Support explainable decisions, audit logs, review workflows, and evidence trails for regulated environments.',
                href: '/security-trust',
                cta: 'View Security &amp; Trust',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>{item.body}</p>
                <Link href={item.href} style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  {item.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>

          {/* CHANGE: Use-case links added at section footer  -  banks page had no
              use-case links anywhere. These are the three most relevant use cases
              for bank fraud and AML operations teams. */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <Link href="/use-cases/mule-network-detection" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Mule Network Detection <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/use-cases/transaction-monitoring" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Transaction Monitoring <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/use-cases/investigation-workflow-modernization" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Investigation Workflow <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. OUTCOMES ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Business Impact</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Outcomes for Banking Operations
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Improved Visibility Into Financial Crime Risk',
                body: 'Graph-native intelligence gives fraud, AML, and compliance teams a connected view of risk across entities, transactions, and systems  -  providing a unified picture of financial crime activity that fragmented, siloed monitoring cannot deliver.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Faster Investigations Across Fraud and AML',
                body: 'Pre-assembled case context, alert clustering, and structured investigation workflows reduce the time from alert to disposition  -  compressing investigation cycle times across fraud and AML operations.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Reduced Operational Burden on Compliance Teams',
                body: 'Smarter prioritisation and automated context aggregation reduce the manual workload per investigation  -  enabling compliance teams to manage growing alert volumes without proportional headcount growth.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Better Alert Prioritisation',
                body: 'Network-level risk scoring and relationship context ensure investigation queues are ordered by true risk  -  so analysts focus on high-impact cases rather than working through alerts by volume or recency alone.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Stronger Coordination Across Fraud and AML Teams',
                body: 'A shared intelligence layer connecting fraud and AML signals enables both teams to work from the same network view  -  improving cross-functional coordination, reducing duplication, and strengthening SAR quality and completeness.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>),
                title: 'More Explainable Investigation Workflows Across Teams and Risk Signals',
                body: 'Structured investigation workflows, audit-ready case trails, and explainable decisioning give fraud, AML, and compliance teams the documentation and traceability that regulators expect  -  reducing the gap between investigation activity and the evidence needed to support examiner review.',
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

      {/* ── 7. RELATED INDUSTRIES ───────────────────────────────────────────── */}
      {/*
        CHANGE: New section  -  no cross-links between industry pages existed.
        Gives visitors who serve multiple segments, or who are evaluating
        Verafye across institution types, a direct path to the other pages.
      */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Also Serving</p>
          <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Verafye Across Financial Institution Types
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <Link href="/industries/payment-processors-psps-payfacs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Payment Processors / PSPs / PayFacs <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/industries/fintech-platforms" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Fintech Platforms <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Replaced <CTA /> with controlled inline band.
        Secondary button links to /use-cases  -  giving undecided visitors a use-case
        exploration path rather than a dead end after the outcomes section.
        Trust language "built for financial institutions" included in sub-copy.
      */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Explore Focused Investigation Workflows for Banking Risk Teams
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Start with mule, scam, payment, fraud, or AML investigation workflows and expand as value is proven.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/platform" className="btn-secondary">Explore Platform</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>

    </>
  );
}

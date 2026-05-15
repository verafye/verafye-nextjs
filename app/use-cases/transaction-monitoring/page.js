import Link from 'next/link';

export const metadata = {
  title: "Transaction Monitoring Workflows | Verafye",
  description: "Connect AML transaction monitoring alerts into investigation-ready cases. Surface suspicious networks, reduce alert noise, and support audit-ready workflows for regulated financial crime teams.",
  openGraph: {
    title: "Transaction Monitoring Workflows | Verafye",
    description: "Connect AML transaction monitoring alerts into investigation-ready cases. Surface suspicious networks, reduce alert noise, and support audit-ready workflows for regulated financial crime teams.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Transaction Monitoring Workflows | Verafye",
    description: "Connect AML transaction monitoring alerts into investigation-ready cases. Surface suspicious networks, reduce alert noise, and support audit-ready workflows for regulated financial crime teams.",
  },
};

export default function TransactionMonitoringPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Secondary CTA "Contact Sales → /request-demo" replaced with
        "Explore Graph Intelligence → /solutions/graph-intelligence"  -  the
        primary solution that powers the connected monitoring described on this page.

        CHANGE: Hero body sharpened from "Move beyond rule-based alerts to
        context-aware monitoring across transactions, entities, and behaviors"  - 
        vague and generic  -  to specific enterprise language that names the outcome
        and the mechanism.

        CHANGE: Hero sub-paragraph sharpened from "enabling more accurate detection
        and better investigation workflows" to a concrete description of what
        changes operationally.
      */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>TRANSACTION MONITORING</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Transaction monitoring with connected investigation intelligence
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Connect transaction alerts with fraud, AML, identity, device, and behavior signals so teams can investigate faster and make explainable decisions.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye supports transaction monitoring workflows that connect alert creation, risk prioritization, review queues, case formation, and evidence trails - helping fraud and AML teams move from isolated alerts to investigation-ready cases built on the Verafye platform.
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

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────────── */}
      {/*
        CHANGE: H2 sharpened from "Challenges in Transaction Monitoring Today" to
        "Rule-Based Monitoring Generates Cost  -  Not Intelligence"  -  enterprise-specific,
        names the operational consequence directly.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Problem</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Rule-Based Monitoring Generates Cost  -  Not Intelligence
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Transaction monitoring remains one of the highest-cost, lowest-signal functions in financial crime operations. Legacy monitoring stacks generate enormous alert volumes, yet the majority of those alerts do not lead to substantive investigations  -  consuming analyst capacity without meaningfully improving risk detection or compliance outcomes. Transaction monitoring is also a non-discretionary AML obligation: regulators expect institutions to demonstrate effective controls, proportionate coverage, and the documented decision trails that examiners scrutinise during review.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'High Alert Volumes with Low Signal Quality', desc: 'Rules-based monitoring generates millions of alerts annually  -  the vast majority of which are false positives that consume analyst time without surfacing genuine financial crime risk' },
                { label: 'Fragmented Data Across Systems', desc: 'Transaction data, device signals, entity attributes, and behavioural patterns sit in separate systems with no shared intelligence layer  -  preventing the cross-signal detection that modern financial crime demands' },
                { label: 'Alerts Without Entity or Network Context', desc: 'Alerts are generated at the transaction level without the entity, relationship, or network context that analysts need to assess risk accurately and make confident investigation decisions' },
                { label: 'Manual Reconstruction Before Every Investigation', desc: 'Without pre-assembled context and structured workflows, analysts spend the majority of their time gathering information rather than investigating  -  extending cycle times and limiting throughput' },
              ].map(item => (
                <div key={item.label} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: '0.45rem' }} />
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CURRENT SYSTEMS FAIL ─────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Legacy Falls Short</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Traditional Monitoring Systems Fall Short
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>),
                title: 'Static Rules Create False Positives',
                body: 'Rules engines fire on individual transaction attributes  -  amount thresholds, velocity patterns, geographic triggers  -  without access to the entity, relationship, or behavioural context that would distinguish genuine risk from routine activity. The result is persistently high false positive rates that erode analyst trust and inflate operational cost.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'No Context Beyond the Transaction',
                body: 'Transaction monitoring systems evaluate payments in isolation  -  without awareness of the entity behind the transaction, the device used, the behavioural history, or the network of related accounts. This absence of context means alerts arrive without the information analysts need to assess them meaningfully.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
                title: 'Disconnected From Investigation Workflows',
                body: 'Alert generation and case investigation remain disconnected processes in most monitoring stacks. Analysts receive alerts with no structured investigation context  -  requiring manual platform switching, data retrieval, and case assembly before any substantive review can begin.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Scaling Requires Headcount, Not Intelligence',
                body: 'As transaction volumes grow, alert volumes scale proportionally under rules-based monitoring  -  and the only response available is adding analyst capacity. This model does not improve detection quality, reduce false positives, or accelerate investigation as the institution scales.',
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

      {/* ── 4. BEFORE / AFTER ───────────────────────────────────────────────── */}
      {/*
        CHANGE: New section  -  no before/after contrast existed on this page.
        Task brief requires "Before vs After clarity". Two-column contrast makes
        the operational shift immediately scannable for enterprise buyers.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Before vs After</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              What Changes With Verafye
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: 'var(--error-bg)', border: '1px solid var(--error-border)', borderRadius: '1rem', padding: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>Without Verafye</p>
              {[
                'Alerts generated on transaction attributes alone  -  no entity or network context',
                'High false positive rates  -  analysts spend most of their time ruling out noise',
                'Fraud and AML monitoring queues are separate  -  cross-domain risk invisible and compliance gaps harder to evidence',
                'Analysts manually switch platforms to gather case context before investigation begins',
                'Alert volumes grow with transaction volumes  -  headcount scales with cost, not intelligence',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.875rem', alignItems: 'flex-start' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.125rem' }}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--bg-tint)', border: '1px solid rgba(30,111,183,0.18)', borderRadius: '1rem', padding: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>With Verafye</p>
              {[
                'Every alert enriched with entity profile, device signals, and network context at generation',
                'Contextual enrichment helps deprioritise legitimate activity earlier  -  fewer false positives reaching analysts',
                'Unified fraud and AML monitoring layer  -  cross-domain risk visible in a single queue, with documented decision trails that support regulatory review',
                'Pre-assembled case context delivered at alert creation  -  analysts investigate, not research',
                'Intelligence improves with scale  -  graph detection surfaces coordinated risk that rules miss',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.875rem', alignItems: 'flex-start' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.125rem' }}><path d="M20 6 9 17l-5-5"/></svg>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW VERAFYE IMPROVES IT ──────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Improves It</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Connected Monitoring That Surfaces Risk, Not Just Alerts
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects transaction signals with entity profiles, behavioural patterns, and network relationships  -  so every alert arrives enriched with the context analysts need to assess, prioritise, and investigate without manual reconstruction.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Connects Transactions with Entities and Behaviours', body: 'Every transaction alert is enriched with the entity profile behind it  -  account history, device signals, identity attributes, and behavioural patterns  -  giving analysts the full picture at the moment an alert is surfaced rather than after manual research.' },
                { step: '02', title: 'Uses Graph Intelligence to Surface Network Risk', body: 'Graph traversal connects transaction patterns across related accounts, devices, and entities  -  surfacing coordinated activity, network-level risk, and relationship context that transaction-level monitoring cannot see in isolation.' },
                { step: '03', title: 'Improves Alert Prioritisation', body: 'Alerts are organized by entity context, network risk, and cross-system signals  -  ensuring investigation queues are ordered by genuine risk rather than transaction volume, recency, or alert age alone.' },
                { step: '04', title: 'Reduces False Positives Through Contextual Enrichment', body: 'Contextual enrichment at the alert stage allows legitimate activity to be identified and deprioritised earlier in the workflow  -  reducing the false positive rate that drives analyst fatigue and operational cost without sacrificing genuine detection coverage.' },
                { step: '05', title: 'Connects Monitoring to Investigation Workflows With Evidence Trails', body: 'Verafye connects transaction monitoring directly to investigation workflows  -  delivering alerts as structured, context-rich cases with pre-assembled evidence, enabling analysts to move from alert to investigation decision without manual context gathering, and preserving audit-ready evidence trails for compliance review.' },
                { step: '06', title: 'Connects Fraud and AML Monitoring Signals', body: 'Transaction signals from fraud and AML monitoring are connected into a single intelligence layer  -  eliminating the blind spots that form at the boundary between fraud detection and AML transaction monitoring and enabling cross-domain risk assessment.' },
              ].map(item => (
                <div key={item.step} className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.step}</div>
                  <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. KEY CAPABILITIES ─────────────────────────────────────────────── */}
      {/*
        CHANGE: "Learn more" labels replaced with specific CTA labels.
        CHANGE: "Cross-System Signal Aggregation" now links to /platform.
        CHANGE: "Behavioural and Transaction Analysis" links to /solutions/graph-intelligence.
        CHANGE: "Alert Prioritisation" links to /solutions/investigation-intelligence.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Key Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Capabilities That Power Modern Transaction Monitoring
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Connected monitoring signals',
                body: 'Bring transaction alerts together with fraud, AML, identity, device, behavior, and third-party enrichment signals - feeding normalized alert context into review queues and case formation workflows.',
                href: '/platform',
                cta: 'Explore Platform',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Alert clustering & review queues',
                body: 'Group related transaction activity into investigation-ready cases instead of isolated alerts - routing clustered cases into structured review queues with pre-assembled entity and transaction-to-entity linkage context.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Graph context',
                body: 'Reveal relationships across accounts, users, merchants, counterparties, devices, and payment flows.',
                href: '/solutions/graph-intelligence',
                cta: 'Explore Graph Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Evidence trails & audit-ready records',
                body: 'Preserve case notes, linked evidence, decision rationale, analyst actions, and reviewer controls - maintaining structured evidence trails and audit-ready investigation records for compliance oversight.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
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
        </div>
      </section>

      {/* ── 7. OUTCOMES ─────────────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Business Impact</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Outcomes Enabled by Connected Transaction Monitoring
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Fewer False Positives  -  More Analyst Capacity for Genuine Risk',
                body: 'Contextual enrichment at the alert stage enables legitimate activity to be identified and deprioritised earlier  -  reducing false positive rates that inflate investigation workload and erode analyst confidence in the monitoring system.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>),
                title: 'Better Signal Quality  -  Alerts That Carry Genuine Risk',
                body: 'Graph intelligence and cross-system signal aggregation improve the quality of monitoring outputs  -  surfacing alerts that carry genuine risk indicators rather than triggering on transaction attributes alone, improving the ratio of actionable to non-actionable alerts.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Faster Investigations  -  Context Delivered at Alert Creation',
                body: 'Pre-assembled case context and direct integration between monitoring and investigation workflows eliminate the manual research phase  -  enabling analysts to move from alert to investigation decision faster and with greater confidence.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Scalable Operations  -  Intelligence Grows With Volume',
                body: 'Better alert prioritisation, reduced false positives, and structured investigation workflows reduce the per-alert workload  -  enabling institutions to manage growing transaction volumes without proportional increases in analyst headcount.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Complete Risk Visibility  -  Across Transactions and Entities',
                body: 'A unified intelligence layer connecting transaction monitoring to entity profiles, network relationships, and cross-system signals gives fraud and AML teams a complete, contextual picture of risk  -  enabling better-informed decisions across monitoring, investigation, and reporting functions. This connected view also supports the explainability and audit trail requirements that regulators expect from institutions operating transaction monitoring programmes.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'More Connected Monitoring Across Signals, Entities, and Systems',
                body: 'A unified intelligence layer connecting transaction monitoring to entity profiles, network relationships, and cross-system signals closes the gap between alert generation and investigation context  -  enabling fraud and AML teams to act on a more complete picture of risk across the monitoring programme.',
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

      {/* ── 8. INDUSTRY AND USE-CASE LINKS ──────────────────────────────────── */}
      {/*
        CHANGE: New section  -  no industry or cross-use-case links existed.
        Task brief requires linking to relevant industries and solutions.
        All three industry segments are relevant to transaction monitoring.
      */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Relevant Industries</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { href: '/industries/banks', label: 'Banks', desc: 'High-volume transaction monitoring across retail, commercial, and correspondent banking operations' },
                  { href: '/industries/payment-processors-psps-payfacs', label: 'Payment Processors / PSPs / PayFacs', desc: 'Real-time monitoring at payment scale  -  connected across merchant, device, and transaction signals' },
                  { href: '/industries/fintech-platforms', label: 'Fintech Platforms', desc: 'Scalable monitoring for fast-growing platforms with evolving fraud patterns and AML obligations' },
                  { href: '/industries/digital-banks', label: 'Digital Banks & Neo Banks', desc: 'Connected investigation intelligence for digital banking risk teams covering mule detection, scam investigation, payment fraud, and beneficiary-linked risk' },
                ].map(item => (
                  <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                    <div className="card card-hover" style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {item.label}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Related Use Cases</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { href: '/use-cases/mule-network-detection', label: 'Mule Network Detection', desc: 'Detect coordinated money movement patterns across connected accounts, devices, and payment rails' },
                  { href: '/use-cases/investigation-workflow-modernization', label: 'Investigation Workflow Modernization', desc: 'Structured, intelligence-driven workflows that turn monitoring alerts into faster case resolutions' },
                ].map(item => (
                  <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                    <div className="card card-hover" style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {item.label}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Replaced <CTA /> with controlled inline band.
        Secondary button links to /solutions/graph-intelligence  - 
        the core solution that powers connected transaction monitoring.
      */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Turn transaction alerts into explainable investigations
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            See how transaction monitoring workflows can feed alert clustering, review queues, case formation, and evidence trails - giving risk teams clearer investigations without replacing existing monitoring infrastructure.
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

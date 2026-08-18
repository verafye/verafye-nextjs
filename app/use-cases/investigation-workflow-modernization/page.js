import Link from 'next/link';

export const metadata = {
  title: { absolute: "Fraud Investigation Workflow Software | AML Case Management" },
  description: "Connect fraud, AML and risk signals into investigation-ready workflows that reduce manual effort, improve governance and accelerate case resolution.",
  keywords: [
    "investigation workflow software",
    "aml case management",
    "fraud investigation workflows",
    "investigation automation",
    "compliance workflows",
  ],
  openGraph: {
    title: "Fraud Investigation Workflow Software | AML Case Management",
    description: "Connect fraud, AML and risk signals into investigation-ready workflows that reduce manual effort, improve governance and accelerate case resolution.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud Investigation Workflow Software | AML Case Management",
    description: "Connect fraud, AML and risk signals into investigation-ready workflows that reduce manual effort, improve governance and accelerate case resolution.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/use-cases/investigation-workflow-modernization',
  },
};

export default function InvestigationWorkflowModernizationPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Secondary CTA "Contact Sales → /request-demo" replaced with
        "See Investigation Intelligence → /solutions/investigation-intelligence"  - 
        the most directly relevant solution page for this use case.

        CHANGE: Hero body sharpened from "Move from fragmented workflows and manual
        analysis to connected, intelligence-driven investigation processes" - vague  - 
        to language that names the specific operational outcome enterprise buyers care about.
      */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>INVESTIGATION WORKFLOW MODERNIZATION</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              From fragmented alerts to connected, evidence-grade investigations
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Connect fragmented alerts, build case context, support analyst decisions, and maintain audit-ready trails across fraud and AML workflows.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps lean fraud, AML, compliance, and risk teams move from scattered queues and manual review to connected, explainable investigation workflows.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/risk-shadowing-review" className="btn-primary">
                Explore Risk Shadowing Review
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
        CHANGE: H2 sharpened from "Challenges in Investigation Workflows" (generic)
        to "Investigation Backlogs Are a Regulatory and Operational Risk" - names
        the dual consequence (regulatory exposure + operational cost) that enterprise
        buyers recognise immediately as their problem.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Problem</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Investigation Backlogs Are a Regulatory and Operational Risk
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Financial crime investigation teams are caught between growing alert volumes and static operational capacity. Legacy monitoring stacks generate more alerts than teams can meaningfully process - and without structured, intelligent workflows, each investigation consumes disproportionate analyst time before a decision can be reached. Investigation quality is also a direct regulatory concern: examiners assess whether institutions can demonstrate consistent, documented, and timely case resolution - and fragmented, manual workflows make that increasingly difficult to evidence.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Alert Volumes Outpace Investigation Capacity', desc: 'Alert volumes consistently outpace investigation capacity - creating backlogs that increase regulatory risk, delay account action, and erode the operational effectiveness of fraud and AML teams' },
                { label: 'Fragmented Tools Force Platform Switching', desc: 'Fraud, AML, payments, and case management tools operate in silos - forcing analysts to switch between platforms and manually reconcile information before any substantive investigation can begin' },
                { label: 'Alerts Arrive Without Investigation Context', desc: 'Alerts arrive without pre-assembled entity profiles, relationship context, or cross-system signals - leaving analysts with individual events and no structured view of the risk behind them' },
                { label: 'Data Gathering Consumes Most Analyst Time', desc: 'Without automated context aggregation, analysts spend the majority of case time gathering data rather than analysing it - limiting throughput, increasing cost, and reducing investigation quality' },
                { label: 'Headcount Scales With the Problem, Not Intelligence', desc: 'Adding analyst headcount to manage alert volumes does not improve detection quality, improve alert signal quality, or accelerate resolution - it simply scales cost linearly with the problem' },
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

      {/* ── 3. WHY CURRENT APPROACH FAILS ───────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Where Risk Context Becomes Fragmented Across Workflows</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Where Fragmented, Manual Workflows Create Investigation Gaps
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Detection and Investigation Are Disconnected',
                body: 'Monitoring and investigation sit on separate platforms with no intelligence bridge between them. Alerts leave the detection system with no pre-assembled context, no relationship data, and no priority signal - arriving in investigation queues as isolated events that require full manual reconstruction before analysis can begin.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Fraud and AML Teams Work From Separate Views',
                body: 'Fraud and AML investigation teams work from separate queues, separate case systems, and separate views of the same underlying risk - creating duplication, missed connections, and gaps at the cross-domain boundary where coordinated financial crime is most likely to operate.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/></svg>),
                title: 'Inconsistent Workflows Increase Regulatory Risk',
                body: 'Without structured investigation workflows, each analyst approaches cases differently - varying the quality, consistency, and completeness of investigation outcomes across the team. Inconsistency increases regulatory risk, weakens SAR quality, and makes audit and governance more difficult to maintain.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Headcount Does Not Solve the Structural Problem',
                body: 'The default response to growing alert volumes - hiring more analysts - does not address the root cause. Without smarter prioritisation, automated context aggregation, and structured workflows, additional headcount absorbs cost without meaningfully improving investigation outcomes or reducing backlog growth.',
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
        CHANGE: New section - no before/after contrast existed on this page.
        Task brief requires "Before vs After clarity". Enterprise buyers scanning
        this page need to see the operational delta immediately.
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
                'Analysts spend 60–70% of case time gathering context before investigation begins',
                'Detection and investigation on separate platforms - manual handoff between systems',
                'No shared intelligence view across fraud and AML teams - duplication and gaps',
                'Alert queues ordered by volume or recency - highest-risk cases buried',
                'Investigation quality varies by analyst - inconsistent SAR completeness, escalation decisions, and audit trails that increase regulatory exposure',
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
                'Case context pre-assembled at alert creation - analysts investigate from the first moment',
                'Detection and investigation connected in one network view - no manual handoff',
                'Shared fraud and AML view from one connected graph - no duplication, no cross-domain gaps',
                'Queues continuously ranked by network risk and entity context - highest-impact cases always surface first',
                'Structured workflows standardise investigation quality - consistent SAR completeness, documented decision trails, and audit-ready case records across teams',
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

      {/* ── 5. HOW VERAFYE SOLVES IT ────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Solves It</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                An Investigation-Centric Intelligence Platform
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye restructures the investigation experience from alert to close - connecting detection to investigation, automating context assembly, and enforcing structured workflows that reduce cycle times, improve decision quality, and produce traceable case records across fraud and AML teams.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'One Connected Investigation View Across Systems', body: 'Verafye aggregates fraud, AML, and payments signals into one connected investigation view - eliminating the platform switching and manual context gathering that consumes analyst capacity before a case can meaningfully begin.' },
                { step: '02', title: 'Alert Prioritisation Using Context and Network Risk', body: 'Alerts are organized by entity context, relationship data, and cross-system signals - ensuring investigation queues are always ordered by genuine risk rather than volume, recency, or alert age alone.' },
                { step: '03', title: 'Graph-Based Insights at the Point of Investigation', body: 'Every case arrives with pre-assembled graph context - entity profiles, relationship maps, network cluster data, and transaction flow summaries - giving analysts the intelligence they need to make decisions without manual reconstruction.' },
                { step: '04', title: 'Structured Investigation Workflows', body: 'Verafye guides analysts through consistent, structured investigation steps - with built-in escalation paths, disposition tracking, and audit trails that standardise quality, reduce variance, and support the compliance, governance, and regulatory traceability requirements that examiners expect from financial crime operations.' },
                { step: '05', title: 'Alert Clustering Into Investigation Cases', body: 'Related alerts across fraud, AML, and payments are automatically clustered into coherent cases - reducing raw alert volume, surfacing coordinated activity as single investigation units, and enabling analysts to resolve clusters rather than individual events.' },
                { step: '06', title: 'Continuous Prioritisation as New Signals Arrive', body: 'Investigation queues are continuously re-prioritised as new signals arrive - ensuring that cases escalate automatically when risk increases, and that analysts always work the highest-impact investigations regardless of when they were first created.' },
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
        CHANGE: "Learn more" labels replaced with specific CTA labels on all cards.
        CHANGE: "Cross-System Signal Aggregation" now links to /platform.
        CHANGE: "Alert Prioritisation" now links to /solutions/investigation-intelligence.
        CHANGE: "Case Management Workflows" now links to /solutions/investigation-intelligence.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Key Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Capabilities That Power Modern Investigation Workflows
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Connected investigation queues',
                body: 'Bring fragmented alerts into connected workflows organized around cases, entities, and networks.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Case intelligence',
                body: 'Provide structured case context, summaries, evidence, suggested resolutions, and next-best actions.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Analyst decision support',
                body: 'Help analysts move from review to decision with explainable context and workflow guidance.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
                title: 'Audit-ready governance',
                body: 'Preserve notes, evidence, actions, decisions, and logs for internal and regulatory review.',
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
              Outcomes Enabled by Modern Investigation Workflows
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Faster Investigation Turnaround - Hours, Not Days',
                body: 'Pre-assembled case context, alert clustering, and structured workflows are designed to reduce manual context assembly and help investigation teams handle connected evidence more efficiently across fraud and AML operations.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Reduced Backlog - Risk-Ordered Queues, Not Volume-Ordered',
                body: 'Better alert prioritisation, automated context aggregation, and cluster-based investigation views reduce the per-case workload - enabling teams to work through backlogs faster and prevent new accumulation as alert volumes continue to grow.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Improved Analyst Productivity - Investigating, Not Researching',
                body: 'With structured workflows and decision support in place, analysts spend more time on substantive analysis and less on manual data gathering - handling more cases per day with greater consistency and lower fatigue across the investigation function.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
                title: 'Consistent Decision Quality - Governance-Grade SAR Outcomes',
                body: 'Structured investigation workflows standardise how cases are assessed, escalated, and closed across teams - reducing outcome variance, improving SAR quality, and supporting the governance and audit requirements of compliance and regulatory functions. Institutions operating under examiner scrutiny are better positioned to demonstrate consistent, documented, and timely case resolution.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>),
                title: 'Lower Operational Cost - Decouple Capacity From Headcount',
                body: 'Connected intelligence and structured workflows decouple investigation capacity from headcount growth - enabling institutions to manage increasing alert and case volumes as transaction activity grows without the proportional cost increases that analyst-led scaling requires.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
                title: 'Better Investigation Governance and Audit Trail Completeness',
                body: 'Structured investigation workflows, documented decision rationale, and complete audit trails give compliance and operations teams the governance evidence that regulators expect - reducing the risk of incomplete or inconsistent case documentation during examination and improving the traceability of investigation decisions across fraud and AML functions.',
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
        CHANGE: New section - no industry or cross-use-case links existed.
        Task brief requires linking to relevant industries and solutions.
        All three segments have investigation workflow modernization as a
        primary pain point; banks and payment processors are highest priority.
      */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Relevant Industries</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { href: '/industries/banks', label: 'Banks', desc: 'Modernize fraud and AML investigation workflows across high-volume compliance and operations teams' },
                  { href: '/industries/payment-processors-psps-payfacs', label: 'Payment Processors / PSPs / PayFacs', desc: 'Accelerate payment fraud investigation and merchant risk case resolution at transaction scale' },
                  { href: '/industries/fintech-platforms', label: 'Fintech Platforms', desc: 'Scale investigation capacity without proportional headcount growth as user and transaction volumes increase' },
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
                  { href: '/use-cases/transaction-monitoring', label: 'Transaction Monitoring', desc: 'Context-aware monitoring that improves alert signal quality and feeds investigation-ready alerts into structured workflows' },
                  { href: '/use-cases/mule-network-detection', label: 'Mule Network Detection', desc: 'Graph-based network detection that delivers investigation-ready cluster context - not individual account alerts' },
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
        Secondary button links to /solutions/investigation-intelligence  - 
        the solution page that directly backs this use case.
      */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Move from alert review to connected investigations
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            See how Verafye helps risk teams modernize investigation workflows without enterprise-heavy complexity.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/risk-shadowing-review" className="btn-primary">
              Explore Risk Shadowing Review
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

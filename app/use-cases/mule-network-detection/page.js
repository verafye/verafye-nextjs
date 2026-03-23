import Link from 'next/link';

export const metadata = {
  title: 'Mule Network Detection — Verafye',
  description: 'Identify connected entities, accounts, and transactions involved in coordinated financial crime using network-level intelligence.',
  openGraph: {
    title: 'Mule Network Detection — Verafye',
    description: 'Verafye enables institutions to detect, analyze, and investigate mule activity across fragmented systems through graph-based detection and investigation workflows.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mule Network Detection — Verafye',
    description: 'Verafye enables institutions to detect, analyze, and investigate mule activity across fragmented systems through graph-based detection and investigation workflows.',
  },
};

export default function MuleNetworkDetectionPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Secondary CTA "Contact Sales → /request-demo" replaced with
        "See Mule Account Detection → /solutions/mule-account-detection"  - 
        the most directly relevant solution page for this use-case topic.
        Removes duplicate conversion button and adds a product exploration path.
      */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Use Cases  -  Mule Network Detection</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Detect and Investigate Mule Networks with Graph Intelligence
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Mule activity typically operates across networks of accounts, devices, and transactions  -  structured to appear low-risk in isolation, making detection dependent on network visibility that fragmented monitoring systems do not provide.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye connects account, device, identity, and transaction signals into a unified graph  -  surfacing mule network structures that individual transaction monitoring cannot detect, and delivering investigation-ready context to fraud and AML teams from the moment a case is created.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
                Request Demo
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/solutions/mule-account-detection" className="btn-secondary">See Mule Account Detection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM DEFINITION ────────────────────────────────────────────── */}
      {/*
        CHANGE: H2 sharpened from "The Growing Challenge of Mule Networks" to
        "Mule Networks Are Built to Evade Account-Level Detection"  -  enterprise-specific,
        states the core technical problem precisely.
      */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Problem</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Mule Networks Are Built to Evade Account-Level Detection
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Mule networks are a foundational layer of modern financial crime  -  enabling fraud proceeds to be moved, layered, and extracted across accounts, institutions, and payment rails. They are deliberately structured to appear low-risk at the individual transaction level, making detection dependent on network visibility that most institutions cannot achieve through isolated monitoring. Detecting and disrupting mule activity is a direct AML obligation: regulators expect institutions to identify coordinated money movement, file timely SARs, and demonstrate the controls and evidence trails that support those filings.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Operate Across Systems and Institutions', desc: 'Mule networks span multiple banks, payment platforms, and accounts  -  exploiting the lack of cross-institution visibility to move funds without triggering individual institution-level alerts' },
                { label: 'Low-Risk Signals at Transaction Level', desc: 'Each individual transaction within a mule network may appear routine  -  only the pattern across connected accounts and time reveals the coordinated nature of the activity' },
                { label: 'Networks Evolve Rapidly', desc: 'Mule recruiters continuously onboard new accounts, retire compromised ones, and adapt movement patterns  -  making static detection models increasingly ineffective over time' },
                { label: 'Lack of Connected Visibility', desc: 'Without a graph intelligence layer connecting accounts, devices, identities, and behaviours, institutions cannot see the structure of mule networks operating within their portfolio' },
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

      {/* ── 3. WHY CURRENT APPROACHES FAIL ──────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Legacy Fails</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Traditional Detection Misses Mule Networks
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>),
                title: 'Transaction-Level Analysis Lacks Network Context',
                body: 'Traditional monitoring evaluates transactions independently  -  scoring each event against static thresholds without awareness of the network structure connecting it to related accounts, devices, and movement patterns.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Rules-Based Systems Miss Coordinated Behaviour',
                body: 'Mule networks are specifically structured to stay below the thresholds that rules engines monitor. Coordinated activity that individually scores low risk only becomes visible when viewed across the full connected network  -  something rules-based systems cannot do.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Signals Remain Disconnected Across Systems',
                body: 'Device intelligence, identity attributes, transaction data, and AML signals live in separate tools that do not share a common intelligence layer  -  preventing the cross-signal correlation that would reveal shared infrastructure across a mule network.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Investigations Are Manual and Slow',
                body: 'Without pre-assembled network context, analysts must manually trace account relationships, retrieve transaction histories across systems, and reconstruct the network structure before any investigation can meaningfully begin  -  extending cycle times and increasing the risk of missed escalation.',
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
        CHANGE: New section  -  no before/after contrast existed anywhere on this page.
        Task brief requires "Before vs After clarity". This section directly contrasts
        the legacy state with the Verafye state in a scannable two-column layout,
        making the value proposition immediately legible to enterprise buyers.
      */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
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
                'Mule accounts flagged individually  -  network structure invisible',
                'Analysts manually trace account links across disconnected systems',
                'Fraud and AML teams see separate, incomplete pictures of the same network',
                'Detection relies on static rules that mule operators deliberately avoid',
                'SAR preparation delayed by manual evidence gathering and case reconstruction  -  creating compliance gaps under time-sensitive filing obligations',
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
                'Full mule network clusters surfaced as single investigable units',
                'Pre-assembled relationship maps, entity profiles, and transaction flows delivered at case creation',
                'Unified fraud and AML view of the same network from a shared intelligence layer',
                'Graph-native detection surfaces coordinated activity rules cannot see',
                'SAR-ready context assembled automatically  -  analysts investigate, not reconstruct, with a complete audit trail supporting every filing decision',
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
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Solves It</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Graph-Based Detection and Investigation
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects accounts, devices, transactions, and behaviours into a unified graph  -  identifying the relationships that define mule network structure, clustering connected entities into investigable units, and delivering full investigation context to analysts from the moment a case is surfaced.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Connects Accounts, Devices, Transactions, and Behaviours', body: 'Verafye resolves and connects entities across account records, device fingerprints, transaction histories, and behavioural signals  -  building a living graph of relationships that spans the full data landscape of a mule network.' },
                { step: '02', title: 'Identifies Relationships and Patterns', body: 'Graph traversal surfaces non-obvious links between entities  -  shared devices, common identity attributes, overlapping transaction timing, and behavioural similarities  -  that individually appear innocuous but collectively reveal coordinated mule activity.' },
                { step: '03', title: 'Clusters Related Entities Into Networks', body: 'Connected entities are grouped into mule network clusters  -  presenting coordinated structures as single, investigable units rather than isolated alerts, and enabling risk scoring at the network level rather than the account level.' },
                { step: '04', title: 'Monitors Network Evolution Continuously', body: 'Verafye continuously monitors the graph for new connections, account reactivations, and changes in cluster behaviour  -  detecting network expansion and adaptation as they occur rather than after losses have already accumulated.' },
                { step: '05', title: 'Delivers Investigation-Ready Context', body: 'Each detected network cluster is delivered alongside pre-assembled investigation context  -  relationship maps, transaction flow summaries, entity profiles, and cross-system signals  -  enabling analysts to begin substantive investigation immediately.' },
                { step: '06', title: 'Connects Fraud and AML Intelligence', body: 'Verafye unifies fraud and AML signals across the same network view  -  connecting inbound fraud proceeds to outbound money movement and enabling both teams to work from a shared, complete picture of mule activity.' },
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
        CHANGE: "Network Detection and Clustering" now links to /solutions/mule-account-detection.
        CHANGE: "Cross-System Signal Aggregation" now links to /platform.
        CHANGE: "Case Management Workflows" now links to /solutions/investigation-intelligence.
      */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Key Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Capabilities That Power Mule Network Detection
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Graph Intelligence',
                body: 'Connect entities across accounts, devices, identities, and transactions to surface the hidden relationships that define mule network structure  -  invisible to transaction-level and rules-based detection.',
                href: '/solutions/graph-intelligence',
                cta: 'Explore Graph Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>),
                title: 'Network Detection and Clustering',
                body: 'Automatically cluster connected mule accounts into network groups  -  presenting coordinated structures as single investigable units with risk scoring at the cluster level rather than the individual account level.',
                href: '/solutions/mule-account-detection',
                cta: 'See Mule Account Detection',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Cross-System Signal Aggregation',
                body: 'Aggregate device intelligence, transaction data, identity attributes, and AML signals into a unified view  -  connecting the cross-system signals that mule networks rely on fragmentation to obscure.',
                href: '/platform',
                cta: 'View Platform',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Investigation Intelligence',
                body: 'Deliver pre-assembled investigation context alongside every detected network  -  relationship maps, entity profiles, transaction flows, and cross-system signals  -  enabling analysts to begin substantive investigation immediately.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
                title: 'Case Management Workflows',
                body: 'Structure mule network investigations into formal cases with consistent workflows, escalation paths, and audit trails  -  supporting SAR preparation, regulatory reporting, and governance requirements.',
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
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Business Impact</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Outcomes Enabled by Mule Network Detection
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>),
                title: 'Earlier Detection  -  Before Losses Accumulate',
                body: 'Graph-native detection surfaces coordinated mule activity that transaction-level and rules-based monitoring cannot see  -  enabling intervention earlier in the money movement lifecycle before layering compounds exposure.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Faster Investigations  -  No Manual Reconstruction',
                body: 'Pre-assembled network context and cluster-based investigation views eliminate the manual research phase  -  enabling analysts to begin substantive investigation immediately and reducing cycle times across mule detection cases.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Fewer False Negatives  -  Coordinated Activity Surfaces',
                body: 'Network-level detection closes the gap between what rules-based systems catch and what coordinated mule networks are actually doing  -  reducing the false negative rate that allows active networks to persist within existing monitoring coverage.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Complete Network Visibility  -  Fraud and AML Unified',
                body: 'A unified graph view across accounts, devices, and transactions gives fraud and AML teams a complete, real-time picture of mule network structure  -  enabling proactive intervention and better-informed decisions on account action and SAR filing. The shared intelligence layer supports the documentation and audit trails that regulators expect from institutions operating within AML frameworks.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Improved Operational Efficiency  -  Scale Without Headcount',
                body: 'Alert clustering, automated context aggregation, and network-level prioritisation reduce the per-case workload  -  enabling fraud and AML operations to handle greater case volumes without proportional increases in analyst headcount.',
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

      {/* ── 8. INDUSTRY AND SOLUTION LINKS ──────────────────────────────────── */}
      {/*
        CHANGE: New section  -  no industry links or cross-use-case links existed on
        this page. Task brief requires linking to relevant industries and solutions.
        Banks and payment processors are the primary segments for mule detection.
        Transaction monitoring is the closest related use case.
      */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Relevant Industries</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { href: '/industries/banks', label: 'Banks', desc: 'Mule network detection for fraud and AML operations across retail and commercial banking' },
                  { href: '/industries/payment-processors-psps-payfacs', label: 'Payment Processors / PSPs / PayFacs', desc: 'Detect coordinated money movement across merchant accounts and payment rails' },
                  { href: '/industries/fintech-platforms', label: 'Fintech Platforms', desc: 'Identify account farming rings and synthetic identity networks targeting platform onboarding' },
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
                  { href: '/use-cases/transaction-monitoring', label: 'Transaction Monitoring', desc: 'Context-aware monitoring that connects transaction signals to entity and network intelligence' },
                  { href: '/use-cases/investigation-workflow-modernization', label: 'Investigation Workflow Modernization', desc: 'Structured, intelligence-driven workflows that accelerate case resolution across fraud and AML' },
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
        Secondary button links to /solutions/mule-account-detection  - 
        the solution page that directly backs this use case.
      */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            See Verafye in Action
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 1.25rem' }}>
            Talk to our team about detecting and investigating mule networks  -  connecting the signals that isolated monitoring misses, earlier in the money movement lifecycle.
          </p>
          <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', maxWidth: '34rem', margin: '0 auto 2.5rem' }}>
            Institutions operating under AML obligations are investing in network-level detection to support timely SAR filing and meet examiner expectations around mule account coverage.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/solutions/mule-account-detection" className="btn-secondary">See Mule Account Detection</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>

    </>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'Mule Account Detection Platform | Stop Fraud Networks',
  description: 'Mule account detection platform to identify money mule activity early. Stop financial crime, manage regulatory risk, and ensure AML compliance faster.',
  openGraph: {
    title: 'Mule Account Detection Platform | Stop Fraud Networks',
    description: 'Mule account detection platform to identify money mule activity early. Stop financial crime, manage regulatory risk, and ensure AML compliance faster.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mule Account Detection Platform | Stop Fraud Networks',
    description: 'Mule account detection platform to identify money mule activity early. Stop financial crime, manage regulatory risk, and ensure AML compliance faster.',
  },
};

export default function MuleAccountDetectionPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Secondary CTA was "Contact Sales → /request-demo" - duplicate destination.
        Replaced with "See Mule Network Detection Use Case → /use-cases/mule-network-detection"
        which is the direct use-case page for this solution topic.

        CHANGE: "graph intelligence" in hero sub-paragraph is now a linked phrase
        → /solutions/graph-intelligence. "investigation-centric workflows" links
        → /solutions/investigation-intelligence. Both are direct cross-references
        to the other two solution pages without changing any copy.
      */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Solutions - Mule Account Detection</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Detect Coordinated Mule Networks Before Funds Are Layered
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Mule activity increasingly operates across coordinated networks - deliberately structured to appear low-risk in isolation. Detecting it requires connecting signals across accounts, devices, and transaction flows, not evaluating events one at a time.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye connects signals across accounts, devices, and transaction flows using{' '}
              <Link href="/solutions/graph-intelligence" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>graph intelligence</Link>
              {', '}cross-system signal correlation, and{' '}
              <Link href="/solutions/investigation-intelligence" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>investigation-centric workflows</Link>
              {' '}- to identify mule behavior earlier and enable faster intervention.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
                Request Demo
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/use-cases/mule-network-detection" className="btn-secondary">See Mule Network Use Case</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM STATEMENT ────────────────────────────────────────────── */}
      {/*
        CHANGE: "Cross-Domain Risk Signals" bullet now links to /solutions/graph-intelligence -
        the correct destination for a reader who wants to understand how Verafye
        connects fraud and AML signals that are currently in separate systems.
        "Coordinated Money Movement" links to /use-cases/transaction-monitoring.
      */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Problem</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Mule Networks Are Built to Evade Isolated Detection
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Individual mule accounts are often designed to appear low-risk. Transactions stay below reporting thresholds. Account behavior looks routine. The true risk only becomes visible when you connect the signals - linked accounts, shared devices, common identities, overlapping money movement patterns, and cross-account behavioral signatures that point to coordinated network activity. Leaving mule networks undetected creates direct AML exposure: missed SAR obligations, delayed account action, and documentation gaps that cannot support regulatory review.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  label: 'Low-Risk Appearance in Isolation',
                  desc: 'Individual mule accounts are structured to blend in - small transactions, normal-looking behaviour, and clean account histories that evade point-in-time detection',
                  href: null,
                },
                {
                  label: 'Linked Entity Structures',
                  desc: 'Mule networks rely on shared devices, phone numbers, addresses, and IP patterns that connect accounts across the portfolio',
                  href: null,
                },
                {
                  label: 'Coordinated Money Movement',
                  desc: 'Funds flow through layered account chains in structured patterns - visible only when transaction relationships are mapped across the network',
                  href: '/use-cases/transaction-monitoring',
                },
                {
                  label: 'Cross-Domain Risk Signals',
                  desc: 'Fraud and AML signals relevant to mule activity are generated in separate systems, leaving the full network picture invisible to either team',
                  href: '/solutions/graph-intelligence',
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
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Legacy Stacks Fall Short</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Isolated Monitoring Misses Mule Networks
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>),
                title: 'Transaction Monitoring Sees Events, Not Networks',
                body: 'Rule-based transaction monitoring evaluates individual transactions against fixed thresholds. It cannot traverse relationships or identify coordinated movement patterns - exactly how mule networks are structured to evade it.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" x2="12" y1="12" y2="16"/><line x1="10" x2="14" y1="14" y2="14"/></svg>),
                title: 'Shared Devices, Identities, and Behaviours Remain Disconnected',
                body: 'The shared attributes that link mule accounts - devices, phone numbers, IP addresses, behavioural fingerprints - sit across separate systems and are never connected into a unified relationship view.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>),
                title: 'Fraud and AML Signals Reviewed in Separate Workflows',
                body: 'Mule activity generates signals across both fraud and AML systems. When teams operate in isolation with no shared intelligence layer, network-level risk remains invisible to both - and neither has the complete picture.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Analysts Lack Context to Identify Coordinated Mule Structures',
                body: 'Without graph-enriched investigation context, analysts reviewing individual alerts have no visibility into the broader mule structure. Manual research is slow, inconsistent, and unlikely to surface connections at scale.',
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
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Solves It</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Graph-Native Detection for Connected Mule Networks
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects the signals that mule networks leave across accounts, devices, identities, and transactions - building a real-time graph that exposes network structure and enables earlier detection. Investigation context is assembled automatically, giving fraud and AML teams the network evidence they need to act faster and document cases in a way that supports SAR filing and regulatory review.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Entity Resolution', body: 'Resolve identities across accounts, devices, phone numbers, addresses, and behavioural signals - building unified entity profiles that persist across the mule network graph.' },
                { step: '02', title: 'Relationship Mapping', body: 'Map the connections between resolved entities - account-to-account relationships, shared device links, common identity attributes - into a living graph updated in real time.' },
                { step: '03', title: 'Network Clustering', body: 'Group connected entities into mule network clusters - surfacing the full structure of coordinated account relationships that transaction monitoring cannot see.' },
                { step: '04', title: 'Connected Transaction Analysis', body: 'Trace money movement across linked accounts within the graph - identifying layering patterns, structured flows, and cross-account coordination invisible to event-level monitoring.' },
                { step: '05', title: 'Cross-System Investigation Context', body: 'Aggregate fraud and AML signals from across systems into a unified investigation view - giving analysts the complete network picture without manual platform-switching.' },
                { step: '06', title: 'Continuous Network Monitoring', body: 'The graph is continuously updated as new signals arrive - enabling ongoing monitoring of known mule clusters and early detection of emerging network structures.' },
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

      {/* ── 5. CORE CAPABILITIES ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Core Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Core Mule Account Detection Capabilities
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Linked Account Discovery',
                body: 'Identify hidden account-to-account relationships across shared attributes, transaction patterns, and behavioural signals - surfacing mule network structures before they escalate.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>),
                title: 'Shared Device and Identity Analysis',
                body: 'Connect accounts through shared devices, phone numbers, IP addresses, and identity attributes - revealing the linkages that define coordinated mule account structures.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>),
                title: 'Network Clustering',
                body: 'Group connected accounts and entities into mule network clusters - exposing the full coordinated structure and enabling network-level risk assessment across your portfolio.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>),
                title: 'Connected Transaction Analysis',
                body: 'Trace money movement across linked accounts within the graph - identifying layered flows, structured patterns, and cross-account coordination that event-level monitoring misses.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Cross-System Signal Correlation',
                body: 'Correlate fraud and AML signals from across monitoring systems into a unified intelligence layer - ensuring mule activity detected in one domain informs investigation across both, and that the evidence base is aligned with AML reporting workflows.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Investigation Context for Analysts',
                body: 'Deliver graph-enriched investigation context alongside every mule-related alert - so analysts see the network structure, related accounts, and money movement patterns from the start.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
          {/* CHANGE: Section footer link to the mule use case page */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/use-cases/mule-network-detection" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              See mule network detection use case
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. OUTCOMES / BUSINESS IMPACT ───────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Business Impact</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Outcomes Enabled by Mule Account Detection
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>),
                title: 'Earlier Identification of Mule Networks',
                body: 'Graph-native detection surfaces coordinated mule account structures earlier in the money movement lifecycle - enabling intervention before funds are layered and losses escalate.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Better Visibility Into Connected Suspicious Activity',
                body: 'Relationship mapping and network clustering give fraud and AML teams a complete view of connected suspicious activity - across accounts, devices, and payment channels - in a single investigation view.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Reduced Manual Investigation Effort',
                body: 'Pre-assembled network context and alert clustering reduce the time analysts spend manually reconstructing mule network structures - compressing investigation cycles across fraud and AML teams.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Improved Prioritisation of Network-Based Risk',
                body: 'Network-level risk scoring ensures investigation queues are prioritised by the size, connectivity, and behavioural risk of the mule cluster - not just the score of an individual transaction.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Stronger Coordination Between Fraud and AML Teams',
                body: 'A unified intelligence layer connecting fraud and AML signals enables both teams to act on the same network-level view - improving coordination, reducing duplication, and strengthening SAR quality.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Faster SAR Filing and Regulatory Response',
                body: 'Graph-enriched investigation context accelerates the SAR filing process - giving compliance teams the network evidence and documentation they need to file confidently and on time.',
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
        Mule account detection is a primary concern for banks and payment processors
        specifically; these are the two highest-intent segments for this solution.
        Fintech platforms are included as a third segment given their exposure to
        mule risk through embedded payment infrastructure.
      */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Built For</p>
          <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Mule Account Detection Across Financial Institution Types
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
                <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: '0.875rem' }}>The graph-native detection layer that surfaces hidden entity relationships across your entire fraud and AML data estate.</p>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)' }}>Explore →</span>
              </div>
            </Link>
            <Link href="/solutions/investigation-intelligence" style={{ textDecoration: 'none' }}>
              <div className="card card-hover" style={{ padding: '1.75rem', cursor: 'pointer' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Solution</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>Investigation Intelligence</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: '0.875rem' }}>Structured, context-rich investigations that move fraud and AML teams from alert overload to faster case resolution.</p>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)' }}>Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Replaced <CTA /> component with controlled inline band.
        Secondary button links to /use-cases/mule-network-detection - the use case
        page that is the direct companion to this solution page.
      */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            See Mule Account Detection in Action
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Mule networks generate direct AML exposure - missed SAR obligations, delayed account action, and documentation gaps that cannot support regulatory review. See how Verafye connects the signals to surface them earlier.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/use-cases/mule-network-detection" className="btn-secondary">See the Use Case</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>

    </>
  );
}

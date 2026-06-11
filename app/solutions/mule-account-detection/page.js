import Link from 'next/link';
import SplitHeroWithVisualCard, { MuleAccountVisualCard } from '../../../components/SplitHeroWithVisualCard';

export const metadata = {
  title: "Mule Account Detection Platform | Stop Fraud Networks",
  description: "Mule account detection platform to identify money mule activity early. Stop financial crime, manage regulatory risk, and ensure AML compliance faster.",
  openGraph: {
    title: "Mule Account Detection Platform | Stop Fraud Networks",
    description: "Mule account detection platform to identify money mule activity early. Stop financial crime, manage regulatory risk, and ensure AML compliance faster.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mule Account Detection Platform | Stop Fraud Networks",
    description: "Mule account detection platform to identify money mule activity early. Stop financial crime, manage regulatory risk, and ensure AML compliance faster.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/solutions/mule-account-detection',
  },
};

export default function MuleAccountDetectionPage() {
  return (
    <>

      {/* ── 1. HERO - Option 1: Split Hero with Visual Card (approved) ────── */}
      <SplitHeroWithVisualCard
        eyebrow="MULE ACCOUNT DETECTION"
        title="Mule account detection with connected risk signals"
        description="Connect account, identity, device, transaction, counterparty, and behavior signals to identify suspicious mule activity faster."
        body="Verafye helps teams detect and investigate mule account patterns by linking fragmented signals into case-ready context and graph-based relationship views."
        primaryCTA={{ label: 'Request Demo', href: '/request-demo' }}
        secondaryCTA={{ label: 'Explore Graph Intelligence', href: '/solutions/graph-intelligence' }}
        visualCard={<MuleAccountVisualCard />}
      />

      {/* ── 2. PROBLEM STATEMENT ────────────────────────────────────────────── */}
      {/*
        CHANGE: "Cross-Domain Risk Signals" bullet now links to /solutions/graph-intelligence -
        the correct destination for a reader who wants to understand how Verafye
        connects fraud and AML signals that are currently in separate systems.
        "Coordinated Money Movement" links to /use-cases/transaction-monitoring.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
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
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
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
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Solves It</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Connected Signal Detection for Mule Networks
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects mule-linked signals across accounts, devices, identities, beneficiaries, and transactions, helping risk teams review suspicious relationship patterns with structured case context and evidence trails. Fraud and AML teams get the network evidence they need to act faster and document cases in a way that supports structured review and regulatory reporting.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Entity Resolution', body: 'Resolve identities across accounts, devices, phone numbers, addresses, and behavioural signals - building resolved entity profiles that persist across the mule network graph.' },
                { step: '02', title: 'Relationship Mapping', body: 'Map the connections between resolved entities - account-to-account relationships, shared device links, common identity attributes - into a structured relationship view updated as new signals arrive.' },
                { step: '03', title: 'Network Clustering', body: 'Group connected entities into mule network clusters - surfacing the full structure of coordinated account relationships that transaction monitoring cannot see.' },
                { step: '04', title: 'Connected Transaction Analysis', body: 'Trace money movement across linked accounts within the graph - identifying layering patterns, structured flows, and cross-account coordination invisible to event-level monitoring.' },
                { step: '05', title: 'Cross-System Investigation Context', body: 'Aggregate fraud and AML signals from across systems into one connected investigation view - giving analysts the complete network picture without manual platform-switching.' },
                { step: '06', title: 'Ongoing Network Monitoring', body: 'As new signals arrive and are connected, risk teams can continue monitoring known mule clusters and review emerging relationship patterns with updated case context.' },
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
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Core Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Core Mule Account Detection Capabilities
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Account behavior context',
                body: 'Connect account activity with device, identity, transaction, and behavioral signals.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>),
                title: 'Relationship visibility',
                body: 'Reveal connections between accounts, beneficiaries, counterparties, devices, and entities.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>),
                title: 'Case-ready mule indicators',
                body: 'Cluster related activity into cases that help analysts investigate faster.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Audit-ready review trails',
                body: 'Capture evidence, notes, decision history, and graph context for review.',
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
      <section style={{ padding: '4rem 0', background: '#fff' }}>
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
                body: 'One connected network view linking fraud and AML signals enables both teams to act on the same network-level view - improving coordination, reducing duplication, and strengthening SAR quality.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Structured Documentation for Regulatory Response',
                body: 'Graph-enriched investigation context helps compliance teams build structured, evidence-backed documentation for regulatory reporting - with network evidence and case records that support review and response workflows.',
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
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
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
            <Link href="/industries/digital-banks" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Digital Banks &amp; Neo Banks
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
        Secondary button links to /use-cases/mule-network-detection - the use case
        page that is the direct companion to this solution page.
      */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            See how suspected mule-linked patterns become investigation-ready cases
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            See how suspected mule-linked patterns can be connected into investigation-ready cases - with evidence trails, reviewer controls, and audit-ready records built on the Verafye platform. Start with a scoped pilot on agreed data feeds, then expand into Verafye-led investigation workflows as outcomes are proven.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/solutions/graph-intelligence" className="btn-secondary">Explore Graph Intelligence</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>

    </>
  );
}

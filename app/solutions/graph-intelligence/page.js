import Link from 'next/link';
import SplitHeroWithVisualCard, { GraphIntelligenceVisualCard } from '../../../components/SplitHeroWithVisualCard';

export const metadata = {
  title: "Detect Hidden Fraud Networks with Graph Intelligence",
  description: "Uncover hidden relationships across accounts, devices and transactions to detect fraud rings, AML risks and financial crime networks faster.",
  keywords: ["graph intelligence", "fraud network analysis", "entity resolution", "relationship analytics", "graph analytics platform", "fraud ring detection"],
  openGraph: {
    title: "Detect Hidden Fraud Networks with Graph Intelligence | Verafye",
    description: "Uncover hidden relationships across accounts, devices and transactions to detect fraud rings, AML risks and financial crime networks faster.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Detect Hidden Fraud Networks with Graph Intelligence | Verafye",
    description: "Uncover hidden relationships across accounts, devices and transactions to detect fraud rings, AML risks and financial crime networks faster.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/solutions/graph-intelligence',
  },
};

export default function GraphIntelligencePage() {
  return (
    <>

      {/* ── 1. HERO - Option 1: Split Hero with Visual Card (approved) ────── */}
      <SplitHeroWithVisualCard
        eyebrow="GRAPH INTELLIGENCE"
        title="Graph intelligence for connected financial crime investigations"
        description="Reveal hidden relationships across users, accounts, merchants, devices, transactions, counterparties, and entities."
        body="Verafye uses graph intelligence to help risk teams see how alerts, entities, and behaviors connect - turning isolated events into network-level investigation context."
        primaryCTA={{ label: 'Request Demo', href: '/request-demo' }}
        secondaryCTA={{ label: 'Explore Platform', href: '/platform' }}
        visualCard={<GraphIntelligenceVisualCard />}
      />

      {/* ── 2. PROBLEM STATEMENT ────────────────────────────────────────────── */}
      {/*
        CHANGE: "Mule Networks" bullet now links to /solutions/mule-account-detection.
        "Synthetic Identity" links to /use-cases/mule-network-detection.
        These are the two most specific downstream pages for a reader who wants
        to go deeper on either threat type mentioned here.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>The Problem</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Isolated Monitoring Cannot See Coordinated Financial Crime
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Traditional monitoring evaluates events in isolation. Modern fraud, mule activity, synthetic identity abuse, and layered AML typologies operate across connected entities, devices, accounts, and behaviors - deliberately structured to stay below the thresholds that rule-based systems monitor. The result is fragmented detection, incomplete investigations, and growing pressure to demonstrate the cross-system visibility that regulators increasingly expect.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  label: 'Fraud Rings',
                  desc: 'Coordinated actors sharing devices, IPs, and account credentials across institutions',
                  href: null,
                },
                {
                  label: 'Mule Networks',
                  desc: 'Layered money movement across accounts with shared behavioral and relationship patterns',
                  href: '/solutions/mule-account-detection',
                },
                {
                  label: 'Synthetic Identity',
                  desc: 'Fabricated identities linked by shared attributes, devices, and application patterns',
                  href: '/use-cases/mule-network-detection',
                },
                {
                  label: 'Layered AML',
                  desc: 'Complex typologies that span multiple transactions, entities, and time windows',
                  href: '/use-cases/transaction-monitoring',
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
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Legacy Stacks Fall Short</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Rule-Based Monitoring Misses Connected Risk
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>),
                gradient: 'gradient-bg-1',
                title: 'Transaction-by-Transaction Scoring',
                body: 'Point-in-time scoring evaluates individual events without awareness of the network connecting them. Coordinated schemes deliberately stay below individual thresholds - visible only when signals are connected across entities and time.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" x2="12" y1="12" y2="16"/><line x1="10" x2="14" y1="14" y2="14"/></svg>),
                gradient: 'gradient-bg-2',
                title: 'Fragmented Fraud and AML Signals',
                body: 'Fraud and AML teams operate on separate platforms with separate alert queues. Cross-domain connections remain invisible - and neither team sees the full picture of risk the data already contains.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>),
                gradient: 'gradient-bg-3',
                title: 'Investigation Without Relationship Context',
                body: 'Analysts review individual alerts with no access to entity relationships or network structure. Each case requires manual research to surface connections that connected signal intelligence can help bring into view.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>),
                gradient: 'gradient-bg-4',
                title: 'Coordinated Activity Appears Low-Risk in Isolation',
                body: 'Each individual transaction or account within a fraud network may score low risk on its own. Only when viewed as a connected structure does the coordinated scheme become visible - which is why connecting signals across entities and time is essential.',
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
                A Graph-Native Intelligence Layer for Financial Crime Operations
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects fraud, AML, and payments signals into one connected network view - resolving entities, mapping relationships, and surfacing network risk across accounts and time windows. This gives institutions the connected view of risk that fragmented monitoring cannot provide, and the traceable detection that aligns with evolving regulatory expectations for cross-domain visibility.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { step: '01', title: 'Entity Resolution', body: 'Verafye resolves identities across fragmented data sources - linking accounts, devices, phone numbers, addresses, and behavioral fingerprints into resolved entity profiles.' },
                { step: '02', title: 'Relationship Mapping', body: 'Every resolved entity is connected to others through shared attributes and transaction history, building a structured relationship map across accounts, devices, and entities.' },
                { step: '03', title: 'Link Discovery', body: 'Verafye surfaces non-obvious links across connected entities - connections that are invisible to rules engines and siloed monitoring systems.' },
                { step: '04', title: 'Network Clustering', body: 'Connected entities are grouped into clusters - revealing fraud rings, mule networks, and synthetic identity cohorts operating across accounts and payment rails.' },
                { step: '05', title: 'Graph-Based Investigation Context', body: 'Alerts are enriched with relationship context from the graph, giving investigators the network view they need to make faster, higher-confidence decisions.' },
                { step: '06', title: 'Connected Network View', body: 'Fraud, AML, and payments signals are connected into one network view - eliminating the blind spots that form at system boundaries, and supporting the cross-domain visibility that institutions need to operate under evolving regulatory expectations.' },
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
      {/*
        CHANGE: Added "View all capabilities →" link at section footer pointing to /capabilities.
        Gives visitors who want the full feature inventory a clear path without
        disrupting the reading flow of the capability cards themselves.
      */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Core Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Core Graph Intelligence Capabilities
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Entity relationship mapping',
                body: 'Connect users, accounts, merchants, devices, counterparties, beneficiaries, UBOs, and transaction flows into reviewer-friendly relationship context that supports investigation case building.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Network-level case context',
                body: 'Provide analysts with reviewer-friendly graph context - showing how isolated alerts connect into broader suspicious activity patterns, with relationship paths and supporting evidence preserved inside investigation workflows.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
                title: 'Hidden pattern discovery',
                body: 'Surface mule networks, suspicious payment flows, beneficiary-linked risk, synthetic identity rings, merchant risk, and related behavior patterns across connected entities.',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>),
                title: 'Explainable graph evidence',
                body: 'Preserve relationships, paths, and supporting evidence inside investigation workflows.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
          {/* CHANGE: Section footer link to /capabilities - natural exit for visitors
              who want the complete capability inventory beyond graph intelligence alone. */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/capabilities" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              View all platform capabilities
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
              Outcomes Enabled by Graph Intelligence
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>),
                title: 'Earlier Detection of Coordinated Fraud Networks',
                body: 'Connected signal intelligence helps surface coordinated schemes earlier - connecting signals across accounts, devices, and time windows that point-in-time scoring misses.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>),
                title: 'Better Alert Prioritization Through Relationship Context',
                body: 'Alerts enriched with graph context allow investigators to prioritize by network risk - focusing effort on the highest-impact clusters first.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Reduced Investigation Workload',
                body: 'Alert clustering and graph-enriched context reduce the time analysts spend on manual research - consolidating related alerts into prioritized investigation queues.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>),
                title: 'Visibility Into Mule and Synthetic Identity Patterns',
                body: 'Graph clustering reveals mule account networks and synthetic identity cohorts that share attributes, devices, and behavioral patterns across your portfolio.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Stronger Cross-System Intelligence for Fraud and AML',
                body: 'Connected fraud and AML signal intelligence eliminates blind spots at system boundaries - giving compliance and operations teams a complete picture of risk across the institution.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Faster Time-to-Investigate',
                body: 'Pre-built relationship context and network clusters reduce the time from alert generation to meaningful investigation - compressing triage cycles across fraud and AML operations.',
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
        Graph intelligence is relevant to all three customer segments; making that
        explicit gives mid-funnel visitors a path to the page most relevant to them,
        improving both engagement depth and internal link equity.
      */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Built For</p>
          <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Graph Intelligence Across Financial Institution Types
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
      {/*
        CHANGE: New section - no cross-links between solution pages existed anywhere.
        A visitor who has finished reading Graph Intelligence has no prompt to explore
        Investigation Intelligence or Mule Account Detection, both of which are
        natural next steps in understanding the full Verafye platform.
      */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '2rem' }}>Related Solutions</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '56rem', margin: '0 auto' }}>
            <Link href="/solutions/investigation-intelligence" style={{ textDecoration: 'none' }}>
              <div className="card card-hover" style={{ padding: '1.75rem', cursor: 'pointer' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Solution</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>Investigation Intelligence</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: '0.875rem' }}>Move from alert overload to structured, context-rich investigations that resolve faster.</p>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Explore →
                </span>
              </div>
            </Link>
            <Link href="/solutions/mule-account-detection" style={{ textDecoration: 'none' }}>
              <div className="card card-hover" style={{ padding: '1.75rem', cursor: 'pointer' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Solution</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>Mule Account Detection</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: '0.875rem' }}>Detect coordinated mule networks earlier using graph-native relationship analysis.</p>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Explore →
                </span>
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
        CHANGE: Replaced <CTA /> component with inline band.
        Heading is specific to this page's subject matter.
        Secondary button links to Mule Account Detection - the most logical
        next solution for a visitor who has engaged with graph intelligence content.
      */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Use graph intelligence to see what isolated alerts miss
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Explore how hidden relationships across accounts, merchants, beneficiaries, devices, identities, and transactions become reviewer-friendly investigation context - built into investigation-ready workflows on the Verafye platform.
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

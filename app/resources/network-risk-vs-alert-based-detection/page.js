import Link from 'next/link';

export const metadata = {
  title: "Why Alert-Based Detection Misses Network-Level Fraud Risk | Verafye",
  description: "Alert-based detection generates outputs, not investigations. Learn why network-level risk requires graph intelligence to connect entities, accounts, and behaviors into investigation-ready cases.",
  keywords: ["network risk detection", "alert-based fraud detection limitations", "graph intelligence fraud", "network-level aml", "fraud investigation platform", "connected risk detection"],
  openGraph: {
    title: "Why Alert-Based Detection Misses Network-Level Fraud Risk | Verafye",
    description: "Alert-based detection generates outputs, not investigations. Learn why network-level risk requires graph intelligence to connect entities, accounts, and behaviors into investigation-ready cases.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Alert-Based Detection Misses Network-Level Fraud Risk | Verafye",
    description: "Alert-based detection generates outputs, not investigations. Learn why network-level risk requires graph intelligence to connect entities, accounts, and behaviors into investigation-ready cases.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/resources/network-risk-vs-alert-based-detection',
  },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const relatedResources = [
  {
    title: 'Mule Account Investigations: Why Connected Signals Matter',
    category: 'Use Case Deep Dives',
    readingTime: '7 min read',
    href: '/resources/mule-account-investigations-connected-signals/',
    ctaLabel: 'Explore Use Case',
  },
  {
    title: 'Why Fraud and AML Investigations Break Down in Payment Platforms',
    category: 'Industry Insights',
    readingTime: '6 min read',
    href: '/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/',
    ctaLabel: 'Read Insight',
  },
  {
    title: 'The Missing Layer in Modern Financial Crime Investigations',
    category: 'Product Insights',
    readingTime: '5 min read',
    href: '/resources/what-is-investigation-intelligence/',
    ctaLabel: 'Read Article',
  },
];

const BulletList = ({ items }) => (
  <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.25rem' }}>
    {items.map(item => (
      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
        <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
        <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
      </div>
    ))}
  </div>
);

export default function ArticlePage() {
  return (
    <>
      {/* BREADCRUMB */}
      <section style={{ background: '#fff', padding: '1.5rem 0 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/resources/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Resources</Link>
            <span>/</span>
            <span style={{ color: 'var(--body)' }}>Why Alert-Based Detection Misses Network-Level Fraud Risk</span>
          </nav>
        </div>
      </section>

      {/* ARTICLE HEADER */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 70%)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '4px', padding: '0.25rem 0.625rem' }}>
                Industry Insights
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>8 min read</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>July 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              Why Alert-Based Detection Misses Network-Level Fraud Risk
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem', marginLeft: 0 }}>
              Alert-based fraud and AML systems generate outputs — transaction scores, rule triggers, threshold breaches. What they rarely generate is an investigation. And in that gap between alert and investigation, coordinated fraud networks operate largely undetected.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              The problem is structural. Alert-based detection is designed to evaluate individual events — a transaction, a login, an onboarding record — against a rule or a threshold. That works well for catching isolated incidents. It works poorly when the fraud or AML risk is distributed across multiple accounts, entities, corridors, or time windows.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Network-level risk does not present as a single alert. It presents as a pattern — and patterns require connected signals, not just event scores.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              What Alert-Based Detection Does Well — And Where It Stops
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Alert-based systems have a specific job: flag transactions or behaviors that exceed defined risk parameters. They do this efficiently and at scale. Rule engines, velocity checks, threshold monitors, and ML-based transaction scoring all operate on the same basic principle — evaluate an event in context and decide whether it warrants attention.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Where these systems stop is at the edges of the event. Once an alert is generated, it becomes an item in a queue. What it does not become — automatically — is a case with connected context. Investigators must then:
            </p>
            <BulletList items={[
              'Manually pull transaction history from payment systems.',
              'Check identity records and onboarding data separately.',
              'Look up device and IP patterns in a different tool.',
              'Cross-reference beneficiaries and counterparties across systems.',
              'Search for prior alerts or SARs linked to the same entities.',
              'Determine whether related alerts exist for connected accounts.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              For an isolated incident, this process is manageable. For a coordinated fraud pattern touching dozens of accounts, beneficiaries, and corridors, it becomes a bottleneck that delays decisions, increases analyst workload, and creates missed connections.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              What Network-Level Risk Actually Looks Like
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Coordinated fraud and financial crime rarely operates through a single account or a single transaction. Network-level risk tends to be distributed by design — spreading activity across multiple participants to stay under detection thresholds and avoid pattern recognition.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Patterns that alert-based systems commonly miss include:
            </p>
            <BulletList items={[
              'Multiple accounts controlled by a shared identity or device cluster, each operating below alert thresholds individually.',
              'Mule rings where receiving accounts are linked through shared beneficiary details, phone numbers, or addresses.',
              'Structuring across multiple senders to the same destination, spread over time to avoid velocity rules.',
              'Merchant fraud where chargebacks, disputes, and settlement patterns are connected across seemingly unrelated merchant accounts.',
              'AML typologies that span both fraud and AML detection systems — appearing as isolated alerts in each, but visible as a linked pattern when combined.',
              'Account takeover campaigns that share device fingerprints or login patterns across multiple victims.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              None of these patterns are invisible. The signals are there — in transaction logs, device data, identity records, beneficiary chains, prior cases. The issue is that they are fragmented across systems that were not designed to share context.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              The Investigation Gap: From Alert to Case
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The distance between an alert and an investigation-ready case is where most financial crime teams are losing capacity. Alert volumes are high. Investigation resources are limited. And the manual work required to turn an alert into structured case context consumes hours of analyst time per case.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The consequence is not just speed. It is coverage. When investigators cannot quickly connect related alerts and signals, they tend to close or deprioritize cases that appear isolated but are actually linked. A coordinated ring may generate a dozen alerts across different accounts, all of which get reviewed individually and none of which get escalated as a connected network.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              This is where the structural limitation of alert-based detection becomes operationally significant. More alerts does not mean better coverage. It means more queue — unless there is a layer that connects those alerts into cases.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Graph Intelligence: Detecting at the Relationship Level
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Graph-native risk analysis takes a different starting point. Instead of evaluating individual events, it maps relationships across entities — accounts, users, devices, merchants, beneficiaries, counterparties — and looks for connections that single-event analysis cannot surface.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              In a graph model, accounts that share a device, an IP range, a beneficiary, or a prior case history become connected nodes. Transactions that flow through the same beneficiary chain across time become visible as a pattern. Alerts that appear unrelated in a queue become grouped into a network cluster.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The result is that coordinated risk — the kind that stays below alert thresholds by distributing activity — becomes visible at the network level even when it is invisible at the transaction level.
            </p>
            <BulletList items={[
              'Entity resolution links accounts, identities, and devices that share attributes across sources.',
              'Relationship mapping surfaces indirect connections — accounts linked through shared beneficiaries, not just direct transfers.',
              'Alert clustering groups related signals from fraud, AML, and payment systems into connected case context.',
              'Network scoring allows prioritization based on the risk of a connected cluster, not just individual transaction scores.',
            ]} />

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              What Changes When Teams Investigate at the Network Level
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              For financial crime teams — particularly lean teams managing high investigation volumes — the shift from alert-level to network-level investigation changes the operational picture in several ways:
            </p>
            <BulletList items={[
              'Related alerts are grouped, so investigators review connected cases rather than isolated events.',
              'Entity and relationship context arrives with the case, reducing the manual data-gathering step.',
              'Coordinated patterns become visible earlier, allowing escalation before a fraud ring has fully exploited the platform.',
              'SAR quality improves because investigators have a connected evidence trail rather than a single-transaction view.',
              'Case closure rates improve because investigators can make supported decisions rather than relying on incomplete context.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              This does not require replacing existing detection systems. Alert-based tools continue to generate the signals. What changes is the layer above them — the one that connects those signals into cases that investigators can actually work from.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              How Verafye Supports Network-Level Investigation
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye is built on a graph-native architecture that connects fraud, AML, payment, identity, device, and behavioral signals across regulated payment platforms — and turns them into investigation-ready cases. It does not replace existing fraud or AML detection systems. It sits above them, connecting their outputs into a shared investigation layer.
            </p>
            <BulletList items={[
              'Resolves entities across data sources to surface shared accounts, devices, identities, and beneficiaries.',
              'Clusters related alerts from fraud and AML systems into connected case context.',
              'Surfaces hidden network relationships that do not appear in single-event alert queues.',
              'Provides analysts with structured case context, risk summaries, and suggested investigation steps.',
              'Maintains audit-ready evidence trails and decision records for regulatory examination.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              For PSPs, MSBs, remittance platforms, and digital banks running lean risk teams, the ability to move from fragmented alerts to connected investigations is where investigation capacity is actually recovered.
            </p>

            <div style={{ background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '0.75rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Key Takeaway</p>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 500, marginBottom: '0.75rem' }}>
                Alert-based detection is a necessary foundation — but it is not sufficient for detecting coordinated, network-level financial crime. The patterns that matter most are the ones that exist between events, not within them.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                Adding a graph-native investigation layer above existing detection systems allows teams to connect signals into cases — without replacing the tools that generate them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SOFT CTA */}
      <section style={{ background: 'var(--bg-blue)', borderTop: '1px solid rgba(30,111,183,0.1)', borderBottom: '1px solid rgba(30,111,183,0.1)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem', letterSpacing: '-0.015em' }}>
                See network-level risk intelligence in action
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Verafye connects your existing alert signals into graph-native, investigation-ready cases — without replacing your current detection stack.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/risk-shadowing-review" className="btn-primary">Explore Risk Shadowing Review</Link>
              <Link href="/platform/" className="btn-secondary">Explore Platform</Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Related Resources</p>
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.015em' }}>
              Continue reading
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(18rem,1fr))', gap: '1.5rem' }}>
              {relatedResources.map(r => (
                <Link key={r.title} href={r.href} style={{ textDecoration: 'none', display: 'block' }} className="card-hover">
                  <div className="card card-elevated" style={{ padding: '1.75rem' }}>
                    <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{r.category}</p>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.35 }}>{r.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>{r.readingTime}</span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>{r.ctaLabel} {ARROW}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/resources/" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
                Back to all resources {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

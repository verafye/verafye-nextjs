import Link from 'next/link';

export const metadata = {
  title: "PSP and PayFac Risk Intelligence",
  description: "Verafye helps PSPs and PayFacs detect merchant, transaction, and mule-network risk with graph-native intelligence and audit-ready investigations.",
  keywords: ["psp risk intelligence", "payfac fraud detection", "merchant risk monitoring", "transaction laundering detection", "mule-linked merchants", "payment fraud aml"],
  openGraph: {
    title: "PSP and PayFac Risk Intelligence | Verafye",
    description: "Verafye helps PSPs and PayFacs detect merchant, transaction, and mule-network risk with graph-native intelligence and audit-ready investigations.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "PSP and PayFac Risk Intelligence | Verafye",
    description: "Verafye helps PSPs and PayFacs detect merchant, transaction, and mule-network risk with graph-native intelligence and audit-ready investigations.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/industries/payment-processors-psps-payfacs',
  },
};

export default function PaymentProcessorsPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      {/*
        CHANGE: Secondary CTA "Contact Sales → /request-demo" replaced with
        "Explore Platform → /platform".

        CHANGE: Hero body paragraph updated to include both required trust phrases:
        "built for financial institutions and payment platforms" and
        "aligned with evolving regulatory expectations".
      */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>PAYMENT PLATFORMS</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Investigation intelligence for PSPs, PayFacs, processors, and fintechs
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps PSPs, PayFacs, and payment processors detect network-level risk across merchants, accounts, devices, identities, transactions, beneficiaries, and payouts.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps payment platforms detect connected risk patterns across merchants, sub-merchants, beneficiaries, accounts, users, counterparties, and transactions - turning fragmented fraud and AML alerts into investigation-ready cases with evidence packs and audit-ready records your risk team can act on faster. Start with a scoped pilot alongside existing systems and expand network coverage across teams, programs and corridors as outcomes are proven.
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
              The Operational and Risk Pressures PSPs and PayFacs Face
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>),
                title: 'High Transaction Volumes With Evolving Fraud Patterns',
                body: 'PSPs and PayFacs process millions of transactions daily against fraud patterns that continuously evolve - outpacing rules-based detection models that require manual tuning to stay current.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/></svg>),
                title: 'Merchant Risk Across Onboarding, Monitoring, and Payouts',
                body: 'Merchant risk does not end at onboarding. PSPs and PayFacs must monitor merchant behaviour continuously - across transaction patterns, chargeback rates, and payout activity - throughout the full merchant lifecycle.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'False Positives Impacting Approval Rates and Revenue',
                body: 'Overly aggressive fraud controls generate false positives that decline legitimate transactions - directly impacting approval rates, merchant satisfaction, and revenue for PSPs and PayFacs operating on thin margins.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Fragmented Tools Across Fraud, Risk, and Operations',
                body: 'Fraud scoring, merchant risk management, device intelligence, and investigation tools typically operate as separate systems - creating integration overhead, data gaps, and operational inefficiency across risk teams. As payment scheme fraud liability requirements and PCI DSS v4.0 obligations raise the bar for risk infrastructure, fragmented tooling creates increasing exposure.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Manual Investigation Workflows Slowing Response Time',
                body: 'When fraud alerts require manual triage and context gathering before investigation can begin, response times extend - allowing fraud to continue while analysts work to assemble the picture needed to act.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>),
                title: 'Cross-Border Payment Risk, Chargeback-Linked Fraud, and Merchant-Linked Fraud Networks',
                body: 'Cross-border transaction flows, chargeback-linked fraud escalation, and multi-merchant fraud rings create risk patterns that span jurisdictions, payment rails, and institution types - requiring connected intelligence across merchants, beneficiaries, accounts, mule-linked counterparties, and transaction networks that individual-event monitoring cannot provide.',
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
              Why Traditional Fraud Stacks Fall Short for PSPs and PayFacs
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>),
                title: 'Transaction-Level Scoring Misses Network-Based Fraud',
                body: 'Point-in-time transaction scoring cannot see coordinated fraud networks operating across merchants, devices, and accounts. Organised fraud rings deliberately structure activity to stay below individual transaction thresholds - invisible to event-level models.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>),
                title: 'Merchant and Transaction Risk Handled Separately',
                body: 'Merchant risk management and transaction fraud tools operate in separate systems with separate teams - preventing the cross-domain analysis that reveals when merchant-level risk patterns connect to individual transaction fraud.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Signals Across Systems Remain Disconnected',
                body: 'Device intelligence, behavioural signals, transaction data, and merchant attributes are rarely connected into a shared intelligence layer - leaving cross-signal patterns that indicate coordinated fraud undetected across the stack.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Scaling Requires More Analysts, Not Better Intelligence',
                body: 'As transaction volumes grow, alert volumes grow proportionally - and traditional stacks respond by adding analyst headcount rather than improving the intelligence that would reduce alert noise and accelerate investigation.',
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

      {/* ── 4. HOW VERAFYE FITS ──────────────────────────────────────────────── */}
      {/*
        CHANGE: Steps 02 and 03 now carry inline solution page links directly
        beneath the step body - same pattern as banks page, giving visitors
        a product exploration path from within the "how it fits" explanation.
      */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Fits</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Network Risk Intelligence for Payment Operations
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects merchant, sub-merchant, beneficiary, account, transaction, device and behavioral signals into one connected network view - delivering graph-based detection, alert clustering, case workflows, evidence packs and audit-ready investigation records across the payment risk lifecycle, without adding operational overhead.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>01</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Connected Merchant, Transaction, Device, and Behavioral Signals</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Verafye unifies merchant risk signals, transaction data, device intelligence, and behavioural patterns into one connected layer - enabling cross-domain detection that individual point solutions cannot provide.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>02</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Graph-Based Fraud Detection</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>A graph-native intelligence layer connects entities across merchants, devices, accounts, and transactions - surfacing coordinated fraud rings, card testing networks, and synthetic merchant schemes that transaction-level scoring misses.</p>
                <Link href="/solutions/graph-intelligence" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  See Graph Intelligence <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>03</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Investigation-Centric Workflows</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>Fraud alerts are clustered and enriched with relationship context before reaching the analyst - reducing manual context gathering, accelerating triage, and enabling faster, higher-confidence decisions across the risk operations team.</p>
                <Link href="/solutions/investigation-intelligence" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  See Investigation Intelligence <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>04</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Full Lifecycle Coverage Aligned With Regulatory Requirements</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Verafye consumes the KYB and identity signals your existing systems already produce and applies them after onboarding - across ongoing transaction monitoring, payout risk assessment and suspicious flow escalation - with case workflows, evidence packs, reviewer controls and audit-ready records aligned with evolving regulatory expectations, including payment scheme rules and PCI DSS v4.0 documentation requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. RELEVANT CAPABILITIES ────────────────────────────────────────── */}
      {/*
        CHANGE: "Learn more" labels replaced with specific CTA labels on all cards.
        CHANGE: "Network Fraud Detection" now links to /solutions/graph-intelligence.
        CHANGE: "Cross-System Signal Aggregation" now links to /platform.
        CHANGE: "Merchant Risk Monitoring" and "Transaction and Behavioral Analysis"
        now link to /use-cases/transaction-monitoring - the closest use-case page.
        CHANGE: Use-case ghost buttons added at section footer.
      */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Relevant Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Capabilities Built for Payment Risk Operations
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Cross-merchant signal aggregation',
                body: 'Bring together payment, merchant, sub-merchant, beneficiary, account, mule, user, counterparty, fraud, and AML signals in one investigation layer - supporting both fraud and AML alert context for payment risk operations.',
                href: '/platform',
                cta: 'View Platform',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>),
                title: 'Alert clustering',
                body: 'Group related alerts and activities across programs, merchants, entities, and payment flows.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Graph intelligence',
                body: 'Reveal hidden links across merchants, devices, accounts, transactions, counterparties, and suspicious networks.',
                href: '/solutions/graph-intelligence',
                cta: 'Explore Graph Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Investigation workflows & evidence packs',
                body: 'Support case creation, review queues, analyst assignment, reviewer controls, evidence attachment, decision recording, and audit-ready investigation trails for payment fraud and AML operations.',
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

          {/* CHANGE: Use-case links - payment processors page had no use-case links at all. */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <Link href="/use-cases/transaction-monitoring" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Transaction Monitoring <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/use-cases/mule-network-detection" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Mule Network Detection <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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
              Outcomes for Payment Risk Operations
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>),
                title: 'Improved Fraud Detection Across Connected Activity',
                body: 'Graph-native detection surfaces coordinated fraud networks, card testing rings, and synthetic merchant schemes that transaction-level models miss - improving detection coverage without increasing false positive rates.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Better Approval Rates With Reduced False Positives',
                body: 'Smarter risk scoring grounded in network context and cross-system signals reduces false positive rates - improving approval rates, protecting merchant revenue, and reducing friction for legitimate customers.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
                title: 'Faster Investigation Times',
                body: 'Pre-assembled case context and alert clustering reduce the time from fraud alert to analyst decision - enabling faster account action, dispute resolution, and merchant intervention across the risk operations team.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Reduced Operational Overhead',
                body: 'Connected intelligence and structured investigation workflows reduce the manual effort per case - enabling risk operations teams to manage growing transaction volumes without proportional growth in analyst headcount.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Better Visibility Into Merchant and Network Risk',
                body: 'Continuous merchant monitoring connected to transaction and network intelligence gives PSPs and PayFacs a complete, real-time picture of merchant risk - enabling proactive intervention before exposure escalates.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Better Visibility Across Merchant, Transaction, and Account Risk',
                body: 'One connected network view linking merchant profiles, transaction signals, and account behaviour gives risk operations a complete, real-time picture of exposure - enabling more informed decisions on merchant intervention, account action, and escalation across the PSP and PayFac risk stack.',
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
      {/* CHANGE: New section - no cross-links between industry pages existed. */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Also Serving</p>
          <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Verafye Across Financial Institution Types
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, maxWidth: '40rem', margin: '0 auto 2rem' }}>Verafye supports fraud and AML operations for regulated payment ecosystems - start with a scoped pilot alongside existing systems and expand network coverage across teams, programs and corridors as outcomes are proven.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <Link href="/industries/banks" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Banks <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/industries/fintech-platforms" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Fintech Platforms <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────────────────────── */}
      {/* CHANGE: Replaced <CTA /> with controlled inline band. */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            See How Verafye Supports Payment Risk Operations
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Connect transaction, merchant, beneficiary, account, mule, identity, device, and behavior signals from existing systems into investigation-ready workflows built on the Verafye platform.
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

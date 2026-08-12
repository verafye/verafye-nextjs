import Link from 'next/link';

export const metadata = {
  title: "Connected-Risk Intelligence for Payment Fintechs | Verafye",
  description: "Verafye helps wallets, card programs, lending apps, payroll/expense platforms, and multi-product fintechs connect onboarding, account, device, payment, payout, repayment, fraud, and AML signals into investigation-ready intelligence — surfacing account farming, referral abuse, wallet misuse, payout fraud, and cross-product risk patterns.",
  keywords: ["payment fintech fraud detection", "wallet risk intelligence", "prepaid card fraud", "lending app fraud", "referral abuse detection", "account farming fintech", "payout fraud investigation", "fintech aml investigation", "payment app risk intelligence", "fintech investigation workflow"],
  openGraph: {
    title: "Connected-Risk Intelligence for Payment Fintechs | Verafye",
    description: "Verafye helps wallets, card programs, lending apps, payroll/expense platforms, and multi-product fintechs connect onboarding, account, device, payment, payout, repayment, fraud, and AML signals into investigation-ready intelligence.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Connected-Risk Intelligence for Payment Fintechs | Verafye",
    description: "Verafye helps wallets, card programs, lending apps, payroll/expense platforms, and multi-product fintechs connect onboarding, account, device, payment, payout, repayment, fraud, and AML signals into investigation-ready intelligence.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/industries/fintech-platforms',
  },
};

export default function FintechPlatformsPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Fintech Fraud Prevention Solution</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Investigation Intelligence for Payment-Enabled Fintech Platforms
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps wallets, card programs, lending apps, payroll/expense platforms, merchant apps, and multi-product fintechs connect onboarding, account, device, transaction, payment, wallet, payout, repayment, fraud, and AML signals into investigation-ready intelligence.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Surface account farming, referral abuse, synthetic identity, wallet misuse, payout abuse, repayment fraud, and cross-product risk patterns without forcing your team to stitch together fragmented tools manually.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo?intent=risk-shadowing-review" className="btn-primary">
                Request a Risk Shadowing Review
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/platform" className="btn-secondary">Explore Platform</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. IS THIS PAGE FOR YOU? ────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Is This Page For You?</p>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Verafye Is Built for Payment-Enabled Fintechs - Not Just Banks or PSPs
            </h2>
            <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.75 }}>
              This page is for payment-enabled fintech platforms that embed payment rails into their products and operate risk functions that cross fraud, AML, and compliance - but are not necessarily full-service banks, licensed MSBs, or acquiring PSPs.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '1.25rem', maxWidth: '72rem', margin: '0 auto' }}>
            {[
              { title: 'Digital wallets and payment apps', body: 'Consumer and B2B wallets, peer-to-peer payment apps, and multi-currency payment platforms with embedded payment rails and account or wallet structures.' },
              { title: 'Prepaid and card programs', body: 'Prepaid card issuers, virtual card programs, expense card platforms, and any fintech issuing or managing cards with associated account and transaction activity.' },
              { title: 'Lending apps with repayment flows', body: 'Consumer and SMB lending platforms, BNPL products, revenue-based finance platforms, and credit apps where repayment behaviour and loan abuse are material risk vectors.' },
              { title: 'Payroll and expense platforms', body: 'Payroll disbursement platforms, workforce payment tools, and expense management fintechs where payout fraud, account manipulation, and disbursement abuse are operational risks.' },
              { title: 'Merchant apps with embedded payments', body: 'Merchant-facing apps and platforms with embedded payment acceptance, wallet top-ups, or payout disbursement - where merchant account risk intersects with payment fraud.' },
              { title: 'Multi-product fintech platforms', body: 'Fintech platforms offering two or more products across payments, lending, savings, expense, or investment - where cross-product risk patterns span account, payment, wallet, and behavioral signals.' },
            ].map(item => (
              <div key={item.title} className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SEGMENT CHALLENGES ───────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Segment Challenges</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              The Fraud, Risk, and Investigation Pressures Payment Fintech Platforms Face
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Account Farming, Synthetic Identities, and Referral Abuse at Onboarding',
                body: 'Payment fintech platforms that offer referral bonuses, sign-up incentives, or promotional credit are primary targets for coordinated account farming - where fraudsters open large numbers of accounts using synthetic or manipulated identities to harvest rewards. These cohorts are structurally invisible to onboarding tools that assess each applicant in isolation, without connecting device reuse, identity component overlap, or behavioural similarity across the opening population.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>),
                title: 'Wallet Misuse, Payout Abuse, and Payment Rail Exploitation',
                body: 'Digital wallets and payout-enabled platforms face misuse across the full payment lifecycle - wallet funding from stolen instruments, rapid withdrawal patterns designed to exhaust balances before detection, payout routing to accounts linked to prior fraud, and velocity abuse that exploits platform-level payment limits. These patterns span funding sources, wallet accounts, payout destinations, and device signals in ways that individual transaction-level monitoring cannot connect.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>),
                title: 'Repayment Fraud and Lending Flow Abuse',
                body: 'Lending apps and BNPL platforms face fraud that targets the full loan lifecycle - fraudulent applications using synthetic or stolen identity information, intentional repayment default through account manipulation, and coordinated schemes where multiple accounts are used to extract credit before defaulting simultaneously. Detecting these patterns requires connecting identity, account, device, payment, and repayment signals across the borrower population.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Device Reuse, Velocity Anomalies, and Cross-Product Risk',
                body: 'Fraudsters targeting multi-product fintech platforms exploit the same device, identity, or account across multiple products - a device linked to a flagged wallet account may also appear on a new lending application or expense card. Without cross-product signal linkage, these connections go undetected, allowing the same actor to accumulate exposure across products before any single product\'s monitoring triggers a review.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
                title: 'Account Takeover and Behavioral Signal Gaps',
                body: 'Account takeover on payment fintech platforms exploits session weaknesses, credential stuffing, social engineering, and SIM-swap attacks - with the goal of initiating payments, changing payout destinations, or draining wallet balances. Detecting ATO requires connecting authentication events, account management changes, device signals, and payment initiation patterns across the account lifecycle, rather than reviewing each signal in isolation.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Small Risk Teams Managing Multi-Product Investigation Complexity',
                body: 'Payment fintech risk teams are frequently small relative to the user base, product complexity, and alert volumes they manage - and are expected to cover onboarding fraud, payment abuse, wallet misuse, payout fraud, and AML review simultaneously. Without structured investigation workflows and pre-assembled case context, alert triage becomes a manual bottleneck that slows response times and produces inconsistent case quality.',
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

      {/* ── 4. WHY TRADITIONAL SYSTEMS FALL SHORT ───────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Traditional Systems Fall Short</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Point Tools Cannot Connect the Lifecycle Risk Picture
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Onboarding, Payment, and Payout Signals Sit in Separate Systems',
                body: 'Onboarding fraud tools, fraud scoring engines, device intelligence platforms, payment monitors, and AML systems each hold a fragment of the risk picture - but none connects account farming at onboarding to wallet misuse at payment to payout abuse at disbursement. Coordinated fraud that spans this lifecycle exploits the gaps between systems that never share signals.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Referral Abuse and Promo Fraud Outpace Rule-Based Detection',
                body: 'Account farming and referral abuse operations adapt quickly to detection rules - splitting operations across device pools, identity pools, and timing patterns to stay below static thresholds. Rule-based detection requires manual tuning to respond to each new variation, creating persistent gaps between when a new pattern is active and when detection catches up.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>),
                title: 'Repayment and Payout Risk Is Invisible Until After Disbursement',
                body: 'For lending apps and payout-enabled platforms, the risk that matters most often manifests after funds have left the platform - in repayment default patterns, payout routing anomalies, and wallet balance manipulation. Systems optimised for onboarding-time or transaction-time detection cannot reliably surface these post-disbursement patterns without connecting the full account and payment lifecycle.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Small Risk Teams Cannot Manually Investigate Cross-Product Patterns at Volume',
                body: 'Fintech risk teams are expected to cover onboarding fraud, payment abuse, AML review, and cross-product risk patterns simultaneously - often with teams far smaller than the investigation workload demands. Manual investigation of each alert, without pre-assembled case context or cross-product signal linkage, creates backlogs, inconsistent case quality, and missed coordinated patterns that are only visible in aggregate.',
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

      {/* ── 5. HOW VERAFYE FITS ──────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Fits</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Investigation Intelligence Built for Payment-Enabled Fintech Platforms
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye connects signals across the full user and payment lifecycle into investigation-ready cases that lean fintech risk teams can act on without manual data gathering. Signal coverage spans onboarding through account activity, payment, repayment, and payout. Verafye can begin with selected data feeds and expand into Verafye-led investigation, evidence, and decision operations as outcomes are proven.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>01</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Connected Lifecycle Signals - Onboarding Through Payment, Payout, and Repayment</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Verafye unifies onboarding, identity, device, account, transaction, payment, wallet, payout, repayment, fraud, and AML signals into a connected investigation context - making the full user and payment lifecycle visible to risk teams rather than fragmented across separate tools.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>02</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Graph-Based Detection of Account Farming, Referral Abuse, Synthetic Identity, and Payout Networks</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>Verafye maps relationships across users, devices, accounts, payments, wallets, payout destinations, and behavioral signals - surfacing account farming cohorts, referral abuse rings, synthetic identity clusters, and cross-product device reuse that transaction-level and rules-based detection does not surface on its own.</p>
                <Link href="/solutions/graph-intelligence" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  See Graph Intelligence <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>03</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Investigation Workflows That Scale With Small Fintech Risk Teams</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>Alerts are clustered and enriched with cross-signal context - onboarding history, device linkage, account relationships, payment flows, and prior case context - before reaching the analyst. Pre-assembled investigation cases reduce manual triage overhead, helping small risk teams manage growing alert volumes without proportional headcount increases.</p>
                <Link href="/solutions/investigation-intelligence" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                  See Investigation Intelligence <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>04</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>Explainable Case Decisions and Audit-Ready Evidence</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>Every investigation produces a structured case record covering alert context, network evidence, analyst decisions, and disposition trail - supporting the explainability and documentation standards that fraud and AML reviewers, compliance teams, and external auditors require.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RELEVANT CAPABILITIES ────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Relevant Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Built for Payment-Enabled Fintech Risk Operations
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Cross-lifecycle signal aggregation',
                body: 'Connect onboarding, identity, device, account, wallet, payment, payout, repayment, fraud, and AML signals across the full user and product lifecycle - making investigation context available from first touch through ongoing account activity.',
                href: '/platform',
                cta: 'View Platform',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Graph-based detection for fintech risk typologies',
                body: 'Surface account farming cohorts, referral abuse rings, synthetic identity clusters, wallet misuse networks, payout fraud patterns, and cross-product device reuse - risk typologies that transaction-level and rule-based detection does not surface on its own.',
                href: '/solutions/graph-intelligence',
                cta: 'Explore Graph Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>),
                title: 'Investigation workflows scaled for small risk teams',
                body: 'Pre-assembled cases with cross-signal context - onboarding history, device linkage, account relationships, payment flows, and prior case records - reduce manual triage so lean fintech risk teams can investigate more with fewer resources.',
                href: '/solutions/investigation-intelligence',
                cta: 'Explore Investigation Intelligence',
              },
              {
                icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>),
                title: 'Audit-ready case records and explainable decisions',
                body: 'Structured case records with alert context, network evidence, analyst decisions, and full disposition trail - supporting the explainability and documentation expectations of fraud, compliance, and audit reviewers without manual case assembly.',
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

      {/* ── 7. OUTCOMES ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Business Impact</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Outcomes for Payment Fintech Risk and Fraud Operations
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>),
                title: 'Better Visibility Across the Full Onboarding, Payment, and Payout Lifecycle',
                body: 'Connect onboarding, account, device, wallet, payment, payout, and repayment signals into one investigation view - closing the visibility gaps that arise when signals are split across separate onboarding, transaction monitoring, and fraud tools with no shared context.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>),
                title: 'Reduced False Positives and User Friction',
                body: 'Investigation decisions grounded in network context and lifecycle history - rather than single-event rules - improve precision, reduce unnecessary friction on legitimate users, and lower the support overhead from incorrectly flagged accounts and declined transactions.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Investigation-Ready Cases for Account Farming and Referral Abuse',
                body: 'Graph-based detection surfaces account farming cohorts, referral abuse rings, promo fraud clusters, and synthetic identity groups as connected cases - rather than isolated alerts - so analysts can investigate and close coordinated schemes with less manual correlation work.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Better Cross-Product and Cross-Signal Risk Context',
                body: 'Wallet misuse, payout abuse, repayment fraud, ATO, and device reuse patterns linked across products and signals - giving risk teams the cross-product context needed to identify coordinated risk that spans wallet, lending, payroll, or card programs independently.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
                title: 'Stronger Fraud and AML Investigation Evidence',
                body: 'Structured case records with alert context, network graph evidence, analyst decisions, and disposition trail - supporting the documentation and explainability standards that fraud, compliance, and audit reviewers require, without manual case assembly before each review.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
                title: 'Small Risk Teams Scale Without Proportional Headcount Increases',
                body: 'Pre-assembled investigation cases and cross-signal context reduce the manual data-gathering burden that keeps lean risk teams from operating at scale - allowing growing fintech platforms to handle increasing alert volumes without hiring in lockstep with user growth.',
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

      {/* ── 8. RELATED INDUSTRIES ───────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Also Serving</p>
          <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Verafye Across Financial Institution and Platform Types
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <Link href="/industries/payment-processors-psps-payfacs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Payment Processors / PSPs / PayFacs <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/industries/digital-banks" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              Digital Banks and Neo Banks <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/industries/baas-embedded-finance" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              BaaS and Embedded Finance <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/industries/msbs-remittance-platforms" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid rgba(30,111,183,0.25)', borderRadius: '8px', padding: '0.55rem 1rem', background: '#fff', textDecoration: 'none' }}>
              MSBs and Remittance Platforms <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            See Investigation Intelligence Built for Your Fintech Platform
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '38rem', margin: '0 auto 2.5rem' }}>
            Connect onboarding, account, device, payment, wallet, payout, and repayment signals into investigation-ready cases - helping lean fintech risk teams detect account farming, referral abuse, payout fraud, and cross-product risk faster.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo?intent=risk-shadowing-review" className="btn-primary">
              Request a Risk Shadowing Review
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/request-demo" className="btn-secondary">Request a Walkthrough</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
            Verafye is designed to support fraud and AML investigation workflows. We do not claim regulatory certification, approval, or endorsement, and do not guarantee fraud prevention outcomes.
          </p>
        </div>
      </section>

    </>
  );
}

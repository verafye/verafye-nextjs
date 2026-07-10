import Link from 'next/link';

export const metadata = {
  title: "Network Risk Intelligence for Marketplace Risk Teams | Verafye",
  description: "Verafye helps marketplace risk teams connect seller, buyer, listing, device, payout, payment, refund, dispute, review, and transaction signals into explainable investigations — surfacing seller fraud rings, buyer-seller collusion, payout abuse, refund/return abuse, and coordinated account networks.",
  keywords: ["marketplace fraud investigation", "seller fraud ring detection", "buyer seller collusion", "marketplace payout abuse", "refund abuse investigation", "review manipulation detection", "marketplace risk intelligence", "fake listing fraud", "seller payout ring", "marketplace investigation workflow"],
  openGraph: {
    title: "Network Risk Intelligence for Marketplace Risk Teams | Verafye",
    description: "Verafye helps marketplace risk teams connect seller, buyer, listing, device, payout, payment, refund, dispute, review, and transaction signals into explainable investigations — surfacing seller fraud rings, buyer-seller collusion, payout abuse, refund/return abuse, and coordinated account networks.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Network Risk Intelligence for Marketplace Risk Teams | Verafye",
    description: "Verafye helps marketplace risk teams connect seller, buyer, listing, device, payout, payment, refund, dispute, review, and transaction signals into explainable investigations — surfacing seller fraud rings, buyer-seller collusion, payout abuse, refund/return abuse, and coordinated account networks.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/industries/marketplaces',
  },
};

export default function MarketplacesPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Fraud Prevention for Marketplace</h1>
            <h2 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Network Risk Intelligence for Marketplace Risk Teams
            </h2>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps marketplace risk teams connect seller, buyer, listing, device, payout, payment, refund, dispute, review, and transaction signals into explainable investigations - surfacing seller fraud rings, buyer-seller collusion, fake listing abuse, payout abuse, refund/return abuse, and coordinated account networks.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Use graph-native investigation workflows to connect fragmented marketplace signals into evidence-backed cases across seller onboarding, listing activity, payments, payouts, disputes, and abuse operations.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo?intent=risk-shadowing-review" className="btn-primary">
                Request a Risk Shadowing Review
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" className="btn-secondary">Request a Walkthrough</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. KEY RISK CHALLENGES ──────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Segment Challenges</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              The Coordinated Abuse Patterns Marketplace Risk Teams Investigate
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>),
                title: 'Seller Fraud Rings, Fake Listings, and Counterfeit Seller Networks',
                body: 'Coordinated seller fraud rings operate across multiple accounts, devices, and geographies - with fake listing clusters, counterfeit seller re-entry after suspension, and shared identity signals that are invisible when individual accounts are reviewed in isolation.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
                title: 'Buyer-Seller Collusion, Review Manipulation, and Dispute Abuse',
                body: 'Collusion between linked buyer and seller accounts - fake transactions, coordinated review boosting, and manipulated dispute flows - requires cross-entity investigation context that account-level monitoring and content classification alone cannot provide.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
                title: 'Refund, Return, and Promo/Incentive Abuse Networks',
                body: 'Coordinated refund and return abuse, promo code exploitation, and incentive fraud schemes span linked buyer accounts and shared device signals - patterns that look like isolated policy violations when reviewed individually but reveal connected abuse networks at graph scale.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Payout Abuse and Suspicious Payout Consolidation',
                body: 'Seller payout flows consolidating into shared beneficiary accounts, seller-payout rings, and suspicious proceeds movement across interconnected seller payout destinations are patterns that only become visible when payout, seller, and transaction signals are viewed together at network level.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Transaction Laundering Through Marketplace Sellers',
                body: 'Illegitimate proceeds moved through legitimate-looking marketplace seller activity, prohibited listings used as a transaction vector, and coordinated transaction patterns inconsistent with genuine commerce are difficult to detect without cross-signal investigation context spanning seller, listing, payment, and payout data.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6" y1="1" y2="4"/><line x1="10" x2="10" y1="1" y2="4"/><line x1="14" x2="14" y1="1" y2="4"/></svg>),
                title: 'Coordinated Account Abuse Across Buyer and Seller Surfaces',
                body: 'ATO, synthetic identity clusters, shared device reuse, and promo abuse operating across both buyer and seller surfaces feed the same coordinated networks - but fragmented signals held in separate systems make the cross-surface connections impossible to see without a shared investigation layer.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className={`card-icon ${item.gradient}`} style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT VERAFYE IS NOT ──────────────────────────────────────────── */}
      <section style={{ padding: '3rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 2.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Scope</p>
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em' }}>
              What Verafye Is - and What It Is Not
            </h2>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', marginTop: '0.75rem', lineHeight: 1.7 }}>
              Verafye is a graph-native network risk intelligence and investigation layer. It connects signals across the marketplace lifecycle into evidence-backed investigation cases. It is not a content moderation, trust-and-safety, or marketplace policy system.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', gap: '1rem' }}>
            {[
              {
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>),
                label: 'Not content moderation',
                body: 'Verafye does not classify, moderate, or remove listings or content.',
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>),
                label: 'Not listing classification',
                body: 'Verafye does not detect prohibited item categories or enforce listing policies.',
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>),
                label: 'Not a trust-and-safety suite',
                body: 'Verafye does not perform policy enforcement or automate trust-and-safety workflows.',
              },
              {
                icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>),
                label: 'Not a replacement for marketplace ops tools',
                body: 'Verafye works alongside existing marketplace operations, seller management, and abuse tooling.',
              },
            ].map(item => (
              <div key={item.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  {item.icon}
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--dark)' }}>{item.label}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW VERAFYE HELPS ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Helps</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Connected Investigation Intelligence for Marketplace Risk Teams
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                title: 'Connect seller, buyer, listing, device, payout, payment, refund, dispute, and review signals',
                body: 'Verafye brings together signals from seller onboarding, listing activity, payments, payouts, device fingerprinting, buyer behavior, refund and return history, disputes, and review patterns into one connected investigation layer - giving analysts the full lifecycle signal picture before any decision is made.',
              },
              {
                title: 'Surface seller fraud rings, buyer-seller collusion, and coordinated abuse as connected cases',
                body: 'Graph-based intelligence connects related seller and buyer accounts, shared devices, payment methods, payout beneficiaries, listing patterns, and behavioral signals - making coordinated abuse visible as linked investigation cases rather than isolated, unrelated alerts.',
              },
              {
                title: 'Investigate payout abuse, suspicious consolidation, and seller-payout rings with network context',
                body: 'Payout flows, shared beneficiary consolidation points, and seller-linked payout ring patterns are mapped into investigation-ready cases - so analysts can trace where marketplace proceeds actually flow and build evidence for escalation and internal review.',
              },
              {
                title: 'Build evidence-backed investigation records for escalation, compliance, and internal review',
                body: 'Every analyst action, decision rationale, evidence reference, and case note is captured and structured - creating complete audit trails that support escalation to legal, compliance review, partner notification, and internal accountability workflows.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.125rem' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.0625rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SIGNALS VERAFYE CONNECTS ─────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 2.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Signal Coverage</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Signals Verafye connects across the marketplace investigation lifecycle
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.625rem', maxWidth: '64rem', margin: '0 auto' }}>
            {[
              { label: 'Seller account and onboarding signals', color: '#1E6FB7' },
              { label: 'Listing and product activity', color: '#1E6FB7' },
              { label: 'Seller payout and beneficiary flows', color: '#1E6FB7' },
              { label: 'Buyer account activity', color: '#7C3AED' },
              { label: 'Payment and transaction signals', color: '#7C3AED' },
              { label: 'Refund and return data', color: '#7C3AED' },
              { label: 'Dispute and escalation history', color: '#0891B2' },
              { label: 'Review and rating history', color: '#0891B2' },
              { label: 'Promo and incentive activity', color: '#0891B2' },
              { label: 'Device fingerprint and session signals', color: '#D97706' },
              { label: 'IP and location data', color: '#D97706' },
              { label: 'Identity verification results', color: '#D97706' },
              { label: 'Behavioral patterns', color: '#059669' },
              { label: 'Seller re-entry and suspension history', color: '#059669' },
              { label: 'Third-party enrichment', color: '#059669' },
            ].map(s => (
              <span key={s.label} style={{ display: 'inline-block', padding: '0.4rem 0.875rem', borderRadius: '999px', border: `1px solid ${s.color}30`, background: `${s.color}08`, fontSize: '0.8125rem', fontWeight: 500, color: s.color }}>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ── 6. BEFORE / AFTER ───────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Difference</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Before and After Verafye
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Before */}
            <div style={{ padding: '2.5rem', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Before Verafye</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Seller, buyer, listing, payout, refund, and dispute signals reviewed in separate queues with no shared context',
                  'Seller fraud rings and collusion networks invisible across siloed systems - cases treated as unrelated',
                  'Refund, return, promo, and review abuse look like isolated policy violations rather than connected networks',
                  'Payout consolidation and seller-payout ring patterns undetected until partners or finance teams flag them',
                  'Decision rationales undocumented - investigation evidence difficult to retrieve for escalation or review',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65 }}>
                    <div style={{ flexShrink: 0, width: '1.25rem', height: '1.25rem', borderRadius: '50%', background: '#FEE2E2', border: '1px solid #FECACA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.1rem' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* After */}
            <div style={{ padding: '2.5rem', background: '#EFF6FF', border: '1px solid rgba(30,111,183,0.2)', borderRadius: '12px' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>After Verafye</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Seller, buyer, listing, device, payout, payment, refund, dispute, and review signals connected in one investigation layer',
                  'Seller fraud rings, collusion clusters, and coordinated abuse surfaced as connected cases - related accounts linked with graph evidence',
                  'Refund, promo, and review abuse networks visible as connected schemes rather than isolated policy incidents',
                  'Payout abuse and suspicious consolidation patterns mapped with graph context before they escalate externally',
                  'Structured audit trails capture every decision, rationale, and evidence reference for escalation and internal review',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65 }}>
                    <div style={{ flexShrink: 0, width: '1.25rem', height: '1.25rem', borderRadius: '50%', background: '#DBEAFE', border: '1px solid rgba(30,111,183,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.1rem' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. RELATED USE CASES ────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '44rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Related Use Cases</p>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em' }}>
              Also Used By
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { href: '/industries/fintech-platforms', label: 'Payment Fintech Platforms', desc: 'Referral abuse, account farming, cross-product payment and payout fraud' },
              { href: '/industries/psps', label: 'PSPs & PayFacs', desc: 'Merchant onboarding risk, transaction laundering, chargeback and fraud rings' },
              { href: '/industries/digital-banks', label: 'Digital Banks & Neobanks', desc: 'ATO, synthetic identity, promo abuse, and outbound payment fraud' },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{ display: 'block', padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
                <p style={{ fontWeight: 600, color: 'var(--dark)', fontSize: '0.9375rem', marginBottom: '0.5rem' }}>{item.label}</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#EFF6FF' }}>
        <div className="container" style={{ maxWidth: '52rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Get Started</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
            See Marketplace Network Risk Investigation in Practice
          </h2>
          <p style={{ fontSize: 'clamp(0.9375rem,1.8vw,1.125rem)', color: 'var(--body)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Start with a scoped workflow across seller fraud rings, payout abuse, refund and promo schemes, or dispute manipulation. Verafye works alongside existing trust-and-safety, payment, and fraud tooling as an independent investigation intelligence layer.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/request-demo?intent=risk-shadowing-review" className="btn-primary">
              Request a Risk Shadowing Review
              <span className="btn-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/request-demo" className="btn-secondary">
              Request a Walkthrough
            </Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem', fontStyle: 'italic' }}>
            Verafye is designed to support fraud and AML investigation workflows. We do not claim regulatory certification, approval, or endorsement, and do not guarantee fraud prevention outcomes.
          </p>
        </div>
      </section>

    </>
  );
}

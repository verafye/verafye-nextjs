import Link from 'next/link';

export const metadata = {
  title: "E-Commerce Fraud Detection Software | Prevent Payment Fraud",
  description: "Detect payment fraud, account abuse, and coordinated attacks with AI-powered fraud detection for e-commerce and retail platforms. Reduce false positives and protect revenue.",
  openGraph: {
    title: "E-Commerce Fraud Detection Software | Prevent Payment Fraud",
    description: "Detect payment fraud, account abuse, and coordinated attacks with AI-powered fraud detection for e-commerce and retail platforms. Reduce false positives and protect revenue.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "E-Commerce Fraud Detection Software | Prevent Payment Fraud",
    description: "Detect payment fraud, account abuse, and coordinated attacks with AI-powered fraud detection for e-commerce and retail platforms. Reduce false positives and protect revenue.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/industries/ecommerce-retail',
  },
};

export default function EcommerceRetailPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>E-COMMERCE &amp; RETAIL &mdash; INVESTIGATION ADJACENCY</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Investigation intelligence for e-commerce and retail fraud teams
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Connect payment, identity, device, account, and behavioral signals into explainable fraud investigations - helping e-commerce risk teams move from alert volume to case decisions.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye connects existing risk signals into investigation-ready workflows built on the Verafye platform - helping e-commerce platforms and retail fraud teams surface account takeover patterns, payment fraud rings, refund abuse networks, and synthetic identity clusters.
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

      {/* ── 2. KEY RISK CHALLENGES ──────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Segment Challenges</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              The fraud risk challenges e-commerce teams face
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6" y1="1" y2="4"/><line x1="10" x2="10" y1="1" y2="4"/><line x1="14" x2="14" y1="1" y2="4"/></svg>),
                title: 'Account Takeover at Scale',
                body: 'Credential stuffing, phishing, and session hijacking attacks generate large volumes of account takeover events spread across authentication, session, and transaction systems - making coordinated patterns difficult to surface.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>),
                title: 'Payment Fraud Networks',
                body: 'Organised payment fraud rings use coordinated accounts, stolen card data, and shared device infrastructure to generate transaction fraud at scale - with connections that are invisible when alerts are reviewed in isolation.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
                title: 'Refund and Return Abuse',
                body: 'Policy abuse, fraudulent return claims, and coordinated refund schemes are difficult to detect when account history, device signals, and transaction patterns are held in separate systems with no shared investigation layer.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>),
                title: 'Synthetic Identity and Fake Accounts',
                body: 'Fraudulent account creation using synthetic or fabricated identities creates dormant risk that activates at scale. Identity, device, behavioral, and network signals rarely align in time to detect these patterns before exploitation.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>),
                title: 'Marketplace and Seller Fraud',
                body: 'Third-party marketplace platforms face coordinated seller fraud, fake listing abuse, and buyer-seller collusion schemes that span multiple accounts, payment methods, and geographies - requiring cross-entity investigation context.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>),
                title: 'Alert Volume Exceeding Investigation Capacity',
                body: 'High transaction volumes and broad fraud monitoring coverage generate alert quantities that exceed manual investigation capacity - creating backlogs, delayed responses, and rising false-positive review burden for lean fraud operations teams.',
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

      {/* ── 3. HOW VERAFYE HELPS ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Helps</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Connected investigation intelligence for e-commerce fraud teams
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                title: 'Connect signals across payment, identity, device, and account systems',
                body: 'Verafye brings together alerts and data from fraud detection, payment processing, identity verification, device fingerprinting, and behavioral analytics into a single investigation layer - giving analysts the full signal picture before they make a decision.',
              },
              {
                title: 'Surface fraud rings and coordinated account clusters',
                body: 'Graph-based intelligence connects related accounts, shared devices, payment methods, addresses, and behavioral patterns - making coordinated fraud networks visible as connected cases rather than isolated alerts.',
              },
              {
                title: 'Reduce false-positive review burden with case context',
                body: 'Pre-assembled case context, entity history, cross-signal clustering, and AI-assisted summaries help analysts distinguish genuine fraud from false positives faster - reducing review time and improving decision quality across high-volume queues.',
              },
              {
                title: 'Maintain audit-ready investigation records',
                body: 'Every analyst action, decision rationale, evidence reference, and case note is captured and structured - creating complete audit trails for chargebacks, dispute resolution, compliance review, and internal accountability.',
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

      {/* ── 4. SIGNALS VERAFYE CONNECTS ─────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 2.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Signal Coverage</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Signals Verafye connects for e-commerce investigations
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.625rem', maxWidth: '60rem', margin: '0 auto' }}>
            {[
              { label: 'Payment transactions', color: '#1E6FB7' },
              { label: 'Card and wallet data', color: '#1E6FB7' },
              { label: 'Account login events', color: '#7C3AED' },
              { label: 'Session and authentication signals', color: '#7C3AED' },
              { label: 'Device fingerprint', color: '#0891B2' },
              { label: 'IP and location data', color: '#0891B2' },
              { label: 'Identity verification results', color: '#D97706' },
              { label: 'Behavioral patterns', color: '#D97706' },
              { label: 'Refund and return history', color: '#059669' },
              { label: 'Chargeback signals', color: '#059669' },
              { label: 'Seller and listing activity', color: '#1E6FB7' },
              { label: 'Third-party enrichment', color: '#7C3AED' },
            ].map(s => (
              <span key={s.label} style={{ display: 'inline-block', padding: '0.4rem 0.875rem', borderRadius: '999px', border: `1px solid ${s.color}30`, background: `${s.color}08`, fontSize: '0.8125rem', fontWeight: 500, color: s.color }}>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BEFORE / AFTER ───────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '72rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Difference</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Before and after Verafye
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Before */}
            <div style={{ padding: '2.5rem', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Before Verafye</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Payment, identity, and device alerts reviewed in separate queues with no shared context',
                  'Coordinated fraud rings invisible across siloed systems - cases treated as unrelated',
                  'Analysts spending hours manually correlating signals across multiple tools',
                  'High false-positive review burden slowing legitimate order processing',
                  'Decision rationales undocumented - chargeback and dispute evidence difficult to retrieve',
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
                  'Payment, identity, device, and behavioral signals connected in a single investigation layer',
                  'Coordinated fraud rings surfaced as connected clusters - related cases linked automatically',
                  'Pre-assembled case context cuts manual correlation time across every investigation',
                  'Signal-aware prioritisation reduces false-positive review burden for fraud operations',
                  'Structured audit trails capture every decision, rationale, and evidence reference for dispute and compliance use',
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

      {/* ── 6. RELATED USE CASES ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Relevant Use Cases</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Use cases relevant to e-commerce fraud teams
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                href: '/use-cases/mule-network-detection',
                eyebrow: 'Detection',
                title: 'Mule Network Detection',
                desc: 'Detect coordinated fraud networks using graph intelligence across accounts, devices, identities, and transactions.',
              },
              {
                href: '/use-cases/transaction-monitoring',
                eyebrow: 'Monitoring',
                title: 'Transaction Monitoring',
                desc: 'Enhance transaction monitoring with cross-system context - improving signal quality and reducing false positives.',
              },
              {
                href: '/use-cases/investigation-workflow-modernization',
                eyebrow: 'Investigation',
                title: 'Investigation Workflow Modernization',
                desc: 'Replace fragmented queues with connected investigation workflows - closing cases faster with less analyst effort.',
              },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="card card-elevated card-hover" style={{ padding: '2rem', cursor: 'pointer', height: '100%' }}>
                  <p className="eyebrow" style={{ marginBottom: '0.5rem', fontSize: '0.625rem' }}>{item.eyebrow}</p>
                  <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{item.desc}</p>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    Explore use case
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#EFF6FF' }}>
        <div className="container" style={{ maxWidth: '52rem', textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Request Demo</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
            Explore Payment Fraud and Account Abuse Investigation
          </h2>
          <p style={{ fontSize: 'clamp(0.9375rem,1.8vw,1.125rem)', color: 'var(--body)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Connect payment, account, device, identity, behavior, refund, return, and marketplace signals into investigation-ready workflows.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/platform" className="btn-secondary">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

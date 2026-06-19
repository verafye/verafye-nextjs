import Link from 'next/link';

export const metadata = {
  title: "Risk Shadowing Review for payment-led financial crime teams",
  description: "Test Verafye alongside your existing fraud, AML, KYC, identity, payment, device, ledger, program, and case systems. Built for PSPs, PayFacs, MSBs, remittance platforms, BaaS and embedded finance providers, and payment-led financial crime teams - connecting fragmented signals into investigation-ready evidence.",
  keywords: ["risk shadowing review", "network risk intelligence", "BaaS risk intelligence", "embedded finance risk intelligence", "sponsor-bank ecosystem risk", "BaaS fraud and AML investigation", "program-level network risk", "fraud aml evaluation"],
  openGraph: {
    title: "Risk Shadowing Review for payment-led financial crime teams | Verafye",
    description: "Test Verafye alongside your existing fraud, AML, KYC, identity, payment, device, ledger, program, and case systems. Built for PSPs, PayFacs, MSBs, remittance platforms, BaaS and embedded finance providers, and payment-led financial crime teams.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Risk Shadowing Review for payment-led financial crime teams | Verafye",
    description: "Test Verafye alongside your existing fraud, AML, KYC, identity, payment, device, ledger, program, and case systems. Built for PSPs, PayFacs, MSBs, remittance platforms, BaaS and embedded finance providers, and payment-led financial crime teams.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/risk-shadowing-review',
  },
};

export default function RiskShadowingReviewPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>RISK SHADOWING REVIEW</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Risk Shadowing Review for payment-led financial crime teams
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '2rem', maxWidth: '46rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Test Verafye alongside your existing fraud, AML, KYC, identity, payment, device, ledger, program, and case systems. Built for PSPs, PayFacs, MSBs, remittance platforms, BaaS providers, embedded finance platforms, and payment-led financial crime teams, Verafye independently connects fragmented signals, detects hidden network risk, clusters related activity, and produces investigation-ready evidence packs before deeper deployment.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo" className="btn-primary">
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

      {/* ── 2. WHERE RISK SHADOWING IS MOST USEFUL ──────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Where It Fits</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Where Risk Shadowing is most useful
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>),
                title: 'BaaS and embedded finance program risk',
                body: 'Connect fragmented program, payment, identity, device, ledger, and case signals across fintech programs into an independent network-risk view, supporting cross-program oversight without replacing existing systems.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>),
                title: 'Sponsor-bank ecosystem oversight',
                body: 'Support sponsor-bank and program oversight workflows by connecting partner, program, payment, and case signals into reviewable network-risk context across provider boundaries.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Cross-program fraud and AML visibility',
                body: 'Surface linked activity that spans multiple programs, accounts, wallets, and devices, helping teams detect coordinated patterns that single-program monitoring cannot connect.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
                title: 'Linked fintech-program activity',
                body: 'Identify accounts, identities, beneficiaries, and devices reappearing across fintech programs, clustering related activity into investigation-ready cases.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>),
                title: 'Ledger, account, wallet, payment, identity, and device signal correlation',
                body: 'Correlate ledger events, accounts, wallets, payment events, identity signals, and device patterns into one connected view, with inputs configurable based on use case and available data.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
                title: 'Program-manager and partner-risk review',
                body: 'Give program managers and partner-risk teams reviewable, investigation-ready evidence across programs and provider relationships, working alongside existing systems.',
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

      {/* ── 3. WHAT VERAFYE CAN ANALYZE ─────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 2.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Inputs</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                What Verafye can analyze
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Inputs are configurable based on use case and available data. Not every provider needs to supply every data type. Verafye connects the signals you can share into a connected network-risk view that works alongside your existing systems.
              </p>
            </div>
            <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
              {[
                'Fraud, AML, payment, identity, device, and behavior signals from existing systems',
                'KYC/KYB and watchlist signals where available',
                'Transaction, account, wallet, card, or ACH payment events where applicable',
                'Ledger events',
                'Program-level metadata',
                'Fintech program identifiers',
                'Sponsor-bank relationship metadata where available',
                'Embedded finance partner data where available',
                'Case and investigation records',
              ].map(item => (
                <div key={item} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.15rem' }}><path d="M20 6 9 17l-5-5"/></svg>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How It Works</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                A low-friction way to evaluate Verafye
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Connect available signals', body: 'Share the fraud, AML, payment, identity, device, ledger, program, and case signals you can provide. Inputs are configurable based on use case and available data.' },
                { step: '02', title: 'Detect hidden network risk', body: 'Verafye independently connects fragmented signals and detects hidden network risk through graph-native relationship analysis and risk scoring.' },
                { step: '03', title: 'Cluster related activity', body: 'Related alerts, accounts, identities, and programs are clustered into coherent, investigation-ready cases that reduce manual review effort.' },
                { step: '04', title: 'Produce investigation-ready evidence', body: 'Verafye produces investigation-ready evidence packs that support audit-ready decisions, helping you validate hidden network risk against a controlled dataset or workflow before deeper deployment.' },
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

      {/* ── 5. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '52rem' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Common questions
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'How does Risk Shadowing apply to BaaS and embedded finance providers?',
                a: 'BaaS and embedded finance providers often operate across sponsor banks, fintech programs, payment flows, ledgers, KYC/KYB systems, identity providers, device signals, and case workflows. Risk Shadowing helps connect those fragmented signals into an independent network-risk view so teams can identify linked activity, review suspicious clusters, and produce investigation-ready evidence without replacing existing systems.',
              },
              {
                q: 'Does Verafye replace our existing fraud, AML, or sponsor-bank oversight systems?',
                a: 'No. Verafye works alongside the systems you already run as an independent Network Risk Intelligence layer. It connects fragmented signals and produces investigation-ready evidence, supporting sponsor-bank and program oversight workflows rather than replacing them.',
              },
              {
                q: 'What data do we need to provide?',
                a: 'Inputs are configurable based on use case and available data. You can start with the signals you are able to share, such as fraud, AML, payment, identity, device, ledger, program, and case data, and expand coverage over time. Not every provider needs to supply every data type.',
              },
              {
                q: 'What do we get at the end of a Risk Shadowing Review?',
                a: 'You get an independent view of hidden network risk across your connected signals, clustered cases that reduce manual review effort, and investigation-ready evidence packs that support audit-ready decisions before deeper deployment.',
              },
            ].map(item => (
              <div key={item.q} className="card card-elevated" style={{ padding: '1.75rem 2rem' }}>
                <h3 style={{ fontSize: 'clamp(1rem,1.8vw,1.1875rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.q}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Validate hidden network risk against your own data
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '38rem', margin: '0 auto 2.5rem' }}>
            Start a Risk Shadowing Review alongside your existing systems. Built for PSPs, PayFacs, MSBs, remittance platforms, BaaS and embedded finance providers, and payment-led financial crime teams.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request a Risk Shadowing Review
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/customers" className="btn-secondary">View Who We Serve</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem', fontStyle: 'italic' }}>
            Verafye is designed to support fraud and AML investigation workflows alongside existing systems. We do not claim regulatory approval, certification, or guaranteed fraud prevention.
          </p>
        </div>
      </section>
    </>
  );
}

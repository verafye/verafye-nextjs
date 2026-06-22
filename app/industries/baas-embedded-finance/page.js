import Link from 'next/link';

export const metadata = {
  title: "Network Risk Intelligence for BaaS and Embedded Finance",
  description: "Verafye helps BaaS and embedded finance providers connect fragmented sponsor-bank, fintech-program, ledger, payment, KYC/KYB, identity, device, account, wallet, and case signals into investigation-ready network risk intelligence.",
  keywords: ["baas risk intelligence", "embedded finance risk intelligence", "sponsor-bank ecosystem risk", "program-level network risk", "baas fraud and aml investigation", "fintech program risk"],
  openGraph: {
    title: "Network Risk Intelligence for BaaS and Embedded Finance | Verafye",
    description: "Verafye helps BaaS and embedded finance providers connect fragmented sponsor-bank, fintech-program, ledger, payment, KYC/KYB, identity, device, account, wallet, and case signals into investigation-ready network risk intelligence.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Network Risk Intelligence for BaaS and Embedded Finance | Verafye",
    description: "Verafye helps BaaS and embedded finance providers connect fragmented sponsor-bank, fintech-program, ledger, payment, KYC/KYB, identity, device, account, wallet, and case signals into investigation-ready network risk intelligence.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/industries/baas-embedded-finance',
  },
};

export default function BaasEmbeddedFinancePage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>BaaS &amp; EMBEDDED FINANCE</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Network Risk Intelligence for BaaS and embedded finance ecosystems
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '2rem', maxWidth: '46rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye helps BaaS and embedded finance providers connect fragmented sponsor-bank, fintech-program, ledger, payment, KYC/KYB, identity, device, account, wallet, and case signals into investigation-ready Network Risk Intelligence.
            </p>
            <div className="animate-fade-up delay-300" style={{ maxWidth: '44rem', margin: '0 auto 2rem', display: 'grid', gap: '0.75rem', textAlign: 'left' }}>
              {[
                'Connect sponsor-bank, fintech-program, ledger, payment, identity, device, and case signals',
                'Detect linked activity across programs, providers, accounts, wallets, and counterparties',
                'Cluster related risk into investigation-ready cases',
                'Produce explainable, audit-ready evidence for program and partner oversight',
              ].map(b => (
                <div key={b} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.2rem' }}><path d="M20 6 9 17l-5-5"/></svg>
                  <span style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', lineHeight: 1.55 }}>{b}</span>
                </div>
              ))}
            </div>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/risk-shadowing-review" className="btn-primary">
                Explore Risk Shadowing Review
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" className="btn-secondary">Book a Verafye Walkthrough</Link>
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
              The Operating Pressures BaaS and Embedded Finance Teams Face
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              { gradient: 'gradient-bg-1', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>), title: 'Fragmented program visibility', body: 'BaaS and embedded finance ecosystems often span sponsor banks, fintech programs, processors, ledgers, KYC/KYB providers, identity tools, and case workflows.' },
              { gradient: 'gradient-bg-2', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>), title: 'Cross-program risk blind spots', body: 'Risk patterns may appear low-priority within one program but become significant when viewed across accounts, wallets, devices, identities, merchants, and payment flows.' },
              { gradient: 'gradient-bg-3', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>), title: 'Sponsor-bank oversight pressure', body: 'Sponsor-bank and program oversight teams need clearer visibility into linked activity, partner-risk patterns, and investigation-ready evidence.' },
              { gradient: 'gradient-bg-4', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>), title: 'Ledger and payment signal silos', body: 'Ledger events, payment logs, wallet activity, account movement, and case context often sit in separate systems without a unified network-risk view.' },
              { gradient: 'gradient-bg-1', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>), title: 'Fraud and AML convergence', body: 'Mule activity, synthetic identity, suspicious counterparties, account misuse, and payment abuse often cross the boundary between fraud operations and AML review.' },
              { gradient: 'gradient-bg-2', icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>), title: 'Manual evidence assembly', body: 'Teams spend time stitching together screenshots, logs, alerts, case notes, and program context instead of reviewing connected risk narratives.' },
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

      {/* ── 3. WHY LEGACY FAILS ─────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Legacy Approaches Fall Short</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Point Tools See Fragments, Not the Network
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              { title: 'Point tools see fragments', body: 'Fraud, AML, KYC, identity, ledger, and payment tools often detect events inside their own boundaries but do not connect risk across the ecosystem.' },
              { title: 'Program risk is not isolated', body: 'Linked entities, devices, beneficiaries, wallets, and counterparties can appear across multiple programs, partners, or providers.' },
              { title: 'Case context arrives too late', body: 'Analysts may receive alerts without the relationship context needed to understand whether the activity belongs to a broader network.' },
              { title: 'Audit evidence is hard to assemble', body: 'Program, sponsor-bank, and compliance teams need explainable case records that show why a cluster was reviewed, escalated, or closed.' },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW VERAFYE FITS ─────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How Verafye Fits</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Independent Network Risk Intelligence for BaaS ecosystems
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye works alongside existing BaaS, embedded finance, sponsor-bank, KYC/KYB, identity, payment, ledger, device, and case systems. It connects fragmented signals, resolves entities, detects hidden network risk, clusters related activity, and produces investigation-ready evidence for review.
              </p>
            </div>
            <div className="grid-2" style={{ maxWidth: '64rem', margin: '0 auto' }}>
              {[
                'Program-level signal aggregation',
                'Entity and relationship resolution',
                'Cross-program network-risk detection',
                'Ledger, wallet, account, and payment-event correlation',
                'Device and identity linkage',
                'Sponsor-bank and partner-risk context',
                'Case-ready evidence packs',
                'Audit-ready decision support',
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

      {/* ── 5. RELEVANT CAPABILITIES ────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Relevant Capabilities</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Built for Connected Investigation
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              { title: 'Graph-native entity resolution', body: 'Resolve accounts, wallets, identities, devices, merchants, and beneficiaries into connected entities across programs and providers.' },
              { title: 'Program-level network-risk detection', body: 'Detect hidden network risk and linked activity that spans fintech programs, sponsor-bank relationships, and payment flows.' },
              { title: 'Investigation-ready case clustering', body: 'Cluster related alerts and entities into coherent cases that reduce manual review effort and surface coordinated patterns.' },
              { title: 'Audit-ready evidence and decision trails', body: 'Produce explainable evidence packs and decision records that support program, sponsor-bank, and compliance oversight workflows.' },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BUSINESS IMPACT ──────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Business Impact</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Outcomes BaaS and Embedded Finance Teams Pursue
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '64rem', margin: '0 auto' }}>
            {[
              { title: 'Better cross-program visibility', body: 'Connect fragmented signals into one network-risk view across programs, providers, and payment flows.' },
              { title: 'Faster investigation triage', body: 'Clustered cases and connected context help analysts prioritise and review linked activity more efficiently.' },
              { title: 'Stronger sponsor-bank and partner oversight', body: 'Support oversight workflows with clearer visibility into linked activity and partner-risk patterns.' },
              { title: 'More consistent audit-ready decisions', body: 'Explainable evidence packs and decision trails support consistent, reviewable dispositions.' },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            See Network Risk Intelligence across your ecosystem
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '40rem', margin: '0 auto 2.5rem' }}>
            Use a controlled dataset or focused workflow to evaluate how Verafye connects fragmented BaaS, embedded finance, sponsor-bank, payment, identity, device, ledger, and case signals into investigation-ready intelligence.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/risk-shadowing-review" className="btn-primary">
              Explore Risk Shadowing Review
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/request-demo" className="btn-secondary">Book a Verafye Walkthrough</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem', fontStyle: 'italic' }}>
            Verafye works alongside existing systems as an independent Network Risk Intelligence layer. We do not claim regulatory approval, regulator certification, endorsement, or guaranteed fraud prevention.
          </p>
        </div>
      </section>
    </>
  );
}

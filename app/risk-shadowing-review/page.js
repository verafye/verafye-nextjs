import Link from 'next/link';

export const metadata = {
  title: "Risk Shadowing Review for Fraud, AML and Payments Risk Teams",
  description: "Evaluate Verafye's network risk detection on a controlled dataset from your fraud, AML, KYC, identity, payment, device, ledger, merchant, beneficiary, and case systems. Detect hidden networks, form investigation-ready cases, and assess production options before full deployment.",
  keywords: ["risk shadowing review", "connected risk intelligence", "network risk intelligence", "fraud aml evaluation", "investigation-ready evidence", "mule network intelligence", "payments risk evaluation"],
  openGraph: {
    title: "Risk Shadowing Review for Fraud, AML and Payments Risk Teams | Verafye",
    description: "Evaluate Verafye's Connected-Risk Intelligence on a controlled dataset from your existing environment — entities resolved, hidden networks surfaced, investigation-ready evidence produced.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Risk Shadowing Review for Fraud, AML and Payments Risk Teams | Verafye",
    description: "Evaluate Verafye's Connected-Risk Intelligence on a controlled dataset from your existing environment — entities resolved, hidden networks surfaced, investigation-ready evidence produced.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/risk-shadowing-review/',
  },
};

export default function RiskShadowingReviewPage() {
  return (
    <>

      {/* ── A. HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>RISK SHADOWING REVIEW</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Risk Shadowing Review for payment-led financial crime teams
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '2rem', maxWidth: '46rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Evaluate Verafye's network risk detection on a controlled dataset from your fraud, AML, KYC, identity, payment, device, ledger, merchant, beneficiary, and case systems. Verafye resolves entities, detects hidden networks, clusters related activity, and produces investigation-ready evidence for review.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/request-demo?intent=risk-shadowing-review" className="btn-primary">
                Request a Risk Shadowing Review
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" className="btn-secondary">Book a Verafye Walkthrough</Link>
            </div>
            <p className="animate-fade-up delay-500" style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: '600', marginTop: '1.25rem', letterSpacing: '-0.01em' }}>
              API-led integration on agreed data feeds. First connected-risk outputs within two weeks.
            </p>
          </div>
        </div>
      </section>

      {/* ── B. WHY RISK SHADOWING ────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '50rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Risk Shadowing</p>
            <p style={{ fontSize: 'clamp(1.0625rem,2.2vw,1.375rem)', color: 'var(--dark)', lineHeight: 1.5, fontWeight: 500, letterSpacing: '-0.01em' }}>
              Risk Shadowing lets teams validate Verafye's network risk detection and investigation capabilities against a controlled dataset or focused workflow, with no changes to live production processes.
            </p>
          </div>
        </div>
      </section>

      {/* ── D. WHERE IT IS USEFUL ────────────────────────────────────────────── */}
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
              { gradient: 'gradient-bg-1', title: 'PSP and PayFac merchant and payout risk', body: 'Connect merchant, sub-merchant, transaction, and payout signals to surface linked activity across portfolios.' },
              { gradient: 'gradient-bg-2', title: 'MSB and remittance corridor and beneficiary risk', body: 'Connect sender, beneficiary, corridor, and agent signals to surface structuring and beneficiary reuse.' },
              { gradient: 'gradient-bg-3', title: 'BaaS and embedded finance program risk', body: 'Connect program, sponsor-bank, ledger, payment, and case signals to surface coordinated risk patterns across programs.' },
              { gradient: 'gradient-bg-4', title: 'Digital bank and wallet mule risk', body: 'Surface mule-linked accounts, wallets, and devices across onboarding, payment, and beneficiary activity.' },
              { gradient: 'gradient-bg-1', title: 'NBFC and digital lending fraud investigation', body: 'Surface mule-linked borrower networks, synthetic identity clusters, and coordinated application patterns for investigation.' },
              { gradient: 'gradient-bg-2', title: 'Selected bank and sponsor-bank oversight workflows', body: 'Support program and sponsor-bank oversight with connected, investigation-ready evidence across providers.' },
              { gradient: 'gradient-bg-3', title: 'Marketplace and commerce network risk', body: 'Surface seller, buyer, payout, and device-linked patterns in commerce environments where commerce risk resembles financial crime network risk.' },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <div className={`card-icon ${item.gradient}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg></div>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INPUTS: WHAT VERAFYE CAN ANALYZE ────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 2.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Inputs</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                What Verafye can analyze
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Inputs are configurable based on use case and available data. Not every team needs to supply every data type. Verafye connects the signals you can share to resolve entities, detect hidden networks, and form investigation-ready cases.
              </p>
            </div>
            <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
              {[
                'Fraud, AML, payment, identity, device, and behavior signals from existing systems',
                'KYC/KYB and watchlist signals where available',
                'Transaction, account, wallet, card, or ACH payment events where applicable',
                'Merchant, sub-merchant, and beneficiary records',
                'Ledger events and program-level metadata where applicable',
                'Sponsor-bank relationship metadata where available',
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

      {/* ── C. HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How It Works</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                A low-friction way to evaluate Verafye
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Select a focused use case', body: 'Choose a focused fraud, AML, or payment-risk scenario that matters to your team.' },
                { step: '02', title: 'Share a controlled dataset', body: 'Provide a controlled dataset or focused workflow. Inputs are configurable based on use case and available data.' },
                { step: '03', title: 'Run a focused network-risk review', body: 'Verafye processes the shared dataset, resolves entities, and forms investigation-ready cases across the agreed scope.' },
                { step: '04', title: 'Review findings with Verafye', body: 'Walk through the findings with our team and decide whether to expand into a deeper evaluation.' },
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

      {/* ── E. WHAT TEAMS RECEIVE ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Outcomes</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              What teams receive
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '64rem', margin: '0 auto' }}>
            {[
              { title: 'Risk cluster summary', body: 'A high-level view of connected risk clusters surfaced across your shared signals.' },
              { title: 'Linked entity view', body: 'A connected view of how related entities appear across the reviewed dataset.' },
              { title: 'Case-ready evidence', body: 'Investigation-ready evidence prepared for analyst and compliance review.' },
              { title: 'Audit-ready review notes', body: 'Explainable notes that support consistent, audit-ready decisions.' },
              { title: 'Recommended next-step areas', body: 'Suggested areas for further review, validation, or deeper evaluation.' },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem', display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.15rem' }}><path d="M20 6 9 17l-5-5"/></svg>
                <div>
                  <h3 style={{ fontSize: 'clamp(1rem,1.8vw,1.1875rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.375rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEASER: SAMPLE OUTPUT ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '46rem', textAlign: 'center' }}>
          <div className="card card-elevated" style={{ padding: 'clamp(2rem,4vw,3rem)', background: 'linear-gradient(165deg,#EFF6FF 0%,#F8FBFF 100%)', border: '1px solid rgba(30,111,183,0.15)' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Sample Output</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Want to see a sample Risk Shadowing output?
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '38rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Request a walkthrough of a synthetic example showing how Verafye can connect fragmented alerts, payment, identity, device, merchant, beneficiary, ledger, and case signals into a graph-linked investigation summary and audit-ready evidence pack.
            </p>
            <Link href="/request-demo?intent=sample-output-walkthrough" className="btn-primary">
              Request Sample Output Walkthrough
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem', fontStyle: 'italic' }}>
              Sample walkthroughs use synthetic data only and are shared during qualified discussions.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
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
              { q: 'Which teams is Risk Shadowing for?', a: 'Risk Shadowing is a low-friction evaluation motion for payment-led financial crime teams, including PSPs, PayFacs, MSBs, remittance platforms, BaaS and embedded finance providers, digital banks, NBFCs, and selected banks.' },
              { q: 'Does Verafye replace our existing fraud, AML, or oversight systems?', a: 'Risk Shadowing Review does not alter live workflows or require changes to existing systems. Verafye connects to agreed data feeds, resolves entities, detects hidden networks, and produces investigation-ready cases from the shared dataset. After evaluation, adoption is flexible: teams can integrate selected Verafye outputs into existing operational workflows, or expand into Verafye-led investigation, evidence, and decision operations as outcomes are proven.' },
              { q: 'What data do we need to provide?', a: 'Inputs are configurable based on use case and available data. You can start with a controlled dataset for a focused use case and expand coverage over time. Not every team needs to supply every data type.' },
              { q: 'Can we see a sample output?', a: 'Yes. Detailed sample outputs are shared during qualified walkthroughs using synthetic data only. Request a sample output walkthrough and our team will walk you through it.' },
            ].map(item => (
              <div key={item.q} className="card card-elevated" style={{ padding: '1.75rem 2rem' }}>
                <h3 style={{ fontSize: 'clamp(1rem,1.8vw,1.1875rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.q}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── F. FINAL CTA ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Validate hidden network risk against your own data
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '38rem', margin: '0 auto 1.25rem' }}>
            Start a Risk Shadowing Review on agreed data feeds from your environment. Built for payment-led financial crime teams across PSPs, PayFacs, MSBs, remittance platforms, BaaS and embedded finance, digital banks, NBFCs, and selected banks.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', maxWidth: '38rem', margin: '0 auto 2.5rem' }}>
            Detailed sample outputs are shared during qualified walkthroughs.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo?intent=risk-shadowing-review" className="btn-primary">
              Request a Risk Shadowing Review
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/request-demo?intent=sample-output-walkthrough" className="btn-secondary">Request Sample Output Walkthrough</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem', fontStyle: 'italic' }}>
            Verafye is designed to support fraud and AML investigation workflows in regulated financial environments. We do not claim regulatory approval, regulator certification, endorsement, or guaranteed fraud prevention.
          </p>
        </div>
      </section>
    </>
  );
}

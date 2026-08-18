import Link from 'next/link';

export const metadata = {
  title: { absolute: "Risk Shadowing Review for Fraud, AML and Payments Risk Teams" },
  description: "Test Verafye alongside existing fraud, AML, KYC, identity, payment, device, ledger, merchant, beneficiary, and case systems. Detect hidden network risk, connect fragmented signals, and produce investigation-ready evidence before deeper deployment.",
  keywords: [
    "risk shadowing review",
    "network risk intelligence",
    "fraud aml evaluation",
    "investigation-ready evidence",
    "graph-native risk detection",
    "payments risk evaluation",
  ],
  openGraph: {
    title: "Risk Shadowing Review for Fraud, AML and Payments Risk Teams",
    description: "Test Verafye alongside existing fraud, AML, KYC, identity, payment, device, ledger, merchant, beneficiary, and case systems. Detect hidden network risk, connect fragmented signals, and produce investigation-ready evidence before deeper deployment.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Risk Shadowing Review for Fraud, AML and Payments Risk Teams",
    description: "Test Verafye alongside existing fraud, AML, KYC, identity, payment, device, ledger, merchant, beneficiary, and case systems. Detect hidden network risk, connect fragmented signals, and produce investigation-ready evidence before deeper deployment.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/risk-shadowing-review',
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
              Prove incremental intelligence before changing your stack.
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '2rem', maxWidth: '46rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Run Verafye alongside your existing control environment on a bounded risk hypothesis and agreed data population. Compare what your institution already knows with the Connected-Risk Intelligence Verafye adds—and determine whether that additional context materially changes the investigation or decision.
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
              API-led integration on agreed data feeds. Initial connected-risk outputs may be available within approximately two weeks where agreed data is clean and ready for analysis.
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
              Risk Shadowing runs Verafye on agreed data alongside your existing controls — not in place of them. The output is a structured comparison: what the institution already knew, what Connected-Risk Intelligence adds, and whether that additional context is material to investigation or decision.
            </p>
            <div style={{ marginTop: '2rem', padding: '1.5rem 2rem', background: 'var(--bg-tint)', border: '1px solid var(--border)', borderRadius: '12px', textAlign: 'left', maxWidth: '42rem', margin: '2rem auto 0' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>Core Proof Question</p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.5, margin: 0 }}>
                "Did Verafye materially change what the institution knew or would have done?"
              </p>
            </div>
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
                Inputs are configurable based on use case and available data. Not every team needs to supply every data type. Verafye connects the signals you can share to resolve entities, surface relationship context across the agreed population, and form investigation-ready cases.
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
                A structured nine-step evaluation process
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '52rem', margin: '0 auto' }}>
              {[
                { step: '01', title: 'Risk Hypothesis', body: 'Define the specific risk question the review will address — a bounded, agreed hypothesis about where connected context may or may not add value.' },
                { step: '02', title: 'Existing Baseline', body: 'Document what the institution currently knows: existing alerts, decisions, and investigations across the agreed scope and data population.' },
                { step: '03', title: 'Data Qualification', body: 'Agree the data feeds, signal sources, and population to be included. Not every use case requires every data type.' },
                { step: '04', title: 'Defined Case Population', body: 'Establish the bounded case population Verafye will run against — aligned to the risk hypothesis.' },
                { step: '05', title: 'Risk Shadowing', body: 'Verafye processes the agreed data population alongside the institution\'s existing controls, resolving entities and producing connected-risk context.' },
                { step: '06', title: 'Analyst Review', body: 'Investigators review the Verafye output against the existing baseline — assessing whether connected context changes the investigation picture.' },
                { step: '07', title: 'Evidence Classification', body: 'Verafye findings are classified against the public evidence hierarchy: Contextual only / Relevant context / Material incremental intelligence / New risk discovery / Decision impact.' },
                { step: '08', title: 'Executive Proof Review', body: 'A structured review with institutional and Verafye leadership — presenting findings, evidence classification, and whether the core proof question is answered.' },
                { step: '09', title: 'Production Decision', body: 'Institution decides whether Verafye Connected-Risk Intelligence is production-ready for the scoped use case, based on evidence from the review.' },
              ].map(item => (
                <div key={item.step} className="card" style={{ padding: '1.5rem 2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0, minWidth: '2rem', paddingTop: '0.1rem' }}>{item.step}</div>
                  <div>
                    <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.375rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EVIDENCE HIERARCHY ───────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Evidence Classification</p>
              <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                Public evidence hierarchy
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', marginTop: '0.75rem', lineHeight: 1.7 }}>
                All Risk Shadowing findings are classified against a five-tier hierarchy. Evidence classification is shared with the institution at the Executive Proof Review.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { tier: '1', label: 'Contextual only', description: 'Verafye adds relationship context that is consistent with what the institution already knew — no change to investigation outcome.' },
                { tier: '2', label: 'Relevant context', description: 'Verafye surfaces additional context that is relevant but does not materially change the investigation or decision.' },
                { tier: '3', label: 'Material incremental intelligence', description: 'Verafye adds context that materially changes how the institution understands the risk — investigation scope or depth changes.' },
                { tier: '4', label: 'New risk discovery', description: 'Verafye surfaces risk the institution had not previously identified within the agreed case population.' },
                { tier: '5', label: 'Decision impact', description: 'Verafye context changes what the institution would have decided — disposition, escalation, or reporting outcome differs.' },
              ].map(item => (
                <div key={item.tier} style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-tint)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{item.tier}</div>
                  <div>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.25rem' }}>{item.label}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>{item.description}</p>
                  </div>
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
          <div style={{ marginBottom: '1.5rem', padding: '1rem 1.25rem', background: 'rgba(30,111,183,0.05)', borderRadius: '10px', border: '1px solid rgba(30,111,183,0.12)' }}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>
              <span style={{ fontWeight: 700, color: 'var(--primary)' }}>For institutions with established controls:</span> the most common starting point remains incremental Connected-Risk Intelligence around existing suspicion — beginning with the alerts you already have and proving connected intelligence before changing your stack.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Which teams is Risk Shadowing for?', a: 'Risk Shadowing is a low-friction evaluation motion for payment-led financial crime teams, including PSPs, PayFacs, MSBs, remittance platforms, BaaS and embedded finance providers, digital banks, NBFCs, and selected banks.' },
              { q: 'Does Verafye replace our existing fraud, AML, or oversight systems?', a: 'Risk Shadowing Review does not alter live workflows or require changes to existing systems. Verafye connects to agreed data feeds, resolves entities, surfaces connected relationships and potentially relevant network patterns for analyst review, and produces investigation-ready cases from the shared dataset. After evaluation, adoption is flexible: teams can integrate selected Verafye outputs into existing operational workflows, or expand into Verafye-led investigation, evidence, and decision operations as outcomes are proven.' },
              { q: 'What data do we need to provide?', a: 'Inputs are configurable based on use case and available data. You can start with a controlled dataset for a focused use case and expand coverage over time. Not every team needs to supply every data type.' },
              { q: 'Can Risk Shadowing also assess Verafye-native detection?', a: 'Yes. Where relevant, Risk Shadowing can compare Verafye-native detections with incumbent alerts as well as assess the connected intelligence produced around each. This can help determine whether Verafye should assume any detection responsibility in production.' },
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

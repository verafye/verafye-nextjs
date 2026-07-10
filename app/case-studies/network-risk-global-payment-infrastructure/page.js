import Link from 'next/link';

export const metadata = {
  title: "Embedding Network Risk Intelligence into Global Payment Infrastructure | Verafye Case Study",
  description: "How a regulated global payment infrastructure provider spanning multi-currency accounts, cross-border rails, card processing, and stablecoin capabilities embedded Verafye as its compliance intelligence layer.",
  keywords: ["payment infrastructure compliance", "multi-tenant payment risk", "stablecoin payment compliance", "global payment rails aml", "embedded compliance intelligence", "network risk infrastructure"],
  openGraph: {
    title: "Embedding Network Risk Intelligence into Global Payment Infrastructure | Verafye Case Study",
    description: "How a regulated global payment infrastructure provider spanning multi-currency accounts, cross-border rails, card processing, and stablecoin capabilities embedded Verafye as its compliance intelligence layer.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Embedding Network Risk Intelligence into Global Payment Infrastructure | Verafye Case Study",
    description: "How a regulated global payment infrastructure provider spanning multi-currency accounts, cross-border rails, card processing, and stablecoin capabilities embedded Verafye as its compliance intelligence layer.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/case-studies/network-risk-global-payment-infrastructure',
  },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

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

const CheckList = ({ items }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.25rem' }}>
    {items.map(item => (
      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <div style={{ flexShrink: 0, width: '1.25rem', height: '1.25rem', borderRadius: '50%', background: 'rgba(30,111,183,0.1)', border: '1px solid rgba(30,111,183,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.15rem' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
      </div>
    ))}
  </div>
);

export default function CaseStudyPage() {
  return (
    <>
      {/* BREADCRUMB */}
      <section style={{ background: '#fff', padding: '1.5rem 0 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/case-studies/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Case Studies</Link>
            <span>/</span>
            <span style={{ color: 'var(--body)' }}>Embedding Network Risk Intelligence into Global Payment Infrastructure</span>
          </nav>
        </div>
      </section>

      {/* HEADER */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 70%)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '4px', padding: '0.25rem 0.625rem' }}>
                Case Study
              </span>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Regulated Global Payment Infrastructure
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              Embedding Network Risk Intelligence into Global Payment Infrastructure
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem' }}>
              A payment infrastructure provider operating across multiple rails and jurisdictions must maintain a consistent risk and compliance view even when transactions pass through different partners, currencies, and payment methods. Individual KYC, sanctions, and transaction controls provide signals — but those signals need to be connected into an investigation-ready view.
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

            {/* CUSTOMER PROFILE */}
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.875rem', padding: '1.75rem 2rem', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Customer</p>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 500, marginBottom: '0.5rem' }}>
                A regulated global payment infrastructure provider
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, margin: 0 }}>
                Provides regulated global payment infrastructure spanning multi-currency accounts, domestic and cross-border payment rails, global payouts, alternative payment methods, card processing, and stablecoin-related payment capabilities. The platform connects multiple banking, payment, foreign-exchange, and identity providers through a multi-tenant, API-led infrastructure.
              </p>
            </div>

            {/* THE OPERATING CHALLENGE */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '0', letterSpacing: '-0.015em' }}>
              The Operating Challenge
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The challenge was not only to screen a customer or transaction at a single point in time. The platform needed to continuously understand:
            </p>
            <BulletList items={[
              'How customers and businesses are connected across rails, currencies, and partner relationships.',
              'Which counterparties receive or originate funds across the infrastructure.',
              'Whether activity is consistent across payment rails and operating entities.',
              'Whether several apparently separate events form part of the same pattern.',
              'What evidence supports a decision to approve, review, or escalate activity.',
              'How compliance controls can be extended consistently across white-label programs and clients.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Individual controls at onboarding, sanctions screening, and transaction level provided important signals. But those signals needed to be connected into an investigation-ready view that worked across the full platform, not just at individual touchpoints.
            </p>

            {/* THE VERAFYE APPROACH */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              The Verafye Approach
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye is incorporated within the platform&apos;s compliance technology environment as the Network Risk Intelligence and investigation layer. It complements identity and onboarding controls by connecting payment, customer, beneficiary, account, and risk information across the platform.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The deployment supports:
            </p>
            <CheckList items={[
              'Connected customer and counterparty analysis across rails and operating entities.',
              'Transaction and payout risk evaluation using configurable rules and network scoring.',
              'Relationship and network discovery — surfacing how customers, accounts, and counterparties are linked.',
              'Consolidation of related alerts and events into investigation cases.',
              'Investigation workflows with evidence capture and reviewer action logging.',
              'Explainable escalation rationale documented for each case.',
              'Audit-ready records across regulated operations.',
              'Extension of risk controls across a multi-tenant platform without duplicating infrastructure.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              This allows the platform to combine its payment infrastructure with an embedded risk-intelligence capability rather than relying solely on disconnected point controls.
            </p>

            {/* OPERATIONAL OUTCOME */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              The Operational Outcome
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The platform can provide customers and compliance teams with a more integrated view of payment and relationship risk across its infrastructure. The architecture creates a foundation for:
            </p>
            <CheckList items={[
              'Consistent controls across payment rails and customer programs.',
              'Connected investigations across customers, accounts, and counterparties.',
              'Clearer regulatory and audit evidence that can be reconstructed and reviewed.',
              'Faster introduction of new risk rules and scenarios as the platform evolves.',
              'Expansion of compliance capabilities as new payment partners and jurisdictions are added.',
              'Risk intelligence embedded within the payment platform experience rather than bolted on separately.',
            ]} />

            {/* DEPLOYMENT MODEL */}
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.875rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Deployment Model</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                Verafye is deployed through API-led integration alongside the existing payment and risk infrastructure. Implementation can begin with selected transaction flows or risk scenarios and expand progressively across rails, programs, and operating entities.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, margin: 0 }}>
                First connected-risk outputs can be produced within <strong style={{ color: 'var(--dark)' }}>1–2 weeks</strong> for the initial agreed scope, subject to data readiness and integration completion.
              </p>
            </div>

            {/* VERIFIED RESULT */}
            <div style={{ background: 'linear-gradient(135deg,#EFF6FF,#F0F9FF)', border: '2px solid rgba(30,111,183,0.2)', borderRadius: '0.875rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>Verified Result</p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flexShrink: 0 }}>
                  <p style={{ fontSize: 'clamp(2.25rem,5vw,3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, letterSpacing: '-0.03em', margin: 0 }}>&lt;2 wks</p>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', margin: '0.25rem 0 0' }}>time to first output</p>
                </div>
                <div style={{ flex: 1, minWidth: '14rem' }}>
                  <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 600, marginBottom: '0.5rem' }}>
                    First connected-risk outputs across primary payment rails within 2 weeks of integration commencement
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>
                    Network Risk Intelligence deployed alongside existing payment infrastructure through API-led integration, with risk rules and investigation workflows operationalised across initial tenant programs in the first phase — without requiring changes to core payment processing.
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '1.25rem', lineHeight: 1.6, margin: '1.25rem 0 0', fontStyle: 'italic' }}>
                Indicative deployment timeline based on API-led integration benchmarks. Actual figures to be confirmed jointly with production data.
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
                Embed risk intelligence across your payment infrastructure
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Verafye integrates alongside your existing rails and compliance systems — adding connected investigation intelligence without replacing point controls.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/risk-shadowing-review" className="btn-primary">Explore Risk Shadowing Review</Link>
              <Link href="/platform/" className="btn-secondary">Explore Platform</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MORE CASE STUDIES */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>More Case Studies</p>
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.015em' }}>
              How other regulated platforms use Verafye
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(18rem,1fr))', gap: '1.5rem' }}>
              {[
                { href: '/case-studies/connected-risk-global-payments-fx/', segment: 'Cross-Border Payments & FX', title: 'Connecting Risk Across Global Payment and Remittance Flows' },
                { href: '/case-studies/connected-risk-multi-method-payments/', segment: 'Multi-Method Payment Infrastructure', title: 'Building a Connected Risk View Across Alternative Payment Methods' },
              ].map(r => (
                <Link key={r.href} href={r.href} style={{ textDecoration: 'none', display: 'block' }} className="card-hover">
                  <div className="card card-elevated" style={{ padding: '1.75rem' }}>
                    <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{r.segment}</p>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1.35 }}>{r.title}</h3>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>Read case study {ARROW}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/case-studies/" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
                All case studies {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

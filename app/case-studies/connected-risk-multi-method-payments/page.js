import Link from 'next/link';

export const metadata = {
  title: "Building a Connected Risk View Across Alternative Payment Methods",
  description: "How a multi-method payment infrastructure provider uses Verafye to evaluate risk consistently across wallets, bank transfers, QR payments, and crypto channels spanning multiple markets.",
  keywords: ["alternative payment methods fraud", "multi-channel payment risk", "apm aml investigation", "payment infrastructure risk intelligence", "cross-channel fraud detection"],
  openGraph: {
    title: "Building a Connected Risk View Across Alternative Payment Methods",
    description: "How a multi-method payment infrastructure provider uses Verafye to evaluate risk consistently across wallets, bank transfers, QR payments, and crypto channels spanning multiple markets.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Building a Connected Risk View Across Alternative Payment Methods",
    description: "How a multi-method payment infrastructure provider uses Verafye to evaluate risk consistently across wallets, bank transfers, QR payments, and crypto channels spanning multiple markets.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/case-studies/connected-risk-multi-method-payments',
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
            <span style={{ color: 'var(--body)' }}>Building a Connected Risk View Across Alternative Payment Methods</span>
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
                Multi-Method Payment Infrastructure
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              Building a Connected Risk View Across Alternative Payment Methods
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem' }}>
              Payment risk becomes harder to investigate when transactions move across different countries, payment methods, currencies, processors, and local partners. A risk signal within one channel may be related to activity occurring through another wallet, account, merchant, or jurisdiction.
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
                A multi-method payment infrastructure and processing provider
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, margin: 0 }}>
                Provides payment-processing infrastructure and alternative payment methods across multiple markets, including mobile wallets, QR payments, bank transfers, cryptocurrency payments, and locally relevant payment channels.
              </p>
            </div>

            {/* THE OPERATING CHALLENGE */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '0', letterSpacing: '-0.015em' }}>
              The Operating Challenge
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              As payment coverage expanded across methods and markets, the risk team needed a consistent way to understand not only whether an individual event was unusual, but how it related to the broader payment network. Specific challenges included:
            </p>
            <BulletList items={[
              'Risk data distributed across multiple payment channels with no shared investigation context.',
              'Different payment methods exposing different fraud and compliance patterns.',
              'Merchants and counterparties operating across several markets under different identifiers.',
              'The same customer or beneficiary appearing through different identifiers across channels.',
              'Rule alerts lacking the context required to understand the wider relationship.',
              'Investigation teams manually combining data from multiple systems for each case.',
              'Escalation decisions becoming inconsistent across markets and programs.',
            ]} />

            {/* THE VERAFYE APPROACH */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              The Verafye Approach
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye is integrated into the platform&apos;s payment and compliance environment for connected-risk investigation. It resolves entities and maps relationships across transaction, merchant, customer, beneficiary, account, payment-method, and geographic signals into a common investigation context.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye enables the risk team to:
            </p>
            <CheckList items={[
              'Evaluate risk consistently across different payment methods from one connected investigation view.',
              'Connect activity across merchants, accounts, counterparties, and markets.',
              'Identify shared beneficiaries, devices, IP addresses, or payment attributes across channels.',
              'Detect unusual velocity, geographic, and behavioural patterns across the platform.',
              'Consolidate related alerts from multiple channels into a unified case.',
              'Apply configurable risk rules without rebuilding core payment workflows.',
              'Record investigation findings, evidence, and escalation reasoning in a structured format.',
              'Support audit and compliance review across multiple operating entities.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Verafye provides the connected intelligence required to investigate activity spanning those systems - building investigation-ready cases from the signals that transaction-processing and channel-specific controls already generate.
            </p>

            {/* OPERATIONAL OUTCOME */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              The Operational Outcome
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The platform gains a common investigation view for examining risk across payment methods, regions, and processing relationships. This enables:
            </p>
            <CheckList items={[
              'Greater consistency in risk evaluation across markets and payment channels.',
              'Faster reconstruction of activity across multiple payment methods.',
              'Better visibility into related merchants, customers, and counterparties.',
              'Reduced dependence on manually gathering evidence from separate systems.',
              'Clearer investigation and escalation trails across programs.',
              'A scalable framework for introducing additional payment methods and markets.',
            ]} />

            {/* DEPLOYMENT MODEL */}
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.875rem', padding: '1.75rem 2rem', marginBottom: '2rem', marginTop: '2.5rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Deployment Model</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                Verafye is deployed through API-led integration into the platform&apos;s payment and risk environment. The implementation can begin with selected transaction flows or risk scenarios and expand progressively across methods, markets, and operating entities.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, margin: 0 }}>
                First connected-risk outputs can be produced within <strong style={{ color: 'var(--dark)' }}>1–2 weeks</strong> for the initial agreed scope, subject to data readiness and integration completion.
              </p>
            </div>

            {/* DEPLOYMENT RESULT */}
            <div style={{ background: 'linear-gradient(135deg,#EFF6FF,#F0F9FF)', border: '2px solid rgba(30,111,183,0.2)', borderRadius: '0.875rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>Deployment Result</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 600, margin: 0 }}>
                  Significantly reduced manual investigation preparation time across payment channels
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>
                  Related alerts from multiple payment channels are consolidated into unified investigation cases, eliminating the need to manually pull and correlate data from separate channel systems before each investigation begins.
                </p>
              </div>
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
                Connect risk across your payment methods and markets
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Verafye connects risk signals across your payment and risk environment - building network-level investigation context from the signals your infrastructure already generates.
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
                { href: '/case-studies/network-risk-global-payment-infrastructure/', segment: 'Regulated Global Payment Infrastructure', title: 'Embedding Network Risk Intelligence into Global Payment Infrastructure' },
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

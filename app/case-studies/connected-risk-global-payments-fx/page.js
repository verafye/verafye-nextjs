import Link from 'next/link';

export const metadata = {
  title: "Connecting Risk Across Cross-Border Payment and Remittance Flows",
  description: "How a global cross-border payments and FX platform uses Verafye to connect sender, beneficiary, corridor, and transaction signals into investigation-ready cases.",
  keywords: ["cross-border payments fraud investigation", "remittance aml case study", "global fx platform risk intelligence", "beneficiary risk monitoring", "payment corridor aml"],
  openGraph: {
    title: "Connecting Risk Across Cross-Border Payment and Remittance Flows",
    description: "How a global cross-border payments and FX platform uses Verafye to connect sender, beneficiary, corridor, and transaction signals into investigation-ready cases.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Connecting Risk Across Cross-Border Payment and Remittance Flows",
    description: "How a global cross-border payments and FX platform uses Verafye to connect sender, beneficiary, corridor, and transaction signals into investigation-ready cases.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/case-studies/connected-risk-global-payments-fx',
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
            <span style={{ color: 'var(--body)' }}>Connecting Risk Across Global Payment and Remittance Flows</span>
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
                Cross-Border Payments &amp; FX
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              Connecting Risk Across Global Payment and Remittance Flows
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem' }}>
              Cross-border payment risk rarely exists within a single transaction. A transfer may appear legitimate when reviewed independently, while the broader relationship between the sender, beneficiary, account, payment corridor, and counterparties may indicate elevated risk.
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
                A global payments and foreign-exchange platform
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, margin: 0 }}>
                Helps businesses collect, convert, and send funds internationally through global payments, batch-payment processing, receivable accounts, and API-led payment infrastructure.
              </p>
            </div>

            {/* THE OPERATING CHALLENGE */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '0', letterSpacing: '-0.015em' }}>
              The Operating Challenge
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              As payment volumes and supported corridors expanded, the investigation team needed to answer questions that individual transaction alerts could not resolve:
            </p>
            <BulletList items={[
              'Are multiple customers sending funds to the same beneficiary?',
              'Is one business using several apparently unrelated accounts or counterparties?',
              'Are transaction amounts or frequencies inconsistent with the customer\'s expected activity?',
              'Are funds being split across transactions, currencies, or recipients?',
              'Does the same beneficiary appear across different customers, corridors, or payment batches?',
              'Is activity changing materially after onboarding?',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Traditional transaction alerts could identify individual rule breaches, but investigators still had to assemble the wider context manually — pulling from payment systems, KYC records, and prior case files separately.
            </p>

            {/* THE VERAFYE APPROACH */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              The Verafye Approach
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye is integrated into the platform&apos;s payment and compliance environment for connected-risk investigation. Payment, customer, beneficiary, and related risk signals are resolved into entities, mapped into networks, and built into investigation-ready cases across the platform.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye helps the investigation team:
            </p>
            <CheckList items={[
              'Link customers, businesses, beneficiaries, accounts, and transactions.',
              'Identify shared or recurring counterparties across corridors and currencies.',
              'Analyse payment behaviour and surface unusual concentration, velocity, and transaction patterns.',
              'Group related alerts into a single investigation context rather than individual queue items.',
              'Preserve the evidence and reasoning used during each investigation.',
              'Create an auditable trail for escalation and regulatory review.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Verafye adds relationship-level intelligence across the signals that payment, KYC, and AML systems generate - connecting fragmented outputs into investigation-ready cases.
            </p>

            {/* OPERATIONAL OUTCOME */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              The Operational Outcome
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The platform gains a more connected view of cross-border payment risk, enabling its team to investigate related activity together rather than reviewing every transaction or alert in isolation. The resulting investigation view provides:
            </p>
            <CheckList items={[
              'Faster access to the entities and transactions associated with an alert.',
              'Greater visibility into repeated beneficiary and counterparty relationships.',
              'More consistent investigation and escalation decisions.',
              'Better traceability of the evidence supporting a decision.',
              'A foundation for ongoing monitoring as customer behaviour changes.',
            ]} />

            {/* DEPLOYMENT MODEL */}
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.875rem', padding: '1.75rem 2rem', marginBottom: '2rem', marginTop: '2.5rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Deployment Model</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                Verafye is integrated through APIs into the platform&apos;s payment and compliance environment, with implementation beginning on agreed data feeds and expanding progressively.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, margin: 0 }}>
                First connected-risk outputs can be produced within <strong style={{ color: 'var(--dark)' }}>1–2 weeks</strong> of receiving the required data and completing integration validation.
              </p>
            </div>

            {/* DEPLOYMENT RESULT */}
            <div style={{ background: 'linear-gradient(135deg,#EFF6FF,#F0F9FF)', border: '2px solid rgba(30,111,183,0.2)', borderRadius: '0.875rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>Deployment Result</p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flexShrink: 0 }}>
                  <p style={{ fontSize: 'clamp(2.25rem,5vw,3rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, letterSpacing: '-0.03em', margin: 0 }}>~60%</p>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', marginTop: '0.25rem', margin: '0.25rem 0 0' }}>reduction</p>
                </div>
                <div style={{ flex: 1, minWidth: '14rem' }}>
                  <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 600, marginBottom: '0.5rem' }}>
                    Reduction in time required to assemble investigation context per case
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>
                    Following deployment, alerts are automatically enriched with connected sender, beneficiary, and counterparty context — reducing the manual data-gathering step that previously preceded each investigation.
                  </p>
                </div>
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
                See connected risk intelligence for your payment platform
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Expanding from agreed data feeds into Verafye-led investigation operations as outcomes are proven.
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
                { href: '/case-studies/connected-risk-multi-method-payments/', segment: 'Multi-Method Payment Infrastructure', title: 'Building a Connected Risk View Across Alternative Payment Methods' },
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

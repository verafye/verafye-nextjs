import Link from 'next/link';

export const metadata = {
  title: "Customer Case Studies",
  description: "See how regulated payment platforms use Verafye's Network Risk Intelligence to connect fragmented signals, surface hidden risk, and produce investigation-ready cases.",
  keywords: ["verafye case studies", "payment platform fraud investigation", "msb aml case study", "network risk intelligence customers", "fintech fraud aml platform"],
  openGraph: {
    title: "Customer Case Studies",
    description: "See how regulated payment platforms use Verafye's Network Risk Intelligence to connect fragmented signals, surface hidden risk, and produce investigation-ready cases.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Customer Case Studies",
    description: "See how regulated payment platforms use Verafye's Network Risk Intelligence to connect fragmented signals, surface hidden risk, and produce investigation-ready cases.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/case-studies',
  },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const cases = [
  {
    href: '/case-studies/connected-risk-global-payments-fx/',
    segment: 'Cross-Border Payments & FX',
    title: 'Connecting Risk Across Global Payment and Remittance Flows',
    summary: 'A global payments and foreign-exchange platform needed investigation-level visibility across senders, beneficiaries, corridors, and transaction patterns - connecting fragmented signals into investigation-ready cases.',
    challenge: 'Cross-border payment risk rarely exists within a single transaction. Investigators were manually assembling context across disconnected systems.',
    outcome: 'Faster access to connected entity and transaction context. Greater visibility into repeated beneficiary and counterparty relationships. More consistent escalation decisions.',
    gradient: 'gradient-bg-1',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    href: '/case-studies/connected-risk-multi-method-payments/',
    segment: 'Multi-Method Payment Infrastructure',
    title: 'Building a Connected Risk View Across Alternative Payment Methods',
    summary: 'A multi-method payment infrastructure provider needed consistent risk evaluation across wallets, bank transfers, QR payments, and crypto channels spanning multiple markets.',
    challenge: 'Risk data was distributed across multiple payment channels. The same customer or beneficiary appeared through different identifiers. Investigation teams manually combined data from multiple systems.',
    outcome: 'Consistent risk evaluation across payment methods. Faster reconstruction of activity across channels. Clearer investigation and escalation trails.',
    gradient: 'gradient-bg-4',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
  },
  {
    href: '/case-studies/network-risk-global-payment-infrastructure/',
    segment: 'Regulated Global Payment Infrastructure',
    title: 'Embedding Network Risk Intelligence into Global Payment Infrastructure',
    summary: 'A regulated global payment infrastructure provider spanning multi-currency accounts, cross-border rails, card processing, and stablecoin capabilities integrated Verafye for connected-risk investigation across its compliance environment.',
    challenge: 'Individual KYC, sanctions, and transaction controls provided signals, but those signals needed to be connected into an investigation-ready view across a multi-tenant platform.',
    outcome: 'Consistent controls across payment rails and customer programs. Connected investigations across customers, accounts, and counterparties. Risk intelligence embedded within the payment platform experience.',
    gradient: 'gradient-bg-2',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
      </svg>
    ),
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)', padding: '4rem 0 3.5rem' }}>
        <div className="container" style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <p className="eyebrow animate-fade-up" style={{ marginBottom: '1rem' }}>Case Studies</p>
          <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 800, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Connected-Risk Intelligence in Payment Environments
          </h1>
          <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', maxWidth: '44rem', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Examples of how Verafye connects fragmented risk signals into investigation-ready cases across regulated payment and money-movement environments.
          </p>
          <div className="animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            <Link href="/risk-shadowing-review" className="btn-primary">
              Explore Risk Shadowing Review
              <span className="btn-arrow" style={{ marginLeft: '0.375rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/platform" className="btn-secondary">Explore Platform</Link>
          </div>
        </div>
      </section>

      {/* CASE STUDY CARDS */}
      <section style={{ padding: '4rem 0 5rem', background: 'var(--bg-tint)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '72rem', margin: '0 auto' }}>
            {cases.map((c) => (
              <Link key={c.href} href={c.href} style={{ textDecoration: 'none', display: 'block' }} className="card-hover">
                <div className="card card-elevated" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'center' }}>
                  <div className={`card-icon lg ${c.gradient}`} style={{ flexShrink: 0, margin: 0 }}>{c.icon}</div>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{c.segment}</p>
                    <h2 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.3, letterSpacing: '-0.015em' }}>{c.title}</h2>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>{c.summary}</p>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                      <div>
                        <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Challenge</p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6, maxWidth: '26rem' }}>{c.challenge}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary)', whiteSpace: 'nowrap' }}>
                    Read case study {ARROW}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '52rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Get Started</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,3rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
            See how Verafye fits your environment
          </h2>
          <p style={{ fontSize: 'clamp(0.9375rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            A Risk Shadowing Review produces your first connected-risk outputs within 1–2 weeks, beginning with agreed data feeds and expanding into Verafye-led investigation operations as outcomes are proven.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/risk-shadowing-review" className="btn-primary">
              Explore Risk Shadowing Review
              <span className="btn-arrow" style={{ marginLeft: '0.375rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

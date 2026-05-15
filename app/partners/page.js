import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata = {
  title: "Partners | Verafye",
  description: "Explore Verafye's partner ecosystem - consulting, technology, and integration partners supporting fraud and AML investigation intelligence for regulated financial platforms.",
  openGraph: {
    title: "Partners | Verafye",
    description: "Explore Verafye's partner ecosystem - consulting, technology, and integration partners supporting fraud and AML investigation intelligence for regulated financial platforms.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Partners | Verafye",
    description: "Explore Verafye's partner ecosystem - consulting, technology, and integration partners supporting fraud and AML investigation intelligence for regulated financial platforms.",
  },
};

export default function PartnersPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Partners &amp; Alliances</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Partner with Verafye
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Collaborate with Verafye to bring connected investigation intelligence to regulated payment platforms, fintechs, digital banks, and financial institutions globally.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              We work with strategic partners, system integrators, and ecosystem players to deliver scalable fraud, risk, and AML intelligence solutions.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/become-a-partner" className="btn-primary">
                Become a Partner
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" className="btn-secondary">Request Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY PARTNER WITH VERAFYE ─────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Opportunity</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Partner with Verafye
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                  </svg>
                ),
                title: 'Intelligent Investigation Layer',
                body: 'Verafye is purpose-built for the investigation infrastructure modernisation cycle underway across banks, payment processors, and fintech platforms - giving partners a differentiated, in-demand solution to bring to market.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
                  </svg>
                ),
                title: 'Graph-Based Intelligence Differentiation',
                body: 'Graph-native detection and investigation intelligence represents a genuine architectural differentiation in the financial crime market - providing partners with a compelling, technically distinctive proposition across fraud, AML, and payments conversations.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                ),
                title: 'Fast Deployment and Integration',
                body: 'Verafye connects existing risk signals into investigation-ready workflows built on the Verafye platform. Teams start with selected signal sources and expand over time - making partner-led deployments faster to scope, execute, and demonstrate value from.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                  </svg>
                ),
                title: 'Strong Relevance Across PSPs, Fintechs, and Financial Institutions',
                body: 'The Verafye platform addresses a common set of challenges across regulated payment platforms, fintech payment ecosystems, digital banks, and financial institutions - giving partners a broad addressable market and the ability to apply a consistent solution across diverse customer portfolios.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                ),
                title: 'Flexible Commercial Models',
                body: 'Verafye works with partners to develop commercial arrangements appropriate to the partnership model - whether resale, referral, co-sell, or deeper strategic collaboration - with flexibility designed to support sustainable, long-term partner relationships.',
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

      {/* ── 3. PARTNERSHIP MODELS ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How We Work Together</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Partnership Models
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/>
                  </svg>
                ),
                title: 'Channel and Reseller Partners',
                body: 'Channel and reseller partners bring Verafye to financial institutions within their existing customer base or regional focus - selling, co-selling, or distributing the Verafye platform with commercial terms designed to support scalable, repeatable partner revenue.',
                tags: ['Resale', 'Co-sell', 'Regional distribution'],
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
                  </svg>
                ),
                title: 'System Integrators',
                body: 'System integrators implement and integrate Verafye within broader financial crime technology programmes - connecting the platform to existing fraud, AML, payments, and case management infrastructure as part of large-scale institutional transformation projects.',
                tags: ['Implementation', 'Integration', 'Programme delivery'],
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
                  </svg>
                ),
                title: 'Technology and Platform Partnerships',
                body: 'Technology partners integrate Verafye capabilities into their own platforms or connect their technology into the Verafye intelligence layer - creating joint solutions that extend value for mutual customers across fraud, AML, and payments workflows.',
                tags: ['API integration', 'Joint solutions', 'Ecosystem'],
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Strategic Alliances',
                body: 'Strategic alliances are built with organisations sharing a common vision around financial crime infrastructure modernisation - including joint go-to-market programmes, co-developed solutions, and collaborative engagement across target markets and customer segments.',
                tags: ['Joint GTM', 'Co-development', 'Strategic alignment'],
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{item.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {item.tags.map(tag => (
                    <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHO WE PARTNER WITH ───────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Partner Types</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Who We Work With
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
                  </svg>
                ),
                title: 'System Integrators',
                body: 'Large and mid-tier SIs delivering financial crime, compliance, and risk technology programmes to banks and financial institutions - looking for modern, integrable fraud and AML intelligence platforms.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/>
                  </svg>
                ),
                title: 'Banking Technology Providers',
                body: 'Core banking, digital banking, and financial infrastructure providers whose customers - mid-market banks, community banks, and regional financial institutions - face growing financial crime and compliance demands.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Consulting Firms',
                body: 'Risk, compliance, and financial crime consulting firms advising banks, fintechs, and payment platforms on infrastructure modernisation, regulatory response, and operational improvement programmes.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                  </svg>
                ),
                title: 'Regional Distribution Partners',
                body: 'Partners with established relationships and market presence in specific geographies - enabling Verafye to reach financial institutions across regional markets through trusted, locally-connected distribution channels.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW PARTNERSHIPS WORK ─────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Working Together</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                How We Work with Partners
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye partners across the full collaboration lifecycle - from initial go-to-market alignment through sales enablement, deployment support, and ongoing commercial partnership.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  step: '01',
                  title: 'Joint Go-to-Market',
                  body: 'Verafye works with partners to develop joint go-to-market programmes aligned to shared target segments - including payment processors, PSPs, fintech payment platforms, digital banks, and financial institutions. Joint positioning, outreach, and pipeline development are supported from the outset of the partnership.',
                },
                {
                  step: '02',
                  title: 'Sales Enablement',
                  body: 'Partners receive the enablement support needed to represent the Verafye platform confidently - including platform training, positioning materials, solution briefings, and access to Verafye subject matter expertise for customer conversations and technical evaluations.',
                },
                {
                  step: '03',
                  title: 'Flexible Commercial Arrangements',
                  body: 'Commercial arrangements are developed to suit the partnership model - whether referral, resale, co-sell, or deeper strategic collaboration. Verafye is committed to commercial structures that support sustainable partner economics and long-term relationship value.',
                },
                {
                  step: '04',
                  title: 'Collaboration Across the Customer Lifecycle',
                  body: 'Partnership engagement extends through the full customer lifecycle - from pre-sales and proof of concept through deployment, go-live, and ongoing account management. Verafye works alongside partners to support successful customer outcomes at every stage.',
                },
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

      {/* ── 6. FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--dark)' }}>
        <div className="container" style={{ maxWidth: '52rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
            Ready to build with Verafye?
          </h2>
          <p style={{ fontSize: 'clamp(0.9375rem,1.8vw,1.125rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Explore how we can partner to deliver modern fraud, AML, and payment intelligence solutions to regulated payment platforms, fintechs, and financial institutions.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/become-a-partner" className="btn-primary" style={{ background: '#fff', color: 'var(--primary)' }}>
              Become a Partner
              <span style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/request-demo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '8px', padding: '0.75rem 1.5rem', transition: 'border-color 0.15s' }}>
              Request Demo
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
